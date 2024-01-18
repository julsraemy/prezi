---
marp: true
author: Julien A. Raemy
title: Introduction to Open Data
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

<!-- _footer: Conférence internationale sur les humanités numériques (CIHN24) | [![width:120](https://zenodo.org/badge/DOI/10.5281/zenodo.10526542.svg)](https://doi.org/10.5281/zenodo.10526542) -->

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

- Linked Open Usable Data (LOUD)
- LOUD en pratique : LUX
- Conclusion


---

<!-- footer: Références et crédits -->

<!-- class: tinytext --> 

# Références bibliographiques



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