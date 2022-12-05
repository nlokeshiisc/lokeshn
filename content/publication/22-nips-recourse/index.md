---
title: "Learning Recourse on Instance Environment to Enhance Prediction Accuracy"
authors:
- Lokesh Nagalapatti
- Guntakanti Sai Koushik
- Abir De
- Sunita Sarawagi
date: "2022"
doi: "TBD"

# Schedule page publish date (NOT publication's date).
publishDate: ""

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: Advances in Neural Information Processing Systems 35 (NeurIPS 2022)
publication_short: NeurIPS'22

abstract: Machine Learning models are often susceptible to poor performance on instances sampled from bad environments. For example, an image classifier could provide low accuracy on images captured under low lighting conditions. In high stake ML applications, such as AI-driven medical diagnostics, a better option could be to provide recourse in the form of  alternative environment settings in which to recapture the instance for more reliable diagnostics. In this paper, we propose a model called {\em RecourseNet} that learns to apply recourse on the space of environments so that the recoursed instances are amenable to better predictions by the classifier.   Learning to output optimal recourse is challenging because we do not assume access to the underlying physical process that generates the recoursed instances. Also, the optimal setting could be instance-dependent --- for example the best camera angle for object recognition could be a function of the object's shape. We propose a novel three-level training method that (a) Learns a classifier that is optimized for high performance under recourse, (b) Learns a recourse predictor when the training data may contain only limited instances under good environment settings, and (c) Triggers recourse selectively only when recourse is likely to improve classifier confidence.

# Summary. An optional shortened abstract.
summary: Learning recourse on the environment that generates data instances. 
tags:
- Source Themes
featured: true

# links:
# - name: Paper
#   url: 
url_pdf: 'uploads/papers/img_recourse/recourse.pdf'
# url_code: 'https://github.com/sambaranban/ONE?utm_source=catalyzex.com'
# url_dataset: '#'
# url_poster: 'uploads/papers/one/poster.pdf'
# url_project: ''
url_slides: 'uploads/papers/img_recourse/recourse-short.pdf'
url_slides: 'uploads/talks/adobe_talk_slides.pdf'
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
