# PROJECT BRIEF: 1986 Jeep Comanche "Mad Maxine" Restoration

## Agent Instructions

This document serves as the quick-reference guide for all conversations related to this vehicle project. This is a **long-term rebuild project** (weeks/months timeline) with focus on mechanical reliability over cosmetics. When assisting, prioritize safety and systematic problem-solving as issues are discovered.

---

## Document Navigation

This Brief is part of a modular documentation system:

| Document                           | Purpose                                                                 |
| ---------------------------------- | ----------------------------------------------------------------------- |
| **Jeep_Comanche_Project_Brief.md** | ← YOU ARE HERE: Quick status & issues reference                         |
| **01_PROJECT_CHARTER.md**          | Strategic vision, decision frameworks, success criteria                 |
| **02_CURRENT_STATE_INVENTORY.md**  | Detailed inspection checklist (working document)                        |
| **03_MASTER_RESTORATION_PLAN.md**  | **Phased execution plan with task details** ← PRIMARY ROADMAP           |
| **04_PARTS_TRACKER.md**            | Parts sourcing and installation tracking                                |
| **05_WORK_LOG.md**                 | Daily/weekly work journal with lessons learned                          |
| **06_TECHNICAL_REFERENCE.md**      | **Specifications, torque values, fluids, troubleshooting** ← TECH SPECS |
| **07_BUDGET_TRACKER.md**           | Financial tracking by phase                                             |

**For detailed task lists and timelines:** See **03_MASTER_RESTORATION_PLAN.md**  
**For all technical specifications:** See **06_TECHNICAL_REFERENCE.md**

---

## Vehicle Identification

| Attribute           | Value                                                |
| ------------------- | ---------------------------------------------------- |
| **Name**            | "Mad Maxine"                                         |
| **VIN**             | 1JTHL6571GT042543                                    |
| Year                | 1986                                                 |
| Make/Model          | Jeep Comanche X (4WD) 7 Ft. Box                      |
| Assembly Plant      | Toledo, Ohio                                         |
| Production Sequence | 042543                                               |
| Drivetrain          | 4x4 Part-time                                        |
| Engine              | 2.5L AMC I4 (150 CID) — **Renix TBI Fuel Injection** |
| Transmission        | AX5 5-Speed Manual                                   |
| Transfer Case       | NP207                                                |
| Front Axle          | Dana 30                                              |
| Rear Axle           | Dana 35                                              |
| Interior            | High-back bucket seats                               |
| Current Mileage     | ~118,000 (odometer non-functional)                   |

### VIN Decode Verification

```
1JTHL6571GT042543
│││││││││││└────── Production sequence: 042543
││││││││││└─────── Assembly plant: T = Toledo
│││││││││└──────── Model year: G = 1986
││││││││└───────── Check digit: 1 (valid)
│││││││└────────── Model: 7 = Comanche X (STD Payload)
│││││││
│││││└┴─────────── Line: 65 = Comanche Truck (4WD) 7 FT Box
││││└───────────── Transmission: L = 5 Speed Manual PT Trans. Case
│││└────────────── Engine: H = 2.46L I4 (AMC 150)
└┴┴─────────────── Manufacturer: 1JT = Jeep Truck (AMC)
```

### Factory Build Sheet

**Build Date:** 9/9/85  
**Body Model:** JM62

