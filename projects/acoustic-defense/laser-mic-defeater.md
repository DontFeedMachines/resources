---
title: "Laser Mic Defeater"
description: "Piezoelectric window transducers that generate localized acoustic noise to jam laser microphones."
sidebar:
  order: 2
---

A **Laser Microphone** works by shining an invisible infrared laser at a window and reading the microscopic vibrations caused by sound waves (speech) inside the room. 

The **Laser Mic Defeater** relies on piezoelectric transducers attached directly to the window glass to induce chaotic vibrations, completely destroying the signal recovered by the laser.

## Assembly & Installation

:::caution[High Voltage]
The piezo drivers generate high voltage peaks (up to 120V) to vibrate the glass. Do not touch the exposed terminals while the device is powered.
:::

<Steps>
1. **Prepare the glass:** Clean the window surface thoroughly with isopropyl alcohol.
2. **Apply the transducers:** Use double-sided acoustic mounting tape to affix the piezoelectric disks. Place one disk per 2 square meters of glass.
3. **Wire the array:** Connect the disks in parallel to the Defeater control box.
4. **Tune the noise:** Power on the device. Adjust the 'Chaos' dial until you can faintly hear the glass resonating with white noise. 
</Steps>

## Effectiveness

When properly tuned, the transducers vibrate the glass with an amplitude 10x to 50x greater than human speech. Because the noise is generated *at the boundary* (the glass itself), the laser cannot mathematically separate the internal speech from the injected noise.
