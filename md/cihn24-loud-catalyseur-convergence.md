---
marp: true
author: Julien A. Raemy
title: LOUD – Catalyseur de Convergence
description: L'émergence du Linked Open Usable Data (LOUD) – littéralement « données ouvertes liées et utilisables » – représente un tournant dans la convergence des sciences de l'information et des humanités numériques. Ce concept innovant cherche à équilibrer la complétude et la précision des données avec leur accessibilité et utilité pour un public étendu. Historiquement, la connexion des données du patrimoine culturel a été entravée par des obstacles techniques et conceptuels. Les initiatives préexistantes se concentraient sur la rigueur ontologique, souvent au détriment de l'accessibilité et de l'usabilité des données pour les non-experts. Les projets Linked Open Data (LOD) étaient essentiellement axés sur la publication et la consommation de données pour un public d'experts en RDF (Resource Description Framework). L'introduction de JSON-LD en 2014 a réduit les barrières à l'entrée pour les développeurs, permettant une interprétation des données RDF en format JSON standard plus accessible. LOUD se distingue par ses principes de conception bien définis et ses spécifications basées sur JSON-LD. Il inclut des standards communautaires tels que l'API Présentation 3.0 de l'International Image Interoperability Framework (IIIF) et Linked Art ainsi que le Web Annotation Data Model du World Wide Web Consortium (W3C), orientant vers une meilleure accessibilité et interopérabilité des données. Ces principes couvrent a) la bonne abstraction en fonction du public, b) peu d'obstacles à l'entrée, c) compréhensibilité par introspection, d) documentation avec des exemples concrets, e) minimisation des exceptions et promotion de modèles cohérents. Les standards adhérants aux principes LOUD, en synergie, accroissent l'interopérabilité sémantique, même si cela peut impacter la pureté ontologique. Cette approche pragmatique facilite une meilleure utilisation et intégration des données du patrimoine culturel. LOUD peut également servir de fondements communs pour les institutions patrimoniales et les projets de recherche, offrant un cadre harmonisé pour la gestion des données culturelles. Malgré les défis d'adoption à grande échelle, l'exemple de Yale avec sa plateforme LUX, qui a été publiée officiellement en mai 2023, montre comment l'intégration des spécifications LOUD, notamment IIIF et Linked Art, peut améliorer l'interopérabilité et enrichir les données culturelles. LUX représente une application exemplaire des standards LOUD car la plateforme intègre les collections variées de l'université, incluant le Yale Center for British Art, la Yale University Art Gallery, le Yale Peabody Museum et la Yale University Library, totalisant quelque 41 millions de ressources. Cette intégration englobe des domaines tels que l'art, l'histoire naturelle, les catalogues de la bibliothèque et les données archivistiques. LUX se distingue par son architecture systémique comprenant la récolte et la réconciliation de données par le biais d'une chaîne de traitement automatique. Sa force réside dans sa capacité à intégrer des sources de données externes, offrant ainsi une richesse de perspectives et un enrichissement des données accessibles aux utilisateurs.LOUD émerge comme un catalyseur clé pour les sciences de l'information et les humanités numériques, équilibrant complétude, précision et accessibilité des données. L'approche illustrée par Yale démontre l'impact de LOUD dans l'amélioration de l'accès et de la valorisation des données du patrimoine culturel, marquant une avancée significative dans le domaine.
keywords: CIHN24, HEG-GE, Humanités numériques, IIIF, Interopérabilité Sémantique, Linked Art, Linked Data, Linked Open Usable Data, LOUD, LUX, Patrimoine Culturel, Standardisation, Web Annotation Data Model
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://julsraemy.ch/prezi/cihn24-loud-catalyseur-convergence.html
theme: beam
paginate: true
_paginate: false
---

<!-- _class: title -->

