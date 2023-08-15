---
marp: true
author: Julien A. Raemy
title: Situating Interlinked Cultural Heritage Data on the Web
description: This paper focuses on situating data produced by humans and nonhumans engaged in the cultural heritage field and published on the Web in line with the Open Science and Citizen Science movements.It aims to map the associations among various communities of practice, particularly within libraries, archives and museums, and the precarious balance between exhaustiveness and a rigid structure of data description versus the potential for multiplying assertions, bypassing cataloguing rules and their underlying postcolonial constructs. The openness and interconnection of data makes it possible to examine the form of description as well as the method of publication, and inevitably to analyse the biases linked to the associated vocabularies, For instance, the Web, which has claimed to be a Semantic Web for several years now, has a centrepiece known as Resource Description Framework (RDF), a general method for describing and exchanging graph data and a Web standard since 2004. The Semantic Web offers major opportunities for the Humanities because it allows data to be reasoned together, to be understood by machines via RDF-based ontologies, a formal way to represent human-like knowledge. Developing infrastructures, or sites of assemblage, capable of creating and maintaining RDF statements and other related technologies or building on this standard to interconnect online records is not straightforward and requires a fair amount of socio-technical elements to be implemented. As a demonstration, I will look at the practices of two community-driven initiatives, mainly active in the cultural heritage field, through an Actor-Network Theory (ANT) lens, namely the International Image Interoperability Framework (IIIF) and Linked Art, which have developed shared specifications and related services on agreed-upon design principles.
keywords: API, IIIF, Linked Art, LOUD
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://julsraemy.ch/prezi/sts-ch-2023.html
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

--- 

![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)

# Linked Open Usable Data for Cultural Heritage
#### <!-- fit --> Perspectives on Community Practices and Semantic Interoperability

PhD Thesis supervised by: 
- Peter Fornaro (University of Basel)
- Walter Leimgruber (University of Basel)
- Robert Sanderson (Yale University)

<!-- I am doing my PhD in Digital Humanities on Linked Open Usable Data, with a focus on its (potential) use in the Humanities and the perspectives it could bring in terms of semantics and interoperability. My research is grounded as part of the Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA) research project, which aims to develop a Citizen Science platform around three photographic collections of the Swiss Society for Folklore Studies (SSFS).  -->

<!-- _footer: "https://phd.julsraemy.ch" -->

--- 

# Agenda
![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/1000,/0/default.jpg)

* Interlinking Data on the Web
* Cultural Heritage Data 
* IIIF and Linked Art: two community-driven initiatives
* Conclusion

---


<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)

# <!-- fit --> Interlinking Data on the Web
Semantics, Interoperability, 
Semantic Interoperability


---

# An open vision of the Web

> The [World Wide Web] project merges the techniques of information retrieval and hypertext to make an easy but powerful global information system. The project started with **the philosophy that much academic information should be freely available to anyone**.

<!-- _footer: "Tim Berners-Lee. _WorldWideWeb - executive summary_. 6 August 1991. https://archive.md/Lfopj" -->


---

# The Semantic Web or the Web of Data

Stack of whatever

---

# <!-- fit --> Resource Description Framework (RDF)

Subject, predicate, object ($s \ \vec{p} \ o$)

---


# Linked Open Data (LOD)

![bg width:900px](https://5stardata.info/images/5-star-steps.png)

<!-- 5-star open data scheme 
1) make your stuff available on the Web (whatever format) under an open license
2) make it available as structured data
3) make it available in a non-proprietary open format (e.g., CSV instead of Excel
4) use URIs to denote things, so that people can point at your stuff
5) link your data to other data to provide context -->

<!-- _footer: "5-star deployment scheme for Open Data. https://5stardata.info" -->

---

# Data

> Data are definable as constraining affordances, exploitable by a system as input of adequate queries that correctly semanticise them to produce information as output. 

<!-- _footer: "Floridi (2005)" -->

<!-- According to Trevor Owens (2011): Data are constructed artefacts, interpretable texts, processable information and can hold evidentiary value.  -->

---

# Semantic Information

> Semantic Information is well-formed, meaningful, and truthful data.

For all data $x$, if $x$ is well-formed, meaningful, and truthful, then $x$ represents semantic information:

$
\forall x \, [W(x) \land M(x) \land T(x)] \rightarrow SI(x)
$
<!-- _footer: "Luciano Floridi. _The Philosophy of Information_. Oxford University Press. Oxford ; New York, 2011." -->

<!-- The alethic nature, or modalities of truth, is the component that is the h

In short, semantic information can also be described erotetically as data + queries.

 -->


---

# (Cross-platform) Interoperability

Perspective of the World Wide Web Consortium (W3C)* channeled by Robert Sanderson to position IIIF through the prism of interoperability:

> Interoperability is a state in which two or more tested, independently developed technological systems can interact successfully according to their scope through the implementation of agreed-upon standards.

<!-- _footer: "*Etemad & Rivoal. _W3C Process Document_. W3C. 2023. https://www.w3.org/Consortium/Process/" -->


---

# Semantic Interoperability

Combining insights from Floridi and Sanderson:

> Semantic Interoperability can be defined as the seamless exchange of well-formed, meaningful, and truthful data between distinct systems. This ensures shared meaning and context, enabling independently developed systems to interact successfully through agreed-upon standards.

---


<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)

# <!-- fit --> Cultural Heritage Data


---

# Cultural Heritage

> Cultural heritage is, in its broadest sense, both a product and a process, which provides societies with a wealth of  resources  that  are  inherited  from  the  past,  created  in  the  present  and  bestowed  for  the  benefit  of  future  generations.  Most  importantly,  it  includes  not  only  **tangible**,  but  also  **natural**  and  **intangible  heritage**. 

<!-- _footer: "UNESCO. Methodology Manual. 2014. https://n2t.net/ark:/48223/pf0000229608" -->

<!-- UNESCO. Culture for Development Indicators. 

Je passe maintenant dans un autre axe, autrement dit des principes au contenu même et pour moi il s'agit de définir ce que j'entends par patrimoine culturel, souvent délimités autour des concepts de matérialisation d'un objet ou d'une tradition. Dans un des rapports de l'UNESCO, le patrimoine culturel est compris comme un produit et un processuss comprenant également le patrimoine naturel, ce que je trouve assez pertinent lorsqu'on imagine les standards aidant à la description et à la dissémination des données comme étant agnostiques.

  -->

---


# <!-- fit --> Digital Representation and _embodiment_


Male Face Mask (Zamble). Possibly early or mid–20th century from the Guro culture in Ivory Coast

_Representing a capricious and fearsome nature spirit, zamble is the name of a mask type that combines animal and human features, including antelope horns and the jaw of a dog or crocodile._ 

![bg contain right:28%](https://www.artic.edu/iiif/2/dec724f1-cb53-f8a7-8599-0b30ce0267e9/full/full/0/default.jpg)

<!-- _footer: "https://www.artic.edu/artworks/239464" -->


---

Have a look at https://www.artic.edu/digital-publications/37/perspectives-on-data/28/iterative-pasts-and-linked-futures

---

Biases

---

- Structured Data are “Representations”
- Structured Data are Not a “Neutral Resource”
- Structured Data May Not Be a “Democratizing Trend”

https://doi.org/10.1515/opar-2023-0099

---


<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)

# <!-- fit --> IIIF and Linked Art
Two community-driven initiatives


---

IIIF

---

Linked Art

---

Human and nonhuman, have a look at https://hal.science/hal-04106101


---

Boundary objects

---

---


<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)

# <!-- fit --> Conclusion
Well-formed, meaningful, truthful and interoperable


---

---



