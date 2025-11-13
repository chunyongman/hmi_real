import React, { useState, useEffect, useRef } from 'react'
import './AlarmPanel.css'

function AlarmPanel({ alarms: alarmsProp, alarmSummary }) {
  const [localAlarms, setLocalAlarms] = useState([])
  const [prevAlarmIds, setPrevAlarmIds] = useState(new Set())
  const [audioContext, setAudioContext] = useState(null)
  const [isInitialized, setIsInitialized] = useState(false)
  const pendingAckRef = useRef(new Set()) // 확인 요청 중인 알람 ID (중복 요청 방지용)

  // Web Audio API 초기화 및 사용자 인터랙션으로 활성화
  useEffect(() => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    console.log('🎵 AudioContext 생성됨, 초기 상태:', ctx.state)
    setAudioContext(ctx)

    // 사용자 인터랙션으로 AudioContext 활성화
    const resumeAudio = async () => {
      console.log('👆 사용자 인터랙션 감지, AudioContext 상태:', ctx.state)
      if (ctx.state === 'suspended') {
        await ctx.resume()
        console.log('🔊 AudioContext 활성화됨, 현재 상태:', ctx.state)
      } else {
        console.log('✅ AudioContext 이미 활성화 상태:', ctx.state)
      }
    }

    // 페이지의 어떤 클릭이든 AudioContext를 활성화
    document.addEventListener('click', resumeAudio, { once: true })
    document.addEventListener('keydown', resumeAudio, { once: true })

    return () => {
      document.removeEventListener('click', resumeAudio)
      document.removeEventListener('keydown', resumeAudio)
      if (ctx) ctx.close()
    }
  }, [])

  // 경고음 재생 함수
  const playAlarmSound = async () => {
    console.log('🔔 playAlarmSound 호출됨')

    if (!audioContext) {
      console.warn('⚠️ AudioContext가 초기화되지 않음')
      return
    }

    console.log('📊 AudioContext 상태:', audioContext.state)

    try {
      // AudioContext를 resume (브라우저 정책 때문에 필요)
      if (audioContext.state === 'suspended') {
        console.log('🔄 AudioContext suspended 상태, resume 시도 중...')
        await audioContext.resume()
        console.log('✅ AudioContext resume 완료, 현재 상태:', audioContext.state)
      }

      console.log('🔊 경고음 재생 시작 (3번의 비프음)')

      // 긴급 경고음 (3번의 짧은 비프음)
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          console.log(`🎵 비프음 ${i + 1}/3 재생`)
          const oscillator = audioContext.createOscillator()
          const gainNode = audioContext.createGain()

          oscillator.connect(gainNode)
          gainNode.connect(audioContext.destination)

          oscillator.frequency.value = 880 // A5 음
          oscillator.type = 'sine'

          gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)

          oscillator.start(audioContext.currentTime)
          oscillator.stop(audioContext.currentTime + 0.2)
        }, i * 300)
      }
    } catch (error) {
      console.error('❌ 경고음 재생 오류:', error)
    }
  }

  // WebSocket을 통해 받은 알람 데이터 사용, 없으면 빈 배열
  useEffect(() => {
    console.log('📥 alarmsProp 업데이트됨:', alarmsProp?.length, '개 알람')

    if (alarmsProp && Array.isArray(alarmsProp)) {
      // 백엔드를 신뢰하고 그대로 사용 (백엔드에서 acknowledged=false만 보냄)
      const currentAlarms = alarmsProp

      console.log('🔍 현재 알람:', currentAlarms.length, '개')
      console.log('📋 현재 알람 ID:', currentAlarms.map(a => a.id))

      // 현재 알람 ID 세트 생성
      const currentAlarmIds = new Set(currentAlarms.map(alarm => alarm.id))

      // 새로운 알람 찾기 (이전에 없던 ID만, 확인 처리 중이 아닌 것만)
      const newAlarms = currentAlarms.filter(
        alarm => !prevAlarmIds.has(alarm.id) && !pendingAckRef.current.has(alarm.id)
      )

      console.log('🆕 새 알람:', newAlarms.length, '개', newAlarms.map(a => a.id))
      console.log('🔒 확인 처리 중인 알람:', Array.from(pendingAckRef.current))
      console.log('📊 상태 - isInitialized:', isInitialized, 'audioContext:', !!audioContext)

      // 새 알람이 있으면 경고음 재생
      if (newAlarms.length > 0 && audioContext) {
        console.log('🔔 새 알람 감지! 경고음 재생', newAlarms.map(a => a.id))
        playAlarmSound()
      } else if (newAlarms.length === 0) {
        console.log('ℹ️ 새 알람 없음 (기존 알람 또는 확인 처리 중)')
      }

      setLocalAlarms(currentAlarms)
      setPrevAlarmIds(currentAlarmIds)

      // 첫 로드 완료 표시
      if (!isInitialized) {
        console.log('✅ 첫 로드 완료, isInitialized = true')
        setIsInitialized(true)
      }
    }
  }, [alarmsProp])

  const alarms = localAlarms

  const getAlarmIcon = (level) => {
    switch (level) {
      case 'critical': return '🔴'
      case 'warning': return '🟡'
      case 'info': return '🟢'
      default: return '⚪'
    }
  }

  const getAlarmClass = (level) => {
    switch (level) {
      case 'critical': return 'alarm-critical'
      case 'warning': return 'alarm-warning'
      case 'info': return 'alarm-info'
      default: return 'alarm-normal'
    }
  }

  const handleAcknowledge = async (alarmId) => {
    // 중복 요청 방지
    if (pendingAckRef.current.has(alarmId)) {
      console.log('⏳ 이미 확인 요청 중:', alarmId)
      return
    }

    try {
      console.log('✅ 알람 확인 버튼 클릭:', alarmId)

      // 확인 요청 중 표시
      pendingAckRef.current.add(alarmId)

      // 백엔드에 확인 요청
      const response = await fetch('http://localhost:8000/api/alarms/acknowledge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          alarm_id: alarmId,
          user: 'Operator'
        })
      })

      if (response.ok) {
        console.log('✅ 알람 확인 성공 - WebSocket 업데이트 대기 중')
        // 아무것도 하지 않음 - WebSocket이 업데이트하면 자연스럽게 사라짐
      } else {
        console.error('❌ 알람 확인 실패')
      }
    } catch (error) {
      console.error('❌ 알람 확인 오류:', error)
    } finally {
      // 2초 후 pendingAckRef에서 제거
      setTimeout(() => {
        pendingAckRef.current.delete(alarmId)
      }, 2000)
    }
  }

  const hasActiveAlarms = alarms.some(alarm => !alarm.acknowledged)

  return (
    <div className="alarm-panel">
      <div className={`alarm-header ${hasActiveAlarms ? 'has-alarms' : ''}`}>
        <h2>🔔 알람 시스템</h2>
        <div className="alarm-summary">
          <span className="summary-item critical">위험: {alarmSummary?.critical || 0}</span>
          <span className="summary-item warning">경고: {alarmSummary?.warning || 0}</span>
          <span className="summary-item info">정보: {alarmSummary?.info || 0}</span>
        </div>
      </div>

      <div className="alarm-list">
        {alarms.length === 0 ? (
          <div className="no-alarms">
            <span>✅ 활성 알람이 없습니다</span>
          </div>
        ) : (
          alarms.map(alarm => (
            <div key={alarm.id} className={`alarm-item ${getAlarmClass(alarm.level)} ${alarm.acknowledged ? 'acknowledged' : ''}`}>
              <div className="alarm-icon">
                {getAlarmIcon(alarm.level)}
              </div>
              <div className="alarm-content">
                <div className="alarm-message">{alarm.message}</div>
                <div className="alarm-time">{new Date(alarm.time).toLocaleString('ko-KR')}</div>
              </div>
              <div className="alarm-actions">
                {!alarm.acknowledged && (
                  <button
                    className="btn-acknowledge"
                    onClick={() => handleAcknowledge(alarm.id)}
                  >
                    확인
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default AlarmPanel




