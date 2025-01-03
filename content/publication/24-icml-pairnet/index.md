---
title: "PairNet: Training with Observed Pairs to Estimate Individual Treatment Effect"
authors:
- Lokesh Nagalapatti (=)
- Pranava Singhal (=)
- Avishek Ghosh
- Sunita Sarawagi
date: "2024-01-01"
doi: "https://doi.org/10.48550/arXiv.2406.03864"

# Schedule page publish date (NOT publication's date).
publishDate: ""

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: Intennational Conference on Machine Learning
publication_short: ICML'24

abstract: Given a dataset of individuals each described by a covariate vector, a treatment, and an observed outcome on the treatment, the goal of the individual treatment effect (ITE) estimation task is to predict outcome changes resulting from a change in treatment. A fundamental challenge is that in the observational data, a covariate's outcome is observed only under one treatment, whereas we need to infer the difference in outcomes under two different treatments. Several existing approaches address this issue through training with inferred pseudo-outcomes, but their success relies on the quality of these pseudo-outcomes. We propose PairNet, a novel ITE estimation training strategy that minimizes losses over pairs of examples based on their factual observed outcomes. Theoretical analysis for binary treatments reveals that PairNet is a consistent estimator of ITE risk, and achieves smaller generalization error than baseline models. Empirical comparison with thirteen existing methods across eight benchmarks, covering both discrete and continuous treatments, shows that PairNet achieves significantly lower ITE error compared to the baselines. Also, it is model-agnostic and easy to implement.

# Summary. An optional shortened abstract.
summary: A simple loss on pairs of observational instances outperforms (almost) SOTA approaches on Treatment Effect Estimation
tags:
- Source Themes
featured: true

links:
# - name: Long slides
#   url: 'uploads/talks/adobe_talk_slides.pdf'
url_pdf: 'https://arxiv.org/pdf/2406.03864'
# url_code: 'https://github.com/sambaranban/ONE?utm_source=catalyzex.com'
# url_dataset: '#'
url_poster: 'uploads/papers/pairnet/icml_pairnet_poster.pdf'
# url_project: ''
# url_slides: 'uploads/papers/img_recourse/slides-short.pdf'
# url_slides_long: 'uploads/talks/adobe_talk_slides.pdf'
# url_source: '#'
# url_video: 'https://slideslive.com/38949109/game-of-gradients-mitigating-irrelevant-clients-in-federated-learning'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---
<!-- 
{{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Supplementary notes can be added here, including [code, math, and images](https://wowchemy.com/docs/writing-markdown-latex/). -->