| Code | Factory Option                         |
| ---- | -------------------------------------- |
| \*ZZ | TRIM STYLE ZZ - PLASTIC BUCKET SEAT    |
| -ZZ  | N/A                                    |
| AGR  | Appearance Group                       |
| AGY  | Seating Group                          |
| AJY  | Popular Equipment Package              |
| AWJ  | Visibility Group                       |
| BAC  | 75 AMP ALTERNATOR                      |
| BCQ  | Battery - Maintenance Free             |
| CGW  | N/A                                    |
| CKA  | CARPETS - CLASS I SHORT PILE 8 - 12 OZ |
| CLE  | FLOOR MATS                             |
| CUF  | FULL LENGTH FRONT CONSOLE              |
| DDQ  | Transmission - 5-Speed Manual          |
| EPD  | ENGINE - 2.5L I4 TBI GAS               |
| GAC  | ALL WINDOWS - TINTED GLASS             |
| GEC  | Window - Left Side, Front, Sliding     |
| GFD  | SLIDING RR WINDOW                      |
| GTZ  | MIRRORS - MANUAL REMOTE                |
| HAA  | AIR CONDITIONING - FRONT               |
| HCC  | HEATER W/UPR LEVEL VENTIL - TYPE II    |
| JAY  | Instrument Cluster w/Tach              |
| JFH  | TACHOMETER - MECH                      |
| JGB  | Clock - Digital                        |
| JHA  | WINDSHIELD WIPERS - DELUXE             |
| JJA  | CIGAR LIGHTER - FRT COMP               |
| LAP  | FUEL ECONOMY SHIFT INDICATOR LIGHT     |
| LDA  | UNDERHOOD COMPT LAMP                   |
| LMA  | HALOGEN HEADLAMPS                      |
| LNJ  | DUAL ROAD LAMPS                        |
| MBJ  | Bumper - Front, Black                  |
| MCA  | FRONT BUMPER GUARDS                    |
| MCB  | N/A                                    |
| MDA  | FRT LICENSE PLATE ATTACH REQUIRED      |
| MWB  | SPORT BAR                              |
| NAA  | ESA W/CATALYST (EXC CALIF SYSTEM)      |
| NFA  | TANK - 23 GAL FUEL                     |
| NHM  | AUTO SPEED CONTROL                     |
| NMB  | ENGINE COOLING - STANDARD DUTY         |
| RAF  | RADIO - AM/FM/MTR                      |
| SBA  | POWER STEERING                         |
| SCG  | LEATHER STRG WHEEL - EURO/SPORT TYPE   |
| SUA  | TILT STEERING COLUMN                   |
| WJM  | Wheels - 15 x 7.0 Chrome               |

### Fuel System Clarification

**Owner-verified:** This vehicle has **Renix throttle body fuel injection (TBI)**, not a carburetor. This makes it an **early-production Renix fuel-injected 1986**, as TBI was phased in during late 1986 production before becoming standard in 1987. Most 1986 2.5L engines were carbureted (Carter BBD).

**Implication for "won't shut off" issue:** On fuel-injected engines, the ECM controls fuel delivery. The problem is likely the **ignition switch** not cutting power to the ECM, or a wiring fault keeping the ECM energized.

---

## Project Vision & Purpose

### Primary Use Case

**Farm utility truck** for reliable all-weather transportation to care for livestock on remote property.

### Operating Environment

- **Route:** 10-mile mountain road, steep grades, twice daily
- **Terrain:** Dirt roads, fire roads, requires reliable brakes and functional 4WD
- **Climate:** Hot summers, cold snowy winters, severe weather events, road salt exposure
- **Current Status:** Vehicle is NOT in service — alternative transportation arranged

### Aesthetic Philosophy

**"Mad Max" Theme** — Beat up, rough, rugged. Leave it looking hard-used and apocalyptic.

- No bodywork, no paint perfection, embrace the patina
- Interior: Minimal comfort, maximum function
- **ALL effort and money goes to mechanical reliability**

**For complete project vision and decision frameworks:** See **01_PROJECT_CHARTER.md**

---

## Current Project Status

**Phase:** Phase 0 — Planning & Assessment  
**Status:** Initial documentation and assessment complete  
**Next Steps:** See **03_MASTER_RESTORATION_PLAN.md** for detailed task list

**Major Accomplishments:**

- [x] Complete vehicle photography (60+ photos)
- [x] Frame inspection complete — **FRAME IS SOLID** (surface rust only)
- [x] Floor pan assessment complete — repairable with welding
- [x] Transfer case identified (NP207)
- [x] Front driveshaft inspected — replacement required (safety hazard)

