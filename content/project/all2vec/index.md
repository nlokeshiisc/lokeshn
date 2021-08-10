---
title: All2Vec
summary: Identifying authors of an anonymized papers in a double blind conference setting. 
tags:
- Deep Learning
date: "2016-04-27T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Photo by rawpixel on Unsplash
  focal_point: Smart

links:
# - icon: githug
#   icon_pack: fab
#   name: Follow
#   url: https://twitter.com/georgecushen
url_code: ""
url_pdf: ""
url_slides: "uploads/projects/all2vec.pdf"
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
# slides: "uploads/projects/all2vec.pdf"
---

In this project, we try to authors of a anonymous
paper in a double blind review setting. We consider a heterogenous graph and use Random walk based approach to learn the embeddings of various nodes in it like author, conference, venue, etc. We fit the embedding model with a daunting loss function and observe that when we use simple cosine similarity metric, we can identigy authors with a good accuracy. In addition to predicting the authors, we observed that we can also predict other attributes of an anonymized paper like venue etc.