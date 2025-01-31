---
marp: true
author: Julien A. Raemy
title: Situating Interlinked Cultural Heritage Data on the Web
description: This presentation focuses on situating data produced by humans and nonhumans engaged in the cultural heritage field and published on the Web in line with the Open Science and Citizen Science movements. It aims to map the associations among various communities of practice, particularly within libraries, archives and museums, and the precarious balance between exhaustiveness and a rigid structure of data description versus the potential for multiplying assertions, bypassing cataloguing rules and their underlying postcolonial constructs. The openness and interconnection of data makes it possible to examine the form of description as well as the method of publication, and inevitably to analyse the biases linked to the associated vocabularies, For instance, the Web, which has claimed to be a Semantic Web for several years now, has a centrepiece known as Resource Description Framework (RDF), a general method for describing and exchanging graph data and a Web standard since 2004. The Semantic Web offers major opportunities for the Humanities because it allows data to be reasoned together, to be understood by machines via RDF-based ontologies, a formal way to represent human-like knowledge. Developing infrastructures, or sites of assemblage, capable of creating and maintaining RDF statements and other related technologies or building on this standard to interconnect online records is not straightforward and requires a fair amount of socio-technical elements to be implemented. As a demonstration, I will look at the practices of two community-driven initiatives, mainly active in the cultural heritage field, through an Actor-Network Theory (ANT) lens, namely the International Image Interoperability Framework (IIIF) and Linked Art, which have developed shared specifications and related services on agreed-upon design principles.
keywords: Cultural Heritage, IIIF, Linked Art, LOUD, Semantic Web
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://doi.org/10.5281/zenodo.8250117
theme: gaia
class: invert
paginate: true
_paginate: false
---

<!-- _class: lead -->

