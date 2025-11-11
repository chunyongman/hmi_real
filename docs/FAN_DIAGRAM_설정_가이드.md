# 🌀 E/R Ventilation System (FAN Diagram) 설정 가이드

E/R 환기 시스템 화면을 완성하기 위한 단계별 가이드입니다.

---

## 📋 준비된 파일 목록

✅ **이미 생성된 파일들:**

1. **`frontend/src/config/fanMapping.js`** - 센서/팬 데이터 매핑 설정
2. **`frontend/src/components/FanDiagram.jsx`** - 화면 렌더링 컴포넌트
3. **`frontend/src/components/FanDiagram.css`** - 스타일
4. **`frontend/src/App.jsx`** - "🌀 E/R 환기" 탭 추가 완료

---

## 📁 STEP 1: SVG 파일 복사

### fan_diagram.svg 파일을 다음 위치에 복사하세요:

```
C:\Users\my\Desktop\Unayzah Exp_HMI(100Pa_241219)N\HMI_WEB_NEW\frontend\src\assets\fan_diagram.svg
```

**현재 assets 폴더 구조:**
```
frontend/src/assets/
├── cooling_diagram_new.svg  ← 배관 계통도 (이미 있음)
└── fan_diagram.svg          ← 여기에 FAN SVG 파일 복사!
```

---

## 🔍 STEP 2: SVG 파일에서 ID 확인

SVG 파일을 텍스트 에디터로 열어서 다음 요소들의 ID를 확인하세요:

### 2-1. 센서 라벨 ID 찾기

SVG에서 다음 센서들이 표시되는 위치의 `<text>` 요소 ID를 찾으세요:

```svg
<!-- 예시 -->
<text id="TX5_LABEL" x="100" y="200">TX5</text>
<text id="TX6_LABEL" x="200" y="300">TX6</text>
<text id="TX7_LABEL" x="300" y="400">TX7</text>
<text id="DPX2_LABEL" x="400" y="500">DPX2</text>
<text id="PU1_LABEL" x="500" y="600">PU1</text>
```

### 2-2. 팬 데이터 표시 위치 ID 찾기

각 FAN(1~4)에 대해 다음 4가지 정보를 표시할 위치의 ID를 찾으세요:

- **MODE** - AUTO/MAN 표시
- **Hz** - 주파수 표시
- **DIR** - FWD/BWD 방향 표시
- **RUN_H** - 운전시간 표시

```svg
<!-- FAN1 예시 -->
<text id="FAN1_MODE" x="150" y="250">MAN</text>
<text id="FAN1_Hz" x="150" y="270">0.0 Hz</text>
<text id="FAN1_DIR" x="150" y="290">STOP</text>
<text id="FAN1_RUN_H" x="150" y="310">0 h</text>
```

---

## ⚙️ STEP 3: fanMapping.js 수정

**`frontend/src/config/fanMapping.js`** 파일을 열어서 STEP 2에서 찾은 실제 ID로 수정하세요:

```javascript
export const fanSensorMapping = {
  // SVG에서 찾은 실제 ID로 변경!
  TX5: { labelId: '실제ID', unit: '°C', decimal: 1 },
  TX6: { labelId: '실제ID', unit: '°C', decimal: 1 },
  TX7: { labelId: '실제ID', unit: '°C', decimal: 1 },
  DPX2: { labelId: '실제ID', unit: ' Pa', decimal: 1 },
  PU1: { labelId: '실제ID', unit: '%', decimal: 1 },
}

export const fanMapping = {
  0: { // FAN1
    name: 'FAN1',
    symbolIds: {
      mode: '실제ID',         // MAN/AUTO
      hz: '실제ID',           // 주파수
      direction: '실제ID',    // FWD/BWD
      runningHour: '실제ID'   // 운전시간
    }
  },
  // FAN2, FAN3, FAN4도 동일하게 수정
}
```

---

## 📐 STEP 4: 팬 클릭 영역 설정

**`frontend/src/components/FanDiagram.jsx`** 파일을 열어서 `fanAreas` 배열의 좌표를 수정하세요:

```javascript
const fanAreas = [
  // SVG에서 FAN 이미지의 실제 위치와 크기로 수정!
  { index: 0, name: 'FAN1', x: 200, y: 200, width: 100, height: 100 },
  { index: 1, name: 'FAN2', x: 400, y: 200, width: 100, height: 100 },
  { index: 2, name: 'FAN3', x: 200, y: 400, width: 100, height: 100 },
  { index: 3, name: 'FAN4', x: 400, y: 400, width: 100, height: 100 },
]
```

