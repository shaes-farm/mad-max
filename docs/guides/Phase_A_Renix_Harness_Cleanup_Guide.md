# Phase A: Renix Engine Harness Cleanup & Stabilization

## 1986 Jeep Comanche MJ – 2.5L AMC I4, Manual, Renix TBI

**Document Version:** 1.0  
**Last Updated:** January 2026  
**Project:** "Mad Maxine" Daily Driver Rebuild  
**VIN:** 1JTHL6571GT042543

---

## Document Purpose

This guide provides a complete step-by-step procedure for cleaning up and stabilizing the Renix engine management harness on a 1986 Jeep Comanche. The goal is to eliminate unreliable wiring, remove emissions dead weight, and establish a solid foundation for long-term reliability.

**What this covers:**

- Engine management system (Systems 1-3 from Renix Harness Simplification Map)
- Ground network rebuilding
- Sensor circuit verification
- ECM connector cleanup
- Emissions system removal

**What this does NOT cover:**

- Body wiring and accessories (Phase B)
- Interior harness work
- Lighting circuits
- Gauge cluster wiring

---

## Safety & Legal Disclaimers

⚠️ **SAFETY WARNING:**

- Disconnect battery before ANY wiring work
- Use proper eye protection when working under vehicle
- Work in well-ventilated area
- Keep fire extinguisher nearby when working with fuel system
- Never work alone on vehicle supported by jack only

⚠️ **LEGAL NOTICE:**

- Emissions equipment removal may violate local/state/federal laws
- This document is for off-road use only
- User assumes all legal responsibility
- Check local regulations before modifying emissions systems

⚠️ **ELECTRICAL SAFETY:**

- Never bypass safety systems (brakes, steering, seatbelts)
- Always use proper gauge wire for amperage
- Always use proper crimps and heat shrink
- Never leave exposed connections
- Test all circuits before operation

---

## Required Skills & Knowledge

**Minimum Requirements:**

- Basic automotive mechanical knowledge
- Ability to use multimeter (voltage, resistance, continuity)
- Understanding of DC electrical circuits
- Ability to read wiring diagrams
- Basic soldering skills (or willingness to learn)

**Helpful But Not Required:**

- Previous wiring harness work
- Experience with Renix systems
- Ability to diagnose electrical faults

**Time Commitment:** 20-40 hours depending on skill level and harness condition

---

## Tools Required

### Essential Tools (Must Have)

| Tool                                     | Purpose                                 | Approx. Cost |
| ---------------------------------------- | --------------------------------------- | ------------ |
| **Digital multimeter**                   | Voltage, resistance, continuity testing | $20-50       |
| **Ratcheting wire crimper**              | Proper terminal crimps                  | $25-40       |
| **Wire stripper** (automatic preferred)  | Clean wire stripping                    | $15-25       |
| **Heat gun**                             | Heat shrink application                 | $15-30       |
| **Soldering iron** (temp control)        | Permanent connections                   | $30-50       |
| **Socket set** (metric & SAE)            | Removing connectors, grounds            | $50-100      |
| **Wrench set** (metric & SAE)            | Ground installation, sensor work        | $30-60       |
| **Diagonal cutters**                     | Wire cutting                            | $10-20       |
| **Needle nose pliers**                   | Terminal work, tight spaces             | $10-20       |
| **Wire brush** (steel & brass)           | Cleaning grounds                        | $5-15        |
| **Label maker OR masking tape & marker** | Circuit identification                  | $15-30       |

### Recommended Tools (Highly Beneficial)

| Tool                           | Purpose                       | Approx. Cost |
| ------------------------------ | ----------------------------- | ------------ |
| **ECM pin removal tool kit**   | Safe de-pinning of connectors | $15-20       |
| **Terminal release tool set**  | Removing pins from connectors | $10-15       |
| **Helping hands/PCB holder**   | Soldering assistance          | $10-20       |
| **Wire loom pliers**           | Installing split loom cleanly | $15-25       |
| **Battery post cleaning tool** | Ground point preparation      | $5-10        |
| **Thread chaser set** (metric) | Cleaning ground stud threads  | $20-40       |

### Optional Tools (Nice to Have)

| Tool                             | Purpose                 |
| -------------------------------- | ----------------------- |
| **Test light**                   | Quick circuit testing   |
| **Circuit tester**               | Power probe style       |
| **Inspection mirror**            | Viewing tight areas     |
| **Borescope camera**             | Inspecting hidden areas |
| **Wire identification tone kit** | Tracing unknown wires   |

---

## Materials & Parts Required

### Wire & Connectors

| Item                       | Specification            | Quantity   | Source           | Est. Cost |
| -------------------------- | ------------------------ | ---------- | ---------------- | --------- |
| **Primary wire**           | 18 AWG, GXL or TXL       | 100 ft     | Del City, Amazon | $30-40    |
| **Primary wire**           | 16 AWG, GXL or TXL       | 50 ft      | Del City, Amazon | $20-30    |
| **Ground wire**            | 10 AWG, marine grade     | 25 ft      | AutoZone, Amazon | $15-25    |
| **Ground cable**           | 4 AWG, copper            | 10 ft      | Battery store    | $30-40    |
| **Heat shrink tubing kit** | Adhesive-lined, assorted | 1 kit      | Amazon           | $15-20    |
| **Weatherpack connectors** | 1, 2, 3, 4 pin sets      | Assortment | Del City, Amazon | $30-50    |
| **Ring terminals**         | 10-12 AWG, heat shrink   | 20 pack    | Amazon           | $10-15    |
| **Butt connectors**        | Heat shrink, assorted    | 50 pack    | Amazon           | $10-15    |
| **Split loom**             | 1/4", 3/8", 1/2"         | 25 ft ea   | Amazon           | $20-30    |
| **Electrical tape**        | 3M Super 33+             | 2 rolls    | Local auto parts | $10-15    |
| **Liquid electrical tape** | Sealant/protectant       | 1 bottle   | Amazon           | $8-12     |
| **Solder**                 | 60/40 rosin core         | 1 roll     | Hardware store   | $10-15    |

**Wire Color Recommendations:**

- **Red** – Constant 12V power
- **Yellow** – Switched 12V power
- **Black** – Ground
- **Blue** – Sensor signal
- **Green** – Sensor ground/reference
- **White** – Sensor power (5V reference)
- **Purple** – Injector control
- **Orange** – Ignition control

### Replacement Parts (As Needed)

| Item                               | Notes                              | Source           | Est. Cost |
| ---------------------------------- | ---------------------------------- | ---------------- | --------- |
| **CPS (Crank Position Sensor)**    | Common failure; good to have spare | RockAuto         | $25-50    |
| **Ignition switch**                | Likely cause of run-on issue       | RockAuto, NAPA   | $30-60    |
| **MAP sensor**                     | Mopar/ACDelco only                 | RockAuto         | $40-80    |
| **CTS (Coolant Temp Sensor)**      | ECU sensor, not gauge sender       | RockAuto         | $15-30    |
| **TPS (Throttle Position Sensor)** | Manual transmission specific       | RockAuto         | $30-50    |
| **IAC motor**                      | Idle Air Control                   | RockAuto         | $40-70    |
| **O2 sensor**                      | Single-wire type                   | RockAuto         | $20-40    |
| **ECM ground repair kit**          | Custom pins for ECM connector      | ComancheClub.com | $15-30    |
| **Stainless hardware kit**         | Ground studs, bolts, washers       | Fastenal, Amazon | $15-30    |

### Consumables

| Item                  | Purpose                     | Est. Cost |
| --------------------- | --------------------------- | --------- |
| **Contact cleaner**   | Connector cleaning          | $8-12     |
| **Dielectric grease** | Connector protection        | $5-10     |
| **CRC 2-26**          | Corrosion prevention        | $8-12     |
| **WD-40**             | Initial cleaning            | $5-8      |
| **Degreaser**         | Engine compartment cleaning | $8-15     |
| **Shop towels**       | General cleanup             | $10-15    |
| **Zip ties**          | Assorted sizes              | $10-15    |

**Total Estimated Materials Cost:** $400-650 (assuming you need most replacement sensors)

---

## Reference Documents

### Essential References

1. **Factory Service Manual (FSM)**
   - Search: "1986 Jeep Comanche Factory Service Manual PDF"
   - Contains official wiring diagrams
   - Critical for identifying factory circuits

