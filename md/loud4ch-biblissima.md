---
marp: true
author: Julien A. Raemy
title: "LOUD et clair : comment les normes communautaires transforment l’engagement du public dans le patrimoine culturel"
description: "Le Linked Open Usable Data (LOUD) représente une démarche et des principes de conception proposés par Robert Sanderson pour rendre les données patrimoniales plus facilement exploitables, en premier lieu par les développeurs de logiciels. Cette présentation, issue d'une recherche doctorale, explore comment ces principes – incarnés par IIIF (https://iiif.io) et Linked Art (https://linked.art) – transforment progressivement l'accès au patrimoine culturel grâce à des pratiques collaboratives et ouvertes. LOUD repose sur cinq principes de conception : privilégier les cas d'usage sur la rigueur ontologique, réduire les obstacles à l'entrée, garantir la compréhension par simple consultation des données, fournir une documentation avec exemples concrets, et limiter les exceptions au profit de modèles cohérents. C'est par l'intermédiaire des développeurs, et grâce à la facilité de compréhension des standards conformes à ces principes, que l'accessibilité pour les utilisateurs finaux est ensuite facilitée. Cette accessibilité se concrétise notamment à travers des visualiseurs (viewers) comme Mirador (https://projectmirador.org) ou Universal Viewer (https://universalviewer.io), qui deviennent de véritables outils de médiation entre les données structurées et le public. Ces interfaces offrent une expérience de navigation améliorée, permettant la comparaison d'images, l'annotation collaborative et la découverte enrichie des collections patrimoniales. Ils illustrent comment des standards bien conçus pour les développeurs se traduisent en expériences utilisateur de qualité. Si le potentiel est considérable, il reste encore du chemin à parcourir. C'est précisément là que réside la force de l'approche communautaire : les retours d'expérience partagés lors de réunions régulières, de groupes de travail et de conférences permettent de cristalliser des objectifs communs et d'améliorer continuellement les spécifications. Toutefois, la recherche révèle également des défis importants : l'homogénéité démographique des participants actifs – principalement issus d'institutions nord-américaines et européennes anglophones – soulève des questions quant à l'inclusivité et à la capacité de ces standards à répondre aux besoins de contextes culturels diversifiés. Or, les standards sont façonnés par ceux qui participent à leur élaboration. La présentation mettra en lumière comment cette démarche collaborative permet d'identifier les défis d'implémentation et d'accessibilité, tout en questionnant les dynamiques de pouvoir et d'inclusion nécessaires pour que ces standards bénéficient véritablement à l'ensemble du patrimoine culturel mondial."
keywords: Cultural Heritage, IIIF, Linked Art, Linked Data, LOUD, Community Practices, Semantic Interoperability, Web Annotation
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://julsraemy.ch/prezi/loud4ch-biblissima.html
theme: beam
paginate: true
_paginate: false
---


