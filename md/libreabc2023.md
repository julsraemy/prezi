---
marp: true
author: Julien A. Raemy
title: Créer des API ouvertes - les pratiques et le tissu social des communautés IIIF et Linked Art 
description: Cette présentation sur les pratiques des communautés IIIF et Linked Art a été réalisée dans le cadre de la journée LibreABC qui s'est déroulée le 31 août 2023 au Musée d'ethnographie de Genève. 
keywords: API, IIIF, Linked Art, LOUD
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://doi.org/10.5281/zenodo.8178671
theme: gaia
class: invert
paginate: true
_paginate: false
---

<!-- _class: lead -->

# <!-- fit --> Créer des API ouvertes
## Les pratiques et le tissu social des communautés IIIF et Linked Art
Julien A. Raemy (Digital Humanities Lab, Université de Bâle)
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759) [![Google Scholar](https://img.shields.io/static/v1?label=Google%20Scholar&message=Julien%20A.%20Raemy&color=4285F4&logo=googlescholar)](https://scholar.google.ch/citations?user=pGROUG0AAAAJ&hl) [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=julsraemy&color=181717&logo=github)](https://github.com/julsraemy) [![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@julsraemy@hcommons.social&color=6364FF&logo=mastodon)](https://hcommons.social/@julsraemy)

LibreABC – Journée des logiciels libres en Archives, Bibliothèques et Centres de documentation
Musée d'ethnographie de Genève | 31 août 2023

---

# Linked Open Usable Data for Cultural Heritage
#### Perspectives on Community Practices and Semantic Interoperability
![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/1000,/0/default.jpg)

Thèse de doctorat encadré par : 
- Peter Fornaro (University of Basel)
- Walter Leimgruber (University of Basel)
- Robert Sanderson (Yale University)

<!-- I am doing my PhD in Digital Humanities on Linked Open Usable Data, with a focus on its (potential) use in the Humanities and the perspectives it could bring in terms of semantics and interoperability. My research is grounded as part of the Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA) research project, which aims to develop a Citizen Science platform around three photographic collections of the Swiss Society for Folklore Studies (SSFS).  -->

<!-- _footer: "https://phd.julsraemy.ch" -->

---

# Déroulement
![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/1000,/0/default.jpg)

* Axes d'exploration : exercice de déconstruction
* International Image Interoperability Framework (IIIF)
* Linked Art
* IIIF et Linked Art : bref aperçu du fonctionnement des communautés
* LUX : Yale Collections Discovery 

<!-- Je vais démarrer par un exercice de déconstruction du titre de ma thèse et cela donnera déjà quelques pistes de réflexion ou des axes d'exploration qui me semblent pertinents. Ensuite je vais tout de même vous expliquer ce que sont IIIF et Linked Art, puis un bref aperçu de comment ces communautés fonctionnent. Finalement, je vais brièvement vous présenter un cas concret avec LUX Cas d'utilisation d'une institution qui a mis en œuvre les API IIIF et Linked Art -->

---

<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)

# <!-- fit --> Axes d'exploration
Exercice de déconstruction

```
I   — WWW / Linked (Open Usable) Data
II  — Cultural Heritage
III — Community Practices
IV  — Semantic Interoperability
```

---
# <!-- fit --> $I$ – Une vision ouverte du Web

> The WWW project merges the techniques of information retrieval and hypertext to make an easy but powerful global information system. The project started with **the philosophy that much academic information should be freely available to anyone**.

<!-- _footer: "Berners-Lee (1991)" -->

---
# <!-- fit --> $I$ – Principes de conception du LOUD

Constat : Les projets autour du Linked Open Data (LOD) sont principalement concentrés sur la publication et la consommation de données.

* A – La bonne abstraction en fonction du public 
* B – Peu d'obstacles à l'entrée 
* C – Compréhensible par introspection 
* D – Documentation comportant des exemples concrets
* E – Peu d'exceptions, mais de nombreux modèles cohérents



<!-- LOUD ou « données ouvertes liées et utilisables », est un terme et une démarche proposés par Robert Sanderson, un des initiateurs et éditeurs des standards IIIF et de Linked Art.  Une des premières intentions du LOUD est de permettre autant à la communauté scientifique qu’aux développeurs de logiciels d’accéder aux données. Il convient de trouver un équilibre qui prenne en compte les besoins en matière d’exhaustivité et de précision des données, qui dépend de la construction ontologique, et les préoccupations pragmatiques qui sont l’évolutivité et la facilitation d’utilisation. -->


