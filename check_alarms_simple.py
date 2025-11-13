import requests
import time

print("Checking backend for 70 seconds...")
start = time.time()

for i in range(70):
    try:
        r = requests.get("http://localhost:8000/api/alarms/active", timeout=1)
        data = r.json()
        elapsed = int(time.time() - start)

        summary = data.get("summary", {})
        total = summary.get("total", 0)

        if total > 0 or elapsed % 10 == 0:
            print(f"[{elapsed}s] Total alarms: {total} (critical:{summary.get('critical',0)}, warning:{summary.get('warning',0)})")

            if total > 0:
                for alarm in data.get("data", []):
                    print(f"  - {alarm.get('message')}")
    except:
        print(f"[{int(time.time()-start)}s] Backend not responding")

    time.sleep(1)

print("\nDone!")
