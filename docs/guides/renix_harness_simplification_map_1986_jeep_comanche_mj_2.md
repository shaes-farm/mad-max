# Renix Harness Simplification Map
## 1986 Jeep Comanche MJ – 2.5L I4, Manual, Renix TBI

**Goal:** Stabilize the factory Renix system for long‑term reliability by removing dead weight, fixing known failure points, and simplifying the harness without breaking drivability or future EFI swap options.

This document assumes:
- 1986 Jeep Comanche MJ
- 2.5L AMC 150 (Throttle Body Injection)
- Manual transmission (AX‑5)
- Renix (Bendix/AMC) engine management

---

## Guiding Principles

1. **If it affects spark or injector pulse, it stays**
2. **If the ECU does not monitor it, it can usually go**
3. **All accessories must be isolated from ignition and ECU power**
4. **Ground quality matters more than wire age**

---

## System Overview

The truck’s wiring can be divided into four logical systems:

1. Engine Management (required to run)
2. Engine Support (helps, but not required)
3. Emissions & Dead Weight (safe to delete)
4. Body & Accessories (frequent source of problems)

Only **System 1** is required for the engine to run.

---

## SYSTEM 1 — Engine Management (DO NOT DELETE)

This is the **minimum viable Renix engine harness**. All circuits below must remain intact, clean, and properly grounded.

### Required Components (KEEP)

| Component | Location | Notes |
|---------|---------|------|
| ECM (Renix ECU) | Passenger kick panel | Must match year, trans, emissions |
| CPS (Crank Position Sensor) | Bellhousing | Most critical sensor |
| MAP sensor | Firewall | Must have solid 5V ref & ground |
| CTS (Coolant Temp Sensor – ECU) | Thermostat housing | Separate from gauge sender |
| MAT (Manifold Air Temp) | Intake | Often overlooked |
| TPS (Manual) | Throttle body | Manual-specific unit |
| Injector (TBI) | Throttle body | Single injector |
| IAC motor | Throttle body | Idle control |
| O2 sensor | Exhaust | Single-wire, ground via exhaust |
| Ignition coil | Driver fender | Must not be backfed |
| Ignition module | Driver fender | Syncs spark |
| Fuel pump relay | Engine bay | ECU-controlled |

**Rule:** If a wire feeds one of the above, it stays.

---

## SYSTEM 2 — Engine Support (SIMPLIFY, DON’T DELETE)

These circuits do not directly control fuel or spark, but bad wiring here creates false symptoms.

### Clean & Retain

| Circuit | Action |
|-------|-------|
| Alternator field wires | Clean connectors, verify routing |
| Starter solenoid wiring | Replace corroded terminals |
| Oil pressure sender | Optional but useful |
| Coolant temp sender (gauge) | Separate from ECU CTS |
| Charge indicator circuit | Optional |

These circuits may be simplified but should remain until the truck is fully sorted.

---

## SYSTEM 3 — Emissions & Dead Weight (DELETE OR DISABLE)

On **1986 Federal-emissions trucks**, the Renix ECU **does not monitor** these systems. Removing them does not affect drivability.

### Safe to Remove Entirely

| Component | Action |
|---------|-------|
| EGR solenoid | Remove wiring & vacuum |
| EGR valve | Block off intake |
| Canister purge solenoid | Optional delete |
| CTO switches | Remove from vacuum system |
| Pulse air system (if equipped) | Remove |
| Vacuum delay valves | Remove |

**Important:** Remove wiring back to the ECM or de-pin at the connector.

---

## SYSTEM 4 — Body & Accessories (DELETE AGGRESSIVELY)

This system causes most Renix reliability issues, including engine run-on and ECU damage.

### Remove or Isolate

| Circuit | Reason |
|-------|-------|
| Aftermarket radio ignition feed | Causes ignition backfeed |
| Fog / auxiliary lights tied into ignition | Voltage noise |
| Winch power taps | Voltage spikes |
| Alarm systems | Parasitic draw & failure |
| Trailer wiring hacks | Corrosion & shorts |

**Rule:** Accessories must pull power directly from the battery through relays.

---

## Physical Harness Simplification Procedure

### Step 1 — Separate the Harness
Physically split the loom into:
1. Engine management
2. Charging/starting
3. Body/accessories

Zip-tie temporarily and label everything.

---

### Step 2 — ECM Connector Expectations

At the ECM you should see only:
- Constant battery power
- Switched ignition power (RUN/START)
- Multiple grounds
- CPS
- MAP
- TPS
- CTS
- MAT
- Injector
- IAC
- O2
- Ignition sync

If wires run to vacuum solenoids or dash accessories, they can be removed.

---

### Step 3 — Wires That Can Be Removed at the ECM

The following may be de-pinned or cut and isolated:
- EGR solenoid control
- Canister purge control
- Pulse air control
- Unused diagnostic leads
- Automatic transmission inputs (manual trucks)

Leave service loops, heat-shrink, and label all removed wires.

---

## Minimal Renix Engine — Standalone Test

After cleanup, the engine should be able to run with:
- ECM
- Engine harness
- Fuel pump
- Ignition system

With **no body harness connected**.

This is the acid test for a clean Renix harness.

---

## Ground & Power Architecture (CRITICAL)

### Grounds
- Battery → engine block (4‑ga)
- Engine block → firewall (4‑ga)
- ECM grounds → intake manifold
- Sensor grounds → shared intake stud

Target resistance: **< 0.1 ohm**

### Power
- Battery → ECM constant power
- Ignition switch → ECM RUN/START
- Relay-fed injector and fuel pump power

Poor grounds mimic failed sensors and bad ECUs.

---

## Future EFI Swap Readiness

If this plan is followed:
- Fuel pump wiring is reusable
- Ignition power is reusable
- Ground network is reusable

A GM TBI or similar EFI swap becomes a **2–3 hour job**, not a full rewire.

---

## Summary

This simplification removes:
- Emissions dead weight
- Electrical noise
- Backfeed paths

While preserving:
- Factory drivability
- Diagnostic clarity
- Swap flexibility

The result is a **stable, predictable Renix MJ** that you can trust — or easily upgrade.

---

*End of document*

