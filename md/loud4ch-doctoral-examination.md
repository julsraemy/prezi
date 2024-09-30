---
marp: true
author: Julien A. Raemy
title: Linked Open Usable Data for Cultural Heritage - Doctoral Examination
description: Presentation given in the context of the doctoral examination on 18 November 2024 at the University of Basel
keywords: Cultural Heritage, IIIF, Linked Art, LOUD, Community Practices, Semantic Interoperability
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://julsraemy.ch/prezi/loud4ch-doctoral-examination.html
theme: beam
paginate: true
_paginate: false
---

![bg opacity:.15](https://iiif.dasch.swiss/0812/3GiQt3LMMgl-ToSOskchDW7.jpx/full/max/0/default.jpg)


<div style="text-align: center; font-size: 105%">

## Linked Open Usable Data for Cultural Heritage: Perspectives on Community Practices and Semantic Interoperability

https://phd.julsraemy.ch


**Julien A. Raemy**
Doctoral Examination | University of Basel, 18th November 2024

</div>



<div style="font-size: 75%;">

<br/>


PhD in Digital Humanities supervised by: 
- Prof. Dr. Peter Fornaro (University of Basel)
- Prof. Dr. Walter Leimgruber (University of Basel)
- Dr. Robert Sanderson (Yale University)

Examination chaired by:
- Prof. Dr. Martin Luginbühl (University of Basel)

</div>

<!-- 

 -->

---

<!-- header: Julien A. Raemy | **Linked Open Usable Data for Cultural Heritage** | [![w:35 CC BY 4.0](https://julsraemy.ch/prezi/assets/cc-by.svg)](https://creativecommons.org/licenses/by/4.0/) -->

<!-- footer: Doctoral Examination | University of Basel, 18th November 2024 -->


# <!-- fit --> Participatory Knowledge Practices in Analogue and Digital Image Archives

## PIA

- Funded by the Swiss National Science Foundation, Sinergia, 02.2021-01.2025.
    - Institute for Cultural Anthropology and European Ethnology, University of Basel
    - Digital Humanities Lab, University of Basel
    - Bern Academy of the Arts, Bern University of Applied Sciences
- Based on three photographic collections from the Cultural Anthropology Switzerland's archives (*Fotoarchiv der Empirischen Kulturwissenschaft Schweiz - EKWS*)

https://about.participatory-archives.ch/

---

# Something

Storytelling 1


<!-- 

 -->


---

# Something

Storytelling 2


<!-- 

 -->



---

# Something

Storytelling 3


<!-- 

 -->



---


![bg opacity:.10](https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/full/max/0/default.jpg)

# Linked Open Usable Data (LOUD)

- LOUD's goal is to achieve the Semantic Web's intent on a global scale in a usable fashion, especially by leveraging community-driven standards in the cultural heritage field – such as the International Image Interoperability Framework (IIIF) and Linked Art.

- It has five main design principles to make the data more easily accessible to software developers, who play a key role in interacting with the data and building software and services.

- It is centred on JavaScript Object Notation for Linked Data (JSON-LD) as the preferred serialisation format.


<!-- 

 -->


---

# Research Questions


How can the concept of LOUD be situated within the broader framework of cultural heritage and digital humanities, and to what extent has it influenced — or is likely to influence — the perception and use of Linked Data in these fields?

<!-- 

 -->



---

# Literature Review


Create an image

---

# Theoretical Framework

Image of PI...


---

# Empirical Research


1. The Social Fabrics of IIIF and Linked Art
2. PIA as a Laboratory
3. Yale's LUX and LOUD Consistency


<!-- 

A three-act empirical structure

 -->



---


# Objective $I$ and Methodology


<!-- 

 -->

---

# Objective $II$ and Methodology


<!-- 

 -->


---

# Objective $III$ and Methodology


<!-- 

 -->



---


# The Social Fabrics of IIIF and Linked Art


<!-- 

 -->



---


# PIA as a Laboratory 

![](https://julsraemy.ch/prezi/assets/infrastructure_constellation.svg)

<!-- 

Lots of different entry points you may ask...

Synoptic View of the PIA Infrastructure: Showcasing its Connection to DSP and the CAS Photo Archive Website

How to ensure that this linked constellation remains universally usable by developers that create tools, services, and interfaces? How to make things easier for PIA in terms of external collaboration? What I mean by this is that not everything needs to happen on our front-end...

 -->

<!-- 

A Linked Constellation

 -->



---


# Yale's LUX and LOUD Consistency


<!-- 

 -->



---

# Further Contributions


https://phd.julsraemy.ch/research


<!-- 

 -->



---


# Discussion


<!-- 

 -->



---


# Conclusion


<!-- 

 -->






---

# Machine-generated annotations in a IIIF setting

## Example from the PIA research project

![center width:700px](https://julsraemy.ch/prezi/assets/pia_iiif_mirador.png)

See Cornut et al. [2023]

---

# Machine-generated annotations in a IIIF setting

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


# LOUD-Driven Infrastructure

![center w:1000](https://julsraemy.ch/prezi/assets/loud-infra-example.jpg)

[Felsing et al. 2023]


---

<!-- class: tinytext --> 

# References $I$

Cornut, M., Raemy, J. A., & Spiess, F. (2023). Annotations as Knowledge Practices in Image Archives: Application of Linked Open Usable Data and Machine Learning. Journal on Computing and Cultural Heritage, 16(4), 1–19. https://doi.org/10.1145/3625301

Felsing, U., Fornaro, P., Frischknecht, M., & Raemy, J. A. (2023). Community and Interoperability at the Core of Sustaining Image Archives. Digital Humanities in the Nordic and Baltic Countries Publications, 5(1), 40–54. https://doi.org/10.5617/dhnbpub.10649

Raemy, J. A. (2023). Characterising the IIIF and Linked Art Communities: Survey report (p. 29) [Report]. University of Basel. https://doi.org/10.5451/unibas-ep95340

Raemy, J. A., Gray, T., Collinson, A., & Page, K. R. (2023, July 12). Enabling Participatory Data Perspectives for Image Archives through a Linked Art Workflow (Poster). Digital Humanities 2023 Posters. Digital Humanities 2023, Graz, Austria. https://doi.org/10.5281/zenodo.7878358

---

# References $II$

Raemy, J. A., & Sanderson, R. (2023). Analysis of the Usability of Automatically Enriched Cultural Heritage Data (arXiv:2309.16635). arXiv. https://doi.org/10.48550/arXiv.2309.16635

Rossenova, L., & Di Franco, K. (2022). Iterative Pasts and Linked Futures: A Feminist Approach to Modeling Data in Archives and Collections of Artists’ Publishing. Perspectives on Data. https://doi.org/10.53269/9780865593152/05

Sanderson, R. (2018, May 15). Shout it Out: LOUD. EuropeanaTech Conference 2018, Rotterdam, the Netherlands. https://www.slideshare.net/Europeana/shout-it-out-loud-by-rob-sanderson-europeanatech-conference-2018

Sanderson, R. (2019). Keynote: Standards and Communities: Connected People, Consistent Data, Usable Applications. 2019 ACM/IEEE Joint Conference on Digital Libraries (JCDL), 28. https://doi.org/10.1109/JCDL.2019.00009

Sanderson, R. (2023, October 13). Understanding Linked Art. Linked Art face-to-face meeting, Amsterdam, The Netherlands. https://www.slideshare.net/azaroth42/understanding-linked-art

Star, S. L. (1999). The Ethnography of Infrastructure. American Behavioral Scientist, 43(3), 377–391. https://doi.org/10.1177/00027649921955326

UNESCO. Culture for Development Indicators. (2014). Methodology Manual. United Nations Educational, Scientific and Cultural Organization. https://n2t.net/ark:/48223/pf0000229608


---

![bg opacity:.2](https://iiif.dasch.swiss/0812/3GiQt3LMMgl-ToSOskchDW7.jpx/full/max/0/default.jpg)
![bg opacity:.2](https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/full/max/0/default.jpg)

# Image Credits

## Cultural Anthropology Switzerland (CAS)

These images are part of the [photographic archives of Cultural Anthropology Switzerland](https://archiv.sgv-sstp.ch/), formerly the _Swiss Society for Folklore Studies_, based in Basel, Switzerland. Licence: CC BY-NC 4.0 [![w:60](https://julsraemy.ch/prezi/assets/cc-by-nc.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

- Brunner, Ernst. [Blick auf das Spalentor]. Basel, 1938. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_00115. Alte Bildnummer: AB 15. https://archiv.sgv-sstp.ch/resource/422350 

- Brunner, Ernst. [Ringtanz während der Masüras auf der Alp Sura]. Guarda, 1939. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_08589. Alte Bildnummer: DL 89. https://archiv.sgv-sstp.ch/resource/430824