![bg opacity:.15](https://iiif.dasch.swiss/0812/3GiQt3LMMgl-ToSOskchDW7.jpx/full/max/0/default.jpg)


<div style="text-align: center;">

## LOUD et clair : comment les normes communautaires transforment l’engagement du public dans le patrimoine culturel

**Dr. Julien A. Raemy**
Walter Benjamin Kolleg, Université de Berne
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759) [![Google Scholar](https://img.shields.io/static/v1?label=Google%20Scholar&message=Julien%20A.%20Raemy&color=4285F4&logo=googlescholar)](https://scholar.google.ch/citations?user=pGROUG0AAAAJ&hl) [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=julsraemy&color=181717&logo=github)](https://github.com/julsraemy) [![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@julsraemy@hcommons.social&color=6364FF&logo=mastodon)](https://hcommons.social/@julsraemy)
Journée d'étude en ligne Biblissima+ | 11 décembre 2025
_Nouveaux usages de IIIF pour l’enrichissement des collections numériques et la recherche_

</div>


<!-- 

Re-Bonjour à toutes et à tous ou bonsoir. Je change aujourd'hui de casquette et vous parle en tant que chercheur associé en humanités numériques à l'Université de Berne, et non en tant qu'employé des Archives fédérales suisses. Ma présentation s'intitule "LOUD et clair" et explore comment les normes communautaires transforment l'engagement du public dans le patrimoine culturel. 

-->


---

<!-- header: Julien A. Raemy | [![w:35 CC BY 4.0](https://julsraemy.ch/prezi/assets/cc-by.svg)](https://creativecommons.org/licenses/by/4.0/) -->
<!-- footer: LOUD et clair | Journée d'étude en ligne Biblissima+
 -->

![bg opacity:.15](https://iiif.dasch.swiss/0812/3GiQt3LMMgl-ToSOskchDW7.jpx/full/max/0/default.jpg)


# Contexte

## Doctorat en humanités numériques (2021-2024)

<div style="font-size: 80%;">

Raemy, J. A. (2024). _Linked Open Usable Data for Cultural Heritage: Perspectives on Community Practices and Semantic Interoperability_ [Doctoral Thesis, University of Basel]. https://hdl.handle.net/20.500.14716/148352

Version HTML : https://phd.julsraemy.ch/thesis.html

</div>

## Recherche empirique

<div style="font-size: 80%;">

  1. Communautés IIIF et Linked Art
  2. Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA) https://data.snf.ch/grants/grant/193788
  3. LUX: Yale Collections Discovery - https://lux.collections.yale.edu/

</div>

<!-- 

Ma présentation s'appuie sur mon doctorat en humanités numériques que j'ai achevé fin 2024 à l'Université de Bâle. Cette recherche porte sur le Linked Open Usable Data pour le patrimoine culturel. J'ai mené une recherche empirique autour de trois axes : les communautés IIIF et Linked Art, le projet PIA sur les fonds d' archives photographiques de la société Anthropologie Culturelle Suisse, et LUX, le portail de découverte ou d'aggrégation des collections de Yale.

-->


---

![bg opacity:.12](https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/full/max/0/default.jpg)

# Linked Open Usable Data (LOUD)

## Données ouvertes liées et utilisables

* L'objectif du LOUD est de **concrétiser l'intention du web sémantique à une échelle globale d'une manière pragmatique** en s'appuyant sur des spécifications communautaires et basées sur le format **JSON-LD**.

* LOUD repose sur cinq grands principes de conception visant à **rendre les données plus facilement accessibles aux développeurs de logiciels**, qui occupent un rôle déterminant dans l'interaction avec les données et la création de programmes et de services à partir de celles-ci, et, dans une certaine mesure, aux membres de la communauté universitaire. 

<div style="font-size: 60%;">

[Sanderson 2018, 2019; Raemy 2022]

</div>

<!-- 

Le LOUD, ou Linked Open Usable Data, vise à concrétiser l'ambition du web sémantique de manière pragmatique. L'approche repose sur JSON-LD et privilégie l'accessibilité pour les développeurs, qui sont les premiers acteurs dans la création d'outils et services permettant ensuite aux utilisateurs finaux d'accéder aux données patrimoniales. C'est une approche qui tend à être transversale.

-->

---


![bg opacity:.12](https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/full/max/0/default.jpg)

# LOUD

## Principes de conception

<div style="font-size: 85%;">

A. La bonne abstraction en fonction du public (_The right Abstraction for the audience_)
B. Peu d’obstacles à l’entrée (_Few Barriers to entry_)
C. Compréhensible par introspection (_Comprehensible by introspection_)
D. Documentation comportant des exemples concrets (_Documentation with working examples_)
E. Peu d’exceptions, mais de nombreux modèles cohérents (_Few Exceptions, instead many consistent patterns_)

</div>

## Systèmes qui adhèrent aux principes de conception

<div style="font-size: 85%;">

- International Image Interoperability Framework (IIIF)
- W3C Web Annotation Data Model
- Linked Art

</div>

<div style="font-size: 60%;">

https://linked.art/loud

</div>

<!-- 

Le LOUD s'articule autour de cinq principes de conception fondamentaux. Premièrement, il faut choisir le bon niveau d'abstraction pour le public visé. Deuxièmement, réduire les barrières à l'entrée. Troisièmement, les données doivent être compréhensibles par simple consultation. Quatrièmement, fournir une documentation avec des exemples concrets. Et enfin, privilégier des modèles cohérents plutôt que de multiplier les exceptions. Trois systèmes majeurs adhèrent à ces principes : IIIF, le Web Annotation Data Model, et Linked Art.

-->

---

# Ecosystème LOUD

 <div style="font-size: 83%;">

## IIIF

* IIIF facilite le partage de contenu grâce à une série de spécifications. IIIF exploite également certains types de ressources définis par le Web Annotation Data Model. Les métadonnées sémantiques peuvent être liées à partir des ressources IIIF via `seeAlso`.

## Web Annotation Data Model

* Le modèle fournit une norme pour la production et le partage d'annotations à travers différentes plateformes.

##  Linked Art

* Linked Art est un profil d'application basé sur CIDOC-CRM et une série de points de terminaison d'API (entités) pour décrire sémantiquement le patrimoine culturel. Grâce à cette spécification, il est également possible de décrire des services web tels que IIIF.

</div>

<!-- 

L'écosystème LOUD repose sur trois piliers complémentaires. IIIF facilite le partage de contenus visuels via des API standardisées. Le Web Annotation Data Model offre un standard pour créer et partager des annotations entre plateformes. Linked Art, basé sur CIDOC-CRM, fournit un profil d'application et des API pour décrire sémantiquement le patrimoine culturel. Ces trois standards peuvent fonctionner ensemble de manière synergique.

-->

---

# Architecture orientée LOUD

![center w:1080](https://julsraemy.ch/prezi/assets/loud-infra-example.jpg)

<div style="font-size: 60%;">

[Felsing et al. 2023]

</div>


<!-- 

Exemple d'écosystème LOUD illustrant comment les API IIIF – ici les API Image, Presentation et Change Discovery – le modèle de données Web Annotation et l'API Linked Art peuvent être intégrés dans un même environnement. Cet exemple propose une sorte de circularité au niveau des API, permettant une interopérabilité entre les différents services.

-->

---

# A. La bonne abstraction en fonction du public

| Niveau d'abstraction         | Linked Art                      |
|----------------|---------------------------------|
| **Modèle conceptuel**      | [CIDOC Conceptual Reference Model](https://www.cidoc-crm.org/) (CRM)                       |
| **Ontologie**   | [Encodage RDF de la version CRM 7.1]((https://www.cidoc-crm.org/html/cidoc_crm_v7.1.2.html)), plus quelques extensions       |
| **Vocabulaire(s)** | [Getty](https://www.getty.edu/research/tools/vocabularies/) (AAT, ULAN, TGN) |
| **Profil**    | Patrimoine culturel, principalement axé sur les objets des musées d'art |
| **API**        | JSON-LD, style d'architecture REST              |


<!-- 

Il faut privilégier les cas d'utilisation plutôt que la rigueur ontologique pure pour déterminer le niveau d'interopérabilité optimal. Voici la pile technologique de Linked Art. Il est intéressant de noter que Linked Art repose sur l'ontologie CIDOC-CRM, qui est un modèle conceptuel de haut niveau, et que c'est grâce aux vocabulaires du Getty – AAT, ULAN, TGN – que les entités et les ressources sont définies plus précisément au niveau du profil d'application.

-->


---

# A. La bonne abstraction en fonction du public

<div style="text-align: center;">
  <video controls loop style="width: 100%; max-width: 800px; height: auto;">
    <source src="https://julsraemy.ch/prezi/assets/lux-demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<div style="font-size: 50%;">

- https://lux.collections.yale.edu/view/object/a6b227ab-ce9c-49af-bcc4-0d2c7b63ced3 (HTML)
- https://lux.collections.yale.edu/data/object/a6b227ab-ce9c-49af-bcc4-0d2c7b63ced3 (JSON-LD)

</div>

<!-- 

Voici une démonstration de LUX, le portail de Yale. On voit ici comment le JSON-LD structure les données qui alimentent l'interface utilisateur, y compris pour les filtres et les facettes de recherche.

-->

---

# B. Peu d’obstacles à l’entrée

## Outils de narration

![center w:500](https://julsraemy.ch/prezi/assets/storiiies.gif)

<div style="font-size: 60%;">

Storiiies : https://www.cogapp.com/r-d/storiiies

</div>

<!-- 

Les données, et le modèle sous-jacent, doivent être faciles à utiliser et à exploiter. La mise en place de tels systèmes incitera davantage de personnes à y recourir activement.

Exemple : Storiiies comme outil de narration/storytelling, facile à utiliser et à encapsuler au sein de différentes sites. 

-->


---

# C. Compréhensible par introspection



<div style="font-size: 50%;">

```json
  "dimension": [
    {
      "type": "Dimension",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300055647",
          "type": "Type",
          "_label": "Width"
        }
      ],
      "value": 453.5,
      "unit": {
        "id": "http://vocab.getty.edu/aat/300379098",
        "type": "MeasurementUnit",
        "_label": "centimeters"
      },
      "identified_by": [
        {
          "type": "Name",
          "classified_as": [
            {
              "id": "http://vocab.getty.edu/aat/300404669",
              "type": "Type",
              "_label": "Display Title"
            }
          ],
          "content": "453.5 cm wide"
        }
      ]
    },
```

</div>

<div style="font-size: 50%;">

https://linked.art/model/object/physical/#dimension-display-labels
https://linked.art/example/object/nightwatch/8.json

</div>

<!-- 

Les données doivent être compréhensibles dans une large mesure simplement en les consultant, sans requérir de l’aide extérieure. Cela peut être achevé en sérialisant les informations en JSON-LD, un format d’encodage de donnée structurées simple à lire et répandu sur le Web.

Exemple : Une méthode utilisée dans Linked Art consiste à inclure une étiquette lisible humainement pour la valeur représentée par la dimension. Cela permet aux clients de présenter les données dans un format spécifique, plutôt que d'avoir à générer le texte à partir de la valeur, de l'unité et du type de la dimension.

-->


---

# D. Documentation comportant des exemples concrets

## Localiser un manifeste sur une carte Web


<div style="font-size: 45%;">

```json
{
  "@context": [
    "http://iiif.io/api/extension/navplace/context.json",
    "http://iiif.io/api/presentation/3/context.json"
  ],
  "id": "https://iiif.io/api/cookbook/recipe/0154-geo-extension/manifest.json",
  "type": "Manifest",
  "label": {
    "it": [
      "Bronzo Laocoonte e i suoi figli"
    ]
  },
  "navPlace": {
    "id": "https://iiif.io/api/cookbook/recipe/0154-geo-extension/feature-collection/1",
    "type": "FeatureCollection",
    "features": [
      {
        "id": "https://iiif.io/api/cookbook/recipe/0154-geo-extension/feature/1",
        "type": "Feature",
        "properties": {
          "label": {
            "en": [
              "The Laocoön Bronze"
            ],
            "it": [
              "Bronzo Laocoonte e i suoi figli"
            ]
          }
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -118.4745559,
            34.0776376
          ]}}]},
```

</div>

<div style="font-size: 50%;">

https://iiif.io/api/cookbook/recipe/0154-geo-extension/

</div>

<!-- 

Une documentation des plus exhaustives doit être réalisée afin de clarifier la mise en œuvre des cas d’utilisation. Iici l'exemple d'une des recettes de cuisine ou "cookbook recipes" afin que les utilisateurs puissent voir quels visualiseurs prenent en charge quels éléments des spécifications. Dans cet exemple précis, il s'agit de localiser où se trouve sur une carte l'objet visualisé.

-->


---

<div style="width:100%; max-width:1200px; height:600px; margin:0 auto;">
  <iframe 
    src="https://theseusviewer.org/embed?iiif-content=https%3A%2F%2Fiiif.io%2Fapi%2Fcookbook%2Frecipe%2F0154-geo-extension%2Fmanifest.json&theme=dark" 
    title="Theseus Viewer" 
    style="width:100%; height:100%; border:none;">
  </iframe>
</div>

<div style="font-size: 50%;">

https://theseusviewer.org/?iiif-content=https://iiif.io/api/cookbook/recipe/0154-geo-extension/manifest.json

</div>

<!-- 

Recette JSON au sein du visualiseur Theseus. 

-->


---


# E. Peu d’exceptions, mais de nombreux modèles cohérents 

## Spécificité des classes et classifications (_Types and Classifications_)

<div class="mermaid" data-processed="true"><svg id="mermaid-1764942789501" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="max-width: 862.5958862304688px;" viewBox="-8 -8 862.5958862304688 258.5" role="graphics-document document" aria-roledescription="flowchart-v2"><style>#mermaid-1764942789501{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#000000;}#mermaid-1764942789501 .error-icon{fill:#552222;}#mermaid-1764942789501 .error-text{fill:#552222;stroke:#552222;}#mermaid-1764942789501 .edge-thickness-normal{stroke-width:2px;}#mermaid-1764942789501 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-1764942789501 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-1764942789501 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-1764942789501 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-1764942789501 .marker{fill:#666;stroke:#666;}#mermaid-1764942789501 .marker.cross{stroke:#666;}#mermaid-1764942789501 svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-1764942789501 .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:#000000;}#mermaid-1764942789501 .cluster-label text{fill:#333;}#mermaid-1764942789501 .cluster-label span,#mermaid-1764942789501 p{color:#333;}#mermaid-1764942789501 .label text,#mermaid-1764942789501 span,#mermaid-1764942789501 p{fill:#000000;color:#000000;}#mermaid-1764942789501 .node rect,#mermaid-1764942789501 .node circle,#mermaid-1764942789501 .node ellipse,#mermaid-1764942789501 .node polygon,#mermaid-1764942789501 .node path{fill:#eee;stroke:#999;stroke-width:1px;}#mermaid-1764942789501 .flowchart-label text{text-anchor:middle;}#mermaid-1764942789501 .node .label{text-align:center;}#mermaid-1764942789501 .node.clickable{cursor:pointer;}#mermaid-1764942789501 .arrowheadPath{fill:#333333;}#mermaid-1764942789501 .edgePath .path{stroke:#666;stroke-width:2.0px;}#mermaid-1764942789501 .flowchart-link{stroke:#666;fill:none;}#mermaid-1764942789501 .edgeLabel{background-color:white;text-align:center;}#mermaid-1764942789501 .edgeLabel rect{opacity:0.5;background-color:white;fill:white;}#mermaid-1764942789501 .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#mermaid-1764942789501 .cluster rect{fill:hsl(0, 0%, 98.9215686275%);stroke:#707070;stroke-width:1px;}#mermaid-1764942789501 .cluster text{fill:#333;}#mermaid-1764942789501 .cluster span,#mermaid-1764942789501 p{color:#333;}#mermaid-1764942789501 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:hsl(-160, 0%, 93.3333333333%);border:1px solid #707070;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-1764942789501 .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#000000;}#mermaid-1764942789501 :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}#mermaid-1764942789501 .object&gt;*{stroke:black!important;fill:#E1BA9C!important;rx:20px!important;ry:20px!important;}#mermaid-1764942789501 .object span{stroke:black!important;fill:#E1BA9C!important;rx:20px!important;ry:20px!important;}#mermaid-1764942789501 .actor&gt;*{stroke:black!important;fill:#FFBDCA!important;rx:20px!important;ry:20px!important;}#mermaid-1764942789501 .actor span{stroke:black!important;fill:#FFBDCA!important;rx:20px!important;ry:20px!important;}#mermaid-1764942789501 .type&gt;*{stroke:red!important;fill:#FAB565!important;rx:20px!important;ry:20px!important;}#mermaid-1764942789501 .type span{stroke:red!important;fill:#FAB565!important;rx:20px!important;ry:20px!important;}#mermaid-1764942789501 .name&gt;*{stroke:orange!important;fill:#FEF3BA!important;rx:20px!important;ry:20px!important;}#mermaid-1764942789501 .name span{stroke:orange!important;fill:#FEF3BA!important;rx:20px!important;ry:20px!important;}#mermaid-1764942789501 .dims&gt;*{stroke:black!important;fill:#c6c6c6!important;rx:20px!important;ry:20px!important;}#mermaid-1764942789501 .dims span{stroke:black!important;fill:#c6c6c6!important;rx:20px!important;ry:20px!important;}#mermaid-1764942789501 .infoobj&gt;*{stroke:#907010!important;fill:#fffa40!important;rx:20px!important;ry:20px!important;}#mermaid-1764942789501 .infoobj span{stroke:#907010!important;fill:#fffa40!important;rx:20px!important;ry:20px!important;}#mermaid-1764942789501 .timespan&gt;*{stroke:blue!important;fill:#ddfffe!important;rx:20px!important;ry:20px!important;}#mermaid-1764942789501 .timespan span{stroke:blue!important;fill:#ddfffe!important;rx:20px!important;ry:20px!important;}#mermaid-1764942789501 .place&gt;*{stroke:#3a7a3a!important;fill:#aff090!important;rx:20px!important;ry:20px!important;}#mermaid-1764942789501 .place span{stroke:#3a7a3a!important;fill:#aff090!important;rx:20px!important;ry:20px!important;}#mermaid-1764942789501 .event&gt;*{stroke:#1010FF!important;fill:#96e0f6!important;rx:20px!important;ry:20px!important;}#mermaid-1764942789501 .event span{stroke:#1010FF!important;fill:#96e0f6!important;rx:20px!important;ry:20px!important;}#mermaid-1764942789501 .literal&gt;*{stroke:black!important;fill:#f0f0e0!important;}#mermaid-1764942789501 .literal span{stroke:black!important;fill:#f0f0e0!important;}#mermaid-1764942789501 .classstyle&gt;*{stroke:black!important;fill:white!important;}#mermaid-1764942789501 .classstyle span{stroke:black!important;fill:white!important;}</style><g><marker id="mermaid-1764942789501_flowchart-pointEnd" class="marker flowchart" viewBox="0 0 10 10" refX="6" refY="5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowMarkerPath" style="stroke-width: 1px; stroke-dasharray: 1px, 0px;"></path></marker><marker id="mermaid-1764942789501_flowchart-pointStart" class="marker flowchart" viewBox="0 0 10 10" refX="4.5" refY="5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M 0 5 L 10 10 L 10 0 z" class="arrowMarkerPath" style="stroke-width: 1px; stroke-dasharray: 1px, 0px;"></path></marker><marker id="mermaid-1764942789501_flowchart-circleEnd" class="marker flowchart" viewBox="0 0 10 10" refX="11" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><circle cx="5" cy="5" r="5" class="arrowMarkerPath" style="stroke-width: 1px; stroke-dasharray: 1px, 0px;"></circle></marker><marker id="mermaid-1764942789501_flowchart-circleStart" class="marker flowchart" viewBox="0 0 10 10" refX="-1" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><circle cx="5" cy="5" r="5" class="arrowMarkerPath" style="stroke-width: 1px; stroke-dasharray: 1px, 0px;"></circle></marker><marker id="mermaid-1764942789501_flowchart-crossEnd" class="marker cross flowchart" viewBox="0 0 11 11" refX="12" refY="5.2" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><path d="M 1,1 l 9,9 M 10,1 l -9,9" class="arrowMarkerPath" style="stroke-width: 2px; stroke-dasharray: 1px, 0px;"></path></marker><marker id="mermaid-1764942789501_flowchart-crossStart" class="marker cross flowchart" viewBox="0 0 11 11" refX="-1" refY="5.2" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><path d="M 1,1 l 9,9 M 10,1 l -9,9" class="arrowMarkerPath" style="stroke-width: 2px; stroke-dasharray: 1px, 0px;"></path></marker><g class="root"><g class="clusters"></g><g class="edgePaths"><path d="M345.983,27.287L300.871,34.281C255.758,41.275,165.533,55.262,120.421,67.164C75.308,79.067,75.308,88.883,75.308,93.792L75.308,98.7" id="L-O1-O1_0-0" class=" edge-thickness-normal edge-pattern-solid flowchart-link LS-O1 LE-O1_0" style="fill:none;" marker-end="url(#mermaid-1764942789501_flowchart-pointEnd)"></path><path d="M375.357,34.5L363.482,40.292C351.607,46.083,327.858,57.667,315.983,68.367C304.108,79.067,304.108,88.883,304.108,93.792L304.108,98.7" id="L-O1-O1_4-0" class=" edge-thickness-normal edge-pattern-solid flowchart-link LS-O1 LE-O1_4" style="fill:none;" marker-end="url(#mermaid-1764942789501_flowchart-pointEnd)"></path><path d="M498.271,138.5L491.868,144.292C485.466,150.083,472.66,161.667,466.257,172.367C459.854,183.067,459.854,192.883,459.854,197.792L459.854,202.7" id="L-O2-O2_0-0" class=" edge-thickness-normal edge-pattern-solid flowchart-link LS-O2 LE-O2_0" style="fill:none;" marker-end="url(#mermaid-1764942789501_flowchart-pointEnd)"></path><path d="M536.412,138.5L542.815,144.292C549.218,150.083,562.023,161.667,568.426,172.367C574.829,183.067,574.829,192.883,574.829,197.792L574.829,202.7" id="L-O2-O2_3-0" class=" edge-thickness-normal edge-pattern-solid flowchart-link LS-O2 LE-O2_3" style="fill:none;" marker-end="url(#mermaid-1764942789501_flowchart-pointEnd)"></path><path d="M446.093,34.5L457.968,40.292C469.843,46.083,493.592,57.667,505.467,68.367C517.342,79.067,517.342,88.883,517.342,93.792L517.342,98.7" id="L-O1-O2-0" class=" edge-thickness-normal edge-pattern-solid flowchart-link LS-O1 LE-O2" style="fill:none;" marker-end="url(#mermaid-1764942789501_flowchart-pointEnd)"></path><path d="M728.361,138.5L721.934,144.292C715.508,150.083,702.656,161.667,696.23,172.367C689.804,183.067,689.804,192.883,689.804,197.792L689.804,202.7" id="L-O3-O3_0-0" class=" edge-thickness-normal edge-pattern-solid flowchart-link LS-O3 LE-O3_0" style="fill:none;" marker-end="url(#mermaid-1764942789501_flowchart-pointEnd)"></path><path d="M766.64,138.5L773.066,144.292C779.492,150.083,792.344,161.667,798.77,172.367C805.196,183.067,805.196,192.883,805.196,197.792L805.196,202.7" id="L-O3-O3_3-0" class=" edge-thickness-normal edge-pattern-solid flowchart-link LS-O3 LE-O3_3" style="fill:none;" marker-end="url(#mermaid-1764942789501_flowchart-pointEnd)"></path><path d="M475.467,27.246L520.806,34.247C566.144,41.248,656.822,55.249,702.161,67.158C747.5,79.067,747.5,88.883,747.5,93.792L747.5,98.7" id="L-O1-O3-0" class=" edge-thickness-normal edge-pattern-solid flowchart-link LS-O1 LE-O3" style="fill:none;" marker-end="url(#mermaid-1764942789501_flowchart-pointEnd)"></path></g><g class="edgeLabels"><g class="edgeLabel" transform="translate(75.30833435058594, 69.25)"><g class="label" transform="translate(-15.941665649414062, -9.75)"><foreignObject width="31.883331298828125" height="19.5"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel">type</span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(304.10833740234375, 69.25)"><g class="label" transform="translate(-21.933334350585938, -9.75)"><foreignObject width="43.866668701171875" height="19.5"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel">_label</span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(459.8541717529297, 173.25)"><g class="label" transform="translate(-15.941665649414062, -9.75)"><foreignObject width="31.883331298828125" height="19.5"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel">type</span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(574.8291778564453, 173.25)"><g class="label" transform="translate(-21.933334350585938, -9.75)"><foreignObject width="43.866668701171875" height="19.5"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel">_label</span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(517.3416748046875, 69.25)"><g class="label" transform="translate(-44.98333740234375, -9.75)"><foreignObject width="89.9666748046875" height="19.5"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel">classified_as</span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(689.8041839599609, 173.25)"><g class="label" transform="translate(-15.941665649414062, -9.75)"><foreignObject width="31.883331298828125" height="19.5"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel">type</span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(805.1958541870117, 173.25)"><g class="label" transform="translate(-21.933334350585938, -9.75)"><foreignObject width="43.866668701171875" height="19.5"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel">_label</span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(747.5000190734863, 69.25)"><g class="label" transform="translate(-44.98333740234375, -9.75)"><foreignObject width="89.9666748046875" height="19.5"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel">classified_as</span></div></foreignObject></g></g></g><g class="nodes"><g class="node default object flowchart-label" id="flowchart-O1-5" transform="translate(410.7250061035156, 17.25)"><rect class="basic label-container" style="" rx="5" ry="5" x="-64.74166870117188" y="-17.25" width="129.48333740234375" height="34.5"></rect><g class="label" style="" transform="translate(-57.241668701171875, -9.75)"><rect></rect><foreignObject width="114.48333740234375" height="19.5"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">object/spring/2</span></div></foreignObject></g></g><g class="node default classstyle flowchart-label" id="flowchart-O1_0-7" transform="translate(75.30833435058594, 121.25)"><rect class="basic label-container" style="" rx="0" ry="0" x="-75.30833435058594" y="-17.25" width="150.61666870117188" height="34.5"></rect><g class="label" style="" transform="translate(-67.80833435058594, -9.75)"><rect></rect><foreignObject width="135.61666870117188" height="19.5"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">HumanMadeObject</span></div></foreignObject></g></g><g class="node default literal flowchart-label" id="flowchart-O1_4-9" transform="translate(304.10833740234375, 121.25)"><rect class="basic label-container" style="" rx="5" ry="5" x="-103.49166870117188" y="-17.25" width="206.98333740234375" height="34.5"></rect><g class="label" style="" transform="translate(-95.99166870117188, -9.75)"><rect></rect><foreignObject width="191.98333740234375" height="19.5"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">''Jeanne (Spring) by Manet''</span></div></foreignObject></g></g><g class="node default type flowchart-label" id="flowchart-O2-10" transform="translate(517.3416748046875, 121.25)"><rect class="basic label-container" style="" rx="5" ry="5" x="-59.741668701171875" y="-17.25" width="119.48333740234375" height="34.5"></rect><g class="label" style="" transform="translate(-52.241668701171875, -9.75)"><rect></rect><foreignObject width="104.48333740234375" height="19.5"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">aat:300133025</span></div></foreignObject></g></g><g class="node default classstyle flowchart-label" id="flowchart-O2_0-12" transform="translate(459.8541717529297, 225.25)"><rect class="basic label-container" style="" rx="0" ry="0" x="-23.991668701171875" y="-17.25" width="47.98333740234375" height="34.5"></rect><g class="label" style="" transform="translate(-16.491668701171875, -9.75)"><rect></rect><foreignObject width="32.98333740234375" height="19.5"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Type</span></div></foreignObject></g></g><g class="node default literal flowchart-label" id="flowchart-O2_3-14" transform="translate(574.8291778564453, 225.25)"><rect class="basic label-container" style="" rx="5" ry="5" x="-40.98333740234375" y="-17.25" width="81.9666748046875" height="34.5"></rect><g class="label" style="" transform="translate(-33.48333740234375, -9.75)"><rect></rect><foreignObject width="66.9666748046875" height="19.5"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">''Artwork''</span></div></foreignObject></g></g><g class="node default type flowchart-label" id="flowchart-O3-17" transform="translate(747.5000190734863, 121.25)"><rect class="basic label-container" style="" rx="5" ry="5" x="-59.741668701171875" y="-17.25" width="119.48333740234375" height="34.5"></rect><g class="label" style="" transform="translate(-52.241668701171875, -9.75)"><rect></rect><foreignObject width="104.48333740234375" height="19.5"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">aat:300033618</span></div></foreignObject></g></g><g class="node default classstyle flowchart-label" id="flowchart-O3_0-19" transform="translate(689.8041839599609, 225.25)"><rect class="basic label-container" style="" rx="0" ry="0" x="-23.991668701171875" y="-17.25" width="47.98333740234375" height="34.5"></rect><g class="label" style="" transform="translate(-16.491668701171875, -9.75)"><rect></rect><foreignObject width="32.98333740234375" height="19.5"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Type</span></div></foreignObject></g></g><g class="node default literal flowchart-label" id="flowchart-O3_3-21" transform="translate(805.1958541870117, 225.25)"><rect class="basic label-container" style="" rx="5" ry="5" x="-41.400001525878906" y="-17.25" width="82.80000305175781" height="34.5"></rect><g class="label" style="" transform="translate(-33.900001525878906, -9.75)"><rect></rect><foreignObject width="67.80000305175781" height="19.5"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">''Painting''</span></div></foreignObject></g></g></g></g></g></svg></div>

![bg opacity:.25](https://media.getty.edu/iiif/image/8094f61e-e458-42bd-90cf-a0ed0dcc90b9/full/2000,/0/default.jpg)


<div style="font-size: 55%;">


Manet, Édouard. _Jeanne (Spring)_. 1881. Huile sur toile, 74 × 51,5 cm. J. Paul Getty Museum, Los Angeles. 2014.62. https://www.getty.edu/art/collection/object/103QTZ.
- Museum Collection API (Linked Art) : https://data.getty.edu/museum/collection/object/951295b7-dfb2-42fa-b06e-5a1c350dd88d
- Manifeste IIIF : https://media.getty.edu/iiif/manifest/db379bba-801c-4650-bc31-3ff2f712eb21

Types and Classifications : https://linked.art/model/base/#types-and-classifications

</div>

<!-- 

Un modèle doit pouvoir contenir le moins d’exceptions possibles pour éviter d’ajouter des règles demandant la création de champs personnalisés au cas par cas.

CIDOC-CRM est un environnement qui doit être enrichi de vocabulaires et d’ontologies additionnels pour être fonctionnel. Le mécanisme fourni pour ce faire est la propriété classified_as, qui fait référence à un terme d’un vocabulaire contrôlé.  Ainsi, la responsabilité du maintien de la structure des classes est déplacée de l’ontologie vers le vocabulaire. Par exemple, Le tableau Le Printemps ou Jeanne Demarsy d'Edouard Manet qui est autant une peinture qu'un objet d'art. 

-->

---

# La fabrique sociale des communautés IIIF et Linked Art

<div style="display: flex; justify-content: center; align-items: center; gap: 20px; width: 100%;">
    <div style="text-align: center; width: 50%;">
        <img src="https://iiif.io/assets/images/heroes/event_2.webp" alt="Photo of the 2023 IIIF Conference attendees" style="width:90%; max-width:600px; height:auto;">
        <div style="font-size: 50%;"> 
            <a href="https://iiif.io" target="_blank">https://iiif.io</a></br>IIIF Annual Conference in Göttingen (2019)<br/>
        </div>
    </div>
    <div style="text-align: center; width: 50%;">
        <img src="https://julsraemy.ch/prezi/assets/linked-art-rijks-2023.jpeg" alt="Linked Art Workshop attendees in Amsterdam (2023)" style="width: 90%; height: auto;">
        <div style="font-size: 50%;">
            <a href="https://linked.art" target="_blank">https://linked.art</a><br>Linked Art Editorial Face-to-Face and Outreach Event in Amsterdam (2023)<br/>
        </div>
    </div>
</div>



<!-- 

À l'exception des conférences annuelles ou des ateliers en présentiel, la grande majorité des réunions au sein des communautés IIIF et Linked Art se déroulent en ligne. Elles sont ouvertes à tous, avec un ordre du jour clair rédigé sur Google Docs, et utilisent GitHub comme plateforme centrale pour recueillir des cas d'utilisation et rédiger des spécifications de manière collaborative.

 -->

---

![center w:1000](https://julsraemy.ch/prezi/assets/use_cases-specifications-1.svg)


<!-- 

Ce diagramme illustre le processus collaboratif d'élaboration des spécifications. Les cas d'usage émergent des besoins de la communauté et sont progressivement transformés en spécifications techniques formelles. C'est un processus itératif qui implique de multiples acteurs et niveaux de validation.

-->

---

![center w:1000](https://julsraemy.ch/prezi/assets/use_cases-specifications-2.svg)

<!-- 

La recherche d'un consensus est en effet un facteur durable, comme le démontre ici la publication des API IIIF Image et Presentation 3.0 en 2020. Le diagramme illustre le processus mis en œuvre par la communauté IIIF pour examiner, valider et publier les deux spécifications.

Cette approche structurée commence par des groupes tels que les éditeurs, qui identifient et proposent des modifications. Ces modifications sont ensuite rigoureusement discutées et examinées par les membres du comité d'examen technique (ou TRC).

Nous pouvons voir l'agence distribuée qui définit ce processus communautaire.

 -->

---

![center w:900](https://julsraemy.ch/prezi/assets/iiif_community_overview.svg)

<!-- 

Cette visualisation montre la structure organisationnelle de la communauté IIIF. On observe différents groupes de travail thématiques, des comités techniques, et une gouvernance distribuée. Cette organisation permet de canaliser l'expertise diverse de la communauté tout en maintenant la cohérence des spécifications produites.

-->

---

![center w:880px](https://julsraemy.ch/prezi/assets/attendance_stacked_bar_la.svg)

<!-- 

Ce graphique illustre les tendances de participation communautaire aux réunions Linked Art organisées entre janvier 2019 et mars 2024. Au cours de cette période, 130 personnes ont assisté à 115 réunions. La participation moyenne était de 13,57 sessions par participant, mais la médiane n'était que de 2, ce qui suggère qu'un petit noyau de membres actifs de manière constante coexiste avec un groupe plus large dont la participation est sporadique. Cette tendance reflète les défis et les succès liés au maintien d'un engagement durable, en particulier dans un environnement axé sur le bénévolat.

Le défi consiste non seulement à attirer davantage de participants, mais aussi à encourager ceux qui sont actuellement passifs à s'engager plus activement. Une tendance similaire en matière de participation est observée au sein de la communauté IIIF.

 -->


---

![bg opacity:.12](https://iiif.dasch.swiss:443/0812/2z2vWczu8BU-kPpspxL78cS.jpx/full/max/0/default.jpg)

# Conclusion 

## Pistes de réflexion

* Le développement communautaire des normes IIIF et Linked Art, caractérisé par un esprit de collaboration et de transparence, est un moteur essentiel. Il est impératif, en parallèle de l'élaboration de ces normes, de développer des logiciels et des outils qui soient compatibles avec ces spécifications pour en exploiter pleinement le potentiel.

* Les standards LOUD, employés conjointement, améliorent l'interopérabilité sémantique, même si cela se fait au détriment d'une certaine pureté ontologique.

* Les pratiques et les normes LOUD devraient servir de dénominateurs communs pour les institutions du patrimoine culturel, les organismes publics et les projets de recherche.


<!-- 

Première partie de la conclusion : D'abord, le développement communautaire transparent est crucial, mais il doit s'accompagner d'outils et logiciels compatibles pour concrétiser le potentiel des standards. Deuxièmement, les standards LOUD améliorent l'interopérabilité sémantique de manière pragmatique, même si cela implique certains compromis ontologiques. Enfin, ces pratiques devraient devenir des dénominateurs communs pour l'ensemble du secteur patrimonial.

-->


---

![bg opacity:.12](https://iiif.dasch.swiss:443/0812/2z2vWczu8BU-kPpspxL78cS.jpx/full/max/0/default.jpg)

# Conclusion

## Confrontation aux dynamiques de pouvoir

* L'homogénéité démographique actuelle perpétue les préjugés qui marginalisent diverses perspectives.

* Une mutation implique des changements structurels dans les modèles de gouvernance et de participation.

* Les voix issues des pays en voie de développement méritent une attention accrue pour élargir la portée du changement.


<!-- 

Un défi majeur persiste : l'homogénéité démographique des participants actifs, principalement issus d'institutions nord-américaines et européennes anglophones, perpétue des biais qui marginalisent d'autres perspectives culturelles. Or, les standards sont façonnés par ceux qui participent à leur élaboration. Une véritable transformation nécessite des changements structurels dans les modèles de gouvernance et de participation, pas seulement des ajustements cosmétiques. Les voix des pays en voie de développement doivent être non seulement entendues mais activement intégrées dans les processus décisionnels. 

Il y a des signes encourageants dans la communauté IIIF : le programme Ambassadors qui vise à aider dans l'implémentation des spécifications et de diversifier la représentation thématique ou géographique. Egalement, les organisations situées dans des pays à revenu faible ou intermédiaire – selon la classification de la Banque mondiale – bénéficient désormais de tarifs réduits pour rejoindre le consortium en tant que membre associé. Ce sont des premiers pas vers une inclusion plus large.

-->


---

# Bibliographie

<div style="font-size: 72%;">

Felsing, U., Fornaro, P., Frischknecht, M., & Raemy, J. A. (2023). Community and Interoperability at the Core of Sustaining Image Archives. _Digital Humanities in the Nordic and Baltic Countries Publications_, 5(1), 40–54. https://doi.org/10.5617/dhnbpub.10649.

Raemy, J. A. (2022). Améliorer la valorisation des données du patrimoine culturel grâce au Linked Open Usable Data (LOUD). In N. Lasolle, O. Bruneau, & J. Lieber (Éds.), _Actes des journées humanités numériques et Web sémantique_ (p. 132‑149). Les Archives Henri-Poincaré - Philosophie et Recherches sur les Sciences et les Technologies (AHP-PReST); Laboratoire lorrain de recherche en informatique et ses applications (LORIA). https://doi.org/10.5451/unibas-ep89725


Raemy, J. A. (2024). _Linked Open Usable Data for Cultural Heritage: Perspectives on Community Practices and Semantic Interoperability_ [Doctoral Thesis, University of Basel]. https://hdl.handle.net/20.500.14716/148352

Sanderson, R. (2018, mai 15). _Shout it Out: LOUD._ EuropeanaTech Conference 2018, Rotterdam, the Netherlands. https://www.slideshare.net/Europeana/shout-it-out-loud-by-rob-sanderson-europeanatech-conference-2018.

Sanderson, R. (2019). Keynote: Standards and Communities: Connected People, Consistent Data, Usable Applications. _2019 ACM/IEEE Joint Conference on Digital Libraries (JCDL)_, 28. https://doi.org/10.1109/JCDL.2019.00009

</div>

<!-- 

Voici les références principales de ma présentation. Ma thèse de doctorat est disponible en accès libre, ainsi que les articles mentionnés. Je vous encourage particulièrement à consulter les travaux fondateurs de Rob Sanderson sur le LOUD, qui ont posé les bases conceptuelles de cette approche.

-->

---

![bg opacity:.15](https://iiif.dasch.swiss/0812/3GiQt3LMMgl-ToSOskchDW7.jpx/full/max/0/default.jpg)
![bg opacity:.15](https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/full/max/0/default.jpg)
![bg opacity:.15](https://iiif.dasch.swiss:443/0812/2z2vWczu8BU-kPpspxL78cS.jpx/full/max/0/default.jpg)

# Crédits photos

<div style="font-size: 74%;">

Ces images font partie des [archives photographiques de l'association Anthropologie Culturelle Suisse](https://www.ekws.ch/), anciennement _Société suisse des traditions populaires_, dont le siège est à Bâle, Suisse. Licence: CC BY-NC 4.0 [![w:60](https://julsraemy.ch/prezi/assets/cc-by-nc.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

- Brunner, Ernst. [Blick auf das Spalentor]. Basel, 1938. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_00115. Alte Bildnummer: AB 15. https://ark.dasch.swiss/ark:/72163/1/0812/6mo320CeXUqvWftaKoKPWws

- Brunner, Ernst. [Ringtanz während der Masüras auf der Alp Sura]. Guarda, 1939. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_08589. Alte Bildnummer: DL 89. https://ark.dasch.swiss/ark:/72163/1/0812/T6ITgGbkVomteyknedSDsA7

- Brunner, Ernst. ["Steffenbach-Brücke" der Furka-Bahn: Bau und Erneuern der Brücke]. Kanton Wallis, 1950. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_36937. Alte Bildnummer: PU 37. https://ark.dasch.swiss/ark:/72163/1/0812/ODlFFvdYVc=xa_VyOACHoAf

</div>

<!-- 

Merci beaucoup pour votre attention et au plaisir d'échanger avec vous lors de la discussion.

-->