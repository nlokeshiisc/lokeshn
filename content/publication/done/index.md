---
title: "Outlier Resistant Unsupervised Deep Architectures for Attributed Network Embedding"
authors:
- Sambaran Bandyopadhyay
- Lokesh Nagalapatti (*)
- Saley Vishal Vivek (*)
- M N Murty
date: "2020-01-20"
doi: "https://doi.org/10.1145/3336191.3371788"

# Schedule page publish date (NOT publication's date).
publishDate: ""

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: Proceedings of the 13th International Conference on Web Search and Data Mining
publication_short: WSDM'19

abstract: Attributed network embedding is the task to learn a lower dimensional vector representation of the nodes of an attributed network, which can be used further for downstream network mining tasks. Nodes in a network exhibit community structure and most of the network embedding algorithms work well when the nodes, along with their attributes, adhere to the community structure of the network. But real life networks come with community outlier nodes, which deviate significantly in terms of their link structure or attribute similarities from the other nodes of the community they belong to. These outlier nodes, if not processed carefully, can even affect the embeddings of the other nodes in the network. Thus, a node embedding framework for dealing with both the link structure and attributes in the presence of outliers in an unsupervised setting is practically important. In this work, we propose a deep unsupervised autoencoders based solution which minimizes the effect of outlier nodes while generating the network embedding. We use both stochastic gradient descent and closed form updates for faster optimization of the network parameters. We further explore the role of adversarial learning for this task, and propose a second unsupervised deep model which learns by discriminating the structure and the attribute based embeddings of the network and minimizes the effect of outliers in a coupled way. Our experiments show the merit of these deep models to detect outliers and also the superiority of the generated network embeddings for different downstream mining tasks. To the best of our knowledge, these are the first unsupervised non linear approaches that reduce the effect of the outlier nodes while generating Network Embedding.

# Summary. An optional shortened abstract.
summary: Auto encoder inspired deep architectures for finding outlier robust network embedding for nodes in an attributed networks through adversarial training. 
tags:
- Source Themes
featured: true

# links:
# - name: Paper
#   url: 
url_pdf: https://dl.acm.org/doi/abs/10.1145/3336191.3371788
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
