---
marp: true
author: Julien A. Raemy
title: Linked Open Usable Data (LOUD) APIs
description: This presentation is a "data pitch" done in the context of the DARIAH-CH Study Day 2023 in Bern, Switzerland. In my PhD thesis titled "Linked Open Usable Data for Cultural Heritage", I address the challenge of establishing and studying stable application programming interfaces (APIs) for cultural heritage data. This endeavour aims to enable seamless integration and interoperability, thereby fostering collaboration and accessibility across the domain. However, I encounter a particular hurdle on this journey, as my work is often perceived by existing infrastructures as a service rather than an object of study. During the Community Practices phase of my research, I have adopted a comprehensive approach that combines observations, semi-structured interviews and online surveys. This interweaving of methods allows me to gain valuable insights. I am also actively immersed in the International Image Interoperability Framework (IIIF) and Linked Art communities, using an Actor-Network Theory (ANT) lens to unravel the intricate dependencies and relationships between the various actors. In venturing into the realm of semantic interoperability, I have embarked on a journey of experimentation with modelling, publishing and analysing LOUD-compliant resources, with a key focus on implementing RESTful APIs. These intertwined perspectives are based on the LOUD design principles and leverage JSON-LD as a serialisation format, ensuring adherence to core standards such as the IIIF Presentation API 3.0, W3C Web Annotation Data Model, and Linked Art API. My dissertation presents a compelling set of use cases that highlight the inherent socio-technical characteristics of grassroots initiatives and the way they create and maintain specifications. First, within the confines of my own research, I endeavour to create a bespoke data model that is firmly rooted in LOUD practices. This foundational endeavour strengthens the integrity and coherence of my research within the broader landscape of the cultural heritage field. Secondly, working with Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA) as a dynamic laboratory, I confront the intricacies of data modelling, drawing on practical engagement and reflective contemplation to refine my findings. Finally, an incisive analysis of LUX, the Yale Collection Discovery platform, provides valuable insights into the effective implementation of LOUD standards at scale, highlighting the nuances of data consistency. As I navigate this interdisciplinary expedition, I encounter the intriguing insight that both community practices and semantic interoperability are intricately intertwined. Instead of being distinct and isolated domains, they reveal themselves as interrelated threads, intricately woven together. This entanglement reveals the fluidity and symbiosis between these perspectives, where their convergence leads to a more holistic understanding of the intricate fabric of cultural heritage data. Traversing this distinctive path, I grapple with the captivating challenge of establishing LOUD API endpoints — a challenge diverging from conventional research subjects, which often necessitates self-reliance. In conclusion, my PhD unfolds as a journey that embraces intertwined socio-technical perspectives, showcasing their entanglement rather than discrete divisions.
keywords: LOUD, Linked Art, IIIF, Web Annotation Data Model, PIA
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://julsraemy.ch/prezi/loud-apis-studyday2023.html
theme: gaia
class: invert
paginate: true
_paginate: false
---

<!-- _class: lead -->

# <!-- fit -->  Linked Open Usable Data (LOUD) APIs
[Julien A. Raemy](https://julsraemy.ch), PhD Candidate in Digital Humanities
DHLab, University of Basel
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759) [![Google Scholar](https://img.shields.io/static/v1?label=Google%20Scholar&message=Julien%20A.%20Raemy&color=4285F4&logo=googlescholar)](https://scholar.google.ch/citations?user=pGROUG0AAAAJ&hl) [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=julsraemy&color=181717&logo=github)](https://github.com/julsraemy) [![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@julsraemy@hcommons.social&color=6364FF&logo=mastodon)](https://hcommons.social/@julsraemy)

DARIAH-CH Study Day 2023 | Data Pitch
University of Bern | 20 October 2023

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

![bg right:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

# LOUD Standards
(JSON-LD based) Specifications following the LOUD design principles:

- IIIF (especially the Presentation API 3.0)
- Web Annotation Data Model
- Linked Art

<!-- _footer: "https://linked.art/loud/" -->

<!-- The overall idea of LOUD is to make data easy to use for humans, especially for developers. JSON-LD allows for some mapping of ontological constructs into JSON, which is the lingua-franca of modern developers and is a cornerstone technology of LOUD. Five design principles to promote data consumption have been conceived.  -->


---


<!-- _class: lead -->

# <!-- fit --> Research Scope
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)

Situating LOUD and its epistemological foundations for Cultural Heritage and Digital Humanities

---

# Research Questions

1. What are the sociotechnical requirements for developing specifications in line with the LOUD design principles? 
&rarr; **The Social Fabrics of IIIF and Linked Art**
2. How can we assess whether IIIF and Linked Art APIs facilitate reuse and participation?
&rarr; **PIA as a Laboratory**
3. How easy-to-adopt and scalable are LOUD standards for Cultural Heritage Institutions?
&rarr; **Yale's LUX**

---

## The Social Fabrics of IIIF and Linked Art


---

## PIA as a Laboratory


<!-- _footer: "https://about.participatory-archives.ch/" -->

---

## Yale's LUX

<!-- _footer: "https://lux.collections.yale.edu" -->

---
Nice diagram

---

```json
{
 "@context": "https://linked.art/ns/v1/linked-art.json", 
 "id": "https://example.org/event/42",
 "type": "Activity",
 "_label": "DARIAH-CH Study Day 2023",
 "classified_as": [
    {
    "id": "http://vocab.getty.edu/aat/300311353", 
    "type": "Type", 
    "_label": "Colloquium"
    }
  ],
 "identified_by": [
    {
    "type": "Name",
    "content": "DARIAH-CH Study Day 2023"
    },
  ],
  ...
}
```

---

![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_36937.jp2/full/max/0/default.jpg)

## Open questions and mitigations
_What are DH worthy digital traces?_

- Why don't all universities/departments in Switzerland offer institutional Git repositories? &rarr; **Standard GitHub and Codeberg accounts**
- Who will maintain online the Linked Art API endpoints I developed? &rarr; **Self-publishing**

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