2. **Renix System Documentation**
   - Search: "Renix Bible Jeep" on ComancheClub.com
   - Comprehensive diagnostic guide
   - Sensor specifications and testing procedures

3. **Renix Harness Simplification Map**
   - Companion document to this guide
   - Defines what to keep vs. remove
   - System-level overview

### Online Resources

- **ComancheClub.com** – Primary MJ community, search "Renix wiring"
- **Jeepforum.com** – MJ section has extensive Renix threads
- **NAXJA.org** – XJ forum with Renix expertise (many parts identical)
- **YouTube** – Search "Renix wiring cleanup" for visual guides

---

## Pre-Work Preparation (Week 1)

### Checkpoint 1.1: Documentation & Photos

**Goal:** Create a complete visual and written record BEFORE touching anything.

**Tasks:**

1. **Vehicle photos – exterior:**
   - [ ] All four sides
   - [ ] Engine bay overview (hood open)
   - [ ] Undercarriage overview
   - [ ] Transfer case area
   - [ ] Battery location

2. **Engine bay photos – detailed:**
   - [ ] ECM location (passenger kick panel area)
   - [ ] All sensors visible from above (TPS, IAC, CTS, MAT)
   - [ ] CPS at bellhousing
   - [ ] MAP sensor on firewall
   - [ ] Ignition coil and module (driver fender)
   - [ ] Fuel pump relay location
   - [ ] Ground points on firewall
   - [ ] Ground points on engine (intake manifold, block)
   - [ ] Battery terminals and cables

3. **Connector photos – closeups:**
   - [ ] ECM connector (both sides if accessible)
   - [ ] Each sensor connector individually
   - [ ] Ignition coil connector
   - [ ] Injector connector
   - [ ] Any splices or taps visible

4. **Harness routing photos:**
   - [ ] Main harness from firewall to engine
   - [ ] Harness routing around engine
   - [ ] Transition points where harness enters/exits loom
   - [ ] Any aftermarket wiring visible

5. **Create "Found Wiring" log:**
   - Document every non-factory wire discovered
   - Note wire color, gauge, what it connects to
   - Photo each one
   - Label as: "FW-01", "FW-02", etc. for tracking

**Deliverable:** Photo folder organized by location, plus "Found Wiring" spreadsheet or notes

---

### Checkpoint 1.2: Baseline Electrical Testing

**Goal:** Establish baseline electrical values to compare against after repairs.

**Safety:** Battery connected, key OFF unless specified.

#### Test 1: Ground Resistance Mapping

**Equipment:** Multimeter set to resistance (Ω), 200Ω scale

**Procedure:**

1. **Battery negative to engine block:**
   - [ ] Negative multimeter lead on battery negative terminal
   - [ ] Positive lead on clean metal of engine block
   - [ ] Record resistance: **\_\_\_** Ω
   - [ ] **Target: <0.1Ω**

2. **Engine block to firewall:**
   - [ ] Negative lead on engine block
   - [ ] Positive lead on firewall (clean metal, paint removed)
   - [ ] Record resistance: **\_\_\_** Ω
   - [ ] **Target: <0.1Ω**

3. **Battery negative to intake manifold:**
   - [ ] Negative lead on battery negative terminal
   - [ ] Positive lead on intake manifold ground stud (if present)
   - [ ] Record resistance: **\_\_\_** Ω
   - [ ] **Target: <0.5Ω**

4. **Battery negative to body:**
   - [ ] Negative lead on battery negative terminal
   - [ ] Positive lead on body/frame (clean metal)
   - [ ] Record resistance: **\_\_\_** Ω
   - [ ] **Target: <0.5Ω**

**Analysis:**

- Resistance >0.5Ω indicates poor ground connection
- Resistance >1.0Ω indicates severe ground problem
- Document which grounds need immediate attention

---

#### Test 2: ECM Power Check (Backfeed Detection)

**Equipment:** Multimeter set to DC voltage, 20V scale

**Procedure:**

1. **Key OFF, engine not running:**
   - [ ] Locate ECM connector (passenger side, under dash)
   - [ ] Identify RUN/START power pin (consult FSM or Renix documentation)
   - [ ] Negative lead on battery negative terminal
   - [ ] Positive lead on RUN/START pin at ECM connector
   - [ ] Record voltage: **\_\_\_** V
   - [ ] **Target: 0V (no voltage present)**

2. **If voltage is present with key OFF:**
   - [ ] You have confirmed backfeed – likely source of run-on issue
   - [ ] Document voltage value
   - [ ] Trace circuit back toward ignition switch
   - [ ] Look for aftermarket wiring tapped into ignition circuit

**Analysis:**

- Any voltage (>0.5V) with key OFF = backfeed present
- This is a CRITICAL finding – must be resolved

---

#### Test 3: Sensor Power & Ground Check

**Equipment:** Multimeter set to DC voltage, 20V scale

**Procedure:**

1. **Key ON, engine not running:**

   **MAP Sensor (on firewall):**
   - [ ] Locate 3-wire connector
   - [ ] Measure signal wire to ground: **\_\_\_** V (should be ~4-5V)
   - [ ] Measure 5V reference to ground: **\_\_\_** V (should be 5.0V ±0.2V)
   - [ ] Measure ground pin to battery negative: **\_\_\_** V (should be <0.1V)

   **TPS (on throttle body):**
   - [ ] Locate 3-wire connector
   - [ ] Measure signal wire to ground: **\_\_\_** V (should be ~0.5-1.0V at idle)
   - [ ] Measure 5V reference to ground: **\_\_\_** V (should be 5.0V ±0.2V)
   - [ ] Measure ground pin to battery negative: **\_\_\_** V (should be <0.1V)

   **CTS (coolant temp sensor):**
   - [ ] Locate 2-wire connector
   - [ ] Measure voltage across connector: **\_\_\_** V (varies with temp)
   - [ ] Cold engine: ~3-4V typical
   - [ ] Hot engine: ~0.5-1.5V typical

2. **Document any sensors with:**
   - No 5V reference (indicates ECM or wiring problem)
   - Poor ground (>0.2V)
   - No signal voltage

**Analysis:**

- Missing 5V reference = ECM problem or wiring break
- Poor grounds = cleaning needed
- All sensors should have clean 5V and ground

---

#### Test 4: Ignition Circuit Verification

**Equipment:** Multimeter set to DC voltage, 20V scale

**Procedure:**

1. **Coil positive terminal:**
   - [ ] Key OFF: Measure voltage to ground: **\_\_\_** V (should be 12V+)
   - [ ] Key ON: Measure voltage to ground: **\_\_\_** V (should be 12V+)
   - [ ] Key START: Measure voltage to ground: **\_\_\_** V (should be 12V+)
   - [ ] **Coil should have constant 12V in all key positions**

2. **Coil negative terminal:**
   - [ ] Key ON, engine not running
   - [ ] Measure voltage to ground: **\_\_\_** V
   - [ ] Should pulse (difficult to measure with basic multimeter)
   - [ ] Use test light instead: should blink when cranking

**Analysis:**

- No power at coil positive = ignition circuit problem
- Constant voltage at coil negative = no trigger signal from ECM/module

---

#### Test 5: Fuel Pump Circuit

**Equipment:** Multimeter, test light, or listening

**Procedure:**

1. **Key ON (do not start engine):**
   - [ ] Listen at fuel tank – should hear pump run for 2-3 seconds
   - [ ] If no sound, use test light at fuel pump relay
   - [ ] Verify relay clicks when key turned to ON

2. **Fuel pump relay testing:**
   - [ ] Locate fuel pump relay (usually near ECM or in engine bay)
   - [ ] Check for 12V at power input: **\_\_\_** V
   - [ ] Check for ground at control side (from ECM)
   - [ ] Verify relay clicks when key turned ON

**Analysis:**

- Pump runs briefly at key-on = normal operation
- No pump sound + relay clicks = pump/wiring problem
- No relay click = ECM or relay problem

---

### Checkpoint 1.3: Creating Baseline Report

**Goal:** Summarize all findings in one document for future reference.

**Create a simple report with:**

1. **Ground Resistance Summary:**
   - List all ground paths tested and resistance values
   - Flag any >0.5Ω for immediate attention

2. **Backfeed Detection Results:**
   - Voltage at ECM RUN/START pin with key OFF
   - Source identified (if found)

