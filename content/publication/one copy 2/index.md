---
title: "Outlier Aware Network Embedding for Attributed Networks"
authors:
- Sambaran Bandyopadhyay
- admin
- M N Murty
date: "2018-11-19"
doi: "https://doi.org/10.1609/aaai.v33i01.330112"

# Schedule page publish date (NOT publication's date).
publishDate: ""

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: Proceedings of the AAAI Conference on Artificial Intelligence
publication_short: AAAI'19

abstract: Attributed network embedding has received much interest from the research community as most of the networks come with some content in each node, which is also known as node attributes. Existing attributed network approaches work well when the network is consistent in structure and attributes, and nodes behave as expected. But real world networks often have anomalous nodes. Typically these outliers, being relatively unexplainable, affect the embeddings of other nodes in the network. Thus all the downstream network mining tasks fail miserably in the presence of such outliers. Hence an integrated approach to detect anomalies and reduce their overall effect on the network embedding is required. Towards this end, we propose an unsupervised outlier aware network embedding algorithm (ONE) for attributed networks, which minimizes the effect of the outlier nodes, and hence generates robust network embeddings. We align and jointly optimize the loss functions coming from structure and attributes of the network. To the best of our knowledge, this is the first generic network embedding approach which incorporates the effect of outliers for an attributed network without any supervision. We experimented on publicly available real networks and manually planted different types of outliers to check the performance of the proposed algorithm. Results demonstrate the superiority of our approach to detect the network outliers compared to the state-of-the-art approaches. We also consider different downstream machine learning applications on networks to show the efficiency of ONE as a generic network embedding technique.

# Summary. An optional shortened abstract.
summary: Finding outlier robust network embedding for nodes in an attributed network. We define outlierness for each node and learn them using closed form update rules. 

tags:
- Source Themes
featured: true

# links:
# - name: Paper
#   url: 
url_pdf: https://arxiv.org/pdf/1811.07609.pdf
url_code: 'https://github.com/sambaranban/ONE?utm_source=catalyzex.com'
# url_dataset: '#'
url_poster: 'uploads/papers/one/poster.pdf'
# url_project: ''
url_slides: 'uploads/papers/one/one.pdf'
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
