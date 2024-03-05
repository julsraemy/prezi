---
marp: true
author: Julien A. Raemy
title: LOUD – Catalyst of Convergence
description: The emergence of Linked Open Usable Data (LOUD) represents a turning point in the convergence of information science and digital humanities. This innovative concept seeks to balance the completeness and accuracy of data with their accessibility and utility for a broad audience. Historically, the connection of cultural heritage data has been hindered by technical and conceptual barriers. Pre-existing initiatives focused on ontological rigor, often at the expense of data accessibility and usability for non-experts. Linked Open Data (LOD) projects were primarily focused on the publication and consumption of data for an audience of experts in RDF (Resource Description Framework). The introduction of JSON-LD in 2014 lowered the barriers to entry for developers, enabling an interpretation of RDF data in a more accessible standard JSON format. LOUD stands out for its well-defined design principles and specifications based on JSON-LD. It includes community standards such as the International Image Interoperability Framework (IIIF) Presentation API 3.0 and Linked Art, as well as the World Wide Web Consortium's (W3C) Web Annotation Data Model, aiming for better data accessibility and interoperability. These principles cover a) The right Abstraction for the audience, b) fFew Barriers to entry, c) Comprehensible by introspection, d) Documentation with working examples, e) Few Exceptions, instead many consistent patterns Standards adhering to LOUD principles, in synergy, increase semantic interoperability, even if it may impact ontological purity. This pragmatic approach facilitates better use and integration of cultural heritage data. LOUD can also serve as common ground for heritage institutions and research projects, offering a harmonized framework for managing cultural data. Despite the challenges of large-scale adoption, Yale's example with its LUX platform, officially released in May 2023, shows how the integration of LOUD specifications, notably IIIF and Linked Art, can improve interoperability and enrich cultural data. LUX represents an exemplary application of LOUD standards as the platform integrates the university's diverse collections, including the Yale Center for British Art, the Yale University Art Gallery, the Yale Peabody Museum, and the Yale University Library, totaling some 41 million resources. This integration encompasses areas such as art, natural history, library catalogues, and archival data. LUX is distinguished by its systemic architecture, which includes harvesting and reconciling data through an automated data pipeline. Its strength lies in its ability to integrate external data sources, thus offering a wealth of perspectives and enriching the data accessible to users. LOUD emerges as a key catalyst for information science and digital humanities, balancing completeness, accuracy, and accessibility of data. Yale's approach demonstrates the impact of LOUD in improving access to and valorization of cultural heritage data, marking a significant advancement in the field.
keywords: CIHN24, HEG-GE, Humanités numériques, IIIF, Interopérabilité Sémantique, Linked Art, Linked Data, Linked Open Usable Data, LOUD, LUX, Patrimoine Culturel, Standardisation, Web Annotation Data Model
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://julsraemy.ch/prezi/cihn24-loud-catalyst-convergence.html
theme: beam
paginate: true
_paginate: false
---

<!-- _class: title -->

