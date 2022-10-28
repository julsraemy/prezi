---
marp: true
author: Julien A. Raemy, Adrian Demleitner
title: Implementation of the IIIF Presentation API 3.0 based on Software Support
description: This presentation is about the implementation of the International Image Interoperability Framework (IIIF) within the PIA research project. It was created in the context of the EuroMed 2022 Conference in Cyprus.
keywords: LOUD, IIIF, PIA, EuroMed
image: https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png
url: https://doi.org/10.5281/zenodo.7194021 
theme: gaia
class: invert
paginate: true
_paginate: false
---

<!-- _class: lead -->

<!-- footer: 'Julien A. Raemy & Adrian Demleitner | University of Basel' -->

# Implementation of the IIIF Presentation API 3.0 based on Software Support

#### <!-- fit -->  Use Case of an Incremental IIIF Deployment within a Citizen Science Project

International Conference on Digital Heritage (EuroMed 2022)
Limassol, Cyprus | 07.11.2022

[![width:500px](https://zenodo.org/badge/DOI/10.5281/zenodo.7194021.svg)](https://doi.org/10.5281/zenodo.7194021)

<!-- This presentation is about the deployment of IIIF within the PIA research project  -->

--- 

![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)

# PIA

[Participatory Knowledge Practices in Analogue and Digital Image Archives](https://about.participatory-archives.ch/)

- Institute for Cultural Anthropology and European Ethnology, University of Basel
- Digital Humanities Lab, University of Basel
- Bern Academy of the Arts, Bern University of Applied Sciences

<!-- PIA is a Sinergia project funded by the Swiss National Science Foundation (SNSF) led by the University of Basel, the Uni, the Bern Academy of the Arts, and the Swiss Society for Folklore Studies. PIA wants to connect the world of data and things in an interdisciplinary manner. 

We explore the phases of the analogue and digital archive from the perspectives of cultural anthropology, technology and design. The common goal of this project is to design a visual interface with machine learning-based tools to make it easy to annotate, contextualize, organize, and link both images and their meta-information, to deliberately encourage the participatory use of archives. -->

---
![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)

#### Collections of the Swiss Society for Fokflore Studies (SSFS) within PIA

Developing a Citizen Science platform on the basis of:

- **SGV_05 Atlas der Schweizerischen Volkskunde** - Cartography
- **SGV_10 Familie Kreis** - Vernacular Photography
- **SGV_12 Ernst Brunner** - Photojournalism

---
![bg right:30% width:300px](https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png)

# <!-- fit --> International Image Interoperability Framework

- A model for presenting and annotating content
- A global community that develops shared application programming interfaces (APIs), implements them in software, and exposes interoperable content

[Core IIIF APIs](https://iiif.io/api/): Image and Presentation APIs

---
![bg right:45% auto width:95%](https://iiif.io/api/image/3.0/img/transformation.png)

## IIIF Image API

It specifies a RESTful web service that returns an image in response to a standard HTTP(S) request.
- Image Request
- Image Information (JSON-LD)

https://iiif.io/api/image

---
![bg right:45% auto width:95%](https://iiif.io/api/assets/images/data-model.png)

## IIIF Presentation API

It is a JSON-LD based web service which provides the necessary information about the object or collection structure and layout.

https://iiif.io/api/presentation


<!-- The purpose of the API is to display descriptive information that is intended for humans and does not aim to provide semantic metadata for search engines -->

---

![bg right:47% contain](https://julsraemy.ch/prezi/assets/viewersupport.svg)

### IIIF Cookbook and Viewer Support

the IIIF community has been keeping a [Cookbook of recipes](https://iiif.io/api/cookbook/recipe/) highlighting different patterns 

As of October 2022, 42 unique cookbook recipes have been approved by
the Technical Review Committee and four viewers are listed.

<!-- After the release of the IIIF Presentation API 3.0, the IIIF community has been keeping a Cookbook of recipes highlighting different patterns (by types of
content, by properties, by topic, etc.) within IIIF resources (mostly Manifests) to give examples of implementation, to show the diversity of IIIF use cases or to encourage people publishing IIIF resources to follow these recipes which
are vetted by the Technical Review Committee. -->

---

## IIIF Cookbook example - `seeAlso`

```json
  "seeAlso": [
    {
      "id": "https://fixtures.iiif.io/other/UCLA/ezukushi_mods.xml",
      "type": "Dataset",
      "label": {
        "en": [
          "MODS metadata"
        ]
      },
      "format": "text/xml",
      "profile": "http://www.loc.gov/mods/v3"
    }
  ],
```

---

<!-- _footer: " " -->

![bg contain](https://julsraemy.ch/prezi/assets/pia_iiif_workflow.jpg)

<!-- IIIF Workflow within PIA - We have developed an application for IIIF Resources based on Laravel, an opensource PHP Framework11 for generating IIIF resources (Manifests and Collections) as well as machine-learning Annotations, which are derived from vitrivr, a content-based multimedia retrieval system. To serve IIIF manifests, the
application consumes metadata from our repositories.
Our main database is managed through Omeka S -->

---

![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_36937.jp2/full/max/0/default.jpg)

# <!-- fit --> Relevance of the IIIF Cookbook against our resources (1)

`Simplest Manifest - Single Image File` → individual images of the SSFS

`Simple Manifest - Book` → Photo albums 

`Support Deep Viewing with Basic Use of a IIIF Image Service` → Leveraging our SIPI instance capabilities

`Internationalization and Multi-language Values` → Metadata in all official Swiss languages

<!-- To build our IIIF resources, we have created boilerplates (or templates) that bring together many of the patterns presented in the cookbook recipes. -->

---

![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_36937.jp2/full/max/0/default.jpg)

# <!-- fit --> Relevance of the IIIF Cookbook against our resources (2)

`Acknowledge Content Contributors (providers)` → Giving credits to the SSFS and the participants

`Linking to Structured Metadata (seeAlso)` → Pointing to semantic metadata for aggregation or discovery purposes

`Embedded or referenced Annotations` → Pointing to one AnnotationPage per (human and non-human) user

---

<!-- _footer: " " -->

![bg contain](https://julsraemy.ch/prezi/assets/pia_iiif_mirador.png)

<!-- For object comparison, displaying annotations, as well as manipulating images, we decided to opt for Mirador. New cookbook recipes will be integrated into PIA, such as relevant patterns facilitating the display of geographical metadata within or pointing to maps. This monitoring work is indeed simplified as one of us is a member of the IIIF TRC, but a more automated setting without necessarily going through each recipe or the viewer matrix should in our opinion be sought -->

---

<!-- _footer: " " -->

![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_36937.jp2/full/max/0/default.jpg)

### Image Credits
- [Blick auf das Spalentor]. Basel, 1938. Ernst Brunner. SGV_12N_00115 
- ["Steffenbach-Brücke" der Furka-Bahn: Bau und Erneuern der Brücke]. Kanton Wallis, 1950. Ernst Brunner. SGV_12N_36937

These images are part of the [photographic archives of the Swiss Society for Folfklore Studies](https://archiv.sgv-sstp.ch/). 

Licence: [CC-BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/legalcode)