3. **Sensor Circuit Status:**
   - Each sensor: 5V reference present? Ground good? Signal present?
   - Flag any failures

4. **Ignition & Fuel Pump Status:**
   - Coil power verified?
   - Fuel pump operation verified?

5. **Priority Issues List:**
   - Rank findings by severity (Critical / High / Moderate)

**Deliverable:** "Baseline Electrical Report" document (can be simple text file or spreadsheet)

---

## Physical Work Phase (Weeks 2-4)

### Checkpoint 2.1: Workspace Preparation

**Goal:** Safe, organized workspace with vehicle properly supported.

**Tasks:**

1. **Vehicle positioning:**
   - [ ] Park on level surface
   - [ ] Engage parking brake (or chock wheels if no parking brake)
   - [ ] Disconnect battery negative terminal
   - [ ] Place "BATTERY DISCONNECTED" sign on steering wheel

2. **Workspace setup:**
   - [ ] Ensure adequate lighting (work light, headlamp)
   - [ ] Lay out clean drop cloth or cardboard for removed parts
   - [ ] Set up workbench or table nearby for connector work
   - [ ] Organize tools within easy reach

3. **Fire safety:**
   - [ ] Fire extinguisher within 10 feet (rated for electrical fires)
   - [ ] No smoking, no open flames
   - [ ] Ensure good ventilation

4. **Parts organization system:**
   - [ ] Label bags/boxes for removed parts: "Keep", "Reinstall", "Discard"
   - [ ] Have camera/phone ready for any unclear reassembly

**Safety Check:** Vehicle stable? Battery disconnected? Fire extinguisher present?

---

### Checkpoint 2.2: Engine Compartment Cleaning

**Goal:** Clean engine bay to identify actual wiring routes and leak sources.

**Why This Matters:** You cannot diagnose oil leaks or trace wiring through 38 years of grime. This step is NOT optional.

**Safety:** Wear gloves, eye protection. Work in ventilated area.

**Procedure:**

1. **Gross degreasing:**
   - [ ] Spray entire engine with degreaser (Simple Green, Purple Power, etc.)
   - [ ] Let soak 10-15 minutes
   - [ ] Protect ECM area with plastic bag if accessible from engine bay
   - [ ] Protect alternator with plastic bag
   - [ ] Rinse with garden hose (low pressure) OR wipe with rags

2. **Wiring harness focus:**
   - [ ] Clean harness with contact cleaner and shop towels
   - [ ] Inspect for damaged loom, exposed wire, melted insulation
   - [ ] Look for non-factory splices, taps, scotch locks
   - [ ] Photo any damage found

3. **Connector cleaning:**
   - [ ] Do NOT disconnect yet – just clean exterior
   - [ ] Spray each connector with contact cleaner
   - [ ] Wipe clean with shop towel
   - [ ] Note any connectors with corrosion or damage

4. **Ground point inspection:**
   - [ ] Locate all ground straps and bolts visible in engine bay
   - [ ] Clean around ground contact points with wire brush
   - [ ] Photo each ground location
   - [ ] Note condition: clean, rusty, painted over, loose

**Deliverable:** Clean engine bay, clear view of all wiring, photos of any damage/issues found

---

### Checkpoint 2.3: Harness Physical Separation

**Goal:** Separate engine management harness from body/accessory circuits.

**This is a major step:** Take your time. Label everything.

**Equipment Needed:**

- Masking tape and permanent marker
- Zip ties (to temporarily bundle separated circuits)
- Camera
- Patience

**Procedure:**

1. **Identify main harness entry point:**
   - [ ] Locate where harness passes through firewall
   - [ ] Photo the harness at this transition
   - [ ] Identify which circuits enter cab vs. stay in engine bay

2. **Temporary labeling system:**

   Use this prefix system:
   - **EM-** = Engine Management (keep)
   - **ACC-** = Accessory (will be relocated in Phase B)
   - **UNK-** = Unknown (needs research)
   - **DEL-** = Delete (emissions, dead circuits)

3. **Circuit-by-circuit identification:**

   Start at ECM connector, trace each wire:

   **KEEP Circuits (EM- prefix):**
   - [ ] Constant battery power to ECM
   - [ ] Switched ignition power to ECM (RUN/START)
   - [ ] ECM grounds (all of them)
   - [ ] CPS (Crank Position Sensor) – 2-wire at bellhousing
   - [ ] MAP sensor – 3-wire at firewall
   - [ ] TPS (Throttle Position Sensor) – 3-wire at throttle body
   - [ ] CTS (Coolant Temp Sensor – ECU) – 2-wire at thermostat housing
   - [ ] MAT (Manifold Air Temp) – 2-wire at intake
   - [ ] Injector – 2-wire at throttle body
   - [ ] IAC motor – 2-wire at throttle body
   - [ ] O2 sensor – 1-wire at exhaust
   - [ ] Ignition coil power
   - [ ] Ignition coil trigger (from module)
   - [ ] Fuel pump relay control (from ECM)
   - [ ] Fuel pump power circuit

   **RELOCATE Circuits (ACC- prefix):**
   - [ ] Alternator field wires
   - [ ] Starter solenoid wiring
   - [ ] Oil pressure sender (gauge)
   - [ ] Coolant temp sender (gauge – separate from ECU sensor)
   - [ ] Any lighting circuits
   - [ ] Radio wiring
   - [ ] Any other accessories

   **DELETE Circuits (DEL- prefix):**
   - [ ] EGR solenoid control
   - [ ] EGR vacuum solenoid
   - [ ] Canister purge solenoid
   - [ ] Pulse air components (if equipped)
   - [ ] Any disconnected/unused wires

4. **Label each circuit:**
   - [ ] Wrap masking tape around wire near connector
   - [ ] Write prefix + circuit name (e.g., "EM-MAP" or "ACC-OilPress")
   - [ ] Photo each label

5. **Bundle temporarily:**
   - [ ] Use zip ties to group EM- circuits together
   - [ ] Keep ACC- circuits separate
   - [ ] Set DEL- circuits aside

**Checkpoint:** Before proceeding, verify you can identify the purpose of EVERY wire in the engine bay.

---

### Checkpoint 2.4: Ground Network Rebuild

**Goal:** Establish rock-solid ground network with <0.1Ω resistance everywhere.

**Why This is Critical:** Poor grounds are the #1 cause of Renix failures. Sensors give false readings, ECM gets confused, engine runs poorly. Fix grounds FIRST.

#### Phase 1: Remove All Existing Grounds

**Procedure:**

1. **Document existing ground locations:**
   - [ ] Photo each ground strap/cable before removal
   - [ ] Note bolt size and location
   - [ ] Label each removed ground with original location

2. **Remove grounds systematically:**
   - [ ] Battery negative to engine block
   - [ ] Engine block to firewall
   - [ ] Engine block to body (if present)
   - [ ] Any other straps found

3. **Inspect removed grounds:**
   - [ ] Check for corrosion on terminals
   - [ ] Check for broken strands in cable
   - [ ] Decide: clean & reuse, or replace?

**Decision Rule:** If cable is corroded, has green powder, or strands are broken → REPLACE. Copper cable is cheap; electrical problems are expensive.

---

#### Phase 2: Prepare Ground Contact Points

**Goal:** Clean metal-to-metal contact with zero corrosion.

**Equipment:**

- Wire brush (steel for heavy rust, brass for aluminum)
- Sandpaper (80-120 grit)
- Contact cleaner
- Dielectric grease

**Procedure:**

1. **Battery negative terminal:**
   - [ ] Remove battery (makes work easier)
   - [ ] Clean negative terminal with battery post cleaning tool
   - [ ] Shine until bright metal visible
   - [ ] Apply thin coat of dielectric grease

2. **Engine block ground point:**
   - [ ] Locate existing ground point on engine block (usually on side)
   - [ ] Wire brush mounting surface until bare metal visible
   - [ ] If ground stud/bolt is rusty, replace with stainless
   - [ ] Chase threads with tap if needed
   - [ ] Clean thoroughly with contact cleaner

3. **Firewall ground point:**
   - [ ] Locate ground point on firewall (usually near ECM)
   - [ ] Wire brush or sand until bare metal visible
   - [ ] Remove all paint in contact area (critical!)
   - [ ] If drilling new hole: use stainless bolt with star washers

4. **Intake manifold ground stud:**
   - [ ] Locate sensor ground point (usually on intake manifold)
   - [ ] Clean threads and mounting surface
   - [ ] This will be common ground for all sensors

