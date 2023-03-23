---
marp: true
author: Julien A. Raemy
title: The International Image Interoperability Framework (IIIF) - community-driven standards to deliver, view and annotate digital objects
description: This presentation is about the International Image Interoperability Framework (IIIF) and was given at the University of Bern in April 2023
keywords: LOUD, IIIF, Web Annotation Data Model, PIA
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://julsraemy.ch/prezi/iiif-unibe.html
theme: gaia
class: invert
paginate: true
_paginate: false
---

<!-- _class: lead -->

# The International Image Interoperability Framework (IIIF)
### Community-driven standards to deliver, view and annotate digital objects
[Julien A. Raemy](https://julsraemy.ch), PhD Candidate in Digital Humanities
DHLab, University of Basel
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759) [![Google Scholar](https://img.shields.io/static/v1?label=Google%20Scholar&message=Julien%20A.%20Raemy&color=4285F4&logo=googlescholar)](https://scholar.google.ch/citations?user=pGROUG0AAAAJ&hl) [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=julsraemy&color=181717&logo=github)](https://github.com/julsraemy) [![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@julsraemy@hcommons.social&color=6364FF&logo=mastodon)](https://hcommons.social/@julsraemy)

Digital Humanities Workshops & Vorträge FS 2023
Universität Bern | 04.04.2023

--- 

![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/1500,/0/default.jpg)

### Linked Open Usable Data for Cultural Heritage
#### <!-- fit --> Perspectives on Semantics and Interoperability

PhD Thesis - https://phd.julsraemy.ch - supervised by: 
- Peter Fornaro (University of Basel)
- Walter Leimgruber (University of Basel)
- Robert Sanderson (Yale University)

<!-- I am doing my PhD in Digital Humanities on Linked Open Usable Data, with a focus on its (potential) use in the Humanities and the perspectives it could bring in terms of semantics and interoperability. My research is grounded as part of the Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA) research project, which aims to develop a Citizen Science platform around three photographic collections of the Swiss Society for Folklore Studies (SSFS).  -->

--- 

# Agenda
![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/1000,/0/default.jpg)

- What is IIIF?
- Why do we need IIIF?
- What does IIIF do?
- How does IIIF work?
- Try it yourself
- PIA IIIF Annotation Workflow

<!-- footer: 'Julien A. Raemy | IIIF' -->

---

<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)


# <!-- fit --> What is IIIF?

---
![bg right:30% width:300px](https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png)

# <!-- fit --> International Image Interoperability Framework 
(triple-eye-eff)

- A model for presenting and annotating content
- A global community that develops shared application programming interfaces (APIs), implements them in software, and exposes interoperable content

https://iiif.io

<!-- IIIF is a community-driven initiative, which brings together key players in the academic and CH fields, and has defined open and shared APIs to standardise the way in which image-based resources are delivered on the Web. Implementing the IIIF APIs enables institutions to make better use of their digitised or born-digital material by providing, for instance, deep zooming, comparison, full-text search of OCR objects or annotation capabilities.  -->

---

<!-- _footer: 'https://bit.ly/iiifmap' -->