<!-- header: Julien A. Raemy | **LOUD : Catalyseur de Convergence** | [![w:35 CC BY 4.0](https://julsraemy.ch/prezi/assets/cc-by.svg)](https://creativecommons.org/licenses/by/4.0/) -->

<!-- _footer: CIHN24 | Haute école de gestion de Genève | 13.02.2024 | [![width:100](https://zenodo.org/badge/DOI/10.5281/zenodo.10526541.svg)](https://doi.org/10.5281/zenodo.10526541) -->

# LOUD : Catalyseur de Convergence
Julien A. Raemy (Digital Humanities Lab, Université de Bâle / DaSCH)
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759) [![Google Scholar](https://img.shields.io/static/v1?label=Google%20Scholar&message=Julien%20A.%20Raemy&color=4285F4&logo=googlescholar)](https://scholar.google.ch/citations?user=pGROUG0AAAAJ&hl) [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=julsraemy&color=181717&logo=github)](https://github.com/julsraemy) [![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@julsraemy@hcommons.social&color=6364FF&logo=mastodon)](https://hcommons.social/@julsraemy)

Conférence internationale sur les humanités numériques (CIHN24)
Haute école de gestion de Genève | Carouge, Suisse | 13.02.2024 
:uk: [LOUD: Catalyst of Convergence](https://julsraemy.ch/prezi/cihn24-loud-catalyst-convergence.html)

<!-- 
Bonjour à toutes et à tous, c'est un plaisir de revenir à la HEG, là où j'ai étudié et travailler, pour évoquer la thématique de ma thèse de doctorat. 

I am now going to switch to English and do the opposite to what Professor Joyeux-Prunel did this morning, so the content will be in French, but I will be speaking English. 

There is an English version of this slide deck and I can give you the link to this HTML-hosted presentation.

 -->


--- 

<!-- footer: Préambule -->


![bg opacity:.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)

# Thèse de doctorat

## Linked Open Usable Data for Cultural Heritage: Perspectives on Community Practices and Semantic Interoperability

Thèse encadrée par :
- Prof. Dr. Peter Fornaro (Université de Bâle)
- Prof. Dr. Walter Leimgruber (Université de Bâle)
- Dr. Robert Sanderson (Yale)

https://phd.julsraemy.ch

<!-- 

I am doing a PhD in Digital Humanities at the University of Basel on Linked Open Usable Data. Interested by two perspectives...

 -->


---

![bg opacity:.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

# Déroulement

## LOUD : Catalyseur de Convergence

- Interconnexion des données sur le web
- Linked Open Usable Data (LOUD)
- La plateforme LUX, LOUD en pratique
- Conclusion

<!-- 

Interlinking data on the web
Linked Open Usable Data (LOUD)
LUX, Yale Collections Discovery Platform
Conclusion


 -->

---

![bg opacity:.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## Interconnexion des données sur le web


---

<!-- footer: Interconnexion des données sur le web -->

# Une vision ouverte du web

> The [World Wide Web] project merges the techniques of information retrieval and hypertext to make an easy but powerful global information system. The project started with **the philosophy that much academic information should be freely available to anyone**.

[Berners-Lee 1991]

<!-- 
The web was created at CERN in 1989 by Tim Berners-Lee. The World Wide Web project was based on the idea that most academic information should be freely accessible to everyone.

 -->


---

# Le web sémantique

Le web sémantique est une extension du web, par le biais de normes, afin de le rendre compréhensible par les machines.

![center width:500px](https://julsraemy.ch/prezi/assets/tweaked-semweb-layer-cake.webp)

Tweaked Semantic Web Layer Cake [Idehen 2017]

<!-- 
The Semantic Web is an extension of the World Wide Web, through standards, to make it machine-readable. And it works with standard, and the syntax of it is Resource Description Framework (RDF)

 -->

---

# Linked Open Data (LOD)

## Données ouvertes liées

![center](https://5stardata.info/images/5-star-steps.png)

Programme de déploiement en 5 étoiles pour l'Open Data : https://5stardata.info/

<!--
1) publish your data on the Web (in any format) under an open licence
2) publish it as structured data (for example, an Excel document rather than a scanned image of a table)
3) publish it in an open, non-proprietary format (for example, a CSV rather than an Excel)
4) use URIs to refer to things in your data, so that people can make references to them
5) link your data to other data to provide context
 -->



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

## Données ouvertes liées et utilisables

* L'objectif du LOUD est de **concrétiser l'intention du web sémantique à une échelle globale d'une manière pragmatique** en s'appuyant sur des spécifications communautaires et basées sur le format **JSON-LD**.

* LOUD repose sur cinq grands principes de conception (https://linked.art/loud/) visant à **rendre les données plus facilement accessibles aux développeurs de logiciels**, qui occupent un rôle déterminant dans l'interaction avec les données et la création de programmes et de services à partir de celles-ci, et, dans une certaine mesure, aux membres de la communauté universitaire. 


[Sanderson 2019]

<!-- 

The concept was suggested by Robert Sanderson, who has been involved in the design and maintenance of web standards, mainly in the cultural heritage field.

LOUD's goal is to achieve the Semantic Web's intent on a global scale in a usable fashion by leveraging community-driven and JSON-LD-based specifications.

5 design principles

 -->

---

![bg width:40% opacity:0.07](https://json-ld.org/images/json-ld-logo.png)  

# Linked Open Usable Data (LOUD)

## Systèmes qui adhèrent aux principes de conception du LOUD

- International Image Interoperability Framework (IIIF)
- W3C Web Annotation Data Model
- Linked Art

<!-- 

Standards that adheres to the design principles.

IIIF and Linked Art: communities linked by the presence of shared members providing expertise and leadership
 -->

---

![bg opacity:.1](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

# Communautés LOUD

## IIIF et Linked Art : des fondations solides de coopération sociale et technique

- Synergie d'une intégration sociale et technique efficace mettant l'accent sur l'utilisabilité
- Collaboration transversale au-delà des frontières techniques
- Inclusivité et diversité dans la participation
- Ouverture d'esprit et convivialité comme valeurs fondamentales
- Engagement envers la transparence
- Organisation de réunions en ligne et en présentiel

[Newbury 2018; Raemy 2023]

<!-- 
Synergy of effective social and technical integration with an emphasis on usability
Collaboration beyond technical boundaries
Inclusivity and diversity in participation
Openness and friendliness as core values
Commitment to transparency
Organisation of online and face-to-face meetings
 -->

---

![center bg width:45% opacity:.1](https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png)

# International Image Interoperability Framework (IIIF) 

## IIIF

- Un modèle pour la présentation et annotation d’objets numériques
- Une communauté, qui développe des interfaces de programmation applicative (API) partagées, les implémentent dans des logiciels et exposent des contenus interopérables sur le Web

https://iiif.io

<!-- 

A model for presenting and annotating content
A global community that develops shared application programming interfaces (APIs), implements them in software, and exposes interoperable content

 -->

---

# IIIF – Cas d'application

![center width:680px](https://julsraemy.ch/prezi/assets/Leiden_curtain_viewer.gif)

https://www.theleidencollection.com/viewer/david-and-uriah/

---

# IIIF – Cas d'application

![center](https://julsraemy.ch/prezi/assets/storiiies.gif)

Storiiies: http://storiiies.cogapp.com/

---

![center bg width:50% opacity:.1](https://julsraemy.ch/prezi/assets/Linked_Art_logo.png)

# Linked Art

Linked Art est une communauté et un groupe de travail du CIDOC (_ICOM International Committee for Documentation_) qui coopère à la définition d'un profil d'application de métadonnées pour la description du patrimoine culturel, ainsi que des moyens techniques permettant d'interagir aisément avec ce profil (l'API).

https://linked.art

<!-- 
Linked Art is a community and a CIDOC (ICOM International Committee for Documentation) Working Group collaborating to define a metadata application profile for describing cultural heritage, and the technical means for conveniently interacting with it (the API).

 -->

---

# Linked Art

| Niveau d'abstraction         | Linked Art                      |
|----------------|---------------------------------|
| **Modèle conceptuel**      | [CIDOC Conceptual Reference Model](https://www.cidoc-crm.org/) (CRM)                       |
| **Ontologie**   | [Encodage RDF de la version CRM 7.1]((https://www.cidoc-crm.org/html/cidoc_crm_v7.1.2.html)), plus quelques extensions       |
| **Vocabulaire** | [Getty](https://www.getty.edu/research/tools/vocabularies/) (AAT, ULAN, TGN) |
| **Profil**    | Patrimoine culturel, principalement axé sur les objets des musées d'art |
| **API**        | JSON-LD, style d'architecture REST              |

<!-- 
Here in more detail. What's interesting is that Linked Art is based on the CIDOC-CRM ontology, which is a high-level model, and it's thanks to the Getty's vocabularies that the entities and resources are further defined.

Object-based cultural heritage (mainly art museum oriented)

 -->



---

# Linked Art

![center](https://julsraemy.ch/prezi/assets/linkedart_50k_feet.svg)

[Raemy et al. 2023, adapté de Sanderson 2018]

<!-- 
Linked Art from 50k feet

 -->


---

# Intégration numérique (IIIF) avec Linked Art

![center](https://julsraemy.ch/prezi/assets/IIIF-LA.svg)


<!-- 

Digital Integration available in Linked Art such as describing IIIF-compliant resources and pointing to their API context and treating this service as something that is semantically relevant
.
 -->


---

![bg opacity:.2](https://library.yale.edu/sites/default/files/beinecke720.jpeg)
![bg opacity:.2](https://britishart.yale.edu/sites/default/files/img/overview/2020-06/2016EF11.572_D8.jpg)
![bg opacity:.2](https://th-thumbnailer.cdn-si-edu.com/DZU5wD7JlgYEjvqC0RGXWZ_45EM=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/fa/49/fa494e15-0d54-403d-9c50-3af1c5890780/ypmarexhgreathall001web.jpg)
![bg opacity:.2](https://artgallery.yale.edu/sites/default/files/styles/max_2600x2600/public/2023-03/2023-ag-exb-4581-0003-pub.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## La plateforme LUX, LOUD en pratique


---

<!-- footer: La plateforme LUX, LOUD en pratique -->

# Yale Collections Discovery

LUX – https://lux.collections.yale.edu/ – regroupe plus de 41 millions de resources des bibliothèques, musées et archives de l'université de Yale : _Yale University Library, Yale Center for British Art, Yale Peabody Museum, Yale University Art Gallery_. 

## Plateforme reposant sur des normes ouvertes

- Linked Art, IIIF, W3C Activity Streams – standards tous sérialisés en JSON-LD 
- Technologies communes : Python, JavaScript, Node.js, React, AWS
- Base de données multimodale orientée documents (NoSQL) : MarkLogic Server
- Documentation et mise à disposition des chaînes de traitement, modélisation et correspondance des données

Voir Metcalfe Hurst [2023]

<!-- 
LUX provides a unified gateway to more than 41 million cultural heritage resources held by Yale's museums, archives and libraries: Yale University Library, Yale Center for British Art, Yale Peabody Museum, Yale University Art Gallery. Widespread technologies: Python, JavaScript, Node.js, React, AWS

-->

---

# Chaîne de traitement et architecture

![center width:600px](https://julsraemy.ch/prezi/assets/lux-arch-simple.png)

[Raemy & Sanderson 2023]


<!-- 
Data pipeline. Each institition retain the way they describe cultural objects, they retain teir own practices, but we need somme common denominator and LOUD can serve as that. 

 -->

---

# LOUD en pratique

![center](https://julsraemy.ch/prezi/assets/lux-demo.gif)

[Lien vers une résolution optimisée de la vidéo](https://julsraemy.ch/prezi/assets/lux-demo.webm)



---

![bg opacity:.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## Conclusion

---

# Impact et perspectives


1. Amélioration de l'interopérabilité et de l'accessibilité
2. Facilitation de la collaboration interdisciplinaire
3. Renforcement de la compréhension du patrimoine culturel
4. Avancées dans les méthodes de recherche et de la gestion des données
5. Promotion de la convergence entre humanités numériques et sciences de l'information

<!-- 
Improving Interoperability and Accessibility: Enhances data exchange and access across cultural and scientific datasets using standards like JSON-LD, IIIF, and Linked Art.

Facilitating Interdisciplinary Collaboration: Lowers technical barriers and promotes cooperation among cultural heritage professionals, information scientists, and digital humanities researchers.

Enhanced Understanding of Cultural Heritage: Makes heritage data more accessible and understandable, improving cultural sharing and preservation efforts.

Improving Research Methods and Data Management: Transforms research approaches and data management in digital humanities and information science towards more user-oriented and explicit management.

Promoting Convergence between Digital Humanities and Information Science: Encourages in-depth analysis and interpretation of cultural and historical data, leading to more integrated and innovative studies in these fields.

 -->

---

# Architecture orientée LOUD

![center w:1000](https://julsraemy.ch/prezi/assets/loud-infra-example.jpg)

[Felsing et al. 2023]


<!-- 

LOUD is emerging as a key enabler for information science and digital humanities, balancing data completeness, accuracy and accessibility. The approach illustrated by Yale demonstrates the impact of LOUD in improving access to and enhancement of cultural heritage data, marking a significant advance in the field.

 -->

---

<!-- footer: Conclusion -->

# Réfléxions finales

## Vers une convergence collaborative et interopérable

* Le développement communautaire des normes IIIF et Linked Art, caractérisé par un esprit de collaboration et de transparence, est un moteur essentiel. Il est impératif, en parallèle de l'élaboration de ces normes, de développer des logiciels et des outils qui soient compatibles avec ces spécifications pour en exploiter pleinement le potentiel.

* Les standards LOUD, employés conjointement, améliorent l'interopérabilité sémantique, même si cela se fait au détriment d'une certaine pureté ontologique.

* Les pratiques et les normes LOUD devraient servir de dénominateurs communs pour les institutions du patrimoine culturel, les organismes publics et les projets de recherche.

<!-- 

Towards collaborative and interoperable convergence

Grassroots development of IIIF and Linked Art with collaboration and transparency are one of the key factors, but implementations are needed to be conducted in parallel (specifications versus demonstrability).

LOUD standards, when used in conjunction, enhances semantic interoperability, even if it comes at the cost of ontological purity.

LOUD practices and standards should serve as common denominators for cultural heritage institutions, public bodies as well as research projects.


 -->


---

![bg opacity:.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## Bibliographie et crédits photographiques

---

<!-- footer: Bibliographie et crédits photographiques -->

<!-- class: tinytext --> 

# Bibliographie $I$

Berners-Lee, T. (1991, August 6). WorldWideWeb — Executive summary. Archive.Md. https://archive.md/Lfopj

Felsing, U., Fornaro, P., Frischknecht, M., & Raemy, J. A. (2023). Community and Interoperability at the Core of Sustaining Image Archives. Digital Humanities in the Nordic and Baltic Countries Publications, 5(1), 40–54. https://doi.org/10.5617/dhnbpub.10649

Idehen, K. U. (2017, July 24). Semantic Web Layer Cake Tweak, Explained. OpenLink Software Blog. https://medium.com/openlink-software-blog/semantic-web-layer-cake-tweak-explained-6ba5c6ac3fab

Metcalfe Hurst, E. (2023). LUX: Yale Collections Discovery. ARLIS/NA Multimedia & Technology Reviews, 2023(4), 1–4. https://doi.org/10.17613/3hy1-pv45

Newbury, D. (2018). LOUD: Linked Open Usable Data and linked.art. 2018 CIDOC Conference, 1–11. https://cidoc.mini.icom.museum/wp-content/uploads/sites/6/2021/03/CIDOC2018_paper_153.pdf

Raemy, J. A. (2022). Améliorer la valorisation des données du patrimoine culturel grâce au Linked Open Usable Data (LOUD). In N. Lasolle, O. Bruneau, & J. Lieber (Eds.), Actes des journées humanités numériques et Web sémantique (pp. 132–149). Les Archives Henri-Poincaré - Philosophie et Recherches sur les Sciences et les Technologies (AHP-PReST); Laboratoire lorrain de recherche en informatique et ses applications (LORIA). https://doi.org/10.5451/unibas-ep89725

Raemy, J. A. (2023). Characterising the IIIF and Linked Art Communities: Survey report (p. 29) [Report]. University of Basel. https://doi.org/10.5451/unibas-ep95340

---

# Bibliographie $II$

Raemy, J. A., Gray, T., Collinson, A., & Page, K. R. (2023, July 12). Enabling Participatory Data Perspectives for Image Archives through a Linked Art Workflow (Poster). Digital Humanities 2023 Posters. Digital Humanities 2023, Graz, Austria. https://doi.org/10.5281/zenodo.7878358

Raemy, J. A., & Sanderson, R. (2023). Analysis of the Usability of Automatically Enriched Cultural Heritage Data (arXiv:2309.16635). arXiv. https://doi.org/10.48550/arXiv.2309.16635

Sanderson, R. (2018, May 15). Shout it Out: LOUD. EuropeanaTech Conference 2018, Rotterdam, the Netherlands. https://www.slideshare.net/Europeana/shout-it-out-loud-by-rob-sanderson-europeanatech-conference-2018

Sanderson, R. (2019). Keynote: Standards and Communities: Connected People, Consistent Data, Usable Applications. 2019 ACM/IEEE Joint Conference on Digital Libraries (JCDL), 28. https://doi.org/10.1109/JCDL.2019.00009


---

![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

# Crédits photographiques

## Anthropologie Culturelle Suisse (ACS)

Ces images font partie des [archives photographiques d'Anthropologie Culturelle Suisse](https://archiv.sgv-sstp.ch/), anciennement la _société suisse des traditions populaires_, sise à Bâle. Licence: CC BY-NC 4.0 [![w:60](https://julsraemy.ch/prezi/assets/cc-by-nc.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

- Brunner, Ernst. [Blick auf das Spalentor]. Basel, 1938. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_00115. Alte Bildnummer: AB 15. https://archiv.sgv-sstp.ch/resource/422350 

- Brunner, Ernst. [Katze auf einer Mauer]. Ort und Datum unbekannt. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_19553. Alte Bildnummer: HV 53. https://archiv.sgv-sstp.ch/resource/441788

- Brunner, Ernst. [Ringtanz während der Masüras auf der Alp Sura]. Guarda, 1939. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_08589. Alte Bildnummer: DL 89. https://archiv.sgv-sstp.ch/resource/430824