# <!-- fit --> Situating Interlinked Cultural Heritage Data on the Web
Julien A. Raemy (Digital Humanities Lab, University of Basel)
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759) [![Google Scholar](https://img.shields.io/static/v1?label=Google%20Scholar&message=Julien%20A.%20Raemy&color=4285F4&logo=googlescholar)](https://scholar.google.ch/citations?user=pGROUG0AAAAJ&hl) [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=julsraemy&color=181717&logo=github)](https://github.com/julsraemy) [![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@julsraemy@hcommons.social&color=6364FF&logo=mastodon)](https://hcommons.social/@julsraemy)

STS-CH 2023 Conference
Basel, Switzerland | 31 August 2023

[![width:400px](https://zenodo.org/badge/DOI/10.5281/zenodo.8250117.svg)](https://doi.org/10.5281/zenodo.8250117)

<!-- 

Hi everyone, my name is Julien Raemy, I am a Phd Candidate in Digital Humanities here at the University of Basel and I am very happy to be here present some reflections on cultural heritage data in the context of my thesis. 
 -->

--- 

# Agenda
![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/1000,/0/default.jpg)

- Interlinking Data on the Web
- Cultural Heritage Data 
- The International Image Interoperability Framework (IIIF) and Linked Art

<!-- 

I'm first going to talk about the ways that data can be interlinked on the web in terms of vision and standards, then I will deconstruct a little bit the definition of what is cultural heritage data with a few examples and finally talk about two communities active in the cultural heritage field that develop and maintain specifications, that goes often hand in hand with the Open Science, Open Access movement.
 -->

---


<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)

# <!-- fit --> Interlinking Data on the Web


---

# An open vision of the Web

> The [World Wide Web] project merges the techniques of information retrieval and hypertext to make an easy but powerful global information system. The project started with **the philosophy that much academic information should be freely available to anyone**.

<!-- _footer: "Berners-Lee (1991)" -->

<!-- 
I'd like to start by mentioning an event that took place more than thirty years ago: the advent of the World Wide Web, created at CERN in Geneva by Tim Berners-Lee in 1989. In one of his email, archived by the Internet Archive, Berners-Lee mentions that the web project began with the idea that a large part of academic information should be freely available to everyone.
-->

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
Most of the components of these triples use Uniform Resource Identifiers (URIs) and are generally web-addressable, whether for naming subjects and objects (which may themselves also be objects of other triples) or relationships. 

As for instance, in this graph where the subject, STS-CH is a conference, that it started today and will end tomorrow. This is a presentation in graph that can be represented in different forms and formats and understood by computers. 
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

# <!-- fit  --> $I$ — Defining Cultural Heritage Data

![bg contain 95% right:28%](https://www.artic.edu/iiif/2/dec724f1-cb53-f8a7-8599-0b30ce0267e9/full/full/0/default.jpg)

### Heterogeneity 

1. Cultural heritage data refer to digital or data-driven affordances of cultural heritage, embodying **a rich and varied compilation of insights  originating from a variety of disciplines, techniques, traditions, positions and technologies**. It encompasses both tangible and intangible aspects of a society's culture. 

<!--  

Cultural heritage data refer to digital or data-driven affordances of cultural heritage, embodying **a rich and varied compilation of insights  originating from a variety of disciplines, techniques, traditions, positions and technologies**. It encompasses both tangible and intangible aspects of a society's culture.

And on the right-hand side, there is a Male Face Mask from the Guro culture that embody tangible and intangible aspects as it is worn n the occasion of a man’s second funeral.


-->

<!-- _footer: "Male Face Mask (Zamble). https://www.artic.edu/artworks/239464" -->

---

##### Notre-Dame's Restoration 

Keystones as Full-Fledged Actors

![bg contain right:73%](https://julsraemy.ch/prezi/assets/guillem-claveaux.png)

<!-- _footer: "Guillem et al. (2023)" -->

<!--

Another example, one coming from the restoration of Notre-Dame Cathedral in Paris. In this project, the restoration part is often told from various viewpoints, from stonecutters, conservators, archaeologists, and architects. A contribution from Anaïs Guillem, Antoine Gros and Livio DeLuca shifts the perspective by showcasing two keystones from the nave's F29-30 double arch, destroyed in the 2019 fire. Viewing them not only as artefacts but as agents that reveal their unique journey — once part of the vault, they fell, underwent diverse stages (burial, cleaning, digitization, restoration, etc.), and became active participants, echoing Actor-Network Theory principles.

  -->

---

# <!-- fit  --> $II$ — Defining Cultural Heritage Data

### Knowledge Latency

2.  These data, derived from a wide range of disciplines, offer **a latent capacity to support the generation of knowledge** relating to historical time periods, geospatial areas, as well as current and past human and nonhuman activities. 

<!-- 

Every dataset embodies an underlying potential that research and interpretation bring to light. A noticeable divide, especially within cultural heritage, exists between the generation of data, description of it and its use, owing to the diverse array of unforeseen applications.

-->
---

# <!-- fit  --> _Parts of a Body House_ by Carolee Schneemann

![bg contain](https://artic-web.imgix.net/09fc275f-e14d-4277-af79-17f5b0dcf131/rossenova_difranco_fig01_DRAFT.jpg)

<!-- _footer: "Rossenova & Di Franco (2022). Figure 1: Five iterations of _Parts of a Body House_ from 1968 to 1972." -->

<!-- 

Rossenova and Di Franco's article delves into artists' books, focusing on Carolee Schneeman's "Parts of a Body House." Unlike traditional art acquisitions, artists' books landed in libraries of art institutions, following the 1960s' surge in their recognition as art objects. These collections don't fit neatly into curatorial realms; instead, they're cataloged under library definitions. The challenge intensifies when materials resist categorization or adopt archival, serial, or ephemeral labels. Many artists' publications purposefully defy conventional library, archive, and collection norms.

The study uncovered linked collections and publications from Schneeman's contributions, though these distinct versions find varying categorization across institution-specific catalogs.

For unconventional art archives like artist's books, linked data's network model provides a means to chart relationships of indefinable embodied versions, constructing intricate histories beyond categorization or canonization.

However, community discussions revealed difficulty in fully describing the array of relationships across editions, reinterpretations, serializations, or appropriations of publications within the LOD model structure.

-->


---

# <!-- fit --> Structured Data

- Representations
- Not Neutral Resources
- May Not Be a Democratizing Trend

![bg contain 95% right:64%](https://www.degruyter.com/document/doi/10.1515/opar-2020-0220/asset/graphic/j_opar-2020-0220_fig_002.jpg)



<!-- _footer: "Hacıgüzeller et al. (2021)" -->

<!--

Through a process of manual annotation and mapping of short excerpts from a variety of archaeological texts from Çatalhöyük [tʃaˈtaɫhœjyc] in Turkey to the CIDOC Conceptual Reference Model, a high-level ontology, they sought to examine and compare the representational affordances and resistances of data.

But here I must say what I mean when I say ontology in Computer Science. 

An ontology is an explicit specification of a conceptualization. The term is borrowed from philosophy, where an ontology is a systematic account of Existence. For knowledge-based systems, what “exists” is exactly that which can be represented.

Structured data (using CRM) fails to map the more natural modes of expression found in various types of archaeological text.

- Structured Data are “Representations”: The implication is that data that do not conform to a consensus of the “norm” are hard to situate within any type of structured data.
- Structured Data are Not a “Neutral Resource”: we need to consider (archaeological) databases that hold structured data not as containers of knowledge but rather as artefacts of previous (archaeological) knowledge making episodes, that is, digital technologies should be seen as having their own agency. As such, structured data sets embody their own set of socio-technical relationships and can't be neutral.
- Structured Data May Not Be a “Democratizing Trend”. Data may be inadvertently promoting or reinforcing forms of social injustice. the ontology itself manages to strip away much of the context that provides the means by which wider audiences might derive relevance and meaning from the data should be a cause for concern. Not everyone Even as community-driven or participatory practices grow in popularity, the fundamental redesign of workflows, methods, and data to embed communities and community values at their core is still lacking 

 -->

---


# <!-- fit  --> $III$ — Defining Cultural Heritage Data

### Custodianship 

3. They are collected, curated and maintained **by various entities** such as libraries, archives, museums, higher education institutions,non-governmental organisations, indigenous communities and local groups as well as by the wider public.

---

![bg contain 85%](https://julsraemy.ch/prezi/assets/iiif-map.png)

<!-- _footer: 'IIIF Implementations and Consortium Map (June 2023). https://bit.ly/iiifmap' -->

---


<!-- _class: lead -->
![bg 92%](https://julsraemy.ch/prezi/assets/IIIF-logo-stacked.png)
![bg 53%](https://julsraemy.ch/prezi/assets/Linked_Art_logo.png)


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

# Linked Art

![bg right contain](https://julsraemy.ch/prezi/assets/linkedart_50k_feet.svg)

Linked Art is a community collaborating to define a metadata application profile for describing cultural heritage, and the technical means for conveniently interacting with it. 

<!-- _footer: "https://linked.art" -->

<!--
The model and API are based on appropriate international standards to ensure that they are interoperable and easy to use. Linked Art focuses on usability of the data as a primary consideration, such that it is easy to implement and maintain.

Some of the LOUD Design Principles:
B. Few Barriers to entry: it should be easy to get started.

C. Comprehensible by Introspection: The data should be understandable to a large degree simply by looking at it,

D. Documentation with working examples

That could be a solution to some extent to democratise structured data, when more accessible tools will be released. 

 -->

---

![bg contain](https://julsraemy.ch/prezi/assets/loud-infra-example.jpg)

<!-- One example of representation, with the different processes. Something that is often done to represent the various stages from the metadata source to the visualisation and how standards can interact with each other. -->

---

![bg contain](https://julsraemy.ch/prezi/assets/use_cases-specifications-2.svg)

<!-- 

Example: the release of the IIIF Image and Presentation APIs 3.0. 


Tracing "from use cases to specifications" in IIIF and Linked Art reveals key actors: GitHub, a platform where developers store and share software and its docmentation, orchestrates. API specification is also centrally mediated by format and representational (JSON-LD) context. Validators control compliance. Servers and clients align, each with distinct technical dependencies. Objects embody purpose. Human collectives - IIIF editors, etc - steer. JSON-LD's API mediates context; intermediaries channel. Technologies, with layered abstraction, interweave, revealing a complex ecosystem.

 -->

---


![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)

# Linked Open Usable Data for Cultural Heritage
####  Perspectives on Community Practices and Semantic Interoperability

PhD Thesis supervised by: 
- Peter Fornaro (University of Basel)
- Walter Leimgruber (University of Basel)
- Robert Sanderson (Yale University)

<!--
That is my last slide, and I hope that I could highlight some of the dependencies to create a form of knowledge regime, on the Web.  

 I am doing my PhD in Digital Humanities on Linked Open Usable Data, with a focus on its (potential) use in the Humanities and the perspectives it could bring in terms of community practices and semantic interoperability. My research is grounded as part of the Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA) research project, which aims to develop a Citizen Science platform around three photographic collections of the Swiss Society for Folklore Studies (SSFS).  -->

<!-- _footer: "https://phd.julsraemy.ch" -->

--- 


## Bibliography

```

Berners-Lee, Tim (1991, August 6). WorldWideWeb—Executive summary. https://archive.md/Lfopj

Guillem, Anaïs & Gros, Antoine, & Deluca, Livio (2023). Faire parler les claveaux effondrés de la 
cathédrale Notre-Dame de Paris. Recueil des communications du 4e colloque Humanistica. Humanistica 
2023, Genève, Suisse. https://hal.science/hal-04106101

Hacıgüzeller, Piraye & Taylor, James Stuart & Perry, Sara (2021). On the Emerging Supremacy 
of Structured Digital Data in Archaeology: A Preliminary Assessment of Information, 
Knowledge and Wisdom Left Behind. Open Archaeology, 7(1), 1709‑1730. https://doi.org/10.1515/opar-2020-0220

Rossenova, Lozana & Di Franco, Karen (2022). Iterative Pasts and Linked Futures: A Feminist 
Approach to Modeling Data in Archives and Collections of Artists’ Publishing. Perspectives on Data. 
https://www.artic.edu/digital-publications/37/perspectives-on-data/28/iterative-pasts-and-linked-futures

```



---

![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/1000,/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)

## Image Credits
- [Blick auf das Spalentor]. Basel, 1938. Ernst Brunner. SGV_12N_00115 
- [Katze auf einer Mauer]. Ort und Datum unbekannt. Ernst Brunner. SGV_12N_19553

These images are part of the [photographic archives of the Swiss Society for Folklore Studies](https://archiv.sgv-sstp.ch/). Licence: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/legalcode)

<!-- PIA: Context of my research - where we leverage three collections of the Swiss Society for Fokflore Studies. -->






