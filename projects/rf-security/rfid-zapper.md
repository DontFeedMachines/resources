---
title: "RFID Zapper"
description: "Permanently kill passive RFID chips using an EMP pulse."
---

Passive RFID chips are embedded in passports, credit cards, retail clothing tags, and transit cards. You may not want these items constantly broadcasting a unique ID to any scanner you walk past.

The **RFID Zapper** uses the flash capacitor from a disposable camera connected to a copper coil. When triggered, it induces a massive voltage spike in the target RFID chip's antenna, permanently frying the silicon logic gate.

## Zap Procedure

<Steps>
1. **Charge:** Press the charge button until the neon indicator lamp glows solid (approx 300V).
2. **Position:** Place the target card/tag directly against the copper coil.
3. **Discharge:** Press the trigger button. You may hear a small "pop".
4. **Verify:** Use your smartphone's NFC reader to confirm the chip is dead.
</Steps>

:::danger[High Voltage Hazard]
The capacitor inside this device holds a lethal charge (300V+). If you are building this from the `BOM_and_Schematic.md`, **do not touch the capacitor leads under any circumstances.** Always discharge the capacitor safely before opening the case.
:::
