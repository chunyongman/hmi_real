import React, { useState, useEffect } from 'react'
import './History.css'

function History() {
  const [activeTab, setActiveTab] = useState('alarms')
  const [alarmHistory, setAlarmHistory] = useState([])
  const [eventHistory, setEventHistory] = useState([])
  const [operationHistory, setOperationHistory] = useState([])
  const [loading, setLoading] = useState(false)

  // 데이터 로드
  useEffect(() => {
    if (activeTab === 'alarms') {
      fetchAlarmHistory()
    } else if (activeTab === 'events') {
      fetchEventHistory()
    } else if (activeTab === 'operation') {
      fetchOperationHistory()
    }
  }, [activeTab])

  const fetchAlarmHistory = async () => {
    setLoading(true)
    try {
      const response = await fetch('http://localhost:8000/api/alarms/history?limit=100')
      const result = await response.json()
      if (result.success) {
        setAlarmHistory(result.data)
      }
    } catch (error) {
      console.error('알람 이력 조회 오류:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchEventHistory = async () => {
    setLoading(true)
    try {
      const response = await fetch('http://localhost:8000/api/events?limit=100')
      const result = await response.json()
      if (result.success) {
        setEventHistory(result.data)
      }
    } catch (error) {
      console.error('이벤트 로그 조회 오류:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchOperationHistory = async () => {
    setLoading(true)
    try {
      const response = await fetch('http://localhost:8000/api/operations')
      const result = await response.json()
      if (result.success) {
        setOperationHistory(result.data)
      }
    } catch (error) {
      console.error('운전 이력 조회 오류:', error)
    } finally {
      setLoading(false)
    }
  }

  // CSV 내보내기 함수
  const exportToCSV = (data, filename) => {
    if (!data || data.length === 0) {
      alert('내보낼 데이터가 없습니다.')
      return
    }

    // CSV 헤더 및 데이터 생성
    const headers = Object.keys(data[0])
    const csvContent = [
      headers.join(','),
      ...data.map(row => headers.map(header => {
        const value = row[header]
        // 쉼표가 포함된 값은 따옴표로 감싸기
        return typeof value === 'string' && value.includes(',')
          ? `"${value}"`
          : value
      }).join(','))
    ].join('\n')

    // BOM 추가 (한글 깨짐 방지)
    const BOM = '\uFEFF'
    const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)

    link.setAttribute('href', url)
    link.setAttribute('download', `${filename}_${new Date().toISOString().slice(0,10)}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="history">
      <div className="history-header">
        <h2>📋 이력 관리</h2>
        <p>알람 이력, 이벤트 로그, 운전 이력 조회</p>
      </div>

      <div className="history-tabs">
        <button 
          className={activeTab === 'alarms' ? 'active' : ''}
          onClick={() => setActiveTab('alarms')}
        >
          🔔 알람 이력
        </button>
        <button 
          className={activeTab === 'events' ? 'active' : ''}
          onClick={() => setActiveTab('events')}
        >
          📝 이벤트 로그
        </button>
        <button 
          className={activeTab === 'operation' ? 'active' : ''}
          onClick={() => setActiveTab('operation')}
        >
          ⚙️ 운전 이력
        </button>
      </div>

      <div className="history-content">
        {loading && <div className="loading">데이터 로딩 중...</div>}
        {!loading && activeTab === 'alarms' && <AlarmHistory data={alarmHistory} onExport={exportToCSV} />}
        {!loading && activeTab === 'events' && <EventHistory data={eventHistory} onExport={exportToCSV} />}
        {!loading && activeTab === 'operation' && <OperationHistory data={operationHistory} onExport={exportToCSV} />}
      </div>
    </div>
  )
}

// 알람 이력
function AlarmHistory({ data, onExport }) {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = data.filter(alarm => {
    if (filter !== 'all' && alarm.level !== filter) return false
    if (searchTerm && !alarm.message.toLowerCase().includes(searchTerm.toLowerCase())) return false
    return true
  })

  return (
    <div className="alarm-history">
      <div className="history-controls">
        <div className="filter-group">
          <label>필터:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">전체</option>
            <option value="critical">위험</option>
            <option value="warning">경고</option>
            <option value="info">정보</option>
          </select>
        </div>
        <div className="search-group">
          <input
            type="text"
            placeholder="🔍 알람 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="btn-export" onClick={() => onExport(filtered, 'alarm_history')}>
          📥 CSV 내보내기
        </button>
      </div>

      <div className="history-table">
        <table>
          <thead>
            <tr>
              <th>시간</th>
              <th>등급</th>
              <th>메시지</th>
              <th>확인</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(alarm => (
              <tr key={alarm.id}>
                <td>{alarm.time}</td>
                <td>
                  <span className={`level-badge ${alarm.level}`}>
                    {alarm.level === 'critical' && '🔴 위험'}
                    {alarm.level === 'warning' && '🟡 경고'}
                    {alarm.level === 'info' && '🟢 정보'}
                  </span>
                </td>
                <td>{alarm.message}</td>
                <td>
                  <span className={`ack-badge ${alarm.acknowledged ? 'ack' : 'unack'}`}>
                    {alarm.acknowledged ? '✅ 확인됨' : '⏳ 대기중'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="history-summary">
        <div className="summary-item">
          <span className="summary-label">총 알람:</span>
          <span className="summary-value">{data.length}건</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">위험:</span>
          <span className="summary-value critical">
            {data.filter(a => a.level === 'critical').length}건
          </span>
        </div>
        <div className="summary-item">
          <span className="summary-label">경고:</span>
          <span className="summary-value warning">
            {data.filter(a => a.level === 'warning').length}건
          </span>
        </div>
      </div>
    </div>
  )
}

// 이벤트 로그
function EventHistory({ data, onExport }) {
  const [filter, setFilter] = useState('all')

  const filtered = data.filter(event => {
    if (filter !== 'all' && event.type !== filter) return false
    return true
  })

  const getTypeIcon = (type) => {
    switch(type) {
      case 'control': return '🎮'
      case 'alarm': return '🔔'
      case 'setting': return '⚙️'
      case 'system': return '💻'
      default: return '📝'
    }
  }

  return (
    <div className="event-history">
      <div className="history-controls">
        <div className="filter-group">
          <label>이벤트 유형:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">전체</option>
            <option value="control">제어</option>
            <option value="alarm">알람</option>
            <option value="setting">설정</option>
            <option value="system">시스템</option>
          </select>
        </div>
        <button className="btn-export" onClick={() => onExport(filtered, 'event_history')}>
          📥 CSV 내보내기
        </button>
      </div>

      <div className="event-list">
        {filtered.map(event => (
          <div key={event.id} className="event-item">
            <div className="event-icon">{getTypeIcon(event.type)}</div>
            <div className="event-content">
              <div className="event-header">
                <span className="event-time">{event.time}</span>
                <span className="event-user">{event.user}</span>
              </div>
              <div className="event-message">{event.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// 운전 이력
function OperationHistory({ data, onExport }) {
  return (
    <div className="operation-history">
      <div className="history-controls">
        <div className="date-range">
          <label>조회 기간:</label>
          <input type="date" defaultValue={new Date().toISOString().slice(0, 10)} />
          <span>~</span>
          <input type="date" defaultValue={new Date().toISOString().slice(0, 10)} />
        </div>
        <button className="btn-search">🔍 조회</button>
        <button className="btn-export" onClick={() => onExport(data, 'operation_history')}>
          📥 리포트 생성
        </button>
      </div>

      <div className="operation-table">
        <table>
          <thead>
            <tr>
              <th>펌프</th>
              <th>날짜</th>
              <th>운전 시간</th>
              <th>소비 전력</th>
              <th>절감 전력</th>
              <th>절감률</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((row, idx) => (
                <tr key={idx}>
                  <td><strong>{row.equipment_name}</strong></td>
                  <td>{row.date}</td>
                  <td>{row.runtime_hours?.toFixed(1)} h</td>
                  <td>{row.energy_kwh?.toFixed(1)} kWh</td>
                  <td className="highlight">{row.saved_kwh?.toFixed(1)} kWh</td>
                  <td className="highlight">
                    {row.energy_kwh > 0 ? ((row.saved_kwh / row.energy_kwh) * 100).toFixed(1) : 0}%
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{textAlign: 'center', padding: '20px'}}>
                  운전 이력 데이터가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
          {data && data.length > 0 && (
            <tfoot>
              <tr className="total-row">
                <td colSpan="2"><strong>합계</strong></td>
                <td><strong>{data.reduce((sum, r) => sum + (r.runtime_hours || 0), 0).toFixed(1)} h</strong></td>
                <td><strong>{data.reduce((sum, r) => sum + (r.energy_kwh || 0), 0).toFixed(1)} kWh</strong></td>
                <td className="highlight"><strong>{data.reduce((sum, r) => sum + (r.saved_kwh || 0), 0).toFixed(1)} kWh</strong></td>
                <td className="highlight"><strong>
                  {(data.reduce((sum, r) => sum + (r.saved_kwh || 0), 0) /
                    data.reduce((sum, r) => sum + (r.energy_kwh || 0), 0) * 100).toFixed(1)}%
                </strong></td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>

      <div className="operation-chart">
        <h4>📊 일별 절감 전력 추이</h4>
        <div className="chart-placeholder">
          <p>차트는 실제 데이터가 누적되면 표시됩니다</p>
        </div>
      </div>
    </div>
  )
}

export default History




