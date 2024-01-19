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

<!-- _footer: CIHN24 | Haute école de gestion de Genève | 13.02.2024 | [![width:100](https://zenodo.org/badge/DOI/10.5281/zenodo.10526542.svg)](https://doi.org/10.5281/zenodo.10526542) -->

# LOUD : Catalyseur de Convergence
Julien A. Raemy (Digital Humanities Lab, Université de Bâle)
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759) [![Google Scholar](https://img.shields.io/static/v1?label=Google%20Scholar&message=Julien%20A.%20Raemy&color=4285F4&logo=googlescholar)](https://scholar.google.ch/citations?user=pGROUG0AAAAJ&hl) [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=julsraemy&color=181717&logo=github)](https://github.com/julsraemy) [![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@julsraemy@hcommons.social&color=6364FF&logo=mastodon)](https://hcommons.social/@julsraemy)

Conférence internationale sur les humanités numériques (CIHN24)
Haute école de gestion de Genève | Carouge, Suisse | 13.02.2024 


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


---

![bg opacity:.14](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

# Déroulement

## LOUD : Catalyseur de Convergence

- Interconnexion des données sur le web
- Linked Open Usable Data (LOUD)
- La plateforme LUX, LOUD en pratique
- Conclusion


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


---

# Le web sémantique

Le web sémantique est une extension du web, par le biais de normes, afin de le rendre compréhensible par les machines.

![center width:500px](https://julsraemy.ch/prezi/assets/tweaked-semweb-layer-cake.webp)

Tweaked Semantic Web Layer Cake [Idehen 2017]


---

#  Resource Description Framework (RDF)

Avec RDF, tout va par trois. La pluplart des parties constitutives des triples ont des identifiants uniformes de ressources (_Uniform Resource Identifier_ - URI). 
Syntaxe : **sujet, prédicat, objet** $(s \ \vec{p} \ o)$ 

![center width:540px](https://julsraemy.ch/prezi/assets/rdf-graph.svg)



---

# Linked Open Data (LOD)

## Données ouvertes liées

![center](https://5stardata.info/images/5-star-steps.png)

Programme de déploiement en 5 étoiles pour l'Open Data : https://5stardata.info/

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

## Données ouvertes liées et utilisables

* L'objectif du LOUD est de **concrétiser l'intention du web sémantique à une échelle globale d'une manière pragmatique** en s'appuyant sur des spécifications communautaires et basées sur le format **JSON-LD**.
* LOUD repose sur cinq grands principes de conception visant à **rendre les données plus facilement accessibles aux développeurs de logiciels**, qui occupent un rôle déterminant dans l'interaction avec les données et la création de programmes et de services à partir de celles-ci, et, dans une certaine mesure, aux membres de la communauté universitaire.


[Sanderson 2018, 2019]

<!-- 

Le concept a été proposé par Robert Sanderson, qui a participé à la conception et à la maintenance de normes web, principalement dans le domaine du patrimoine culturel. 

 -->

---

# Linked Open Usable Data (LOUD)

## Principes de conception

- La bonne abstraction en fonction du public (_The right Abstraction for the audience_)
- Peu d'obstacles à l'entrée (_Few Barriers to entry_)
- Compréhensible par introspection (_Comprehensible by introspection_)
- Documentation comportant des exemples concrets (_Documentation with working examples_)
- Peu d'exceptions, mais de nombreux modèles cohérents (_Few Exceptions, instead many consistent patterns_)

https://linked.art/loud/. Propre traduction [Raemy 2022]

<!-- 

A. La bonne abstraction en fonction du public (The right Abstraction for the audience)
Il faut privilégier les cas d'utilisation au lieu de la rigueur ontologique afin de déterminer le niveau d'interopérabilité.

B. Peu d'obstacles à l'entrée (Few Barriers to entry)
Les données, et le modèle sous-jacent, doivent être faciles à utiliser et à exploiter. La mise en place de tels systèmes incitera davantage de personnes à y recourir activement.

C. Compréhensible par introspection (Comprehensible by introspection)
Les données doivent être compréhensibles dans une large mesure simplement en les consultant, sans requérir de l'aide extérieure. Cela peut être achevé en sérialisant les informations en JSON-LD, un format d'encodage de donnée structurées simple à lire et répandu sur le Web.

D. Documentation comportant des exemples concrets (Documentation with working examples)
Une documentation des plus exhaustives doit être réalisée afin de clarifier la mise en œuvre des cas d'utilisation.

E. Peu d'exceptions, mais de nombreux modèles cohérents (Few Exceptions, instead many consistent patterns)
Un modèle doit pouvoir contenir le moins d'exceptions possibles pour éviter d'ajouter des règles demandant la création de champs personnalisés au cas par cas.

 -->


---

![bg width:40% opacity:0.07](https://json-ld.org/images/json-ld-logo.png)  

# Linked Open Usable Data (LOUD)

## Systèmes qui adhèrent aux principes de conception du LOUD

- International Image Interoperability Framework (IIIF)
- W3C Web Annotation Data Model
- Linked Art



---

![center bg width:45% opacity:.1](https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png)

# International Image Interoperability Framework (IIIF) 

## IIIF

- Un modèle pour la présentation et annotation d’objets numériques
- Une communauté, qui développe des interfaces de programmation applicative (API) partagées, les implémentent dans des logiciels et exposent des contenus interopérables sur le Web

https://iiif.io

---

# IIIF – Cas d'application

![center width:680px](https://julsraemy.ch/prezi/assets/Leiden_curtain_viewer.gif)

https://www.theleidencollection.com/viewer/david-and-uriah/

---

# IIIF – Cas d'application

![center](https://julsraemy.ch/prezi/assets/storiiies.gif)

Storiiies: http://storiiies.cogapp.com/


---

# W3C Web Annotation Data Model

![center](https://julsraemy.ch/prezi/assets/anno-model.png)

https://www.w3.org/TR/annotation-model/

---

# Linked Art

Linked Art est une communauté et un groupe de travail du CIDOC qui collabore à la définition d'un profil d'application de métadonnées (le modèle) pour décrire les données du patrimoine culturel et les moyens techniques pour interagir avec celles-ci (l'API). 

https://linked.art

![center w:570](https://julsraemy.ch/prezi/assets/la-overview.svg)

---

# Linked Art

| Niveau d'abstraction         | Linked Art                      |
|----------------|---------------------------------|
| **Modèle conceptuel**      | CIDOC Conceptual Reference Model (CRM)                       |
| **Ontologie**   | [Encodage RDF de la version CRM 7.1]((https://www.cidoc-crm.org/html/cidoc_crm_v7.1.2.html)), plus quelques extensions       |
| **Vocabulaire** | [Getty]((https://www.getty.edu/research/tools/vocabularies/)) (AAT, ULAN, TGN) |
| **Profil**    | Patrimoine culturel, principalement axé sur les objets des musées d'art |
| **API**        | JSON-LD, style d'architecture REST              |

[Points de terminaison de l'API Linked Art](https://linked.art/api/1.0/endpoint/): _Concepts, Digital Objects, Events, Groups, People, Physical Objects, Places, Provenance Activities, Sets, Textual Works, Visual Works_

---

# Intégration numérique (IIIF) avec Linked Art

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

## La plateforme LUX, LOUD en pratique


---

<!-- footer: La plateforme LUX, LOUD en pratique -->

# Yale Collections Discovery

LUX – https://lux.collections.yale.edu/ – regroupe les collections des bibliothèques, musées et archives de l'université de Yale : _Yale University Library, Yale Center for British Art, Yale Peabody Museum, Yale University Art Gallery_. 

## Plateforme reposant sur des normes ouvertes

- Linked Art, IIIF, W3C Activity Streams – standards tous sérialisés en JSON-LD 
- Technologies communes : Python, JavaScript, Node.js, React, AWS
- Base de données multimodale orientée documents (NoSQL) : MarkLogic Server
- Documentation et mise à disposition des chaînes de traitement, modélisation et correspondance des données

<!-- Toutes les composantes de LUX, y compris le code spécifique pour MarkLogic, sera rendu open source.  -->


---

# Chaîne de traitement et architecture

![center width:600px](https://julsraemy.ch/prezi/assets/lux-arch-simple.png)

[Raemy & Sanderson 2023]


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


Bien sûr, voici les cinq points résumant l'impact et les perspectives de LOUD (Linked Open Usable Data) sur la recherche et la gestion des données du patrimoine culturel, ainsi que sur les sciences de l'information et les humanités numériques :

Amélioration de l'Interopérabilité et de l'Accessibilité : LOUD facilite une meilleure interopérabilité entre diverses sources de données culturelles et scientifiques et améliore l'accessibilité pour un large éventail d'utilisateurs, grâce à l'utilisation de standards tels que JSON-LD, IIIF et Linked Art.

Facilitation de la Collaboration Interdisciplinaire : LOUD abaisse les barrières techniques et promeut des principes adaptés aux besoins du public, encourageant la collaboration entre professionnels du patrimoine culturel, scientifiques de l'information et chercheurs en humanités numériques pour des projets innovants et interdisciplinaires.

Renforcement de la Compréhension et de la Conservation du Patrimoine Culturel : L'approche de LOUD, en rendant les données du patrimoine culturel plus accessibles et compréhensibles, aide les institutions à mieux partager et préserver leur richesse culturelle, tout en fournissant aux chercheurs des outils plus efficaces pour l'analyse et l'étude.

Avancées dans les Méthodes de Recherche et de Gestion des Données : Les principes de LOUD, tels que la facilité d'accès et la documentation explicative, peuvent transformer les méthodologies de recherche dans les humanités numériques et les sciences de l'information, permettant une gestion des données plus cohérente et orientée utilisateur.

Promotion de la Convergence entre Humanités Numériques et Sciences de l'Information : LOUD encourage le rapprochement entre les humanités numériques et les sciences de l'information, favorisant une analyse et une interprétation enrichies des données culturelles et historiques, et ouvrant la voie à des études plus intégrées et innovantes dans ces domaines.

 -->


---

# Architecture orientée LOUD

![center w:850](https://julsraemy.ch/prezi/assets/loud-infra-example.jpg)

[Felsing et al. 2023]


<!-- 

LOUD émerge comme un catalyseur clé pour les sciences de l'information et les humanités numériques, équilibrant complétude, précision et accessibilité des données. L'approche illustrée par Yale démontre l'impact de LOUD dans l'amélioration de l'accès et de la valorisation des données du patrimoine culturel, marquant une avancée significative dans le domaine.

 -->

---

<!-- footer: Conclusion -->

# Réfléxions finales

## Vers une convergence collaborative et interopérable

* Le développement communautaire des normes IIIF et Linked Art, caractérisé par un esprit de collaboration et de transparence, est un moteur essentiel. Il est impératif, en parallèle de l'élaboration de ces normes, de développer des logiciels et des outils qui soient compatibles avec ces spécifications pour en exploiter pleinement le potentiel.
* Les standards LOUD, employés conjointement, améliorent l'interopérabilité sémantique, même si cela se fait au détriment d'une certaine pureté ontologique.
* Les pratiques et les normes LOUD devraient servir de dénominateurs communs pour les institutions du patrimoine culturel, les organismes publics et les projets de recherche.


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

# Bibliographie

Berners-Lee, T. (1991, August 6). WorldWideWeb — Executive summary. Archive.Md. https://archive.md/Lfopj

Felsing, U., Fornaro, P., Frischknecht, M., & Raemy, J. A. (2023). Community and Interoperability at the Core of Sustaining Image Archives. Digital Humanities in the Nordic and Baltic Countries Publications, 5(1), 40–54. https://doi.org/10.5617/dhnbpub.10649

Idehen, K. U. (2017, July 24). Semantic Web Layer Cake Tweak, Explained. OpenLink Software Blog. https://medium.com/openlink-software-blog/semantic-web-layer-cake-tweak-explained-6ba5c6ac3fab

Raemy, J. A. (2022). Améliorer la valorisation des données du patrimoine culturel grâce au Linked Open Usable Data (LOUD). In N. Lasolle, O. Bruneau, & J. Lieber (Eds.), Actes des journées humanités numériques et Web sémantique (pp. 132–149). Les Archives Henri-Poincaré - Philosophie et Recherches sur les Sciences et les Technologies (AHP-PReST); Laboratoire lorrain de recherche en informatique et ses applications (LORIA). https://doi.org/10.5451/unibas-ep89725

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