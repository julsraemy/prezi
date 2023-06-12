---
marp: true
author: Julien A. Raemy
title: Les données ouvertes liées et utilisables (LOUD) — Les protocoles IIIF et Linked Art 
description: Cette présentation est réalisée dans le cadre d'une table ronde intitulée 'Ouvrir les musées au(x) numérique(s)' lors de la conférence Humanistica 2023 à Genève
keywords: LOUD, IIIF, Humanités numériques, Musées
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://julsraemy.ch/prezi/humanistica2023-iiif-loud.html
theme: gaia
class: invert
paginate: true
_paginate: false
---

<!-- _class: lead -->

# Les données ouvertes liées et utilisables (LOUD)
### Les protocoles IIIF et Linked Art
Julien A. Raemy 
(Digital Humanities Lab, Université de Bâle; DaSCH)
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759) [![Google Scholar](https://img.shields.io/static/v1?label=Google%20Scholar&message=Julien%20A.%20Raemy&color=4285F4&logo=googlescholar)](https://scholar.google.ch/citations?user=pGROUG0AAAAJ&hl) [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=julsraemy&color=181717&logo=github)](https://github.com/julsraemy) [![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@julsraemy@hcommons.social&color=6364FF&logo=mastodon)](https://hcommons.social/@julsraemy)

Humanistica 2023 | Ouvrir les musées au(x) numérique(s) 
Musée d'Art et d'Histoire de Genève | 26 Juin 2023


---

# Linked Open Usable Data for Cultural Heritage
### Perspectives on Community Practices and Semantic Interoperability

Thèse de doctorat - https://phd.julsraemy.ch - encadré par : 
- Peter Fornaro (University of Basel)
- Walter Leimgruber (University of Basel)
- Robert Sanderson (Yale University)

<!-- I am doing my PhD in Digital Humanities on Linked Open Usable Data, with a focus on its (potential) use in the Humanities and the perspectives it could bring in terms of semantics and interoperability. My research is grounded as part of the Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA) research project, which aims to develop a Citizen Science platform around three photographic collections of the Swiss Society for Folklore Studies (SSFS).  -->

---

<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)


# <!-- fit --> LOUD

---

## Linked Open Data (LOD)

![bg width:900px](https://5stardata.info/images/5-star-steps.png)

<!-- _footer: "https://5stardata.info/" -->

---

## LOUD 


- Le LOD est trop axé sur la publication de données. Nos données doivent être réutilisées pour avoir un sens et de la valeur.
- Le Linked Open Usable Data (LOUD) cherche un équilibre qui prend en compte les besoins en matière d’exhaustivité et de précision des données (construction ontologique) et les préoccupations pragmatiques (facilité d’utilisation, évolutivité).
    - Cinq principes de conception (_design principles_)
    - Standards : IIIF Presentation API 3.0, Linked Art API, Web Annotation Data Model

<!-- _footer: "https://linked.art/loud" -->

---

<!-- _class: lead -->
![bg 92%](https://julsraemy.ch/prezi/assets/IIIF-logo-stacked.png)
![bg 50%](https://julsraemy.ch/prezi/assets/Linked_Art_logo.png)

---

![bg right:44% contain](https://julsraemy.ch/prezi/assets/iiif-ecosystem.png)

##### International Image Interoperability Framework (IIIF)

- Un modèle pour la présentation et annotation d’objets numériques
- Une communauté, qui développe des API partagées, les implémentent dans des logiciels et exposent des contenus interopérables sur le Web



<!-- _footer: "https://iiif.io" -->

<!-- IIIF is a community-driven initiative, which brings together key players in the academic and CH fields, and has defined open and shared APIs to standardise the way in which image-based resources are delivered on the Web. Implementing the IIIF APIs enables institutions to make better use of their digitised or born-digital material by providing, for instance, deep zooming, comparison, full-text search of OCR objects or annotation capabilities.  -->

---

<!-- _footer: "https://purl.stanford.edu/hs631zg4177" -->

![bg contain 80%](https://julsraemy.ch/prezi/assets/iiif_deepzoom.gif)

<!-- Deep zoom with large images -->

---

<!-- _footer: "https://www.theleidencollection.com/viewer/david-and-uriah/" -->


![bg contain 75%](https://julsraemy.ch/prezi/assets/Leiden_curtain_viewer.gif)


---

![bg contain](https://julsraemy.ch/prezi/assets/iiif-apis.gif)

---


![bg right:60% contain](https://julsraemy.ch/prezi/assets/mirador-coreapis.png)

#### Les protocoles IIIF

- **Image API**
- **Presentation API**
- Authorization Flow API
- Change Discovery API
- Content Search API
- Content State API

<!-- _footer: "https://iiif.io/api" -->

---

![bg right:54% contain](https://julsraemy.ch/prezi/assets/linkedart_50k_feet.svg)

## Linked Art

- Initiative communautaire / groupe de travail du CIDOC
- Fait correspondre les classes et leurs relations respectives à partir de l’ontologie RDF CIDOC-CRM 7.1
- Modèle et API : JSON-LD, vocabulaires Getty

<!-- 

- Règles/Patterns
- Intégration facilitée d’objets et services numériques

-->

<!-- _footer: "https://linked.art" -->


---

![bg contain](https://julsraemy.ch/prezi/assets/la-model.svg)

---

![bg contain](https://julsraemy.ch/prezi/assets/IIIF-LA.svg)

<!-- Linked Art and IIIF -->

---

<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)


# <!-- fit --> LUX
Yale Collections Discovery 

---

Video recording or screenshot of LUX


<!-- 

• Briser les silos (techniques) au sein de communautés (IIIF, Linked Art)
• LOUD comme langage commun entre les institutions du patrimoine culturel et les scientifiques
• Ne pas être seulement sur le web, en faire parti
• LOD + API JSON(-LD) pour se faire comprendre de plusieurs publics

-->

<!-- _footer: "https://lux.collections.yale.edu/" -->




