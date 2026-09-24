---
title: "The 'Dumb' Companion"
description: "An e-ink tamagotchi-like device that rewards the user for spending time away from screens and network coverage using a localized Faraday sensor."
---

# Overview

**The 'Dumb' Companion** is an e-ink, tamagotchi-like device designed to incentivize disconnection. It rewards the user for spending time away from screens and network coverage using a localized Faraday sensor.

In an era where every device demands attention and constantly reports your location and habits, the Dumb Companion is a digital pet that thrives on your absence from the grid.

## Core Mechanics

The health and happiness of your Companion depend on your ability to disconnect:

1. **RF Silence:** The device features a built-in RF envelope detector. When it senses a lack of Wi-Fi, Bluetooth, and cellular signals, the Companion gains "health" points.
2. **Screen-Free Time:** Using a basic ambient light sensor tuned to the specific flicker frequencies of modern LED/OLED displays, the Companion can detect when you are staring at a screen. Prolonged exposure decreases its "happiness".
3. **Faraday Mode:** Placing the Companion (and ideally your smartphone) inside a Faraday bag triggers a "deep sleep" mode for the pet, which yields the highest experience point multiplier.

## Hardware Architecture

- **Display:** Low-power e-ink display for maximum battery life and minimal light emission.
- **Microcontroller:** An ESP32 or similar (with radios physically disabled or desoldered for absolute guarantee).
- **Sensors:**
  - Broad-spectrum RF detector (for Wi-Fi/Cellular detection)
  - Photodiode (for screen flicker detection)
- **Power:** Standard coin cell battery (CR2032), designed to last for months.

## Philosophy

The Dumb Companion flips the traditional model of gamification. Instead of rewarding engagement with a platform, it rewards disengagement. It provides a tangible, cute incentive to leave your phone at home, go for a walk in the woods, or simply sit in silence.
