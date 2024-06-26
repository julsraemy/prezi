---
marp: true
author: Julien A. Raemy
title: Linked Open Usable Data for Cultural Heritage
description: Presentation given in the context of the "Trends in Digital Humanities" Colloquium on 1 November 2023 at the University of Basel
keywords: Cultural Heritage, IIIF, Linked Art, LOUD, Semantic Web
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://julsraemy.ch/prezi/loud-colloquium-trends-dh.html
theme: gaia
class: invert
paginate: true
_paginate: false
---

<!-- _class: lead -->

# <!-- fit --> Linked Open Usable Data for Cultural Heritage
Julien A. Raemy 
(Digital Humanities Lab, University of Basel)
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759) [![Google Scholar](https://img.shields.io/static/v1?label=Google%20Scholar&message=Julien%20A.%20Raemy&color=4285F4&logo=googlescholar)](https://scholar.google.ch/citations?user=pGROUG0AAAAJ&hl) [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=julsraemy&color=181717&logo=github)](https://github.com/julsraemy) [![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@julsraemy@hcommons.social&color=6364FF&logo=mastodon)](https://hcommons.social/@julsraemy)

Trends in Digital Humanities
Basel, Switzerland | 1 November 2023

---

![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)

# Linked Open Usable Data for Cultural Heritage
####  Perspectives on Community Practices and Semantic Interoperability

PhD Thesis supervised by: 
- Peter Fornaro (University of Basel)
- Walter Leimgruber (University of Basel)
- Robert Sanderson (Yale University)

<!-- I am doing my PhD in Digital Humanities on Linked Open Usable Data, with a focus on its (potential) use in the Humanities and the perspectives it could bring in terms of community practices and semantic interoperability. My research is grounded as part of the Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA) research project, which aims to develop a Citizen Science platform around three photographic collections of the Swiss Society for Folklore Studies (SSFS).  -->

<!-- _footer: "https://phd.julsraemy.ch" -->


---

![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

# Agenda

- Preamble
- Interlinking Data on the Web
  - Open Web
  - Cultural Heritage Data 
- Linked Open Usable Data (LOUD)
  - International Image Interoperability Framework (IIIF)
  - Linked Art
  - LUX, Yale Collections Discovery
- Perspectives

---


<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)


# <!-- fit --> Preamble


---


![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

# <!-- fit --> Movements, Principles, Linked Data

* Open Science, Open Scholarship / Citizen Science → **Movement**

* FAIR Data Principles / CARE Principles for Indigenous Data Governance / Collections as Data → **Environment/System**

* Linked (Open Usable) Data → **Content**

<!-- From the point of view of principles or technologies that I think are necessary, here are the ones which I consider worth mentioning. Open Science / Open Scholarship, FAIR Data Principles and Linked Open Data. They have different focuses and one that I think is most useful within my thesis is the last one as I am most interested in interoperability and creating a semantic framework not only for humans but also for machines.  -->


---


# <!-- fit -->Semantic Information

![bg contain 95% right:43%](https://www.researchgate.net/profile/Luciano-Floridi/publication/257666827/figure/fig2/AS:392780774952979@1470657642732/Floridis-original-information-map-redrawn-based-on-Floridi-2011.png)

> Semantic Information is well-formed, meaningful, and truthful data.

_For all data $x$, if $x$ is well-formed, meaningful, and truthful, then $x$ represents semantic information:_ 

$\forall x \, [W(x) \land M(x) \land T(x)] \rightarrow S(x)$



<!-- _footer: "Floridi (2011); [Chen & Floridi (2013)](https://doi.org/10.1007/s11229-012-0183-y)" -->

<!-- 

Data are definable as constraining affordances, exploitable by a system as input of adequate queries 


The alethic nature, or modalities of truth, is the component that is the hardest to come by, to assess. 


In short, semantic information can also be described erotetically as data + queries.

According to Trevor Owens (2011): Data are constructed artefacts, interpretable texts, processable information and can hold evidentiary value. 


 -->


---

# Semantic Interoperability


Semantic Interoperability can be defined as the seamless exchange of well-formed, meaningful, and truthful data between distinct systems. 

_For all $y$, for all $z$, if both $y$ and $z$ exhibit Semantic Interoperability $I$ and there is a seamless exchange $E$ between $y$ and $z$, then for any data $x$ being exchanged between them, $x$ must be well-formed, meaningful, and truthful:_


$
\forall y \, \forall z \, \big[ I(y) \land I(z) \land E(y, z) \big] 
$

$
\rightarrow \big[ \forall x \, \big( W(x) \land M(x) \land T(x) \big) 
\rightarrow E(y, z) \land S(x) \big]
$

<!-- Combining insights from Floridi and Sanderson. 

Interoperability is a state in which two or more tested, independently developed technological systems can interact successfully according to their scope through the implementation of agreed-upon standards.


 -->


---


<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)


# <!-- fit --> Interlinking Data on the Web



---

<!-- _class: lead -->

![bg right:40%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19566.jp2/full/1000,/0/default.jpg)
# Open Web


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

# From LOD to LOUD

- LOD is too focused on publishing data. Our data needs to be reused to be meaningful and valuable.

- Linked Open Usable Data (LOUD) seeks a balance that takes into account the needs for data completeness and accuracy (ontological construction) and pragmatic concerns (ease of use, scalability)

<!-- Linked Open Data has been around for many years. Resource Description Framework (RDF) is the underlying technology where assertions in triples are being produced.  LOD has come under some criticism in terms of its uptake and often LOD projects have not been sustained for very long. LOD projects have mainly been concerned with the publication and consumption of data and geared towards an expert audience with knowledge of RDF. Here the audience is slightly different as they are intended for developers and the best way to give them data is to create APIs. LOUD is also an attempt to balance the trade-offs between completeness and precision of expression and the usability of the resulting data constructs. -->


---


<!-- _class: lead -->
![bg right:40%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19566.jp2/full/1000,/0/default.jpg)

# <!-- fit --> Cultural Heritage Data


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

In three parts...

-->

<!-- _footer: "Male Face Mask (Zamble). https://www.artic.edu/artworks/239464" -->

---

##### Notre-Dame's Restoration 

Keystones as Full-Fledged Actors

![bg contain right:73%](https://julsraemy.ch/prezi/assets/guillem-claveaux.png)

<!-- _footer: "[Guillem et al. (2023)](https://hal.science/hal-04106101)" -->

<!--

The restoration of Notre-Dame Cathedral in Paris is often told from various viewpoints, from stonecutters, conservators, archaeologists, and architects. This contribution shifts the perspective to two keystones from the nave's F29-30 double arch, destroyed in the 2019 fire. Viewing them not only as artefacts but as agents reveals their unique journey—once part of the vault, they fell, underwent diverse stages (burial, cleaning, digitization, restoration, etc.), and became active participants, echoing Actor-Network Theory principles. This approach links traditional narrative with information science, emphasizing the keystones' role as central actors in their history.

  -->

---

# <!-- fit  --> $II$ — Defining Cultural Heritage Data

### Knowledge Latency

2.  These data, derived from a wide range of disciplines, offer **a latent capacity to support the generation of knowledge** relating to historical time periods, geospatial areas, as well as current and past human and non-human activities. 

<!-- 

Every dataset embodies an underlying potential that research and interpretation bring to light. A noticeable divide, especially within cultural heritage, exists between the generation of data, description of it and its use, owing to the diverse array of unforeseen applications.

-->
---

# <!-- fit  --> _Parts of a Body House_ by Carolee Schneemann

![bg contain](https://artic-web.imgix.net/09fc275f-e14d-4277-af79-17f5b0dcf131/rossenova_difranco_fig01_DRAFT.jpg)

<!-- _footer: "[Rossenova & Di Franco (2022)](https://www.artic.edu/digital-publications/37/perspectives-on-data/28/iterative-pasts-and-linked-futures). Five iterations of _Parts of a Body House_ from 1968 to 1972" -->

<!-- With this example and a great article from Lozana Rossenova and Karen Di Franco about artists' books and specificall Parts of a Body House from Carolee Schneeman. Artists’ book collections were established in the libraries of art schools and museums in response to the rapid proliferation of such publications as art objects starting in the 1960s. Unlike other modes of artistic practice that were accessioned by curatorial departments, these items were largely gathered by libraries, which has made artists’ publishing subject to the definitions of the library catalog rather than those of the art collection “proper.” This situation is further complicated in the case of materials that have, for a variety of reasons, either evaded categorization completely, or been located in archives and described as archival items, or been classed as serials or journals, or ephemera. But many artists’ publications deliberately challenge the categories of library, archive, and collection catalogue alike 

-->


---

![bg](https://artic-web.imgix.net/d2c4713c-9f2e-4264-92f1-b9635a7cc12c/lozano_di_franco_hero.jpg?rect=1182%2C1037%2C1490%2C838&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=3000&h=1687)

<!-- 

While the case-study research revealed the interconnections among the collections and publications activated by Schneemann’s contribution, these discrete iterations are sorted into different categories within a group of collection catalogs across institutions.

For archives of nonstandard art objects such as net art or artists’ publishing (e.g., Schneemann’s work), the network model of LOD offers an opportunity to map out relations of embodied iterations that defy categorization (or canonization) and thus construct new, fuller and more nuanced histories around these materials.

During community discussions, the sheer range of possible relations across editions, reinterpretations, serializations, or appropriations of publications proved challenging to describe completely within the structure of the LOD model.

Rossenova & Di Franco (2022)

 -->

---

# <!-- fit --> Structured Data

- Representations
- Not Neutral Resources
- May Not Be a Democratizing Trend

![bg contain 95% right:64%](https://www.degruyter.com/document/doi/10.1515/opar-2020-0220/asset/graphic/j_opar-2020-0220_fig_002.jpg)



<!-- _footer: "[Hacıgüzeller et al. (2021)](https://doi.org/10.1515/opar-2020-0220)" -->

<!--

Through a process of manual annotation and mapping of short excerpts from a variety of archaeological texts from Çatalhöyük [tʃaˈtaɫhœjyc] in Turkey to the CIDOC Conceptual Reference Model, a high-level ontology, they sought to examine and compare the representational affordances and resistances of data.

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


<!-- _class: lead -->

# <!-- fit --> LOUD
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)

Design Principles, Standards

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

- IIIF (especially the Presentation API 3.0)
- W3C Web Annotation Data Model
- Linked Art


---

![bg contain](https://julsraemy.ch/prezi/assets/loud-infra-example.jpg)

<!-- _footer: "[Felsing et al. (2023)](https://journals.uio.no/dhnbpub/article/view/10649)" -->

---

<!-- _class: lead -->
![bg 89%](https://julsraemy.ch/prezi/assets/IIIF-logo-stacked.png)

---
![bg right:30% width:300px](https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png)

## International Image Interoperability Framework

<!-- _footer: "https://iiif.io" -->

- A model for presenting and annotating content
- A global community that develops shared application programming interfaces (APIs), implements them in software, and exposes interoperable content

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


<!-- _footer: "https://iiif.io/community/ " -->

---



<!-- _footer: " " -->

![bg contain](https://julsraemy.ch/prezi/assets/iiif_community_overview.svg)


---

<!-- _class: lead -->
![bg right:40%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19566.jp2/full/1000,/0/default.jpg)

## Why do we need IIIF ?

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
![bg right:40%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19566.jp2/full/1000,/0/default.jpg)


# <!-- fit --> What does IIIF do?

---

<!-- _footer: "https://purl.stanford.edu/hs631zg4177" -->

![bg contain 80%](https://julsraemy.ch/prezi/assets/iiif_deepzoom.gif)

<!-- Deep zoom with large images -->

---

<!-- _footer: "Library of Congress | https://prtd.app/#72f604db-6869-4c08-91ce-7c79502a7f35 " -->


![bg contain 80%](https://julsraemy.ch/prezi/assets/compare.gif)

<!-- compare images -->

---

<!-- _footer: "https://www.theleidencollection.com/viewer/david-and-uriah/" -->


![bg contain 75%](https://julsraemy.ch/prezi/assets/Leiden_curtain_viewer.gif)

---

<!-- _footer: "https://demos.biblissima.fr/chateauroux/demo/" -->

![bg contain 62%](https://julsraemy.ch/prezi/assets/biblissima-demo.gif)

<!-- Reunify -->

---
<!-- _footer: "Franks, Kendal; Royal College of Surgeons of England. _The Germ Theory_. via Wellcome Library." -->

![bg contain 73%](https://julsraemy.ch/prezi/assets/content-search.gif)

<!-- Search within -->

---

<!-- _footer: "HarvardX: MCB64.1x - Cell Biology: Mitochondria" -->

![bg contain 71%](https://julsraemy.ch/prezi/assets/harvard-anno.gif)

<!-- Annotate -->

---

<!-- _footer: " " -->

![bg contain](https://julsraemy.ch/prezi/assets/crowdsourcing-nlw.gif)

<!-- Crowdsourcing - National Library of Wales -->


---

<!-- _footer: "http://storiiies.cogapp.com/" -->

![bg contain 65%](https://julsraemy.ch/prezi/assets/storiiies.gif)

---

<!-- _footer: "https://canvas-panel.netlify.app/#/examples/" -->

![bg contain 65%](https://julsraemy.ch/prezi/assets/oceanlines.gif)

---

<!-- _footer: "https://ddmal.music.mcgill.ca/IIIF-AV-player/" -->

![bg contain 72%](https://iiif.io/assets/uploads/ddmal_section.gif)

---

<!-- _class: lead -->
![bg right:40%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19566.jp2/full/1000,/0/default.jpg)


# <!-- fit --> How does IIIF work?

---

<!-- _footer: " " -->

![bg contain](https://julsraemy.ch/prezi/assets/iiif-apis.gif)

---

![bg contain](https://julsraemy.ch/assets/images/silos_to_iiif.gif)

---


![bg right:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/1000,/0/default.jpg)

# IIIF Specifications

- **Image API**
- **Presentation API**
- Authorization Flow API
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


<!-- _footer: "https://iiif.io/api/image" -->

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

<!-- _footer: "https://iiif.io/api/presentation" -->




<!-- The purpose of the API is to display descriptive information that is intended for humans and does not aim to provide semantic metadata for search engines -->

---

![bg width:1070px](https://julsraemy.ch/prezi/assets/presentationapi-resources.png)

---

<!-- _footer: ' ' -->

![bg contain](https://julsraemy.ch/prezi/assets/mirador-coreapis.png)

---


![bg contain](https://julsraemy.ch/prezi/assets/iiif-tools.png)


---
<!-- _footer: ' ' -->

![bg contain](https://julsraemy.ch/prezi/assets/iiif-ecosystem.png)



---


<!-- _class: lead -->
![bg 58%](https://julsraemy.ch/prezi/assets/Linked_Art_logo.png)


---

# <!-- fit --> Linked Art

Linked Art is a community collaborating to define a metadata application profile (the model) for describing cultural heritage, and the technical means for conveniently interacting with it (the API). 

<!-- _footer: "https://linked.art" -->

---

# Extensive Definition

> _Linked Art is an RDF profile of the CIDOC-CRM that uses JSON-LD and the Getty Vocabularies to describe object-based cultural heritage in an event-based framework for consumption by software applications. It uses a subset of classes from the CIDOC-CRM ontology along with other commonly-used RDF ontologies to provide interoperable patterns and models that can be interpreted either as JSON or as RDF._  

<!-- _footer: "[Newbury 2018](https://cidoc.mini.icom.museum/wp-content/uploads/sites/6/2021/03/CIDOC2018_paper_153.pdf)
" -->

---

![bg right width:600px](https://julsraemy.ch/prezi/assets/la_usability_completeness.png)

## <!-- fit --> Finding the right balance

- Linked Art is focused on usability, not full precision / completeness
- Consistently solves actual challenges from real data
- Development is iterative, as new use cases are found



<!-- _footer: "[Sanderson 2019](https://www.slideshare.net/azaroth42/standards-and-communities-connected-people-consistent-data-usable-applications)" -->


---

![bg contain](https://julsraemy.ch/prezi/assets/la-model.svg)

<!-- Abstraction Standards / Implementation Standards "A profile is a selection of appropriate abstractions, to encode, the scope of what can be described. An API is a selection of appropriate technologies, to give access to the data managed using the profile." (Robert Sanderson) -->

---


### Linked Art Model Fundamentals

| Level         | Linked Art                      |
|----------------|---------------------------------|
| **Model**      | CIDOC Conceptual Reference Model (CRM)                       |
| **Ontology**   | RDF encoding of CRM 7.1, plus extensions       |
| **Vocabulary** | Getty Vocabularies (mainly AAT) |
| **Profile**    | Object-based cultural heritage (mainly art museum oriented)  |
| **API**        | JSON-LD, following REST and web patterns                         |


---

![bg 62%](https://julsraemy.ch/prezi/assets/linkedart_50k_feet.svg)

<!-- Event-based model
-->

<!-- _footer: "[Raemy et al. (2023)](https://doi.org/10.5281/zenodo.7878358), adapted from [Sanderson (2018)](https://www.slideshare.net/Europeana/shout-it-out-loud-by-rob-sanderson-europeanatech-conference-2018)" -->



---

<!-- _backgroundColor: white-->

![bg contain](https://raw.githubusercontent.com/Participatory-Image-Archives/linkedart/main/modelling/digital/12033.svg)  


---

![bg 94%](https://julsraemy.ch/prezi/assets/IIIF-LA.svg)

---

![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

### Linked Art API Endpoints (1)

- `Concepts` - _Types, Materials, Languages, and others, as full records rather than external references_
- `Digital Objects` - _Images, services and other digital objects
Events - Events and other non-specific activities that are related but not part of other entities_
- `Events` - _Events and other non-specific activities that are related but not part of other entities_

<!-- _footer: "https://linked.art/api/1.0/" -->

<!-- The Linked Art API is made up of different endpoints, each of which has a defined structure for the format of the data that will be returned from it. These align (mostly) with the core classes of the model, and are structured according to the API design principles. -->

---

![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

### Linked Art API Endpoints (2)

- `Groups` - _Groups and Organizations_
- `People` - _People_
- `Physical Objects` - _Physical things, including artworks, buildings or other architecture, books, parts of objects, and more_
- `Places` - _Geographic places_

<!-- _footer: "https://linked.art/api/1.0/" -->

<!-- The Linked Art API is made up of different endpoints, each of which has a defined structure for the format of the data that will be returned from it. These align (mostly) with the core classes of the model, and are structured according to the API design principles. -->

---

![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

### Linked Art API Endpoints (3)

- `Provenance Activities` - _The various events that take place during the history of a physical thing_
- `Sets` - _Sets, including Collections and sets of objects used for exhibitions_
- `Textual Works` - _Texts worthy of description as distinct entities, such as the content carried by a book or journal article_
- `Visual Works` - _Image content worthy of description as distinct entities, such as the image shown by a painting or drawing_

<!-- _footer: "https://linked.art/api/1.0/" -->

<!-- The Linked Art API is made up of different endpoints, each of which has a defined structure for the format of the data that will be returned from it. These align (mostly) with the core classes of the model, and are structured according to the API design principles. -->

---

![bg right:50%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00001.jp2/full/max/0/default.jpg)

## Schwyzer Fasnacht

Black and White Negative modelled as a `DigitalObject`

- Title: [Schwyzer Fasnacht]
- Creator: Ernst Brunner
- Place: Schwyz
- Date: 1937
- Identifiers: SGV_12N_00001, AA1



<!-- _footer: "https://archiv.sgv-sstp.ch/resource/422236" --> 

---

### Needed properties/patterns for our `DigitalObject`

- `member_of` → Collection (SGV_12) - Pointing a `Set`
- `subject_of` → Web Pages / IIIF Manifest
- `current_owner`→ SSFS Photographic Archives
- `created_by` → Through the digitisation of a negative
- `produced_by` → Production of the negative
- `digitally_shows` → Visual Content
- `identified_by` → Names and Identifiers
- `access_point` → IIIF Image API

---

```json
{
  "@context": "https://linked.art/ns/v1/linked-art.json", 
  "id": "https://data.participatory-archives.ch/digital/12033",
  "type": "DigitalObject",
  "_label": "PIA ID 12033 - [Schwyzer Fasnacht]",
  "classified_as": [
    {
      "id": "http://vocab.getty.edu/aat/300215302", 
      "type": "Type", 
      "_label": "Digital Image"
    }
  ],
  "member_of": [
    {
      "id": "https://data.participatory-archives.ch/set/12",
      "type": "Set",
      "_label": "SGV_12 (Ernst Brunner)",
      "classified_as": [
        {
        "id": "http://vocab.getty.edu/aat/300025976",
        "type": "Type",
        "_label": "Collection"
        }
      ]
    }
  ],
```


---


<!-- _class: lead -->
![bg right:40%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19566.jp2/full/1000,/0/default.jpg)

# <!-- fit --> LUX
Yale Collections Discovery 

---

![bg opacity:.2](https://library.yale.edu/sites/default/files/beinecke720.jpeg)
![bg opacity:.2](https://britishart.yale.edu/sites/default/files/img/overview/2020-06/2016EF11.572_D8.jpg)
![bg opacity:.2](https://th-thumbnailer.cdn-si-edu.com/DZU5wD7JlgYEjvqC0RGXWZ_45EM=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/fa/49/fa494e15-0d54-403d-9c50-3af1c5890780/ypmarexhgreathall001web.jpg)
![bg opacity:.2](https://artgallery.yale.edu/sites/default/files/styles/max_2600x2600/public/2023-03/2023-ag-exb-4581-0003-pub.jpg)

<!-- _footer: "Yale University Library, Yale Center for British Art, Yale Peabody Museum, Yale University Art Gallery" -->

---

![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

# Built on open standards

&rarr; LUX adheres to the _Linked Open Usable Data (LOUD)_ design principles

* Linked Art, IIIF, W3C Activity Streams 
* Widespread technologies: Python, JavaScript, Node.js, React, AWS
* Multimodal database (NoSQL): MarkLogic Server


<!-- _footer: "https://lux.collections.yale.edu/" -->

---

![bg contain 64%](https://julsraemy.ch/prezi/assets/lux-arch-simple.png)

<!-- _footer: "[Raemy & Sanderson 2023](https://doi.org/10.48550/arXiv.2309.16635)"-->

<!-- 

Harvest: It runs nightly and is triggered by an operating system level scheduler to poll each stream to find and retrieve records that have changed since the previous harvest.
Transform: The records are passed through source specific transformation routines in order to either map from arbitrary data formats, or to validate and clean up records already provided in Linked Art. 
Reconcile: This process is conducted to discover further identities from the various datasets to be able to collect all information about a particular entity eventually into a single record.
Re-Identify: It maps the original \acp{URI} of the records to the internal identifiers.
Merge: The records from multiple sources that have been mapped to the same identifier are merged together to form the single record.
Load: The resulting dataset is then annotated with some additional features for indexing and exported to MarkLogic.

-->

---

![bg contain 80%](https://julsraemy.ch/prezi/assets/lux-demo.gif)

<!-- _footer: "[Link to optimised video resolution](https://julsraemy.ch/prezi/assets/lux-demo.webm)"-->


---

<!-- _class: lead -->
![bg right:40%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19566.jp2/full/1000,/0/default.jpg)

# <!-- fit --> Perspectives
Community Practices
Semantic Interoperability

---

![bg contain](https://julsraemy.ch/prezi/assets/use_cases-specifications-1.svg)

---

![bg contain](https://julsraemy.ch/prezi/assets/iiif-trc-1.png)
![bg contain](https://julsraemy.ch/prezi/assets/iiif-trc-2.png)

<!-- _footer: "https://iiif.io/community/trc/" -->

---


![bg contain](https://julsraemy.ch/prezi/assets/use_cases-specifications-2.svg)


---

![bg contain](https://julsraemy.ch/prezi/assets/iiif-calendar.png)
![bg contain](https://julsraemy.ch/prezi/assets/linked-art-call.png)

---

<!-- _footer: "[Raemy (2023)](https://hal.science/hal-04162572)" -->

![bg 77% contain](https://julsraemy.ch/prezi/assets/survey_heatmap.svg)

<!-- 

1) Belonging to a given commnity - before 2011
2) People that have been active prior to 2021 tend to be more active

-->

---

![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

# <!-- fit --> Some concluding thoughts about LOUD

- Grassroots development of IIIF and Linked Art with collaboration and transparency are one of the key factors, but implementations are needed to be conducted in parallel (specifications versus demonstrability).
- LOUD APIs, when used in conjunction, enhances semantic interoperability, even if it comes at the cost of ontological purity.
- LOUD Practices and standards should serve as common denominators for cultural heritage institutions and research projects.

<!-- 

An important proposition arises from the observation that adherence to the \ac{LOUD} design principles makes specifications more likely to be adopted. The primary benefit of adopting \ac{LOUD} standards lies in their grassroots nature. The development and maintenance of \ac{LOUD} standards by dedicated communities are characterised by collaboration, consensus building, and transparency. This grassroots approach not only aligns with the core values of openness and collaboration within the \ac{DH} community but also serves as a common denominator between \ac{DH} practitioners and \acp{CHI}. This unique alignment fosters a sense of shared purpose and common ground. However, it's essential to acknowledge that while \ac{LOUD} and its associated standards, including IIIF, hold immense promise, their limited recognition in the wider socio-technical ecosystem may currently hinder their full potential impact.

-->

---

![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19566.jp2/full/1000,/0/default.jpg)

### Image Credits
- [Blick auf das Spalentor]. Basel, 1938. Ernst Brunner. SGV_12N_00115 
- [Ringtanz während der Masüras auf der Alp Sura]. Guarda, 1939. SGV_12N_08589
- [Katze auf einer Mauer]. Ort und Datum unbekannt. Ernst Brunner. SGV_12N_19553
- [Katze]. Ort und Datum unbekannt. Ernst Brunner. SGV_12N_19566

These images are part of the [photographic archives of the Swiss Society for Folklore Studies](https://archiv.sgv-sstp.ch/). Licence: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/legalcode)