<!-- header: Julien A. Raemy | **LOUD: Catalyst of Convergence** | [![w:35 CC BY 4.0](https://julsraemy.ch/prezi/assets/cc-by.svg)](https://creativecommons.org/licenses/by/4.0/) -->

<!-- _footer: CIHN24 | Geneva School of Business Administration | 13.02.2024 | [![width:100](https://zenodo.org/badge/DOI/10.5281/zenodo.10526541.svg)](https://doi.org/10.5281/zenodo.10526541) -->

# LOUD: Catalyst of Convergence
Julien A. Raemy (Digital Humanities Lab, University of Basel / DaSCH)
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759) [![Google Scholar](https://img.shields.io/static/v1?label=Google%20Scholar&message=Julien%20A.%20Raemy&color=4285F4&logo=googlescholar)](https://scholar.google.ch/citations?user=pGROUG0AAAAJ&hl) [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=julsraemy&color=181717&logo=github)](https://github.com/julsraemy) [![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@julsraemy@hcommons.social&color=6364FF&logo=mastodon)](https://hcommons.social/@julsraemy)

International Conference on Digital Humanities (CIHN24)
Geneva School of Business Administration | Carouge, Switzerland | 13.02.2024 
:fr: [LOUD : Catalyseur de Convergence](https://julsraemy.ch/prezi/cihn24-loud-catalyseur-convergence.html)


--- 

<!-- footer: Preambule -->


![bg opacity:.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)

# PhD Thesis

## Linked Open Usable Data for Cultural Heritage: Perspectives on Community Practices and Semantic Interoperability

Supervised by: 
- Prof. Dr. Peter Fornaro (University of Basel)
- Prof. Dr. Walter Leimgruber (University of Basel)
- Dr. Robert Sanderson (Yale University)

https://phd.julsraemy.ch


---

![bg opacity:.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

# Agenda

## LOUD: Catalyst of Convergence

- Interlinking data on the web
- Linked Open Usable Data (LOUD)
- LUX, LOUD in action
- Conclusion


---

![bg opacity:.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## Interlinking Data on the Web


---

<!-- footer: Interlinking Data on the Web -->

# An open vision of the web

> The [World Wide Web] project merges the techniques of information retrieval and hypertext to make an easy but powerful global information system. The project started with **the philosophy that much academic information should be freely available to anyone**.

[Berners-Lee 1991]


---

# The Semantic Web or _the Web of Data_

The Semantic Web is an extension of the World Wide Web, through standards, to make it machine-readable.

![center width:500px](https://julsraemy.ch/prezi/assets/tweaked-semweb-layer-cake.webp)

Tweaked Semantic Web Layer Cake [Idehen 2017]

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

![bg opacity:.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## Linked Open Usable Data (LOUD)


---

<!-- footer: Linked Open Usable Data (LOUD) -->

# Linked Open Usable Data (LOUD)

## LOUD

* LOUD's goal is to **achieve the Semantic Web's intent on a global scale in a usable fashion** by leveraging community-driven and **JSON-LD**-based specifications.

* It has five main design principles (https://linked.art/loud/) **to make the data more easily accessible to software developers**, who play a key role in interacting with the data and building software and services on top of it, and to some extent to academics. 

[Sanderson 2019]


---

![bg width:40% opacity:0.07](https://json-ld.org/images/json-ld-logo.png)  

# Linked Open Usable Data (LOUD)

## Specifications that follow the LOUD principles

- International Image Interoperability Framework (IIIF)
- _W3C Web Annotation Data Model_
- Linked Art

---

![bg opacity:.1](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

# LOUD-driven Communities

## IIIF and Linked Art: social fabrics of sound socio-technical practices

- Synergy of effective social and technical integration with an emphasis on usability
- Collaboration beyond technical boundaries
- Inclusivity and diversity in participation
- Openness and friendliness as core values
- Commitment to transparency
- Organisation of online and face-to-face meetings

[Newbury 2018; Raemy 2023]

---

![center bg width:45% opacity:.1](https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png)

# International Image Interoperability Framework (IIIF) 

## IIIF

- A model for presenting and annotating content
- A global community that develops shared application programming interfaces (APIs), implements them in software, and exposes interoperable content

https://iiif.io

---

# IIIF – Use Case

![center width:680px](https://julsraemy.ch/prezi/assets/Leiden_curtain_viewer.gif)

https://www.theleidencollection.com/viewer/david-and-uriah/

---

# IIIF – Use Case

![center](https://julsraemy.ch/prezi/assets/storiiies.gif)

Storiiies: http://storiiies.cogapp.com/

---

![center bg width:50% opacity:.1](https://julsraemy.ch/prezi/assets/Linked_Art_logo.png)

# Linked Art

Linked Art is a community and a CIDOC (_ICOM International Committee for Documentation_) Working Group collaborating to define a metadata application profile for describing cultural heritage, and the technical means for conveniently interacting with it (the API). 

https://linked.art

---

# Linked Art

| Level         | Linked Art                      |
|----------------|---------------------------------|
| **Conceptual Model**      | [CIDOC Conceptual Reference Model](https://www.cidoc-crm.org/) (CRM)                       |
| **Ontology**   | [RDF encoding of CRM 7.1](https://www.cidoc-crm.org/html/cidoc_crm_v7.1.2.html), plus extensions       |
| **Vocabulary** | [Getty Vocabularies](https://www.getty.edu/research/tools/vocabularies/), mainly the Art & Architecture Thesaurus (AAT), as well as the Thesaurus of Geographic Names (TGN) and the Union List of Artist Names (ULAN) |
| **Profile**    | Object-based cultural heritage (mainly art museum oriented)  |
| **API**        | [JSON-LD 1.1](https://www.w3.org/TR/json-ld11/), following REST (representational state transfer) and web patterns                         |



---

# Linked Art

![center](https://julsraemy.ch/prezi/assets/linkedart_50k_feet.svg)

[Raemy et al. 2023, adapted from Sanderson 2018]


---

# Linked Art Digital Integration (with IIIF)

![center](https://julsraemy.ch/prezi/assets/IIIF-LA.svg)


---

![bg opacity:.2](https://library.yale.edu/sites/default/files/beinecke720.jpeg)
![bg opacity:.2](https://britishart.yale.edu/sites/default/files/img/overview/2020-06/2016EF11.572_D8.jpg)
![bg opacity:.2](https://th-thumbnailer.cdn-si-edu.com/DZU5wD7JlgYEjvqC0RGXWZ_45EM=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/fa/49/fa494e15-0d54-403d-9c50-3af1c5890780/ypmarexhgreathall001web.jpg)
![bg opacity:.2](https://artgallery.yale.edu/sites/default/files/styles/max_2600x2600/public/2023-03/2023-ag-exb-4581-0003-pub.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## LUX, LOUD in action


---

<!-- footer: LUX, LOUD in action -->

# Yale Collections Discovery

LUX provides a unified gateway to more than 41 million cultural heritage resources held by Yale's museums, archives and libraries: Yale University Library, Yale Center for British Art, Yale Peabody Museum, Yale University Art Gallery.

## Built on open standards

* Linked Art, IIIF, W3C Activity Streams 
* Widespread technologies: Python, JavaScript, Node.js, React, AWS
* Multimodal database (NoSQL): MarkLogic Server

https://lux.collections.yale.edu/

See Metcalfe Hurst [2023]



---

# Data pipeline and architecture

![center width:550px](https://julsraemy.ch/prezi/assets/lux-arch-simple.png)

[Raemy & Sanderson 2023]

Data Transformation Pipeline Code: https://github.com/project-lux/data-pipeline


---

# LOUD in action

![center](https://julsraemy.ch/prezi/assets/lux-demo.gif)

[Link to optimised video resolution](https://julsraemy.ch/prezi/assets/lux-demo.webm)



---

![bg opacity:.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## Conclusion

---

# Impact and perspectives


1. Improving interoperability and accessibility
2. Facilitating interdisciplinary collaboration
3. Enhanced understanding of cultural heritage
4. Improving research methods and data management
5. Promoting convergence between digital humanities and information science

---

# LOUD-Driven Infrastructure

![center w:1000](https://julsraemy.ch/prezi/assets/loud-infra-example.jpg)

[Felsing et al. 2023]


---

<!-- footer: Conclusion -->

# Concluding thoughts

## Towards collaborative and interoperable convergence

* Grassroots development of IIIF and Linked Art with collaboration and transparency are one of the key factors, but implementations are needed to be conducted in parallel (specifications versus demonstrability).

* LOUD standards, when used in conjunction, enhances semantic interoperability, even if it comes at the cost of ontological purity.

* LOUD practices and standards should serve as common denominators for cultural heritage institutions, public bodies as well as research projects.


---

![bg opacity:.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## References and Image Credits

---

<!-- footer: References and Image Credits -->

<!-- class: tinytext --> 

# References $I$

Berners-Lee, T. (1991, August 6). WorldWideWeb — Executive summary. Archive.Md. https://archive.md/Lfopj

Felsing, U., Fornaro, P., Frischknecht, M., & Raemy, J. A. (2023). Community and Interoperability at the Core of Sustaining Image Archives. Digital Humanities in the Nordic and Baltic Countries Publications, 5(1), 40–54. https://doi.org/10.5617/dhnbpub.10649

Idehen, K. U. (2017, July 24). Semantic Web Layer Cake Tweak, Explained. OpenLink Software Blog. https://medium.com/openlink-software-blog/semantic-web-layer-cake-tweak-explained-6ba5c6ac3fab

Metcalfe Hurst, E. (2023). LUX: Yale Collections Discovery. ARLIS/NA Multimedia & Technology Reviews, 2023(4), 1–4. https://doi.org/10.17613/3hy1-pv45

Newbury, D. (2018). LOUD: Linked Open Usable Data and linked.art. 2018 CIDOC Conference, 1–11. https://cidoc.mini.icom.museum/wp-content/uploads/sites/6/2021/03/CIDOC2018_paper_153.pdf

Raemy, J. A. (2022). Améliorer la valorisation des données du patrimoine culturel grâce au Linked Open Usable Data (LOUD). In N. Lasolle, O. Bruneau, & J. Lieber (Eds.), Actes des journées humanités numériques et Web sémantique (pp. 132–149). Les Archives Henri-Poincaré - Philosophie et Recherches sur les Sciences et les Technologies (AHP-PReST); Laboratoire lorrain de recherche en informatique et ses applications (LORIA). https://doi.org/10.5451/unibas-ep89725

Raemy, J. A. (2023). Characterising the IIIF and Linked Art Communities: Survey report (p. 29) [Report]. University of Basel. https://doi.org/10.5451/unibas-ep95340

---

# References $II$

Raemy, J. A., Gray, T., Collinson, A., & Page, K. R. (2023, July 12). Enabling Participatory Data Perspectives for Image Archives through a Linked Art Workflow (Poster). Digital Humanities 2023 Posters. Digital Humanities 2023, Graz, Austria. https://doi.org/10.5281/zenodo.7878358

Raemy, J. A., & Sanderson, R. (2023). Analysis of the Usability of Automatically Enriched Cultural Heritage Data (arXiv:2309.16635). arXiv. https://doi.org/10.48550/arXiv.2309.16635

Sanderson, R. (2018, May 15). Shout it Out: LOUD. EuropeanaTech Conference 2018, Rotterdam, the Netherlands. https://www.slideshare.net/Europeana/shout-it-out-loud-by-rob-sanderson-europeanatech-conference-2018

Sanderson, R. (2019). Keynote: Standards and Communities: Connected People, Consistent Data, Usable Applications. 2019 ACM/IEEE Joint Conference on Digital Libraries (JCDL), 28. https://doi.org/10.1109/JCDL.2019.00009


---

![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

# Image Credits

## Cultural Anthropology Switzerland (CAS)

These images are part of the [photographic archives of Cultural Anthropology Switzerland](https://archiv.sgv-sstp.ch/), formerly the _Swiss Society for Folklore Studies_, based in Basel, Switzerland. Licence: CC BY-NC 4.0 [![w:60](https://julsraemy.ch/prezi/assets/cc-by-nc.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

- Brunner, Ernst. [Blick auf das Spalentor]. Basel, 1938. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_00115. Alte Bildnummer: AB 15. https://archiv.sgv-sstp.ch/resource/422350 

- Brunner, Ernst. [Katze auf einer Mauer]. Ort und Datum unbekannt. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_19553. Alte Bildnummer: HV 53. https://archiv.sgv-sstp.ch/resource/441788

- Brunner, Ernst. [Ringtanz während der Masüras auf der Alp Sura]. Guarda, 1939. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_08589. Alte Bildnummer: DL 89. https://archiv.sgv-sstp.ch/resource/430824