# Projects
#
# Each entry is a block of key: value lines separated by a blank line.
# Supported keys:
#   title       — project name (required)
#   description — short description (required)
#   tags        — comma-separated technology tags
#   year        — four-digit year
#   status      — active | completed
#   url         — project page or demo URL
#   github      — GitHub repository URL
#   image       — cover image key (see below)
#
# HOW TO ADD A COVER IMAGE
# ─────────────────────────
#   1. Put the image in  src/assets/project-{key}.jpg  (or .png / .svg / .webp)
#      Example:  src/assets/project-socialeval.jpg
#   2. Set  image: {key}  in the entry below
#      Example:  image: socialeval
#   No code changes needed — the image is picked up automatically.
#
# Current cover images (default placeholders, replace any time):
#   image: llm-eval    →  src/assets/project-llm-eval.jpg
#   image: fairnlp     →  src/assets/project-fairnlp.jpg
#   image: portfolio   →  src/assets/project-portfolio.jpg

title: LLM-Eval Toolkit
description: Open-source framework for evaluating large language models across safety, helpfulness, and factuality.
tags: Python, PyTorch, LLMs
year: 2024
status: active
image: llm-eval

title: FairNLP
description: Library for measuring and mitigating demographic biases in text classification pipelines.
tags: Python, NLP, Fairness
year: 2023
status: completed
image: fairnlp

title: Academic Portfolio
description: Clean, minimalist academic homepage template built with React and Tailwind CSS.
tags: React, TypeScript, Tailwind
year: 2024
status: completed
image: portfolio
