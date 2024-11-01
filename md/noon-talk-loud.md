---
marp: true
author: Julien A. Raemy
title: Interconnected Resources on the Web – Unveiling Cultural Heritage through Linked Open Usable Data
description: Presentation given in the context of a "noon-talk" on 19 December 2023 at the University of Basel
keywords: Cultural Heritage, IIIF, Linked Art, LOUD
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://julsraemy.ch/prezi/noon-talk-loud.html
theme: beam
paginate: true
_paginate: false
---

<!-- _class: title -->

<!-- header: Julien A. Raemy | **Interconnected Resources on the Web** | [![w:35 CC BY 4.0](https://julsraemy.ch/prezi/assets/cc-by.svg)](https://creativecommons.org/licenses/by/4.0/)  -->

<!-- footer: G3S Noon-Talk | 19 December 2023 -->

#  Interconnected Resources on the Web: Unveiling Cultural Heritage through Linked Open Usable Data
Julien A. Raemy (Digital Humanities Lab, University of Basel)

<!-- 

Hi everyone, my name is Julien Raemy and I am a PhD Candidate in Digital Humanities at the University of Basel. I'm happy to present what I'm doing as part of my thesis on Linked Open Usable Data for Cultural Heritage, but I'm not going to go into too much technical detail, but rather look at what I've already covered in my literature review and provide some overview of it.

 -->

---

<!-- footer: Preamble -->

![bg opacity:.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)

# PhD Thesis

## Linked Open Usable Data for Cultural Heritage: Perspectives on Community Practices and Semantic Interoperability

PhD Thesis supervised by: 
- Prof. Dr. Peter Fornaro (University of Basel)
- Prof. Dr. Walter Leimgruber (University of Basel)
- Dr. Robert Sanderson (Yale University)

https://phd.julsraemy.ch

<!-- Here is the complete working title of my PhD thesis. I am looking into two perspectives, namely community practices and semantic interoperability. 

I am affiliated with the doctoral programme of the Graduate School of Social Sciences and the main reason is that I would like to leverage a tehoretical framework using the Actor-Network Theory.

 -->


---

![bg opacity:.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)

# <!-- fit --> Participatory Knowledge Practices in Analogue and Digital Image Archives

## PIA

- Funded by the Swiss National Science Foundation, Sinergia, 02.2021-01.2025.
    - Institute for Cultural Anthropology and European Ethnology, University of Basel
    - Digital Humanities Lab, University of Basel
    - Bern Academy of the Arts, Bern University of Applied Sciences
- Based on three photographic collections from the Cultural Anthropology Switzerland's archives (*Fotoarchiv der Empirischen Kulturwissenschaft Schweiz - EKWS*)

https://about.participatory-archives.ch/


<!-- 

My research is grounded as part of the Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA) research project, which aims to develop a Citizen Science platform around three photographic collections of the Cultural Anthropology Switzerland (CAS), formerly the Swiss Society for Folklore Studies (SSFS). 


PIA is a Sinergia project funded by the Swiss National Science Foundation (SNSF) led by the University of Basel, the Uni, the Bern Academy of the Arts, and the Swiss Society for Folklore Studies. PIA wants to connect the world of data and things in an interdisciplinary manner. 

We explore the phases of the analogue and digital archive from the perspectives of cultural anthropology, technology and design. The common goal of this project is to design a visual interface with machine learning-based tools to make it easy to annotate, contextualize, organize, and link both images and their meta-information, to deliberately encourage the participatory use of archives. -->

---

![bg opacity:.16](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

# Agenda

## Interconnected Resources on the Web: Unveiling Cultural Heritage through Linked Open Usable Data

- Cultural Heritage Data 
- Interlinking Data on the Web
- Linked Open Usable Data
- Conclusion
- Discussion

<!-- 

I'm first going to talk about the ways that data can be interlinked on the web in terms of vision and standards, then I will deconstruct a little bit the definition of what is cultural heritage data and finally talk about two communities active in the cultural heritage field that develop and maintain web standards. And then we'll have some time for discussion.
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

<!-- 

From cultural heritage to cultural heritage data.

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

<!-- 
The web, created in 1989 by Tim Berners-Lee, started with the philosophy that much academic information should be freely available to anyone.

 -->

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
- Communities: IIIF, Linked Art
- LUX: Yale Collections Discovery 


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


<!--

The Semantic Web remains a compelling concept, offering powerful capabilities for modelling reality, enabling computers to infer novel information more effectively. However, querying RDF graphs is complicated, requiring a prior understanding of the structure.

 The overall idea of LOUD is to make data easy to use for humans, especially for developers. JSON-LD allows for some mapping of ontological constructs into JSON, which is the lingua-franca of modern developers and is a cornerstone technology of LOUD. Five design principles to promote data consumption have been conceived. 
To be part of the Web, not just on the Web.  -->

---

![bg center width:45% opacity:0.07](https://json-ld.org/images/json-ld-logo.png)  

# LOUD Standards

## Specifications that follow the LOUD principles:

- International Image Interoperability Framework (IIIF)
- *W3C Web Annotation Data Model*
- Linked Art

<!-- 
Three systems have been identified to adhere to the LOUD design principles. They are complementary and can be used either separately or in conjunction.

 -->

---


![center bg width:50% opacity:.1](https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png)

# International Image Interoperability Framework (IIIF) 

## IIIF

- A model for presenting and annotating content
- A global community that develops shared application programming interfaces (APIs), implements them in software, and exposes interoperable content

https://iiif.io


<!-- IIIF is a community-driven initiative, which brings together key players in the academic and CH fields, and has defined open and shared APIs to standardise the way in which image-based resources are delivered on the Web. Implementing the IIIF APIs enables institutions to make better use of their digitised or born-digital material by providing, for instance, deep zooming, comparison, full-text search of OCR objects or annotation capabilities. 

An API is like a set of rules or protocols for how different software applications communicate and share data. It's similar to a common language or set of procedures that allows different programs to understand each other and work together efficiently.
 -->

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

![center bg width:50% opacity:.1](https://julsraemy.ch/prezi/assets/Linked_Art_logo.png)

# Linked Art

**Linked Art is a community collaborating to define a metadata application profile (the model) for describing cultural heritage, and the technical means for conveniently interacting with it (the API).** 

https://linked.art

---

# Linked Art from 50k feet

![center](https://julsraemy.ch/prezi/assets/linkedart_50k_feet.svg)

[Raemy et al. 2023, adapted from Sanderson 2018]

<!-- 
The Linked Art data model, in its domain-specific application, particularly resonates with five facets: what, where, who, how, and when.  This focus facilitates a nuanced tracking and interpretation of the key aspects of data provenance.

 -->

---

# Community Practices

![bg 95%](https://julsraemy.ch/prezi/assets/iiif-trc-1.png)
![bg 95%](https://julsraemy.ch/prezi/assets/iiif-trc-2.png)


---

# Community Practices

![center bg 65%](https://julsraemy.ch/prezi/assets/use_cases-specifications-1.svg)

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

![center](https://julsraemy.ch/prezi/assets/lux-demo.gif)

[Link to optimised video resolution](https://julsraemy.ch/prezi/assets/lux-demo.webm)

---

<!-- footer: Conclusion -->

# Conclusion

## Some concluding thoughts about LOUD

- Grassroots development of IIIF and Linked Art with collaboration and transparency are one of the key factors, but implementations are needed to be conducted in parallel (specifications versus demonstrability).
- LOUD standards, when used in conjunction, enhances semantic interoperability, even if it comes at the cost of ontological purity.
- LOUD practices and standards should serve as common denominators for cultural heritage institutions and research projects.

<!-- 

An important proposition arises from the observation that adherence to the \ac{LOUD} design principles makes specifications more likely to be adopted. The primary benefit of adopting \ac{LOUD} standards lies in their grassroots nature. The development and maintenance of \ac{LOUD} standards by dedicated communities are characterised by collaboration, consensus building, and transparency. This grassroots approach not only aligns with the core values of openness and collaboration within the \ac{DH} community but also serves as a common denominator between \ac{DH} practitioners and \acp{CHI}. This unique alignment fosters a sense of shared purpose and common ground. However, it's essential to acknowledge that while \ac{LOUD} and its associated standards, including IIIF, hold immense promise, their limited recognition in the wider socio-technical ecosystem may currently hinder their full potential impact.

-->

---

<!-- footer: References and Image Credits -->

<!-- class: tinytext --> 

# References

Berners-Lee, T. (1991, August 6). WorldWideWeb—Executive summary. Archive.Md. https://archive.md/Lfopj

Cornut, M., Raemy, J. A., & Spiess, F. (2023). Annotations as Knowledge Practices in Image Archives: Application of Linked Open Usable Data and Machine Learning. Journal on Computing and Cultural Heritage, 16(4), 1–19. https://doi.org/10.1145/3625301

Idehen, K. U. (2017, July 24). Semantic Web Layer Cake Tweak, Explained. OpenLink Software Blog. https://medium.com/openlink-software-blog/semantic-web-layer-cake-tweak-explained-6ba5c6ac3fab

Raemy, J. A., Gray, T., Collinson, A., & Page, K. R. (2023, July 12). Enabling Participatory Data Perspectives for Image Archives through a Linked Art Workflow (Poster). Digital Humanities 2023 Posters. Digital Humanities 2023, Graz, Austria. https://doi.org/10.5281/zenodo.7878358

Sanderson, R. (2018, May 15). Shout it Out: LOUD. EuropeanaTech Conference 2018, Rotterdam, the Netherlands. https://www.slideshare.net/Europeana/shout-it-out-loud-by-rob-sanderson-europeanatech-conference-2018

UNESCO. Culture for Development Indicators. (2014). Methodology Manual. United Nations Educational, Scientific and Cultural Organization. https://n2t.net/ark:/48223/pf0000229608


---

![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

# Image Credits

## Cultural Anthropology Switzerland

These images are part of the [photographic archives of Cultural Anthropology Switzerland](https://archiv.sgv-sstp.ch/), formerly the Swiss Society for Folklore Studies, based in Basel, Switzerland. Licence: CC BY-NC 4.0 [![w:60](https://julsraemy.ch/prezi/assets/cc-by-nc.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

- Brunner, Ernst. [Blick auf das Spalentor]. Basel, 1938. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_00115. Alte Bildnummer: AB 15 
- Brunner, Ernst. [Katze auf einer Mauer]. Ort und Datum unbekannt. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_19553. Alte Bildnummer: HV 53
- Brunner, Ernst. [Ringtanz während der Masüras auf der Alp Sura]. Guarda, 1939. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_08589. Alte Bildnummer: DL 89