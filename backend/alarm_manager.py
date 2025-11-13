"""
알람 관리 시스템
- 알람 감지, 저장, 조회 기능
- 이벤트 로그 관리
- 운전 이력 추적
"""

import json
from datetime import datetime
from typing import List, Dict, Any, Optional
from pathlib import Path
from dataclasses import dataclass, asdict
from enum import Enum


class AlarmLevel(str, Enum):
    """알람 등급"""
    CRITICAL = "critical"  # 위험 (빨강)
    WARNING = "warning"    # 경고 (노랑)
    INFO = "info"         # 정보 (초록)


class EventType(str, Enum):
    """이벤트 유형"""
    CONTROL = "control"   # 제어 명령
    ALARM = "alarm"       # 알람 발생
    SETTING = "setting"   # 설정 변경
    SYSTEM = "system"     # 시스템 이벤트


@dataclass
class Alarm:
    """알람 데이터 클래스"""
    id: str
    level: AlarmLevel
    message: str
    time: str
    acknowledged: bool = False
    ack_time: Optional[str] = None
    ack_user: Optional[str] = None
    tag: Optional[str] = None  # 관련 태그 (예: "T1", "SWP1")
    value: Optional[float] = None  # 알람 발생 시 값

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


@dataclass
class Event:
    """이벤트 로그 데이터 클래스"""
    id: str
    time: str
    type: EventType
    user: str
    message: str
    details: Optional[Dict[str, Any]] = None

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


@dataclass
class OperationRecord:
    """운전 이력 데이터 클래스"""
    equipment_name: str
    date: str
    runtime_hours: float
    start_count: int
    energy_kwh: float
    saved_kwh: float

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


