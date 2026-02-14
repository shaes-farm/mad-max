# Complete Brake System Refresh Guide
## 1986 Jeep Comanche MJ — 2.5L I4 / AX5 / Dana 30 Front / Dana 35 Rear

**Applies to:** 1986–1990 MJ Comanche and XJ Cherokee with front disc / rear drum brakes  
**Author:** Oak & Claude — Mad Maxine Project  
**Version:** 1.0 — February 2026  
**Source specs:** Chilton/Haynes XJ/MJ manual, ComancheClub.com community knowledge

> **⚠️ SAFETY WARNING:** Brakes are the single most safety-critical system on this vehicle. If you are not confident in any step, stop and consult a professional. A failed brake system on mountain grades is potentially fatal. Never drive the vehicle until the system has been fully bled, tested, and verified.

---

## Table of Contents

1. [Specifications & Torque Values](#1-specifications--torque-values)
2. [Tools & Supplies](#2-tools--supplies)
3. [Parts List & Sourcing Notes](#3-parts-list--sourcing-notes)
4. [Phase 1: Inspection & Assessment](#4-phase-1-inspection--assessment)
5. [Phase 2: Master Cylinder](#5-phase-2-master-cylinder)
6. [Phase 3: Hard Lines & Flex Hoses](#6-phase-3-hard-lines--flex-hoses)
7. [Phase 4: Front Disc Brakes](#7-phase-4-front-disc-brakes)
8. [Phase 5: Rear Drum Brakes](#8-phase-5-rear-drum-brakes)
9. [Phase 6: Parking Brake Restoration](#9-phase-6-parking-brake-restoration)
10. [Phase 7: Bleeding the Brake System](#10-phase-7-bleeding-the-brake-system)
11. [Phase 8: Testing & Break-In](#11-phase-8-testing--break-in)
12. [Troubleshooting](#12-troubleshooting)
13. [Maintenance Schedule Going Forward](#13-maintenance-schedule-going-forward)

---

## 1. Specifications & Torque Values

### Brake System Specs

| Component | Specification |
|-----------|--------------|
| **Front brakes** | Single-piston sliding caliper disc brakes |
| **Front rotor diameter** | 10.0 inches |
| **Minimum rotor thickness** | 0.815 inches |
| **Rotor runout limit** | 0.005 inches |
| **Minimum pad thickness** | 4mm (3mm absolute minimum) |
| **Rear brakes** | Single-anchor, self-adjusting drum brakes |
| **Rear drum diameter** | 9.0 inches |
| **Maximum drum diameter** | 9.060 inches (reject if over) |
| **Minimum shoe thickness** | 2mm |
| **Master cylinder bore** | 0.94 inches |
| **Brake fluid type** | DOT 3 or DOT 4 |
| **System type** | Front/rear split (not diagonal) |
| **Brake booster** | Vacuum-assisted, single diaphragm |
| **Proportioning** | Combination valve (mounted on frame rail, driver's side) |

### Torque Values

| Fastener | Torque | Notes |
|----------|--------|-------|
| Caliper mounting bolts | 80 lb-ft | These are the big ones — caliper bracket to knuckle |
| Caliper bracket bolts | 80 lb-ft | Same as above on this design |
| Caliper slide pin bolts | 25–35 lb-ft | Smaller bolts — the caliper floats on these |
| Brake hose to caliper (banjo bolt) | 23 lb-ft | New copper washers required, do NOT overtighten |
| Brake line fittings (flare nuts) | 11 lb-ft | **Critical: do NOT overtighten** — strip easily |
| Master cylinder to booster nuts | 16 lb-ft | Two nuts on firewall studs |
| Wheel cylinder mounting bolts | 12 lb-ft | Two bolts per cylinder, behind backing plate |
| Wheel lug nuts | 75–85 lb-ft | Star pattern, recheck at 50 miles |

### Critical Measurement Reference

Before you start work, you need to know your go/no-go numbers:

**Front rotors — measure with a micrometer at the thinnest point:**
- New rotor nominal thickness: ~1.000 inch (varies by brand)
- Machine-to minimum: 0.882 inches (can still turn on a lathe)
- Discard thickness: 0.815 inches (stamped on the rotor — **replace if at or below this**)

**Rear drums — measure inside diameter with a drum gauge or large caliper:**
- New drum nominal: 9.000 inches
- Machine-to maximum: 9.040 inches (can still be turned)
- Discard diameter: 9.060 inches (stamped on drum — **replace if at or above this**)

---

## 2. Tools & Supplies

### Required Tools

- [ ] Floor jack and jack stands (minimum two, four preferred)
- [ ] Wheel chocks
- [ ] Lug wrench or 3/4" socket + breaker bar
- [ ] Socket set (3/8" and 1/2" drive, metric and SAE)
- [ ] Combination wrench set (SAE — the brake system is mostly SAE)
- [ ] **Flare nut wrenches** — 3/8", 7/16", 1/2", 9/16" — **do not use open-end wrenches on brake fittings**
- [ ] C-clamp or caliper piston compression tool (for pushing front pistons back)
- [ ] Needle-nose pliers
- [ ] Brake spring tool set (for rear drums — worth the $15)
- [ ] Brake spring pliers (optional but saves knuckle skin)
- [ ] Wire brush
- [ ] Brake cleaner spray (buy 3–4 cans minimum)
- [ ] Torque wrench (ft-lb range covering 11–85 lb-ft)
- [ ] Turkey baster or syringe (for removing old fluid from master cylinder reservoir)
- [ ] Drain pan
- [ ] **Micrometer** (for rotor thickness measurement)
- [ ] Drum gauge or large inside caliper (for drum measurement)
- [ ] Brake bleeding kit (see Bleeding section for method-specific tools)
- [ ] Penetrating oil (PB Blaster preferred — apply 24 hours before starting work)
- [ ] Anti-seize compound
- [ ] High-temperature brake grease (Permatex or CRC — **not regular grease**)
- [ ] Blue threadlocker (medium strength)
- [ ] Safety glasses
- [ ] Nitrile gloves (brake fluid destroys paint and skin)

### Nice to Have

- [ ] Impact wrench (makes lug nut removal much easier)
- [ ] Brake hone (flexible ball type — for cleaning caliper bores)
- [ ] Dial indicator with magnetic base (for rotor runout measurement)
- [ ] Bench vise (for caliper rebuild work)
- [ ] Spring compressor pliers for drum brake hold-down springs
- [ ] Second person (for two-person bleeding method)

### Supplies

- [ ] DOT 4 brake fluid — **3 quarts minimum** (you will use more than you think during bleeding)
- [ ] Copper crush washers for banjo bolts (2 per caliper — always replace)
- [ ] Brake parts cleaner spray (non-chlorinated preferred)
- [ ] Shop rags / paper towels
- [ ] Zip-lock bags + marker (for labeling hardware from each corner)
- [ ] Plastic sheeting or cardboard (to protect paint from brake fluid drips)

> **Note on DOT 3 vs DOT 4:** The system spec says DOT 3 or DOT 4. I recommend DOT 4 for mountain driving. It has a higher wet and dry boiling point, which provides better fade resistance on long descents. DOT 4 is backward-compatible with DOT 3 systems. Do not mix different brands during the initial fill — pick one and use it throughout.

---

## 3. Parts List & Sourcing Notes

This list assumes a **complete refresh** — replace everything that's a wear item or rubber component regardless of apparent condition. On a 38-year-old vehicle, the rubber is degraded even if it looks okay, and the cost difference between "replace what's bad" and "replace everything" is modest compared to the labor of doing it twice.

### Always Replace (Non-Negotiable on a 38-Year-Old System)

| Part | Qty | Est. Cost | Notes |
|------|-----|-----------|-------|
| Front brake pads | 1 set (4 pads) | $30–50 | Ceramic recommended for mountain use — less fade, less dust |
| Rear brake shoes | 1 set (4 shoes) | $25–40 | Bonded preferred over riveted |
| Front flex hoses | 2 | $15–25 ea. | Rubber degrades with age — replace regardless of appearance |
| Rear flex hose | 1 | $15–20 | Single hose at rear axle junction — same age concern |
| Brake fluid | 3 qt DOT 4 | $10–15/qt | Full system flush, no reusing old fluid |
| Rear drum hardware kit | 1 set | $15–25 | All springs, clips, adjusters, hold-downs — springs fatigue over decades |
| Copper crush washers | 4 | $2–5 | Two per front caliper banjo bolt — always new |
| Rear wheel cylinders | 2 | $15–25 ea. | At 38 years old, rebuild is false economy — replace outright |

### Inspect and Likely Replace

| Part | Qty | Est. Cost | Decision Criteria |
|------|-----|-----------|-------------------|
| Front rotors | 2 | $30–45 ea. | Replace if below 0.882" (machine limit) or deeply grooved/cracked |
| Rear drums | 2 | $35–50 ea. | Replace if above 9.040" (machine limit) or cracked |
| Front calipers (loaded remanufactured) | 2 | $50–70 ea. | Replace if pistons are seized, deeply pitted, or won't retract smoothly |
| Master cylinder | 1 | $50–80 | Replace if bore is pitted, seals are leaking, or pedal slowly sinks to floor |
| Hard brake lines | varies | $60–120 (kit) | Replace any line with visible rust pitting, flaking, or bulging |
| Parking brake cables | set | $40–80 | Yours are confirmed missing/non-functional |

### Sourcing Recommendations

**RockAuto** is your primary source — good selection, fair prices, and they carry multiple quality tiers. When browsing:

- **Pads:** Wagner ThermoQuiet or Akebono ProACT (ceramic). Avoid economy/store-brand ceramics.
- **Shoes:** Wagner ThermoQuiet or Raybestos Professional Grade.
- **Rotors/Drums:** Centric Parts (C-Tek standard line is fine; Premium line if you want coated hats to resist surface rust). ACDelco Advantage also good.
- **Calipers:** If replacing, get loaded remanufactured (comes with pads, bracket, and hardware). Cardone and A1 Cardone are the main reman suppliers — they're acceptable quality for this application.
- **Wheel cylinders:** Dorman, Raybestos, or Wagner — all adequate. These are simple parts.
- **Master cylinder:** Cardone reman or Dorman new. Bench-bleed before installation (covered in guide).
- **Flex hoses:** Centric, Dorman, or Raybestos. For a premium option, stainless braided lines from companies like Rusty's Off-Road or custom brake shops provide better pedal feel and don't degrade — worth the ~$40 premium if budget allows.
- **Hard lines:** Inline Tube makes pre-bent replacement lines specifically for Jeep applications. If you can find an MJ/XJ-specific kit, it's worth the money over bending your own. Otherwise, buy nickel-copper (cunifer) brake line stock and a double-flare tool — cunifer is far easier to work with than standard steel and doesn't rust.
- **Hardware kits:** Carlson or Raybestos — make sure the kit is complete (springs, clips, adjusters, hold-downs, self-adjuster cable).

> **XJ Cherokee Interchange:** Front and rear brake components are the same between MJ Comanche and XJ Cherokee for your year range. When searching RockAuto or forums, you can use XJ Cherokee listings — there are far more of them, which means more part options and more community experience reports.

---

## 4. Phase 1: Inspection & Assessment

**Goal:** Determine the actual condition of every component before ordering parts, so you buy exactly what you need.

**Time estimate:** 2–3 hours  
**Prerequisite:** Vehicle on level ground, wheels chocked, parking brake... well, yours doesn't work, so extra wheel chocks.

### Pre-Work

- [ ] **Apply penetrating oil 24 hours before starting.** Soak all brake line fittings, caliper bolts, bleeder screws, and wheel cylinder bleeders. Then soak them again the morning of. On a Tennessee mountain truck, these will fight you.
- [ ] Lay out plastic sheeting under work areas — brake fluid destroys paint on contact.

### Front Brake Inspection

- [ ] Remove both front wheels.
- [ ] **Visual check — flex hoses:** Look for cracking, checking (fine surface cracks), swelling, abrasion, or leaks at fittings. Any visible deterioration = replace. They're 38 years old — plan on replacing them.
- [ ] **Caliper condition:** Look for fluid weeping around the piston dust boot. Push the piston back with a C-clamp (slowly) — it should retract smoothly with firm, steady pressure. If it won't move or moves in jerks, the caliper is seized and needs replacement.
- [ ] **Caliper slides:** The caliper should slide freely on its mounting pins/bracket. Grab it and try to move it in and out (perpendicular to the rotor). Stiff or frozen slides cause uneven pad wear and reduced braking.
- [ ] **Brake pad thickness:** Measure the friction material (not including the backing plate). Minimum 4mm to keep; replace if at or below.
- [ ] **Rotor thickness:** Measure with a micrometer at the thinnest point of the swept area. Record for each side. Check for deep scoring (run a fingernail across — if it catches in a groove, the rotor needs turning or replacement). Look for cracks, especially radiating from the hub area.
- [ ] **Rotor runout:** If you have a dial indicator, mount it to the knuckle and spin the rotor. Max runout is 0.005 inches. Excess runout causes pulsation.
- [ ] **Record measurements:**

| Measurement | Driver Side | Passenger Side |
|-------------|-------------|----------------|
| Pad thickness (mm) | _____ | _____ |
| Rotor thickness (inches) | _____ | _____ |
| Rotor runout (inches) | _____ | _____ |
| Caliper piston retracts? | Y / N | Y / N |
| Caliper slides freely? | Y / N | Y / N |
| Flex hose condition | _____ | _____ |

### Rear Brake Inspection

- [ ] Remove both rear wheels.
- [ ] **Remove drums.** The drums should pull straight off after removing the axle nut dust cap (if present) or simply slide off the studs. If stuck, there's usually a threaded hole in the drum face — thread a bolt in to push the drum off the hub. **Do not hammer on the drum** (you can crack it). If it's truly stuck, back off the adjuster through the slot in the backing plate.
- [ ] **Photograph everything before touching it.** The rear drum brake assembly has springs in specific positions. Take clear photos of both sides — they're your reassembly reference.
- [ ] **Shoe thickness:** Measure the friction material. Minimum 2mm.
- [ ] **Drum condition:** Measure inside diameter. Record any scoring, cracks, heat marks (blue discoloration), or out-of-round condition. A slight polished ridge at the open edge is normal.
- [ ] **Wheel cylinders:** Look for any fluid seepage around the dust boots. Pull back one dust boot gently with a pick — if you see fluid behind it, the cylinder is leaking and must be replaced. At 38 years old, just replace them regardless.
- [ ] **Self-adjuster mechanism:** Check that the star wheel adjuster turns freely and isn't seized with rust. Check the self-adjuster cable/lever for breakage.
- [ ] **Backing plate:** Check for bending, cracks, or loose mounting bolts. The shoes ride on raised pads on the backing plate — check that these aren't deeply grooved.
- [ ] **Parking brake hardware:** Assess what's present and what's missing. Document everything — you need this for the parking brake restoration phase.
- [ ] **Record measurements:**

| Measurement | Driver Side | Passenger Side |
|-------------|-------------|----------------|
| Shoe thickness (mm) | _____ | _____ |
| Drum inside diameter (inches) | _____ | _____ |
| Drum cracks/scoring? | Y / N | Y / N |
| Wheel cylinder leaking? | Y / N | Y / N |
| Self-adjuster functional? | Y / N | Y / N |
| Hardware complete? | Y / N | Y / N |
| Parking brake parts present? | _____ | _____ |

### System Inspection

- [ ] **Master cylinder:** Check fluid level and color. Dark brown/black = severely contaminated and hygroscopic — confirms full flush needed. Look for leaks at the body, at the line fittings, and where it mounts to the booster. Check for wetness on the firewall below the master cylinder (indicates rear seal leak).
- [ ] **Pedal test:** Engine off — pump the brake pedal several times, then hold firm pressure. If the pedal slowly sinks toward the floor over 30 seconds, the master cylinder has an internal bypass (failed seals) and must be replaced. If the pedal is just spongy but holds steady, the system likely has air or degraded fluid.
- [ ] **Booster test:** With the engine off, pump the brake pedal several times to deplete vacuum reserve. Hold the pedal down and start the engine. The pedal should drop noticeably as vacuum assist kicks in. If it doesn't drop, the booster or its vacuum supply has a problem.
- [ ] **Hard lines:** Get under the vehicle and trace every steel brake line from the master cylinder to the combination valve, and from there to each wheel. You're looking for rust scaling, pitting, kinks, bulging, leaks at fittings, or areas where the line is rubbing on moving parts. **Pay special attention to lines routed along the frame rails** — road salt (even in Tennessee, they brine the mountain roads) and moisture collect there.
- [ ] **Combination valve:** Located on the driver's side frame rail. Check for leaks. This valve contains the proportioning function and a pressure differential switch that triggers the brake warning light. Don't disassemble it — if it's leaking, replace the whole unit.

### ✅ CHECKPOINT: Inspection Complete

At this point you should have a clear picture of what needs replacement. Here's the decision framework:

| Component | Replace If... |
|-----------|---------------|
| Pads/shoes | Below minimum thickness, glazed, contaminated with fluid, or crumbling |
| Rotors | Below machine-to minimum, cracked, or severely scored |
| Drums | Above machine-to maximum, cracked, or severely scored |
| Calipers | Piston seized, deeply pitted bore, won't retract, or leaking |
| Wheel cylinders | **Replace regardless** — 38 years old, not worth the risk |
| Flex hoses | **Replace regardless** — rubber is age-degraded |
| Hard lines | Any visible pitting, scaling, or corrosion that has compromised wall thickness |
| Master cylinder | Internal bypass (sinking pedal), external leak, or pitted bore |
| All springs/hardware | **Replace regardless** — springs fatigue over decades |
| Brake fluid | **Replace regardless** — complete flush with new DOT 4 |

**Order your parts now.** While waiting for delivery, move on to the parking brake assessment and cleaning/prep work.

---

## 5. Phase 2: Master Cylinder

**Do the master cylinder first.** Everything downstream depends on it. If the master cylinder has failed seals, no amount of bleeding will give you a good pedal.

### 5A: If Replacing the Master Cylinder

**Time estimate:** 1–1.5 hours plus bench-bleeding time

#### Bench-Bleed the New Master Cylinder (MANDATORY)

This step is not optional. A dry master cylinder will trap air in its bore and you will never get a good pedal.

1. [ ] Clamp the new master cylinder body in a vise (gently — don't crush the casting). Mount it level or tilted slightly so the ports are the high point.
2. [ ] Thread the included bench-bleed fittings (plastic fittings with short hoses) into the outlet ports. Route the hoses back up into the reservoir. If no fittings were included, use short lengths of brake line bent into a U-shape routed back to the reservoir.
3. [ ] Fill the reservoir with fresh DOT 4 fluid.
4. [ ] Using a blunt dowel, wooden handle, or old pushrod, slowly push the piston in and let it return. You'll see bubbles coming out of the hose ends into the reservoir.
5. [ ] Continue until no more bubbles appear — typically 15–25 full strokes.
6. [ ] Cap or plug the outlet ports to prevent air re-entry during installation. Keep the reservoir full.

#### Remove Old Master Cylinder

1. [ ] Place rags/cardboard under the master cylinder to catch fluid.
2. [ ] Use a turkey baster to remove as much fluid as possible from the old reservoir.
3. [ ] Disconnect brake lines from the master cylinder. **Use flare nut wrenches only.** These fittings are likely corroded — go slowly, apply penetrating oil, and use a proper 6-point flare nut wrench. Rounding these fittings creates serious problems.
4. [ ] Cap or plug the open brake lines immediately to prevent contamination and fluid loss.
5. [ ] Remove the two mounting nuts from the firewall studs (16 lb-ft — they're not very tight).
6. [ ] Pull the master cylinder forward off the booster pushrod. The pushrod stays with the booster.
7. [ ] Inspect the booster pushrod tip and the rear of the master cylinder bore for damage.

#### Install New Master Cylinder

1. [ ] Check that the pushrod length is correct. The pushrod should just barely contact the master cylinder piston with no free play and no preload. If there's a gap, the pedal will have excessive travel. If there's preload, the brakes may drag (the master cylinder won't fully release).
2. [ ] Slide the new master cylinder onto the booster studs.
3. [ ] Install and torque the mounting nuts to **16 lb-ft**.
4. [ ] Remove the plugs from the bench-bleed fittings and quickly connect the brake lines. This is where a helper is nice — have them hold rags to catch drips.
5. [ ] **Tighten brake line fittings to 11 lb-ft** — snug, not gorilla-tight. These are brass or soft steel; they seal on the flare face, not by brute force.
6. [ ] Fill the reservoir to the MAX line.
7. [ ] Have someone slowly press and release the brake pedal while you watch the fittings for leaks. The pedal will be very soft at this point — that's normal, the system is full of air downstream.

### 5B: If Keeping the Existing Master Cylinder

If inspection showed it holds pressure (pedal doesn't sink) and there are no external leaks:

1. [ ] Remove as much old fluid as possible from the reservoir with a turkey baster.
2. [ ] Wipe out the reservoir with a lint-free rag.
3. [ ] Fill with fresh DOT 4.
4. [ ] The old fluid will be flushed out during the system bleeding phase.

### ✅ CHECKPOINT: Master Cylinder

- [ ] Master cylinder is mounted and lines are connected
- [ ] No leaks at any fitting
- [ ] Reservoir is full
- [ ] Pedal has *some* resistance (even if soft — the rest of the system isn't bled yet)

---

## 6. Phase 3: Hard Lines & Flex Hoses

### Hard Line Assessment

If your inspection showed corroded hard lines, you have three options:

**Option A: Pre-bent replacement kit** — Easiest if you can find one for the MJ/XJ platform. Inline Tube and similar companies make them. Lines come shaped to match the factory routing with correct fittings already installed.

**Option B: Custom fabrication with cunifer (copper-nickel) line** — Buy bulk 3/16" (most common) and 1/4" cunifer brake line, a double-flare tool, and the correct fittings. Cunifer bends easily by hand, doesn't rust, and double-flares cleanly. This is the best option if you're doing selective replacement (only replacing the bad sections). 

**Option C: Standard steel line** — Cheapest, but harder to work with (requires a tube bender) and will eventually rust again. Acceptable if cost is tight.

> **⚠️ IMPORTANT: This vehicle uses SAE double-flare fittings, NOT bubble/ISO flares.** Make sure your flare tool is set for SAE double-flare. A single flare or wrong flare type WILL leak under pressure. If you're not confident in your flaring, have a brake shop make the flares — most will do it for minimal cost.

### Hard Line Replacement Procedure

1. [ ] Photograph the existing routing before removing anything.
2. [ ] Work one line at a time — don't remove them all at once or you'll lose the routing reference.
3. [ ] Apply penetrating oil to all fittings. Wait. Apply again. Then wait longer.
4. [ ] Use flare nut wrenches to loosen fittings. If a fitting won't break loose, **STOP** — don't round it. Apply heat with a small torch (carefully, away from rubber and fuel lines) or use a fitting removal socket that grips the flats. A rounded brake fitting is a serious problem.
5. [ ] Remove the old line and use it as a bending template for the new one.
6. [ ] If making new flares, deburr the cut end inside and out, then flare. Inspect the flare before installing — it should be a smooth, even double-flare with no cracks.
7. [ ] Route the new line, secure in the original clips/brackets.
8. [ ] **Tighten fittings to 11 lb-ft** — hand-tight plus about 1/6 turn with a wrench. The flare does the sealing.

### Flex Hose Replacement

Flex hoses connect the hard lines on the chassis to the components on the moving suspension/axle. There are three: one to each front caliper, and one to the rear axle (at a junction block mounted on the axle or frame crossmember).

1. [ ] Unscrew the hard line fitting from the hose end. Use two wrenches — one on the hose fitting, one on the hard line fitting — to avoid twisting the hard line.
2. [ ] Remove the hose-to-bracket clip (usually a horseshoe clip).
3. [ ] Unscrew the hose from the caliper (front) or from the junction block (rear). On the front calipers, this is usually a banjo bolt with two copper washers.
4. [ ] Install the new hose in reverse order. **New copper crush washers** on all banjo bolts — reusing old washers causes leaks.
5. [ ] Make sure the hose is not twisted and has clearance for full suspension travel and full steering lock. Turn the wheels lock-to-lock and bounce the suspension — the hose should never contact the tire, spring, or other components.
6. [ ] Torque banjo bolts to **23 lb-ft**. Torque hard line fittings to **11 lb-ft**.

### ✅ CHECKPOINT: Lines & Hoses

- [ ] All replaced lines are routed correctly and secured in clips
- [ ] All fittings are torqued
- [ ] Flex hoses have clearance at full suspension travel and full steering lock
- [ ] No kinks, sharp bends, or contact points
- [ ] Reservoir is still full (top up as needed — fluid drains into the new lines)

---

## 7. Phase 4: Front Disc Brakes

**Do one side at a time.** This lets you use the untouched side as a reference for reassembly.

### Caliper Removal

1. [ ] Open the bleeder screw slightly (8mm or 5/16" wrench). This allows the piston to push back without forcing contaminated fluid back into the master cylinder and ABS system... well, you don't have ABS, but the principle is good practice — it avoids contaminating the master cylinder.
2. [ ] Push the caliper piston back with a C-clamp. Put a flat piece of metal or the old inner pad against the piston face to distribute force evenly. Push slowly and steadily.
3. [ ] Close the bleeder.
4. [ ] Remove the caliper slide pin bolts (two per caliper). These may be Allen/hex socket or standard hex — varies by OEM vs. aftermarket caliper bracket.
5. [ ] Lift the caliper off the rotor. **Do not let it hang by the brake hose** — hang it from the spring or frame with a wire/bungee cord.
6. [ ] Remove the old pads from the caliper bracket.

### Caliper Inspection / Service

**If keeping the calipers:**
1. [ ] Inspect the caliper bore. Retract the dust boot and look inside. Minor surface discoloration is okay. Pitting, deep scoring, or corrosion in the bore = replace the caliper.
2. [ ] Clean the slide pins. Remove them from the bracket, clean off old grease with brake cleaner, and inspect for pitting or wear. They should be smooth and shiny.
3. [ ] Apply fresh high-temp brake grease to slide pins before reassembly. This is critical — sticky slide pins are the #1 cause of uneven pad wear and brake pull.
4. [ ] Inspect the dust boots on both the piston and slide pins. Replace if torn or degraded.

**If replacing the calipers:**
- Loaded remanufactured calipers come with new pads, hardware, and pins already installed. Transfer the old bracket to the new caliper if needed, or use the new bracket if one is included.

### Rotor Removal & Replacement

1. [ ] Remove the caliper bracket from the steering knuckle (two bolts, 80 lb-ft). Set aside.
2. [ ] The rotor on this vehicle is a slip-on design — it sits on the hub and is held in place by the wheel. It should pull straight off. If stuck, thread two bolts into the threaded holes in the rotor hat (if present) and tighten evenly to push it off. Alternatively, a few taps with a dead-blow hammer on the hat (not the braking surface) may free it.
3. [ ] If installing new rotors, clean the preservative oil off the braking surfaces with brake cleaner. Wipe until the rag comes away clean. Residual oil will contaminate new pads.
4. [ ] Inspect the hub face for rust buildup — clean with a wire brush or Scotch-Brite pad. Rust here causes rotor runout.
5. [ ] Install the new rotor. Optionally, use a lug nut threaded on by hand to hold it in place during caliper reinstallation.

### Pad Installation & Caliper Reassembly

1. [ ] Apply a thin film of brake grease (disc brake quiet / anti-squeal) to the pad backing plates where they contact the caliper bracket ears. **Never put grease on the friction surface.**
2. [ ] Install the anti-rattle clips/shims on the caliper bracket. New pads usually come with new clips — use them.
3. [ ] Seat the pads in the bracket.
4. [ ] Slide the caliper over the rotor and pads.
5. [ ] Install and torque slide pin bolts to **25–35 lb-ft**.
6. [ ] Reconnect the brake hose if it was disconnected. New copper washers on the banjo bolt, torque to **23 lb-ft**.
7. [ ] Verify the caliper slides freely on its pins — push it back and forth by hand.

### Repeat for the Other Side

### ✅ CHECKPOINT: Front Brakes

- [ ] Both sides reassembled with new pads, serviced/new calipers, and new/resurfaced rotors
- [ ] Caliper slides move freely
- [ ] Brake hoses connected and torqued
- [ ] No brake fluid leaks
- [ ] Caliper not contacting anything during suspension travel
- [ ] Top up the master cylinder reservoir — it dropped when you pushed the pistons back

---

## 8. Phase 5: Rear Drum Brakes

**This is the section most people dread, and where the Chilton/Haynes photos are worth their weight in gold.** The spring arrangement looks complex, but it's logical once you understand it. Work one side at a time, keep the other assembled as reference.

### ⚠️ CRITICAL: Asbestos Warning

Pre-1990s brake shoes may contain asbestos. **Do not blow out brake drums with compressed air.** Use a damp rag or brake cleaner spray to wet the dust before wiping. Work outdoors or in a well-ventilated space.

### Drum Removal

1. [ ] The drum should slide off the studs after removing the wheel. If it's stuck:
   - Back off the shoe adjuster (there's an access slot in the backing plate — use a flat screwdriver to turn the star wheel).
   - Use the threaded push-off holes in the drum face if available.
   - Moderate taps with a dead-blow hammer around the drum edge.
   - **Do not pry between the drum and backing plate** — you'll damage the seal surface.

### Disassembly (READ ALL STEPS BEFORE STARTING — AND PHOTOGRAPH EVERYTHING)

The rear drum brake assembly consists of:
- Two brake shoes (leading and trailing — they're different, with the longer lining toward the rear)
- Upper and lower return springs
- Hold-down springs and pins (two per side — they hold each shoe to the backing plate)
- Self-adjuster assembly (star wheel + cable/lever)
- Parking brake lever and strut (attaches to one shoe)

**Disassembly order (easiest to hardest):**

1. [ ] **Photograph the assembly.** Both a straight-on view and close-ups of the spring routing and adjuster mechanism. This is your reassembly reference. Print the photos or have them on your phone.
2. [ ] Remove the upper (shoe-to-shoe) return spring. This is the strongest spring. Hook the brake spring tool onto it and lever it off its anchor pin.
3. [ ] Remove the lower return spring.
4. [ ] Remove the self-adjuster cable and spring from the anchor pin and adjuster lever.
5. [ ] Remove the adjuster lever and star wheel assembly. Note which way the star wheel threads (they're different left and right — the star wheel should turn to expand when the adjuster lever trips it).
6. [ ] Remove the hold-down springs. Press in, turn 90°, and release. Spring tool makes this much easier than pliers.
7. [ ] Remove the shoes from the backing plate.
8. [ ] Disconnect the parking brake lever from the rear shoe (it's attached with a C-clip or pin).
9. [ ] Bag and label all hardware from each side separately.

### Wheel Cylinder Replacement

Since you're replacing the wheel cylinders (and you should — they're $15-25 each and 38 years old):

1. [ ] Disconnect the brake line fitting at the back of the wheel cylinder. **Flare nut wrench.** Cap the open line.
2. [ ] Remove the two mounting bolts (12 lb-ft) from behind the backing plate.
3. [ ] Remove the old cylinder.
4. [ ] Clean the backing plate mounting surface.
5. [ ] Install the new cylinder. Torque bolts to **12 lb-ft**.
6. [ ] Connect the brake line. Torque to **11 lb-ft**.

### Backing Plate Service

1. [ ] Clean the backing plate thoroughly with brake cleaner.
2. [ ] Inspect the raised pads where the shoes ride. If they're deeply grooved, file them smooth.
3. [ ] Apply a thin smear of high-temp brake grease to the six raised pads. This reduces noise and allows the shoes to slide smoothly. **Thin smear only** — excess grease can contaminate the shoe lining.

### Reassembly

**Work in reverse order of disassembly. Use your photographs as reference.**

1. [ ] Attach the parking brake lever to the rear shoe.
2. [ ] Install the shoes onto the backing plate. The shoe with the **longer lining faces the rear** of the vehicle (trailing shoe). Engage the shoes on the wheel cylinder pistons and the anchor pin at the top.
3. [ ] Install the hold-down springs and pins.
4. [ ] Install the star wheel adjuster. **Verify correct side** — the adjuster is threaded so that it expands when the star wheel turns forward (direction of wheel rotation). Left and right adjusters are different.
5. [ ] Install the adjuster lever and cable.
6. [ ] Install the lower return spring.
7. [ ] Install the upper return spring. This is the hardest step — the brake spring tool is essential.
8. [ ] Verify the self-adjuster operates: pull the adjuster cable/lever and verify the star wheel clicks one notch. If it doesn't, the cable or lever is routed incorrectly.

### Initial Shoe Adjustment

1. [ ] Turn the star wheel adjuster to expand the shoes until the drum barely slides on with light drag.
2. [ ] Then back off about 10 clicks of the star wheel — the drum should spin freely with just a hint of contact (you might hear a very light swish).
3. [ ] The self-adjuster will fine-tune from here during driving.

### Install the Drum

1. [ ] Slide the drum on. If it won't go, the shoes are adjusted too far out — back off the star wheel.
2. [ ] Spin the drum by hand. It should rotate freely with at most a light, even rubbing sound.

### Repeat for the Other Side

### ✅ CHECKPOINT: Rear Brakes

- [ ] Both sides reassembled with new shoes, hardware, and wheel cylinders
- [ ] Self-adjusters function correctly (pull cable → star wheel clicks)
- [ ] Drums installed and rotate freely
- [ ] Brake lines connected and torqued
- [ ] No fluid leaks at wheel cylinders or line fittings
- [ ] Master cylinder reservoir topped up

---

## 9. Phase 6: Parking Brake Restoration

Your parking brake is confirmed missing/non-functional. On a vehicle doing twice-daily mountain runs, this is not optional — it's a safety necessity and a legal requirement.

### System Overview

The MJ/XJ parking brake is a cable-actuated drum-in-disc... actually, on this truck with rear drum brakes, the parking brake is integrated into the rear drum brake system. The parking brake lever (attached to the rear shoes) spreads the shoes mechanically via a strut bar, independent of the hydraulic system. This is why it works even if you lose hydraulic pressure — it's your emergency backup.

The system consists of:
- Parking brake handle/lever assembly (in the cab, between the seats or under the dash)
- Front cable (from the lever to the equalizer)
- Equalizer (splits one cable into two)
- Rear cables (from equalizer to each rear brake's parking brake lever)

### Assessment

1. [ ] Determine what's missing. Start at the handle in the cab and trace the cable path rearward.
2. [ ] The handle is usually mounted to the floor on the driver's side, connected to a front cable that runs under the vehicle to an equalizer bracket on the frame, then splits to two rear cables routed to each rear brake.
3. [ ] Check the parking brake levers on the rear brake assemblies — you should have installed these during rear brake reassembly.

### Replacement

1. [ ] Source complete cable set (front + both rears). The handle assembly may need to come from a junkyard MJ or XJ.
2. [ ] Route the front cable from the handle, through the floor grommet, and under the vehicle to the equalizer mounting point.
3. [ ] Install the equalizer bracket to the frame.
4. [ ] Route rear cables from the equalizer to each rear brake backing plate, through the cable guides and support brackets.
5. [ ] Connect the rear cables to the parking brake levers on each rear brake assembly.

### Adjustment

1. [ ] Set the rear shoe adjustment first (should already be done in Phase 5).
2. [ ] Pull the parking brake handle to the fully applied position and count the clicks. Proper adjustment is typically **5–10 clicks** to full application.
3. [ ] Adjust at the equalizer: tighten the adjusting nut until you get the correct number of clicks.
4. [ ] With the parking brake released, the rear wheels should spin freely with no drag.
5. [ ] With the parking brake fully applied, the rear wheels should not turn by hand.
6. [ ] **Test on a hill.** With the parking brake set, the vehicle in neutral, and your foot OFF the brake pedal, the vehicle should hold on a moderate grade. Test somewhere safe with a plan B (curb, wheel chock, buddy in the driver's seat).

### ✅ CHECKPOINT: Parking Brake

- [ ] All cables installed and routed
- [ ] Handle operates smoothly through full travel
- [ ] 5–10 clicks to full engagement
- [ ] No wheel drag when released
- [ ] Wheels locked when fully applied
- [ ] Holds on a test hill

---

## 10. Phase 7: Bleeding the Brake System

**This is the section that makes or breaks the entire job.** If there is any air left in the system, the pedal will be soft and braking performance will be compromised. On mountain grades, that can be fatal. Do this right.

### Bleeding Order

**The 1986 MJ uses a front/rear split master cylinder (not diagonal split).** The bleeding order is farthest from the master cylinder first:

```
1. Right Rear (passenger side)
2. Left Rear (driver side)
3. Right Front (passenger side)
4. Left Front (driver side)
```

**Always follow this order.** It ensures air moves progressively toward the master cylinder and out.

### Method Selection

There are four methods. Each has pros and cons for this vehicle. Pick the one that matches your tooling and helper situation.

---

### Method A: Two-Person Pump-and-Hold (Most Reliable)

**Requires:** A helper you trust to follow instructions precisely.

This is the gold standard for old-school hydraulic brakes with no ABS. It's simple, reliable, and doesn't require special tools beyond a wrench and a length of clear tubing.

**Setup:**
- Clear vinyl tubing (3/16" ID) fitted snugly over the bleeder screw
- Container partially filled with brake fluid (submerge the tube end to prevent air re-entry)
- Correct wrench for bleeder screws (typically 5/16" or 8mm)
- Fresh DOT 4 in the reservoir — **check the level after every 4–6 pumps and top up**

**The procedure, at each wheel in order (RR → LR → RF → LF):**

1. Helper presses the brake pedal slowly, all the way to the floor.
2. Helper calls out **"DOWN"** and holds the pedal down firmly.
3. You open the bleeder screw approximately 1/4 turn. Fluid (and air bubbles) will push out into the tube.
4. Close the bleeder screw.
5. You call out **"CLOSED"**.
6. **Only after you confirm the bleeder is closed**, the helper slowly releases the pedal all the way up.
7. Wait 3–5 seconds for the master cylinder to refill.
8. Repeat.

**The communication protocol is critical.** If the helper releases the pedal while the bleeder is open, air gets sucked back into the system and you start over. Agree on the call-and-response before starting, and don't deviate from it.

**Continue at each wheel until:**
- No more air bubbles appear in the clear tubing
- The fluid running through the tube is clean (not dark/contaminated)
- Typically 8–15 cycles per wheel, more if lines were opened or replaced

**⚠️ CRITICAL: Check and refill the master cylinder reservoir frequently.** If it runs dry, you introduce air into the master cylinder and have to start the entire process over from the beginning, including re-bench-bleeding the master cylinder. Check it after every 4–6 pumps. Keep it above the MIN line at all times.

---

### Method B: Gravity Bleeding (Slowest, But Solo-Friendly)

**Requires:** Patience. Lots of patience.

1. Fill the reservoir to MAX.
2. Open the bleeder at the first wheel (RR) and attach the clear tube routed to a catch container.
3. Wait. Gravity pulls the fluid down and pushes air out.
4. When fluid flows in a steady stream with no bubbles, close the bleeder.
5. Top up the reservoir and move to the next wheel.

**Pros:** Can't accidentally suck air back in. No helper needed.
**Cons:** Slow — can take 20+ minutes per wheel. May not fully purge air from high spots in the line routing.

**Best for:** Initial fill of a completely dry system (like after hard line replacement), followed by pressure or pump bleeding to finish.

---

### Method C: Vacuum Bleeding (Solo-Friendly, Moderate Speed)

**Requires:** Hand-held vacuum bleeder pump (Mityvac or similar, ~$30–50 at Harbor Freight)

1. Fill the reservoir to MAX.
2. Attach the vacuum bleeder to the bleeder screw at the first wheel.
3. Open the bleeder.
4. Pump the vacuum tool to draw fluid through the system.
5. Watch for air bubbles in the tube.
6. When clear fluid flows with no bubbles, close the bleeder.

**Pros:** One-person operation, faster than gravity.
**Cons:** Can draw air past the bleeder screw threads (giving you false air bubbles that aren't actually in the system). Apply a smear of grease around the bleeder threads to reduce this. Some people chase bubbles forever with a vacuum bleeder because of thread seepage — if bubbles won't stop after 20+ pumps, switch to Method A to verify.

---

### Method D: Pressure Bleeding

**Requires:** Pressure bleeder tool with the correct adapter cap for your master cylinder reservoir (~$50–80 for a decent one).

1. Fill the pressure bleeder with fresh fluid and pressurize to 10–15 PSI.
2. Attach to the master cylinder reservoir.
3. Open bleeder at first wheel — fluid pushes through under pressure.
4. Close when clear and bubble-free.
5. Move to next wheel.

**Pros:** Fast, consistent, one-person operation. Reservoir can't run dry (the pressure tank feeds it).
**Cons:** Cost of the tool. Need the correct adapter cap.

---

### Recommended Approach for Mad Maxine

Given that you're doing a **complete system refresh** with potentially new hard lines, new flex hoses, new wheel cylinders, and possibly a new master cylinder — the system will be completely dry in sections. I recommend this combined approach:

1. **Start with gravity bleed** to get initial fluid into the empty lines (especially if you replaced hard lines). This gets the bulk of the air out without risk.
2. **Finish with Method A (two-person pump-and-hold)** to purge the remaining air. This is the most reliable method for getting the last stubborn bubbles out.

### Post-Bleeding Verification

This is not optional. Do all of these:

- [ ] **Pedal feel:** The pedal should be firm and high — it should engage within the first 1/3 of pedal travel with the engine running (vacuum assist active). If the pedal is soft, low, or spongy, there's still air in the system. Bleed again.
- [ ] **Pedal hold test:** With the engine running, press the pedal firmly and hold for 60 seconds. It should not sink or fade. If it slowly drops, the master cylinder has an internal leak (even a new one can be defective — rare but it happens).
- [ ] **Check every fitting, bleeder, and hose connection for leaks.** Wipe everything dry with a rag, pump the brakes firmly several times, then inspect every fitting with a flashlight.
- [ ] **Reservoir level:** Fill to MAX line. Do not overfill.
- [ ] **Bleeder screws:** Verify all four are snug and capped (dust caps prevent corrosion of the bleed screw for next time).

### ✅ CHECKPOINT: Bleeding Complete

- [ ] Pedal is firm and high
- [ ] Pedal holds steady under sustained pressure
- [ ] No leaks anywhere
- [ ] Clean fluid at all four wheels
- [ ] Reservoir at proper level
- [ ] All bleeders closed and capped
- [ ] No fluid on any painted surfaces (clean any drips immediately)

---

## 11. Phase 8: Testing & Break-In

### Pre-Drive Static Test

**Before moving the vehicle:**

1. [ ] Engine off — pump the brake pedal 20–30 times to seat the pads and shoes against the rotors and drums. The pedal should get progressively firmer.
2. [ ] Start the engine — confirm the pedal firms up further with vacuum assist.
3. [ ] Check under the vehicle one more time for leaks.
4. [ ] Verify the parking brake holds (rear wheels don't turn with brake applied).

### Low-Speed Testing (Parking Lot or Flat Gravel Road)

1. [ ] Drive slowly (5 mph) and apply the brakes gently. The vehicle should stop smoothly and track straight.
2. [ ] Gradually increase speed to 15–20 mph and make moderate stops. Feel for pulsation, pulling, or noise.
3. [ ] Make 5–10 moderate stops from 20 mph.
4. [ ] **Stop and check for leaks again.** Get under the vehicle and look at every fitting.
5. [ ] Check that the wheels aren't hot when the brakes are released — a hot wheel with the brakes off means a dragging caliper or improperly adjusted drums.

### Break-In Procedure (Bed the Pads and Shoes)

New pads and shoes need to be bedded to the rotor/drum surface for optimal performance. This transfers a layer of friction material to the mating surface, creating a proper contact patch.

**For ceramic pads (recommended):**

1. From 35 mph, make 8–10 moderate stops (not full stops — slow to about 5 mph, then accelerate again). Don't come to a complete stop with hot brakes, as this can imprint pad material unevenly on the rotor.
2. Then make 3–4 harder stops from 40 mph down to 10 mph.
3. Drive at moderate speed for 5 minutes to cool the brakes without stopping.
4. The brakes may smoke slightly and smell during break-in — this is normal.
5. Avoid heavy braking for the first 100–200 miles while the bed-in completes.

### Mountain Driving Readiness Test

**Before trusting this system on your 10-mile mountain grade:**

1. [ ] After break-in is complete, find a moderate hill and make several controlled stops from increasing speeds.
2. [ ] Practice engine braking in a lower gear on a descent — this truck's AX5 5-speed gives you options. Use 3rd or 2nd gear on steeper grades to reduce brake thermal load.
3. [ ] After a sustained descent, check for brake fade (pedal gets soft or travels further under braking). A properly refreshed system with ceramic pads should resist fade well, but know what it feels like before you need it.
4. [ ] Check all wheels for excessive heat after the descent. Warm is normal. Too-hot-to-touch means something is dragging.

### ✅ FINAL CHECKPOINT: System Complete

- [ ] Firm, high pedal with good modulation
- [ ] Vehicle stops straight with no pull
- [ ] No pulsation or vibration
- [ ] No abnormal noises
- [ ] No leaks after testing
- [ ] Parking brake holds on a grade
- [ ] Pads and shoes bedded in
- [ ] Comfortable with brake feel at various speeds
- [ ] Confident for mountain driving

---

## 12. Troubleshooting

### Pedal Goes to the Floor
| Possible Cause | Diagnosis | Fix |
|----------------|-----------|-----|
| Air in the system | Pedal improves when pumped rapidly | Re-bleed the entire system |
| Master cylinder failure | Pedal slowly sinks under steady pressure | Replace master cylinder |
| Brake fluid leak | Visible fluid loss, low reservoir | Find and fix the leak, then re-bleed |
| Rear shoes out of adjustment | Excessive pedal travel | Adjust star wheels |

### Pedal Feels Spongy but Doesn't Sink
| Possible Cause | Diagnosis | Fix |
|----------------|-----------|-----|
| Air trapped in a high spot | Common after line replacement | Re-bleed, try tapping lines with a wrench handle during bleeding to dislodge bubbles |
| Flex hose expanding under pressure | Old rubber hose that passed visual inspection | Replace with new (or braided stainless) |
| Drum brakes out of adjustment | Excessive travel before shoes contact drum | Adjust star wheels, verify self-adjusters work |

### Brakes Pull to One Side
| Possible Cause | Diagnosis | Fix |
|----------------|-----------|-----|
| Seized caliper or slide pin | One side hotter than the other after stop | Clean/rebuild or replace caliper; clean and lube slide pins |
| Contaminated pad or shoe | Fluid or grease on friction surface | Replace the contaminated pad/shoe — don't try to clean it |
| Mismatched friction material | Different brands or types side-to-side | Always install matched sets |
| Collapsed flex hose | Acts as a one-way valve — fluid gets in but can't return | Replace the flex hose |

### Brakes Drag (Wheels Don't Spin Freely)
| Possible Cause | Diagnosis | Fix |
|----------------|-----------|-----|
| Master cylinder pushrod too long | Slight preload on master cylinder prevents full release | Adjust pushrod length — slight free play needed |
| Caliper piston not retracting | Corroded bore or swollen seal | Rebuild or replace caliper |
| Rear shoes over-adjusted | Drum barely fits or doesn't turn freely | Back off star wheel adjuster |
| Parking brake not fully releasing | Cable sticking or adjusted too tight | Check cable routing, lubricate, adjust |
| Collapsed flex hose | Traps pressure at the wheel | Replace the flex hose |

### Brake Noise
| Noise | Likely Cause | Fix |
|-------|-------------|-----|
| High-pitched squeal | Vibration between pad and rotor — missing anti-squeal shims or brake grease on pad backing | Apply brake grease to pad backs; install shims |
| Grinding/metal-on-metal | Pads or shoes worn to backing plate | Replace immediately — also inspect rotor/drum for damage |
| Rhythmic thumping | Warped rotor or out-of-round drum | Resurface or replace |
| Clicking from rear | Loose or broken return spring or adjuster | Remove drum and inspect hardware |

### Brake Warning Light On
| Possible Cause | Diagnosis | Fix |
|----------------|-----------|-----|
| Low fluid in reservoir | Check level | Top up and find the leak |
| Pressure differential | Uneven pressure between front and rear circuits (usually after line work) | Bleed system thoroughly — the combination valve shuttle may need to re-center |
| Parking brake engaged | Check handle position | Release parking brake |
| Faulty switch | Light stays on with all brakes working properly | Check combination valve switch and wiring |

> **Note on the combination valve:** After major brake work, the differential pressure shuttle inside the combination valve can get displaced to one side, keeping the warning light on. To re-center it: have a helper press the brake pedal firmly, then crack the bleeder on the side that was most recently worked on to let a small amount of fluid out. This should allow the shuttle to re-center. If the light persists, bleed the entire system again.

---

## 13. Maintenance Schedule Going Forward

Once the brake system refresh is complete:

| Interval | Action |
|----------|--------|
| **Every drive** | Note pedal feel — any change means investigate immediately |
| **Monthly** | Check fluid level in reservoir; inspect under vehicle for leaks |
| **Every 6 months** | Visual inspection of pad thickness (through wheel spokes), hose condition, and line condition |
| **Every 2 years** | Complete brake fluid flush (DOT 4 absorbs moisture over time, reducing boiling point) |
| **Every 30,000 miles** | Full brake inspection — remove wheels, measure pads/shoes/rotors/drums |
| **As needed** | Clean and re-lube caliper slide pins every time you have the wheels off |

### Mountain Driving Tips for Brake Longevity

- **Engine brake aggressively.** Use 3rd or 2nd gear on steep descents — let the engine do the work and save the brakes for speed corrections. This is especially important with the 2.5L, which has plenty of engine braking resistance in lower gears.
- **Don't ride the brakes.** Apply firm braking to slow down, then release and let the brakes cool. Repeated light braking on a long descent overheats the system faster than intermittent firm stops.
- **If you smell brakes, you're overheating.** Pull over and let them cool. Continuing to drive with overheated brakes risks boiling the fluid and losing all braking.
- **Test your pedal periodically on descents.** A light tap confirms you still have brakes. Don't wait until you need them to find out.

---

## Notes for ComancheClub.com Community

This guide was written for a specific 1986 MJ with the 2.5L I4, AX5, and Dana 30/35 axles, but the brake system is essentially identical across the MJ Comanche and XJ Cherokee lines from 1984–1990 (and very similar through 2001 for the XJ). The procedures, specifications, and torque values should apply broadly to any MJ or XJ with front disc / rear drum brakes.

Key differences to watch for between model years:
- 1990+ XJ/MJ may have slightly different caliper bracket designs
- ABS-equipped vehicles (later XJs) have additional considerations for bleeding
- 1997+ XJ went to rear disc brakes on some models
- Rotor and drum specifications can vary — **always check the stampings on your specific parts**

If you find errors or have corrections, please share them with the community. Brake information must be accurate.

---

*Guide prepared as part of the "Mad Maxine" 1986 Jeep Comanche MJ restoration project.*  
*February 2026*
