"""
알람 시나리오 테스트 스크립트
시뮬레이터의 알람 시나리오가 정상 작동하는지 확인
"""
import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sys.path.append('backend')

from modbus_client import PLCClient
import time

print("=" * 70)
print("ALARM SCENARIO TEST")
print("=" * 70)

# 시뮬레이터 초기화
plc = PLCClient(host="192.168.0.130", port=502, slave_id=3, use_simulation=True)

print("\nTest started - monitoring for 70 seconds...")
print("  - 0~59s: Normal range")
print("  - 60~69s: Alarm condition (TX6 > 50C, DPX1 < 1.5 bar)")
print("  - 70s~: Back to normal\n")

start_time = time.time()

for i in range(75):
    elapsed = time.time() - start_time

    # 센서 데이터 가져오기
    sensors = plc.get_sensor_data()

    tx6 = sensors.get("TX6", 0)
    dpx1 = sensors.get("DPX1", 0)

    # 알람 조건 확인
    tx6_alarm = tx6 > 50.0
    dpx1_alarm = dpx1 < 1.5

    # 주기적으로 출력 (10초마다 + 알람 발생 시)
    if i % 10 == 0 or tx6_alarm or dpx1_alarm:
        status = ""
        if tx6_alarm and dpx1_alarm:
            status = "[ALARM!]"
        elif tx6_alarm or dpx1_alarm:
            status = "[PARTIAL]"
        else:
            status = "[OK]"

        print(f"[{int(elapsed):3d}s] TX6: {tx6:5.1f}C  DPX1: {dpx1:5.2f} bar  {status}")

    time.sleep(1)

print("\nTest completed!")