class AlarmManager:
    """알람 관리자"""

    def __init__(self, data_dir: str = "data"):
        self.data_dir = Path(data_dir)
        self.data_dir.mkdir(exist_ok=True)

        self.alarm_file = self.data_dir / "alarms.json"
        self.event_file = self.data_dir / "events.json"
        self.operation_file = self.data_dir / "operations.json"

        # 메모리 캐시
        self.active_alarms: Dict[str, Alarm] = {}  # tag를 키로 사용
        self.alarm_history: List[Alarm] = []
        self.event_history: List[Event] = []
        self.operation_records: Dict[str, OperationRecord] = {}
        self.suppressed_alarms: Dict[str, Alarm] = {}  # 확인되었지만 조건이 계속되는 알람 (재발생 방지)

        # 알람 설정 (임계값)
        self.alarm_config = self._load_alarm_config()

        # 데이터 로드
        self._load_data()

        # 이벤트 카운터
        self._alarm_counter = 0
        self._event_counter = 0

    def _load_alarm_config(self) -> Dict[str, Any]:
        """알람 설정 로드"""
        return {
            # 온도 알람 (°C)
            "T1_LOW": {"level": AlarmLevel.WARNING, "threshold": 20, "message": "냉각수 토출 온도 저하 (CSW PP Disc Temp Low)"},
            "T1_HIGH": {"level": AlarmLevel.CRITICAL, "threshold": 30, "message": "냉각수 토출 온도 상승 (CSW PP Disc Temp High)"},
            "T2_HIGH": {"level": AlarmLevel.CRITICAL, "threshold": 75, "message": "냉각수 흡입 온도 상승 (CSW PP Suc Temp High)"},
            "T3_HIGH": {"level": AlarmLevel.CRITICAL, "threshold": 75, "message": "청수 쿨러 출구 온도 상승 (FW Cooler SW Out High)"},
            "T4_HIGH": {"level": AlarmLevel.WARNING, "threshold": 50, "message": "청수 쿨러 입구 온도 상승 (FW Cooler FW In High)"},
            "T5_HIGH": {"level": AlarmLevel.CRITICAL, "threshold": 40, "message": "청수 쿨러 출구 온도 상승 (FW Cooler FW Out High)"},
            "T6_HIGH": {"level": AlarmLevel.CRITICAL, "threshold": 50, "message": "기관실 내부 온도 상승 (E/R Inside Temp High)"},
            "T7_HIGH": {"level": AlarmLevel.WARNING, "threshold": 40, "message": "기관실 외부 온도 상승 (Outside Air Temp High)"},

            # 압력 알람 (bar, Pa)
            "PX1_LOW": {"level": AlarmLevel.WARNING, "threshold": 1.5, "message": "냉각수 압력 저하 (CSW Pressure Low)"},
            "PX1_HIGH": {"level": AlarmLevel.CRITICAL, "threshold": 3.0, "message": "냉각수 압력 과다 (CSW Pressure High)"},
            "PX2_HIGH": {"level": AlarmLevel.WARNING, "threshold": 150, "message": "기관실 차압 이상 (E/R Diff Press High)"},

            # 부하 알람 (%)
            "PU1_HIGH": {"level": AlarmLevel.WARNING, "threshold": 85, "message": "주기관 부하 과다 (M/E Load High)"},

            # 장비 알람
            "EQUIPMENT_FAULT": {"level": AlarmLevel.CRITICAL, "message": "Equipment Fault"},
            "VFD_COMM_ERROR": {"level": AlarmLevel.WARNING, "message": "VFD Communication Error"},
            "VFD_OVERLOAD": {"level": AlarmLevel.CRITICAL, "message": "VFD Overload"},

            # 시스템 알람
            "PLC_DISCONNECTED": {"level": AlarmLevel.CRITICAL, "message": "PLC Connection Lost"},
        }

    def check_sensor_alarms(self, sensors: Dict[str, Any]) -> List[Alarm]:
        """센서 데이터 기반 알람 체크 및 자동 해제"""
        new_alarms = []
        current_time = datetime.now().isoformat()

        # 온도 체크 (센서 키는 TX1~TX7 형식)
        temp_sensors = {
            "T1": sensors.get("TX1"),  # CSW PP Disc Temp
            "T2": sensors.get("TX2"),  # CSW PP Suc Temp
            "T3": sensors.get("TX3"),  # FW CLNG In Temp
            "T4": sensors.get("TX4"),  # FW CLNG Out Temp
            "T5": sensors.get("TX5"),  # ESS Batt Temp
            "T6": sensors.get("TX6"),  # E/R Inside Temp
            "T7": sensors.get("TX7"),  # E/R Outside Temp
        }

        for tag, value in temp_sensors.items():
            if value is None:
                continue

            # High 체크
            high_key = f"{tag}_HIGH"
            if high_key in self.alarm_config:
                config = self.alarm_config[high_key]
                alarm_tag = f"{tag}_HIGH"

                if value > config["threshold"]:
                    # 알람 조건 - 새 알람 추가 (단, suppressed 상태가 아닐 때만)
                    if alarm_tag not in self.active_alarms and alarm_tag not in self.suppressed_alarms:
                        alarm = Alarm(
                            id=self._generate_alarm_id(),
                            level=config["level"],
                            message=f"{config['message']}: {value:.1f}°C",
                            time=current_time,
                            tag=alarm_tag,
                            value=value
                        )
                        new_alarms.append(alarm)
                        self.active_alarms[alarm_tag] = alarm
                # 정상 조건이어도 자동 해제하지 않음 (사용자가 확인할 때까지 유지)

            # Low 체크 (T1만)
            if tag == "T1":
                low_key = f"{tag}_LOW"
                if low_key in self.alarm_config:
                    config = self.alarm_config[low_key]
                    alarm_tag = f"{tag}_LOW"

                    if value < config["threshold"]:
                        # 알람 조건 - 새 알람 추가
                        if alarm_tag not in self.active_alarms and alarm_tag not in self.suppressed_alarms:
                            alarm = Alarm(
                                id=self._generate_alarm_id(),
                                level=config["level"],
                                message=f"{config['message']}: {value:.1f}°C",
                                time=current_time,
                                tag=alarm_tag,
                                value=value
                            )
                            new_alarms.append(alarm)
                            self.active_alarms[alarm_tag] = alarm
                    # 정상 조건이어도 자동 해제하지 않음 (사용자가 확인할 때까지 유지)

        # 압력 체크 (센서 키는 DPX1, DPX2)
        px1 = sensors.get("DPX1")  # CSW PP Disc Press (kg/cm² 또는 bar)
        if px1 is not None:
            # Low 체크
            alarm_tag = "PX1_LOW"
            if px1 < self.alarm_config["PX1_LOW"]["threshold"]:
                # 알람 조건 - 새 알람 추가
                if alarm_tag not in self.active_alarms and alarm_tag not in self.suppressed_alarms:
                    config = self.alarm_config["PX1_LOW"]
                    alarm = Alarm(
                        id=self._generate_alarm_id(),
                        level=config["level"],
                        message=f"{config['message']}: {px1:.2f} bar",
                        time=current_time,
                        tag=alarm_tag,
                        value=px1
                    )
                    new_alarms.append(alarm)
                    self.active_alarms[alarm_tag] = alarm
            # 정상 조건이어도 자동 해제하지 않음 (사용자가 확인할 때까지 유지)

            # High 체크
            alarm_tag = "PX1_HIGH"
            if px1 > self.alarm_config["PX1_HIGH"]["threshold"]:
                # 알람 조건 - 새 알람 추가
                if alarm_tag not in self.active_alarms and alarm_tag not in self.suppressed_alarms:
                    config = self.alarm_config["PX1_HIGH"]
                    alarm = Alarm(
                        id=self._generate_alarm_id(),
                        level=config["level"],
                        message=f"{config['message']}: {px1:.2f} bar",
                        time=current_time,
                        tag=alarm_tag,
                        value=px1
                    )
                    new_alarms.append(alarm)
                    self.active_alarms[alarm_tag] = alarm
            # 정상 조건이어도 자동 해제하지 않음 (사용자가 확인할 때까지 유지)

        # E/R 차압 체크 (DPX2)
        px2 = sensors.get("DPX2")  # E/R Diff Press (Pa)
        if px2 is not None:
            alarm_tag = "PX2_HIGH"
            if px2 > self.alarm_config["PX2_HIGH"]["threshold"]:
                # 알람 조건 - 새 알람 추가
                if alarm_tag not in self.active_alarms and alarm_tag not in self.suppressed_alarms:
                    config = self.alarm_config["PX2_HIGH"]
                    alarm = Alarm(
                        id=self._generate_alarm_id(),
                        level=config["level"],
                        message=f"{config['message']}: {px2:.1f} Pa",
                        time=current_time,
                        tag=alarm_tag,
                        value=px2
                    )
                    new_alarms.append(alarm)
                    self.active_alarms[alarm_tag] = alarm
            # 정상 조건이어도 자동 해제하지 않음 (사용자가 확인할 때까지 유지)

        # 기관 부하 체크 (PU1)
        pu1 = sensors.get("PU1")  # M/E Load (%)
        if pu1 is not None:
            alarm_tag = "PU1_HIGH"
            if pu1 > self.alarm_config["PU1_HIGH"]["threshold"]:
                # 알람 조건 - 새 알람 추가
                if alarm_tag not in self.active_alarms and alarm_tag not in self.suppressed_alarms:
                    config = self.alarm_config["PU1_HIGH"]
                    alarm = Alarm(
                        id=self._generate_alarm_id(),
                        level=config["level"],
                        message=f"{config['message']}: {pu1:.1f}%",
                        time=current_time,
                        tag=alarm_tag,
                        value=pu1
                    )
                    new_alarms.append(alarm)
                    self.active_alarms[alarm_tag] = alarm
            # 정상 조건이어도 자동 해제하지 않음 (사용자가 확인할 때까지 유지)

        return new_alarms

    def check_equipment_alarms(self, equipment: List[Dict[str, Any]]) -> List[Alarm]:
        """장비 상태 기반 알람 체크 및 자동 해제"""
        new_alarms = []
        current_time = datetime.now().isoformat()

        for eq in equipment:
            name = eq.get("name", "")
            status = eq.get("status", "")
            vfd_status = eq.get("vfd_status", {})

            # 장비 고장 체크
            alarm_tag = f"{name}_FAULT"
            if status == "fault":
                # 알람 조건 - 새 알람 추가
                if alarm_tag not in self.active_alarms and alarm_tag not in self.suppressed_alarms:
                    alarm = Alarm(
                        id=self._generate_alarm_id(),
                        level=AlarmLevel.CRITICAL,
                        message=f"{name} Equipment Fault",
                        time=current_time,
                        tag=alarm_tag
                    )
                    new_alarms.append(alarm)
                    self.active_alarms[alarm_tag] = alarm
            # 정상 조건이어도 자동 해제하지 않음 (사용자가 확인할 때까지 유지)

            # VFD 통신 오류
            alarm_tag = f"{name}_VFD_COMM"
            if not vfd_status.get("connected", True):
                # 알람 조건 - 새 알람 추가
                if alarm_tag not in self.active_alarms and alarm_tag not in self.suppressed_alarms:
                    alarm = Alarm(
                        id=self._generate_alarm_id(),
                        level=AlarmLevel.WARNING,
                        message=f"{name} VFD Communication Error",
                        time=current_time,
                        tag=alarm_tag
                    )
                    new_alarms.append(alarm)
                    self.active_alarms[alarm_tag] = alarm
            # 정상 조건이어도 자동 해제하지 않음 (사용자가 확인할 때까지 유지)

            # VFD 과부하
            alarm_tag = f"{name}_VFD_OVERLOAD"
            if vfd_status.get("overload", False):
                # 알람 조건 - 새 알람 추가
                if alarm_tag not in self.active_alarms and alarm_tag not in self.suppressed_alarms:
                    alarm = Alarm(
                        id=self._generate_alarm_id(),
                        level=AlarmLevel.CRITICAL,
                        message=f"{name} VFD Overload",
                        time=current_time,
                        tag=alarm_tag
                    )
                    new_alarms.append(alarm)
                    self.active_alarms[alarm_tag] = alarm
            # 정상 조건이어도 자동 해제하지 않음 (사용자가 확인할 때까지 유지)

        return new_alarms

    def clear_alarm(self, tag: str):
        """알람 자동 해제 (조건이 정상으로 돌아옴)"""
        import logging
        logger = logging.getLogger(__name__)

        # active_alarms에서 제거
        if tag in self.active_alarms:
            alarm = self.active_alarms[tag]
            self.active_alarms.pop(tag)
            self.alarm_history.append(alarm)
            self._save_data()

            if alarm.acknowledged:
                logger.info(f"✅ 알람 자동 해제 (사용자 확인됨): {alarm.message}")
            else:
                logger.info(f"✅ 알람 자동 해제 (조건 정상 복귀, 미확인): {alarm.message}")

        # suppressed_alarms는 유지 (사용자가 확인한 알람은 조건이 정상화되어도 기록 유지)

    def clear_all_suppressed(self):
        """모든 알람 정리 (새로운 알람 사이클 시작 시 호출)"""
        import logging
        logger = logging.getLogger(__name__)

        # Active와 Suppressed 알람 개수 카운트
        active_count = len(self.active_alarms)
        suppressed_count = len(self.suppressed_alarms)
        total_count = active_count + suppressed_count

        # Active 알람도 이력에 추가 (미확인 알람 기록)
        for tag, alarm in self.active_alarms.items():
            if not alarm.acknowledged:
                self.alarm_history.append(alarm)

        # 모두 정리
        self.active_alarms.clear()
        self.suppressed_alarms.clear()
        self._save_data()

        if total_count > 0:
            logger.info(f"🧹 모든 알람 정리 완료 (Active: {active_count}개, Suppressed: {suppressed_count}개, 총 {total_count}개)")

    def acknowledge_alarm(self, alarm_id: str, user: str = "Operator") -> bool:
        """알람 확인 및 suppressed로 이동 (조건이 계속되면 재발생 방지)"""
        # 활성 알람에서 찾기
        for tag, alarm in list(self.active_alarms.items()):
            if alarm.id == alarm_id:
                alarm.acknowledged = True
                alarm.ack_time = datetime.now().isoformat()
                alarm.ack_user = user

                # 확인된 알람은 active_alarms에서 제거하고 suppressed로 이동
                self.active_alarms.pop(tag)
                self.suppressed_alarms[tag] = alarm  # 재발생 방지를 위해 suppressed에 보관
                self.alarm_history.append(alarm)
                self._save_data()

                import logging
                logger = logging.getLogger(__name__)
                logger.info(f"✅ 알람 확인 (suppressed): {alarm.message} (확인자: {user})")
                return True

        # 이력에서 찾기
        for alarm in self.alarm_history:
            if alarm.id == alarm_id:
                alarm.acknowledged = True
                alarm.ack_time = datetime.now().isoformat()
                alarm.ack_user = user
                self._save_data()
                return True

        return False

    def add_event(self, event_type: EventType, user: str, message: str, details: Optional[Dict] = None):
        """이벤트 로그 추가"""
        event = Event(
            id=self._generate_event_id(),
            time=datetime.now().isoformat(),
            type=event_type,
            user=user,
            message=message,
            details=details
        )
        self.event_history.append(event)

        # 최근 1000개만 유지
        if len(self.event_history) > 1000:
            self.event_history = self.event_history[-1000:]

        self._save_data()
        return event

    def update_operation_record(self, equipment_name: str, runtime_hours: float,
                                energy_kwh: float, saved_kwh: float, start_count: int = 0):
        """운전 이력 업데이트"""
        today = datetime.now().strftime("%Y-%m-%d")
        key = f"{equipment_name}_{today}"

        if key in self.operation_records:
            record = self.operation_records[key]
            record.runtime_hours += runtime_hours
            record.energy_kwh += energy_kwh
            record.saved_kwh += saved_kwh
            record.start_count += start_count
        else:
            record = OperationRecord(
                equipment_name=equipment_name,
                date=today,
                runtime_hours=runtime_hours,
                start_count=start_count,
                energy_kwh=energy_kwh,
                saved_kwh=saved_kwh
            )
            self.operation_records[key] = record

        self._save_data()

    def get_active_alarms(self) -> List[Dict[str, Any]]:
        """활성 알람 목록 (미확인 알람만)"""
        # acknowledged=True인 알람은 제외 (이미 이력으로 이동했어야 하는데 남아있는 경우 대비)
        return [alarm.to_dict() for alarm in self.active_alarms.values() if not alarm.acknowledged]

    def get_alarm_history(self, limit: int = 100, level: Optional[str] = None) -> List[Dict[str, Any]]:
        """알람 이력 조회"""
        history = list(self.active_alarms.values()) + self.alarm_history

        # 레벨 필터
        if level and level != "all":
            history = [a for a in history if a.level == level]

        # 최신순 정렬
        history.sort(key=lambda x: x.time, reverse=True)

        return [alarm.to_dict() for alarm in history[:limit]]

    def get_event_history(self, limit: int = 100, event_type: Optional[str] = None) -> List[Dict[str, Any]]:
        """이벤트 로그 조회"""
        events = self.event_history

        # 타입 필터
        if event_type and event_type != "all":
            events = [e for e in events if e.type == event_type]

        # 최신순 정렬
        events.sort(key=lambda x: x.time, reverse=True)

        return [event.to_dict() for event in events[:limit]]

    def get_operation_records(self, start_date: Optional[str] = None,
                             end_date: Optional[str] = None) -> List[Dict[str, Any]]:
        """운전 이력 조회"""
        records = list(self.operation_records.values())

        # 날짜 필터
        if start_date:
            records = [r for r in records if r.date >= start_date]
        if end_date:
            records = [r for r in records if r.date <= end_date]

        # 날짜순 정렬
        records.sort(key=lambda x: x.date, reverse=True)

        return [record.to_dict() for record in records]

    def get_alarm_summary(self) -> Dict[str, int]:
        """알람 요약 통계"""
        active = list(self.active_alarms.values())
        return {
            "total": len(active),
            "critical": len([a for a in active if a.level == AlarmLevel.CRITICAL]),
            "warning": len([a for a in active if a.level == AlarmLevel.WARNING]),
            "info": len([a for a in active if a.level == AlarmLevel.INFO]),
            "unacknowledged": len([a for a in active if not a.acknowledged])
        }

    def _generate_alarm_id(self) -> str:
        """알람 ID 생성"""
        self._alarm_counter += 1
        return f"ALM{datetime.now().strftime('%Y%m%d%H%M%S')}{self._alarm_counter:04d}"

    def _generate_event_id(self) -> str:
        """이벤트 ID 생성"""
        self._event_counter += 1
        return f"EVT{datetime.now().strftime('%Y%m%d%H%M%S')}{self._event_counter:04d}"

    def _load_data(self):
        """데이터 파일 로드"""
        try:
            # 알람 이력
            if self.alarm_file.exists():
                with open(self.alarm_file, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    self.alarm_history = [
                        Alarm(**item) for item in data.get("history", [])
                    ]

            # 이벤트 로그
            if self.event_file.exists():
                with open(self.event_file, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    self.event_history = [
                        Event(**item) for item in data.get("events", [])
                    ]

            # 운전 이력
            if self.operation_file.exists():
                with open(self.operation_file, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    self.operation_records = {
                        key: OperationRecord(**value)
                        for key, value in data.get("records", {}).items()
                    }
        except Exception as e:
            print(f"데이터 로드 오류: {e}")

    def _save_data(self):
        """데이터 파일 저장"""
        try:
            # 알람 이력
            with open(self.alarm_file, 'w', encoding='utf-8') as f:
                json.dump({
                    "history": [alarm.to_dict() for alarm in self.alarm_history]
                }, f, ensure_ascii=False, indent=2)

            # 이벤트 로그
            with open(self.event_file, 'w', encoding='utf-8') as f:
                json.dump({
                    "events": [event.to_dict() for event in self.event_history]
                }, f, ensure_ascii=False, indent=2)

            # 운전 이력
            with open(self.operation_file, 'w', encoding='utf-8') as f:
                json.dump({
                    "records": {key: record.to_dict() for key, record in self.operation_records.items()}
                }, f, ensure_ascii=False, indent=2)
        except Exception as e:
            print(f"데이터 저장 오류: {e}")
