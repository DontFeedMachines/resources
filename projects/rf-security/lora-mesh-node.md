---
title: "LoRa Mesh Node"
description: "Build an off-grid, decentralized communication node using LoRa."
---

When cellular networks fail, are congested, or compromised (via Stingrays/IMSI Catchers), the **LoRa Mesh Node** provides a resilient, encrypted, low-bandwidth text messaging network.

Using the Meshtastic firmware over 900MHz LoRa radios, you can communicate over miles (or tens of miles with line-of-sight) without relying on any centralized infrastructure. 

## Code & Configurations

The DFM custom firmware modifications for stealth operations (disabling GPS broadcast, turning off screen backlights, and adjusting duty cycles) are located here:

<FileTree>
- firmware/
  - **dfm_stealth_config.yaml** (Main mesh profile)
  - src/
    - **radio_silence.cpp** (Emergency kill-switch logic)
</FileTree>

:::tip[Antenna Tuning]
The stock antennas shipped with most TTGO boards are poorly tuned. Upgrading to a custom-tuned 915MHz dipole antenna will easily triple your effective range.
:::
