---
title: "USB Data Blocker"
description: "A hardware 'condom' that severs data pins to prevent juice-jacking."
---

Public USB charging stations (at airports, cafes, or hotels) are a prime vector for "juice-jacking." When you plug your phone in to charge, the station may also attempt to mount your device as a drive, inject malware, or execute commands via ADB (Android Debug Bridge) or Apple's diagnostic protocols.

The **USB Data Blocker** physically severs the `D+` and `D-` data pins, allowing only the `VBUS` (Power) and `GND` (Ground) pins to connect.

## Build Instructions

<Tabs>
  <TabItem label="USB-A to USB-A">
    Simply slice open a cheap extension cable, cut the Green and White wires, and tape them off. You now have a secure charging cable.
  </TabItem>
  <TabItem label="USB-C (Complex)">
    USB-C relies on the `CC` (Configuration Channel) pins for power negotiation (Power Delivery). If you sever the data pins, fast charging will fail. Use our custom PCB interposer (see `fabrication/data_blocker_guide.md`) to spoof the 5.1k resistors required for charging while physically air-gapping the data lines.
  </TabItem>
</Tabs>

:::tip
Always carry a data blocker in your travel bag. If you must use a public port, never plug your cable directly into it.
:::
