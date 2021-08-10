---
title: "Ranking Data Slices for ML Model Validation: A Shapley Value Approach"
authors:
- Eitan Farchi
- Ramasuri Narayanam
- admin
date: "2021-04-22"
doi: "https://doi.org/10.1109/ICDE51399.2021.00180"

# Schedule page publish date (NOT publication's date).
publishDate: ""

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: 2021 IEEE 37th International Conference on Data Engineering (ICDE)
publication_short: ICDE'21

abstract: To make ML systems deployment ready, one of the prominent challenges is to debug the performance issues of the trained ML models. This can be done by associating the issues with a set of Data Slices - aggregates of validation data records - to help the developers investigate these technical issues at a deeper level of granularity. Since the possible number of data slices are exponential in number, there is a need to prioritize the order (i.e. ranking) of slices before presenting to the users. However, there does not exist any work that deals with ranking these automatically generated slices and we refer to this problem as the data slice ranking problem (DSRP). This problem is challenging to address as the top ranked slices should contain significant error concentration (i.e. number of mis-classified data points), be statistically significant (i.e. having large size), and be non-redundant (i.e. contain unique mis-classified data points).In this paper, we tackle this challenging problem by proposing a novel game theoretic framework building upon Shapley value concept to derive a rank order for a given collection of data slices. In particular, we formally present a scheme that explicitly accounts only for the error concentration and we refer to this as Shapley Slice Ranking with Error concentration (SSR-E). We then prove a few useful properties of this scheme. Using thorough experimentation on 7 open source data sets, we demonstrate the superior performance of SSR mechanism vis-à-vis two baseline methods.

# Summary. An optional shortened abstract.
summary: Shaley values based approach to detect slices of data that needs to be analyzed to debug the performance of a black-box ML model.

tags:
- Source Themes
featured: true

# links:
# - name: Paper
#   url: 
url_pdf: https://ieeexplore.ieee.org/abstract/document/9458679
# url_code: 'https://github.com/sambaranban/ONE?utm_source=catalyzex.com'
# url_dataset: '#'
# url_poster: 'uploads/papers/one/poster.pdf'
# url_project: ''
# url_slides: 'uploads/papers/one/one.pdf'
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
