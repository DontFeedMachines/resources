---
title: "Anti-AI Voice Modulator"
description: "Hardware inline mic adapter that alters vocal formants to defeat biometric voice identification."
sidebar:
  badge: 
    text: Beta
    variant: caution
---

The **Anti-AI Voice Modulator** is a hardware-based, inline microphone adapter designed to fundamentally alter your vocal formants. Unlike software modulators (which leave digital artifacts that AI can easily reverse), this device uses analog synthesis to reconstruct your voice in real-time, stripping away biometric markers while retaining human legibility.

## The Threat Model

Biometric voice identification is widely deployed by intelligence agencies, telecommunications companies, and automated surveillance networks. These systems extract unique physiological features from your speech (formant frequencies, pitch tracks, and spectral envelopes) to build a voiceprint.

:::danger[Biometric permanence]
Unlike a password, your voiceprint cannot be changed. Once compromised or recorded into a database, it serves as a persistent identifier across all intercepted audio.
:::

## Key Features

:::cardgrid
  :::card{title="Hardware-Level Masking" icon="laptop"}
    Modulation occurs before the audio ever reaches your computer or smartphone, ensuring no unmasked audio is accidentally transmitted.
  :::
  :::card{title="Formant Shifting" icon="setting"}
    Physically alters the resonant frequencies of the speech tract, breaking the core metric used by AI identification models.
  :::
:::

## Setup Instructions

<Tabs>
  <TabItem label="Analog (3.5mm TRRS)">
    1. Plug the Modulator's output cable into your smartphone or laptop's headphone/mic combo jack.
    2. Plug your headset into the Modulator's input jack.
    3. Toggle the switch to **Active**.
  </TabItem>
  <TabItem label="Digital (USB-C)">
    1. Connect the USB-C inline dongle to your computer.
    2. The OS will recognize it as a generic USB Audio Interface.
    3. Ensure no software noise-cancellation (like Krisp or Discord's Krisp integration) is running, as it will fight the modulator.
  </TabItem>
</Tabs>
