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

 ![bg opacity:.14](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## Linked Data in Archiven, Bibliotheken und Museen


---

# Französische Nationalbibliothek (BnF)

# Normdatei

![](https://julsraemy.ch/prezi/assets/latour-databnf.png)


<div style="font-size: 60%;">

https://data.bnf.fr/
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


![](https://julsraemy.ch/prezi/assets/zytglogge.svg)

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

## Archivdatenbank des Schweizerischen Bundesarchiv 

<div style="font-size: 55%;">

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


# PIA – Eine verknüpfte Konstellation

![](https://julsraemy.ch/prezi/assets/infrastructure_constellation.svg)

<!-- 

Lots of different entry points you may ask...

Synoptic View of the PIA Infrastructure: Showcasing its Connection to DSP and the CAS Photo Archive Website

How to ensure that this linked constellation remains universally usable by developers that create tools, services, and interfaces? How to make things easier for PIA in terms of external collaboration? What I mean by this is that not everything needs to happen on our front-end...

 -->