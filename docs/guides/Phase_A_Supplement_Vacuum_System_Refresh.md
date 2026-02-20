# Phase A Supplement: Vacuum System Refresh & Rebuild

## 1986 Jeep Comanche MJ — 2.5L AMC I4, Manual, Renix TBI

**Document Version:** 1.0  
**Last Updated:** February 2026  
**Project:** "Mad Maxine" Daily Driver Rebuild  
**VIN:** 1JTHL6571GT042543  
**Parent Document:** Phase_A_Renix_Harness_Cleanup_Guide.md

---

## Document Purpose

This supplement provides a complete vacuum system inspection, documentation, and rebuild procedure for the 2.5L Renix TBI engine. It replaces all existing vacuum hoses with correctly routed, correctly sized new lines and verifies system integrity before returning to the Phase A main workflow.

**What this covers:**
- Component inventory and inspection (what YOUR truck actually has)
- Complete vacuum system teardown and documentation
- Branch-by-branch rebuild with verification at each step
- Functional testing and leak detection
- CCV (Crankcase Ventilation) system rebuild

**What this does NOT cover:**
- Emissions hardware removal (see Phase A, Checkpoint 2.6)
- Electrical wiring or harness work (see Phase A main document)
- Engine mechanical repairs
- Brake booster replacement (mechanical, not vacuum scope)

---

## Where This Fits in Phase A

This procedure is performed **during Phase A, Checkpoint 2.6** of the Renix Harness Cleanup Guide.

```
Phase A Checkpoint 2.5: ECM Connector Cleanup
    ↓
Phase A Checkpoint 2.6: Physical Emissions System Removal
    ↓
  ┌─────────────────────────────────────────────────┐
  │  >>> THIS DOCUMENT <<<                          │
  │  Vacuum System Refresh & Rebuild                │
  │                                                 │
  │  Performed AFTER emissions hardware is removed  │
  │  and BEFORE Checkpoint 2.7 (Ignition Switch)    │
  └─────────────────────────────────────────────────┘
    ↓
Phase A Checkpoint 2.7: Ignition Switch Testing
    ↓
Phase A Checkpoint 2.8: Sensor Circuit Testing
```

**Prerequisites before starting this procedure:**
- [ ] Phase A Checkpoint 2.6 complete — emissions hardware removed
- [ ] All unused ECM pins de-pinned (Checkpoint 2.5)
- [ ] Engine bay cleaned (Checkpoint 2.2)
- [ ] Ground network rebuilt and verified (Checkpoint 2.4)

**After completing this procedure, return to:**
- Phase A Checkpoint 2.7: Ignition Switch Testing & Replacement

---

## Why Vacuum Integrity Matters on Renix

On the 2.5L Renix system, the MAP (Manifold Absolute Pressure) sensor is the **primary load input** to the ECM. The MAP sensor reads intake manifold vacuum to determine how much air the engine is ingesting, and the ECM uses that reading to calculate fuel delivery.

**Any vacuum leak — anywhere in the system — directly corrupts the MAP signal.**

A leaking vacuum line tells the ECM the engine is under more load than it actually is. The ECM responds by richening the fuel mixture. The result is poor idle, hesitation, bad fuel economy, and running problems that mimic sensor failures or fuel system faults.

This is why vacuum system integrity is as important as the ground network rebuild. Bad grounds corrupt sensor signals electrically; vacuum leaks corrupt the MAP signal pneumatically. Both produce the same outcome: an ECM making fuel decisions based on bad information.

**Bottom line:** If you rebuild the grounds and clean up the harness but leave cracked, misrouted vacuum lines in place, you will still have running problems. Do this work thoroughly.

---

## Tools Required

| Tool | Purpose | Notes |
|------|---------|-------|
| **Needle nose pliers** | Hose clamp removal, fitting work | Already in Phase A toolkit |
| **Diagonal cutters** | Cutting old hose | Already in Phase A toolkit |
| **Utility knife** | Slicing stuck hoses off nipples | Be careful around aluminum |
| **Small pick set** | Cleaning vacuum ports | Harbor Freight ~$5 |
| **Spray bottle with soapy water** | Leak testing | Dish soap + water |
| **Hand vacuum pump** (recommended) | Testing check valves, individual lines | Harbor Freight ~$25 |
| **Masking tape + marker** | Labeling ports during teardown | Already in Phase A toolkit |
| **Digital camera / phone** | Documentation at every step | — |
| **Shop towels / rags** | Plugging open ports temporarily | — |

---

## Parts & Materials Required

### Vacuum Hose