---

#### Phase 3: Install New Ground Network

**Goal:** Heavy gauge, direct grounds with minimum resistance.

**Materials:**

- 4 AWG copper cable: Battery negative to engine block (2-3 ft)
- 4 AWG copper cable: Engine block to firewall (2-3 ft)
- 10 AWG copper cable: Intake manifold to battery negative (4-5 ft)
- Ring terminals sized for cable
- Stainless steel bolts/hardware

**Procedure:**

1. **Battery negative to engine block:**
   - [ ] Cut 4 AWG cable to length (allow extra for service loop)
   - [ ] Install ring terminal on each end (crimp AND solder for max strength)
   - [ ] Apply heat shrink over terminals
   - [ ] Connect to battery negative terminal
   - [ ] Connect to engine block ground point
   - [ ] Torque to spec (typically 15-20 ft-lbs for engine block)

2. **Engine block to firewall:**
   - [ ] Cut 4 AWG cable to length
   - [ ] Install ring terminals
   - [ ] Connect engine block end first
   - [ ] Route cable away from hot exhaust
   - [ ] Connect to firewall ground point
   - [ ] Torque to spec

3. **Sensor ground distribution:**
   - [ ] Cut 10 AWG cable to length (intake manifold to battery negative)
   - [ ] Install ring terminals
   - [ ] Connect to intake manifold ground stud
   - [ ] Route cleanly to battery negative terminal area
   - [ ] This becomes common ground point for all sensor grounds

4. **Verify installation:**
   - [ ] Check all connections are tight
   - [ ] Ensure no ground cables touch exhaust
   - [ ] Apply dielectric grease to all terminals
   - [ ] Secure cables with zip ties or loom clamps

---

#### Phase 4: Test New Ground Network

**Equipment:** Multimeter set to resistance (Ω)

**Procedure:**

1. **Resistance verification:**
   - [ ] Battery negative to engine block: **\_\_\_** Ω (**Target: <0.05Ω**)
   - [ ] Engine block to firewall: **\_\_\_** Ω (**Target: <0.05Ω**)
   - [ ] Battery negative to intake manifold ground: **\_\_\_** Ω (**Target: <0.1Ω**)

2. **If resistance is too high:**
   - [ ] Check terminal connections – tighten
   - [ ] Verify metal-to-metal contact (no paint/rust)
   - [ ] Check cable for internal break
   - [ ] Retest

**Success Criteria:** All ground paths <0.1Ω resistance. Do not proceed until this is achieved.

**Deliverable:** Ground network diagram showing new cable routing, resistance measurements documented.

---

### Checkpoint 2.5: ECM Connector Cleanup

**Goal:** Remove unused circuits, clean all connections, verify continuity.

**CRITICAL WARNING:** ECM connectors are fragile. Use proper pin removal tools. Forcing pins will break connector.

**Equipment Needed:**

- ECM pin removal tool kit
- Contact cleaner
- Dielectric grease
- Small wire brush or pick
- Good lighting / magnification

#### Phase 1: ECM Connector Documentation

**Procedure:**

1. **Before touching connector:**
   - [ ] Download ECM pinout diagram (from FSM or Renix documentation)
   - [ ] Print diagram or have visible on device
   - [ ] Photo connector from all angles

2. **Create pin inventory spreadsheet:**

| Pin # | Circuit Name | Wire Color | Keep/Remove | Notes            |
| ----- | ------------ | ---------- | ----------- | ---------------- |
| 1     | CPS Signal   | Blue       | KEEP        |                  |
| 2     | EGR Control  | Purple     | REMOVE      | Emissions delete |
| ...   | ...          | ...        | ...         | ...              |

Fill this out for every pin before removal.

---

#### Phase 2: Identify Pins for Removal

**Circuits to REMOVE from ECM connector:**

- [ ] EGR solenoid control
- [ ] Canister purge solenoid control
- [ ] Pulse air solenoid control (if equipped)
- [ ] Any circuits to disconnected components
- [ ] Automatic transmission inputs (this is a manual truck)

**Circuits to KEEP:**

(Verify against your system – this is general guidance)

- [ ] Constant battery power (12V)
- [ ] Switched ignition power (RUN/START)
- [ ] All grounds (typically 3-5 ground pins)
- [ ] CPS signal and ground
- [ ] MAP sensor signal, 5V ref, ground
- [ ] TPS signal, 5V ref, ground
- [ ] CTS signal and reference
- [ ] MAT signal and reference
- [ ] Injector control
- [ ] IAC motor control
- [ ] O2 sensor signal
- [ ] Ignition module trigger
- [ ] Fuel pump relay control

**When in doubt, LEAVE IT.** You can always remove later; reinstalling is much harder.

---

#### Phase 3: Pin Removal & Preparation

**Procedure:**

1. **De-pin unused circuits:**
   - [ ] Use proper pin removal tool (do not use screwdrivers, picks, etc.)
   - [ ] Release locking tab on connector
   - [ ] Gently insert pin removal tool alongside pin
   - [ ] Pull wire while tool is engaged
   - [ ] Pin should release cleanly
   - [ ] Photo after each pin removal

2. **Wire management for removed pins:**
   - [ ] Cut wire 6-8 inches from connector (leave service loop)
   - [ ] Strip 1/4" of insulation
   - [ ] Twist wire strands tightly
   - [ ] Solder tip to prevent fraying
   - [ ] Fold wire back and heat shrink seal
   - [ ] Label wire with masking tape: "DEL-EGR" etc.
   - [ ] Secure removed wires away from harness

3. **Connector cavity plugging:**
   - [ ] Option 1: Leave empty (acceptable)
   - [ ] Option 2: Use connector cavity plugs if available
   - [ ] Mark diagram to show removed pins

---

#### Phase 4: Clean Remaining Connections

**Procedure:**

1. **Connector housing cleaning:**
   - [ ] Spray interior with contact cleaner
   - [ ] Use compressed air to blow out debris
   - [ ] Inspect for cracks or damage
   - [ ] Let dry completely

2. **Pin cleaning (for pins that remain):**
   - [ ] Spray each pin with contact cleaner
   - [ ] Use small wire brush or pick to remove corrosion
   - [ ] Wipe with clean cloth
   - [ ] Inspect each pin – bent/damaged pins must be replaced

3. **Apply dielectric grease:**
   - [ ] Small amount on each pin (size of grain of rice)
   - [ ] Do NOT overfill – excess can cause connection issues

4. **Reassemble connector:**
   - [ ] Align connector halves carefully
   - [ ] Engage locking mechanism
   - [ ] Verify all remaining pins are seated
   - [ ] Give gentle tug test on each wire

---

#### Phase 5: Circuit Continuity Verification

**Goal:** Verify every remaining circuit has continuity from ECM to component.

**Equipment:** Multimeter set to continuity (beep) mode

**Procedure:**

For EACH circuit that remains connected to ECM:

1. **CPS (Crank Position Sensor):**
   - [ ] ECM pin to CPS connector pin A: Continuity? Y / N
   - [ ] ECM pin to CPS connector pin B: Continuity? Y / N
   - [ ] Resistance measured: **\_\_\_** Ω (should be ~150-300Ω for sensor itself)

2. **MAP Sensor:**
   - [ ] ECM pin (5V ref) to MAP connector: Continuity? Y / N
   - [ ] ECM pin (signal) to MAP connector: Continuity? Y / N
   - [ ] ECM pin (ground) to MAP connector: Continuity? Y / N

3. **TPS:**
   - [ ] ECM pin (5V ref) to TPS connector: Continuity? Y / N
   - [ ] ECM pin (signal) to TPS connector: Continuity? Y / N
   - [ ] ECM pin (ground) to TPS connector: Continuity? Y / N

4. **CTS (Coolant Temp Sensor):**
   - [ ] ECM pin to CTS connector pin A: Continuity? Y / N
   - [ ] ECM pin to CTS connector pin B: Continuity? Y / N

5. **MAT (Manifold Air Temp):**
   - [ ] ECM pin to MAT connector pin A: Continuity? Y / N
   - [ ] ECM pin to MAT connector pin B: Continuity? Y / N

6. **Injector:**
   - [ ] ECM pin to injector connector pin A: Continuity? Y / N
   - [ ] ECM pin to injector connector pin B: Continuity? Y / N

