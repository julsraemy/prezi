---
marp: true
author: Julien A. Raemy
title: Interlinking Cultural Heritage Data with Community-driven Principles and Standards
description: Presentation given in the context of the PIA Ringvorlesung on 8 May 2024 at the University of Basel
keywords: Cultural Heritage, IIIF, Linked Art, LOUD, Community Practices, Semantic Interoperability
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://julsraemy.ch/prezi/pia-ringvorlesung-2024.html
theme: beam
paginate: true
_paginate: false
---

<!-- _class: title -->

<!-- header: Julien A. Raemy | **Interlinking Cultural Heritage Data** | [![w:35 CC BY 4.0](https://julsraemy.ch/prezi/assets/cc-by.svg)](https://creativecommons.org/licenses/by/4.0/) -->

<!-- _footer: PIA Lecture Series | 8 May 2024 -->


# Interlinking Cultural Heritage Data with Community-driven Principles and Standards

Julien A. Raemy
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759) [![Google Scholar](https://img.shields.io/static/v1?label=Google%20Scholar&message=Julien%20A.%20Raemy&color=4285F4&logo=googlescholar)](https://scholar.google.ch/citations?user=pGROUG0AAAAJ&hl) [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=julsraemy&color=181717&logo=github)](https://github.com/julsraemy) [![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@julsraemy@hcommons.social&color=6364FF&logo=mastodon)](https://hcommons.social/@julsraemy)
University of Basel, Switzerland



---

<!-- footer: Preamble -->


![bg opacity:.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)

# PhD Thesis

## Linked Open Usable Data for Cultural Heritage: Perspectives on Community Practices and Semantic Interoperability

Supervised by: 
- Prof. Dr. Peter Fornaro (University of Basel)
- Prof. Dr. Walter Leimgruber (University of Basel)
- Dr. Robert Sanderson (Yale University)

https://phd.julsraemy.ch

<!-- I am doing my PhD in Digital Humanities on Linked Open Usable Data, with a focus on its (potential) use in the Humanities and the perspectives it could bring in terms of community practices and semantic interoperability. My research is grounded as part of the Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA) research project, which aims to develop a Citizen Science platform around three photographic collections of the Cultural Anthropology Switzerland (CAS), formerly the Swiss Society for Folklore Studies (SSFS).  -->




---

![bg opacity:.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

# Agenda

## Interlinking Cultural Heritage Data with Community-driven Principles and Standards

- Cultural Heritage Data 
- Interlinking Data on the Web
- Linked Open Usable Data
- Conclusion
- Discussion

<!-- 

I'm first going to talk about the ways that data can be interlinked on the web in terms of vision and standards, then I will deconstruct a little bit the definition of what is cultural heritage data with a few examples and finally talk about two communities active in the cultural heritage field that develop and maintain specifications, that goes often hand in hand with the Open Science, Open Access movement.
 -->

---

![bg opacity:0.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)


<!-- footer: Cultural Heritage Data -->

# Cultural Heritage Data


- Tangible, Intangible, and Natural Heritage
- Defining Cultural Heritage Data
    - Heterogeneity
    - Knowledge Latency
    - Custodianship
- *Parts of a Body House*

<!-- 

From data to cultural heritage data. And I will divide this section into three parts, three keywords.

 -->

---

# Tangible, Intangible, Natural

![center bg width:360px opacity:.32](https://www.artic.edu/iiif/2/dec724f1-cb53-f8a7-8599-0b30ce0267e9/full/full/0/default.jpg)

> Cultural heritage is, in its broadest sense, both a product and a process, which provides societies with a wealth of  resources  that  are  inherited  from  the  past,  created  in  the  present  and  bestowed  for  the  benefit  of  future  generations.  Most  importantly,  it  includes  not  only  **tangible**,  but  also  **natural**  and  **intangible  heritage**. 

[UNESCO. Culture for Development Indicators 2014]


Background image: Guro. (1900-1950). *Male Face Mask (Zamble)* [Wood and pigment]. Art Institute of Chicago, Chicago, IL, USA. https://www.artic.edu/artworks/239464

<!-- 

A broad definition of Cultural Heritage, often limited to its tangibility or materiality. 

In thinking about the concept of cultural heritage, I find this definition particularly resonant. This broader perspective is motivated by my interest in Linked Open Usable Data standards as a research area, particularly because of their notable agnosticism towards data.

The background image is a Male Face Mask from the Guro culture that embody tangible and intangible aspects as it is worn on the occasion of a man’s second funeral.

 -->

---

# $I$ — Defining Cultural Heritage Data


## Heterogeneity 

1. Cultural heritage data refer to digital or data-driven affordances of cultural heritage, embodying **a rich and varied compilation of insights  originating from a variety of disciplines, techniques, traditions, positions and technologies**. It encompasses both tangible and intangible aspects of a society's culture as well as natural heritage. 

<!--  

As a fundamental characteristic, heterogeneity signifies the diverse forms and origins that shape heritage. E.g. Different techniques and varying viewpoints in treating data modelling.

-->

---

# $II$ — Defining Cultural Heritage Data

## Knowledge Latency

2.  These data, derived from a wide range of disciplines, offer **a latent capacity to support the generation of knowledge** relating to historical time periods, geospatial areas, as well as current and past human and nonhuman activities. 

<!-- 

Every dataset embodies an underlying potential that research and interpretation bring to light. A noticeable divide, especially within cultural heritage, exists between the generation of data, description of it and its use, owing to the diverse array of unforeseen applications.

This second characteristic also highlights the temporal dimension, presenting cultural heritage data as a repository of latent knowledge awaiting discovery and interpretation. Notably, not all artefacts are – or should be – digitised, and even among those that are, (mis)representation and challenges in interconnecting them persist.

-->

---


# $III$ — Defining Cultural Heritage Data

## Custodianship 

3. They are collected, curated and maintained **by various entities** such as libraries, archives, museums, higher education institutions, non-governmental organisations, indigenous communities and local groups as well as by the wider public.

<!-- 

This dimension reinforces the essential role played by a variety of entities, predominantly CHIs, in safeguarding and managing resources, ensuring their preservation and accessibility for present and future generations. However, it's crucial to acknowledge the great divide in terms of resources, with indigenous and local communities often facing challenges in custodianship responsibilities.

 -->

---

# _Parts of a Body House_ by Carolee Schneemann

![center](https://artic-web.imgix.net/09fc275f-e14d-4277-af79-17f5b0dcf131/rossenova_difranco_fig01_DRAFT.jpg)

[Rossenova & Di Franco 2022]

<!-- 

Rossenova and Di Franco's article delves into artists' books, focusing on Carolee Schneeman's "Parts of a Body House." Unlike traditional art acquisitions, artists' books landed in libraries of art institutions, following the 1960s' surge in their recognition as art objects. These collections don't fit neatly into curatorial realms; instead, they're cataloged under library definitions. The challenge intensifies when materials resist categorization or adopt archival, serial, or ephemeral labels. Many artists' publications purposefully defy conventional library, archive, and collection norms.

The study uncovered linked collections and publications from Schneeman's contributions, though these distinct versions find varying categorization across institution-specific catalogs.

For unconventional art archives like artist's books, linked data's network model provides a means to chart relationships of indefinable embodied versions, constructing intricate histories beyond categorization or canonization.

However, community discussions revealed difficulty in fully describing the array of relationships across editions, reinterpretations, serializations, or appropriations of publications within the LOD model structure.

-->

---

<!-- _footer: " " -->

<!-- _header: " " -->


![bg](https://artic-web.imgix.net/d2c4713c-9f2e-4264-92f1-b9635a7cc12c/lozano_di_franco_hero.jpg?rect=1182%2C1037%2C1490%2C838&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=3000&h=1687)

<!-- 

While the case-study research revealed the interconnections among the collections and publications activated by Schneemann’s contribution, these discrete iterations are sorted into different categories within a group of collection catalogs across institutions.

For archives of nonstandard art objects such as net art or artists’ publishing (e.g., Schneemann’s work), the network model of LOD offers an opportunity to map out relations of embodied iterations that defy categorization (or canonization) and thus construct new, fuller and more nuanced histories around these materials.

During community discussions, the sheer range of possible relations across editions, reinterpretations, serializations, or appropriations of publications proved challenging to describe completely within the structure of the LOD model.

Rossenova & Di Franco (2022)

 -->

---

![bg opacity:0.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)

<!-- footer: Interlinking Data on the Web -->

# Interlinking Data on the Web

- The Web
- The Semantic Web
- Resource Description Framework
- Linked Open Data

---


# An Open Vision of the Web

> The [World Wide Web] project merges the techniques of information retrieval and hypertext to make an easy but powerful global information system. The project started with **the philosophy that much academic information should be freely available to anyone**.

[Berners-Lee 1991]


---

# The Semantic Web or _the Web of Data_

The Semantic Web is an extension of the World Wide Web, through standards, to make it machine-readable.

![center width:530px](https://julsraemy.ch/prezi/assets/tweaked-semweb-layer-cake.webp)

Tweaked Semantic Web Layer Cake [Idehen 2017]

<!-- This Web, which has claimed to be a Semantic Web for several years now, has a centrepiece known as Resource Description Framework (RDF), a general method for describing and exchanging graph data. The Semantic Web offers major opportunities for scholarship as it allows data to be reasoned together, that is to be understood by machines via those RDF-based ontologies, a formal way to represent human-like knowledge.  -->

---

#  Resource Description Framework (RDF)

With RDF, everything goes in threes. Most of the triples' components have Uniform Resource Identifiers (URIs). Syntax: **subject, predicate, object** $(s \ \vec{p} \ o)$ 

![center width:590px](https://julsraemy.ch/prezi/assets/rdf-graph.svg)


<!-- With RDF, everything goes in threes, the data model contains so-called triples: that is subject, predicate, object that form graphs.
Most of the components of these triples use Uniform Resource Identifiers (URIs) and are generally web-addressable, whether for naming subjects and objects (which may themselves also be objects of other triples) or relationships 

 -->


---

# Linked Open Data (LOD)

![center](https://5stardata.info/images/5-star-steps.png)

5-star deployment scheme for Open Data: https://5stardata.info/

<!-- 5-star open data scheme 
1) make your stuff available on the Web (whatever format) under an open license
2) make it available as structured data
3) make it available in a non-proprietary open format (e.g., CSV instead of Excel
4) use URIs to denote things, so that people can point at your stuff
5) link your data to other data to provide context -->

---

<!-- footer: Linked Open Usable Data -->

![bg opacity:0.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)

# Linked Open Usable Data (LOUD)

- Design Principles & Standards
- Systematic Review
- Communities: IIIF, Linked Art
- LUX: Yale Collections Discovery 

---

# Linked Open Usable Data (LOUD)

## LOUD


- The term was coined by Robert Sanderson who has been involved in the conception and maintenance of web standards, mainly in the cultural heritage field. 
- LOUD's goal is to achieve the Semantic Web's intent on a global scale in a usable fashion by leveraging community-driven and JSON-LD-based specifications.
- It has five main design principles to make the data more easily accessible to software developers, who play a key role in interacting with the data and building software and services on top of it, and to some extent to academics. 

---

![bg opacity:.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

# LOUD Design Principles

## Five design principles

- The right Abstraction for the audience
- Few Barriers to entry
- Comprehensible by introspection
- Documentation with working examples
- Few Exceptions, instead many consistent patterns

https://linked.art/loud/


<!-- The overall idea of LOUD is to make data easy to use for humans, especially for developers. JSON-LD allows for some mapping of ontological constructs into JSON, which is the lingua-franca of modern developers and is a cornerstone technology of LOUD. Five design principles to promote data consumption have been conceived. 
To be part of the Web, not just on the Web.  -->

---

![bg center width:45% opacity:0.07](https://json-ld.org/images/json-ld-logo.png)  

# LOUD Standards

## Specifications that follow the LOUD principles:

- International Image Interoperability Framework (IIIF)
- *W3C Web Annotation Data Model*
- Linked Art

---

# LOUD Systematic Review

![center width:590px](https://julsraemy.ch/prezi/assets/loud-references-venn.svg)

_To be published as part of the PhD Thesis_

---

![center bg width:50% opacity:.1](https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png)

# International Image Interoperability Framework (IIIF) 

## IIIF

- A model for presenting and annotating content
- A global community that develops shared application programming interfaces (APIs), implements them in software, and exposes interoperable content

https://iiif.io


<!-- IIIF is a community-driven initiative, which brings together key players in the academic and CH fields, and has defined open and shared APIs to standardise the way in which image-based resources are delivered on the Web. Implementing the IIIF APIs enables institutions to make better use of their digitised or born-digital material by providing, for instance, deep zooming, comparison, full-text search of OCR objects or annotation capabilities.  -->


---

# Compare Images

![center](https://julsraemy.ch/prezi/assets/compare.gif)

Letter from Alexander Hamilton Papers (September 6, 1780), Library of Congress: https://prtd.app/#72f604db-6869-4c08-91ce-7c79502a7f35

---

# Storytelling

![center](https://julsraemy.ch/prezi/assets/storiiies.gif)

Storiiies: http://storiiies.cogapp.com/


---

# Machine-generated Annotations

![center width:750px](https://julsraemy.ch/prezi/assets/pia_iiif_mirador.png)

See Cornut et al. [2023]

---

# Layers of digitisation

![center width:680px](https://julsraemy.ch/prezi/assets/Leiden_curtain_viewer.gif)


Leiden Collection's Curtain Viewer: 
https://www.theleidencollection.com/viewer/david-and-uriah/

---

# IIIF Ecosystem

![center](https://julsraemy.ch/prezi/assets/iiif-ecosystem.png)

---


# IIIF Community Practices

![bg 95%](https://julsraemy.ch/prezi/assets/iiif-trc-1.png)
![bg 95%](https://julsraemy.ch/prezi/assets/iiif-trc-2.png)

---

# IIIF Community Practices

![center bg 65%](https://julsraemy.ch/prezi/assets/use_cases-specifications-1.svg)

---

![center bg width:50% opacity:.1](https://julsraemy.ch/prezi/assets/Linked_Art_logo.png)

# Linked Art

**Linked Art is a community collaborating to define a metadata application profile (the model) for describing cultural heritage, and the technical means for conveniently interacting with it (the API).** 

https://linked.art

---

# Finding the right balance

![center width:750px](https://julsraemy.ch/prezi/assets/la_usability_completeness.png)

[Sanderson 2019]

<!-- 

- Linked Art is focused on usability, not full precision / completeness
- Consistently solves actual challenges from real data
- Development is iterative, as new use cases are found

 -->

---


# Linked Art Data Model Fundamentals

| Level         | Linked Art                      |
|----------------|---------------------------------|
| **Model**      | CIDOC Conceptual Reference Model (CRM)                       |
| **Ontology**   | [RDF encoding of CRM 7.1](https://www.cidoc-crm.org/html/cidoc_crm_v7.1.2.html), plus extensions       |
| **Vocabulary** | [Getty Vocabularies](https://www.getty.edu/research/tools/vocabularies/) (mainly the Art & Architecture Thesaurus) |
| **Profile**    | Object-based cultural heritage (mainly art museum oriented)  |
| **API**        | [JSON-LD 1.1](https://www.w3.org/TR/json-ld11/), following REST (representational state transfer) and web patterns                         |

---

# Linked Art from 50k feet

![center](https://julsraemy.ch/prezi/assets/linkedart_50k_feet.svg)

[Raemy et al. 2023, adapted from Sanderson 2018]

---


# Participation in both communities

![center](https://julsraemy.ch/prezi/assets/survey_heatmap.svg)

[Raemy 2023]

<!-- 

1) Belonging to a given commnity - before 2011
2) People that have been active prior to 2021 tend to be more active

-->


---

# LUX: Yale Collections Discovery

![bg opacity:.2](https://library.yale.edu/sites/default/files/beinecke720.jpeg)
![bg opacity:.2](https://britishart.yale.edu/sites/default/files/img/overview/2020-06/2016EF11.572_D8.jpg)
![bg opacity:.2](https://th-thumbnailer.cdn-si-edu.com/DZU5wD7JlgYEjvqC0RGXWZ_45EM=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/fa/49/fa494e15-0d54-403d-9c50-3af1c5890780/ypmarexhgreathall001web.jpg)
![bg opacity:.2](https://artgallery.yale.edu/sites/default/files/styles/max_2600x2600/public/2023-03/2023-ag-exb-4581-0003-pub.jpg)

- 41 million resources from 
    - Yale University Library
    - Yale Center for British Art
    - Yale Peabody Museum
    - Yale University Art Gallery 
- Platform based on open and shared standards (IIIF, Linked Art)

https://lux.collections.yale.edu/

---

# LUX Data Pipeline and Architecture

![center width:600px](https://julsraemy.ch/prezi/assets/lux-arch-simple.png)

[Raemy & Sanderson 2023]

<!-- 

Harvest: It runs nightly and is triggered by an operating system level scheduler to poll each stream to find and retrieve records that have changed since the previous harvest.
Transform: The records are passed through source specific transformation routines in order to either map from arbitrary data formats, or to validate and clean up records already provided in Linked Art. 
Reconcile: This process is conducted to discover further identities from the various datasets to be able to collect all information about a particular entity eventually into a single record.
Re-Identify: It maps the original \acp{URI} of the records to the internal identifiers.
Merge: The records from multiple sources that have been mapped to the same identifier are merged together to form the single record.
Load: The resulting dataset is then annotated with some additional features for indexing and exported to MarkLogic.

-->

---

![center](https://julsraemy.ch/prezi/assets/lux-demo.gif)

[Link to optimised video resolution](https://julsraemy.ch/prezi/assets/lux-demo.webm)


---

<!-- footer: Conclusion -->

# Conclusion

## Some concluding thoughts about LOUD

- Grassroots development of IIIF and Linked Art with collaboration and transparency are one of the key factors, but implementations are needed to be conducted in parallel (specifications versus demonstrability).
- LOUD standards, when used in conjunction, enhances semantic interoperability, even if it comes at the cost of ontological purity.
- LOUD practices and standards should serve as common denominators for cultural heritage institutions, public bodies as well as research projects.

<!-- 

An important proposition arises from the observation that adherence to the \ac{LOUD} design principles makes specifications more likely to be adopted. The primary benefit of adopting \ac{LOUD} standards lies in their grassroots nature. The development and maintenance of \ac{LOUD} standards by dedicated communities are characterised by collaboration, consensus building, and transparency. This grassroots approach not only aligns with the core values of openness and collaboration within the \ac{DH} community but also serves as a common denominator between \ac{DH} practitioners and \acp{CHI}. This unique alignment fosters a sense of shared purpose and common ground. However, it's essential to acknowledge that while \ac{LOUD} and its associated standards, including IIIF, hold immense promise, their limited recognition in the wider socio-technical ecosystem may currently hinder their full potential impact.

-->


---

# _A multitude of tools_

![](https://youtu.be/pOX9CrvAG7I)

> For a better understanding of the past,
Our images have to be enhanced,
A new dialogue in three dimensions,
Must have openness at its heart,
For somewhere within the archive
Of our aggregated minds
Are a multitude of questions
And a multitude of answers,
Simply awaiting to be found.

[Mr Gee 2023], Data Poet at EuropeanaTech 2023


---

<!-- footer: References and Image Credits -->

<!-- class: tinytext --> 

# References $I$

Berners-Lee, T. (1991, August 6). WorldWideWeb—Executive summary. Archive.Md. https://archive.md/Lfopj

Cornut, M., Raemy, J. A., & Spiess, F. (2023). Annotations as Knowledge Practices in Image Archives: Application of Linked Open Usable Data and Machine Learning. Journal on Computing and Cultural Heritage, 16(4), 1–19. https://doi.org/10.1145/3625301

Idehen, K. U. (2017, July 24). Semantic Web Layer Cake Tweak, Explained. OpenLink Software Blog. https://medium.com/openlink-software-blog/semantic-web-layer-cake-tweak-explained-6ba5c6ac3fab

Mr Gee. (2023, October 12). Day 2 Closing – A multitude of tools. EuropeanaTech 2023. EuropeanaTech 2023, The Hague, Netherlands. https://youtu.be/pOX9CrvAG7I

Raemy, J. A. (2023). Characterising the IIIF and Linked Art Communities: Survey report (p. 29) [Report]. University of Basel. https://doi.org/10.5451/unibas-ep95340

Raemy, J. A., Gray, T., Collinson, A., & Page, K. R. (2023, July 12). Enabling Participatory Data Perspectives for Image Archives through a Linked Art Workflow (Poster). Digital Humanities 2023 Posters. Digital Humanities 2023, Graz, Austria. https://doi.org/10.5281/zenodo.7878358

---

# References $II$

Raemy, J. A., & Sanderson, R. (2023). Analysis of the Usability of Automatically Enriched Cultural Heritage Data (arXiv:2309.16635). arXiv. https://doi.org/10.48550/arXiv.2309.16635

Rossenova, L., & Di Franco, K. (2022). Iterative Pasts and Linked Futures: A Feminist Approach to Modeling Data in Archives and Collections of Artists’ Publishing. Perspectives on Data. https://www.artic.edu/digital-publications/37/perspectives-on-data/28/iterative-pasts-and-linked-futures

Sanderson, R. (2018, May 15). Shout it Out: LOUD. EuropeanaTech Conference 2018, Rotterdam, the Netherlands. https://www.slideshare.net/Europeana/shout-it-out-loud-by-rob-sanderson-europeanatech-conference-2018

Sanderson, R. (2019). Keynote: Standards and Communities: Connected People, Consistent Data, Usable Applications. 2019 ACM/IEEE Joint Conference on Digital Libraries (JCDL), 28. https://doi.org/10.1109/JCDL.2019.00009

UNESCO. Culture for Development Indicators. (2014). Methodology Manual. United Nations Educational, Scientific and Cultural Organization. https://n2t.net/ark:/48223/pf0000229608


---

![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

# Image Credits

## Cultural Anthropology Switzerland

These images are part of the [photographic archives of Cultural Anthropology Switzerland](https://archiv.sgv-sstp.ch/), formerly the _Swiss Society for Folklore Studies_, based in Basel, Switzerland. Licence: CC BY-NC 4.0 [![w:60](https://julsraemy.ch/prezi/assets/cc-by-nc.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

- Brunner, Ernst. [Blick auf das Spalentor]. Basel, 1938. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_00115. Alte Bildnummer: AB 15. https://archiv.sgv-sstp.ch/resource/422350 
- Brunner, Ernst. [Katze auf einer Mauer]. Ort und Datum unbekannt. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_19553. Alte Bildnummer: HV 53. https://archiv.sgv-sstp.ch/resource/441788
- Brunner, Ernst. [Ringtanz während der Masüras auf der Alp Sura]. Guarda, 1939. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_08589. Alte Bildnummer: DL 89. https://archiv.sgv-sstp.ch/resource/430824

