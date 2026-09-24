---
title: "Adversarial Clothing"
description: "Wearable patterns designed to break YOLO and R-CNN object detection bounding boxes."
---

**Adversarial Clothing** applies specially designed visual patterns (often resembling noisy, abstract gradients) to everyday apparel. These patterns exploit the convolutional layers in object detection algorithms (like YOLO or Faster R-CNN) by creating "false positives" that overwhelm the model, or by breaking the bounding box detection outright so that you are classified as background noise.

## Effectiveness

:::cardgrid
  :::card{title="CCTV Cameras" icon="camera"}
    Highly effective against fixed-angle CCTV running edge AI.
  :::
  :::card{title="Drones" icon="rocket"}
    Moderately effective against aerial drones (patterns must be printed on shoulders/hats).
  :::
:::

:::tip[Fabric Choice]
When printing these patterns, use matte fabrics. Glossy fabrics can reflect sunlight and ruin the exact pixel gradients the AI model relies on to misclassify the object.
:::