7. **IAC Motor:**
   - [ ] ECM pin to IAC connector pin A: Continuity? Y / N
   - [ ] ECM pin to IAC connector pin B: Continuity? Y / N

8. **O2 Sensor:**
   - [ ] ECM pin to O2 sensor connector: Continuity? Y / N

9. **Fuel Pump Relay Control:**
   - [ ] ECM pin to fuel pump relay control terminal: Continuity? Y / N

**Document any circuits with NO continuity – these have breaks and must be repaired.**

---

### Checkpoint 2.6: Physical Emissions System Removal

**Goal:** Remove hardware and wiring for deleted emissions components.

**Legal Reminder:** This work may only be legal for off-road use. Check local regulations.

**Safety:** Some emissions components hold vacuum or have sharp edges. Wear gloves and eye protection.

#### Components to Remove

**1. EGR Valve & Solenoid:**

- [ ] Disconnect vacuum lines
- [ ] Remove EGR valve from intake manifold
- [ ] Remove EGR solenoid from firewall/bracket
- [ ] Remove all associated vacuum lines
- [ ] Block off EGR port on intake manifold:
  - Option A: EGR block-off plate (preferred – available aftermarket)
  - Option B: Gasket + steel plate fabricated to fit
- [ ] Wiring already de-pinned from ECM – secure wire ends

**2. Canister Purge System:**

- [ ] Locate charcoal canister (usually passenger side frame rail)
- [ ] Disconnect vacuum lines
- [ ] Disconnect purge solenoid wiring (already de-pinned)
- [ ] Remove purge solenoid
- [ ] Remove canister if desired (can leave in place)
- [ ] Cap or plug vacuum line from tank if removed

**3. Pulse Air System (if equipped):**

- [ ] Locate pulse air valves on exhaust manifold
- [ ] Disconnect air lines
- [ ] Remove valves
- [ ] Remove solenoid(s)
- [ ] Plug holes in exhaust manifold with pipe plugs
- [ ] Wiring already de-pinned

**4. CTO Switches (Coolant Temp Operated):**

- [ ] Locate in coolant passages (if present)
- [ ] Disconnect vacuum lines
- [ ] Remove switches
- [ ] Plug holes with brass plugs (match thread pitch)

**5. Vacuum System Simplification:**

- [ ] Remove vacuum tree/distribution block
- [ ] Remove delay valves
- [ ] Remove restrictors
- [ ] Keep only: brake booster vacuum line, MAP sensor vacuum line
- [ ] Cap any unused vacuum ports on intake manifold

---

#### Verification After Removal

**Checklist:**

- [ ] All unused vacuum ports capped or plugged
- [ ] No open ports on intake manifold
- [ ] All removed wiring has sealed, labeled ends
- [ ] No dangling brackets or hardware
- [ ] Photograph "after" state of engine bay

**Test:**

- [ ] Start engine (if ready)
- [ ] Check for vacuum leaks (listen for hissing)
- [ ] Verify no exhaust leaks at blocked EGR port

---

### Checkpoint 2.7: Ignition Switch Testing & Replacement (Run-On Fix)

**Goal:** Eliminate backfeed that causes engine run-on condition.

**This is likely your run-on culprit.** The ignition switch on these trucks commonly fails internally, allowing power to bleed through in the OFF position.

#### Phase 1: Confirm Ignition Switch Failure

**Equipment:** Multimeter, test light

**Procedure:**

1. **Disconnect ECM connector** (to protect ECM during testing)

2. **Key in OFF position:**
   - [ ] Measure voltage at ignition switch RUN output: **\_\_\_** V
   - [ ] Should be 0V
   - [ ] If >0.5V, switch is failed

3. **Key in RUN position:**
   - [ ] Measure voltage at ignition switch RUN output: **\_\_\_** V
   - [ ] Should be 12V+

4. **Key in START position:**
   - [ ] Measure voltage at ignition switch RUN output: **\_\_\_** V
   - [ ] Measure voltage at ignition switch START output: **\_\_\_** V
   - [ ] Both should be 12V+

**Diagnosis:**

- Voltage in OFF position = REPLACE SWITCH IMMEDIATELY
- No voltage in RUN position = REPLACE SWITCH
- No voltage in START position = REPLACE SWITCH

---

#### Phase 2: Ignition Switch Replacement

**Parts Needed:**

