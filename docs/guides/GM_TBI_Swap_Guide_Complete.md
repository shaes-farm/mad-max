# GM TBI EFI Swap — Complete Implementation Guide
## 1986 Jeep Comanche MJ – 2.5L AMC I4 (Renix Replacement Option)

**Document Version:** 2.0  
**Last Updated:** January 2026  
**Project:** "Mad Maxine" Daily Driver Rebuild  
**VIN:** 1JTHL6571GT042524  
**Companion Document:** Phase_A_Renix_Harness_Cleanup_Guide.md

---

## Document Purpose

This guide provides a complete, realistic plan for converting a Renix-equipped 2.5L MJ to **GM TBI EFI**. This is presented as a **contingency option** — a "Plan B" to be executed only if the Renix system proves unreliable or parts become unavailable after completing the Renix refresh.

**What this covers:**
- Complete parts list with realistic sourcing
- Step-by-step installation workflow
- Integration with existing Renix harness cleanup work
- Decision criteria for when to swap vs. keep Renix
- Troubleshooting and tuning guidance
- Cost and complexity comparison

**What this does NOT cover:**
- Performance modifications (this is a reliability swap)
- Multi-port fuel injection conversions
- Forced induction integration
- Emissions system retention (off-road use only)

---

## Strategic Context: Why GM TBI?

### The Reliability Thesis

GM TBI is chosen because it represents the **simplest, most tolerant, most serviceable** electronic fuel injection system ever mass-produced:

| Attribute | Renix TBI | GM TBI |
|-----------|-----------|--------|
| Units produced | ~500,000 | 15+ million |
| Sensor count | 7 critical sensors | 6 critical sensors |
| Parts availability (2026) | Declining | Excellent |
| Parts availability (2036) | Questionable | Still excellent |
| Diagnostic capability | Limited self-diagnostics | Full ALDL data stream |
| Wiring tolerance | Ground-sensitive | Very forgiving |
| Tuning capability | Fixed PROM | User-tunable PROM |
| Service documentation | Good (forums) | Extensive (factory + aftermarket) |

### What GM TBI Is NOT

This is **not**:
- A performance upgrade (power will be similar or slightly less)
- A modern EFI solution (1980s-1990s technology)
- Plug-and-play (requires fabrication and tuning)
- Emissions-legal in all jurisdictions (verify local laws)
- Necessary if Renix works properly

### The Decision Framework

```
START: Renix System
    ↓
Execute Phase A Harness Cleanup
    ↓
Test Drive & Evaluate (6+ months)
    ↓
    ├─ Renix Works Well?
    │       ↓
    │   KEEP RENIX ✅
    │   (You're done, $400-650 spent)
    │
    └─ Renix Unreliable OR Parts Unavailable?
            ↓
        GM TBI SWAP
        (Add $800-1200, gain long-term serviceability)
```

**Key Insight:** The Renix harness cleanup work is **not wasted** if you eventually swap to GM TBI. Ground network, sensor circuit verification, and harness organization all transfer directly to the GM system.

---

## Pre-Swap Considerations

### Legal & Regulatory ⚠️

**Emissions Testing:**
- Tennessee requirements vary by county
- Swapping ECUs may trigger inspection failure if system doesn't match factory specs
- **ACTION REQUIRED:** Verify your county's requirements before starting
- Document original Renix system for potential reversal

**Off-Road Use Disclaimer:**
- Removing emissions equipment may violate federal/state law
- This guide is for off-road use only
- User assumes all legal responsibility

### Technical Prerequisites

**You should NOT attempt this swap if:**
- You have never worked with automotive wiring
- You do not own a multimeter and know how to use it
- You cannot fabricate simple brackets
- You have no access to welding (for O2 bung)
- You expect plug-and-play installation

**You SHOULD attempt this swap if:**
- You completed Phase A Renix cleanup successfully
- Renix parts are becoming unavailable
- You want maximum long-term serviceability
- You're comfortable with DIY troubleshooting
- You have realistic expectations (similar performance, better reliability)

### Cost Reality Check

| Category | Estimated Cost | Notes |
|----------|---------------|-------|
| **GM ECU & PROM** | $150-300 | Reman or used |
| **TBI Unit** | $200-400 | Reman preferred |
| **Wiring Harness** | $0-600 | DIY free, Howell $600 |
| **Intake Adapter** | $100-200 | Custom fab or aftermarket |
| **Fuel System** | $100-200 | Pump, filter, regulator if needed |
| **Sensors** | $150-300 | GM sensors (most needed) |
| **Fabrication Supplies** | $50-100 | Brackets, fittings, hardware |
| **Tuning Tools** | $50-100 | ALDL cable, software free |
| **Contingency** | $100-200 | Unexpected issues |
| **TOTAL** | **$900-2400** | DIY low end, turnkey high end |

**Comparison:**
- Renix Refresh: $400-650
- GM TBI Swap (DIY harness): $900-1400
- GM TBI Swap (Howell harness): $1500-2400

### Timeline Reality Check

| Phase | Time Required | Can Be Rushed? |
|-------|---------------|----------------|
| Parts acquisition | 2-4 weeks | No (backorders common) |
| Harness prep | 1-3 days | No (must be thorough) |
| Physical installation | 2-4 days | Somewhat (budget extra) |
| Initial tuning | 1-2 days | No (patience required) |
| Shake-down period | 2-4 weeks | No (find all issues) |
| **TOTAL** | **4-8 weeks** | Assume longer is safer |

**Important:** This assumes you already completed Phase A Renix cleanup. If starting from scratch, add 3-5 weeks.

---

## System Architecture Overview

A GM TBI swap consists of **five interconnected subsystems**:

```
1. ECU & PROM (Brain)
        ↓
2. Wiring Harness (Nervous System)
        ↓
3. Sensors (Inputs) → 4. TBI & Fuel (Outputs)
        ↓
5. Exhaust & O2 (Feedback Loop)
```

Each subsystem must be completed in order. **Do not skip ahead.**

---

## SUBSYSTEM 1: ECU & Control System

### Core Components

| Part | Specification | Source | Est. Cost |
|------|---------------|--------|-----------|
| **GM ECU** | 1227747 | eBay, GM parts | $100-200 |
| **PROM Chip** | Stock 4-cyl or custom | TunerPro, mail-order | $50-100 |
| **ECU Mounting Bracket** | Custom or universal | Fabricate or aftermarket | $0-50 |
| **ECU Connector** | If not included with ECU | Junkyard, aftermarket | $20-50 |

### Why ECU 1227747?

The **1227747** is the gold standard for GM TBI conversions:
- Supports 4-cylinder and V6 applications
- Batch-fire injector control (simple)
- Closed-loop O2 capability
- Speed-density (no MAF sensor needed)
- Most documented ECU in GM history
- Tuning software widely available

**Alternatives:**
- 16188051 (similar capability, less documentation)
- 16196344 (also viable, harder to find info)

**Avoid:**
- Random junkyard ECUs without known part numbers
- ECUs from automatic transmission vehicles (different logic)

### PROM Selection Strategy

The PROM (Programmable Read-Only Memory) chip contains the fuel/spark maps.

**Option 1: Stock GM PROM (Easiest)**
- Source: 2.5L Iron Duke S10 (1987-1993)
- **Pros:** Readily available, proven
- **Cons:** Tuned for Iron Duke, not AMC 150
- **Reality:** Will run, may not run *optimally*

**Option 2: Custom PROM Burn (Best)**
- Source: DIY with TunerPro, or mail-order from tuner
- **Pros:** Optimized for AMC 150 specs
- **Cons:** Requires tuning knowledge or paying someone
- **Recommended Path:**
  1. Start with stock Iron Duke PROM
  2. Get truck running and driving
  3. Data-log with ALDL
  4. Send logs to tuner for custom PROM burn
  5. Install custom PROM, re-test

**PROM Specs to Match:**
- Displacement: 2.5L (150 CID) ✅ (Iron Duke is also 2.5L)
- Compression: 9.2:1 (AMC) vs 8.0:1 (Iron Duke) ⚠️
- Cam profile: Mild (similar) ✅
- Throttle body: 2-injector TBI ✅

**Key Difference:** AMC 150 has higher compression. Stock PROM may run slightly rich. Custom PROM corrects this.

### ECU Mounting

**Options:**

1. **Keep Renix ECU Location (Recommended)**
   - Passenger kick panel area
   - Already has mounting bracket
   - Protected from weather
   - **Action:** Adapt existing bracket or fabricate new one

2. **Engine Bay Mounting**
   - **Not recommended** — heat and vibration reduce ECU life
   - Only if interior space unavailable

3. **Under-Seat Mounting**
   - Viable alternative if kick panel crowded
   - Keep away from moisture

