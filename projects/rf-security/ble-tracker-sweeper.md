---
title: "BLE Tracker Sweeper"
description: "Detect and locate unknown AirTags and BLE beacons."
sidebar:
  badge: 
    text: Updated
    variant: note
---

Bluetooth Low Energy (BLE) trackers like Apple AirTags, Tile, and SmartTags are increasingly used for stalking and unwanted tracking. While smartphone operating systems have built-in alerts, they are often delayed or easily bypassed by removing the tracker's internal speaker.

The **BLE Tracker Sweeper** is a dedicated ESP32-based hardware device that scans for recurring BLE MAC addresses following you over time, calculating signal strength (RSSI) to physically locate the hidden tracker.

## Sweeping Procedure

<Steps>
1. **Initialize:** Turn on the Sweeper in a known safe location (e.g., inside your home). It will whitelist all stationary beacons in the vicinity.
2. **Travel:** Carry the Sweeper with you in your car or bag.
3. **Detection:** If a non-whitelisted BLE MAC address stays within range for more than 15 minutes while you are moving, the Sweeper alerts you.
4. **Localization:** Switch to "Foxhunt Mode" and use the directional antenna and RSSI graph on the OLED display to zero in on the physical tracker.
</Steps>
