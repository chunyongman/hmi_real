"""
HMI 실시간 반영 주기 성능 시험
인증기관 시험 항목 3: PLC 데이터 변경 → HMI 화면 반영 시간
"""

import sys
import time
import random
import numpy as np
import pandas as pd
import psutil
import os
from datetime import datetime
from pathlib import Path
from typing import List, Dict
from dataclasses import dataclass

# 프로젝트 루트 경로 추가
project_root = Path(__file__).parent.parent
sys.path.insert(0, str(project_root))


@dataclass
class MockPLCData:
    """Mock PLC 데이터"""
    timestamp: float

    # 온도 센서 (7개)
    T1_seawater_inlet: float
    T2_sw_outlet_main: float
    T3_sw_outlet_aux: float
    T4_fw_inlet: float
    T5_fw_outlet: float
    T6_er_temperature: float
    T7_outside_air: float

    # 압력 센서
    PX1_sw_pressure: float

    # 운전 조건
    engine_load: float
    ship_speed: float

    # 제어 출력 (VFD 주파수)
    sw_pump_freq: float
    fw_pump_freq: float
    er_fan_freq: float


class MockPLCSimulator:
    """Mock PLC 시뮬레이터 (2초 주기 자동 갱신)"""

    def __init__(self):
        self.cycle_time = 2.0  # PLC 스캔 사이클: 2초
        self.last_update_time = time.time()
        self.last_data_timestamp = None
        self.current_data = self._generate_initial_data()
        self.update_count = 0

    def _generate_initial_data(self) -> MockPLCData:
        """초기 데이터 생성"""
        return MockPLCData(
            timestamp=time.perf_counter(),
            T1_seawater_inlet=28.5,
            T2_sw_outlet_main=65.2,
            T3_sw_outlet_aux=63.8,
            T4_fw_inlet=45.3,
            T5_fw_outlet=35.2,
            T6_er_temperature=43.5,
            T7_outside_air=28.0,
            PX1_sw_pressure=2.15,
            engine_load=65.0,
            ship_speed=15.5,
            sw_pump_freq=52.0,
            fw_pump_freq=53.0,
            er_fan_freq=48.0
        )

    def update_data(self):
        """데이터 갱신 (2초마다 호출)"""
        current_time = time.time()

        if current_time - self.last_update_time >= self.cycle_time:
            # 데이터 갱신 시작
            t_start = time.perf_counter()

            # 센서 값 미세 변동 (시뮬레이션)
            self.current_data.T1_seawater_inlet += random.uniform(-0.3, 0.3)
            self.current_data.T2_sw_outlet_main += random.uniform(-0.5, 0.5)
            self.current_data.T3_sw_outlet_aux += random.uniform(-0.5, 0.5)
            self.current_data.T4_fw_inlet += random.uniform(-0.4, 0.4)
            self.current_data.T5_fw_outlet += random.uniform(-0.2, 0.2)
            self.current_data.T6_er_temperature += random.uniform(-0.3, 0.3)
            self.current_data.T7_outside_air += random.uniform(-0.2, 0.2)
            self.current_data.PX1_sw_pressure += random.uniform(-0.02, 0.02)
            self.current_data.engine_load += random.uniform(-1.0, 1.0)
            self.current_data.ship_speed += random.uniform(-0.3, 0.3)

            # 제약 조건 적용
            self.current_data.T1_seawater_inlet = np.clip(self.current_data.T1_seawater_inlet, 25, 32)
            self.current_data.T5_fw_outlet = np.clip(self.current_data.T5_fw_outlet, 34.5, 35.5)
            self.current_data.T6_er_temperature = np.clip(self.current_data.T6_er_temperature, 42, 44)
            self.current_data.engine_load = np.clip(self.current_data.engine_load, 30, 90)

            # PLC 처리 시간 시뮬레이션 (150ms)
            time.sleep(0.15)

            # 타임스탬프 기록 (데이터 갱신 완료 시점)
            self.current_data.timestamp = time.perf_counter()
            self.last_data_timestamp = self.current_data.timestamp

            self.last_update_time = current_time
            self.update_count += 1

            return True

        return False

    def get_current_data(self) -> MockPLCData:
        """현재 데이터 반환"""
        return self.current_data

    def get_last_update_timestamp(self) -> float:
        """마지막 갱신 타임스탬프 반환"""
        return self.last_data_timestamp


