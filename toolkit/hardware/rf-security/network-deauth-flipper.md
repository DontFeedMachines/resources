---
title: "Network Deauth Flipper"
description: "Pocket-sized tool to disconnect targeted clients from Wi-Fi networks."
sidebar:
  badge: 
    text: Audit
    variant: danger
---

The **Network Deauth Flipper** leverages the 802.11 management frame vulnerability. Because deauthentication frames are unencrypted in standard WPA2 networks, a malicious actor can spoof the router's MAC address and send a "disconnect" command to any device on the network.

This tool is used by auditors to test the resilience of IoT devices (like wireless security cameras) to denial-of-service attacks, and to force devices to reconnect so the WPA handshake can be captured.

## Capabilities

:::cardgrid
  :::card{title="Targeted Disconnect" icon="error"}
    Drop a specific camera or smart lock off the network without affecting other users.
  :::
  :::card{title="Beacon Spam" icon="rocket"}
    Flood the airspace with thousands of fake Wi-Fi access points to confuse client devices.
  :::
:::

:::caution[WPA3]
This tool is largely ineffective against networks running WPA3, as WPA3 mandates Protected Management Frames (PMF).
:::