**For complete current condition assessment:** See **02_CURRENT_STATE_INVENTORY.md**

---

## Known Issues Master List

### Status Key

- 🔴 **CRITICAL** — Safety hazard or prevents operation
- 🟠 **HIGH** — Significant problem affecting reliability
- 🟡 **MODERATE** — Needs attention but not urgent
- 🟢 **LOW** — Minor issue, convenience item
- ✅ **RESOLVED** — Fixed and verified

---

### Exhaust System 🔴 CRITICAL

| Issue                           | Details                                                 | Status     |
| ------------------------------- | ------------------------------------------------------- | ---------- |
| Complete exhaust system failure | "Complete mess, barely hanging on" — everything leaking | 🔴 Active  |
| Exhaust fumes in cab            | Major CO hazard — exhaust pouring into cabin            | 🔴 Active  |
| Exhaust manifold condition      | Unknown — inspect for cracks (common 2.5L failure)      | 🔴 Inspect |

**Assessment:** Full exhaust replacement required from manifold back. Inspect manifold for cracks before ordering parts.

**Safety Warning:** Do NOT run engine in enclosed space or drive vehicle until exhaust is repaired. Carbon monoxide hazard is severe.

---

### Engine Oil Leaks 🟠 HIGH

| Issue                            | Details                                                          | Status         |
| -------------------------------- | ---------------------------------------------------------------- | -------------- |
| Major oil spray — passenger side | Significant oil spraying inside engine compartment after driving | 🟠 Active      |
| Oil pressure sending unit leak   | Seller-disclosed; likely source of spray                         | 🟠 Investigate |
| Valve cover gasket leak          | "New" gasket still leaking — repair incomplete or failed         | 🟠 Active      |

**Diagnosis Plan:**

1. Clean engine compartment thoroughly (degreaser + pressure wash or steam)
2. Add UV dye to oil if needed
3. Run engine briefly and identify leak source(s)
4. Multiple simultaneous leaks are likely

**Probable Sources:**

- Oil pressure sender (passenger side of block) — most likely culprit for "spray"
- Valve cover gasket — may need proper torque sequence or RTV sealant
- Rear main seal (check for oil at bellhousing)
- Oil pan gasket
- Distributor O-ring (if applicable)

---

### Ignition / Electrical 🟠 HIGH

| Issue                          | Details                                   | Status    |
| ------------------------------ | ----------------------------------------- | --------- |
| Engine won't shut off with key | Continues running after key turned to OFF | 🟠 Active |

**Diagnosis (Fuel-Injected Engine):**

Since this is a Renix TBI system, the ECM must receive power to run the fuel injectors. If the engine runs with the key off:

1. **Most Likely:** Ignition switch failure — not cutting power in OFF position
2. **Possible:** Wiring fault keeping ECM energized
3. **Possible:** Stuck relay

**Diagnostic Steps:**

1. With key OFF and engine running, check for 12V at ECM power input
2. If power present, trace back to ignition switch
3. Check ignition switch connector for damage, corrosion, or melted terminals
4. Test ignition switch continuity in all positions
5. Inspect for aftermarket wiring that may bypass switch

**Temporary Workaround:** Pull ECM fuse or fuel pump fuse to kill engine until repaired.

---

### Drivetrain 🟠 HIGH

| Issue                             | Details                                                                 | Status     |
| --------------------------------- | ----------------------------------------------------------------------- | ---------- |
| Transfer case fluid leak          | Confirmed leaking                                                       | 🟠 Active  |
| Front driveshaft — poor condition | "Welded together out of junk parts" — structural integrity questionable | 🔴 Inspect |
| Reverse gear sticky               | Noticed during test drive                                               | 🟡 Monitor |

**Transfer Case Notes:**

