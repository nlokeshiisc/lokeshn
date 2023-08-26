---
title: "Federated Learning Data Source selection"
authors:
- Lokesh Nagalapatti
- Ruhi Sharma Mittal
- Ramasuri Narayanam
- Sameep Mehta
date: "2021-10-25"
# doi: "https://doi.org/10.1145/3336191.3371788"

# Schedule page publish date (NOT publication's date).
publishDate: "2023-04-27"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["8"]

# Publication name and optional abbreviated publication name.
publication: United States Patent Application Publication
publication_short: USPTO

abstract: One embodiment provides a method, including receiving, at a central server, data from each of a plurality of data sources, the plurality of data sources being within a plurality of data storage locations, wherein the central server includes a validation dataset having a plurality of annotated datapoints; computing, at the central server, an influential score for each of the plurality of data sources based upon the data provided to the central server from each of the plurality of data sources, wherein an influential score of a data source identifies an influence of the data source in accurately predicting annotations of the validation dataset; selecting, at the central server and based upon the influential score of the plurality of data sources, a subset of the plurality of data sources; and generating, at the central server, the training dataset utilizing the data of the data sources included within the subset
# Summary. An optional shortened abstract.
summary: Selecting the appropriate task specific data sources in Federated Learning.
tags:
- Source Themes
featured: true

# links:
# - name: Paper
# url: https://patents.google.com/patent/US20220101182A1/en 
url_pdf: https://patentimages.storage.googleapis.com/91/4f/b7/d619b8367e8ba3/US20230128548A1.pdf
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
