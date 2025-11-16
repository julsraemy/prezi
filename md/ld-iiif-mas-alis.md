---
marp: true
author: Julien A. Raemy
title: Linked Data & IIIF, Use Cases
description: Presentation on Linked Data and the International Image Interoperability Framework (IIIF) given by Julien A. Raemy in the context of MAS ALIS programme in Bern on 20 December 2025
keywords: Cultural Heritage, IIIF, Linked Art, Linked Data, LOUD, Community Practices, Semantic Interoperability, Web Annotation
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://julsraemy.ch/prezi/ld-iiif-mas-alis.html
theme: beam
paginate: true
_paginate: false

---


![bg opacity:.15](https://iiif.dasch.swiss/0812/3GiQt3LMMgl-ToSOskchDW7.jpx/full/max/0/default.jpg)


<div style="text-align: center; font-size: 150%">

## Linked Data & International Image Interoperability Framework (IIIF): Use Cases

</div>

<div style="text-align: center;">

**Dr. Julien A. Raemy**
Walter Benjamin Kolleg, Universität Bern
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759) [![Google Scholar](https://img.shields.io/static/v1?label=Google%20Scholar&message=Julien%20A.%20Raemy&color=4285F4&logo=googlescholar)](https://scholar.google.ch/citations?user=pGROUG0AAAAJ&hl) [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=julsraemy&color=181717&logo=github)](https://github.com/julsraemy) [![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@julsraemy@hcommons.social&color=6364FF&logo=mastodon)](https://hcommons.social/@julsraemy)
MAS ALIS 2024-2026 Modul 3a | 20.12.2025

</div>

---

<!-- header: Julien A. Raemy | Linked Data & IIIF: Use Cases  | [![w:35 CC BY 4.0](https://julsraemy.ch/prezi/assets/cc-by.svg)](https://creativecommons.org/licenses/by/4.0/) -->
<!-- footer: MAS ALIS 2024-2026 Modul 3a | 20.12.2025
 -->


 ![bg opacity:.14](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## Semantic Web, Linked Data


---

# Eine offene Vision des Webs

> The [World Wide Web] project merges the techniques of information retrieval and hypertext to make an easy but powerful global information system. The project started with **the philosophy that much academic information should be freely available to anyone**.

 <div style="font-size: 60%;">

[Berners-Lee 1991]

</div>

---


# Das Semantic Web

Das Semantische Web ist eine Erweiterung zum World Wide Web, die durch entsprechende Standards die Maschinenlesbarkeit ermöglicht.

![center width:540px](https://julsraemy.ch/prezi/assets/tweaked-semweb-layer-cake.webp)

 <div style="font-size: 60%;">

Tweaked Semantic Web Layer Cake [Idehen 2017]

</div>

<!-- This Web, which has claimed to be a Semantic Web for several years now, has a centrepiece known as Resource Description Framework (RDF), a general method for describing and exchanging graph data. The Semantic Web offers major opportunities for scholarship as it allows data to be reasoned together, that is to be understood by machines via those RDF-based ontologies, a formal way to represent human-like knowledge.  -->


---

# Resource Description Framework (RDF)

![center](https://www.w3.org/TR/rdf11-primer/example-graph.jpg)

<div style="font-size: 60%;">

Informal graph of the sample triples. RDF 1.1 Primer: https://www.w3.org/TR/rdf11-primer/

</div>

---

# Resource Description Framework (RDF)

<div style="font-size: 80%;">

```
01    BASE   <http://example.org/>
02    PREFIX foaf: <http://xmlns.com/foaf/0.1/>
03    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
04    PREFIX schema: <http://schema.org/>
05    PREFIX dcterms: <http://purl.org/dc/terms/>
06    PREFIX wd: <http://www.wikidata.org/entity/>
07 
08    <bob#me>
09        a foaf:Person ;
10        foaf:knows <alice#me> ;
11        schema:birthDate "1990-07-04"^^xsd:date ;
12        foaf:topic_interest wd:Q12418 .
13   
14    wd:Q12418
15        dcterms:title "Mona Lisa" ;
16        dcterms:creator <http://dbpedia.org/resource/Leonardo_da_Vinci> .
17  
18    <http://data.europeana.eu/item/04802/243FA8618938F4117025F17A8B813C5F9AA4D619>
19        dcterms:subject wd:Q12418 .
```

</div>

<div style="font-size: 60%;">

Turtle Serialization. RDF 1.1 Primer: https://www.w3.org/TR/rdf11-primer/

</div>

---


# Linked Open Data (LOD)

![center](https://5stardata.info/images/5-star-steps.png)

 <div style="font-size: 60%;">

5-star deployment scheme for Open Data: https://5stardata.info/

</div>

<!-- 

In 2010, Tim Berners-Lee introduced the Five-Star Open Data Deployment Scheme to provide a structured framework for publishing and promoting data on the web. 

5-star open data scheme 
1) make your stuff available on the Web (whatever format) under an open license
2) make it available as structured data
3) make it available in a non-proprietary open format (e.g., CSV instead of Excel
4) use URIs to denote things, so that people can point at your stuff
5) link your data to other data to provide context -->



---

# Wissensgraph


![center w:640](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Wikidata_knowledge_graph_-_Christine_Choy.png/1200px-Wikidata_knowledge_graph_-_Christine_Choy.png)


<div style="font-size: 60%;">

https://www.wikidata.org/entity/Q33002955

</div>

<!-- 
Beispiel eines Wissensgraphen über die Regisseurin Christine Choy. 

-->

---

# Die sechs Ebenen von Linked Data

1. **Autorität**: Identifizierung von Entitäten und Vermittlung institutioneller Autorität
2. **Abgleichung** (_Reconciliation_): Disambiguierung mithilfe von Autoritäten und Thesauri
3. **Bidrektionale Verknüpfung**: Öffentliche Verbindungen zwischen Institutionen
4. **Aggregation**: Suche und Zugriff über Sammlungen hinweg
5. **Interoperabilität**: Schnittstellen, die von vielen Datenquellen beziehen
6. **Wiederverwendung**: Import unter Beibehaltung der Provenienz

<div style="font-size: 60%;">

[Newbury 2020]

</div>

<!--
1. Autorités : Identification des entités et fourniture d'une autorité institutionnelle.
2. Réconciliation : Désambiguïsation à l'aide d'autorités et de thésaurus.
3: Lien bidirectionnel : Connexions publiques entre les institutions.
4: Agrégation : Recherche et accès à travers les collections.
5: Interopérabilité : Interfaces qui puisent dans de nombreuses sources de données.
6. Réutilisation : Importation tout en conservant la provenance.

 -->


---

 ![bg opacity:.14](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## Linked Data in Archiven, Bibliotheken und Museen


---

# Motivationen für Linked Data im Kulturbereich

- **Erfüllung von Forschungsbedürfnissen**: Unterstützung wissenschaftlicher Anfragen und Digital Humanities-Projekte

- **Verbesserung der Auffindbarkeit**: Erhöhung der Sichtbarkeit und Zugänglichkeit von Sammlungsdaten

- **Förderung der Interoperabilität**: Ermöglichung von Datenaustausch zwischen Institutionen und Systemen

- **Einsatz fortgeschrittener Methoden**: Nutzung moderner Techniken für die Publikation und Nachnutzung digitaler Sammlungen


<div style="font-size: 60%;">

[Davis & Heravi 2021; Candela et al. 2023]

</div>

<!-- 
Davis & Heravi ont identifié huit thèmes principaux motivant l'intérêt pour le Linked Data dans le domaine du patrimoine culturel, incluant aussi les initiatives éducatives, les besoins des institutions GLAM et les efforts de préservation.
-->




---

# Implementierungsansätze und Akteure

- **Publikationsformen**: Von einfachen RDF-Downloads über Content Negotiation bis zu SPARQL-Endpunkten

- **Kontrollierte Vokabulare als Hubs**: Getty (AAT, ULAN, TGN), Gemeinsame Normdatei (GND), Wikidata verbinden verschiedene Identifikatoren und fördern semantische Vernetzung

- **Aggregationsplattformen**: Europeana mit EDM als europaweites Beispiel für Metadaten-Harmonisierung

<!-- 
Les exemples suivants illustrent différents niveaux de maturité dans l'implémentation du Linked Data : BnF avec data.bnf.fr pour les données d'autorité, Rijksmuseum avec Content Negotiation avancée et support de Linked Art, SAPA comme archive spécialisée, et LINDAS comme infrastructure fédérale pour l'administration publique suisse. Chaque cas montre une approche différente de publication et d'interaction avec les données liées.
-->

---

# Französische Nationalbibliothek (BnF)

# Normdatei

![center w:700](https://julsraemy.ch/prezi/assets/latour-databnf.png)


<div style="font-size: 60%;">

https://data.bnf.fr/ark:/12148/cb12012722c

</div>

---

# Rijksmuseum 

![center](https://iiif.micr.io/PJEZO/full/550,/0/default.jpg)

<div style="font-size: 60%;">

**Rembrandt van Rijn**, *The Night Watch*, 1642, oil on canvas, 379.5 × 453.5 cm, Rijksmuseum, Amsterdam (SK-C-5), https://id.rijksmuseum.nl/200107928

</div>

---

# Rijksmuseum

**Content Negotiation für Linked Data (W3C-Standard)**

<div style="font-size: 80%;">

```bash
# Standard: Linked Art (JSON-LD) mit verfügbaren Profilen
curl https://data.rijksmuseum.nl/200107928

# Linked Art in N-Triples
curl -H "Accept-Profile: <https://linked.art/ns/terms/>" \
     -H "Accept: application/n-triples" \
     https://data.rijksmuseum.nl/200107928

# Europeana Data Model (EDM) in RDF/XML  
curl -H "Accept-Profile: <http://www.europeana.eu/schemas/edm/>" \
     -H "Accept: application/rdf+xml" \
     https://data.rijksmuseum.nl/200107928
```

**Profile:** Linked Art (Standard), EDM, Dublin Core, OAI-DC  
**Formate:** JSON-LD, N-Triples, RDF/XML  
**Methoden:** HTTP-Header oder Query-Parameter (`?_profile=edm`)

</div>

<div style="font-size: 60%;">

Rijksmuseum Data Services. https://data.rijksmuseum.nl/

</div>

---

# Schweizer Archiv der Darstellenden Künste (SAPA)


## Zytglogge Theater, Bern BE 


![center w:1000](https://julsraemy.ch/prezi/assets/zytglogge.svg)

<div style="font-size: 60%;">

https://www.performing-arts.ch/
http://data.performing-arts.ch/r/57057c26-c46d-4d23-a4f2-e205afcbaaa3

</div>

<!-- Archives suisses des arts de la scène -->

---

# Linked Data Services (LINDAS)

![center w:600](https://lindas.admin.ch/static-assets/img/lindaslogo_web.png)

- Ermöglicht öffentlichen Verwaltungen, ihre Daten in Form von Wissensgraphen zu veröffentlichen.
- Wird vom Schweizerischen Bundesarchiv verwaltet.


<div style="font-size: 60%;">

https://lindas.admin.ch

</div>


---

# Linked Data Services (LINDAS)

<div style="font-size: 85%;">

## SPARQL-Abrage auf der Archivdatenbank des Schweizerischen Bundesarchiv 

</div>

<div style="font-size: 54%;">

```
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX rico: <https://www.ica.org/standards/RiC/ontology#>

SELECT ?record ?identifier ?title ?beginDate ?endDate ?expressedDate ?holder WHERE {
  GRAPH <https://lindas.admin.ch/sfa/ais> {
    ?record rdf:type rico:Record .
    ?record rico:title ?title .
    ?record rico:identifier ?identifier .
    
    OPTIONAL { ?record rico:hasOrHadHolder ?holder }
    
    # Follow the date relationship
    OPTIONAL {
      ?record rico:isAssociatedWithDate ?date .
      OPTIONAL { ?date rico:beginningDate ?beginDate }
      OPTIONAL { ?date rico:endDate ?endDate }
      OPTIONAL { ?date rico:expressedDate ?expressedDate }
    }
    
    FILTER(CONTAINS(LCASE(?title), "bern"))
  }
} 
ORDER BY ?beginDate
LIMIT 100

```

</div>

<div style="font-size: 60%;">

100 `Records`, die „Bern“ im Titel haben. https://s.zazuko.com/3y3M6P9

</div>



---

# Evolution der (Linked Data)-Portale

1. **Portale für Suche und Navigation**: Datenharmonisierung, Aggregation, Suche und Navigation

2. **Portale mit Distant Reading-Tools**: Integrierte Werkzeuge für interaktive Forschungsproblemlösung

3. **Portale für KI-gestützte Wissenserschliessung**: Automatische Beantwortung von Forschungsfragen basierend auf Nutzervorgaben


<div style="font-size: 60%;">

[Hyvönen 2020]

</div>

<!--
Hyvönen suggère une transition nécessaire de la logique de publication de données vers l'analyse et la découverte sérendipitaire de connaissances. Selon lui, bien que les humanités numériques et les institutions patrimoniales aient contribué au déploiement de systèmes de deuxième génération, le chemin vers la troisième génération nécessite une emphase accrue sur la critique des sources et l'utilisation d'outils informatiques sophistiqués. Cette progression est essentielle pour élargir la portée et les capacités des sciences humaines et au-delà.

1. Une première génération de systèmes comprenant le développement de portails pour l’harmonisation des données, l’agrégation, la recherche et la navigation ;
2. Une deuxième génération de systèmes fournissant aux utilisateurs un ensemble d’outils intégrés pour résoudre des problèmes de recherche de manière interactive ;
3. Une troisième génération de systèmes basée sur l’intelligence artificielle qui pourrait résoudre automatiquement des questions de recherche en fonction des contraintes fixées par les scientifiques.

 -->

---

# Komplementarität für digitale Objekte?

- Traditionelle LOD-Ansätze bieten keine standardisierte Lösung für Digitalisate und _digital-born_ Objekte
  - "IIIF is conceptually Linked Open Data. [It] is a visual support for LOD" [Cossu 2020]

- Komplexität von SPARQL-Abfragen schafft häufig Barrieren für Endbenutzer:innen sowie für Entwickler:innen.

<!--
Jusqu'à présent, nous avons principalement discuté de métadonnées et de leurs relations sémantiques. Cependant, les approches traditionnelles de Linked Data négligent souvent la dimension visuelle du patrimoine culturel numérique - les images, manuscrits numérisés et objets nés numériques. IIIF comble cette lacune en fournissant une infrastructure standardisée pour les ressources visuelles haute résolution et leur présentation. Cette évolution montre la nécessité de standards qui rendent les données patrimoniales non seulement liées et ouvertes, mais surtout utilisables par une communauté plus large de développeurs et d'utilisateurs finaux.
-->

---

 ![bg opacity:.14](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## Linked Open Usable Data


---

# Linked Open Usable Data (LOUD)

- Der Begriff wurde von Robert Sanderson [2018, 2019] geprägt, der sich mit der Entwicklung und dem Betrieb von webbasierten Standards insbesondere im Bereich des Kulturerbes auseinandersetzt.

- Das Ziel von LOUD ist es, die Absicht des Semantischen Webs auf einer globalen Ebene auf eine benutzbare Weise zu realisieren, durch die Verwendung von gemeinsam entwickelten Standards (z. B. IIIF, Linked Art).

- Es gibt fünf wichtige Designprinzipien, um Daten für Softwareentwickler, die eine Schlüsselrolle bei der Interaktion mit den Daten und der Erstellung von darauf basierender Software und Services spielen.


---

![bg opacity:.14](https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/full/max/0/default.jpg)

# LOUD Design Principles

A) The right Abstraction for the audience
B) Few Barriers to entry
C) Comprehensible by introspection
D) Documentation with working examples
E) Few Exceptions, instead many consistent patterns

<div style="font-size: 60%;">

https://linked.art/loud

</div>

<!-- 
A) La bonne abstraction en fonction du public
B) Peu d’obstacles à l’entrée 
C) Compréhensible par introspection 
D) Documentation comportant des exemples concrets 
E) Peu d’exceptions, mais de nombreux modèles cohérents 
-->