**좌표 찾는 방법:**
1. SVG를 Inkscape나 Illustrator 같은 툴로 열기
2. 각 FAN 이미지의 위치(x, y)와 크기(width, height) 확인
3. 위 배열의 값을 실제 좌표로 수정

---

## 🎨 STEP 5: 브라우저에서 확인

1. 브라우저 새로고침 (`F5`)
2. 상단 탭에서 **"🌀 E/R 환기"** 클릭
3. SVG 다이어그램이 표시되는지 확인

### 예상 결과:

**SVG 파일이 있는 경우:**
- E/R Ventilation System 다이어그램 표시
- 센서 데이터 실시간 업데이트
- FAN 클릭 시 제어 패널 표시

**SVG 파일이 없는 경우:**
- 안내 메시지 표시:
  ```
  🌀
  E/R Ventilation System
  fan_diagram.svg 파일을 추가해주세요
  파일 위치: frontend/src/assets/fan_diagram.svg
  ```

---

## 🔧 STEP 6: 테스트

### 6-1. 센서 데이터 표시 확인
- TX5, TX6, TX7 온도 값이 실시간으로 업데이트되는지 확인
- DPX2 압력 값 표시 확인
- PU1 M/E 부하 표시 확인

### 6-2. FAN 데이터 표시 확인
각 FAN(1~4)에 대해:
- 주파수(Hz) 표시
- 운전 방향(FWD/BWD/STOP) 표시
- 운전시간(h) 표시
- MAN/AUTO 모드 표시

### 6-3. FAN 제어 테스트
1. FAN 이미지 클릭
2. 제어 패널 표시 확인
3. 정방향/역방향/정지 버튼 테스트

---

## 📊 데이터 구조

### 센서 데이터 (sensors 객체)
```javascript
{
  TX5: 25.3,    // ESS Batt Temp (°C)
  TX6: 28.7,    // E/R Inside Temp (°C)
  TX7: 22.1,    // E/R Outside Temp (°C)
  DPX2: 95.5,   // E/R Diff Press (Pa)
  PU1: 65.2     // M/E Load (%)
}
```

### FAN 데이터 (fans 배열)
```javascript
[
  {
    name: "FAN1",
    running_fwd: true,      // 정방향 운전
    running_bwd: false,     // 역방향 운전
    frequency: 45.2,        // Hz
    power_kw: 12.5,         // kW
    run_hours: 1234,        // h
    ess_mode: true          // AUTO/MAN
  },
  // FAN2, FAN3, FAN4 ...
]
```

---

## 🐛 문제 해결

### 문제 1: SVG가 표시되지 않음
**원인:** fan_diagram.svg 파일이 없음
**해결:** assets 폴더에 SVG 파일 복사

### 문제 2: 센서 값이 업데이트 안됨
**원인:** fanMapping.js의 ID가 실제 SVG ID와 다름
**해결:** SVG 파일에서 실제 ID 확인 후 수정

### 문제 3: FAN 클릭이 안됨
**원인:** 클릭 영역 좌표가 잘못됨
**해결:** FanDiagram.jsx의 fanAreas 좌표 수정

### 문제 4: 제어 명령이 안됨
**원인:** 백엔드 서버가 실행 중이 아님
**해결:** START_HMI.bat 실행 확인

---

## ✅ 완료 체크리스트

- [ ] fan_diagram.svg 파일을 assets 폴더에 복사
- [ ] SVG 파일에서 센서 ID 확인
- [ ] SVG 파일에서 FAN 데이터 표시 위치 ID 확인
- [ ] fanMapping.js 수정 (센서 ID)
- [ ] fanMapping.js 수정 (FAN ID)
- [ ] FanDiagram.jsx의 클릭 영역 좌표 수정
- [ ] 브라우저에서 화면 표시 확인
- [ ] 센서 데이터 업데이트 확인
- [ ] FAN 데이터 업데이트 확인
- [ ] FAN 클릭 및 제어 테스트

---

## 📝 참고 사항

1. **SVG ID 찾기 팁:**
   - Inkscape: 객체 선택 → 우클릭 → Object Properties → ID
   - 텍스트 에디터: `id="..."` 검색

2. **좌표 찾기 팁:**
   - SVG viewBox가 `0 0 1024 768`인 경우
   - x, y 값은 0~1024, 0~768 범위

3. **테스트 환경:**
   - 시뮬레이터 모드에서 먼저 테스트
   - 실제 PLC 연결 전 완벽히 테스트

---

**🎉 설정이 완료되면 cooling_diagram_new.svg와 동일한 방식으로 E/R Ventilation System이 작동합니다!**