<!-- _footer: "Traduction : Raemy (2022). Version orginale : LOUD Design Principles (https://linked.art/loud)" -->

---

# <!-- fit --> $II$ – Patrimoine matériel, immatériel et naturel

> Cultural heritage is, in its broadest sense, both a product and a process, which provides societies with a wealth of  resources  that  are  inherited  from  the  past,  created  in  the  present  and  bestowed  for  the  benefit  of  future  generations.  Most  importantly,  it  includes  not  only  **tangible**,  but  also  **natural**  and  **intangible  heritage**. 

<!-- _footer: "UNESCO. Culture for Development Indicators (2014)" -->



---

# <!-- fit --> $II$ – Représentation numérique et _embodiment_


Masque d'homme (Zamble) datant probablement du début ou du milieu du 20e siècle de la culture Gouro en Côte d'Ivoire


_embodiment_ $≡$  incarnation, incorporation, **corporéisation**, matérialisation 
(Paquin 2019)


![bg contain right:42%](https://www.artic.edu/iiif/2/dec724f1-cb53-f8a7-8599-0b30ce0267e9/full/full/0/default.jpg)

<!-- _footer: "https://www.artic.edu/artworks/239464" -->

<!-- Ce masque, conservé à l'Art Institute Chicago, également connu sous le nom de Zamble, provenant du peuple Gouro en Côte d'Ivoire, revêt une double signification en tant que patrimoine culturel matériel et immatériel. En tant qu'objet tangible, le masque est un artefact physique fait de bois et de pigments, de tissu et de divers ornements, qui combine des caractéristiques animales et humaines représentant le savoir-faire artistique de ce peuple. D'autre part, en tant qu'objet culturel immatériel, le masque est porteur d'une profonde signification spirituelle et culturelle. Il joue un rôle important dans la commémoration du défunt lors des secondes funérailles d'un homme. Ces secondes funérailles sont organisées des mois, voire des années, après l'enterrement proprement dit, afin d'honorer le défunt et de se souvenir de lui. La préservation et l'appréciation des aspects matériels et immatériels du masque sont donc essentielles à sa pertinence culturelle. -->

---

# $III$ – Se réunir

![bg contain](https://iiif.io/assets/images/heroes/event_2.webp)
![bg contain](https://julsraemy.ch/prezi/assets/linked-art-call.png)

---


# <!-- fit --> $IV$ – Interopérabilité : essai de définition

Perspective du W3C canalisée par Robert Sanderson et dans le but de positionner IIIF  à travers le prisme de l'interopérabilité :

> L'interopérabilité est un état dans lequel deux ou plusieurs systèmes technologiques mis au point indépendamment et testés peuvent interagir avec succès en fonction de leur champ d'application grâce à la mise en œuvre de normes convenues. 

<!-- _footer: "Voir Etemad & Rivoal (2023). §6.3.2" -->

---

# <!-- fit --> $IV$ – Information sémantique

![bg contain right:45%](https://www.researchgate.net/profile/Luciano-Floridi/publication/257666827/figure/fig2/AS:392780774952979@1470657642732/Floridis-original-information-map-redrawn-based-on-Floridi-2011.png)

> Semantic Information is well-formed, meaningful, and truthful data.

Pour toutes les données $x$, si $x$ est bien formé, significatif et véridique, alors $x$ représente de l'information sémantique :

$
\forall x \, [W(x) \land M(x) \land T(x)] \rightarrow SI(x)
$
<!-- _footer: "Floridi (2011)" -->

<!-- Truth-constituted  -->

---


<!-- _class: lead -->
![bg 89%](https://julsraemy.ch/prezi/assets/IIIF-logo-stacked.png)

--- 

![bg right:30% width:300px](https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png)

### International Image Interoperability Framework (IIIF)

- Un modèle pour la présentation et annotation d’objets numériques
- Une communauté, qui développe des API partagées, les implémentent dans des logiciels et exposent des contenus interopérables sur le Web



<!-- _footer: "https://iiif.io" -->

<!-- IIIF is a community-driven initiative, which brings together key players in the academic and CH fields, and has defined open and shared APIs to standardise the way in which image-based resources are delivered on the Web. Implementing the IIIF APIs enables institutions to make better use of their digitised or born-digital material by providing, for instance, deep zooming, comparison, full-text search of OCR objects or annotation capabilities.  -->


---


#### Adoption des standards IIIF et membres du consortium (IIIF-C)

&rarr; Principalement des universités, bibliothèques et musées

<!-- _footer: 'https://bit.ly/iiifmap' -->

![bg contain right:66%](https://julsraemy.ch/prezi/assets/iiif-map.png)

<!-- Institutions impliquées au sein de la communauté IIIF  -->

---

<!-- _class: lead -->
![bg right:40%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19566.jp2/full/1000,/0/default.jpg)

## Pourquoi avons-nous besoin de IIIF ?

---

<!-- _footer: "Toutes les images sont conformes à l'API Image de IIIF, vérifiez [le code source HTML](https://julsraemy.ch/prezi/libreabc2023.html)" -->

![bg opacity:.4](https://www.artic.edu/iiif/2/a6b1cdb3-accf-a52f-78df-cb39de3be5c6/full/1000,/0/default.jpg)
![bg opacity:.4](https://www.artic.edu/iiif/2/400aafd7-392c-cd87-b8b4-0ff2faedf967/full/1000,/0/default.jpg)
![bg opacity:.4](https://e-codices.ch/loris/fmb%2Ffmb-cb-0600a%2Ffmb-cb-0600a_004.jp2/73,2219,963,1142/1000,/0/default.jpg)


# <!-- fit --> Les images sont des vecteurs fondamentaux d'information

---


![bg right:45%](https://julsraemy.ch/prezi/assets/silos.png)

# <!-- fit --> Le problème
#### Un mode de silos et de redondance

Historiquement, la diffusion d'images sur le Web a rencontré beaucoup de limites ; difficile, lente, coûteuse, incohérente, verrouillée et cloisonnée.

---

<!-- _class: lead -->
![bg right:40%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19566.jp2/full/1000,/0/default.jpg)

## Quelques cas d'application de IIIF

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

![bg contain](https://julsraemy.ch/prezi/assets/crowdsourcing-nlw.gif)

<!-- Crowdsourcing - National Library of Wales -->


---

<!-- _footer: "http://storiiies.cogapp.com/" -->

![bg contain 65%](https://julsraemy.ch/prezi/assets/storiiies.gif)

---

<!-- _footer: "https://ddmal.music.mcgill.ca/IIIF-AV-player/" -->

![bg contain 72%](https://iiif.io/assets/uploads/ddmal_section.gif)


---

<!-- _class: lead -->
![bg right:40%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19566.jp2/full/1000,/0/default.jpg)

# <!-- fit --> Comment fonctionne IIIF ?
Les protocoles IIIF

---

![bg contain](https://julsraemy.ch/prezi/assets/iiif-apis.gif)

---

![bg contain](https://julsraemy.ch/assets/images/silos_to_iiif.gif)

---


![bg right:55% contain](https://julsraemy.ch/prezi/assets/mirador-coreapis.png)

#### Les protocoles IIIF

- **Image API**
- **Presentation API**
- Authorization Flow API
- Change Discovery API
- Content Search API
- Content State API

<!-- _footer: "https://iiif.io/api" -->

---

![bg contain](https://julsraemy.ch/prezi/assets/iiif-tools.png)

---

![bg contain](https://julsraemy.ch/prezi/assets/iiif-ecosystem.png)


---

<!-- _class: lead -->
![bg 58%](https://julsraemy.ch/prezi/assets/Linked_Art_logo.png)


---


# Linked Art

![bg contain right:42%](https://julsraemy.ch/prezi/assets/la-model.svg)

Linked Art est une communauté et un groupe de travail du CIDOC qui collabore à la définition d'un profil d'application de métadonnées (le modèle) pour décrire les données du patrimoine culturel et les moyens techniques pour interagir avec celles-ci (l'API). 

<!-- _footer: "https://linked.art" -->

<!-- CIDOC : Conseil international pour la documentation du Conseil international des musées -->

---

### Fondamentaux du modèle Linked Art

| Niveau d'abstraction         | Linked Art                      |
|----------------|---------------------------------|
| **Modèle**      | CIDOC Conceptual Reference Model (CRM)                       |
| **Ontologie**   | Encodage RDF de la version CRM 7.1, plus quelques extensions       |
| **Vocabulaire** | Getty (AAT, ULAN, TGN) |
| **Profile**    | Patrimoine culturel, principalement axé sur les objets des musées d'art |
| **API**        | JSON-LD, style d'architecture REST              |

---

![bg 60%](https://julsraemy.ch/prezi/assets/linkedart_50k_feet.svg)

<!-- - Fait correspondre les classes et leurs relations respectives à partir de l’ontologie RDF CIDOC-CRM 7.1
- Sérialisation en JSON-LD
- Vocabulaires Getty (AAT, ULAN, TGN)
- Règles/Patterns
- Intégration facilitée d’objets et services numériques
-->

<!-- _footer: "Raemy et al. (2023), adapté de Sanderson (2018)" -->

---


# <!-- fit --> JavaScript Object Notation for Linked Data (JSON-LD)

JSON-LD : sérialisation JSON basée sur la syntaxe RDF ($s \ \vec{p} \ o$)

```json
{
  "@context": "https://linked.art/ns/v1/linked-art.json", 
  "id": "https://example.org/event/42",
  "type": "Activity",
  "_label": "LibreABC – Journée des logiciels libres en Archives, Bibliothèques et Centres de documentation",
  "classified_as": [
    {
      "id": "http://vocab.getty.edu/aat/300054789", 
      "type": "Type", 
      "_label": "Conference"
    }
  ],
  ...
}
```
<!-- _footer: "Basé sur le modèle `Event` de l'API Linked Art : https://linked.art/api/1.0/endpoint/event/" -->

---

![bg 94%](https://julsraemy.ch/prezi/assets/IIIF-LA.svg)

<!-- _footer: "Intégration de services et ressources IIIF au sein du modèle Linked Art" -->

---

<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)

# <!-- fit --> IIIF et Linked Art 

Bref aperçu du fonctionnement des communautés

---

# Cadre simplifié

* Identification des scénarios ou cas d'utilisation
* Synthèse du cas sur GitHub
* Discussion et intégration ou non du cas d'utilisation au sein des spécifications
* Evaluation sur la mise en œuvre

&rarr; Transparence, Collaboration

---

![bg contain](https://julsraemy.ch/prezi/assets/iiif_community_overview.svg)
![bg contain](https://julsraemy.ch/prezi/assets/iiif-trc-1.png)

---

![bg contain](https://julsraemy.ch/prezi/assets/iiif-trc-2.png)

---

![bg contain](https://julsraemy.ch/prezi/assets/iiif-calendar.png)

---
<!-- _footer: "Raemy (2023)" -->

![bg 77% contain](https://julsraemy.ch/prezi/assets/survey_heatmap.svg)

<!-- 

1) Belonging to a given commnity - before 2011
2) People that have been active prior to 2021 tend to be more active

-->

---

![bg contain](https://julsraemy.ch/prezi/assets/loud-infra-example.jpg)

---

<!-- _class: lead -->
![bg right:40%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19566.jp2/full/1000,/0/default.jpg)

# <!-- fit --> LUX
Yale Collections Discovery 

---
# LUX

- LUX est un outil de recherche et de découverte rassemblant des données disparates de Yale touchant au patrimoine culturel. 
  - _Yale University Library, Yale Center for British Art, Yale Peabody Museum, Yale University Art Gallery, Archives at Yale_
- La plateforme LUX se caractérise par ses nombreuses connexions, non seulement au sein des unités Yale, mais aussi au-delà, grâce à l'inclusion de sources de données externes (Wikidata, )

<!-- Plateforme reposant sur une série de réalisations progressive -->


<!-- _footer: "https://lux.collections.yale.edu/" -->

---

# Basé sur des standards

- Standards ouverts : Linked Art, IIIF, W3C Activity Streams (tous sérialisés en JSON-LD)
- Technologies communes : Python, JavaScript, Node.js, React, AWS
- Documentation et mise à disposition des chaînes de traitement, modélisation et correspondance des données
- Base de données multimodale orientée documents (NoSQL) : MarkLogic Server

&rarr; Toutes les composantes de LUX, y compris le code spécifique pour MarkLogic, sera rendu open source.

---

![bg contain 80%](https://julsraemy.ch/prezi/assets/lux-demo.gif)


<!-- 

• Briser les silos (techniques) au sein de communautés (IIIF, Linked Art)
• LOUD comme langage commun entre les institutions du patrimoine culturel et les scientifiques
• Ne pas être seulement sur le web, en faire parti
• LOD + API JSON(-LD) pour se faire comprendre de plusieurs publics

-->

<!-- _footer: "[Lien vers une résolution optimisée de la vidéo](https://julsraemy.ch/prezi/assets/lux-demo.webm)"-->

---

# Bibliographie




