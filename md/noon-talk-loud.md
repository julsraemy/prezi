---
marp: true
author: Julien A. Raemy
title: Interconnected Resources on the Web – Unveiling Cultural Heritage through Linked Open Usable Data
description: Presentation given in the context of a "noon-talk" on 19 December 2023 at the University of Basel
keywords: Cultural Heritage, IIIF, Linked Art, LOUD
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://julsraemy.ch/prezi/noon-talk-loud.html
theme: gaia
class: invert
paginate: true
_paginate: false
---

<!-- _class: lead -->

# <!-- fit -->  Interconnected Resources on the Web 
##### Unveiling Cultural Heritage through Linked Open Usable Data
Julien A. Raemy 
(Digital Humanities Lab, University of Basel)
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759) [![Google Scholar](https://img.shields.io/static/v1?label=Google%20Scholar&message=Julien%20A.%20Raemy&color=4285F4&logo=googlescholar)](https://scholar.google.ch/citations?user=pGROUG0AAAAJ&hl) [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=julsraemy&color=181717&logo=github)](https://github.com/julsraemy) [![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@julsraemy@hcommons.social&color=6364FF&logo=mastodon)](https://hcommons.social/@julsraemy)

G3S Noon-Talks | 19 December 2023

---

![bg opacity:.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)

# <!-- fit --> Linked Open Usable Data for Cultural Heritage
######  Perspectives on Community Practices and Semantic Interoperability

PhD Thesis supervised by: 
- Prof. Dr. Peter Fornaro (University of Basel)
- Prof. Dr. Walter Leimgruber (University of Basel)
- Dr. Robert Sanderson (Yale University)

<!-- I am doing my PhD in Digital Humanities on Linked Open Usable Data, with a focus on its (potential) use in the Humanities and the perspectives it could bring in terms of community practices and semantic interoperability. My research is grounded as part of the Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA) research project, which aims to develop a Citizen Science platform around three photographic collections of the Cultural Anthropology Switzerland (CAS), formerly the Swiss Society for Folklore Studies (SSFS).  -->

<!-- _footer: "https://phd.julsraemy.ch" -->


---

![bg opacity:.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)

# <!-- fit --> Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA)

- Funded by the Swiss National Science Foundation, Sinergia, 02.2021-01.2025.
    - Institute for Cultural Anthropology and European Ethnology, University of Basel
    - Digital Humanities Lab, University of Basel
    - Bern Academy of the Arts, Bern University of Applied Sciences
- Based on three photographic collections from the Cultural Anthropology Switzerland's archives (*Fotoarchiv der Empirische Kulturwissenschaft Schweiz*)


<!-- PIA is a Sinergia project funded by the Swiss National Science Foundation (SNSF) led by the University of Basel, the Uni, the Bern Academy of the Arts, and the Swiss Society for Folklore Studies. PIA wants to connect the world of data and things in an interdisciplinary manner. 

We explore the phases of the analogue and digital archive from the perspectives of cultural anthropology, technology and design. The common goal of this project is to design a visual interface with machine learning-based tools to make it easy to annotate, contextualize, organize, and link both images and their meta-information, to deliberately encourage the participatory use of archives. -->

<!-- _footer: "https://about.participatory-archives.ch/" -->

---

![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

# Agenda

- Cultural Heritage Data 
- Interlinking Data on the Web
- Linked Open Usable Data
- Conclusion
- Discussion

<!-- 

I'm first going to talk about the ways that data can be interlinked on the web in terms of vision and standards, then I will deconstruct a little bit the definition of what is cultural heritage data with a few examples and finally talk about two communities active in the cultural heritage field that develop and maintain specifications, that goes often hand in hand with the Open Science, Open Access movement.
 -->

---


<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)

# <!-- fit --> Cultural Heritage Data
Heterogeneity, Knowledge Latency, Custodianship

<!-- 

From data to cultural heritage data. And I will divide this section into three parts, three keywords.

 -->

---


# <!-- fit --> Tangible, Intangible, Natural

> Cultural heritage is, in its broadest sense, both a product and a process, which provides societies with a wealth of  resources  that  are  inherited  from  the  past,  created  in  the  present  and  bestowed  for  the  benefit  of  future  generations.  Most  importantly,  it  includes  not  only  **tangible**,  but  also  **natural**  and  **intangible  heritage**. 

<!-- _footer: "[UNESCO. Culture for Development Indicators (2014)](https://n2t.net/ark:/48223/pf0000229608)" -->


---

# <!-- fit  --> $I$ — Defining Cultural Heritage Data

![bg contain 95% right:28%](https://www.artic.edu/iiif/2/dec724f1-cb53-f8a7-8599-0b30ce0267e9/full/full/0/default.jpg)

### Heterogeneity 

1. Cultural heritage data refer to digital or data-driven affordances of cultural heritage, embodying **a rich and varied compilation of insights  originating from a variety of disciplines, techniques, traditions, positions and technologies**. It encompasses both tangible and intangible aspects of a society's culture as well as natural heritage. 

<!--  

Cultural heritage data refer to digital or data-driven affordances of cultural heritage, embodying **a rich and varied compilation of insights  originating from a variety of disciplines, techniques, traditions, positions and technologies**. It encompasses both tangible and intangible aspects of a society's culture.

And on the right-hand side, there is a Male Face Mask from the Guro culture that embody tangible and intangible aspects as it is worn n the occasion of a man’s second funeral.


-->

<!-- _footer: "Male Face Mask (Zamble). https://www.artic.edu/artworks/239464" -->

---

# <!-- fit  --> $II$ — Defining Cultural Heritage Data

### Knowledge Latency

2.  These data, derived from a wide range of disciplines, offer **a latent capacity to support the generation of knowledge** relating to historical time periods, geospatial areas, as well as current and past human and nonhuman activities. 

<!-- 

Every dataset embodies an underlying potential that research and interpretation bring to light. A noticeable divide, especially within cultural heritage, exists between the generation of data, description of it and its use, owing to the diverse array of unforeseen applications.

-->

---


# <!-- fit  --> $III$ — Defining Cultural Heritage Data

### Custodianship 

3. They are collected, curated and maintained **by various entities** such as libraries, archives, museums, higher education institutions,non-governmental organisations, indigenous communities and local groups as well as by the wider public.

---

# <!-- fit  --> _Parts of a Body House_ by Carolee Schneemann

![bg contain](https://artic-web.imgix.net/09fc275f-e14d-4277-af79-17f5b0dcf131/rossenova_difranco_fig01_DRAFT.jpg)

<!-- _footer: "[Rossenova & Di Franco (2022)](https://www.artic.edu/digital-publications/37/perspectives-on-data/28/iterative-pasts-and-linked-futures). Five iterations of _Parts of a Body House_ from 1968 to 1972" -->
<!-- 

Rossenova and Di Franco's article delves into artists' books, focusing on Carolee Schneeman's "Parts of a Body House." Unlike traditional art acquisitions, artists' books landed in libraries of art institutions, following the 1960s' surge in their recognition as art objects. These collections don't fit neatly into curatorial realms; instead, they're cataloged under library definitions. The challenge intensifies when materials resist categorization or adopt archival, serial, or ephemeral labels. Many artists' publications purposefully defy conventional library, archive, and collection norms.

The study uncovered linked collections and publications from Schneeman's contributions, though these distinct versions find varying categorization across institution-specific catalogs.

For unconventional art archives like artist's books, linked data's network model provides a means to chart relationships of indefinable embodied versions, constructing intricate histories beyond categorization or canonization.

However, community discussions revealed difficulty in fully describing the array of relationships across editions, reinterpretations, serializations, or appropriations of publications within the LOD model structure.

-->

---

<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)

# <!-- fit --> Interlinking Data on the Web

The Web, The Semantic Web, Resource Description Framework, Linked Open Data


<!-- 
Linked Data, LOD
 -->

---


# An open vision of the Web

> The [World Wide Web] project merges the techniques of information retrieval and hypertext to make an easy but powerful global information system. The project started with **the philosophy that much academic information should be freely available to anyone**.

<!-- _footer: "[Berners-Lee (1991)](https://archive.md/Lfopj)" -->


---

# The Semantic Web or _the Web of Data_

The Semantic Web is an extension of the World Wide Web, through standards, to make it machine-readable.

![bg contain 95% right:40%](https://upload.wikimedia.org/wikipedia/commons/f/f3/Semantic_Web_Stack.png)

<!-- This Web, which has claimed to be a Semantic Web for several years now, has a centrepiece known as Resource Description Framework (RDF), a general method for describing and exchanging graph data. The Semantic Web offers major opportunities for scholarship as it allows data to be reasoned together, that is to be understood by machines via those RDF-based ontologies, a formal way to represent human-like knowledge.  -->

---

###  Resource Description Framework (RDF)

With RDF, everything goes in threes. Most of the triples' components have Uniform Resource Identifiers (URIs). 

Syntax: subject, predicate, object $(s \ \vec{p} \ o)$

![bg contain 95% right:52%](https://julsraemy.ch/prezi/assets/rdf-sts.svg)

<!-- With RDF, everything goes in threes, the data model contains so-called triples: that is subject, predicate, object that form graphs.
Most of the components of these triples use Uniform Resource Identifiers (URIs) and are generally web-addressable, whether for naming subjects and objects (which may themselves also be objects of other triples) or relationships 

 -->


---


<!-- _footer: "5-star deployment scheme for Open Data. https://5stardata.info/" -->

# Linked Open Data (LOD)

![bg width:900px](https://5stardata.info/images/5-star-steps.png)

<!-- 5-star open data scheme 
1) make your stuff available on the Web (whatever format) under an open license
2) make it available as structured data
3) make it available in a non-proprietary open format (e.g., CSV instead of Excel
4) use URIs to denote things, so that people can point at your stuff
5) link your data to other data to provide context -->

---


<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)