| Item | Size | Quantity | Source | Est. Cost |
|------|------|----------|--------|-----------|
| **Silicone vacuum hose** | 5/32" ID | 6 ft | Amazon, RockAuto | $8–12 |
| **Silicone vacuum hose** | 3/16" ID | 4 ft | Amazon, RockAuto | $8–12 |
| **Reinforced vacuum hose** | 11/32" ID | 4 ft | NAPA, AutoZone | $10–15 |
| **Vacuum hose tee** | 5/32" or 3/16" | 2 ea | AutoZone, Amazon | $3–5 |
| **Vacuum caps** (assorted) | 5/32", 3/16", 1/4" | 10 pack | AutoZone, Amazon | $4–6 |

**Hose notes:**
- Silicone hose is preferred — resists heat, doesn't harden with age, lasts decades
- Fuel-injection rated rubber hose is acceptable but will eventually degrade again
- **Never use fuel hose** — wall thickness is wrong, connections will leak
- **Never use heater hose** — too soft, collapses under vacuum

### Check Valves

| Item | Size | Quantity | Source | Est. Cost |
|------|------|----------|--------|-----------|
| **Brake booster check valve** | 11/32" | 1 | NAPA, RockAuto | $8–15 |
| **HVAC reservoir check valve** (if equipped) | 5/32" or 3/16" | 1 | NAPA, junkyard | $5–10 |

### CCV Components

| Item | Size | Quantity | Source | Est. Cost |
|------|------|----------|--------|-----------|
| **Oil separator / CCV metered fitting** | Mopar #53002466 | 1 | Mopar parts supplier | $10–12 |
| **Valve cover grommets** | AMC 2.5L | 2 | RockAuto | $4–8 |
| **Breather filter element** (air cleaner side) | Universal | 1 | AutoZone | $3–5 |

### Plugging Supplies

| Item | Purpose | Source | Est. Cost |
|------|---------|--------|-----------|
| **Vacuum caps** (silicone, assorted) | Capping unused ports | Amazon | $4–6 |
| **Brass vacuum plugs** | Permanent port closure | Fastenal, hardware store | $3–5 |
| **Small hose clamps** (assorted) | Securing critical connections | AutoZone | $5–8 |

### Estimated Total: $60–100

---

# SECTION 1: COMPONENT INVENTORY & INSPECTION

**Goal:** Determine exactly what vacuum-operated systems exist on YOUR truck before tearing anything apart.

The 1986 2.5L Renix Comanche could have been equipped with various vacuum-operated systems from the factory, and 38 years of previous owners may have added, removed, or incorrectly modified any of them. This inspection identifies what you're actually working with.

---

## Checkpoint V1: Vacuum Component Inventory

**Before removing a single hose, complete this entire inventory.**

Photograph each item as you inspect it. These photos become your "before" reference.

### 1.1 — Intake Manifold / TBI Base Vacuum Ports

Locate and count every vacuum nipple on the intake manifold and throttle body base.

**Inspection:**

- [ ] Count total vacuum nipples on intake manifold: ____
- [ ] Count total vacuum nipples on TBI base/adapter: ____
- [ ] Identify which nipples currently have hoses attached: ____
- [ ] Identify which nipples are open (no hose, no cap): ____
- [ ] Identify which nipples are capped/plugged: ____
- [ ] Photograph all vacuum nipples (overview + close-up of each)

**Port identification — label each with masking tape:**

| Port # | Location | Size (est.) | Currently Connected To | Hose Condition |
|--------|----------|-------------|------------------------|----------------|
| 1 | ________ | ________ | ________ | ________ |
| 2 | ________ | ________ | ________ | ________ |
| 3 | ________ | ________ | ________ | ________ |
| 4 | ________ | ________ | ________ | ________ |
| 5 | ________ | ________ | ________ | ________ |
| 6 | ________ | ________ | ________ | ________ |
| 7 | ________ | ________ | ________ | ________ |
| 8 | ________ | ________ | ________ | ________ |

**Add rows as needed. Most 2.5L Renix manifolds have 4–6 vacuum nipples.**

---

### 1.2 — Ported Vacuum Source (Throttle Body)

Ported vacuum is available only above the throttle plate — it reads zero at idle and increases with throttle opening. This is distinct from full manifold vacuum.

**Inspection:**

- [ ] Locate ported vacuum nipple on throttle body (above throttle plate): Found? Y / N
- [ ] Hose currently attached? Y / N
- [ ] If yes, trace hose to: ________________________________________
- [ ] Nipple condition (cracked, corroded, clean): ____________________
- [ ] Photograph

**Note:** If your distributor has vacuum advance, it should connect HERE (ported), not to manifold vacuum. This is a common misroute.

---

### 1.3 — MAP Sensor

The MAP sensor is typically mounted on the firewall, driver's side.

**Inspection:**