- Identified as NP207 (from ID tag)
- Possible leak sources: output shaft seals, input seal, case half gasket, speedometer drive
- Drain fluid and inspect for metal contamination before deciding repair vs. rebuild

**Front Driveshaft Warning:** ⚠️
A poorly welded driveshaft is a **serious safety hazard**. Driveshaft failure at speed can:

- Drop and pole-vault the vehicle
- Damage transmission/transfer case
- Cause loss of control

**Recommendation:** Do not drive in 4WD until front driveshaft is inspected by someone qualified. If welds are amateur quality, **replace the entire shaft**. Used XJ Cherokee front shafts often interchange.

**Sticky Reverse:**

- May improve with fresh transmission fluid (AX5 prefers ATF in cold weather)
- Could indicate worn synchronizer (reverse synchro is weak point on AX5)
- Monitor for worsening; not urgent if functional

---

### Body / Structure 🔴 CRITICAL

| Issue                    | Details                               | Status    |
| ------------------------ | ------------------------------------- | --------- |
| Driver's door attachment | "Barely held on by bad, spotty welds" | 🔴 Active |

**Safety Assessment Required:**

- Are the hinges torn from the body/A-pillar?
- Is the door shell cracked?
- Are the welds on the hinge plates or the body?

**Risk:** Door could detach during driving or in a collision. This is a structural safety item.

**Repair Options:**

1. **Proper welding repair** — Grind out bad welds, prep metal, weld correctly
2. **Hinge replacement** — If hinges are damaged
3. **Door replacement** — If door shell is cracked (MJ doors available from donors)
4. **A-pillar repair** — If body metal is torn (more serious)

**Temporary:** If door is unsafe, consider removing it entirely until repair (legal in most states, fits "Mad Max" aesthetic).

---

### Floor Pans 🔴 CRITICAL

| Issue                | Details                                        | Status    |
| -------------------- | ---------------------------------------------- | --------- |
| Floor pan rust holes | Driver and passenger side, 2-3" diameter holes | 🔴 Active |
| Rear cab floor rust  | Smaller holes near drain plugs                 | 🟠 Active |

**Assessment from Photos:**

- Multiple rust-through holes visible
- Larger holes approximately 2-3" diameter in front floor pans
- Located near drain plug areas
- Edges are crusty but metal still has structural integrity
- **Good news:** Repairable with patch welding, full pan replacement NOT required

**Repair Plan:**

- Cut 6"x8" patches from 16-18 gauge sheet metal
- Estimated 2-3 patches needed for each side
- Cost: $30-50 in sheet metal (vs. $200+ for full replacement pans)
- Time: 1 day of welding practice
- Perfect opportunity for learning sheet metal welding

---

### Windows / Interior 🟡 MODERATE

| Issue                         | Details                       | Status          |
| ----------------------------- | ----------------------------- | --------------- |
| Driver's window won't roll up | Went down, won't come back up | 🟡 Active       |
| Hood latch sticky             | Difficult to open             | 🟢 Low priority |

**Window Diagnosis:**

- **Manual windows:** Likely regulator failure, broken cable, or stripped gear
- **Power windows:** Could be motor, switch, wiring, or regulator

**Immediate Concern:** Open window in winter = weather intrusion, security issue. Temporary fix: tape plastic sheeting over opening until repaired.

**Hood Latch:** Usually just needs lubrication (WD-40, then white lithium grease) and cable adjustment. Low priority but helpful for engine access.

---

### Engine / Running Condition 🟡 MODERATE

| Issue           | Details               | Status     |
| --------------- | --------------------- | ---------- |
| Rough cold idle | Smooths out when warm | 🟡 Monitor |

**Notes:** Common on Renix TBI systems. Possible causes:

- Coolant temperature sensor (CTS) reading incorrectly
- Idle air control (IAC) valve dirty or failing
- Vacuum leaks
- Throttle position sensor (TPS) out of adjustment
- General need for tune-up

**Action:** Address after higher-priority items. May resolve with general maintenance.

---