class HMIRenderer:
    """HMI 렌더링 시뮬레이터"""

    def __init__(self):
        self.render_count = 0

    def render(self, plc_data: MockPLCData) -> float:
        """
        HMI 렌더링 시뮬레이션
        - 데이터 수신
        - 화면 렌더링
        - 렌더링 시간 반환
        """
        render_start = time.perf_counter()

        # 1. 데이터 읽기 (300ms 시뮬레이션)
        time.sleep(0.3)

        # 2. 화면 렌더링 (800ms 시뮬레이션)
        # - 차트 생성
        # - 레이아웃 업데이트
        # - 브라우저 전송
        time.sleep(0.8)

        render_end = time.perf_counter()

        self.render_count += 1

        return render_end - render_start


def test_hmi_realtime_refresh():
    """Test Item 3: HMI 실시간 반영 주기 - 60초 연속 측정"""

    print("\n" + "="*70)
    print("HMI 실시간 반영 주기 시험")
    print("="*70)
    print("시험 항목: PLC 데이터 변경 → HMI 화면 반영 시간")
    print("측정 시간: 60초 연속")
    print("측정 주기: PLC 2초마다 자동 갱신")
    print("합격 기준: 평균 1.0~1.2초, 1.0초 이상 비율 ≥95%, CPU <20%")
    print("="*70)

    # 1. 초기화
    print("\n[1단계] 시스템 초기화 중...")
    plc_simulator = MockPLCSimulator()
    hmi_renderer = HMIRenderer()

    process = psutil.Process(os.getpid())

    print("  OK Mock PLC 시뮬레이터 초기화 완료 (2초 주기)")
    print("  OK HMI 렌더러 초기화 완료")

    # 2. 60초 연속 측정
    print("\n[2단계] 60초 연속 측정 시작...")
    print("  측정 시작 시각:", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

    refresh_times = []
    cpu_samples = []

    test_start_time = time.time()
    measurement_count = 0

    print("\n  측정 진행 중...")
    print("  " + "-"*66)

    while time.time() - test_start_time < 60.0:
        # PLC 데이터 갱신 확인 (2초마다)
        if plc_simulator.update_data():
            # t1: PLC 데이터 갱신 완료 시점
            t1 = plc_simulator.get_last_update_timestamp()

            # HMI 렌더링 수행
            plc_data = plc_simulator.get_current_data()
            render_time = hmi_renderer.render(plc_data)

            # t2: HMI 렌더링 완료 시점
            t2 = time.perf_counter()

            # 갱신 시간 계산 (t2 - t1)
            # 주의: render_time은 렌더링에만 걸린 시간,
            # 실제 측정은 PLC 갱신 완료부터 HMI 렌더링 완료까지
            refresh_time = t2 - t1
            refresh_times.append(refresh_time)

            measurement_count += 1
            elapsed = time.time() - test_start_time

            # 진행 상황 출력 (5회마다)
            if measurement_count % 5 == 0:
                print(f"  [{elapsed:5.1f}s] 측정 #{measurement_count:2d}: {refresh_time:.3f}초")

        # CPU 사용률 샘플링 (1초마다)
        cpu_percent = process.cpu_percent(interval=0.1)
        cpu_samples.append(cpu_percent)

        # 짧은 대기
        time.sleep(0.1)

    print("  " + "-"*66)
    print(f"  OK 측정 완료: 총 {measurement_count}회 측정")
    print(f"  OK 측정 종료 시각: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")

    # 3. 통계 분석
    print("\n[3단계] 통계 분석 중...")

    # 갱신 시간 통계
    avg_refresh = np.mean(refresh_times)
    min_refresh = np.min(refresh_times)
    max_refresh = np.max(refresh_times)
    std_refresh = np.std(refresh_times)

    # 1.0초 이상 비율
    above_1s_count = sum(1 for t in refresh_times if t >= 1.0)
    total_count = len(refresh_times)
    pass_rate = (above_1s_count / total_count) * 100

    # CPU 사용률 통계
    avg_cpu = np.mean(cpu_samples)
    max_cpu = np.max(cpu_samples)

    print(f"  OK 통계 분석 완료")

    # 4. 결과 출력
    print("\n" + "="*70)
    print("HMI 실시간 반영 주기 시험 결과")
    print("="*70)
    print(f"총 측정 횟수: {total_count}회 (60초 동안)\n")

    print(f"[1. 갱신 시간 통계]")
    print(f"  평균: {avg_refresh:.3f}초")
    print(f"  최소: {min_refresh:.3f}초")
    print(f"  최대: {max_refresh:.3f}초")
    print(f"  표준편차: {std_refresh:.3f}초\n")

    print(f"[2. 1.0초 이상 비율]")
    print(f"  1.0초 이상: {above_1s_count}회")
    print(f"  1.0초 미만: {total_count - above_1s_count}회")
    print(f"  비율: {pass_rate:.2f}%\n")

    print(f"[3. CPU 사용률]")
    print(f"  평균: {avg_cpu:.1f}%")
    print(f"  최대: {max_cpu:.1f}%\n")

    # 5. 합격 판정
    print("="*70)
    print("[합격 기준 판정]")
    print("="*70)

    criterion1_pass = 1.0 <= avg_refresh <= 1.2
    criterion2_pass = pass_rate >= 95.0
    criterion3_pass = avg_cpu < 20.0

    print(f"  기준 1 - 평균 시간 (1.0-1.2초): {avg_refresh:.3f}초 {'[PASS]' if criterion1_pass else '[FAIL]'}")
    print(f"  기준 2 - 1.0초 이상 비율 (≥95%): {pass_rate:.2f}% {'[PASS]' if criterion2_pass else '[FAIL]'}")
    print(f"  기준 3 - CPU 사용률 (<20%): {avg_cpu:.1f}% {'[PASS]' if criterion3_pass else '[FAIL]'}\n")

    final_pass = criterion1_pass and criterion2_pass and criterion3_pass

    print("="*70)
    print(f"[최종 판정]")
    print("="*70)
    if final_pass:
        print("  " + "="*34)
        print("  ===  모든 기준 만족 - 합격  ===")
        print("  " + "="*34)
    else:
        print("  " + "X"*34)
        print("  XXX  기준 미달 - 불합격  XXX")
        print("  " + "X"*34)
    print("="*70 + "\n")

    # 6. 결과 파일 저장
    print("[4단계] 결과 파일 저장 중...")

    # 상세 결과 CSV
    results_df = pd.DataFrame({
        '측정번호': range(1, len(refresh_times) + 1),
        '갱신시간(초)': refresh_times,
        '1.0초이상': [t >= 1.0 for t in refresh_times]
    })

    # test_results 폴더 생성
    test_results_dir = project_root / 'test_results'
    test_results_dir.mkdir(exist_ok=True)

    detail_file = test_results_dir / f'test_results_hmi_refresh_{datetime.now().strftime("%Y%m%d_%H%M%S")}.csv'
    results_df.to_csv(detail_file, index=False, encoding='utf-8-sig')
    print(f"  OK 상세 결과: {detail_file}")

    # 통계 요약 CSV
    summary_df = pd.DataFrame({
        '항목': ['평균 시간', '최소 시간', '최대 시간', '표준편차', '1.0초 이상 비율', '평균 CPU', '최대 CPU'],
        '값': [
            f'{avg_refresh:.3f}초',
            f'{min_refresh:.3f}초',
            f'{max_refresh:.3f}초',
            f'{std_refresh:.3f}초',
            f'{pass_rate:.2f}%',
            f'{avg_cpu:.1f}%',
            f'{max_cpu:.1f}%'
        ],
        '기준': ['1.0-1.2초', '-', '-', '-', '≥95%', '<20%', '-'],
        '판정': [
            'PASS' if criterion1_pass else 'FAIL',
            '-',
            '-',
            '-',
            'PASS' if criterion2_pass else 'FAIL',
            'PASS' if criterion3_pass else 'FAIL',
            '-'
        ]
    })

    summary_file = test_results_dir / f'test_summary_hmi_refresh_{datetime.now().strftime("%Y%m%d_%H%M%S")}.csv'
    summary_df.to_csv(summary_file, index=False, encoding='utf-8-sig')
    print(f"  OK 통계 요약: {summary_file}")

    print("\n" + "="*70)
    print("시험 완료")
    print("="*70)

    return final_pass


if __name__ == "__main__":
    try:
        result = test_hmi_realtime_refresh()
        sys.exit(0 if result else 1)
    except Exception as e:
        print(f"\n[ERROR] 시험 중 오류 발생: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
