---
title: "Machine-learning model retraining detection"
authors:
- Lokesh Nagalapatti
- Ruhi Sharma Mittal 
- Nitin Gupta
- Hima Patel
date: "2022-03-31"
# doi: "https://doi.org/10.1145/3336191.3371788"

# Schedule page publish date (NOT publication's date).
publishDate: "2022-3-31"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["8"]

# Publication name and optional abbreviated publication name.
publication: United States Patent Application Publication
publication_short: USPTO

abstract: One embodiment provides a method , including  obtaining predictions generated by a deployed machine - learning model ; generating , from the obtained redictions , a validation dataset comprising a plurality of data points, wherein the validation dataset is generated in view of user prefer ences related to desired performance metrics of the deployed machine - learning model ; ranking the plurality of data points of the validation dataset in view of the user preferences ; determining the deployed machine - learning model needs to be retrained by comparing the ranked plurality of data points to a training dataset used to train the deployed machine learning model and identifying , based upon the comparison, a quality of the deployed machine - learning model can be increased above a predetermined threshold ; and retraining the deployed machine learning model utilizing a new train ing dataset being based upon the validation dataset and the ranked plurality of data points

# Summary. An optional shortened abstract.
summary: Detecting when to retrain a model based on drift. 
tags:
- Source Themes
featured: true

# links:
# - name: Paper
#   url: 
url_pdf: https://patentimages.storage.googleapis.com/04/e7/d7/16b9414a9e3e23/US20220101186A1.pdf
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
