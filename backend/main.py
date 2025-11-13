"""
ESS HMI 백엔드 메인 서버
Engine Room Ventilation System
FastAPI + WebSocket으로 실시간 데이터 제공
"""

import asyncio
import logging
from datetime import datetime
from typing import Dict, Any, List
from pathlib import Path
from fastapi import FastAPI, WebSocket, WebSocketDisconnect, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from modbus_client import PLCClient
from alarm_manager import AlarmManager, AlarmLevel, EventType

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="ESS HMI API", version="2.0.0")

# 정적 파일 디렉토리 (프로덕션 빌드용)
STATIC_DIR = Path(__file__).parent / "static"

# CORS 설정 (프론트엔드 연동)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 개발 중에는 모든 origin 허용
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# PLC 클라이언트 인스턴스
# use_simulation=True로 설정하면 실제 PLC 없이 시뮬레이션 데이터 사용
plc_client = PLCClient(host="192.168.0.130", port=502, slave_id=3, use_simulation=True)

# 알람 관리자 인스턴스
alarm_manager = AlarmManager(data_dir="data")

# WebSocket 연결 관리
active_connections: List[WebSocket] = []


# 요청/응답 모델
class EquipmentCommand(BaseModel):
    equipment_name: str  # "SWP1", "SWP2", ..., "FAN4"
    command: str         # "start", "stop", "start_fwd", "start_bwd"


class SettingUpdate(BaseModel):
    address: int
    value: int


class AlarmAck(BaseModel):
    alarm_id: str
    user: str = "Operator"


@app.on_event("startup")
async def startup_event():
    """서버 시작 시 PLC 연결"""
    logger.info("=" * 70)
    logger.info("🚀 ESS HMI 백엔드 서버 시작")
    logger.info("   Engine Room Ventilation System")
    logger.info("=" * 70)
    await asyncio.to_thread(plc_client.connect)

    # 실시간 데이터 브로드캐스트 태스크 시작
    asyncio.create_task(broadcast_realtime_data())


@app.on_event("shutdown")
async def shutdown_event():
    """서버 종료 시 PLC 연결 해제"""
    logger.info("🛑 ESS HMI 백엔드 서버 종료")
    await asyncio.to_thread(plc_client.disconnect)


