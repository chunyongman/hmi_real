import React, { useState, useEffect } from 'react'
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
  const [sensors, setSensors] = useState({})
  const [pumps, setPumps] = useState([])
  const [fans, setFans] = useState([])
  const [equipment, setEquipment] = useState([])
  const [alarms, setAlarms] = useState([])
  const [alarmSummary, setAlarmSummary] = useState({})
  const [connected, setConnected] = useState(false)
  const [ws, setWs] = useState(null)
  const [activeTab, setActiveTab] = useState('dashboard')

  useEffect(() => {
    // WebSocket 연결
    connectWebSocket()

    return () => {
      if (ws) {
        ws.close()
      }
    }
  }, [])

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
          <AlarmPanel alarms={alarms} alarmSummary={alarmSummary} />
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

