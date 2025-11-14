import React, { useState, useEffect, useRef } from 'react'
import './AlarmPanel.css'

function AlarmPanel({ alarms: alarmsProp, alarmSummary, alarmSoundMuted, onToggleMute }) {
  const [localAlarms, setLocalAlarms] = useState([])
  const pendingAckRef = useRef(new Set()) // 확인 요청 중인 알람 ID (중복 요청 방지용)

  // WebSocket을 통해 받은 알람 데이터 사용
  useEffect(() => {
    if (alarmsProp && Array.isArray(alarmsProp)) {
      setLocalAlarms(alarmsProp)
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
        {onToggleMute && (
          <button
            className={`btn-mute ${alarmSoundMuted ? 'muted' : ''}`}
            onClick={onToggleMute}
            title={alarmSoundMuted ? '경고음 켜기' : '경고음 끄기'}
          >
            {alarmSoundMuted ? '🔇 음소거' : '🔊 소리'}
          </button>
        )}
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




