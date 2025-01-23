---
title: "Robust Root Cause Diagnosis using In-Distribution Interventions"
authors:
- Lokesh Nagalapatti
- Ashutosh Srivastava
- Sunita Sarawagi
- Amit Sharma
date: "2025-01-02"
doi: "TBD"

# Schedule page publish date (NOT publication's date).
publishDate: ""

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication:  International Conference on Learning Representations (ICLR)
publication_short: ICLR'25

abstract: Diagnosing the root cause of an anomaly in a complex interconnected system is a pressing problem in today's cloud services and industrial operations. Effective root cause diagnosis calls for identifying nodes whose disrupted local mechanisms cause anomalous behavior at a target node. We propose In-Distribution Interventions (IDI), a novel algorithm that predicts root cause as nodes that meet two criteria -- 1) `Anomaly` root cause nodes should take on anomalous values; 2) `Fix` had the root cause nodes assumed usual values, the target node would not have been anomalous. Prior methods of assessing the fix condition rely on counterfactuals inferred from a Structural Causal Model (SCM) trained on historical data. But since anomalies are rare and fall outside the training distribution, the fitted SCMs yield unreliable counterfactual estimates. IDI overcomes this by relying on interventional estimates obtained by solely probing the fitted SCM at in-distribution inputs. Our theoretical analysis demonstrates that IDI's in-distribution intervention approach outperforms other counterfactual estimation methods whenever variance of the underlying latent exogenous variables is low. Experiments on both synthetic and Petshop RCD benchmark datasets demonstrate that IDI consistently identifies true root causes more accurately and robustly than nine existing state-of-the-art RCD baselines.

# Summary. An optional shortened abstract.
summary: Identifying root cause of anomalies using interventions rather estimated from a learned SCM
tags:
- Source Themes
featured: true

links:
# - name: Long slides
#   url: 'uploads/talks/adobe_talk_slides.pdf'
url_pdf: 'https://openreview.net/forum?id=l11DZY5Nxu&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DICLR.cc%2F2025%2FConference%2FAuthors%23your-submissions)'
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
