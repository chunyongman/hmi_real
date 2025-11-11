# 🚢 ESS HMI 웹 버전 - HMI 배포 가이드

## 📋 목차
1. [원본 프로그램 vs 웹 버전](#원본-프로그램-vs-웹-버전)
2. [HMI에서 사용하는 3가지 방법](#hmi에서-사용하는-3가지-방법)
3. [방법 1: 웹 브라우저로 접속](#방법-1-웹-브라우저로-접속-추천)
4. [방법 2: HMI에 직접 설치](#방법-2-hmi에-직접-설치)
5. [방법 3: Electron exe 패키징](#방법-3-electron-exe-패키징)
6. [HMI 자동 실행 설정](#hmi-자동-실행-설정)
7. [문제 해결](#문제-해결)

---

## 🖥️ 원본 프로그램 vs 웹 버전

### **원본 프로그램 (SMT_HMI.exe)**
```
PC/HMI 장비
└─ SMT_HMI.exe 실행
   └─ 전체 화면으로 실행
   └─ 전용 하드웨어에서만 작동
   └─ 단일 장비에서만 사용
```

### **웹 버전 (현재 구현)**
```
서버 PC
├─ 백엔드 (Python FastAPI)
├─ 프론트엔드 (React)
└─ PLC 통신

     ↓ 네트워크 (LAN)

다른 PC/HMI/태블릿
└─ 웹 브라우저로 접속
   http://서버IP:3000
```

**장점:**
- ✅ 여러 장비에서 동시 접속 가능
- ✅ 스마트폰, 태블릿에서도 사용 가능
- ✅ 업데이트가 쉬움 (서버만 업데이트)
- ✅ 설치가 간단함
- ✅ 어떤 OS에서도 작동 (Windows, Linux, Android)

---

## 🎯 HMI에서 사용하는 3가지 방법

### **비교표**

| 방법 | 난이도 | 장점 | 단점 | 추천 용도 |
|------|--------|------|------|-----------|
| **방법 1: 웹 브라우저** | ⭐ 쉬움 | 설치 간단, 여러 HMI 접속 | 서버 필요 | 테스트, 다중 HMI |
| **방법 2: 직접 설치** | ⭐⭐⭐ 어려움 | 독립 작동 | 성능 필요, 유지보수 어려움 | 단독 HMI |
| **방법 3: Electron exe** | ⭐⭐ 보통 | 원본과 유사, 독립 작동 | 패키징 필요 | 실제 운영 환경 |

---

## 🌐 방법 1: 웹 브라우저로 접속 (추천)

### **시스템 구성**

```
[서버 PC]                    [HMI 장비 1]
백엔드 실행                    Chrome 브라우저
프론트엔드 실행   ←─ LAN ─→   http://서버IP:3000
PLC 통신                       전체화면 (F11)
                              
                             [HMI 장비 2]
                  ←─ LAN ─→   동시 접속 가능
```

### **Step 1: 서버 PC 설정**

#### 1-1. 프로그램 실행

**자동 실행 방법 (권장):**
```powershell
cd C:\Users\my\Desktop\HMI\ess-hmi-web
.\start.ps1
```

**수동 실행 방법:**

터미널 1 - PLC 시뮬레이터:
```powershell
cd C:\Users\my\Desktop\HMI\ess-hmi-web\backend
python plc_simulator.py
```

터미널 2 - 백엔드:
```powershell
cd C:\Users\my\Desktop\HMI\ess-hmi-web\backend
python main.py
```

터미널 3 - 프론트엔드:
```powershell
cd C:\Users\my\Desktop\HMI\ess-hmi-web\frontend
npm run dev
```

#### 1-2. 서버 IP 주소 확인

```powershell
ipconfig
```

결과 예시:
```
이더넷 어댑터 이더넷:
   IPv4 주소 . . . . . . . . . : 192.168.0.100
```

**이 IP 주소를 기억하세요!** (예: `192.168.0.100`)

#### 1-3. 방화벽 설정

Windows 방화벽에서 포트 허용:

```powershell
# PowerShell 관리자 권한으로 실행
New-NetFirewallRule -DisplayName "ESS HMI Backend" -Direction Inbound -LocalPort 8000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ESS HMI Frontend" -Direction Inbound -LocalPort 3000 -Protocol TCP -Action Allow
```

또는 수동 설정:
1. `Windows Defender 방화벽` → `고급 설정`
2. `인바운드 규칙` → `새 규칙`
3. `포트` → `TCP` → `3000, 8000` 입력
4. `연결 허용` → 이름: `ESS HMI`

### **Step 2: HMI 장비 설정**

#### 2-1. 네트워크 연결 확인

HMI와 서버 PC가 같은 네트워크에 있는지 확인:

```powershell
# HMI에서 실행
ping 192.168.0.100
```

성공 시:
```
192.168.0.100에 대한 응답: 바이트=32 시간<1ms TTL=128
```

#### 2-2. 웹 브라우저 설치

HMI에 브라우저가 없다면:
- **Chrome** (권장): https://www.google.com/chrome/
- **Edge**: Windows에 기본 설치됨

#### 2-3. HMI에서 접속

브라우저 주소창에 입력:
```
http://192.168.0.100:3000
```

#### 2-4. 전체화면 모드

- **F11** 키 누르기
- 또는 브라우저 설정 → 전체화면

### **Step 3: 바로가기 만들기**

HMI 바탕화면에 바로가기:

**Chrome 전용 모드 (앱처럼 실행):**

`ESS_HMI.bat` 파일 생성:
```batch
@echo off
start chrome --kiosk --app=http://192.168.0.100:3000
```

**특징:**
- ✅ 주소창 없음
- ✅ 전체화면 자동
- ✅ 앱처럼 실행

---

## 🖥️ 방법 2: HMI에 직접 설치

HMI 장비 자체에 모든 것을 설치하는 방법.

### **시스템 요구사항**

- **OS**: Windows 10/11
- **CPU**: Intel i5 이상
- **RAM**: 8GB 이상
- **저장공간**: 2GB 이상

### **설치 과정**

#### 1. Python 설치

1. https://www.python.org/downloads/
2. Python 3.9 이상 다운로드
3. 설치 시 **"Add Python to PATH"** 체크

#### 2. Node.js 설치

1. https://nodejs.org/
2. LTS 버전 다운로드
3. 기본 설정으로 설치

#### 3. 프로그램 복사

서버 PC에서 HMI로 폴더 전체 복사:
```
C:\Users\my\Desktop\HMI\ess-hmi-web
```

#### 4. 의존성 설치

**백엔드:**
```powershell
cd C:\ess-hmi-web\backend
pip install -r requirements.txt
```

**프론트엔드:**
```powershell
cd C:\ess-hmi-web\frontend
npm install
```

#### 5. 빌드

```powershell
cd C:\ess-hmi-web\frontend
npm run build
```

#### 6. 실행 스크립트 생성

`C:\ess-hmi-web\start_hmi.bat`:
```batch
@echo off
echo ESS HMI 시작 중...

start "PLC Simulator" cmd /k "cd backend && python plc_simulator.py"
timeout /t 3

start "Backend" cmd /k "cd backend && python main.py"
timeout /t 5

start "Frontend" cmd /k "cd frontend && npm run dev"
timeout /t 5

start chrome --kiosk --app=http://localhost:3000

echo ESS HMI가 시작되었습니다.
```

#### 7. 자동 실행 설정

`시작` 폴더에 바로가기 복사:
```
C:\Users\사용자명\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup
```

---

## 📦 방법 3: Electron exe 패키징

웹 앱을 독립 실행 exe 파일로 변환.

### **장점**
- ✅ 원본처럼 exe 파일 실행
- ✅ 설치 간단
- ✅ 독립적으로 작동
- ✅ 전문적인 느낌

### **패키징 과정**

#### 1. Electron 설치

```powershell
cd C:\Users\my\Desktop\HMI\ess-hmi-web
npm install -g electron-builder
```

#### 2. Electron 프로젝트 설정

`electron` 폴더 생성 및 설정 파일:

**`electron/package.json`:**
```json
{
  "name": "ess-hmi",
  "version": "1.0.0",
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "build": "electron-builder"
  },
  "build": {
    "appId": "com.ess.hmi",
    "productName": "ESS HMI",
    "win": {
      "target": "nsis",
      "icon": "icon.ico"
    }
  },
  "dependencies": {
    "electron": "^25.0.0"
  },
  "devDependencies": {
    "electron-builder": "^24.0.0"
  }
}
```

**`electron/main.js`:**
```javascript
const { app, BrowserWindow } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let backendProcess;
let simulatorProcess;
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    fullscreen: true,
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'icon.ico'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // 백엔드와 시뮬레이터가 시작될 때까지 대기
  setTimeout(() => {
    mainWindow.loadURL('http://localhost:3000');
  }, 5000);
}

function startBackend() {
  // PLC 시뮬레이터 시작
  simulatorProcess = spawn('python', ['../backend/plc_simulator.py'], {
    cwd: path.join(__dirname, '..')
  });

  // 백엔드 시작
  backendProcess = spawn('python', ['../backend/main.py'], {
    cwd: path.join(__dirname, '..')
  });
}

app.whenReady().then(() => {
  startBackend();
  createWindow();
});

app.on('window-all-closed', () => {
  if (backendProcess) backendProcess.kill();
  if (simulatorProcess) simulatorProcess.kill();
  app.quit();
});
```

#### 3. 빌드

```powershell
cd C:\Users\my\Desktop\HMI\ess-hmi-web\electron
npm run build
```

#### 4. 결과

```
dist/
└─ ESS HMI Setup 1.0.0.exe  ← 설치 파일
```

이 파일을 HMI에 복사하고 실행하면 원본처럼 사용 가능!

---

## ⚙️ HMI 자동 실행 설정

HMI가 부팅될 때 자동으로 ESS HMI 실행.

### **방법 1: 시작 프로그램에 추가**

1. `Win + R` → `shell:startup`
2. 바로가기 복사:
   - `ESS_HMI.bat` (방법 1)
   - `start_hmi.bat` (방법 2)
   - `ESS HMI.exe` (방법 3)

### **방법 2: 작업 스케줄러**

1. `작업 스케줄러` 실행
2. `작업 만들기`
3. **트리거**: 로그온할 때
4. **동작**: 프로그램 시작
5. **프로그램**: 실행 파일 경로

### **방법 3: Windows 자동 로그인**

HMI 전용 장비라면:

1. `Win + R` → `netplwiz`
2. "사용자 이름과 암호 입력" 체크 해제
3. 자동 로그인 계정 설정

---

## 🔧 문제 해결

### **문제 1: HMI에서 접속이 안 됨**

#### 증상:
```
사이트에 연결할 수 없음
```

#### 해결:

1. **서버 실행 확인:**
```powershell
# 서버 PC에서
netstat -an | findstr "3000 8000"
```

출력이 있어야 함:
```
TCP    0.0.0.0:3000      0.0.0.0:0      LISTENING
TCP    0.0.0.0:8000      0.0.0.0:0      LISTENING
```

2. **네트워크 연결 확인:**
```powershell
# HMI에서
ping 192.168.0.100
```

3. **방화벽 확인:**
- 서버 PC의 방화벽에서 3000, 8000 포트 허용

4. **IP 주소 재확인:**
- 서버 IP가 변경되었을 수 있음

### **문제 2: 화면이 느림**

#### 원인:
- HMI 성능 부족
- 네트워크 지연

#### 해결:

1. **프론트엔드 빌드 사용:**
```powershell
cd frontend
npm run build
npm install -g serve
serve -s dist -l 3000
```

2. **업데이트 주기 조정:**

`frontend/src/App.jsx`에서:
```javascript
await asyncio.sleep(1)  // 1초 → 2초로 변경
```

### **문제 3: Python/Node.js 없음**

#### 증상:
```
'python'은(는) 내부 또는 외부 명령... 아닙니다.
```

#### 해결:

1. Python 설치: https://www.python.org/
2. Node.js 설치: https://nodejs.org/
3. 설치 시 "Add to PATH" 체크
4. 터미널 재시작

### **문제 4: 포트 충돌**

#### 증상:
```
Address already in use
```

#### 해결:

```powershell
# 3000 포트 사용 중인 프로세스 찾기
netstat -ano | findstr :3000

# 프로세스 종료 (PID 확인 후)
taskkill /PID [프로세스ID] /F
```

---

## 📱 추가 팁

### **모바일/태블릿에서 접속**

같은 Wi-Fi 네트워크에서:

```
http://192.168.0.100:3000
```

홈 화면에 추가하면 앱처럼 사용 가능!

### **외부에서 접속 (원격 모니터링)**

⚠️ 보안 주의 필요!

1. **포트 포워딩** 설정 (공유기)
2. **VPN** 사용 (권장)
3. **HTTPS** 설정 (필수)

### **성능 최적화**

1. **프로덕션 빌드 사용**
2. **불필요한 프로그램 종료**
3. **HMI 재부팅** (메모리 초기화)

---

## 📞 지원 정보

### **문서**
- `사용자_가이드.md` - 기능 설명
- `전체_구현_완료.md` - 구현 내역
- `README.md` - 개발자 가이드

### **파일 위치**
```
C:\Users\my\Desktop\HMI\ess-hmi-web\
├─ backend\           # Python 백엔드
├─ frontend\          # React 프론트엔드
├─ start.ps1          # 자동 실행 스크립트
└─ 사용자_가이드.md   # 사용 설명서
```

---

## ✅ 체크리스트

### **방법 1 (웹 브라우저) 설정 완료**

- [ ] 서버 PC에서 프로그램 실행
- [ ] IP 주소 확인
- [ ] 방화벽 포트 허용
- [ ] HMI에서 브라우저로 접속 테스트
- [ ] 전체화면 (F11) 설정
- [ ] 바로가기 생성
- [ ] 자동 실행 설정 (선택)

### **방법 2 (직접 설치) 설정 완료**

- [ ] Python 설치
- [ ] Node.js 설치
- [ ] 프로그램 파일 복사
- [ ] 의존성 설치
- [ ] 실행 스크립트 생성
- [ ] 자동 실행 설정

### **방법 3 (Electron) 설정 완료**

- [ ] Electron 패키징
- [ ] exe 파일 생성
- [ ] HMI에 설치
- [ ] 실행 테스트
- [ ] 자동 실행 설정

---

**제작일**: 2025년 10월 17일  
**버전**: 1.0  
**작성자**: AI Assistant




