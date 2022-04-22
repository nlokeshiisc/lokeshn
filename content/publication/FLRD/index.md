---
title: "Is your data relevant?: Dynamic selection of data in Federated Learning."
authors:
- admin
- Ruhi sharma Mittal
- Ramasuri Narayanam
date: "2022-02-22"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: ""

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: Proceedings of the AAAI Conference on Artificial Intelligence
publication_short: AAAI'22

abstract: Federated Learning (FL) is a machine learning paradigm in which multiple clients participate to collectively learn a global machine learning model at the central server. It is plausible that not all the data owned by each client is relevant to the server's learning objective. The updates incorporated from irrelevant data could be detrimental to the global model. The task of selecting relevant data is explored in traditional machine learning settings where the assumption is that all the data is available in one place. In FL settings, the data is distributed across multiple clients and the server can't introspect it. This precludes the application of traditional solutions to selecting relevant data here. In this paper, we propose an approach called Federated Learning with Relevant Data (FLRD), that facilitates clients to derive updates using relevant data. Each client learns a model called Relevant Data Selector (RDS) that is private to itself to do the selection. This in turn helps in building an effective global model. We perform experiments with multiple real-world datasets to demonstrate the efficacy of our solution. The results show (a) the capability of FLRD to identify relevant data samples at each client locally and (b) the superiority of the global model learned by FLRD over other baseline algorithms.

# Summary. An optional shortened abstract.
summary: Using Reinforcement Learning based techniques to enable clients in Federated Learning derive updates only from relevant data.

tags:
- Source Themes
featured: true

links:
- name: Paper
  # url: https://ojs.aaai.org/index.php/AAAI/article/view/17093#:~:text=In%20this%20setup%2C%20each%20client's,other%20clients%20or%20the%20server.&text=Using%20this%20game%2C%20we%20compute,relevant%20clients%20with%20high%20probability.
# url_pdf: https://ojs.aaai.org/index.php/AAAI/article/view/17093/16900
# url_code: '#'
# url_dataset: '#'
url_poster: 'uploads/papers/flrd/poster.pdf'
# url_project: ''
url_slides: 'uploads/papers/flrd/slides.pdf'
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
