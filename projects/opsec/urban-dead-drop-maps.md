---
title: "Urban Dead Drop Maps"
description: "A framework for establishing and maintaining offline encrypted USB dead drops."
---

An **USB Dead Drop** is a USB flash drive embedded into a wall, bench, or public space, accessible to anyone who plugs their laptop into it. It creates an anonymous, offline peer-to-peer file sharing network.

This project outlines the protocol for establishing these drops securely and mapping them using obfuscated coordinates.

## Cryptographic Protocol

Never plug an untrusted USB drive directly into your main operating system. Always use a burner device or a Live USB (like Tails OS).

<Tabs>
  <TabItem label="Public Drops">
    Public drops are unencrypted. They are meant for sharing zines, public domain books, and manifestos. **Expect malware.** Never execute binaries found on a public drop.
  </TabItem>
  <TabItem label="Private Drops">
    Private drops require a VeraCrypt hidden volume. The host filesystem appears empty or contains innocuous files, while the hidden volume (accessible only to those with the password) holds the actual payload.
  </TabItem>
</Tabs>

:::danger[Hardware Destruction]
Beware of "USB Killers." These malicious devices look like flash drives but discharge high-voltage capacitors into your USB port, instantly destroying your motherboard. Use a cheap USB hub as a sacrificial barrier.
:::