# <!-- fit --> Linked Open Usable Data (LOUD)

Design Principles
Standards & Communities: IIIF, Linked Art
LUX: Yale Collections Discovery 

---


![bg right:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

# LOUD Design Principles

- The right Abstraction for the audience
- Few Barriers to entry
- Comprehensible by introspection
- Documentation with working examples
- Few Exceptions, instead many consistent patterns

<!-- _footer: "https://linked.art/loud/" -->


<!-- The overall idea of LOUD is to make data easy to use for humans, especially for developers. JSON-LD allows for some mapping of ontological constructs into JSON, which is the lingua-franca of modern developers and is a cornerstone technology of LOUD. Five design principles to promote data consumption have been conceived. 
To be part of the Web, not just on the Web.  -->

---

![bg fit right:30% opacity:0.7](https://json-ld.org/images/json-ld-logo.png)  

# LOUD Standards
Examples of specifications following the LOUD design principles:

- **International Image Interoperability Framework (IIIF)**
- W3C Web Annotation Data Model
- **Linked Art**

---

![bg contain right](https://julsraemy.ch/prezi/assets/storiiies.gif)

# IIIF 

- A model for presenting and annotating content
- A global community that develops shared application programming interfaces (APIs), implements them in software, and exposes interoperable content

<!-- _footer: "1) https://iiif.io — 2) Storiiies" -->


<!-- IIIF is a community-driven initiative, which brings together key players in the academic and CH fields, and has defined open and shared APIs to standardise the way in which image-based resources are delivered on the Web. Implementing the IIIF APIs enables institutions to make better use of their digitised or born-digital material by providing, for instance, deep zooming, comparison, full-text search of OCR objects or annotation capabilities.  -->


---
![bg 96%](https://julsraemy.ch/prezi/assets/iiif-ecosystem.png)
![bg 80%](https://julsraemy.ch/prezi/assets/Leiden_curtain_viewer.gif)

<!-- _footer: "1) IIIF Ecosystem — 2) https://www.theleidencollection.com/viewer/david-and-uriah/" -->

---

# <!-- fit --> Linked Art

Linked Art is a community collaborating to define a metadata application profile (the model) for describing cultural heritage, and the technical means for conveniently interacting with it (the API). 

<!-- _footer: "https://linked.art" -->

---

![bg 62%](https://julsraemy.ch/prezi/assets/linkedart_50k_feet.svg)

<!-- Event-based model
-->

<!-- _footer: "[Raemy et al. (2023)](https://doi.org/10.5281/zenodo.7878358), adapted from [Sanderson (2018)](https://www.slideshare.net/Europeana/shout-it-out-loud-by-rob-sanderson-europeanatech-conference-2018)" -->


---

## Community Practices

![bg contain](https://julsraemy.ch/prezi/assets/iiif-trc-1.png)
![bg contain](https://julsraemy.ch/prezi/assets/iiif-trc-2.png)

<!-- _footer: "https://iiif.io/community/trc/" -->

---

![bg contain](https://julsraemy.ch/prezi/assets/use_cases-specifications-1.svg)

---

## LUX: Yale Collections Discovery

![bg opacity:.2](https://library.yale.edu/sites/default/files/beinecke720.jpeg)
![bg opacity:.2](https://britishart.yale.edu/sites/default/files/img/overview/2020-06/2016EF11.572_D8.jpg)
![bg opacity:.2](https://th-thumbnailer.cdn-si-edu.com/DZU5wD7JlgYEjvqC0RGXWZ_45EM=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/fa/49/fa494e15-0d54-403d-9c50-3af1c5890780/ypmarexhgreathall001web.jpg)
![bg opacity:.2](https://artgallery.yale.edu/sites/default/files/styles/max_2600x2600/public/2023-03/2023-ag-exb-4581-0003-pub.jpg)

Yale University Library
Yale Center for British Art
Yale Peabody Museum
Yale University Art Gallery

- 41 million resources
- Platform based on open and shared standards (IIIF, Linked Art)


<!-- _footer: "https://lux.collections.yale.edu/" -->

---

![bg contain 80%](https://julsraemy.ch/prezi/assets/lux-demo.gif)

<!-- _footer: "[Link to optimised video resolution](https://julsraemy.ch/prezi/assets/lux-demo.webm)"-->


---

![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

# <!-- fit --> Some concluding thoughts about LOUD

- Grassroots development of IIIF and Linked Art with collaboration and transparency are one of the key factors, but implementations are needed to be conducted in parallel (specifications versus demonstrability).
- LOUD standards, when used in conjunction, enhances semantic interoperability, even if it comes at the cost of ontological purity.
- LOUD practices and standards should serve as common denominators for cultural heritage institutions and research projects.

<!-- 

An important proposition arises from the observation that adherence to the \ac{LOUD} design principles makes specifications more likely to be adopted. The primary benefit of adopting \ac{LOUD} standards lies in their grassroots nature. The development and maintenance of \ac{LOUD} standards by dedicated communities are characterised by collaboration, consensus building, and transparency. This grassroots approach not only aligns with the core values of openness and collaboration within the \ac{DH} community but also serves as a common denominator between \ac{DH} practitioners and \acp{CHI}. This unique alignment fosters a sense of shared purpose and common ground. However, it's essential to acknowledge that while \ac{LOUD} and its associated standards, including IIIF, hold immense promise, their limited recognition in the wider socio-technical ecosystem may currently hinder their full potential impact.

-->



---

![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

### Image Credits
- [Blick auf das Spalentor]. Basel, 1938. Ernst Brunner. SGV_12N_00115 
- [Katze auf einer Mauer]. Ort und Datum unbekannt. Ernst Brunner. SGV_12N_19553
- [Ringtanz während der Masüras auf der Alp Sura]. Guarda, 1939. SGV_12N_08589


These images are part of the [photographic archives of Cultural Anthropology Switzerland](https://archiv.sgv-sstp.ch/). Licence: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/legalcode)