- [ ] MAP sensor located: Y / N
- [ ] Location: ________________________________________________
- [ ] Vacuum hose connected? Y / N
- [ ] Hose routes to (trace it): ___________________________________
- [ ] Hose condition (hard, cracked, soft, good): ____________________
- [ ] Hose length (estimate): ________ inches
- [ ] Any tees or splices in MAP vacuum line? Y / N
  - If YES — **this is wrong and must be corrected.** MAP gets its own dedicated line.
- [ ] Any check valve in MAP vacuum line? Y / N
  - If YES — **this is wrong and must be removed.** No check valve on MAP line.
- [ ] Photograph hose routing from port to sensor

---

### 1.4 — Brake Booster

The brake booster is the large round canister on the driver's side firewall behind the master cylinder.

**Inspection:**

- [ ] Brake booster located: Y / N (should always be present)
- [ ] Large vacuum hose connected? Y / N
- [ ] Hose routes from: __________ to booster
- [ ] Hose condition: ___________________________________________
- [ ] Hose size (should be 11/32" or 3/8"): ________________________
- [ ] Check valve present in hose? Y / N
  - [ ] If yes — arrow direction: toward booster / toward manifold / no arrow visible
  - [ ] Check valve condition: ____________________________________
- [ ] Test check valve (if hand pump available):
  - [ ] Vacuum holds when applied toward booster side? Y / N
  - [ ] Vacuum bleeds through toward manifold side? Y / N (should = yes, one-way)
- [ ] Photograph hose and check valve

---

### 1.5 — Distributor Vacuum Advance

Not all 1986 2.5L Renix distributors have vacuum advance. You need to check.

**Inspection:**