**Mounting Requirements:**
- Secure against vibration (rubber isolators recommended)
- Protected from water intrusion
- Accessible for ALDL connection
- Connector strain relief (don't hang ECU by wiring)

### ECU Connector Preparation

**If using junkyard ECU:**
- Connector may be cut off (common)
- Source replacement connector from same donor vehicle
- **Critical:** Match connector gender and pin count
- Label every wire before disconnecting from donor harness

**If using reman ECU:**
- Usually includes connector
- Verify before purchasing

---

## SUBSYSTEM 2: Wiring Harness

### Decision Matrix: DIY vs. Purchased

| Approach | Cost | Time | Skill Required | Flexibility |
|----------|------|------|----------------|-------------|
| **Howell Standalone** | $600 | 1 day | Low | Low (fixed design) |
| **DIY Rework** | $50-100 | 2-3 days | Medium | High (custom) |
| **Modified Renix Harness** | $0-50 | 1-2 days | Medium | Highest (leverage existing work) |

### Option 1: Howell TBI Harness (Easiest)

**Part Number:** Varies by application (call Howell for Jeep 2.5L)

**Pros:**
- Plug-and-play (mostly)
- Pre-labeled wires
- Includes all connectors
- Tech support available
- Proven reliable

**Cons:**
- Expensive ($600+)
- Fixed design (can't customize easily)
- May include features you don't need
- Still requires some adaptation

**Best For:** Builders who value time over money, or those uncomfortable with wiring.

### Option 2: DIY Reworked GM Harness (Most Flexible)

**Source:** Junkyard 2.5L S10 or 4.3L truck (1987-1995)

**Process:**
1. Pull complete harness from donor
2. Strip down to essential circuits
3. Extend/shorten wires as needed
4. Integrate with your existing power/ground network
5. Label everything thoroughly

**Pros:**
- Cheap ($50-100 for junkyard pull + connectors)
- Highly customizable
- Learn the system inside-out
- All GM connectors included

**Cons:**
- Time-consuming
- Requires wiring skill
- Easy to make mistakes
- Must trace every circuit

**Best For:** Builders comfortable with wiring, who want full control.

### Option 3: Modified Renix Harness (Recommended for This Project)

**Concept:** Leverage the Phase A Renix cleanup work.

**Why This Makes Sense:**
- You already isolated engine management circuits
- Ground network already rebuilt
- Power distribution already verified
- Just need to adapt sensor connectors and ECU pinout

**Process:**
1. Keep existing power/ground infrastructure
2. Replace Renix ECU connector with GM connector
3. Swap sensor connectors (Renix → GM)
4. Verify pin-to-pin compatibility
5. Test each circuit before powering up

**Pros:**
- Minimal new wiring
- Leverages completed work
- Familiar layout (you built it)
- Easy to troubleshoot

**Cons:**
- Requires understanding both Renix and GM pinouts
- Must verify every connection
- Some circuits need rewiring (different sensor count)

**Best For:** This project specifically, since Phase A is already done.

---

### Essential Harness Circuits (All Options)

Regardless of which harness approach you choose, the following circuits are **mandatory**:

| Circuit | Purpose | Wire Gauge | Notes |
|---------|---------|------------|-------|
| **Battery +12V (Constant)** | ECU memory, fuel pump relay | 12 AWG min | Always hot |
| **Ignition +12V (Switched)** | ECU power, sensors | 12 AWG min | Hot in RUN/START |
| **ECU Grounds (3x minimum)** | ECU ground reference | 12-14 AWG | Critical — use multiple |
| **Sensor +5V Reference** | MAP, TPS power | 18 AWG | From ECU |
| **Sensor Ground** | MAP, TPS, CTS ground | 18 AWG | Clean ground |
| **Fuel Pump Relay Control** | ECU → relay coil | 18 AWG | Switched ground |
| **Fuel Pump Relay Power** | Battery → relay → pump | 12 AWG | Fused 15-20A |
| **TPS Signal** | Throttle position → ECU | 18 AWG | Shield if possible |
| **MAP Signal** | Manifold pressure → ECU | 18 AWG | Shield if possible |
| **CTS Signal** | Coolant temp → ECU | 18 AWG | |
| **IAT Signal** | Intake air temp → ECU | 18 AWG | |
| **O2 Signal** | Oxygen sensor → ECU | 18 AWG | High-temp wire |
| **Injector Control A** | ECU → injector | 16 AWG | Switched ground |
| **Injector Control B** | ECU → injector | 16 AWG | Switched ground |
| **Check Engine Light** | ECU → dash light | 18 AWG | Switched ground |
| **ALDL Data** | Diagnostic port | 18 AWG | TX/RX data lines |

**Total Wire Count:** ~20-25 wires (depending on optional features)

**Comparison to Renix:** Very similar circuit count. This is why leveraging the Renix harness works.

---

### Harness Construction Best Practices

**If Building Your Own:**

1. **Use Proper Wire:**
   - GXL or TXL automotive primary wire
   - Correct gauge for amperage (see table above)
   - Color-code logically (standardize on a scheme)

2. **Proper Terminations:**
   - Crimp AND solder all connections
   - Heat shrink all exposed wire
   - Use weatherpack connectors for sensor connections
   - Dielectric grease in all connectors

3. **Routing:**
   - Keep away from hot exhaust (3" minimum clearance)
   - Avoid sharp edges (use grommets)
   - Secure every 12-18" (zip ties or loom clamps)
   - Protect with split loom or braided sleeve

4. **Labeling:**
   - Label both ends of every wire
   - Use heat-shrink label tubing or cable tags
   - Create a wiring diagram (photograph and document)

5. **Testing:**
   - Continuity test every circuit before powering up
   - Resistance test all grounds (<0.1Ω to battery negative)
   - Voltage test power circuits (12V where expected)
   - Megohm test for shorts to ground (all circuits should show >1MΩ to ground when disconnected)

---

### ALDL Diagnostic Port

**What is ALDL?**
Assembly Line Diagnostic Link — GM's pre-OBD-II diagnostic system.

**Why You Need It:**
- Real-time data logging (RPM, TPS, MAP, CTS, O2, etc.)
- Fault code reading (check engine light codes)
- Tuning verification (fuel trim, timing, etc.)
- Troubleshooting sensor issues

**Physical Implementation:**
- 12-pin connector (OBD-I style)
- Mount under dash, driver's side
- Minimum required pins:
  - Pin 1: Ground
  - Pin 5: TXD (data out from ECU)
  - Pin 9: RXD (data in to ECU, if using tuning software)
  - Pin 16: +12V (keyed power)

**Connector Source:**
- Junkyard GM (under dash of any 1980s-1990s GM)
- Aftermarket OBD-I ALDL connector
- DIY: Just use individual pins in housing

**Software:**
- **WinALDL** (free, basic)
- **TunerPro RT** (free, advanced)
- **MegaLogViewer** (paid, professional)

**Cable:**
- USB ALDL cable ($20-50 on eBay/Amazon)
- Verify cable supports 1227747 ECU (most do)

---

## SUBSYSTEM 3: Throttle Body & Intake Adaptation

### GM TBI Unit Selection

**Recommended Units:**

| Donor Application | TBI Size | Injector Flow | Notes |
|------------------|----------|---------------|-------|
| **2.5L S10 (1987-1993)** | 700 CFM | ~12 lb/hr | Best match for 2.5L AMC |
| **4.3L S10/Blazer (1987-1995)** | 700 CFM | ~15 lb/hr | Common, works when tuned |

**Avoid:**
- 305/350 V8 TBI (too large, poor atomization at low flow)
- Single-injector TBI (very early units, less desirable)

**Part Number Examples:**
- 17093640 (2.5L application)
- 17094004 (4.3L application, common)

**Condition:**
- **Remanufactured preferred** (known good injectors, IAC, TPS)
- Used acceptable if low-mileage
- Avoid corroded or damaged units

**What's Included in TBI Unit:**
- (2) Fuel injectors
- Throttle Position Sensor (TPS)
- Idle Air Control (IAC) motor
- Fuel pressure regulator (internal)
- Throttle shaft and linkage

**Cost:** $200-400 reman, $100-200 used

---

### Intake Adapter Plate — Critical Fabrication

**The Challenge:**

Your Renix system has a **Renix TBI flange** on the AMC intake manifold. The GM TBI has a **GM TBI flange**. These are **not the same**.

**DO NOT ASSUME** this is plug-and-play or that a "2-barrel carburetor adapter" will work. You need a **Renix TBI to GM TBI adapter**, which is uncommon.

**Options:**

1. **Custom Fabrication (Most Common)**
   - Measure both flanges carefully
   - Design adapter plate (aluminum, 1/2"-3/4" thick)
   - Machine or waterjet cut
   - Drill and tap mounting holes
   - Port-match or slightly enlarge passages

2. **Aftermarket Adapter (If Available)**
   - Search: "Renix TBI to GM TBI adapter"
   - Check Jeep forums for group buys or DIY designs
   - As of 2026, this is not a common part — verify before assuming

3. **Intake Manifold Swap**
   - Replace entire intake manifold with one that has GM TBI flange
   - **Not recommended** (adds cost, complexity, potential vacuum leaks)

**Fabrication Specifications:**

- **Material:** 6061 aluminum (easy to machine, corrosion-resistant)
- **Thickness:** 1/2" minimum (provides material for port-matching)
- **Gasket Surfaces:** Both sides must be flat and smooth
- **Bolt Pattern:** Must match both TBI and manifold
- **Port Alignment:** Critical — misalignment causes turbulence and performance loss

**Gaskets:**
- Use quality gaskets both sides of adapter
- RTV sealant on metal-to-metal surfaces
- Torque in proper sequence (center out, crisscross pattern)

**Estimated Cost:**
- DIY machining: $50-100 (material + shop time if farming out)
- Custom one-off: $150-300 (CNC shop)

**Timeline:**
- Design and measure: 2-4 hours
- Machining: 1-2 days (if outsourcing)
- Test-fit and adjust: 1-2 hours

**CRITICAL:** Do not proceed past this point until adapter plate is confirmed to fit both TBI and manifold.

---

### Throttle Cable & Linkage

**The Problem:**

Renix throttle cable pull angle ≠ GM TBI pull angle. Factory cable will not work correctly.

**Options:**

1. **Universal Throttle Cable (Easiest)**
   - Lokar, B&M, or similar adjustable cable
   - Allows custom routing and length
   - Bracket usually included or adaptable
   - **Cost:** $40-80

2. **Modified Factory Cable**
   - Extend or shorten Renix cable
   - Custom bracket for GM TBI
   - Requires fabrication and cable-making skills
   - **Cost:** $20-50 (materials)

3. **Donor GM Cable**
   - Pull complete cable from S10 donor
   - Custom bracket to mount to firewall
   - May not route cleanly in MJ (different firewall)
   - **Cost:** $10-30 (junkyard)

**Bracket Fabrication:**

You **will** need a custom bracket. GM TBI throttle shaft position does not match Renix.

**Requirements:**
- Secure mounting to TBI body
- Proper cable pull angle (perpendicular to shaft)
- Adjustable cable stop (for idle setting)
- Return spring attachment point

**Materials:**
- Steel plate (1/8"-1/4" thick)
- Bolts matching TBI mounting holes
- Cable retention clip or pinch bolt

**Estimated Fabrication Time:** 2-4 hours

**Testing:**
- Full throttle travel must be achieved
- Cable must not bind at any point
- Return spring must close throttle completely
- No cable rub on other components

---

### Air Cleaner Adaptation

**Challenge:**

Renix air cleaner may not fit GM TBI inlet size/orientation.

**Options:**

1. **Open Element Filter (Easiest)**
   - K&N or similar clamp-on filter
   - Fits directly to TBI inlet
   - **Pros:** Simple, good airflow, easy to service
   - **Cons:** Louder intake noise, no pre-filter
   - **Cost:** $30-60

2. **Adapt Factory Air Cleaner**
   - Fabricate adapter plate
   - Retain factory air box
   - **Pros:** Quiet, filtered, stock appearance
   - **Cons:** Fabrication required
   - **Cost:** $20-50 (materials)

3. **Aftermarket Air Box**
   - AEM, Spectre, or similar universal box
   - Custom mounting
   - **Pros:** Good filtration, professional look
   - **Cons:** Expensive, may not fit cleanly
   - **Cost:** $100-200

**Recommendation:** Start with open element for initial testing. Add enclosed box later if noise is issue.

**IAT Sensor Placement:**

GM TBI uses an **Intake Air Temperature (IAT)** sensor, usually mounted in the air cleaner housing.

**Options:**
- Drill hole in air cleaner (if using enclosed box)
- Use inline IAT bung in intake tube
- Mount directly in intake manifold runner (requires drilling/tapping)

**Avoid:** Leaving IAT sensor exposed to engine bay heat. It must read actual intake air temp.

---

## SUBSYSTEM 4: Fuel System Adaptation

### Fuel Pressure Requirements

**Critical Specification Difference:**

| System | Pressure | Regulator Location |
|--------|----------|-------------------|
| **Renix TBI** | ~14.5 PSI | External (usually) |
| **GM TBI** | 9-13 PSI (typ. 10-12) | Internal (in TBI body) |

**Implication:** Your existing Renix fuel pump *might* work, but pressure is higher than GM TBI spec.

### Fuel Pump Strategy

**Option 1: Test Existing Pump First (Recommended)**

**Procedure:**
1. Install GM TBI (which has internal regulator)
2. Connect existing fuel pump
3. Measure fuel pressure at TBI inlet
4. GM TBI internal regulator should clamp pressure to ~12 PSI
5. **If pressure is 10-13 PSI:** Existing pump works ✅
6. **If pressure is >15 PSI or <8 PSI:** Need different pump or external regulator

**Option 2: Install GM TBI-Spec Pump**

**If existing pump doesn't regulate correctly:**

| Pump Type | Pressure | Flow | Source | Cost |
|-----------|----------|------|--------|------|
| **Carter P4070** | 6-8 PSI | 35 GPH | RockAuto, NAPA | $60-100 |
| **Airtex E2000** | 9-13 PSI | 30 GPH | RockAuto, AutoZone | $80-120 |
| **Walbro GSL392** | 10-12 PSI | 40 GPH | Amazon, Summit | $100-150 |

**Installation:**
- Same location as existing pump (in-tank preferred, inline acceptable)
- If using inline pump: mount low, near tank (gravity feed to pump)
- Use pre-filter before pump (protect from debris)
- Use post-filter before TBI (10-micron minimum)

**Wiring:**
- Same circuit as existing (ECU-controlled relay)
- Verify amperage rating (most TBI pumps draw 4-6A)

---

### Fuel Filter

**Requirement:** High-quality inline filter, **before TBI**.

**Specification:**
- 10-micron or finer
- Rated for EFI pressure (50+ PSI rating even though running 10-12)
- Metal canister preferred (plastic can crack)

**Recommended Parts:**
- AC Delco GF652
- WIX 33042
- NAPA 3042

**Cost:** $15-30

**Mounting:**
- Frame rail or firewall
- Inlet from tank, outlet to TBI
- Arrow on filter points toward engine
- Secure with metal clamps (hose clamps fail)

---

### Return Line Verification

**GM TBI uses a return-style fuel system:**
- Fuel pump → filter → TBI
- TBI internal regulator → return line → tank

**Your MJ (Renix TBI) already has a return line.** ✅

**Verification Steps:**

1. **Locate existing return line:**
   - Usually steel line running along frame rail
   - Returns to fuel tank (separate from supply)

2. **Inspect condition:**
   - **Look for:** External rust, damage, kinks
   - **Check:** Interior condition (if accessible)
   - **Age:** 38 years old — assume compromised until proven otherwise

3. **Test for blockage:**
   - Disconnect at tank end
   - Blow compressed air through line (carefully, low pressure)
   - Should flow freely
   - If blocked: replace line

4. **Rust contamination risk:**
   - Old steel line may have internal rust scale
   - This can plug GM TBI injectors quickly
   - **Recommendation:** Replace return line with new steel or nylon

**Return Line Replacement:**

| Material | Pros | Cons | Cost |
|----------|------|------|------|
| **Steel (pre-bent)** | OEM-style, durable | Rusts eventually | $80-150 |
| **Steel (custom-bent)** | Perfect fit | Requires bending tools | $50-100 |
| **Nylon (3/8")** | Rust-proof, flexible | Less durable, heat-sensitive | $30-60 |

**Installation:**
- Route away from exhaust (minimum 3" clearance if nylon)
- Secure every 12-18" (prevent vibration)
- Use proper fittings (no barbs on EFI line)

---

### Fuel Pump Relay

**GM TBI fuel pump control:**
- ECU provides ground signal to relay coil
- Relay switches 12V power to fuel pump
- Relay energizes for 2-3 seconds at key-on (prime)
- Relay stays energized while engine runs

**Relay Specification:**
- Standard automotive relay (Bosch-style)
- 30A continuous rating minimum
- SPST (single-pole, single-throw) acceptable
- Coil: 12V DC, 150-200mA draw

**Wiring:**

| Relay Pin | Connects To |
|-----------|-------------|
| **85** | ECU fuel pump control (ground signal) |
| **86** | +12V switched (ignition) |
| **30** | +12V constant (fused 20A) |
| **87** | Fuel pump positive |

**Mounting:**
- Near ECU or in engine bay
- Protected from weather
- Accessible for replacement

**Existing Renix Relay:**
- Can be reused if wiring is compatible
- Verify coil voltage matches (12V)
- Test before relying on it

---

## SUBSYSTEM 5: Sensors

### Sensor Philosophy

**GM TBI uses FEWER sensors than Renix:**

| Sensor | Renix TBI | GM TBI |
|--------|-----------|--------|
| Crank Position Sensor (CPS) | ✅ Required | ❌ Not used |
| Manifold Absolute Pressure (MAP) | ✅ Required | ✅ Required |
| Throttle Position Sensor (TPS) | ✅ Required | ✅ Required (on TBI) |
| Coolant Temp Sensor (CTS) | ✅ Required | ✅ Required |
| Manifold Air Temp (MAT) | ✅ Required | ❌ Not used |
| Intake Air Temp (IAT) | ❌ Not used | ✅ Required |
| Idle Air Control (IAC) | ✅ Required | ✅ Required (on TBI) |
| Oxygen Sensor (O2) | ✅ Required | ✅ Required |

**Key Changes:**
- **No CPS needed** — GM TBI ignition reference comes from distributor (HEI pickup coil or reluctor)
- **IAT replaces MAT** — Function is similar (measures air temp), different sensor
- **Fewer critical sensors = fewer failure points**

---

### Sensor-by-Sensor Plan

#### 1. MAP Sensor (Manifold Absolute Pressure)

**Function:** Measures intake manifold vacuum/pressure, primary load sensor for fuel calculation.

**GM Part:**
- AC Delco 16040749 (or equivalent)
- 1-bar sensor (good to ~14,000 ft elevation)

**Mounting:**
- Firewall (same location as Renix MAP)
- Must be above engine (prevent oil contamination)

**Connections:**
- (3) wires: +5V reference, ground, signal
- Vacuum line from intake manifold (same as Renix)

**Testing:**
- Key ON, engine OFF: ~4.5V signal (atmospheric pressure)
- Engine idling: ~1.5-2.5V signal (depending on idle vacuum)
- Voltage should change smoothly with throttle

**Cost:** $40-80

**Can You Reuse Renix MAP?**
- **No.** Voltage output curves are different.
- GM ECU expects GM MAP sensor signal.

---

#### 2. TPS (Throttle Position Sensor)

**Function:** Reports throttle blade angle to ECU.

**GM Part:**
- Included with TBI unit ✅
- Mounted directly on throttle shaft

**No separate purchase needed** — comes with reman TBI.

**Testing:**
- Key ON, throttle closed: ~0.5V
- Throttle wide open: ~4.5V
- Should sweep smoothly with no dead spots

**Adjustment:**
- TPS is adjustable (slotted mounting holes)
- Set closed-throttle voltage to 0.5V per GM spec
- Lock down and retest

---

#### 3. CTS (Coolant Temperature Sensor)

**Function:** Measures engine coolant temp for cold-start enrichment and closed-loop operation.

**GM Part:**
- AC Delco 213-190 (or equivalent)
- 2-wire sensor (ground through ECU)

**Mounting Options:**

1. **Reuse Renix CTS Location** (thermostat housing)
   - **Check thread pitch** — may be same
   - Install GM sensor if threads match

2. **Drill/Tap New Location**
   - Intake manifold coolant passage
   - 3/8" NPT tap
   - Use thread sealer (not Teflon tape — contaminates coolant)

**Wiring:**
- (2) wires: ECU reference voltage, ground

**Testing:**
- Cold engine (~70°F): ~3000Ω resistance
- Warm engine (~200°F): ~300Ω resistance
- Use resistance chart to verify

**Cost:** $15-30

**Can You Reuse Renix CTS?**
- **No.** Different resistance curve.
- GM ECU expects GM sensor values.

---

#### 4. IAT (Intake Air Temperature)

**Function:** Measures incoming air temperature for fuel/timing compensation.

**GM Part:**
- AC Delco 213-783 (or equivalent)
- Same sensor type as CTS (thermistor)

**Mounting Options:**

1. **Air cleaner housing** (if using enclosed box)
   - Drill hole, install bung
   - Sensor exposed to intake air

2. **Intake manifold runner**
   - Drill/tap 3/8" NPT
   - Sensor directly in air stream
   - **Risk:** Oil contamination if engine has blowby

3. **Inline bung in intake tube**
   - Install threaded bung in tube between filter and TBI
   - Sensor in airflow path

**Wiring:**
- (2) wires: ECU reference voltage, ground

**Testing:**
- Same as CTS (same sensor type)
- Should read ambient air temperature when cold

**Cost:** $15-30

**Can You Reuse Renix MAT?**
- **Maybe.** If it's the same GM sensor type.
- Verify resistance curve matches.
- Safer to use new GM IAT sensor.

---

#### 5. O2 Sensor (Oxygen Sensor)

**Function:** Measures exhaust oxygen content for closed-loop fuel trim.

**GM Part Options:**

| Type | Wires | Heat Time | Cost | Recommended? |
|------|-------|-----------|------|--------------|
| **Non-heated** | 1-wire | 3-5 min | $20-40 | Not for this application |
| **Heated** | 3-wire | 30-60 sec | $40-80 | ✅ Yes |
| **Heated wideband** | 4-wire | 10-20 sec | $80-150 | Overkill (requires different ECU) |

**Recommendation:** **3-wire heated O2 sensor**

**Why Heated?**
- Faster warm-up (closed-loop operation sooner)
- Better cold-weather performance
- More accurate at low exhaust temps (idle, light load)

**Part Numbers:**
- AC Delco 213-1572
- Bosch 13913
- Denso 234-4012

**Installation:**

1. **Weld O2 bung into exhaust downpipe**
   - Location: 18-24" downstream of exhaust manifold
   - Must be in exhaust flow (not at edge)
   - Angle sensor slightly downward (prevent condensation buildup)
   - Use stainless bung (mild steel rusts)

2. **Thread sensor into bung**
   - Use anti-seize (high-temp)
   - Do not over-torque (can crack ceramic element)

3. **Route wiring**
   - Use high-temp wire loom
   - Keep away from hot exhaust
   - Avoid sharp bends

**Wiring (3-wire heated):**
- Wire 1: Signal (to ECU)
- Wire 2: Heater +12V (from relay, key-on power)
- Wire 3: Ground (to chassis or ECU ground)

**Testing:**
- Warm engine fully (5-10 minutes)
- Signal voltage should fluctuate 0.1-0.9V rapidly (closed loop)
- Steady voltage = failed sensor or system not in closed loop

**Cost:** $40-80

---

#### 6. IAC (Idle Air Control)

**Function:** Stepper motor that controls idle speed by bypassing air around throttle plate.

**GM Part:**
- Included with TBI unit ✅

**No separate purchase needed.**

**Wiring:**
- (4) wires from ECU (stepper motor coil pairs)
- Polarity matters — follow wiring diagram

**Testing:**
- Key ON (engine not running): Should hear faint clicking (IAC moving)
- Engine idling: Disconnecting IAC should cause stall or rough idle
- Use ALDL scanner to command IAC position (verify response)

**Cleaning:**
- Carbon buildup is common
- Remove IAC, spray with throttle body cleaner
- **Do not soak in solvent** (damages stepper motor)
- Wipe clean, reinstall

---

### Sensor Summary Table

| Sensor | GM P/N | Location | Cost | Reuse Renix? |
|--------|--------|----------|------|--------------|
| **MAP** | 16040749 | Firewall | $40-80 | No |
| **TPS** | (on TBI) | TBI shaft | Incl. | No |
| **CTS** | 213-190 | T-stat housing | $15-30 | No |
| **IAT** | 213-783 | Air cleaner | $15-30 | Maybe |
| **O2** | 213-1572 | Downpipe | $40-80 | Maybe |
| **IAC** | (on TBI) | TBI body | Incl. | No |

**Total Sensor Cost (all new):** $150-300

---

## SUBSYSTEM 6: Ignition Integration

### The Simple Strategy: Keep Renix Ignition

**Why This Makes Sense:**

GM TBI ECU can operate in two modes:
1. **ECU-controlled timing** (requires distributor with HEI module or crank trigger)
2. **Mechanical timing** (ECU has no timing control)

**For this swap, use Mode 2 (mechanical timing).**

**Advantages:**
- Keep your existing Renix distributor ✅
- Keep your existing ignition module ✅
- Keep your existing coil ✅
- No additional wiring complexity
- Proven reliable (it already works)

**Trade-off:**
- No electronic timing advance (uses mechanical + vacuum advance)
- Slightly less optimal timing than ECU control
- **But:** Simplicity and reliability outweigh small performance loss

---

### Renix Ignition Components (Retained)

| Component | Function | Action |
|-----------|----------|--------|
| **Distributor** | Triggers ignition events | Retain, verify condition |
| **Ignition Module** | Controls coil dwell/trigger | Retain, test |
| **Coil** | Generates spark | Retain or upgrade |
| **Spark Plugs** | Ignite fuel | Replace (routine maintenance) |
| **Spark Plug Wires** | Conduct spark | Replace if cracked/worn |

**No changes required.** Just verify everything is in good working order.

---

### Ignition Timing Setup (Mechanical)

**Initial Timing:**
- Set base timing to **10° BTDC** (typical for 2.5L AMC)
- Verify with timing light
- Lock distributor

**Vacuum Advance:**
- Connect vacuum advance to manifold vacuum port
- Verify advance mechanism works (test with hand vacuum pump)

**Total Timing:**
- Base: 10° BTDC
- Mechanical: +10-15° (by 3000 RPM)
- Vacuum: +10-15° (at idle/cruise)
- Total: ~30-35° at cruise (typical)

**Tuning:**
- Drive truck, listen for detonation (spark knock)
- If knock occurs: retard timing 2° at a time
- Goal: Maximum advance without knock

**Notes:**
- 9.2:1 compression AMC 150 is not knock-prone
- Regular 87 octane fuel is fine
- Higher octane gains nothing (no advantage without higher compression)

---

### Alternative: ECU-Controlled Timing (Advanced)

**If you want ECU timing control later:**

**Requirements:**
- Replace distributor with GM HEI distributor
- Wire ECU timing reference (from HEI module)
- Wire ECU timing control (to HEI module)
- Re-burn PROM with timing tables
- Tune on dyno or with extensive data-logging

**Advantages:**
- Optimal timing under all conditions
- Slight fuel economy improvement (~1-2 MPG)
- Easier cold starts (ECU advances timing when cold)

**Disadvantages:**
- More complex wiring
- More failure points (HEI module, ECU timing circuit)
- Requires tuning expertise

**Recommendation:** **Not worth it for this application.** Stick with mechanical timing.

---

## INSTALLATION WORKFLOW

### Pre-Installation Checklist

**Before You Start:**

- [ ] All parts acquired and verified
- [ ] Renix system fully documented (photos, notes)
- [ ] Renix ECU and sensors removed but saved
- [ ] Workspace prepared (clean, organized, well-lit)
- [ ] Fire extinguisher nearby
- [ ] Battery disconnected
- [ ] Fuel system depressurized

---

### Phase 1: Remove Renix Components (1 Day)

**Goal:** Clean removal of Renix system without damaging anything reusable.

**Tasks:**

1. **Document Renix system:**
   - [ ] Photo every sensor location
   - [ ] Photo ECU connector (both sides)
   - [ ] Photo harness routing
   - [ ] Label every wire before disconnecting

2. **Remove Renix ECU:**
   - [ ] Disconnect ECU connector (careful — fragile)
   - [ ] Unbolt ECU from bracket
   - [ ] Store in anti-static bag (ESD protection)

3. **Remove Renix sensors:**
   - [ ] MAP sensor (firewall)
   - [ ] TPS (throttle body)
   - [ ] CTS (thermostat housing)
   - [ ] MAT (intake manifold)
   - [ ] IAC (throttle body)
   - [ ] O2 sensor (exhaust)
   - [ ] CPS (bellhousing) — **Can be left in place** (not used by GM TBI)

4. **Remove Renix TBI:**
   - [ ] Disconnect fuel lines (catch spillage)
   - [ ] Disconnect throttle cable
   - [ ] Disconnect vacuum lines
   - [ ] Unbolt TBI from manifold
   - [ ] Remove gasket (clean mating surface)

5. **Harness preparation:**
   - [ ] Trace ECU connector wires back to their sources
   - [ ] Identify which wires are reusable (power, ground, fuel pump)
   - [ ] Identify which wires must change (sensor circuits)
   - [ ] Label everything clearly

**End State:** Engine bay clear of Renix TBI and sensors, harness prepped for GM integration.

---

### Phase 2: Fabricate Adapter Plate (2-4 Days)

**Goal:** Perfect-fitting adapter plate ready to install.

**Tasks:**

1. **Measure both flanges:**
   - [ ] Renix TBI flange bolt pattern (on intake manifold)
   - [ ] GM TBI flange bolt pattern (on TBI unit)
   - [ ] Port sizes and shapes
   - [ ] Stud/bolt locations and sizes

2. **Design adapter:**
   - [ ] CAD drawing or accurate hand sketch
   - [ ] Account for gasket thickness
   - [ ] Plan port transition (no sharp edges or abrupt size changes)

3. **Machine or cut:**
   - [ ] If machining yourself: use mill or careful drill press work
   - [ ] If outsourcing: provide drawing to machine shop
   - [ ] Material: 6061 aluminum, 1/2"-3/4" thick

4. **Test-fit (dry):**
   - [ ] Adapter to manifold: all bolts align?
   - [ ] Adapter to TBI: all bolts align?
   - [ ] Port alignment: centered and smooth?

5. **Refinement:**
   - [ ] Deburr all edges
   - [ ] Port-match if needed (enlarge ports to match larger opening)
   - [ ] Ensure gasket surfaces are flat (check with straightedge)

**End State:** Adapter plate ready to install with gaskets.

---

### Phase 3: Install GM TBI & Fuel System (1-2 Days)

**Goal:** GM TBI mounted and fuel system plumbed.

**Tasks:**

1. **Clean intake manifold surface:**
   - [ ] Remove old gasket material (gasket scraper)
   - [ ] Clean with solvent (brake cleaner)
   - [ ] Inspect for cracks or damage

2. **Install adapter plate:**
   - [ ] Gasket on manifold surface
   - [ ] Adapter plate on gasket
   - [ ] Apply thin bead of RTV on adapter top surface
   - [ ] Gasket on adapter
   - [ ] Torque bolts to spec (15-20 ft-lbs typical, follow gasket instructions)

3. **Install GM TBI on adapter:**
   - [ ] Align TBI to adapter
   - [ ] Install bolts finger-tight
   - [ ] Torque evenly in crisscross pattern (12-15 ft-lbs)
   - [ ] Verify throttle shaft rotates freely

4. **Fabricate and install throttle cable bracket:**
   - [ ] Mount bracket to TBI or adapter
   - [ ] Route cable with correct pull angle
   - [ ] Test full throttle travel
   - [ ] Adjust cable tension

5. **Connect fuel lines:**
   - [ ] Supply line to TBI inlet
   - [ ] Return line from TBI outlet to tank
   - [ ] Use proper EFI-rated fittings (no barbs or clamps)
   - [ ] Double-check routing (no kinks, no contact with exhaust)

6. **Install fuel filter:**
   - [ ] Inline, before TBI
   - [ ] Arrow pointing toward engine
   - [ ] Secure to frame or firewall

7. **Install or verify fuel pump:**
   - [ ] If new pump: install per pump instructions
   - [ ] If reusing existing: test pressure (see Subsystem 4)

8. **Air cleaner installation:**
   - [ ] Mount filter to TBI inlet
   - [ ] Secure with clamp
   - [ ] Verify clearance (hood, firewall, etc.)

**End State:** TBI mounted, fuel system plumbed and ready to test.

---

### Phase 4: Sensor Installation (1 Day)

**Goal:** All GM sensors mounted and wired.

**Tasks:**

1. **MAP sensor:**
   - [ ] Mount on firewall (same location as Renix)
   - [ ] Connect vacuum line from intake manifold
   - [ ] Wire 3-wire connector (5V, ground, signal)

2. **CTS:**
   - [ ] Install in thermostat housing (or new location)
   - [ ] Use thread sealer (not Teflon tape)
   - [ ] Wire 2-wire connector (reference, ground)

3. **IAT:**
   - [ ] Install in air cleaner or intake manifold
   - [ ] Wire 2-wire connector (reference, ground)

4. **O2 sensor:**
   - [ ] Weld bung into downpipe (if not already done)
   - [ ] Thread sensor into bung (anti-seize on threads)
   - [ ] Wire 3-wire connector (signal, heater power, ground)

5. **TPS & IAC:**
   - [ ] Already on TBI (no installation needed)
   - [ ] Wire connectors per harness diagram

6. **Verify all sensor wiring:**
   - [ ] Continuity test: sensor pin to ECU pin
   - [ ] No shorts to ground
   - [ ] Proper connector seating

**End State:** All sensors installed and wired.

---

### Phase 5: Harness Integration (1-2 Days)

**Goal:** GM ECU connected to all sensors, power, and fuel pump.

**Tasks:**

1. **Install GM ECU:**
   - [ ] Mount in chosen location (passenger kick panel recommended)
   - [ ] Secure with bracket (rubber isolators to reduce vibration)

2. **Power & ground:**
   - [ ] Constant 12V to ECU (fused 10A)
   - [ ] Switched 12V to ECU (fused 10A)
   - [ ] ECU grounds (3x minimum, direct to battery negative or firewall ground point)

3. **Sensor circuits:**
   - [ ] Connect each sensor per wiring diagram
   - [ ] Verify pin-to-pin continuity
   - [ ] Double-check no swapped wires (especially polarity-sensitive sensors)

4. **Fuel pump relay:**
   - [ ] Install relay near ECU or in engine bay
   - [ ] Wire per relay diagram (see Subsystem 4)
   - [ ] Verify relay clicks when key turned ON (ECU should prime pump)

5. **ALDL port:**
   - [ ] Install connector under dash
   - [ ] Wire data lines to ECU
   - [ ] Wire power and ground
   - [ ] Test with ALDL cable/software (should connect)

6. **Check Engine Light:**
   - [ ] Wire CEL output from ECU to dash light
   - [ ] Verify light illuminates with key ON, ECU not powered (proves bulb works)

7. **Harness routing and protection:**
   - [ ] Route all wiring away from heat and sharp edges
   - [ ] Install split loom or braided sleeve
   - [ ] Secure with zip ties every 12-18"
   - [ ] Apply dielectric grease to all connectors

**End State:** Complete harness installed, tested for continuity, ready to power up.

---

### Phase 6: Pre-Start Testing (4-6 Hours)

**Goal:** Verify all systems before attempting first start.

**DO NOT START ENGINE UNTIL ALL TESTS PASS.**

**Tasks:**

1. **Visual inspection:**
   - [ ] All sensors connected
   - [ ] All grounds tight
   - [ ] Fuel lines secure (no leaks)
   - [ ] No wires touching hot exhaust
   - [ ] Throttle returns to idle (spring tension correct)

2. **Electrical tests (key OFF, battery connected):**
   - [ ] Battery voltage: _______ V (should be 12.6V+)
   - [ ] Constant 12V at ECU: _______ V (should be 12V+)
   - [ ] Switched 12V at ECU (key OFF): _______ V (should be 0V)

3. **Key ON tests (engine not running):**
   - [ ] Switched 12V at ECU: _______ V (should be 12V+)
   - [ ] Fuel pump runs for 2-3 seconds: YES / NO
   - [ ] Fuel pump stops after prime: YES / NO
   - [ ] Check for fuel leaks: NONE / LEAKS FOUND
   - [ ] CEL light ON: YES / NO (should illuminate)

4. **Sensor voltage tests (key ON, engine OFF):**
   - [ ] MAP sensor 5V reference: _______ V (5.0V ±0.2V)
   - [ ] MAP sensor signal: _______ V (4.0-4.5V atmospheric)
   - [ ] TPS 5V reference: _______ V (5.0V ±0.2V)
   - [ ] TPS signal (closed throttle): _______ V (0.5V ±0.1V)
   - [ ] TPS signal (WOT): _______ V (4.5V ±0.2V)
   - [ ] CTS signal (cold engine): _______ V (3-4V typical)
   - [ ] IAT signal (ambient): _______ V (similar to CTS)

5. **Resistance tests (sensors disconnected):**
   - [ ] CTS resistance: _______ Ω (3000Ω @ 70°F typical)
   - [ ] IAT resistance: _______ Ω (should match temp)
   - [ ] O2 heater resistance: _______ Ω (5-20Ω typical)

6. **Fuel pressure test:**
   - [ ] Install fuel pressure gauge at TBI inlet
   - [ ] Key ON (pump primes)
   - [ ] Fuel pressure: _______ PSI (target: 10-13 PSI)
   - [ ] Pressure holds (no rapid drop): YES / NO

7. **Ignition system test:**
   - [ ] Coil positive has 12V: YES / NO
   - [ ] While cranking, spark at plug wire: YES / NO (use spark tester)

**All tests must PASS. Do not proceed if any failures.**

**If failures found:**
- Trace circuits with multimeter
- Verify wiring matches diagram
- Check for crossed wires, bad grounds, shorts

---

### Phase 7: First Start Attempt (1 Day)

**Goal:** Start engine and verify basic operation.

**Safety:**
- [ ] Fire extinguisher within reach
- [ ] Exhaust system repaired (no CO intrusion to cab)
- [ ] Helper nearby
- [ ] All tools removed from engine bay

**Pre-Start Checklist:**
- [ ] All fluids topped off
- [ ] Battery fully charged
- [ ] Fuel tank has clean fuel (no old varnished gas)
- [ ] Throttle linkage moves freely
- [ ] No loose items in engine bay

**Procedure:**

1. **Initial cranking (no start expected):**
   - [ ] Turn key to START
   - [ ] Crank for 5-10 seconds (no more)
   - [ ] Listen: fuel pump running? Injectors clicking?
   - [ ] Smell: fuel odor at exhaust? (confirms injectors firing)

2. **If no fuel odor:**
   - [ ] Check fuel pressure while cranking (should maintain 10-13 PSI)
   - [ ] Check injector wiring (should see voltage pulse with test light)
   - [ ] Check for fault codes (ALDL scanner)

3. **Second attempt:**
   - [ ] Wait 30 seconds (cool starter)
   - [ ] Key to START
   - [ ] Crank for 10-15 seconds
   - [ ] If engine fires but won't stay running: normal on first start (ECU learning)

4. **If engine starts:**
   - [ ] Let idle for 30 seconds
   - [ ] Watch oil pressure gauge (should rise within 5 seconds)
   - [ ] Listen for unusual noises
   - [ ] Smell for fuel, burning, or exhaust
   - [ ] Visual check for leaks (fuel, coolant, oil)

5. **If engine won't start after 3 attempts:**
   - [ ] STOP. Do not flood engine.
   - [ ] Check spark (pull plug wire, use spark tester)
   - [ ] Check fuel delivery (smell at exhaust, check pressure)
   - [ ] Check for fault codes
   - [ ] Troubleshoot before continuing

6. **When engine is running:**
   - [ ] Idle quality: SMOOTH / ROUGH
   - [ ] Idle speed: _______ RPM (target 700-900 warm)
   - [ ] Oil pressure: _______ PSI (should be 20+ at idle when warm)
   - [ ] Coolant temp: rising normally
   - [ ] CEL light: OFF / ON (OFF is good; ON means fault code present)

7. **Shut off test:**
   - [ ] Turn key to OFF
   - [ ] Engine stops immediately: YES / NO
   - [ ] No run-on condition: VERIFIED

**If engine runs and shuts off properly: SUCCESS! ✅**

**If issues found:** Document and troubleshoot (see Phase 8).

---

### Phase 8: Initial Tuning & Troubleshooting (2-4 Days)

**Goal:** Resolve any issues, optimize idle, verify all systems.

**Common First-Start Issues:**

| Symptom | Likely Cause | Solution |
|---------|--------------|----------|
| Won't start, no spark | Ignition wiring error | Verify coil trigger circuit |
| Won't start, has spark | No fuel delivery | Check pump, injectors, pressure |
| Starts, dies immediately | IAC not working | Check IAC wiring, clean IAC |
| Rough idle, won't stay running | MAP sensor issue | Check vacuum line, sensor wiring |
| Idles OK, dies when throttle applied | TPS not working | Check TPS wiring, adjustment |
| High idle (1500+ RPM) | IAC stuck open | Clean IAC, check for vacuum leaks |
| Engine runs rich (black smoke) | O2 not working or ignored | Check O2 wiring, wait for warm-up |

**Diagnostic Tools:**

1. **ALDL Scanner (Essential):**
   - Connect laptop with WinALDL or TunerPro
   - View live data:
     - RPM
     - MAP voltage
     - TPS voltage
     - CTS temperature
     - IAT temperature
     - O2 voltage
     - Fuel trim (BLM, integrator)
   - Check for fault codes

2. **Multimeter:**
   - Verify sensor voltages match ALDL readings
   - Check grounds (<0.1Ω to battery negative)

3. **Fuel Pressure Gauge:**
   - Verify pressure stays 10-13 PSI at idle
   - Check for pressure drop (weak pump or leak)

**Tuning Tasks:**

1. **Idle speed adjustment:**
   - Warm engine fully (5-10 minutes)
   - Target idle: 700-900 RPM
   - Adjust IAC position with scanner (if supported)
   - Or: adjust throttle stop screw (minimal adjustment)

2. **TPS adjustment:**
   - Key ON, throttle closed
   - Verify TPS voltage: 0.5V ±0.05V
   - If incorrect: loosen TPS screws, rotate slightly, retighten
   - Retest

3. **Ignition timing verification:**
   - Warm engine
   - Use timing light, verify base timing (10° BTDC typical)
   - Lock distributor

4. **Closed-loop operation:**
   - Drive until engine fully warm (10-15 minutes)
   - Monitor O2 voltage with scanner
   - Should fluctuate 0.1-0.9V rapidly (2-3 times per second)
   - If steady: O2 sensor not working, or ECU not in closed loop

5. **Fuel trim check:**
   - BLM (Block Learn Multiplier): should be 118-138 (128 is perfect)
   - Integrator: should oscillate around 128
   - If BLM <118: running lean (vacuum leak, weak pump, or injector issue)
   - If BLM >138: running rich (bad O2, stuck IAC, or PROM too rich)

**End State:** Engine starts reliably, idles smoothly, responds to throttle, no fault codes.

---

### Phase 9: Test Drive & Shake-Down (1-2 Weeks)

**Goal:** Verify system under real-world conditions.

**Short Test Drive (5-10 miles):**

1. **Neighborhood loop:**
   - [ ] Acceleration from stop: smooth or hesitation?
   - [ ] Deceleration: smooth or backfire?
   - [ ] Idle at stop lights: stable or hunting?
   - [ ] Transmission shifts: normal or delayed (if auto)?

2. **Return and inspect:**
   - [ ] Check for new leaks (fuel, coolant, oil)
   - [ ] Check wiring: anything hot or rubbing?
   - [ ] Check exhaust: leaks or unusual smells?

**Extended Test Drive (50-100 miles over several days):**

3. **Varied conditions:**
   - [ ] City driving (stop-and-go)
   - [ ] Highway driving (sustained cruise)
   - [ ] Hills (loaded acceleration)
   - [ ] 4WD engagement (if applicable)

4. **Monitor with ALDL:**
   - [ ] Data-log entire drive
   - [ ] Review logs for anomalies:
     - TPS signal smooth?
     - MAP signal logical (high under load, low at cruise)?
     - CTS reading correct temp?
     - O2 switching properly?
     - Fuel trim staying in range (BLM 118-138)?

5. **Cold start test:**
   - [ ] Park overnight (cold soak)
   - [ ] Cold start next morning (no throttle, just key)
   - [ ] Should start within 5 seconds
   - [ ] Idle should stabilize within 30 seconds

6. **Hot restart test:**
   - [ ] Drive until fully warm
   - [ ] Shut off, wait 5 minutes (heat soak)
   - [ ] Restart (should start immediately)
   - [ ] Common issue: vapor lock or heat-affected sensor

**Issues Log:**

Document any issues discovered:

| Issue | When It Occurs | Severity | Action Needed |
|-------|----------------|----------|---------------|
| Example: Hesitation on acceleration | When cold | Moderate | Check TPS, IAC |
| | | | |

---

### Phase 10: Final Optimization (1-2 Weeks)

**Goal:** Fine-tune for best performance, reliability, and fuel economy.

**Tasks:**

1. **PROM optimization (if using custom burn):**
   - [ ] Collect data logs from 100+ miles of driving
   - [ ] Send logs to tuner
   - [ ] Receive custom PROM
   - [ ] Install and re-test
   - [ ] Compare before/after fuel economy and driveability

2. **Fuel economy baseline:**
   - [ ] Fill tank, reset trip odometer
   - [ ] Drive 100+ miles (mixed city/highway)
   - [ ] Refill, calculate MPG
   - [ ] Expect: 18-22 MPG (similar to Renix)

3. **Long-term monitoring:**
   - [ ] Check fault codes weekly (first month)
   - [ ] Retorque intake bolts (after 50 miles, then 200 miles)
   - [ ] Inspect all connections (vibration can loosen)
   - [ ] Monitor fuel pressure (pump wear)

4. **Documentation:**
   - [ ] Photo final installation
   - [ ] Create wiring diagram (for future reference)
   - [ ] Document sensor locations
   - [ ] Record baseline data (idle speed, fuel pressure, BLM values)

**Success Criteria:**

✅ Engine starts reliably (hot and cold)  
✅ Idle is smooth and stable  
✅ Throttle response is crisp  
✅ No fault codes  
✅ Fuel economy equal to or better than Renix  
✅ No leaks or unusual smells  
✅ Confident to drive daily

**End State:** GM TBI swap complete, truck is reliable daily driver.

---

## Comparison: Renix vs. GM TBI (Post-Swap Reality Check)

### What You Gain ✅

| Benefit | Impact |
|---------|--------|
| **Parts availability** | Excellent now, excellent in 10+ years |
| **Diagnostic capability** | Full ALDL data stream, easy troubleshooting |
| **Serviceability** | Any mechanic can work on GM TBI |
| **Tuning flexibility** | Custom PROMs available, user-tunable |
| **Sensor reduction** | No CPS (one fewer critical failure point) |
| **Cold start (maybe)** | Heated O2 helps, but Renix was already good |

### What You Lose ❌

| Trade-off | Impact |
|-----------|--------|
| **Factory originality** | No longer stock Renix (matters to some) |
| **Initial cost** | $900-2400 vs. $400-650 Renix refresh |
| **Installation time** | 4-8 weeks vs. 3-5 weeks Renix cleanup |
| **Cold start optimization** | Renix PROM was very good for cold starts (GM TBI matches it, doesn't exceed) |

### What Stays the Same 🔄

| Attribute | Reality |
|-----------|---------|
| **Power output** | Nearly identical (both are mild 2.5L TBI systems) |
| **Fuel economy** | 18-22 MPG (same range) |
| **Reliability** | Both are reliable when properly maintained |
| **Throttle response** | Similar (TBI is inherently slower than port injection) |

**Key Insight:** This is not a performance swap. This is a **serviceability and long-term parts availability** swap.

---

## Troubleshooting Guide

### Won't Start — No Spark

**Checklist:**
- [ ] Ignition module getting trigger signal from distributor?
- [ ] Coil getting 12V power?
- [ ] Coil negative being triggered (should pulse to ground)?
- [ ] Distributor reluctor/pickup coil working? (test resistance)
- [ ] Ignition wiring correct?

**Common Causes:**
1. Distributor pickup coil failed
2. Ignition module failed
3. Coil failed
4. Wiring error (swapped wires)

---

### Won't Start — Has Spark, No Fuel

**Checklist:**
- [ ] Fuel pump running when key turned ON?
- [ ] Fuel pressure at TBI: _______ PSI (should be 10-13)
- [ ] Injectors clicking? (listen with screwdriver to ear)
- [ ] Injector wiring correct?
- [ ] ECU getting RPM signal? (check ALDL scanner)

**Common Causes:**
1. Fuel pump not running (relay, wiring, or pump failure)
2. No fuel pressure (clogged filter, weak pump, leaking return line)
3. Injectors not firing (ECU not seeing RPM, or injector wiring error)

---

### Starts, Dies Immediately

**Checklist:**
- [ ] IAC functioning? (should hear clicking when key turned ON)
- [ ] Vacuum leaks? (listen for hissing)
- [ ] TPS reading correctly? (0.5V closed throttle)
- [ ] MAP sensor connected to vacuum?

**Common Causes:**
1. IAC stuck closed (no idle air bypass)
2. Large vacuum leak (too much air, too little fuel)
3. TPS not adjusted (ECU thinks throttle is open)

---

### Rough Idle, Won't Smooth Out

**Checklist:**
- [ ] MAP sensor vacuum line connected and leak-free?
- [ ] CTS reading correct temperature?
- [ ] Vacuum leaks at intake gaskets?
- [ ] Injectors dirty or clogged?
- [ ] Ignition timing correct?

**Common Causes:**
1. Vacuum leak at intake adapter plate (poor gasket seal)
2. MAP sensor vacuum line cracked or disconnected
3. CTS reading incorrectly (wrong enrichment)

---

### Idles High (1500+ RPM)

**Checklist:**
- [ ] Throttle cable binding or adjusted too tight?
- [ ] IAC stuck open?
- [ ] Vacuum leak?
- [ ] TPS adjusted correctly?

**Common Causes:**
1. Throttle stop screw too far out
2. IAC stuck in high-flow position (carbon buildup)
3. Vacuum leak causing ECU to increase idle to compensate

---

### Hesitation or Stumble on Acceleration

**Checklist:**
- [ ] TPS sweeping smoothly? (use ALDL to watch live)
- [ ] Fuel pressure maintaining 10-13 PSI under load?
- [ ] Ignition timing correct and distributor locked?
- [ ] Vacuum advance working?

**Common Causes:**
1. TPS dead spot (needs replacement)
2. Weak fuel pump (pressure drops under load)
3. Distributor advance mechanism sticking

---

### Runs Rich (Black Smoke, Poor MPG)

**Checklist:**
- [ ] O2 sensor working? (should fluctuate 0.1-0.9V rapidly)
- [ ] MAP sensor reading correctly?
- [ ] Fuel pressure too high? (should be 10-13 PSI, not 15+)
- [ ] Injectors leaking?

**Common Causes:**
1. O2 sensor failed (ECU defaults to rich)
2. MAP sensor reading low vacuum (ECU thinks engine is under load)
3. Fuel pressure too high (internal TBI regulator stuck)
4. PROM too rich for this engine (needs custom burn)

---

### Runs Lean (Backfire, Hesitation, Poor Power)

**Checklist:**
- [ ] Fuel pressure adequate? (10-13 PSI minimum)
- [ ] Vacuum leaks?
- [ ] Injectors clogged?
- [ ] MAP sensor reading correctly?

**Common Causes:**
1. Fuel pressure too low (weak pump, clogged filter)
2. Large vacuum leak (adapter plate gaskets, intake manifold)
3. Injectors partially clogged (dirty fuel)

---

### Check Engine Light ON

**Action:**
- [ ] Connect ALDL scanner
- [ ] Read fault codes
- [ ] Consult GM TBI fault code chart

**Common Codes:**

| Code | Meaning | Action |
|------|---------|--------|
| 12 | No RPM signal | Check distributor pickup, wiring |
| 13 | O2 sensor circuit | Check O2 wiring, sensor |
| 14 | CTS circuit high | Check CTS wiring, sensor |
| 15 | CTS circuit low | Check CTS wiring, sensor |
| 21 | TPS circuit high | Check TPS wiring, adjustment |
| 22 | TPS circuit low | Check TPS wiring, adjustment |
| 33 | MAP circuit high | Check MAP wiring, vacuum line |
| 34 | MAP circuit low | Check MAP wiring, sensor |
| 42 | EST circuit (if using ECU timing) | Ignition wiring |

**Note:** Code 12 (no RPM) is normal if checked with engine not running. Clear codes and retest after repair.

---

## Maintenance Schedule (Post-Swap)

### First Week:
- [ ] Daily visual inspection (leaks, loose wires)
- [ ] Monitor idle quality and driveability
- [ ] Check fault codes daily
- [ ] Retorque intake bolts (after 50 miles)

### First Month:
- [ ] Weekly inspection
- [ ] Check all connections (vibration can loosen)
- [ ] Monitor fuel pressure (verify pump is stable)
- [ ] Clean IAC (carbon buildup is common early on)
- [ ] Retorque intake bolts (after 200 miles)

### First 3 Months:
- [ ] Monthly inspection
- [ ] Check for fault codes
- [ ] Monitor fuel economy (should stabilize)
- [ ] Clean any corrosion from connections

### After 3 Months:
- [ ] Quarterly inspection
- [ ] Replace fuel filter (every 10,000 miles or 1 year)
- [ ] Clean IAC (every 20,000 miles or as needed)
- [ ] Check O2 sensor (every 50,000 miles or if codes appear)
- [ ] Annual detailed inspection of entire harness

---

## DECISION CRITERIA: When to Swap vs. Keep Renix

### Keep Renix If:

✅ Renix refresh (Phase A) results in reliable operation  
✅ All sensors are available and affordable  
✅ You can diagnose issues with multimeter and basic tools  
✅ You value originality  
✅ You're comfortable with limited parts availability in future  

**Bottom Line:** If Renix works, don't fix what isn't broken.

---

### Swap to GM TBI If:

⚠️ Renix ECU fails and replacements are unavailable or prohibitively expensive  
⚠️ Critical sensors (CPS, MAP) become unobtainable  
⚠️ Diagnostics are frustrating (limited self-diagnostics)  
⚠️ You want to "set it and forget it" for 10-20 years  
⚠️ You value diagnostic capability (ALDL data logging)  

**Bottom Line:** GM TBI is "insurance" against Renix parts obsolescence.

---

## Cost-Benefit Analysis Summary

| Scenario | Cost | Time | Parts Availability | Diagnostic Capability | Result |
|----------|------|------|-------------------|----------------------|--------|
| **Renix Refresh** | $400-650 | 3-5 weeks | Declining | Limited | Works if parts available |
| **GM TBI Swap (DIY)** | $900-1400 | 4-8 weeks | Excellent | Excellent | Works forever |
| **GM TBI Swap (Turnkey)** | $1500-2400 | 4-8 weeks | Excellent | Excellent | Works forever |

**Break-Even Analysis:**

If Renix ECU fails in 5 years:
- Renix ECU replacement: $300-500 (if available)
- **Total Renix cost over 5 years:** $700-1150

If you swap to GM TBI now:
- **Total GM TBI cost:** $900-1400

**Conclusion:** GM TBI swap pays for itself if Renix requires major component replacement within 5 years.

---

## Community Documentation & Sharing

### Why Document This Swap?

If Renix parts continue to decline in availability, **the MJ community will need this guide.**

**If you complete this swap, please:**

1. **Take detailed photos:**
   - Every step of installation
   - Adapter plate design and fitment
   - Wiring diagrams (hand-drawn or CAD)
   - Sensor locations
   - Final installation

2. **Create a build thread on ComancheClub.com:**
   - Title: "1986 MJ Renix to GM TBI Swap — Complete Guide"
   - Document issues encountered and solutions
   - Share PROM settings or tuner contact info
   - Provide adapter plate dimensions (for others to replicate)

3. **Share data logs:**
   - Before/after fuel economy
   - ALDL data logs (help others tune)
   - Fault codes encountered and fixes

4. **Offer to help others:**
   - Answer questions on forums
   - Provide advice based on your experience
   - Share supplier contacts (machine shops, tuners, etc.)

**You'll be helping preserve MJ Comanches for future generations.** 🛻

---

## Final Recommendations

### Best Path Forward (For This Project):

1. **Complete Phase A Renix Cleanup** (per existing guide)
   - Cost: $400-650
   - Time: 3-5 weeks
   - Result: Cleaned, documented, functional Renix system

2. **Drive and Evaluate for 6-12 Months**
   - Test in all conditions (hot, cold, loaded, 4WD)
   - Monitor for failures or persistent issues
   - Document sensor availability and cost

3. **Decision Point:**
   - **If Renix is reliable:** STOP. You're done. ✅
   - **If Renix is problematic or parts scarce:** Proceed to GM TBI swap.

4. **Execute GM TBI Swap** (if needed)
   - Cost: Add $900-1400 (DIY harness)
   - Time: Add 4-8 weeks
   - Result: Long-term serviceable system

---

### Why This Staged Approach Works:

✅ **No wasted effort** — Renix cleanup work transfers to GM swap  
✅ **Lowest total cost** — Only spend on swap if actually needed  
✅ **Real-world validation** — Test Renix reliability before committing  
✅ **Fallback option** — Keep Renix components as emergency spare  

---

## Acknowledgments & Resources

### Online Communities:
- **ComancheClub.com** — MJ Comanche community
- **NAXJA.org** — XJ Cherokee (many parts/systems identical)
- **GM TBI Forums** — S10, Blazer, full-size truck communities

### Technical References:
- **GM EFI Tuning Manual** (Mark Mansur)
- **TunerPro RT Documentation** (tuning software)
- **Factory Service Manuals** (1987-1995 GM trucks)

### Suppliers:
- **Howell EFI** — Turnkey TBI harnesses
- **RockAuto** — Sensors, TBI units, pumps
- **Summit Racing** — Performance parts, fuel system
- **Del City** — Wiring supplies
- **Local Machine Shops** — Adapter plate fabrication

---

## Document Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | January 2026 | Initial draft (original document) |
| 2.0 | January 2026 | Complete rewrite with analysis, refinements, and decision criteria integrated |

---

## Final Thoughts

**Remember:**

1. **This is a contingency plan** — Use it if Renix fails or parts dry up
2. **Test Renix first** — It may work perfectly after cleanup
3. **Don't rush** — Take time to do it right
4. **Document everything** — Help the next MJ owner
5. **Ask for help** — Community knowledge is invaluable

**You're not just fixing a truck — you're preserving a piece of automotive history.**

Good luck with your project. Whether you keep Renix or swap to GM TBI, may your MJ run strong for decades to come. 🚙

---

**END OF GM TBI SWAP GUIDE**

*For Renix system cleanup, see: Phase_A_Renix_Harness_Cleanup_Guide.md*
