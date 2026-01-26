# GM TBI EFI Swap – Step‑by‑Step Parts List
## 1986 Jeep Comanche MJ – 2.5L I4 (Renix Replacement Option)

**Purpose:** Provide a clear, realistic parts list and workflow for converting a Renix‑equipped 2.5L MJ to **GM TBI EFI**, so it can be compared side‑by‑side with a refreshed Renix system.

This assumes:
- Stock AMC 150 (2.5L)
- Manual transmission
- Existing fuel injection (not carb)
- Reliability and serviceability are the top priorities

---

## Why GM TBI?

GM TBI is chosen because it is:
- Mass‑produced (millions of units)
- Simple (minimal sensors)
- Extremely tolerant of wiring imperfections
- Fully documented and tunable
- Still supported with new and reman parts

This is **not** a performance swap — it is a reliability upgrade.

---

## SYSTEM OVERVIEW

A GM TBI swap consists of five subsystems:

1. Throttle Body & Fuel Delivery
2. ECU & Harness
3. Sensors
4. Ignition Integration
5. Exhaust & O2

Each subsystem is listed in **acquisition order**.

---

## STEP 1 — ECU & CONTROL SYSTEM (CORE)

### Required

| Part | Notes |
|-----|------|
| GM ECU **1227747** | Best TBI ECU, most supported |
| PROM chip | Stock 4‑cyl or custom burned |
| ECU mounting bracket | DIY or aftermarket |

**Notes:**
- The 7747 ECU supports batch fire TBI and closed‑loop O2
- PROM can be tuned later; stock chip is enough to run

---

## STEP 2 — WIRING HARNESS

### Options

| Option | Pros | Cons |
|------|------|------|
| Howell standalone harness | Plug‑and‑play, labeled | $$$ |
| DIY reworked GM harness | Cheap, flexible | Time investment |

### Harness Must Support
- Switched ignition power
- Constant battery power
- Fuel pump relay
- ALDL diagnostic port

**Compatibility Win:**
The Renix harness simplification already matches this layout.

---

## STEP 3 — THROTTLE BODY & INTAKE

### Required

| Part | Notes |
|-----|------|
| GM TBI unit (2‑injector) | From 2.5–4.3L GM |
| TBI adapter plate | 2‑barrel to AMC intake |
| Throttle cable bracket | Usually custom |
| Air cleaner adapter | Open element easiest |

**Notes:**
- 4.3L TBI units work fine when tuned down
- Injectors are easy to swap if needed

---

## STEP 4 — FUEL SYSTEM

### Required

| Part | Notes |
|-----|------|
| High‑pressure EFI pump | 12–15 PSI TBI spec |
| Fuel pump relay | ECU controlled |
| Return line | Existing MJ return reused |
| EFI fuel filter | Metal canister type |

**MJ Advantage:**
Your truck already has:
- Return line
- EFI‑rated plumbing (mostly)

---

## STEP 5 — SENSORS (MINIMAL SET)

### Required Sensors

| Sensor | Notes |
|------|------|
| CTS (GM) | Intake or coolant passage |
| IAT (GM) | Air cleaner or intake |
| TPS (on TBI) | Included |
| IAC (on TBI) | Included |
| MAP (GM 1‑bar) | Firewall mount |
| O2 sensor | Heated preferred |

**Reduction Win:**
GM TBI uses **fewer sensors than Renix**.

---

## STEP 6 — IGNITION INTEGRATION

### Simplest Reliable Option

| Component | Action |
|---------|-------|
| Jeep distributor | Retained |
| Ignition module | Retained |
| Coil | Retained |
| Timing control | Mechanical + vacuum |

**Notes:**
- ECU does **not** control spark timing
- Keeps swap simple and reliable

---

## STEP 7 — EXHAUST & O2

### Required

| Part | Notes |
|-----|------|
| O2 bung | Weld into downpipe |
| Heated O2 sensor | Strongly recommended |

Single O2 sensor only — no cats or emissions logic required.

---

## STEP 8 — DIAGNOSTICS & TUNING

### Required

| Item | Notes |
|----|------|
| ALDL cable | USB preferred |
| WinALDL or TunerPro | Free software |

Allows:
- Live data
- Code reading
- Fuel trim checks

---

## COST & COMPLEXITY SUMMARY

| Category | Renix Refresh | GM TBI Swap |
|-------|---------------|-------------|
| Parts cost | Low | Medium |
| Wiring effort | Medium | Medium |
| Diagnostics | Limited | Excellent |
| Long‑term parts availability | Declining | Excellent |
| Trail repair friendliness | Good | Excellent |

---

## RECOMMENDED STRATEGY (SIDE‑BY‑SIDE)

1. **Refresh and stabilize Renix** (lowest cost)
2. Drive and evaluate reliability
3. If dissatisfaction remains → swap to GM TBI

Because the Renix harness was simplified first, **no work is wasted**.

---

## FINAL TAKE

GM TBI is not the fastest or newest EFI — it is the most *forgiving*.

For a long‑term MJ keeper:
- Renix = original, simple, sensitive
- GM TBI = simple, durable, serviceable forever

---

*End of document*

