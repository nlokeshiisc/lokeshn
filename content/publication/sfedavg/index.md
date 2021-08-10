---
title: "Game of Gradients - Mitigating irrelevant clients in Federated Learning"
authors:
- admin
- Ramasuri Narayanam
date: "2021-05-18"
doi: "2021-05-18"

# Schedule page publish date (NOT publication's date).
publishDate: ""

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: Proceedings of the AAAI Conference on Artificial Intelligence
publication_short: AAAI'21

abstract: The paradigm of Federated learning (FL) deals with multiple clients participating in collaborative training of a machine learning model under the orchestration of a central server. In this setup, each client’s data is private to itself and is not transferable to other clients or the server. Though FL paradigm has received significant interest recently from the research community, the problem of selecting the relevant clients w.r.t. the central server's learning objective is under-explored. We refer to these problems as Federated Relevant Client Selection (FRCS). Because the server doesn't have explicit control over the nature of data possessed by each client, the problem of selecting relevant clients is significantly complex in FL settings. In this paper, we resolve important and related FRCS problems viz., selecting clients with relevant data, detecting clients that possess data relevant to a particular target label, and rectifying corrupted data samples of individual clients. We follow a principled approach to address the above FRCS problems and develop a new federated learning method using the Shapley value concept from cooperative game theory. Towards this end, we propose a cooperative game involving the gradients shared by the clients. Using this game, we compute Shapley values of clients and then present Shapley value based Federated Averaging (S-FedAvg) algorithm that empowers the server to select relevant clients with high probability. S-FedAvg turns out to be critical in designing specific algorithms to address the FRCS problems. We finally conduct a thorough empirical analysis on image classification and speech recognition tasks to show the superior performance of S-FedAvg than the baselines in the context of supervised federated learning settings.

# Summary. An optional shortened abstract.
summary: Using Cooperative Game theory approaches to mitigate the impace of noisy clients in Federated Learning.

tags:
- Source Themes
featured: true

links:
- name: Paper
  url: https://ojs.aaai.org/index.php/AAAI/article/view/17093#:~:text=In%20this%20setup%2C%20each%20client's,other%20clients%20or%20the%20server.&text=Using%20this%20game%2C%20we%20compute,relevant%20clients%20with%20high%20probability.
url_pdf: https://ojs.aaai.org/index.php/AAAI/article/view/17093/16900
# url_code: '#'
# url_dataset: '#'
url_poster: 'uploads/papers/sfedavg/poster.pdf'
# url_project: ''
# url_slides: 'uploads/'
# url_source: '#'
url_video: 'https://slideslive.com/38949109/game-of-gradients-mitigating-irrelevant-clients-in-federated-learning'

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
slides: example
---

{{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Supplementary notes can be added here, including [code, math, and images](https://wowchemy.com/docs/writing-markdown-latex/).