### Brakes & Safety Systems 🔴 CRITICAL

| Issue                  | Details                       | Status     |
| ---------------------- | ----------------------------- | ---------- |
| Soft/mushy brake pedal | Condition unknown, not tested | 🔴 Inspect |
| Parking brake missing  | Non-functional                | 🟠 Active  |

**Priority:** Unknown brake condition on mountain roads is dangerous. Complete inspection required before any driving.

---

### Positive Observations ✅

| Item                     | Details                                                  |
| ------------------------ | -------------------------------------------------------- |
| Cold start               | Starts first crank even below freezing ✅                |
| Forward gears 1-5        | Shift smoothly ✅                                        |
| Runs well when warm      | No sputtering, choking, stalling ✅                      |
| Frame structurally sound | Surface rust only, no rust-through ✅                    |
| Fuel injection           | Renix TBI confirmed present and functional ✅            |
| New tires                | Falken Wild Peak AT (all four) ✅                        |
| Transfer case present    | 4WD system exists (needs service) ✅                     |
| Floor pans repairable    | Patch welding sufficient, full replacement not needed ✅ |

---

## Technical Specifications

For all technical specifications, torque values, fluid capacities, maintenance schedules, and troubleshooting guides, see:

**→ 06_TECHNICAL_REFERENCE.md**

**Quick reference only:**

- **Engine:** 2.5L AMC I4 Renix TBI (117 hp, 135 lb-ft torque)
- **Transmission:** AX5 5-Speed Manual
- **Transfer Case:** NP207 (identified from ID tag)
- **Front Axle:** Dana 30
- **Rear Axle:** Dana 35
- **Tires:** Falken Wild Peak AT (new)

**Technical Reference includes:**

- Complete engine, transmission, axle specifications
- All torque specifications for every component
- Fluid types, capacities, and change intervals
- Detailed Renix system information
- Maintenance schedules
- Troubleshooting flowcharts
- Parts interchange information
- Gear ratio identification methods

---

## Parts Sourcing Strategy

### Recommended Sources (Quick Reference)

| Source                                       | Best For                                            |
| -------------------------------------------- | --------------------------------------------------- |
| **RockAuto**                                 | Wide selection, good prices, multiple quality tiers |
| **NAPA / O'Reilly / AutoZone**               | Local availability, easy returns, emergency parts   |
| **ComancheClub.com**                         | MJ-specific knowledge, used parts marketplace       |
| **Local Junkyards**                          | XJ parts interchange; MJ parts increasingly rare    |
| **Quadratec / Morris 4x4 (out of business)** | Jeep specialists, hard-to-find MJ parts             |

### Parts Interchange Quick Reference

**XJ Cherokee parts (1984-1996) that fit MJ Comanche:**

- Doors and glass (2-door XJ)
- Interior components
- Engine and drivetrain parts
- Electrical components
- Suspension components

**MJ-specific (harder to find):**

- Bed and tailgate
- Some body panels

**For detailed parts sourcing:** See **04_PARTS_TRACKER.md**  
**For complete interchange information:** See **06_TECHNICAL_REFERENCE.md**

---

## Decision Log

| Date     | Decision                             | Rationale                                          |
| -------- | ------------------------------------ | -------------------------------------------------- |
| Jan 2026 | Purchased vehicle                    | Farm truck needed                                  |
| Jan 2026 | Abandoned immediate use plan         | Too many issues discovered; not safe for blizzard  |
| Jan 2026 | Adopted long-term rebuild approach   | Systematic restoration over weeks/months           |
| Jan 2026 | "Mad Max" aesthetic confirmed        | Vehicle already rough; focus budget on mechanicals |
| Jan 2026 | Alternative transport arranged       | Cannot rely on Comanche for winter storm           |
| Jan 2026 | Confirmed Renix TBI fuel injection   | Owner verified throttle body and ECM present       |
| Jan 2026 | Frame assessment complete            | FRAME IS SOLID — project is viable                 |
| Jan 2026 | Floor pan repair strategy decided    | Patch welding vs. full replacement (cost savings)  |
| Jan 2026 | Front driveshaft replacement decided | Safety hazard — amateur welds unacceptable         |

