---
title: "Tab-Shapley: Identifying Top-k Tabular Data Quality Insights"
authors:
- Manisha Padala
- Lokesh Nagalapatti
- Atharv Tyagi 
- Ramasuri Narayanam
- Shiv Kumar Saini 
date: "2025-02-19"
doi: "TBD"

# Schedule page publish date (NOT publication's date).
publishDate: ""

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: Association for the Advancement of Artificial Intelligence (AAAI)
publication_short: AAAI'25

abstract: We present an unsupervised method for aggregating anomalies in tabular datasets by identifying the top-$k$ tabular data quality insights. Each insight consists of a set of anomalous attributes and the corresponding subsets of records that serve as evidence to the user. The process of identifying these insight blocks is challenging due to (i) the absence of labeled anomalies, (ii) the exponential size of the subset search space, and (iii) the complex dependencies among attributes, which obscure the true sources of anomalies. Simple frequency-based methods fail to capture these dependencies, leading to inaccurate results. To address this, we introduce Tab-Shapley, a cooperative game theory based framework that uses Shapley values to quantify the contribution of each attribute to the data's anomalous nature. While calculating Shapley values typically requires exponential time, we show that our game admits a closed-form solution, making the computation efficient. We validate the effectiveness of our approach through empirical analysis on real-world tabular datasets with ground-truth anomaly labels.

# Summary. An optional shortened abstract.
summary: Identifying group anomalies (covering both columns and rows) in Tabular Data using Game theoretic models.
tags:
- Source Themes
featured: true

links:
# - name: Long slides
#   url: 'uploads/talks/adobe_talk_slides.pdf'
# url_pdf: 'https://arxiv.org/pdf/2406.03864'
# url_code: 'https://github.com/sambaranban/ONE?utm_source=catalyzex.com'
# url_dataset: '#'
# url_poster: 'uploads/papers/pairnet/icml_pairnet_poster.pdf'
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
