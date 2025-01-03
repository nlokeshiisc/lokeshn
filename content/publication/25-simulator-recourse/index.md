---
title: "Gradient Coresets for Federated Learning"
authors:
- Durga Sivasubramanian (=)
- Lokesh Nagalapatti (=)
- Rishabh Iyer
- Ganesh Ramakrishnan
date: "2024-01-07"
doi: "TBD"

# Schedule page publish date (NOT publication's date).
publishDate: ""

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication:  IEEE/CVF Winter Conference on Applications of Computer Vision 
publication_short: WACV'24

abstract: Federated Learning (FL) serves as a pivotal technique for training machine learning models on decentralized data across multiple clients, encompassing edge devices with limited resources. The challenge lies in developing solutions that optimize computational, communication, and energy efficiency while upholding privacy constraints within the FL framework. Traditional approaches address these challenges through the selection of a weighted subset known as a coreset from the training dataset, proven to be resilient to data noise. However, these methods hinge on the aggregate statistics of the training data and lack seamless adaptability to the FL context. This paper introduces an innovative algorithm, Gradient-based Coreset for Robust and Efficient Federated Learning (GCFL), which strategically selects a coreset at each client only every K communication rounds, drawing updates exclusively from it and assuming the availability of a small validation dataset at the server. The proposed coreset selection technique proves highly adept at mitigating noise in clients' data, as evidenced by experiments on four real-world datasets. The results showcase that GCFL is (1) more computationally and energy efficient than FL, (2) resilient to various forms of noise in both feature space and labels, (3) ensures privacy of the validation dataset, and (4) introduces minimal communication overhead while delivering substantial performance gains, particularly in scenarios where clients' data exhibits noise.

# Summary. An optional shortened abstract.
summary: Finding coresets in federated learning.
tags:
- Source Themes
featured: true

links:
- name: Long slides
  url: 
url_pdf: 'uploads/papers/gcfl/gcfl_slides.pdf'
# url_code: 'https://github.com/sambaranban/ONE?utm_source=catalyzex.com'
# url_dataset: '#'
url_poster: 'uploads/papers/gcfl/gcfl_poster.pdf'
# url_project: ''
url_slides: 'uploads/papers/gcfl/gcfl_slides.pptx'
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
