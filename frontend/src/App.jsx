import React, { useState, useEffect, useRef } from 'react'
import Dashboard from './components/Dashboard'
import CoolingDiagramImage from './components/CoolingDiagramImage'
import DynamicSVGDiagram from './components/DynamicSVGDiagram'
import FanDiagram from './components/FanDiagram'
import PumpControl from './components/PumpControl'
import TrendChart from './components/TrendChart'
import AlarmPanel from './components/AlarmPanel'
import Settings from './components/Settings'
import AdvancedControl from './components/AdvancedControl'
import History from './components/History'
import './App.css'

function App() {
  // State 관리
  const [sensors, setSensors] = useState({})
  const [pumps, setPumps] = useState([])
  const [fans, setFans] = useState([])
  const [equipment, setEquipment] = useState([])
  const [alarms, setAlarms] = useState([])
  const [alarmSummary, setAlarmSummary] = useState({})
  const [connected, setConnected] = useState(false)
  const [ws, setWs] = useState(null)
  const [activeTab, setActiveTab] = useState('dashboard')

  // 경고음 관련 상태
  const [audioContext, setAudioContext] = useState(null)
  const [alarmSoundMuted, setAlarmSoundMuted] = useState(false) // Mute 상태
  const prevAlarmIdsRef = useRef(new Set())
  const isFirstRenderRef = useRef(true)
  const alarmSoundIntervalRef = useRef(null) // 연속 경고음 인터벌
  const alarmsRef = useRef([]) // 최신 alarms 상태를 참조하기 위한 ref

  // AudioContext 초기화
  useEffect(() => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    console.log('🎵 [App] AudioContext 생성됨, 초기 상태:', ctx.state)

    // 즉시 AudioContext를 활성화 시도
    const initAudio = async () => {
      try {
        await ctx.resume()
        console.log('🔊 [App] AudioContext 즉시 활성화 시도:', ctx.state)
      } catch (error) {
        console.log('⚠️ [App] AudioContext 즉시 활성화 실패, 사용자 인터랙션 필요')
      }
    }
    initAudio()
    setAudioContext(ctx)

    // 사용자 인터랙션으로 AudioContext 활성화
    const resumeAudio = async () => {
      console.log('👆 [App] 사용자 인터랙션 감지, AudioContext 상태:', ctx.state)
      if (ctx.state === 'suspended') {
        await ctx.resume()
        console.log('🔊 [App] AudioContext 활성화됨')

        // AudioContext 활성화 후 미확인 알람이 있으면 경고음 시작
        if (alarms.some(a => !a.acknowledged) && !alarmSoundIntervalRef.current) {
          console.log('🔔 [App] AudioContext 활성화 후 경고음 시작')
          startContinuousAlarmSound()
        }
      }
    }

    document.addEventListener('click', resumeAudio, { once: true })
    document.addEventListener('keydown', resumeAudio, { once: true })

    return () => {
      document.removeEventListener('click', resumeAudio)
      document.removeEventListener('keydown', resumeAudio)
      if (ctx) ctx.close()
    }
  }, [])

  useEffect(() => {
    // WebSocket 연결
    connectWebSocket()

    return () => {
      if (ws) {
        ws.close()
      }
    }
  }, [])

  // 경고음 재생 함수 (한 번의 비프음 패턴)
  const playAlarmSoundOnce = async () => {
    if (!audioContext || alarmSoundMuted) {
      return
    }

    try {
      if (audioContext.state === 'suspended') {
        await audioContext.resume()
      }

      // alarmsRef에서 최신 알람 목록 가져오기
      const currentAlarms = alarmsRef.current
      const unacknowledgedAlarms = currentAlarms.filter(a => !a.acknowledged)
      const hasCritical = unacknowledgedAlarms.some(a => a.level === 'critical')
      const hasWarning = unacknowledgedAlarms.some(a => a.level === 'warning')

      // Critical: 연속 3번, Warning: 2번, Info: 1번
      let beepCount = 1
      if (hasCritical) {
        beepCount = 3
      } else if (hasWarning) {
        beepCount = 2
      }

      console.log(`🔊 [App] 경고음 재생: ${beepCount}번 (Critical: ${hasCritical}, Warning: ${hasWarning}, 총 미확인: ${unacknowledgedAlarms.length})`)

      // 비프음 재생
      for (let i = 0; i < beepCount; i++) {
        setTimeout(() => {
          const oscillator = audioContext.createOscillator()
          const gainNode = audioContext.createGain()

          oscillator.connect(gainNode)
          gainNode.connect(audioContext.destination)

          oscillator.frequency.value = 880
          oscillator.type = 'sine'

          gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15)

          oscillator.start(audioContext.currentTime)
          oscillator.stop(audioContext.currentTime + 0.15)
        }, i * 200)
      }
    } catch (error) {
      console.error('❌ [App] 경고음 재생 오류:', error)
    }
  }

  // 연속 경고음 시작
  const startContinuousAlarmSound = () => {
    console.log('🔊 [App] 연속 경고음 시작')

    // 기존 인터벌 정리
    if (alarmSoundIntervalRef.current) {
      clearInterval(alarmSoundIntervalRef.current)
    }

    // 즉시 한 번 재생
    playAlarmSoundOnce()

    // 2초마다 반복 재생
    alarmSoundIntervalRef.current = setInterval(() => {
      playAlarmSoundOnce()
    }, 2000)
  }

  // 연속 경고음 정지
  const stopContinuousAlarmSound = () => {
    console.log('🔇 [App] 연속 경고음 정지')
    if (alarmSoundIntervalRef.current) {
      clearInterval(alarmSoundIntervalRef.current)
      alarmSoundIntervalRef.current = null
    }
  }

  // Mute 토글 함수
  const toggleAlarmMute = () => {
    setAlarmSoundMuted(!alarmSoundMuted)
    if (!alarmSoundMuted) {
      // Mute 활성화 시 경고음 정지
      stopContinuousAlarmSound()
    } else {
      // Mute 해제 시 미확인 알람이 있으면 경고음 재시작
      const hasUnacknowledged = alarms.some(a => !a.acknowledged)
      if (hasUnacknowledged) {
        startContinuousAlarmSound()
      }
    }
  }

  // alarms 상태가 변경될 때마다 alarmsRef 업데이트
  useEffect(() => {
    alarmsRef.current = alarms
  }, [alarms])

  // 알람 감지 및 연속 경고음 관리
  useEffect(() => {
    const hasUnacknowledged = alarms.some(a => !a.acknowledged)

    // 상세 디버그 로그
    console.log('🔍 [App] 알람 상태 체크:', {
      총알람: alarms.length,
      미확인알람: hasUnacknowledged,
      muted: alarmSoundMuted,
      audioContext: !!audioContext,
      intervalActive: !!alarmSoundIntervalRef.current
    })

    // 알람 상세 정보 출력
    console.log('📋 [App] 알람 목록:', alarms.map(a => ({
      id: a.id,
      tag: a.tag,
      message: a.message,
      acknowledged: a.acknowledged
    })))

    if (hasUnacknowledged && audioContext && !alarmSoundMuted) {
      // 미확인 알람이 있는데 경고음이 울리지 않고 있으면 시작
      if (!alarmSoundIntervalRef.current) {
        console.log('🔊 [App] 미확인 알람 감지 - 연속 경고음 시작')
        startContinuousAlarmSound()
      }
    } else {
      // 미확인 알람이 없으면 경고음 정지
      if (alarmSoundIntervalRef.current) {
        console.log('✅ [App] 모든 알람 확인됨 - 경고음 정지')
        stopContinuousAlarmSound()
      }
    }

    // Cleanup: 컴포넌트 언마운트 시 경고음 정지
    return () => {
      if (alarmSoundIntervalRef.current) {
        stopContinuousAlarmSound()
      }
    }
  }, [alarms, audioContext, alarmSoundMuted])

  const connectWebSocket = () => {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
    const wsUrl = `${protocol}//${window.location.hostname}:8000/ws`

    console.log('WebSocket 연결 시도:', wsUrl)
    const websocket = new WebSocket(wsUrl)

    websocket.onopen = () => {
      console.log('✅ WebSocket 연결 성공')
      setConnected(true)
    }

    websocket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        if (data.type === 'realtime_update') {
          setSensors(data.sensors)
          setEquipment(data.equipment || [])
          setPumps(data.pumps || data.equipment?.slice(0, 6) || [])
          setFans(data.equipment?.slice(6, 10) || [])
          setAlarms(data.alarms || [])
          setAlarmSummary(data.alarm_summary || {})
        }
      } catch (error) {
        console.error('WebSocket 메시지 파싱 오류:', error)
      }
    }

    websocket.onerror = (error) => {
      console.error('❌ WebSocket 오류:', error)
      setConnected(false)
    }

    websocket.onclose = () => {
      console.log('WebSocket 연결 종료, 5초 후 재연결...')
      setConnected(false)
      setTimeout(connectWebSocket, 5000)
    }

    setWs(websocket)
  }

  const sendEquipmentCommand = async (equipmentName, command) => {
    try {
      console.log(`🔧 장비 명령 전송 시도: equipment=${equipmentName}, command=${command}`)

      const response = await fetch('http://localhost:8000/api/equipment/command', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          equipment_name: equipmentName,
          command: command
        })
      })

      console.log(`📡 응답 상태: ${response.status}`)

      if (!response.ok) {
        const errorText = await response.text()
        console.error('❌ HTTP 오류:', response.status, errorText)
        alert(`명령 전송 실패: ${response.status}`)
        return false
      }

      const result = await response.json()
      console.log('📦 응답 데이터:', result)

      if (result.success) {
        console.log(`✅ ${equipmentName} ${command} 명령 성공`)
        return true
      } else {
        console.error('❌ 장비 명령 실패:', result)
        alert('명령 전송 실패')
        return false
      }
    } catch (error) {
      console.error('❌ 장비 명령 오류:', error)
      alert(`오류 발생: ${error.message}`)
      return false
    }
  }

  // 하위 호환성을 위한 펌프 명령 함수
  const sendPumpCommand = async (pumpIndex, command) => {
    const pumpNames = ["SWP1", "SWP2", "SWP3", "FWP1", "FWP2", "FWP3"]
    if (pumpIndex >= 0 && pumpIndex < 6) {
      return await sendEquipmentCommand(pumpNames[pumpIndex], command)
    }
    return false
  }

  return (
    <div className="app">
      {/* 헤더 */}
      <header className="app-header">
        <h1>🚢 ESS HMI - Energy Saving System</h1>
        <div className="status-indicator">
          <span className={`status-dot ${connected ? 'connected' : 'disconnected'}`}></span>
          <span>{connected ? 'PLC 연결됨' : 'PLC 연결 안됨'}</span>
        </div>
      </header>

      {/* 탭 네비게이션 */}
      <nav className="tab-nav">
        <button 
          className={activeTab === 'dashboard' ? 'active' : ''}
          onClick={() => setActiveTab('dashboard')}
        >
          📊 대시보드
        </button>
              <button
                className={activeTab === 'diagram' ? 'active' : ''}
                onClick={() => setActiveTab('diagram')}
              >
                🔧 배관 계통도
              </button>
        <button
          className={activeTab === 'fan_diagram' ? 'active' : ''}
          onClick={() => setActiveTab('fan_diagram')}
        >
          🌀 E/R 환기
        </button>
        <button
          className={activeTab === 'control' ? 'active' : ''}
          onClick={() => setActiveTab('control')}
        >
          ⚙️ 펌프 제어
        </button>
        <button
          className={activeTab === 'fan' ? 'active' : ''}
          onClick={() => setActiveTab('fan')}
        >
          🌀 팬 제어
        </button>
        <button
          className={activeTab === 'advanced' ? 'active' : ''}
          onClick={() => setActiveTab('advanced')}
        >
          🎛️ 고급 제어
        </button>
        <button 
          className={activeTab === 'settings' ? 'active' : ''}
          onClick={() => setActiveTab('settings')}
        >
          ⚙️ 설정
        </button>
        <button 
          className={activeTab === 'trend' ? 'active' : ''}
          onClick={() => setActiveTab('trend')}
        >
          📈 트렌드
        </button>
        <button 
          className={activeTab === 'history' ? 'active' : ''}
          onClick={() => setActiveTab('history')}
        >
          📋 이력
        </button>
        <button
          className={`${activeTab === 'alarm' ? 'active' : ''} ${alarms.some(a => !a.acknowledged) ? 'has-unack-alarms' : ''}`}
          onClick={() => setActiveTab('alarm')}
        >
          🔔 알람
        </button>
      </nav>

      {/* 메인 컨텐츠 */}
      <main className="app-content">
        {activeTab === 'dashboard' && (
          <Dashboard sensors={sensors} equipment={equipment} pumps={pumps} fans={fans} />
        )}
        {activeTab === 'diagram' && (
          <DynamicSVGDiagram
            sensors={sensors}
            equipment={equipment}
            pumps={pumps}
            fans={fans}
            onCommand={sendEquipmentCommand}
            onPumpCommand={sendPumpCommand}
          />
        )}
        {activeTab === 'fan_diagram' && (
          <FanDiagram
            sensors={sensors}
            fans={fans}
            equipment={equipment}
            onCommand={sendEquipmentCommand}
          />
        )}
        {activeTab === 'control' && (
          <PumpControl
            pumps={pumps}
            onCommand={sendEquipmentCommand}
            onPumpCommand={sendPumpCommand}
          />
        )}
        {activeTab === 'fan' && (
          <PumpControl
            pumps={fans}
            isFanMode={true}
            onCommand={sendEquipmentCommand}
          />
        )}
        {activeTab === 'advanced' && (
          <AdvancedControl
            equipment={equipment}
            pumps={pumps}
            fans={fans}
            onCommand={sendEquipmentCommand}
          />
        )}
        {activeTab === 'settings' && (
          <Settings />
        )}
        {activeTab === 'trend' && (
          <TrendChart sensors={sensors} equipment={equipment} pumps={pumps} fans={fans} />
        )}
        {activeTab === 'history' && (
          <History />
        )}
        {activeTab === 'alarm' && (
          <AlarmPanel
            alarms={alarms}
            alarmSummary={alarmSummary}
            alarmSoundMuted={alarmSoundMuted}
            onToggleMute={toggleAlarmMute}
          />
        )}
      </main>

      {/* 푸터 */}
      <footer className="app-footer">
        <span>© 2025 ESS HMI System</span>
        <span>마지막 업데이트: {new Date().toLocaleTimeString('ko-KR')}</span>
      </footer>
    </div>
  )
}

export default App