@app.get("/api")
async def api_root():
    """API 루트 엔드포인트"""
    return {
        "service": "ESS HMI Backend",
        "system": "Engine Room Ventilation System",
        "version": "2.0.0",
        "status": "running",
        "plc_connected": plc_client.connected,
        "equipment": {
            "pumps": 6,  # 3 SWP + 3 FWP
            "fans": 4    # 4 E/R Fans
        },
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/status")
async def get_status():
    """시스템 상태"""
    return {
        "plc_connected": plc_client.connected,
        "plc_host": plc_client.host,
        "plc_port": plc_client.port,
        "active_websocket_connections": len(active_connections),
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/sensors")
async def get_sensors():
    """센서 데이터 조회"""
    logger.info(f"🔍 get_sensors API called, plc_client.use_simulation={plc_client.use_simulation}")
    data = await asyncio.to_thread(plc_client.get_sensor_data)
    logger.info(f"📊 Sensor data retrieved: TX1={data.get('TX1', 0)}, TX6={data.get('TX6', 0)}")
    return {
        "success": True,
        "data": data,
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/equipment")
async def get_all_equipment():
    """모든 장비 데이터 조회 (6 Pumps + 4 Fans)"""
    equipment = await asyncio.to_thread(plc_client.get_all_equipment_data)
    return {
        "success": True,
        "data": equipment,
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/pumps")
async def get_pumps():
    """펌프 데이터만 조회 (SWP1~3, FWP1~3)"""
    all_equipment = await asyncio.to_thread(plc_client.get_all_equipment_data)
    pumps = all_equipment[:6]  # 첫 6개가 펌프
    return {
        "success": True,
        "data": pumps,
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/fans")
async def get_fans():
    """팬 데이터만 조회 (FAN1~4)"""
    all_equipment = await asyncio.to_thread(plc_client.get_all_equipment_data)
    fans = all_equipment[6:]  # 나머지가 팬
    return {
        "success": True,
        "data": fans,
        "timestamp": datetime.now().isoformat()
    }


@app.post("/api/equipment/command")
async def send_equipment_command(command: EquipmentCommand):
    """장비 명령 전송"""
    valid_equipment = ["SWP1", "SWP2", "SWP3", "FWP1", "FWP2", "FWP3",
                      "FAN1", "FAN2", "FAN3", "FAN4"]

    if command.equipment_name not in valid_equipment:
        raise HTTPException(status_code=400, detail=f"Invalid equipment name: {command.equipment_name}")

    valid_commands = ["start", "stop", "start_fwd", "start_bwd", "auto", "manual", "vfd", "bypass"]
    if command.command not in valid_commands:
        raise HTTPException(status_code=400, detail=f"Invalid command: {command.command}")

    # Fan이 아닌 경우 start_fwd, start_bwd 명령 불가
    if "FAN" not in command.equipment_name and command.command in ["start_fwd", "start_bwd"]:
        raise HTTPException(status_code=400, detail="FWD/BWD commands are only for fans")

    success = await asyncio.to_thread(
        plc_client.send_equipment_command,
        command.equipment_name,
        command.command
    )

    if not success:
        raise HTTPException(status_code=500, detail="Failed to send command to PLC")

    # 제어 명령 이벤트 로그
    alarm_manager.add_event(
        EventType.CONTROL,
        "Operator",
        f"{command.equipment_name} {command.command.upper()} command executed"
    )

    return {
        "success": True,
        "message": f"{command.equipment_name} {command.command} command sent",
        "timestamp": datetime.now().isoformat()
    }


# 하위 호환성을 위한 펌프 명령 API (구 버전과 호환)
@app.post("/api/pump/command")
async def send_pump_command_legacy(pump_index: int = 0, command: str = "start"):
    """펌프 명령 전송 (하위 호환용)"""
    pump_names = ["SWP1", "SWP2", "SWP3", "FWP1", "FWP2", "FWP3"]

    if pump_index < 0 or pump_index >= 6:
        raise HTTPException(status_code=400, detail="Invalid pump index (0-5)")

    equipment_name = pump_names[pump_index]

    success = await asyncio.to_thread(
        plc_client.send_equipment_command,
        equipment_name,
        command
    )

    if not success:
        raise HTTPException(status_code=500, detail="Failed to send command to PLC")

    return {
        "success": True,
        "message": f"Pump {pump_index} ({equipment_name}) {command} command sent",
        "timestamp": datetime.now().isoformat()
    }


@app.post("/api/setting")
async def update_setting(setting: SettingUpdate):
    """설정값 업데이트"""
    success = await asyncio.to_thread(plc_client.write_register, setting.address, setting.value)

    if not success:
        raise HTTPException(status_code=500, detail="Failed to write to PLC")

    # 설정 변경 이벤트 로그
    alarm_manager.add_event(
        EventType.SETTING,
        "Operator",
        f"Register {setting.address} updated to {setting.value}",
        {"address": setting.address, "value": setting.value}
    )

    return {
        "success": True,
        "message": f"Register {setting.address} updated to {setting.value}",
        "timestamp": datetime.now().isoformat()
    }


# ===== 알람 및 이력 API =====

@app.get("/api/alarms/active")
async def get_active_alarms():
    """활성 알람 목록 조회"""
    alarms = alarm_manager.get_active_alarms()
    summary = alarm_manager.get_alarm_summary()
    return {
        "success": True,
        "data": alarms,
        "summary": summary,
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/alarms/history")
async def get_alarm_history(limit: int = 100, level: str = None):
    """알람 이력 조회"""
    alarms = alarm_manager.get_alarm_history(limit=limit, level=level)
    return {
        "success": True,
        "data": alarms,
        "count": len(alarms),
        "timestamp": datetime.now().isoformat()
    }


@app.post("/api/alarms/acknowledge")
async def acknowledge_alarm(ack: AlarmAck):
    """알람 확인"""
    success = alarm_manager.acknowledge_alarm(ack.alarm_id, ack.user)

    if not success:
        raise HTTPException(status_code=404, detail="Alarm not found")

    # 알람 확인 이벤트 로그
    alarm_manager.add_event(
        EventType.ALARM,
        ack.user,
        f"Alarm {ack.alarm_id} acknowledged"
    )

    return {
        "success": True,
        "message": f"Alarm {ack.alarm_id} acknowledged",
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/events")
async def get_event_history(limit: int = 100, event_type: str = None):
    """이벤트 로그 조회"""
    events = alarm_manager.get_event_history(limit=limit, event_type=event_type)
    return {
        "success": True,
        "data": events,
        "count": len(events),
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/operations")
async def get_operation_records(start_date: str = None, end_date: str = None):
    """운전 이력 조회"""
    records = alarm_manager.get_operation_records(start_date=start_date, end_date=end_date)
    return {
        "success": True,
        "data": records,
        "count": len(records),
        "timestamp": datetime.now().isoformat()
    }


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    """WebSocket 실시간 데이터 스트림"""
    await websocket.accept()
    active_connections.append(websocket)
    logger.info(f"✅ WebSocket 연결: {len(active_connections)}개 활성")

    try:
        while True:
            # 클라이언트 메시지 수신 (연결 유지용)
            try:
                await asyncio.wait_for(websocket.receive_text(), timeout=0.1)
            except asyncio.TimeoutError:
                pass

            await asyncio.sleep(0.1)

    except WebSocketDisconnect:
        active_connections.remove(websocket)
        logger.info(f"❌ WebSocket 연결 해제: {len(active_connections)}개 활성")
    except Exception as e:
        logger.error(f"WebSocket 오류: {e}")
        if websocket in active_connections:
            active_connections.remove(websocket)


async def broadcast_realtime_data():
    """모든 WebSocket 클라이언트에 실시간 데이터 브로드캐스트"""
    logger.info("📡 실시간 데이터 브로드캐스트 시작 (1초 간격)")

    # 이전 데이터 캐시 (데이터 읽기 실패 시 사용)
    last_sensors = {}
    last_equipment = []

    while True:
        try:
            # 센서 및 장비 데이터 수집 (WebSocket 연결 여부와 무관하게 항상 실행)
            sensors = await asyncio.to_thread(plc_client.get_sensor_data)
            equipment = await asyncio.to_thread(plc_client.get_all_equipment_data)

            # 데이터 유효성 검사
            if sensors:
                last_sensors = sensors
            else:
                sensors = last_sensors  # 이전 데이터 사용

            if equipment and len(equipment) > 0:
                last_equipment = equipment
            else:
                equipment = last_equipment  # 이전 데이터 사용

            # 새 사이클 시작 시 suppressed 알람 정리
            if sensors and sensors.get("_new_cycle"):
                alarm_manager.clear_all_suppressed()

            # 알람 체크 (센서 및 장비 기반) - 항상 실행
            new_alarms = []
            if sensors:
                sensor_alarms = alarm_manager.check_sensor_alarms(sensors)
                new_alarms.extend(sensor_alarms)

            if equipment:
                equipment_alarms = alarm_manager.check_equipment_alarms(equipment)
                new_alarms.extend(equipment_alarms)

            # 새 알람 로깅 (active_alarms에는 이미 추가됨)
            for alarm in new_alarms:
                logger.warning(f"🔔 새 알람 발생: {alarm.message}")

            # 알람 요약 정보
            alarm_summary = alarm_manager.get_alarm_summary()

            # WebSocket 클라이언트에 데이터 전송 (연결이 있을 때만)
            if active_connections:
                # 하위 호환성을 위해 pumps도 함께 전송
                pumps = equipment[:6] if equipment else []

                message = {
                    "type": "realtime_update",
                    "sensors": sensors,
                    "equipment": equipment,
                    "pumps": pumps,  # 하위 호환용
                    "alarms": alarm_manager.get_active_alarms(),  # 활성 알람 목록
                    "alarm_summary": alarm_summary,  # 알람 요약
                    "timestamp": datetime.now().isoformat()
                }

                # 모든 연결된 클라이언트에 전송
                disconnected = []
                for connection in active_connections:
                    try:
                        await connection.send_json(message)
                    except Exception as e:
                        logger.error(f"브로드캐스트 오류: {e}")
                        disconnected.append(connection)

                # 연결 끊긴 클라이언트 제거
                for conn in disconnected:
                    if conn in active_connections:
                        active_connections.remove(conn)

            # 1초 간격 업데이트
            await asyncio.sleep(1)

        except Exception as e:
            logger.error(f"브로드캐스트 루프 오류: {e}")
            await asyncio.sleep(1)


# 정적 파일 서빙 (프로덕션 모드)
if STATIC_DIR.exists():
    logger.info(f"📁 정적 파일 제공: {STATIC_DIR}")
    app.mount("/assets", StaticFiles(directory=STATIC_DIR / "assets"), name="assets")

    @app.get("/")
    async def serve_frontend():
        """프론트엔드 index.html 제공"""
        return FileResponse(STATIC_DIR / "index.html")

    @app.get("/{full_path:path}")
    async def serve_spa(full_path: str):
        """SPA 라우팅 지원"""
        # API 경로는 제외
        if full_path.startswith("api/") or full_path.startswith("ws"):
            return {"error": "Not found"}, 404

        # 파일이 존재하면 제공
        file_path = STATIC_DIR / full_path
        if file_path.is_file():
            return FileResponse(file_path)

        # 그 외는 index.html 반환 (SPA 라우팅)
        return FileResponse(STATIC_DIR / "index.html")
else:
    logger.warning("⚠️  정적 파일 없음 - 개발 모드")

    @app.get("/")
    async def root():
        """개발 모드 루트"""
        return {
            "service": "ESS HMI Backend",
            "system": "Engine Room Ventilation System",
            "version": "2.0.0",
            "mode": "development",
            "message": "Frontend should be served separately (npm run dev)",
            "plc_connected": plc_client.connected,
            "api_docs": "/docs",
            "timestamp": datetime.now().isoformat()
        }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )
