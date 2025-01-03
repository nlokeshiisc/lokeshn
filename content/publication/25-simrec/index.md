---
title: "Leveraging a Simulator for Learning Causal Representations from Post-Treatment Covariates for CATE"
authors:
- admin
- Ramasuri Narayanam
date: "2025-05-18"
doi: "2025-05-18"

# Schedule page publish date (NOT publication's date).
publishDate: ""

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: Transactions of Machine Learning Research
publication_short: TMLR'25

abstract: Treatment effect estimation involves assessing the impact of different treatments on individual outcomes. Current methods estimate Conditional Average Treatment Effect (CATE) using observational datasets where covariates are collected before treatment assignment and outcomes are observed afterward, under assumptions like positivity and unconfoundedness. In this paper, we address a scenario where both covariates and outcomes are gathered after treatment. We show that post-treatment covariates render CATE unidentifiable, and recovering CATE requires learning treatment-independent causal representations. Prior work shows that such representations can be learned through contrastive learning if counterfactual supervision is available in observational data. However, since counterfactuals are rare, other works have explored using simulators that offer synthetic counterfactual supervision. Our goal in this paper is to systematically analyze the role of simulators in estimating CATE. We analyze the CATE error of several baselines and highlight their limitations. We then establish a generalization bound that characterizes the CATE error from jointly training on real and simulated distributions, as a function of the real-simulator mismatch. Finally, we introduce SimPONet, a novel method whose loss function is inspired from our generalization bound. We further show how SimPONet adjusts the simulator’s influence on the learning objective based on the simulator’s relevance to the CATE task. We experiment with various DGPs, by systematically varying the real-simulator distribution gap to evaluate SimPONet’s efficacy against state-of-the-art CATE baselines.

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
# slides: example
---