![bg contain 89%](https://julsraemy.ch/prezi/assets/iiif-map.png)

---

![bg contain](https://iiif.io/assets/images/heroes/event_2.webp)

---
![bg right:30% width:300px](https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png)
# IIIF Community

#### International leaders from:
- Museums & Galleries
- Aggregators/Facilitators
- Universities & Research Institutions
- State and National Libraries

---
![bg right:30% width:300px](https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png)

# IIIF Community

#### Community and Technical Specification Groups
- CGs: 3D, A/V, Archives, Design, Manuscripts, Maps, Museums, Newspapers, Outreach
- TSGs: 3D, Authentication, Content Search, Discovery, Maps

https://iiif.io/community/ 

---



<!-- _footer: " " -->

![bg contain](https://julsraemy.ch/prezi/assets/iiif_community_overview.svg)


---

<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)


# <!-- fit --> Why do we need IIIF?

---

<!-- _footer: "All images come from the Art Institute Chicago's platform and are IIIF-compliant, check the source code" -->

![bg opacity:.4](https://www.artic.edu/iiif/2/a6b1cdb3-accf-a52f-78df-cb39de3be5c6/full/1000,/0/default.jpg)
![bg opacity:.4](https://www.artic.edu/iiif/2/400aafd7-392c-cd87-b8b4-0ff2faedf967/full/1000,/0/default.jpg)
![bg opacity:.4](https://www.artic.edu/iiif/2/1542469c-b658-6e13-5701-dad656f51733/full/1000,/0/default.jpg)

# <!-- fit --> Images are fundamental carriers of information

<!-- So why do we need IIIF? Digital images are fundamental carriers of information across the fields of cultural heritage, STEM, and others. They help us understand complex processes through visualization. They grab our attention and help us quickly understand abstract concepts. They help document many the past--and the  present--and preserve it for the future. They are also ubiquitous: we interact with thousands of them every day both in real life and on the web. In short, images are important and we interact with large volumes of them online. 

Image 1: Female Figurine, Chupicuaro, 500/300 B.C
Image 2: Vision of Saint Gregory, unknown artist, n.d.
Image 3: Iyo Province: Saijo, Utagawa Hiroshige, 1855
-->

---

![bg right:50%](https://julsraemy.ch/prezi/assets/silos.png)

# <!-- fit --> The problem
#### A world of silos and duplication

Image delivery on the Web has historically been hard, slow, expensive, disjointed, and locked-up in silos.

---

![bg contain](https://julsraemy.ch/prezi/assets/silos-repos.png)

---

<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)


# <!-- fit --> What does IIIF do?

---

![bg contain](https://julsraemy.ch/prezi/assets/iiif_deepzoom.gif)

---

![bg contain](https://julsraemy.ch/prezi/assets/compare.gif)

---

---

---

<!-- _footer: " " -->

![bg contain](https://iiif.io/assets/uploads/ddmal_section.gif)

---

<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)


# <!-- fit --> How does IIIF work?

---

![bg contain](https://julsraemy.ch/prezi/assets/iiif-apis.gif)

---

![bg contain](https://julsraemy.ch/assets/images/silos_to_iiif.gif)

---

![bg contain](https://julsraemy.ch/prezi/assets/iiif-ecosystem.png)

---

![bg right:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/1000,/0/default.jpg)

# IIIF Specifications

- **Image API**
- **Presentation API**
- Authentication API
- Change Discovery API
- Content Search API
- Content State API

_The Image and Presentation APIs are referred to as the core IIIF APIs_

---

<!-- _footer: ' ' -->

![bg auto](https://training.iiif.io/iiif-online-workshop/day-one/img/apis.png)

<!-- The two core specifications are the Image API and the Presentation API. The former is a web service for manipulating an image through a URL and the latter "specifies the information needed to drive a remote viewing experience". -->

---

![bg right:45% auto width:95%](https://iiif.io/api/image/3.0/img/transformation.png)

## IIIF Image API

It specifies a RESTful web service that returns an image in response to a standard HTTP(S) request.
- Image Request
- Image Information (JSON-LD)

https://iiif.io/api/image

---

- Base URI
`{scheme}://{server}{/prefix}/{identifier}`

- Image Request
`{$BASE}/{region}/{size}/{rotation}/{quality}.{format}`
https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/1000,/0/default.jpg

- Image Information (Metadata)
`{$BASE}/info.json`
https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/info.json


---
![bg right:45% auto width:95%](https://iiif.io/api/assets/images/data-model.png)

## IIIF Presentation API

It is a JSON-LD based web service which provides the necessary information about the object or collection structure and layout.

https://iiif.io/api/presentation


<!-- The purpose of the API is to display descriptive information that is intended for humans and does not aim to provide semantic metadata for search engines -->

---

![bg width:1070px](https://julsraemy.ch/prezi/assets/presentationapi-resources.png)

---

![bg right:40% width:480px](https://julsraemy.ch/prezi/assets/anno-model.png)

# Web Annotation Data Model 

The Web Annotation Data Model (WADM) derives from the Open Annotation Specification.

https://www.w3.org/TR/annotation-model/

<!-- The Web Annotation Data Model was created alongside a vocabulary and a protocol by a dedicated W3C group that reworked the Open Annotation specification, developed in 2013, "(...) [specifying] an interoperable framework for creating associations between related resources, called annotations, using a methodology that conforms to the Architecture of the World Wide Web". 

Its operating principle is based on the division of an annotation into two distinct parts: the body, which corresponds to the resource on which one seeks to annotate something, and the target, which represents the object being annotated.

We will see an example later on.
 -->

---

![bg right:40% width:480px](https://julsraemy.ch/prezi/assets/anno-model.png)

## WADM Motivations 

_To uderstand the reasons why the Annotation was created, or why the Textual Body was included in the Annotation._

Some of the Motivations: `commenting`, `highlighting`, `identifying`, `tagging`

---

<!-- _class: lead -->

# <!-- fit --> Try it yourself
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)

---

---

<!-- _class: lead -->

# <!-- fit --> PIA IIIF Annotation Workflow
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)

---


![bg contain](https://julsraemy.ch/prezi/assets/SGV_12N_19783-objects.jpeg)

---

![bg contain](https://julsraemy.ch/prezi/assets/pia_iiif_workflow.jpg)

<!-- IIIF Workflow within PIA -->

---

<!-- _footer: " " -->

![bg contain](https://julsraemy.ch/prezi/assets/pia_iiif_mirador.png)

---

```json
{
  "@context": "http://iiif.io/api/presentation/3/context.json",
  "id": "https://iiif.participatory-archives.ch/annotations/SGV_12N_00001-p1-list.json",
  "type": "AnnotationPage",
  "items": [
    {
      "@context": "http://www.w3.org/ns/anno.jsonld",
      "id": "https://iiif.participatory-archives.ch/annotations/SGV_12N_00001-p1-list/annotation-2800001.json",
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
          "value": "<br><small>Detection score: 0.999616265296936</small>",
          "purpose": "commenting"
        }
      ],
      "target": {
        "source": "https://iiif.participatory-archives.ch/SGV_12N_00001/canvas/p1",
        "selector": {
          "type": "FragmentSelector",
          "conformsTo": "http://www.w3.org/TR/media-frags/",
          "value": "xywh=3225,201,943,4051"
        },
        "dcterms:isPartOf": {
          "type": "Manifest",
          "id": "https://iiif.participatory-archives.ch/SGV_12N_00001/manifest.json"
        }
      }
    },
```

---

<!-- _footer: " " -->

![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/1000,/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/1000,/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_36937.jp2/full/1000,/0/default.jpg)

### Image Credits
- [Blick auf das Spalentor]. Basel, 1938. Ernst Brunner. SGV_12N_00115 
- [Katze auf einer Mauer]. Ort und Datum unbekannt. Ernst Brunner. SGV_12N_19553
- [Ringtanz während der Masüras auf der Alp Sura]. Guarda, 1939. SGV_12N_08589
- ["Steffenbach-Brücke" der Furka-Bahn: Bau und Erneuern der Brücke]. Kanton Wallis, 1950. Ernst Brunner. SGV_12N_36937

These images are part of the [photographic archives of the Swiss Society for Folklore Studies](https://archiv.sgv-sstp.ch/). Licence: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/legalcode)

