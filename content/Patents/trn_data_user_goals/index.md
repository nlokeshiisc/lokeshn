---
title: "Training sample set generation from imbalanced data in view of user goals"
authors:
- Lokesh Nagalapatti
- Ruhi Sharma Mittal
- Hima Patel
- Nitin Gupta
date: "2021-11-03"
# doi: "https://doi.org/10.1145/3336191.3371788"

# Schedule page publish date (NOT publication's date).
publishDate: "2021-11-03"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["8"]

# Publication name and optional abbreviated publication name.
publication: United States Patent Application Publication
publication_short: USPTO

abstract: One embodiment provides a method, including receiving a sample set for training a machine-learning model, wherein the sample set includes a plurality of classes, wherein classes within the plurality of classes have an imbalance in a number of samples; creating an enlarged minority class by generating new samples from the samples within the minority class and adding the new samples to the minority class; selecting subset samples from both the samples within the enlarged minority class and the majority class; weighting each of the subset samples based upon user input defining goals for attributes of a training sample set to be used in training the machine-learning model; and generating, using the neural network, the training sample set by re-running the selecting in view of the weighting.
# Summary. An optional shortened abstract.
summary: Training dataset generation curtailed to user metrics.
tags:
- Source Themes
featured: true

# links:
# - name: Paper
# url: https://patents.google.com/patent/US20220101182A1/en 
url_pdf: https://patentimages.storage.googleapis.com/75/d7/2d/06d76c10b24a01/US20230136125A1.pdf
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