---

![bg center width:45% opacity:0.07](https://json-ld.org/images/json-ld-logo.png) 

# LOUD Standards

- International Image Interoperability Framework (IIIF)
- Linked Art
- Web Annotation Data Model


---


 ![bg opacity:.14](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## International Image Interoperability Framework (IIIF)


---

![bg opacity:.3](https://www.artic.edu/iiif/2/a6b1cdb3-accf-a52f-78df-cb39de3be5c6/full/1000,/0/default.jpg)
![bg opacity:.3](https://www.artic.edu/iiif/2/400aafd7-392c-cd87-b8b4-0ff2faedf967/full/1000,/0/default.jpg)
![bg opacity:.3](https://www.artic.edu/iiif/2/1542469c-b658-6e13-5701-dad656f51733/full/1000,/0/default.jpg)

## <!-- fit --> Bilder sind fundamentale Informationsträger 

<!-- 

Female Figurine, Chupicuaro, 500/300 B.C
Vision of Saint Gregory, unknown artist, n.d.
Iyo Province: Saijo, Utagawa Hiroshige, 1855
-->

---


# Das Problem: eine Welt von Silos und Doppelarbeit


![center w:800](https://julsraemy.ch/prezi/assets/silos-repos.png)


---

# Die Lösung

![center bg width:45%](https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png)

---

# Tiefe Ausschnittvergrösserung mit riesigen Bildern

![center w:800](https://julsraemy.ch/prezi/assets/iiif_deepzoom.gif)

<div style="font-size: 60%;">

近江國絵圖 (Ōmi Kuni-ezu). 1837. Stanford University Libraries. https://purl.stanford.edu/hs631zg4177

</div>

---

# Bilder vergleichen

![center](https://julsraemy.ch/prezi/assets/compare.gif)

<div style="font-size: 60%;">

Letter from Alexander Hamilton Papers (September 6, 1780), Library of Congress: https://prtd.app/#72f604db-6869-4c08-91ce-7c79502a7f35

</div>

---


# Wiedervereinigen

![center w:600](https://julsraemy.ch/prezi/assets/biblissima-demo.gif)

<div style="font-size: 60%;">

https://demos.biblissima.fr/chateauroux/demo/

</div>


---

# Suche innerhalb

![center](https://julsraemy.ch/prezi/assets/content-search.gif)

<div style="font-size: 60%;">

Franks, Kendal; Royal College of Surgeons of England. _The Germ Theory_. via Wellcome Library.

</div>

---

# Storytelling

![center](https://julsraemy.ch/prezi/assets/storiiies.gif)

<div style="font-size: 60%;">

Storiiies: https://www.cogapp.com/r-d/storiiies

</div>

---

# Unterschiedliche Digitalisierungstechniken (Layers)

![center width:680px](https://julsraemy.ch/prezi/assets/Leiden_curtain_viewer.gif)

<div style="font-size: 60%;">

Leiden Collection's Curtain Viewer: https://www.theleidencollection.com/viewer/david-and-uriah/

</div>

---

# Crowdsourcing

![center](https://julsraemy.ch/prezi/assets/crowdsourcing-nlw.gif)

<div style="font-size: 60%;">

Crowdsourcing-Initiative der Nationalbibliothek von Wales

</div>

---

# Ausserhalb von Bildern

![center w:700](https://iiif.io/assets/uploads/ddmal_section.gif)

<div style="font-size: 60%;">

IIIF AV Player Demo von der McGill University: https://ddmal.music.mcgill.ca/IIIF-AV-player/

</div>

---

# IIIF Ökosystem

![center](https://julsraemy.ch/assets/images/silos_to_iiif.gif)



---

# IIIF-Programmierschnittstellen (APIs)

- **Image API**
- **Presentation API**
- Authorization Flow API
- Change Discovery API
- Content Search API
- Content State API

<div style="font-size: 60%;">

https://iiif.io/api

</div>

---


![center w:800](https://training.iiif.io/iiif-online-workshop/day-one/img/apis.png)

<!-- The two core specifications are the Image API and the Presentation API. The former is a web service for manipulating an image through a URL and the latter "specifies the information needed to drive a remote viewing experience". -->

---

![center w:1100](https://julsraemy.ch/prezi/assets/mirador-coreapis.png)


---



# IIIF Image API

![center w:700](https://iiif.io/api/image/3.0/img/transformation.png)

<div style="font-size: 70%;">

Die IIIF Image API spezifiziert einen RESTful-Webdienst, der als Antwort auf eine Standard-HTTP(S)-Anfrage ein Bild zurückgibt.

- Bildanfrage
- Bildinformationen (JSON-LD)

</div>

<div style="font-size: 60%;">

https://iiif.io/api/image

</div>

---

# IIIF Image API

- Base URI
`{scheme}://{server}{/prefix}/{identifier}`

- Bildanfrage
`{$BASE}/{region}/{size}/{rotation}/{quality}.{format}`
https://iiif.dasch.swiss/0801/3eIbRgj63JP-CrShE6LBcTB.jpx/full/max/0/default.jpg

- Bildinformationen (Metadaten)
`{$BASE}/info.json`
https://iiif.dasch.swiss/0801/3eIbRgj63JP-CrShE6LBcTB.jpx/info.json

---

# Bildpyramide

<div style="text-align: center;">
  <video controls loop style="width: 100%; max-width: 1000px; height: auto;">
    <source src="https://julsraemy.ch/prezi/assets/schoonman-iiif-image-api-tile-pyramid.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<div style="font-size: 60%;">

https://observablehq.com/@allmaps/tile-pyramid

</div>

<!-- La pyramide est une représentation multi-résolution d'une image (JPEG2000, Multi-Resolution (Pyramidal) TIFF) -->


---

# IIIF Presentation API

Die IIIF Presentation API ist ein JSON-LD-basierter Webdienst, der die erforderlichen Informationen über die Struktur und das Layout eines Objekts oder einer Sammlung vermittelt.


<div style="font-size: 60%;">

https://iiif.io/api/presentation

</div>


<!-- The purpose of the API is to display descriptive information that is intended for humans and does not aim to provide semantic metadata for search engines -->

---

![bg width:1100px](https://julsraemy.ch/prezi/assets/presentationapi-resources.png)

---

![bg opacity:.15](https://iiif.dasch.swiss:443/0812/2z2vWczu8BU-kPpspxL78cS.jpx/full/max/0/default.jpg)

# Übung

- Suche nach IIIF-kompatiblen Ressourcen (`Manifest` oder `Collection`)
- Anzeige in einem IIIF-Viewer
- Vergleich mehrerer IIIF-Manifeste in Mirador

<div style="font-size: 60%;">

Anleitungen zum Auffinden von IIIF-Ressourcen und zur Verwendung von Viewern: https://guides.iiif.io/ 

</div>

---


![bg opacity:.14](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## Linked Art

---

# Linked Art Data Model

![center](https://julsraemy.ch/prezi/assets/la-overview.svg)

<!-- 
Linked Art presents a layered framework that distinguishes between the conceptual and implementation aspects of its model. This diagram illustrates five layers, delineating the transition from shared abstractions (in blue) to their sustainable implementations (in green) in the Linked Art ecosystem.

 -->

---

# Linked Art aus 50k Fuss

![center](https://julsraemy.ch/prezi/assets/linkedart_50k_feet.svg)

<div style="font-size: 60%;">

[Raemy et al. 2023, adaptiert aus Sanderson 2018]

</div>

---

# Linked Art – `DigitalObject`

![bg opacity:.85](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)

```json
{
  "@context": "https://linked.art/ns/v1/linked-art.json", 
  "id": "https://data.participatory-archives.ch/digital/42.json",
  "type": "DigitalObject",
  "_label": "[Katze auf einer Mauer]",
  "classified_as": [
    {
      "id": "http://vocab.getty.edu/aat/300215302", 
      "type": "Type", 
      "_label": "Digital Image"
    }
  ],

```


---



# Linked Art Digital Integration (mit IIIF)

![center](https://julsraemy.ch/prezi/assets/IIIF-LA.svg)

---



 ![bg opacity:.14](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## LOUD-bezogene Implementierungsbeispiele

---

# PIA

Partizipative Wissenspraktiken in analogen und digitalen Bildarchiven


![center width:750px](https://julsraemy.ch/prezi/assets/pia_iiif_mirador.png)

<div style="font-size: 60%;">

[Cornut et al. 2023]

</div>

---

```json
{
  "@context": "http://iiif.io/api/presentation/3/context.json",
  "id": "https://iiif.participatory-archives.ch/annotations/SGV_12N_19783-p1-list.json",
  "type": "AnnotationPage",
  "items": [
    {
      "@context": "http://www.w3.org/ns/anno.jsonld",
      "id": "https://iiif.participatory-archives.ch/annotations/SGV_12N_19783-p1-list/annotation-385261.json",
      "motivation": "commenting",
      "type": "Annotation",
      "body": [
        {
          "type": "TextualBody",
          "value": "person",
          "purpose": "commenting"
        },
        {
          "type": "TextualBody",
          "value": "Object Detection (vitrivr)",
          "purpose": "tagging"
        },
        {
          "type": "TextualBody",
          "value": "<br><small>Detection score: 0.9997</small>",
          "purpose": "commenting"
        }
      ],
      "target": {
        "source": "https://iiif.participatory-archives.ch/SGV_12N_19783/canvas/p1",
        "selector": {
          "type": "FragmentSelector",
          "conformsTo": "http://www.w3.org/TR/media-frags/",
          "value": "xywh=2091,1119,1113,3413"
        },
        "dcterms:isPartOf": {
          "type": "Manifest",
          "id": "https://iiif.participatory-archives.ch/SGV_12N_19783/manifest.json"
        }
      }
    },
```

---

<div style="text-align: center;">
  <video controls loop style="width: 100%; max-width: 900px; height: auto;">
    <source src="https://julsraemy.ch/prezi/assets/mirador-album-layers.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<div style="font-size: 60%;">

https://projectmirador.org/embed/?iiif-content=https://julsraemy.ch/hostiiing/manifests/SGV_10A_00031_layers.json

</div>

---

# LUX: Yale Collections Discovery

![bg opacity:.16](https://library.yale.edu/sites/default/files/beinecke720.jpeg)
![bg opacity:.16](https://britishart.yale.edu/sites/default/files/img/overview/2020-06/2016EF11.572_D8.jpg)
![bg opacity:.16](https://th-thumbnailer.cdn-si-edu.com/DZU5wD7JlgYEjvqC0RGXWZ_45EM=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/fa/49/fa494e15-0d54-403d-9c50-3af1c5890780/ypmarexhgreathall001web.jpg)
![bg opacity:.16](https://artgallery.yale.edu/sites/default/files/styles/max_2600x2600/public/2023-03/2023-ag-exb-4581-0003-pub.jpg)

LUX bietet einen vereinheitlichten Zugang auf Basis offener Standards zu mehr als 41 Millionen Ressourcen des kulturellen Erbes, die sich im Besitz der Museen, Archive und Bibliotheken der Yale University befinden: 

- Yale University Library
- Yale Center for British Art
- Yale Peabody Museum
- Yale University Art Gallery.



<div style="font-size: 60%;">

[Metcalfe Hurst 2023; Raemy & Sanderson 2024]
https://lux.collections.yale.edu/

</div>

---

<div style="text-align: center;">
  <video controls loop style="width: 100%; max-width: 900px; height: auto;">
    <source src="https://julsraemy.ch/prezi/assets/lux-demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>


---


 ![bg opacity:.14](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## Fazit

---

# LOUD-Spezifikationen

### IIIF

* IIIF erleichtert die gemeinsame Nutzung hochauflösender bildbasierter Inhalte durch eine Reihe von Spezifikationen. Es nutzt auch einige Ressourcentypen, die durch das Web Annotation Data Model definiert sind. Semantische Metadaten können mittels `seeAlso` mit IIIF-Ressourcen verknüpft werden.

### Web Annotation Data Model

* Das Web-Annotations-Datenmodell bietet einen Standard für die Erstellung und gemeinsame Nutzung von Annotationen auf verschiedenen Plattformen.

###  Linked Art

* Linked Art bietet ein Modell und eine API zur semantischen Beschreibung des kulturellen Erbes. Mit dieser Spezifikation ist es auch möglich, Webdienste wie IIIF zu beschreiben.


---

# LOUD-geprägte Infrastruktur

![center w:1050](https://julsraemy.ch/prezi/assets/loud-infra-example.jpg)

<div style="font-size: 60%;">

[Felsing et al. 2023]

---

 ![bg opacity:.14](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## Quellen

---

# Bibliographie

<div style="font-size: 60%;">

Berners-Lee, T. (1991, August 6). *WorldWideWeb—Executive summary*. Archive.Md. https://archive.md/Lfopj

Candela, G., Pereda, J., Sáez, D., Escobar, P., Sánchez, A., Torres, A. V., Palacios, A. A., McDonough, K., & Murrieta-Flores, P. (2023). An ontological approach for unlocking the Colonial Archive. *Journal on Computing and Cultural Heritage*, *16*(4), 1-18. https://doi.org/10.1145/3594727

Cornut, M., Raemy, J. A., & Spiess, F. (2023). Annotations as Knowledge Practices in Image Archives: Application of Linked Open Usable Data and Machine Learning. *Journal on Computing and Cultural Heritage*, *16*(4), 1–19. https://doi.org/10.1145/3625301

Cossu, S. (2020, April 27). *IIIF at the Getty: Vision & Tactics*. CNI Spring 2020, Virtual Membership Meeting. https://www.cni.org/wp-content/uploads/2020/03/scossu_iiif_getty_vision_and_tactics_cni_spring_2020.pdf

Davis, E., & Heravi, B. (2021). Linked Data and Cultural Heritage: A Systematic Review of Participation, Collaboration, and Motivation. *Journal on Computing and Cultural Heritage*, *14*(2), 21:1-21:18. https://doi.org/10.1145/3429458

Delmas-Glass, E. (2020). *Linked Data and Open Data in Cultural Heritage - from panel 'Linked Art: Networking Digital Collections and Scholarship'*. https://doi.org/10.17613/3XTD-2A28

Felsing, U., Fornaro, P., Frischknecht, M., & Raemy, J. A. (2023). Community and Interoperability at the Core of Sustaining Image Archives. *Digital Humanities in the Nordic and Baltic Countries Publications*, *5*(1), 40–54. https://doi.org/10.5617/dhnbpub.10649

Hyvönen, E. (2020). Using the Semantic Web in digital humanities: Shift from data publishing to data-analysis and serendipitous knowledge discovery. *Semantic Web*, *11*(1), 187–193. https://doi.org/10.3233/SW-190386

</div>

---

# Bibliographie

<div style="font-size: 60%;">

Metcalfe Hurst, E. (2023). LUX: Yale Collections Discovery. *ARLIS/NA Multimedia & Technology Reviews*, *2023*(4), 1–4. https://doi.org/10.17613/3hy1-pv45

Newbury, D. (2020, February 4). *IIIF and Linked Open Data*. LODLAM 2020. https://www.slideshare.net/workergnome/iiif-and-linked-open-data-lodlam-2020

Raemy, J. A. (2024). *Linked Open Usable Data for Cultural Heritage: Perspectives on Community Practices and Semantic Interoperability* [Doctoral Thesis, University of Basel]. https://hdl.handle.net/20.500.14716/148352

Raemy, J. A., Gray, T., Collinson, A., & Page, K. R. (2023, July 12). *Enabling Participatory Data Perspectives for Image Archives through a Linked Art Workflow* (Poster). Digital Humanities 2023 Posters. Digital Humanities 2023, Graz, Austria. https://doi.org/10.5281/zenodo.7878358

Raemy, J. A., & Sanderson, R. (2024). Analysis of the Usability of Automatically Enriched Cultural Heritage Data. In F. Moral-Andrés, E. Merino-Gómez, & P. Reviriego (Eds.), *Decoding Cultural Heritage: A Critical Dissection and Taxonomy of Human Creativity through Digital Tools* (pp. 69–93). Springer Nature Switzerland. https://doi.org/10.1007/978-3-031-57675-1_4

Sanderson, R. (2018, May 15). *Shout it Out: LOUD*. EuropeanaTech Conference 2018, Rotterdam, the Netherlands. https://www.slideshare.net/Europeana/shout-it-out-loud-by-rob-sanderson-europeanatech-conference-2018

Snydman, S., Sanderson, R., & Cramer, T. (2015). The International Image Interoperability Framework (IIIF): A community & technology approach for web-based images. *Archiving Conference*, *12*, 16–21. https://doi.org/10.2352/issn.2168-3204.2015.12.1.art00005


</div>


---

# Bildnachweise

<div style="font-size: 65%;">

Dieser Bilder sind Teil des [Fotoarchivs der Empirischen Kulturwissenschaft Schweiz (EKWS)](https://www.ekws.ch/), ehemals _Schweizerische Gesellschaft für Volkskunde_, mit Sitz in Basel. Lizenz: CC BY-NC 4.0 [![w:60](https://julsraemy.ch/prezi/assets/cc-by-nc.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

- Brunner, Ernst. [Blick auf das Spalentor]. Basel, 1938. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_00115. Alte Bildnummer: AB 15. https://ark.dasch.swiss/ark:/72163/1/0812/6mo320CeXUqvWftaKoKPWws

- Brunner, Ernst. [Ringtanz während der Masüras auf der Alp Sura]. Guarda, 1939. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_08589. Alte Bildnummer: DL 89. https://ark.dasch.swiss/ark:/72163/1/0812/T6ITgGbkVomteyknedSDsA7

- Brunner, Ernst. [Katze auf einer Mauer]. Ort und Datum unbekannt. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_19553. Alte Bildnummer: HV 53. https://ark.dasch.swiss/ark:/72163/1/0812/9Uux7KkDW92sHVgDliEHbwV

- Brunner, Ernst. ["Steffenbach-Brücke" der Furka-Bahn: Bau und Erneuern der Brücke]. Kanton Wallis, 1950. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_36937. Alte Bildnummer: PU 37. https://ark.dasch.swiss/ark:/72163/1/0812/ODlFFvdYVc=xa_VyOACHoAf

</div>