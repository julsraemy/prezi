---
marp: true
author: Julien A. Raemy
title: Machine Learning-based Annotations Embedded into IIIF Presentation API 3.0 Resources. Use Case from the PIA Research Project 
description: This presentation is about how machine learning-based annotations have been embedded into IIIF Presentation API 3.0 Resources within the PIA research project. This presentation was created in the context of an informal one-day event at the Zentralbibliothek Zürich.
keywords: IIIF, PIA, Annotations, Object Detection, Machine Learning
image: https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png
url: https://julsraemy.ch/prezi/pia-annotations-zb.html
theme: gaia
class: invert
paginate: true
_paginate: false
---

<!-- _class: lead -->

### Machine Learning-based Annotations Embedded into IIIF Presentation API 3.0 Resources 

#### Use Case from the PIA Research Project 

Zentralbibliothek Zürich | 20.02.2023

Julien A. Raemy, PhD Candidate in Digital Humanities
DHLab, University of Basel
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759) [![Google Scholar](https://img.shields.io/static/v1?label=Google%20Scholar&message=Julien%20A.%20Raemy&color=4285F4&logo=googlescholar)](https://scholar.google.ch/citations?user=pGROUG0AAAAJ&hl) [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=julsraemy&color=181717&logo=github)](https://github.com/julsraemy) [![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@julsraemy@hcommons.social&color=6364FF&logo=mastodon)](https://hcommons.social/@julsraemy)


<!-- This presentation is about the deployment of IIIF within the PIA research project  -->

--- 

<!-- footer: 'Julien A. Raemy | University of Basel' -->

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
![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_36937.jp2/full/max/0/default.jpg)

## Something

---

![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_36937.jp2/full/max/0/default.jpg)

## Something

---

<!-- _footer: " " -->

![bg contain](https://julsraemy.ch/prezi/assets/pia_iiif_workflow.jpg)

<!-- IIIF Workflow within PIA - We have developed an application for IIIF Resources based on Laravel, an opensource PHP Framework11 for generating IIIF resources (Manifests and Collections) as well as machine-learning Annotations, which are derived from vitrivr, a content-based multimedia retrieval system. To serve IIIF manifests, the
application consumes metadata from our repositories.
Our main database is managed through Omeka S -->

---
![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_36937.jp2/full/max/0/default.jpg)

## Something


---

![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_36937.jp2/full/max/0/default.jpg)

### Something else


---

```json
{
      "motivation": "commenting",
      "type": "Annotation",
      "body": [
        {
          "type": "TextualBody",
          "value": "person",
          "purpose": "commenting"
        },
        {
          "type": "TextualBody",
          "value": "Object Detection (vitrivr)",
          "purpose": "tagging"
        },
        {
          "type": "TextualBody",
          "value": "<br><small>Detection score: 0.7576504945755</small>",
          "purpose": "commenting"
        }
      ],
      "target": {
        "source": "https://iiif.participatory-archives.ch/SGV_12N_19783/canvas/p1",
        "selector": {
          "type": "FragmentSelector",
          "conformsTo": "http://www.w3.org/TR/media-frags/",
          "value": "xywh=1439,2597,417,944"
          }}}
```


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

These images are part of the [photographic archives of the Swiss Society for Folklore Studies](https://archiv.sgv-sstp.ch/). 

Licence: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/legalcode)

