---
title: "Pocket Zine Generator"
description: "A python script that formats any markdown file into an 8-page folding zine."
---

Physical media cannot be remotely deleted, algorithmically down-ranked, or subjected to DMCA takedowns by automated bots. The **Pocket Zine Generator** is a tool for distributing offline knowledge.

It takes a standard Markdown (`.md`) file and automatically formats, paginates, and rotates it into a single-sheet, 8-page folding zine template.

## Usage

```bash
python3 generate_zine.py input.md --output zine.pdf --theme cyberpunk
```

<FileTree>
- zine_generator/
  - **generate_zine.py**
  - templates/
    - default.html
    - cyberpunk.html
  - fonts/
</FileTree>

:::tip[Folding Guide]
To fold the resulting PDF, fold the paper in half lengthwise, then unfold. Fold in half widthwise, then fold the edges into the center. Cut the center seam along the lengthwise fold.
:::