- New ignition switch (part # varies – verify for 1986 Comanche)
- May need to replace lock cylinder or just switch assembly

**Tools:**

- Steering wheel puller (if accessing lock cylinder)
- Screwdrivers
- Wire connectors
- Wiring diagram for reference

**Procedure:**

(Detailed procedure varies by exact switch type – consult FSM)

**General Steps:**

1. **Disconnect battery**

2. **Remove steering column covers:**
   - [ ] Usually held by screws underneath
   - [ ] Carefully pry apart

3. **Locate ignition switch:**
   - [ ] On column behind lock cylinder
   - [ ] Or on column near firewall

4. **Disconnect wiring harness:**
   - [ ] Photo connector orientation before removal
   - [ ] Label wires if not factory-colored

5. **Remove old switch:**
   - [ ] Usually held by screws or retaining pin
   - [ ] Note orientation for reassembly

6. **Install new switch:**
   - [ ] Match orientation of old switch
   - [ ] Ensure actuator rod engages properly
   - [ ] Secure with mounting hardware

7. **Reconnect wiring:**
   - [ ] Match wire colors to diagram
   - [ ] If using aftermarket switch, verify function of each terminal

8. **Test before reassembly:**
   - [ ] Reconnect battery
   - [ ] Test voltage at each position (OFF, RUN, START)
   - [ ] Verify 0V in OFF position
   - [ ] Verify 12V in RUN and START

9. **Reassemble column covers:**
   - [ ] Ensure no wires are pinched
   - [ ] Secure all fasteners

---

#### Phase 3: Backfeed Elimination Verification

**Procedure:**

1. **With new switch installed:**
   - [ ] Key OFF
   - [ ] Measure voltage at ECM RUN/START pin: **\_\_\_** V
   - [ ] Should be 0V

2. **Reconnect ECM connector**

3. **Test engine start:**
   - [ ] Engine should start normally
   - [ ] Engine should shut off immediately when key turned to OFF
   - [ ] No run-on condition

**Success Criteria:** Engine shuts off instantly with key, no run-on, no backfeed voltage detected.

---

### Checkpoint 2.8: Sensor Circuit Testing & Replacement

**Goal:** Verify all sensors are functioning correctly and replace any failures.

**Why This Matters:** A clean harness with a bad sensor still runs poorly. Test sensors now while you have access.

#### Test 1: CPS (Crank Position Sensor)

**Most Critical Sensor – Engine Won't Run Without It**

**Visual Inspection:**

- [ ] Check connector for corrosion
- [ ] Check wire routing – should not touch hot exhaust
- [ ] Check for physical damage to sensor body

**Resistance Test:**

- [ ] Disconnect CPS connector
- [ ] Measure resistance across sensor pins: **\_\_\_** Ω
- [ ] **Specification: 150-300Ω (typical – verify for your engine)**
- [ ] If out of spec or open circuit: REPLACE

**Notes:**

- CPS failure is VERY common on Renix
- Symptoms: no start, intermittent stalling, hard starting
- Keep a spare in the truck
- Part cost: $25-50

**Action:**

- [ ] Pass – sensor within spec
- [ ] Fail – order replacement, install before first start

---

#### Test 2: MAP Sensor (Manifold Absolute Pressure)

**Second Most Critical – Engine Runs Poorly Without It**

**Visual Inspection:**

- [ ] Check vacuum line for cracks, holes
- [ ] Verify vacuum line has no kinks
- [ ] Check connector for corrosion

**Voltage Test (Key ON, Engine OFF):**

- [ ] Backprobe 5V reference pin: **\_\_\_** V (**Should be 5.0V ±0.2V**)
- [ ] Backprobe ground pin: **\_\_\_** V (**Should be <0.1V**)
- [ ] Backprobe signal pin: **\_\_\_** V (**Should be 4.0-4.5V at sea level**)

**Function Test (Engine Running):**

- [ ] Signal voltage at idle: **\_\_\_** V (should be 1.5-2.5V)
- [ ] Rev engine – voltage should drop as vacuum increases
- [ ] Signal should change smoothly, not jump erratically

**Notes:**

- Only use Mopar or ACDelco MAP sensors – aftermarket fail quickly
- Symptoms: poor idle, hesitation, rough running
- Part cost: $40-80

**Action:**

- [ ] Pass – sensor signals correctly
- [ ] Fail – order Mopar/ACDelco replacement

---

#### Test 3: TPS (Throttle Position Sensor)

**Critical for Smooth Acceleration**

**Visual Inspection:**

- [ ] Check that TPS is secured to throttle body
- [ ] Verify connector is fully seated

**Voltage Test (Key ON, Engine OFF):**

- [ ] 5V reference: **\_\_\_** V (**Should be 5.0V**)
- [ ] Ground: **\_\_\_** V (**Should be <0.1V**)
- [ ] Signal at closed throttle: **\_\_\_** V (**Should be 0.5-1.0V**)
- [ ] Signal at wide open throttle: **\_\_\_** V (**Should be 4.0-4.5V**)

**Sweep Test:**

- [ ] Slowly open throttle while watching voltmeter
- [ ] Voltage should increase smoothly with no dead spots
- [ ] Any jumps, drops, or flat spots = REPLACE

**Notes:**

- Manual and automatic transmissions use different TPS
- Verify you have manual-specific unit
- Adjustable on some models – consult FSM for procedure
- Part cost: $30-50

**Action:**

- [ ] Pass – smooth voltage sweep
- [ ] Fail – order replacement (verify manual trans spec)

---

#### Test 4: CTS (Coolant Temperature Sensor – ECU)

**Critical for Cold Start Enrichment**

**IMPORTANT:** This is separate from the coolant temp gauge sender. Do not confuse them.

**Visual Inspection:**

- [ ] Usually on thermostat housing
- [ ] 2-wire connector
- [ ] Check for coolant leaks around sensor
- [ ] Check connector for corrosion

**Resistance Test (Engine Cold):**

- [ ] Disconnect sensor
- [ ] Measure resistance: **\_\_\_** Ω
- [ ] **Cold (70°F): ~3,000Ω typical**
- [ ] **Warm (200°F): ~300Ω typical**
- [ ] Consult FSM for exact temp/resistance curve

**Voltage Test (Key ON, Engine OFF):**

- [ ] Backprobe sensor connector (sensor connected)
- [ ] Voltage across pins (cold engine): **\_\_\_** V (**Should be 3-4V cold**)
- [ ] Start engine and warm up
- [ ] Voltage (hot engine): **\_\_\_** V (**Should be 0.5-1.5V hot**)
- [ ] Voltage should decrease smoothly as engine warms

**Notes:**

- Bad CTS causes rough cold idle, poor fuel economy, no start
- Very common failure on old engines
- Part cost: $15-30

**Action:**

- [ ] Pass – resistance and voltage correct
- [ ] Fail – replace before starting engine

---

#### Test 5: MAT (Manifold Air Temperature)

**Less Critical But Still Important**

**Visual Inspection:**

- [ ] Usually in intake manifold or air cleaner
- [ ] 2-wire sensor
- [ ] Check connector

**Test:**

- [ ] Same resistance test as CTS
- [ ] Should read ambient air temperature
- [ ] Resistance should match temperature

**Notes:**

- Often overlooked but affects fuel mixture
- Cheap sensor, worth replacing if questionable

**Action:**

- [ ] Pass – reads correctly
- [ ] Fail – replace

---

#### Test 6: IAC (Idle Air Control) Motor

**Critical for Idle Quality**

**Visual Inspection:**

- [ ] Mounted on throttle body
- [ ] Check for carbon buildup around pintle valve

**Resistance Test:**

- [ ] Disconnect IAC
- [ ] Measure resistance across pins: **\_\_\_** Ω
- [ ] **Typical: 10-20Ω**

**Function Test (Engine Running):**

- [ ] Should be able to hear IAC motor clicking when engine started
- [ ] Idle speed should stabilize within 10-15 seconds
- [ ] Disconnecting IAC should cause rough idle or stalling

**Cleaning:**

- [ ] Remove IAC from throttle body
- [ ] Spray throttle body cleaner on pintle valve
- [ ] Do NOT soak stepper motor coils
- [ ] Wipe clean and reinstall

**Notes:**

- Often just needs cleaning
- Symptoms: high idle, surging, poor idle quality
- Part cost: $40-70

**Action:**

- [ ] Clean and test
- [ ] Replace if still problematic

---

#### Test 7: O2 Sensor (Oxygen Sensor)

**Important for Fuel Economy & Emissions**

**Visual Inspection:**

- [ ] Single-wire type on 1986
- [ ] Check that wire isn't damaged (runs to exhaust)
- [ ] Sensor grounds through exhaust threads

**Voltage Test (Engine at Operating Temp):**

- [ ] Backprobe O2 sensor wire
- [ ] Voltage should fluctuate 0.1-0.9V
- [ ] Should switch back and forth several times per second
- [ ] Steady voltage = dead sensor

**Notes:**

- Single-wire O2 sensors common on 1986
- Heated O2 sensors came later
- Sensor works by temperature generated in exhaust
- Symptoms: poor fuel economy, rough running when warm
- Part cost: $20-40

**Action:**

- [ ] Pass – voltage fluctuates
- [ ] Fail – replace (but not urgent for running)

---

### Checkpoint 2.9: Fuel Pump Circuit Verification

**Goal:** Verify fuel pump relay and circuit function correctly.

**Why This Matters:** ECM controls fuel pump relay. Circuit must work reliably.

#### Locate Fuel Pump Relay

**Common Locations:**

- [ ] Under hood, driver side near ECM area
- [ ] Under dash near ECM
- [ ] Engine bay fuse/relay panel

**Identify Relay:**

- [ ] Usually standard Bosch-style 4 or 5-pin relay
- [ ] May be labeled "FUEL PUMP" or have number designation

---

#### Test Relay Circuit

**Procedure:**

1. **Key OFF:**
   - [ ] Remove relay from socket
   - [ ] Test for 12V at power input terminal (should be constant 12V)
   - [ ] Test for ground at control terminal from ECM (should be open)

2. **Key ON (do not start):**
   - [ ] Leave relay removed
   - [ ] Test for ground at control terminal from ECM
   - [ ] Should have ground for ~2 seconds, then open

3. **Install relay, key ON:**
   - [ ] Listen for relay click when key turned on
   - [ ] Listen at fuel tank for pump running 2-3 seconds
   - [ ] Pump should shut off after 2-3 seconds

4. **While cranking engine:**
   - [ ] Relay should stay energized entire time
   - [ ] Fuel pump should run entire time

**If relay doesn't click or pump doesn't run:**

- [ ] Check relay itself (swap with known good relay)
- [ ] Check wiring from ECM to relay control terminal
- [ ] Check power feed to relay
- [ ] Check wiring from relay to fuel pump

---

### Checkpoint 2.10: Final Harness Cleanup & Protection

**Goal:** Secure cleaned harness, protect from damage, prepare for long-term service.

#### Phase 1: Wiring Re-Looming

**Materials:**

- Split loom (various sizes)
- Zip ties
- Electrical tape
- Loom clamps

**Procedure:**

1. **Engine management harness:**
   - [ ] Bundle all EM- labeled circuits together
   - [ ] Install split loom over entire length
   - [ ] Secure loom every 12-18 inches with zip ties
   - [ ] Ensure loom doesn't contact hot exhaust
   - [ ] Use loom clamps at fixed points

2. **Individual sensor leads:**
   - [ ] Where sensors branch off main harness, protect with small loom
   - [ ] Ensure sensor connectors are accessible for service

3. **Firewall transition:**
   - [ ] Use rubber grommet where harness passes through firewall
   - [ ] Ensure no sharp edges can cut insulation
   - [ ] Seal with silicone if needed (keep exhaust fumes out)

---

#### Phase 2: Securing Harness Routes

**Goal:** Prevent chafing, melting, or damage to harness.

**Rules:**

- Keep minimum 3" clearance from exhaust
- Avoid routing near sharp metal edges
- Don't zip-tie to anything that moves (belts, pulleys, etc.)
- Support harness every 12-18 inches

**Procedure:**

1. **Identify routing path:**
   - [ ] Follow factory routing if visible
   - [ ] Use existing harness clips and brackets
   - [ ] Photo final routing for reference

2. **Secure harness:**
   - [ ] Use zip ties to attach to solid mounting points
   - [ ] Use existing clips where possible
   - [ ] Add cushioning (split loom, rubber) at hard contact points

3. **Clearance checks:**
   - [ ] Manually move throttle linkage – ensure no contact
   - [ ] Turn steering wheel lock-to-lock – ensure no contact
   - [ ] Check clearance to moving parts (belts, fan, etc.)

---

#### Phase 3: Weather Protection

**Procedure:**

1. **All connectors:**
   - [ ] Apply dielectric grease to each connector
   - [ ] Ensure connector locks are engaged
   - [ ] Wrap with self-fusing silicone tape if exposed to weather

2. **Wire ends (deleted circuits):**
   - [ ] Verify all cut wires have heat shrink seals
   - [ ] Apply liquid electrical tape over heat shrink
   - [ ] Tuck wire ends away from harness

3. **Ground connections:**
   - [ ] Coat with dielectric grease
   - [ ] Ensure all are tight
   - [ ] Spray with CRC 2-26 for corrosion protection

---

## Testing & Verification (Week 5)

### Checkpoint 3.1: Pre-Start Electrical Tests

**Goal:** Verify all systems before attempting first start.

**DO NOT ATTEMPT TO START ENGINE UNTIL ALL TESTS PASS.**

#### Test Sequence

1. **Ground verification (repeat from earlier):**
   - [ ] Battery negative to engine block: < 0.1Ω
   - [ ] Engine block to firewall: < 0.1Ω
   - [ ] Battery negative to intake manifold: < 0.1Ω

2. **Power distribution:**
   - [ ] Battery fully charged: **\_\_\_** V (**Should be 12.6V+**)
   - [ ] Key OFF, ECM constant power: **\_\_\_** V (**Should be 12V+**)
   - [ ] Key OFF, ECM RUN/START: **\_\_\_** V (**Should be 0V**)
   - [ ] Key ON, ECM RUN/START: **\_\_\_** V (**Should be 12V+**)

3. **Sensor 5V reference:**
   - [ ] Key ON, MAP 5V pin: **\_\_\_** V (**5.0V ±0.2V**)
   - [ ] Key ON, TPS 5V pin: **\_\_\_** V (**5.0V ±0.2V**)

4. **Sensor grounds:**
   - [ ] MAP ground pin to battery negative: **\_\_\_** V (**<0.1V**)
   - [ ] TPS ground pin to battery negative: **\_\_\_** V (**<0.1V**)

5. **Fuel pump operation:**
   - [ ] Key ON (do not start)
   - [ ] Fuel pump runs for 2-3 seconds: YES / NO
   - [ ] Relay clicks: YES / NO

6. **Ignition system:**
   - [ ] Coil positive has 12V: YES / NO
   - [ ] While cranking, coil negative pulses: YES / NO (use test light)

**All tests must PASS before attempting start.**

---

### Checkpoint 3.2: First Start Procedure

**Goal:** Safely start engine and verify operation.

**Safety:**

- [ ] Fire extinguisher nearby
- [ ] Ensure exhaust system is repaired (no CO intrusion)
- [ ] Work in well-ventilated area
- [ ] Have helper nearby

**Pre-Start Checklist:**

- [ ] All fluids topped off (oil, coolant, brake, PS)
- [ ] Battery fully charged
- [ ] All sensors connected
- [ ] All grounds tight
- [ ] No loose tools in engine bay
- [ ] Throttle returns to idle freely

**Procedure:**

1. **First attempt:**
   - [ ] Turn key to ON, wait for fuel pump to run
   - [ ] Turn key to START
   - [ ] Engine should crank
   - [ ] Limit cranking to 10-15 seconds max
   - [ ] If no start, wait 30 seconds before retry

2. **Observe during first start:**
   - [ ] Oil pressure gauge – should rise within 5 seconds
   - [ ] Check engine light – should illuminate with key ON, go off with engine running
   - [ ] Listen for unusual noises
   - [ ] Watch for leaks (oil, coolant, fuel)

3. **If engine starts:**
   - [ ] Let idle for 30 seconds
   - [ ] Verify oil pressure is normal
   - [ ] Verify coolant temp gauge works
   - [ ] Listen to engine – smooth or rough?
   - [ ] Smell for fuel, exhaust, or burning

4. **When key turned OFF:**
   - [ ] Engine should shut off immediately
   - [ ] No run-on condition

---

### Checkpoint 3.3: Post-Start Verification

**Assuming engine started successfully:**

#### Idle Quality Check

- [ ] Engine idles without stalling: YES / NO
- [ ] Idle speed: **\_\_\_** RPM (**Target: 700-900 RPM warm**)
- [ ] Idle smooth or rough? SMOOTH / ROUGH
- [ ] Any misfires? YES / NO

**If idle is rough:**

- Could be normal for cold engine
- MAT/CTS may need to warm up
- IAC may need to learn idle
- Let run for 5 minutes and recheck

---

#### Sensor Live Data (if you have scan tool)

If you have a scan tool capable of reading Renix:

- [ ] CTS reading matches actual temp
- [ ] MAP reading is reasonable (1.5-2.5V at idle)
- [ ] TPS reading is correct (0.5-1.0V closed throttle)
- [ ] O2 sensor is switching (after warm-up)

---

#### Electrical System Check (Engine Running)

- [ ] Alternator charging: **\_\_\_** V (**Should be 13.5-14.5V**)
- [ ] All grounds still tight and secure
- [ ] No smoke from wiring
- [ ] No burning smell

---

#### Visual Inspection (Engine Running)

**CAREFULLY check for:**

- [ ] Coolant leaks
- [ ] Oil leaks
- [ ] Fuel leaks
- [ ] Exhaust leaks
- [ ] Wiring rubbing on moving parts
- [ ] Wiring too close to hot exhaust

**Shut off immediately if ANY leaks found.**

---

### Checkpoint 3.4: Short Test Drive (if safe)

**Only proceed if:**

- [ ] Idle is stable
- [ ] No leaks present
- [ ] Exhaust system is safe
- [ ] Brakes are functional (do NOT test if brakes are questionable)

**Procedure:**

1. **Initial drive (very short – around block):**
   - [ ] Check all gauges (oil pressure, temp, fuel)
   - [ ] Test brakes gently before leaving driveway
   - [ ] Transmission shifts smoothly
   - [ ] Engine responds to throttle
   - [ ] No unusual noises or smells

2. **Return and inspect:**
   - [ ] Check for new leaks
   - [ ] Check harness – anything rubbing or hot?
   - [ ] Check all sensors still connected

3. **If all is well, longer test drive:**
   - [ ] 5-10 miles on varied roads
   - [ ] Test 4WD engagement (4H and 4L) in safe area
   - [ ] Monitor temps and pressures
   - [ ] Note any driveability issues

---

### Checkpoint 3.5: Issue Documentation & Refinement

**Goal:** Document any remaining issues for resolution.

**Create "Post-Start Issues" list:**

| Issue                    | Severity | Action Needed                      | Timeline |
| ------------------------ | -------- | ---------------------------------- | -------- |
| Example: Rough cold idle | Moderate | Adjust IAC, check for vacuum leaks | Week 6   |
|                          |          |                                    |          |

**Common issues you might find:**

- Rough cold idle (often normal for Renix)
- Hesitation on acceleration (could be TPS adjustment)
- High idle (IAC learning or adjustment)
- Check engine light (scan for codes if possible)

**Remember:** This is 38-year-old engine. Perfection is not expected on first start. Focus on safety and core function.

---

## Documentation & Archiving (Week 6)

### Checkpoint 4.1: Final Photo Documentation

**Goal:** Document completed work for future reference and for sharing.

**Photo Checklist:**

1. **Engine bay – overall:**
   - [ ] Clean, organized engine bay
   - [ ] Visible harness routing

2. **Close-ups:**
   - [ ] ECM connector (cleaned)
   - [ ] Each sensor and its connector
   - [ ] Ground network (all new grounds)
   - [ ] Fuel pump relay area
   - [ ] Ignition coil/module area

3. **Harness routing:**
   - [ ] Photo harness route from multiple angles
   - [ ] Show how harness is secured
   - [ ] Show clearances to exhaust/moving parts

4. **Removed components:**
   - [ ] Photo pile of deleted emissions hardware
   - [ ] Photo bundle of removed wiring

---

### Checkpoint 4.2: Create Final Report

**Goal:** Comprehensive document of work performed.

**Report Should Include:**

1. **Executive Summary:**
   - Project scope
   - Timeline (start/end dates)
   - Hours invested
   - Money spent

2. **Before Condition:**
   - List of issues found
   - Baseline electrical measurements
   - Photos of "before" state

3. **Work Performed:**
   - Ground network rebuilt (cable sizes, routing)
   - ECM connector cleaned (pins removed, circuits deleted)
   - Sensors tested/replaced (which ones, results)
   - Emissions deleted (what was removed)
   - Ignition switch replaced
   - Wiring re-loomed and secured

4. **After Condition:**
   - Final electrical measurements
   - Test results (idle quality, driveability)
   - Photos of completed work
   - List of any remaining issues

5. **Lessons Learned:**
   - What went well
   - What was harder than expected
   - What you'd do differently
   - Advice for anyone doing similar work

6. **Parts List:**
   - Every part purchased
   - Source and cost
   - What worked well / what didn't

7. **Future Maintenance Notes:**
   - Recommended inspection intervals
   - Sensors to monitor
   - When to revisit ground connections

---

### Checkpoint 4.3: Sharing Documentation

**For ComancheClub.com or Other Forums:**

**Create Thread Title:**
"1986 MJ Renix Harness Cleanup & Stabilization – Complete Guide"

**Post Structure:**

1. **Introduction:**
   - Brief description of truck
   - Why you did this project
   - Link to full documentation (if hosting externally)

2. **Before/After Photos:**
   - Side-by-side comparison
   - Highlight key improvements

3. **Key Findings:**
   - Most important lessons learned
   - Common pitfalls to avoid
   - Recommendations for others

4. **Final Results:**
   - Does truck run better?
   - Idle quality?
   - Driveability improvements?
   - Reliability so far?

5. **Questions Answered:**
   - Be available to answer questions from others
   - Update thread with any follow-up issues or successes

---

## Appendix A: Troubleshooting Guide

### Engine Won't Start

**Checklist:**

- [ ] Fuel pump running when key turned on?
- [ ] Spark present at coil?
- [ ] CPS connected and functioning?
- [ ] All grounds tight?
- [ ] Battery fully charged?
- [ ] Fuel pressure adequate?
- [ ] All sensors connected?

**Common Causes:**

1. CPS failure or not connected
2. No fuel pump operation (relay or wiring)
3. Ignition switch not providing power
4. Bad ground connections
5. Broken wire in harness

---

### Engine Starts But Runs Rough

**Checklist:**

- [ ] Check for vacuum leaks
- [ ] Verify TPS adjustment
- [ ] Check IAC operation
- [ ] Verify MAP sensor working
- [ ] Check CTS reading correct temp
- [ ] Verify all sensors connected
- [ ] Check for exhaust leaks

**Common Causes:**

1. Vacuum leak at intake
2. TPS out of adjustment
3. IAC dirty or faulty
4. Bad CTS (wrong temp signal)
5. MAP sensor failed

---

### Engine Stalls When Warm

**Checklist:**

- [ ] CPS heat-related failure?
- [ ] Fuel pump weak when hot?
- [ ] Vapor lock issues?
- [ ] IAC sticking?

**Common Causes:**

1. CPS failure when hot
2. Bad ignition coil (heat sensitive)
3. Fuel pump weak

---

### Poor Fuel Economy

**Checklist:**

- [ ] O2 sensor working?
- [ ] CTS reading correctly?
- [ ] MAT sensor working?
- [ ] TPS adjustment correct?
- [ ] Injector leaking?

---

### Check Engine Light On

**Actions:**

- [ ] Get codes read (Renix scanner or manual flash code method)
- [ ] Consult Renix fault code chart
- [ ] Address specific sensor fault

---

## Appendix B: Renix Sensor Specifications

### Resistance Values (at 70°F unless noted)

| Sensor     | Typical Resistance | Notes                   |
| ---------- | ------------------ | ----------------------- |
| CPS        | 150-300Ω           | Most critical           |
| CTS (cold) | 3,000Ω @ 70°F      | Temperature dependent   |
| CTS (hot)  | 300Ω @ 200°F       |                         |
| MAT        | Same as CTS        | Temperature dependent   |
| IAC        | 10-20Ω             | Across terminals        |
| O2         | N/A                | Tests by voltage output |

### Voltage Values (Key ON, Engine OFF)

| Circuit                      | Expected Voltage          |
| ---------------------------- | ------------------------- |
| 5V Reference (MAP, TPS)      | 5.0V ±0.2V                |
| Sensor Grounds               | <0.1V to battery negative |
| MAP Signal                   | 4.0-4.5V (sea level)      |
| TPS Signal (closed throttle) | 0.5-1.0V                  |
| CTS Signal (cold)            | 3-4V                      |
| CTS Signal (hot)             | 0.5-1.5V                  |

---

## Appendix C: Wire Gauge Reference

### Choosing Correct Wire Size

| Circuit Current | Wire Gauge | Application                  |
| --------------- | ---------- | ---------------------------- |
| 0-5A            | 18 AWG     | Sensors, low current         |
| 5-10A           | 16 AWG     | Small accessories            |
| 10-20A          | 14 AWG     | Medium loads                 |
| 20-30A          | 12 AWG     | Heavy accessories            |
| 30-50A          | 10 AWG     | Starter circuit, heavy loads |
| 50-100A         | 8 AWG      | Main power feeds             |
| 100-150A        | 6 AWG      | Battery cables (short runs)  |
| 150-200A        | 4 AWG      | Battery cables (medium runs) |
| 200-300A        | 2 AWG      | Battery cables (long runs)   |

**Important:** These are for automotive (12V DC) use. Higher amperage requires larger wire.

---

## Appendix D: Maintenance Schedule

### Post-Rebuild Inspection Schedule

**First Week:**

- [ ] Daily visual inspection of harness
- [ ] Check for new leaks daily
- [ ] Monitor idle quality and driveability
- [ ] Check all connections remain tight

**First Month:**

- [ ] Weekly inspection
- [ ] Retorque ground connections (may settle)
- [ ] Check harness for chafing or heat damage
- [ ] Monitor sensor operation

**First 3 Months:**

- [ ] Monthly inspection
- [ ] Clean any corrosion from connections
- [ ] Apply fresh dielectric grease if needed

**After 3 Months:**

- [ ] Quarterly inspection
- [ ] Annual detailed inspection of entire harness

---

## Appendix E: Contact Information & Resources

### Online Communities

- **ComancheClub.com** – Primary MJ resource
- **Jeepforum.com** – MJ section
- **NAXJA.org** – XJ forum (much overlap with MJ)
- **Facebook Groups:**
  - Jeep Comanche Owners Group
  - Renix Jeep Group

### Suppliers

- **RockAuto.com** – Parts
- **Del City** – Wire & electrical components
- **Amazon** – Tools & consumables
- **NAPA / O'Reilly / AutoZone** – Local parts availability

### Technical References

- **Factory Service Manual** – Essential reference
- **Renix Bible** – Search ComancheClub.com
- **Haynes/Chilton Manuals** – Basic reference

---

## Document Revision History

| Version | Date         | Changes         |
| ------- | ------------ | --------------- |
| 1.0     | January 2026 | Initial release |

---

## Credits & Acknowledgments

This guide compiled by: [Your Name / Username]

Based on:

- Personal experience with 1986 Jeep Comanche VIN 1JTHL6571GT042543
- Community knowledge from ComancheClub.com
- Factory Service Manual references
- Trial and error on "Mad Maxine" daily driver rebuild project

**Special thanks to:**

- ComancheClub.com community
- Everyone who has documented Renix troubleshooting
- Original engineers at AMC/Renault who created this system

---

## Final Notes

**Remember:**

1. **Safety first** – always disconnect battery, work safely
2. **Document everything** – photos and notes prevent confusion
3. **Test as you go** – don't wait until end to find problems
4. **Be patient** – this is 38-year-old wiring, expect surprises
5. **Ask for help** – ComancheClub.com community is very helpful

**You're doing this to build a reliable truck, not a show truck.** Function over form. Clean wiring that works is worth more than perfect wiring that doesn't.

Good luck with your Renix harness cleanup. May your idle be smooth and your grounds be solid.

---

**END OF PHASE A GUIDE**

_For Phase B (Accessory Panel & Body Wiring), see separate guide._