---

## Issue Discovery Log

Track new issues as they're found:

| Date     | Issue Found                      | Severity | Phase | Notes                                         |
| -------- | -------------------------------- | -------- | ----- | --------------------------------------------- |
| Initial  | Rough cold idle                  | 🟡       | 2     | Smooths when warm                             |
| Initial  | Exhaust smell in cab             | 🔴       | 1     | CO hazard                                     |
| Initial  | Oil leak at sender               | 🟠       | 2     | Seller disclosed                              |
| Initial  | Sticky reverse                   | 🟡       | 2     | Try fluid change first                        |
| Initial  | Engine won't shut off            | 🟠       | 2     | Likely ignition switch                        |
| Initial  | Hood latch sticky                | 🟢       | 4     | Lubricate                                     |
| Later    | Exhaust system destroyed         | 🔴       | 1     | Complete replacement needed                   |
| Later    | Major oil spray in engine bay    | 🟠       | 2     | Locate source after cleaning                  |
| Later    | Valve cover gasket still leaking | 🟠       | 2     | Redo repair properly                          |
| Later    | Driver's door barely attached    | 🔴       | 1     | Bad welds, safety hazard                      |
| Later    | Driver's window stuck down       | 🟡       | 4     | Regulator or motor                            |
| Later    | Front driveshaft sketchy welds   | 🔴       | 1     | Replace immediately                           |
| Later    | Transfer case leaking            | 🟠       | 2     | Reseal or rebuild                             |
| 01/24/26 | Frame rust assessment            | ✅       | 0     | GOOD NEWS: Surface only, structurally sound   |
| 01/24/26 | Floor pans documented            | 🔴       | 1     | Repairable with welding, not full replacement |
| 01/25/26 | Transfer case identified         | ✅       | 0     | NP207 confirmed from ID tag                   |

---

## Notes for Agent (Claude)

### Project Context

- **Timeline:** Weeks to months, not days
- **Budget:** Owner is cost-conscious but will spend on safety/reliability
- **Skills:** Owner can DIY many tasks with guidance; will use professional for complex work
- **Aesthetic:** "Mad Max" — rough, rugged, functional. Do not suggest cosmetic repairs.

### Key Technical Points

- **Fuel System:** Renix TBI (confirmed), not carbureted
- **Model Year:** 1986 is a transition year; this is early Renix production
- **Engine won't shut off:** Focus diagnosis on ignition switch, not carburetor solenoid
- **Front driveshaft:** Treat as unsafe until replaced; amateur welds are dangerous
- **Frame condition:** EXCELLENT — surface rust only, structurally sound

### Communication Style

- Provide technical detail when helpful
- Be direct about safety issues
- Acknowledge the "Mad Max" vision positively
- Expect scope creep — this is a 38-year-old vehicle
- Recommend Factory Service Manual (FSM) or ComancheClub.com for verification when uncertain

### Primary Community Resource

**ComancheClub.com** — The definitive online community for MJ Comanche owners. Forums contain decades of collective knowledge, parts sources, and troubleshooting guides.

### Detailed Technical Procedures Available

- **Phase_A_Renix_Harness_Cleanup_Guide.md** — Comprehensive Renix wiring restoration procedure (~15,000 words)
- **GM_TBI_Swap_Guide_Complete.md** — Contingency plan if Renix system becomes unreliable (~20,000 words)
- **06_TECHNICAL_REFERENCE.md** — Complete technical specifications and troubleshooting guide

---

_Document Version: 5.0 (Final Streamlined)_  
_Last Updated: January 2026_  
_Vehicle Status: Phase 0 — Planning & Assessment_  
_Current Phase Status: Assessment complete, ready to begin Phase 1_
