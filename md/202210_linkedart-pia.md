---
marp: true
author: Julien A. Raemy
title: Linked Art at PIA
description: This presentation is about the deployment of Linked Art within the PIA research project
keywords: LOUD, Linked Art, IIIF, PIA
image: https://julsraemy.ch/assets/images/portrait-px.png
theme: gaia
class: invert
paginate: true
_paginate: false
---

<!-- _class: lead -->

# Linked Art at PIA
[Julien A. Raemy](https://julsraemy.ch)
19.10.2022 | Linked Art WG Call

<!-- This presentation is about the deployment of Linked Art within the PIA research project  -->

--- 

<!-- footer: 'Julien A. Raemy | Linked Art at PIA' -->

# PhD Working Title

*Linked Open Usable Data in the Humanities: Perspectives on Knowledge Representation and Interoperability*

https://phd.julsraemy.ch

<!-- It is grounded as part of the Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA) research project, which aims to develop a Citizen Science platform around three photographic collections of the Swiss Society for Folklore Studies (SSFS). The theoretical framework of the thesis is situated through and beyond an Actor-Network Theory (ANT) lens.  -->

--- 

# Agenda

- Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA)
- PIA goes LOUD
- Linked Art
- Collaboration with the Linked Art II project
- Future Work

---

# PIA

- Cultural Anthropology: Institute for Cultural Anthropology and European Ethnology, University of Basel
- Technology: Digital Humanities Lab, University of Basel
- Design: Bern Academy of the Arts, Bern University of Applied Sciences

https://about.participatory-archives.ch/ 
https://data.snf.ch/grants/grant/193788 

<!-- PIA is a Sinergia project funded by the Swiss National Science Foundation (SNSF) led by the University of Basel, the Uni, the Bern Academy of the Arts, and the Swiss Society for Folklore Studies. PIA wants to connect the world of data and things in an interdisciplinary manner. 

We explore the phases of the analogue and digital archive from the perspectives of cultural anthropology, technology and design. The common goal of this project is to design a visual interface with machine learning-based tools to make it easy to annotate, contextualize, organize, and link both images and their meta-information, to deliberately encourage the participatory use of archives. -->

---
# PIA
#### Collections of the Swiss Society for Fokflore Studies (SSFS) within PIA

- SGV_05 Atlas
- SGV_10 Familie Kreis
- SGV_12 Ernst Brunner

https://archiv.sgv-sstp.ch 

---


# PIA
#### User interface (prototype based on Omeka S)

https://participatory-archives.ch/ 

---

# PIA goes LOUD
#### Why do we need Linked Art at PIA?

- Data reconciliation
- Event-based model inherited from CIDOC-CRM
- Being part of a community of developers/scholars
- Potential aggregation capabilities
- Additional (LOUD) access point

---

# PIA goes LOUD
#### Bulding an infrastructure with several interfaces

---

# PIA goes LOUD
#### International Image Interoperability Framework (IIIF)

---

# PIA goes LOUD
#### IIIF Workflow within PIA

---

# PIA goes LOUD
#### Web Annotation Data Model

---

# PIA goes LOUD
#### Web Annotation Data Model

---

# Linked Art
#### First serialisation attempts

---

# Linked Art
#### Linked Art and IIIF

---

# Linked Art
#### Something else

---

# Collaboration with the Linked Art II Project
#### What has been done

---

# Collaboration with the Linked Art II Project
#### Something else

---

# Collaboration with the Linked Art II Project
#### Workflow

https://github.com/tgra/Linked-Art-Collection-Data-Workflow 

---

# Future Work

- Updating and creating new boilerplates for each top-level entity
- Amendment of the workflow created by Tanya Gray
    - PIA JSON API → Omeka S API (JSON-LD) or DaSCH Service Platform API (JSON-LD, Turtle, RDF/XML)
- Deployment of the PIA Linked Art API at https://data.participatory-archives.ch instead of https://linkedart.participatory-archives.ch (as the JSON API will be deprecated, but still accessible at https://json.participatory-archives.ch/) 
