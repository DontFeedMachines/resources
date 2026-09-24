---
title: "Acoustic Typing Masker"
description: "Flood the room with randomized mechanical keystrokes to destroy the signal-to-noise ratio required by AI acoustic keyloggers."
---

# Overview

The **Acoustic Typing Masker** is a physical defense against AI-driven acoustic keyloggers. Modern machine learning models can accurately reconstruct what you are typing simply by listening to the sound of your keystrokes through a compromised microphone (e.g., a phone on your desk or a smart speaker).

This tool floods the room with randomized, synthesized mechanical keystrokes, effectively destroying the signal-to-noise ratio required by these models.

## The Threat Model

Acoustic side-channel attacks rely on the minute differences in sound produced by different keys on a keyboard. By recording the audio of a typing session and analyzing the waveform, an AI model can map these sounds to specific keys with alarming accuracy.

## The Solution

The Masker operates on a simple principle: **Signal Degradation via Chaos**.

Instead of trying to silence your keyboard (which is difficult and often unergonomic), the Masker introduces a continuous stream of false keystrokes into the acoustic environment.

### Features

- **Adjustable WPM:** Match the masking speed to your actual typing speed (30 - 150 WPM).
- **Rhythm Chaos:** Humans don't type at a perfectly consistent rate. The Masker introduces realistic hesitation, bursts, and pauses to prevent the AI from easily filtering out the masking noise as a predictable background pattern.
- **Multiple Switch Profiles:** Choose from various mechanical switch profiles (e.g., Cherry MX Blue, Brown, Topre) to match your physical keyboard's acoustic signature.

## Deployment

Deploy the Masker on a device near your physical keyboard. For maximum effectiveness, the audio should be played through high-quality speakers capable of reproducing the sharp transient sounds of mechanical switches.

> **Tip:** If you use a mechanical keyboard, select the Masker profile that most closely matches your switches. If you use a membrane keyboard, use a loud mechanical profile to overpower the subtle sounds of your typing.
