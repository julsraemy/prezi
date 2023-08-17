---
marp: true
author: Julien A. Raemy
title: Linked Open Usable Data
description: Presentation given in the context of the "Trends in den Digital Humanities" Colloquium on 1 November 2023 at the University of Basel
keywords: Cultural Heritage, IIIF, Linked Art, LOUD, Semantic Web
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://julsraemy.ch/prezi/loud-kolloquium-trends.html
theme: gaia
class: invert
paginate: true
_paginate: false
---

<!-- _class: lead -->

# <!-- fit --> Linked Open Usable Data (LOUD)
Julien A. Raemy 
(Digital Humanities Lab, University of Basel)
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759) [![Google Scholar](https://img.shields.io/static/v1?label=Google%20Scholar&message=Julien%20A.%20Raemy&color=4285F4&logo=googlescholar)](https://scholar.google.ch/citations?user=pGROUG0AAAAJ&hl) [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=julsraemy&color=181717&logo=github)](https://github.com/julsraemy) [![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@julsraemy@hcommons.social&color=6364FF&logo=mastodon)](https://hcommons.social/@julsraemy)

Colloquium: _Trends in den Digital Humanities_
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

# Agenda
![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/1000,/0/default.jpg)

- Preamble
- Interlinking Data on the Web
- Cultural Heritage Data 
- International Image Interoperability Framework (IIIF)
- Linked Art
- Linked Open Usable Data (LOUD)

---


<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)


# <!-- fit --> Preamble

---

![bg right:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

# <!-- fit --> Movements, Principles, Linked Data

- Open Science / Open Access → **Movement**
- FAIR Data Principles / CARE Principles for Indigenous Data Governance → **Environment/System**
- Linked (Open Usable) Data → **Content**

<!-- From the point of view of principles or technologies that I think are necessary, here are the ones which I consider worth mentioning. Open Science / Open Access, FAIR Data Principles and Linked Open Data. They have different focuses and one that I think is most useful within my thesis is the last one as I am most interested in interoperability and creating a semantic framework not only for humans but also for machines.  -->

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
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)

# <!-- fit --> Interlinking Data on the Web
Semantics, Interoperability, 
Semantic Interoperability


---

# An open vision of the Web

> The [World Wide Web] project merges the techniques of information retrieval and hypertext to make an easy but powerful global information system. The project started with **the philosophy that much academic information should be freely available to anyone**.

<!-- _footer: "Berners-Lee (1991)" -->


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

# <!-- fit -->Semantic Information

![bg contain 95% right:43%](https://www.researchgate.net/profile/Luciano-Floridi/publication/257666827/figure/fig2/AS:392780774952979@1470657642732/Floridis-original-information-map-redrawn-based-on-Floridi-2011.png)

> Semantic Information is well-formed, meaningful, and truthful data.

_For all data $x$, if $x$ is well-formed, meaningful, and truthful, then $x$ represents semantic information:_ 

$\forall x \, [W(x) \land M(x) \land T(x)] \rightarrow S(x)$



<!-- _footer: "Floridi (2011); Chen & Floridi (2013)" -->

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
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)

# <!-- fit --> Cultural Heritage Data


---

# <!-- fit --> Tangible, Intangible, Natural

> Cultural heritage is, in its broadest sense, both a product and a process, which provides societies with a wealth of  resources  that  are  inherited  from  the  past,  created  in  the  present  and  bestowed  for  the  benefit  of  future  generations.  Most  importantly,  it  includes  not  only  **tangible**,  but  also  **natural**  and  **intangible  heritage**. 

<!-- _footer: "UNESCO. Culture for Development Indicators (2014)" -->


---


# <!-- fit  --> $I$ — Defining Cultural Heritage Data

![bg contain 95% right:28%](https://www.artic.edu/iiif/2/dec724f1-cb53-f8a7-8599-0b30ce0267e9/full/full/0/default.jpg)

### Heterogeneity 

1. Cultural heritage data refer to digital or data-driven affordances of cultural heritage, embodying **a rich and varied compilation of insights  originating from a variety of disciplines, techniques, traditions, positions and technologies**. It encompasses both tangible and intangible aspects of a society's culture. 

<!--  

In three parts...

-->

<!-- _footer: "Male Face Mask (Zamble). https://www.artic.edu/artworks/239464" -->

---

##### Notre-Dame's Restoration 

Keystones as Full-Fledged Actors

![bg contain right:73%](https://julsraemy.ch/prezi/assets/guillem-claveaux.png)

<!-- _footer: "Guillem et al. (2023)" -->

<!--

The restoration of Notre-Dame Cathedral in Paris is often told from various viewpoints, from stonecutters, conservators, archaeologists, and architects. This contribution shifts the perspective to two keystones from the nave's F29-30 double arch, destroyed in the 2019 fire. Viewing them not only as artefacts but as agents reveals their unique journey—once part of the vault, they fell, underwent diverse stages (burial, cleaning, digitization, restoration, etc.), and became active participants, echoing Actor-Network Theory principles. This approach links traditional narrative with information science, emphasizing the keystones' role as central actors in their history.

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

<!-- _footer: "Rossenova & Di Franco (2022). Five iterations of _Parts of a Body House_ from 1968 to 1972" -->

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



<!-- _footer: "Hacıgüzeller et al. (2021)" -->

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
![bg 89%](https://julsraemy.ch/prezi/assets/IIIF-logo-stacked.png)

---
![bg right:30% width:300px](https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png)

## International Image Interoperability Framework

<!-- _footer: "https://iiif.io" -->

- A model for presenting and annotating content
- A global community that develops shared application programming interfaces (APIs), implements them in software, and exposes interoperable content

<!-- IIIF is a community-driven initiative, which brings together key players in the academic and CH fields, and has defined open and shared APIs to standardise the way in which image-based resources are delivered on the Web. Implementing the IIIF APIs enables institutions to make better use of their digitised or born-digital material by providing, for instance, deep zooming, comparison, full-text search of OCR objects or annotation capabilities.  -->

---

---

---


<!-- _class: lead -->
![bg 58%](https://julsraemy.ch/prezi/assets/Linked_Art_logo.png)


---

---

---


<!-- _class: lead -->

# <!-- fit --> LOUD
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)

---

---

---

---

![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_36937.jp2/full/max/0/default.jpg)

### Image Credits
- [Blick auf das Spalentor]. Basel, 1938. Ernst Brunner. SGV_12N_00115 
- [Katze auf einer Mauer]. Ort und Datum unbekannt. Ernst Brunner. SGV_12N_19553
- [Ringtanz während der Masüras auf der Alp Sura]. Guarda, 1939. SGV_12N_08589
- ["Steffenbach-Brücke" der Furka-Bahn: Bau und Erneuern der Brücke]. Kanton Wallis, 1950. Ernst Brunner. SGV_12N_36937

These images are part of the [photographic archives of the Swiss Society for Folklore Studies](https://archiv.sgv-sstp.ch/). Licence: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/legalcode)
