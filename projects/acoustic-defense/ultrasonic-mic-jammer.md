---
title: "Ultrasonic Mic Jammer"
description: "Array of ultrasonic transducers designed to overload smartphone MEMS microphones."
---

Most modern smart speakers and smartphones use MEMS (Micro-Electro-Mechanical Systems) microphones. These microphones have a hidden vulnerability: they are highly sensitive to ultrasonic frequencies (above 20kHz) that humans cannot hear.

By generating loud, chaotic ultrasonic noise, this jammer causes the MEMS membrane to distort non-linearly, effectively bleeding the ultrasonic noise down into the audible spectrum *inside the microphone's own circuitry*. To the device, the room sounds like deafening static; to you, the room sounds completely silent.

## Firmware Configuration

The device is controlled by an ESP32 which modulates the ultrasonic carrier wave. You can flash the firmware using the provided source tree:

<FileTree>
- firmware/
  - src/
    - **main.cpp** (Core modulation logic)
    - **web_ui.cpp** (Local captive portal)
  - platformio.ini
- hardware/
  - pcb_gerbers.zip
</FileTree>

:::note
The jamming signal must be swept between 24kHz and 28kHz to ensure it hits the resonant frequency of whatever specific MEMS microphones happen to be in the room.
:::