- [ ] Locate distributor (driver's side of engine, rear of block)
- [ ] Vacuum advance canister present on distributor? Y / N
  - This is a round metal can (roughly 2–3" diameter) with a vacuum nipple, attached to the side of the distributor body. It has a rod connecting to the breaker plate inside the distributor.

**If YES (vacuum advance present):**
- [ ] Vacuum hose connected? Y / N
- [ ] Hose routes to (trace it): ___________________________________
  - Should connect to PORTED vacuum (throttle body), NOT manifold vacuum
- [ ] Hose condition: ___________________________________________
- [ ] Photograph

**If NO (no vacuum advance):**
- [ ] Distributor is electronic advance only — no vacuum connection needed
- [ ] Skip this branch during rebuild
- [ ] Note: ___________________________________________________

---

### 1.6 — CCV / PCV System (Crankcase Ventilation)

The CCV system vents crankcase pressure and recirculates blow-by gases. On the AMC 2.5L, this system uses the valve cover.

**Inspection — Rear Valve Cover Port:**

- [ ] Rear valve cover port located: Y / N
- [ ] Port type:
  - [ ] Pressed-in metal fitting with small orifice hole (factory correct)
  - [ ] PCV valve threaded/pressed into grommet
  - [ ] Open grommet with plain hose barb
  - [ ] Open hole (no fitting — **problem**)
  - [ ] Other: ________________________________________________
- [ ] If metered fitting/PCV present — orifice clear? (hold to light): Y / N
- [ ] Hose connected? Y / N
- [ ] Hose routes to: ___________________________________________
  - Should route to intake manifold vacuum
- [ ] Hose condition: ___________________________________________
- [ ] Photograph

**Inspection — Front Valve Cover Port:**

- [ ] Front valve cover port located: Y / N
- [ ] Port type:
  - [ ] Pressed-in fitting with breather filter
  - [ ] Open grommet with hose to air cleaner
  - [ ] Open hole (no fitting)
  - [ ] Other: ________________________________________________
- [ ] Hose connected? Y / N
- [ ] Hose routes to: ___________________________________________
  - Should route to air cleaner housing (fresh air inlet)
- [ ] Photograph

**⚠️ CCV WARNING:** If the rear valve cover port has no metered restriction (no orifice fitting, no PCV valve — just an open hose to manifold vacuum), the engine will pull excessive crankcase vacuum. This causes oil to be drawn past valve seals and piston rings, resulting in oil consumption, blue exhaust smoke, and fouled spark plugs. The restriction is critical — do not skip this during rebuild.

---

### 1.7 — HVAC Vacuum System

Vacuum-operated HVAC uses manifold vacuum to actuate blend doors and vent mode doors behind the dash. Not all 1986 Comanches have this — some use cable-operated controls.

**Inspection:**

- [ ] HVAC control type:
  - [ ] Vacuum-operated (push buttons or rotary with vacuum lines running behind dash)
  - [ ] Cable-operated (slide levers with mechanical cables)
  - [ ] Unknown — need to inspect behind dash panel

**If vacuum-operated:**
- [ ] Vacuum reservoir (ball or canister) present? Y / N
  - [ ] Location: _______________________________________________
  - [ ] Condition: ______________________________________________
- [ ] Vacuum supply hose from manifold to reservoir: Present? Y / N
- [ ] Check valve between manifold and reservoir: Present? Y / N
- [ ] Do HVAC vent modes change correctly when engine is running? Y / N
  - (Test: turn on blower, switch between floor/dash/defrost — vents should change position)
- [ ] Photograph

**If cable-operated:**
- [ ] No vacuum connections needed for HVAC
- [ ] Skip this branch during rebuild
- [ ] Note: ___________________________________________________

---

### 1.8 — 4WD Vacuum Components (NP207 Transfer Case)

Some Jeep 4WD systems use vacuum to engage/disengage the front axle disconnect (CAD). The NP207 is a part-time transfer case.

**Inspection:**

- [ ] Front axle disconnect type:
  - [ ] Vacuum-operated CAD (Central Axle Disconnect) — vacuum motor on front axle housing
  - [ ] Manual hubs
  - [ ] Full-time engagement (no disconnect mechanism)
  - [ ] Unknown
- [ ] Vacuum motor present on front axle? Y / N
  - [ ] Location: _______________________________________________
  - [ ] Vacuum hoses connected? Y / N
  - [ ] Hoses route to: _________________________________________
- [ ] Vacuum switch/solenoid on transfer case? Y / N
- [ ] Photograph

**Note:** If the front axle has manual hubs or no disconnect, there are no 4WD vacuum lines to worry about. If vacuum CAD is present, that system needs its own vacuum supply — it will be documented but not rebuilt in this procedure (separate scope).

---

### 1.9 — Emissions Vacuum Components (Should Be Removed)

If you completed Phase A Checkpoint 2.6, these should already be gone. Verify:

- [ ] EGR valve removed and port blocked: Y / N
- [ ] Vacuum distribution tree/block removed: Y / N
- [ ] Delay valves removed: Y / N
- [ ] Restrictors removed (except CCV orifice): Y / N
- [ ] CTO vacuum switches removed: Y / N
- [ ] All emissions-related vacuum hoses removed: Y / N
- [ ] All open ports capped or plugged: Y / N

**If any emissions vacuum components remain, return to Phase A Checkpoint 2.6 and complete removal before continuing.**

---

### 1.10 — Mystery Hoses and Non-Factory Additions

After 38 years, there may be hoses going to things that shouldn't be there — aftermarket gauges, non-factory components, or hoses routed to nowhere.

**Inspection:**

- [ ] Any vacuum hoses going to unidentified components? Y / N
  - If yes, describe each:
  - Mystery hose 1: From _____________ to _____________ Purpose: _____________
  - Mystery hose 2: From _____________ to _____________ Purpose: _____________
  - Mystery hose 3: From _____________ to _____________ Purpose: _____________
- [ ] Any hoses that dead-end (connected at one end, open at other)? Y / N
  - These are vacuum leaks. Note location: _________________________________
- [ ] Any non-factory vacuum tees or splitters? Y / N
  - Location and purpose: ______________________________________________
- [ ] Photograph all mystery hoses and connections

---

## Checkpoint V1 Summary

After completing the inventory, fill in this summary. This becomes your rebuild plan.

### Systems Present on This Vehicle

| System | Present? | Vacuum Source | Rebuild? |
|--------|----------|---------------|----------|
| MAP Sensor | Y / N | Manifold | YES — always |
| Brake Booster | Y / N | Manifold | YES — always |
| CCV (rear valve cover) | Y / N | Manifold | YES — always |
| CCV (front valve cover) | Y / N | Fresh air (air cleaner) | YES — always |
| Distributor Vacuum Advance | Y / N | Ported | If present |
| HVAC Vacuum | Y / N | Manifold (via reservoir) | If present |
| 4WD Vacuum (CAD) | Y / N | Manifold | Separate scope |
| Emissions (should be removed) | Y / N | N/A | Should be gone |

### Open Vacuum Ports Requiring Caps

| Port Location | Size | Cap/Plug Installed? |
|---------------|------|---------------------|
| _____________ | ____ | Y / N |
| _____________ | ____ | Y / N |
| _____________ | ____ | Y / N |
| _____________ | ____ | Y / N |

### Issues Found During Inventory

| Issue | Severity | Action Required |
|-------|----------|-----------------|
| _________________ | _________ | _________________ |
| _________________ | _________ | _________________ |
| _________________ | _________ | _________________ |

**☐ CHECKPOINT V1 COMPLETE — Proceed to Section 2 only after all inventory items documented.**

---

# SECTION 2: TEARDOWN & PORT PREPARATION

**Goal:** Remove all remaining old vacuum hoses and prepare every port for new connections.

---

## Checkpoint V2: Remove All Old Vacuum Hoses

**Procedure:**

1. **Final documentation before teardown:**
   - [ ] Review all photos from Checkpoint V1
   - [ ] Confirm your rebuild plan (Systems Present table above) is complete
   - [ ] You should know exactly which ports connect to what — if not, trace again before pulling hoses

2. **Remove all vacuum hoses systematically:**
   - [ ] Start at intake manifold and work outward
   - [ ] If a hose is stuck, slice lengthwise with utility knife — do NOT twist and pull on aluminum/plastic nipples (they break)
   - [ ] Remove all old tees, connectors, and inline fittings
   - [ ] Remove old check valves (they will be replaced)
   - [ ] Set aside the CCV metered orifice / PCV valve for inspection (do not discard yet)

3. **Clean all vacuum ports:**
   - [ ] Use small pick to clear debris from each nipple
   - [ ] Spray each port with carburetor cleaner or brake cleaner
   - [ ] Blow out with compressed air if available
   - [ ] Inspect each nipple for cracks, corrosion, or damage
   - [ ] Any damaged nipple: note here for repair/replacement: _________________________

4. **Cap all open ports temporarily:**
   - [ ] Install vacuum caps on every open nipple
   - [ ] This prevents debris entry and creates a known-sealed state
   - [ ] Photograph the engine with all ports capped — this is your "clean slate"

**☐ CHECKPOINT V2 COMPLETE — All old hoses removed, all ports cleaned and capped.**

---

# SECTION 3: BRANCH-BY-BRANCH REBUILD

**Goal:** Install new vacuum lines one system at a time, verifying each before moving to the next.

**Critical rule:** Build and test each branch individually. If you install everything at once and have a problem, you won't know which branch caused it.

---

## Master Vacuum Routing Diagram

```
INTAKE MANIFOLD / TBI BASE (Full Manifold Vacuum Source)
│
├── MAP Sensor ─────── Short direct line, 5/32"
│                      NO tees, NO check valve, NO sharing
│
├── Brake Booster ──── Large line, 11/32" or 3/8"
│                      Check valve (arrow toward booster)
│
├── CCV System ─────── Rear valve cover → metered orifice → manifold
│   (rear port)        3/16" hose
│
│   CCV Fresh Air ──── Front valve cover → air cleaner housing
│   (front port)       3/16" hose, no vacuum connection
│
├── HVAC Reservoir ─── Small check valve → reservoir ball
│   (if equipped)      5/32" hose
│
└── (All other ports capped)


PORTED VACUUM (Throttle Body — above throttle plate)
│
├── Distributor ─────── Vacuum advance canister
│   (if equipped)       5/32" hose
│
└── (Cap if no distributor vacuum advance)
```

---

## Checkpoint V3: Branch 1 — MAP Sensor Line

**This goes first because it's the most critical for engine operation.**

**Routing:** Manifold vacuum nipple → short hose → MAP sensor

**Rules — non-negotiable:**
- Dedicated line — no tees, no splices, no shared connections
- No check valve — MAP must see real-time vacuum changes
- Keep hose as short as possible — 6 to 8 inches ideal, 12 inches maximum
- Route away from exhaust heat sources

**Procedure:**

1. **Select vacuum port:**
   - [ ] Choose the manifold vacuum nipple closest to the MAP sensor
   - [ ] Confirm nipple size: should accept 5/32" ID hose

2. **Cut and install hose:**
   - [ ] Cut 5/32" silicone vacuum hose to length (measure port to sensor + 1 inch slack)
   - [ ] Push hose firmly onto manifold nipple — should be snug friction fit
   - [ ] Push other end onto MAP sensor nipple
   - [ ] Hose should not kink, sag, or contact exhaust components
   - [ ] Optional: small hose clamps at each end for extra security

3. **Verify — engine running:**
   - [ ] Start engine, let idle
   - [ ] **Pull MAP hose off sensor briefly** — engine should immediately stumble/stall
   - [ ] Reconnect hose — engine should recover to smooth idle
   - [ ] If engine does NOT stumble when line is pulled: hose is blocked, kinked, or wrong port
   - [ ] Listen for hissing at connections — any hiss = leak

**Test result:** MAP stumble test: PASS / FAIL  
**Notes:** _________________________________________________________________

**☐ BRANCH 1 COMPLETE — MAP sensor line installed and verified.**

---

## Checkpoint V4: Branch 2 — Brake Booster Line

**Routing:** Manifold vacuum nipple → large hose → check valve → brake booster

**Procedure:**

1. **Install check valve in hose:**
   - [ ] New check valve in hand
   - [ ] Confirm direction arrow on valve — **arrow points TOWARD booster** (away from manifold)
   - [ ] If no arrow: the valve should allow airflow FROM manifold TO booster, and block flow in reverse
   - [ ] Test with hand vacuum pump if available: apply vacuum to booster side, valve should hold. Apply vacuum to manifold side, valve should bleed through.

2. **Install hose:**
   - [ ] Cut 11/32" reinforced vacuum hose to length
   - [ ] Connect manifold end to large vacuum nipple on intake manifold
   - [ ] Install check valve inline (correct direction!)
   - [ ] Connect booster end to brake booster vacuum port
   - [ ] Secure with hose clamps at both ends and at check valve

3. **Verify — engine running:**
   - [ ] Start engine, let idle
   - [ ] **Idle should NOT change** when you press the brake pedal
   - [ ] If idle drops when brakes are pressed: check valve is backward or leaking
   - [ ] Pump brake pedal several times — pedal should be firm with good assist
   - [ ] Shut engine off, wait 30 seconds, press brake pedal — should still have one or two power-assisted pumps (check valve holding vacuum in booster)
   - [ ] Listen for hissing at booster connection — any hiss = leak

**Test result:** Brake pedal assist: PASS / FAIL  
**Test result:** Idle stable during braking: PASS / FAIL  
**Test result:** Residual assist after shutdown: PASS / FAIL  
**Notes:** _________________________________________________________________

**☐ BRANCH 2 COMPLETE — Brake booster line installed and verified.**

---

## Checkpoint V5: Branch 3 — CCV System (Crankcase Ventilation)

**This branch has two parts: the vacuum side (rear port) and the fresh air side (front port).**

### Part A — Rear Valve Cover to Manifold (Vacuum Side)

**Routing:** Rear valve cover port → metered orifice/PCV → hose → intake manifold vacuum

**⚠️ CRITICAL:** The rear port MUST have a flow restriction. This is either:
- A pressed-in metal fitting with a small orifice hole (factory design for many AMC 2.5L applications)
- A PCV valve (some configurations)

**If you removed the orifice fitting during teardown, reinstall it now.** If the old one is damaged or missing, replace with a new PCV valve or equivalent metered fitting for the AMC 2.5L.

**Factory Part:** Mopar #53002466 — Oil Separator / PCV Filter. This is the correct OEM fitting for the 1986 2.5L AMC. It fits Cherokee, Comanche, and Wrangler applications. Available from Mopar parts suppliers, typically ~$10–12.

**Known condition on this vehicle:** The original fitting was found broken with the vacuum hose clamped directly onto it and electrical tape wrapped around the nipple — a failed field repair that was almost certainly leaking vacuum into the crankcase circuit. Replacement part (Mopar #53002466) has been ordered.

**What happens without the restriction:** Full manifold vacuum (15–20 inHg at idle) pulls directly on the crankcase. This creates excessive crankcase vacuum that draws oil past valve seals and piston rings. Symptoms appear weeks later — oil consumption, blue exhaust smoke, fouled plugs, oil on spark plug threads. It's an easy mistake that creates a hard-to-diagnose problem.

**Procedure:**

1. **Verify restriction is in place:**
   - [ ] Rear valve cover port has metered orifice or PCV valve: Y / N
   - [ ] If holding fitting to light, can you see a small hole? Y / N (should be ~0.040–0.060" orifice)
   - [ ] Grommet in valve cover in good condition? Y / N (replace if cracked/hard)

2. **Install hose:**
   - [ ] Cut 3/16" vacuum hose to length from rear valve cover port to manifold vacuum nipple
   - [ ] Connect rear valve cover end first
   - [ ] Route hose away from exhaust manifold — **this is critical on the 2.5L** where the exhaust manifold runs very close to the valve cover
   - [ ] Connect manifold end
   - [ ] Secure routing with zip ties to keep hose away from heat

### Part B — Front Valve Cover to Air Cleaner (Fresh Air Side)

**Routing:** Front valve cover port → hose → air cleaner housing

This side is NOT under vacuum. It provides filtered fresh air inlet to the crankcase so the CCV system can flow. Air enters here, picks up blow-by gases in the crankcase, and exits through the rear port to the manifold.

**Procedure:**

1. **Verify front port:**
   - [ ] Front valve cover port has fitting/grommet: Y / N
   - [ ] Replace grommet if cracked or hardened

2. **Install hose:**
   - [ ] Cut 3/16" hose to length from front valve cover port to air cleaner housing
   - [ ] If air cleaner housing has a dedicated CCV nipple, connect there
   - [ ] If no dedicated nipple, route into air cleaner snorkel or housing — the goal is filtered air, not a sealed connection
   - [ ] A small inline breather filter can be used if no air cleaner connection point exists

3. **Verify — engine running:**
   - [ ] Start engine, let idle
   - [ ] **Remove oil fill cap** — should feel slight vacuum / suction at opening
   - [ ] If no suction: rear port restriction may be blocked, or hose is kinked/disconnected
   - [ ] If STRONG suction (cap hard to remove): restriction is missing or too large — excessive crankcase vacuum
   - [ ] Idle should remain stable with cap removed (slight change is normal, major stumble = leak elsewhere)
   - [ ] Replace oil fill cap

**Test result:** Slight crankcase vacuum at oil cap: PASS / FAIL  
**Test result:** Idle stable with cap removed: PASS / FAIL  
**Notes:** _________________________________________________________________

**☐ BRANCH 3 COMPLETE — CCV system installed and verified.**

---

## Checkpoint V6: Branch 4 — Distributor Vacuum Advance (If Equipped)

**Skip this checkpoint entirely if your distributor does not have a vacuum advance canister (determined in Checkpoint V1.5).**

**Routing:** Ported vacuum nipple (throttle body) → hose → distributor vacuum canister

**Important:** This connects to PORTED vacuum, not manifold vacuum. Ported vacuum is zero at idle and increases with throttle opening. If connected to manifold vacuum instead, timing advance will be present at idle, causing high idle speed and potential detonation.

**Procedure:**

1. **Install hose:**
   - [ ] Cut 5/32" vacuum hose to length from throttle body ported nipple to distributor vacuum canister
   - [ ] Connect throttle body end
   - [ ] Route hose away from exhaust and moving parts (accessory belts, fan)
   - [ ] Connect distributor end
   - [ ] No check valve needed

2. **Verify — engine running:**
   - [ ] Start engine, let idle
   - [ ] **Idle speed should NOT change** when this line is connected vs. disconnected
   - [ ] If idle rises when line is connected: you're connected to manifold vacuum instead of ported — wrong port
   - [ ] Rev engine to ~2000 RPM and release — engine should return to normal idle smoothly

**Test result:** No idle speed change with line connected: PASS / FAIL  
**Notes:** _________________________________________________________________

**☐ BRANCH 4 COMPLETE (or SKIPPED — no vacuum advance).**

---

## Checkpoint V7: Branch 5 — HVAC Vacuum Reservoir (If Equipped)

**Skip this checkpoint if your truck has cable-operated HVAC controls (determined in Checkpoint V1.7).**

**Routing:** Manifold vacuum nipple → check valve → vacuum reservoir → HVAC control head

**Procedure:**

1. **Install check valve:**
   - [ ] New or tested check valve
   - [ ] Arrow points TOWARD reservoir (away from manifold)

2. **Install supply hose:**
   - [ ] Cut 5/32" vacuum hose to length
   - [ ] Connect manifold end
   - [ ] Install check valve inline
   - [ ] Connect to vacuum reservoir inlet

3. **Verify — engine running:**
   - [ ] Start engine, let idle
   - [ ] Turn blower on
   - [ ] Switch between vent modes: floor / dash / defrost
   - [ ] Vents should change position with each selection
   - [ ] If vents don't change or are sluggish: check for leaks in lines from reservoir to dash
   - [ ] If vents default to defrost: vacuum is not reaching HVAC actuators — check hose, check valve, reservoir

**Test result:** HVAC mode changes correctly: PASS / FAIL  
**Notes:** _________________________________________________________________

**☐ BRANCH 5 COMPLETE (or SKIPPED — cable-operated HVAC).**

---

## Checkpoint V8: Cap Remaining Ports & Final Leak Check

**Goal:** Verify every manifold and throttle body port is either connected to a system or capped.

**Procedure:**

1. **Port audit:**
   - [ ] Walk every vacuum nipple on manifold and throttle body
   - [ ] Each port is: connected to a branch above, OR capped with vacuum cap/plug
   - [ ] **No open ports** — zero exceptions
   - [ ] Any open port is an unmetered vacuum leak that corrupts MAP readings

2. **Final leak check — engine running:**
   - [ ] Start engine, let idle stabilize
   - [ ] Spray soapy water on EVERY vacuum connection, one at a time
   - [ ] Watch for bubbles — bubbles = leak
   - [ ] Pay special attention to:
     - [ ] MAP sensor connection (both ends)
     - [ ] Brake booster check valve connections
     - [ ] CCV rear valve cover connection
     - [ ] Any tees or inline fittings
     - [ ] Every capped port

3. **Fix any leaks found:**
   - [ ] Reseat hose on nipple
   - [ ] Replace hose if nipple is too small for friction fit
   - [ ] Add small hose clamp if connection won't stay tight
   - [ ] Retest after each repair

4. **Idle quality check:**
   - [ ] Engine idling smoothly? Y / N
   - [ ] Idle RPM: ________ (typical: 700–900 RPM warm)
   - [ ] No hunting/surging? Y / N
   - [ ] No hissing audible from engine bay? Y / N

**☐ CHECKPOINT V8 COMPLETE — All ports accounted for, no leaks detected.**

---

# SECTION 4: FINAL VERIFICATION

---

## Checkpoint V9: Complete System Verification

**Run through all tests in sequence with engine at normal operating temperature.**

### Functional Tests

| Test | Procedure | Expected Result | PASS/FAIL |
|------|-----------|-----------------|-----------|
| **MAP stumble** | Pull MAP hose briefly at idle | Engine stumbles immediately | _______ |
| **Brake assist** | Press brake pedal at idle | Firm pedal, idle stays stable | _______ |
| **Brake vacuum hold** | Shut off engine, wait 30 sec, press brake | 1–2 assisted pumps | _______ |
| **CCV vacuum** | Remove oil fill cap at idle | Slight suction felt at opening | _______ |
| **CCV idle** | Remove oil fill cap at idle | Idle changes slightly, not dramatically | _______ |
| **Distributor** (if equipped) | Connect/disconnect line at idle | No idle speed change | _______ |
| **HVAC modes** (if equipped) | Switch vent positions | Vents change position | _______ |
| **Leak check** | Soapy water on all connections | No bubbles anywhere | _______ |

### Visual Inspection

- [ ] All hoses routed away from exhaust heat
- [ ] All hoses secured with zip ties or loom clamps (no dangling)
- [ ] No hoses kinked or pinched
- [ ] All connections fully seated on nipples
- [ ] All unused ports capped
- [ ] Hose routing is clean and traceable

### Documentation

- [ ] "After" photos taken of completed vacuum routing
- [ ] Photos show each branch clearly
- [ ] This document filled in with all measurements and test results
- [ ] Any issues noted for follow-up

---

## Completed Vacuum Routing Record

Fill this in after rebuild is complete. This becomes your permanent reference.

| Branch | Source Port | Destination | Hose Size | Check Valve? | Hose Length |
|--------|-----------|-------------|-----------|--------------|-------------|
| MAP Sensor | ____________ | MAP sensor | 5/32" | No | ______ in |
| Brake Booster | ____________ | Brake booster | 11/32" | Yes → booster | ______ in |
| CCV Rear | Rear valve cover | ____________ | 3/16" | No | ______ in |
| CCV Front | Front valve cover | Air cleaner | 3/16" | No (fresh air) | ______ in |
| Distributor | Ported vacuum | Distributor | 5/32" | No | ______ in |
| HVAC | ____________ | Reservoir | 5/32" | Yes → reservoir | ______ in |

**Capped/Plugged Ports:**

| Port Location | Cap Type |
|---------------|----------|
| _____________ | ________ |
| _____________ | ________ |
| _____________ | ________ |

---

## Common Mistakes — Quick Reference

Printing this page separately and taping it to the garage wall isn't a bad idea.

| Mistake | Why It's Bad | How to Avoid |
|---------|-------------|--------------|
| Tee-ing MAP line into other circuits | Corrupts MAP reading, causes rich running | MAP gets its own dedicated, direct line — always |
| Check valve in MAP line | MAP can't read real-time vacuum changes | Never install a check valve in the MAP line |
| Distributor on manifold vacuum | Timing advance at idle, high idle, detonation risk | Use PORTED vacuum (above throttle plate) |
| CCV rear port without restriction | Excessive crankcase vacuum, oil consumption | Always use metered orifice or PCV valve |
| Using fuel hose for vacuum lines | Wrong wall thickness, connections leak | Use silicone vacuum hose or FI-rated vacuum hose |
| Leaving ports open/uncapped | Unmetered vacuum leak = bad MAP signal | Every port: connected or capped. No exceptions. |
| Routing hose near exhaust | Hose melts, creates delayed leak | Route all vacuum hoses away from exhaust manifold |
| Installing brake check valve backward | No vacuum reserve for brakes — safety hazard | Arrow always points TOWARD booster |

---

## Return to Phase A Workflow

With the vacuum system rebuild complete and verified:

**→ Return to Phase_A_Renix_Harness_Cleanup_Guide.md, Checkpoint 2.7: Ignition Switch Testing & Replacement**

All vacuum work feeds directly into the Phase A first-start procedure (Checkpoint 3.2), where a sealed vacuum system is a prerequisite for meaningful idle quality assessment and sensor verification.

---

**Document Version:** 1.0  
**Created:** February 2026  
**Status:** Active  
**Parent Document:** Phase_A_Renix_Harness_Cleanup_Guide.md  
**Cross-References:** 06_TECHNICAL_REFERENCE.md (MAP sensor, Renix system info)
