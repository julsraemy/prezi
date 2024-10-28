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


<div style="text-align: center">

## Linked Open Usable Data for Cultural Heritage: Perspectives on Community Practices and Semantic Interoperability

https://phd.julsraemy.ch


**Julien A. Raemy**
Doctoral Examination | University of Basel, 18th November 2024

</div>



<div style="font-size: 70%;">


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

![bg fit 50%](https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/full/max/0/default.jpg)


<!-- header: Julien A. Raemy | **Linked Open Usable Data for Cultural Heritage** | [![w:35 CC BY 4.0](https://julsraemy.ch/prezi/assets/cc-by.svg)](https://creativecommons.org/licenses/by/4.0/) -->

<!-- footer: Doctoral Examination | University of Basel, 18th November 2024 -->

---


<div style="text-align: center;">
  <video controls style="width: 100%; max-width: 1000px; height: auto;">
    <source src="https://julsraemy.ch/prezi/assets/iiif-ringtanz.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>


<!-- 

 -->


---

HMO

Exhibition - Family of Man (MoMA)



<!-- 

https://www.moma.org/calendar/exhibitions/2429

 -->



---


```json
{
  "@context": "https://linked.art/ns/v1/linked-art.json", 
  "id": "https://data.participatory-archives.ch/object/123456.json",
  "type": "HumanMadeObject",
  "_label": "[Ringtanz während der Masüras auf der Alp Sura]",
  "classified_as": [
    {
      "id": "http://vocab.getty.edu/aat/300128343", 
      "type": "Type", 
      "_label": "Black and white negative",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300435443",
          "type": "Type",
          "_label": "Type of Work"
        }
      ]
    }
  ],
  "member_of": [
    {
      "id": "https://data.participatory-archives.ch/set/12.json",
      "type": "Set",
      "_label": "SGV_12 Ernst Brunner",
      "classified_as": [
        {
        "id": "http://vocab.getty.edu/aat/300025976",
        "type": "Type",
        "_label": "Collection"
        }
      ]
    }
  ],
...
}
```



---


![bg opacity:.10](https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/full/max/0/default.jpg)

# Linked Open Usable Data (LOUD)

- LOUD's goal is to achieve the Semantic Web's intent on a global scale in a usable fashion, especially by leveraging community-driven standards in the cultural heritage field – such as the International Image Interoperability Framework (IIIF) and Linked Art.

- It has five main design principles to make the data more easily accessible to software developers, who play a key role in interacting with the data and building software and services.

- It is centred on JavaScript Object Notation for Linked Data (JSON-LD) as the preferred serialisation format.


<!-- 

 -->


---

# Research Question


<div style="text-align: center;">

## How can the concept of LOUD be situated within the broader framework of cultural heritage and digital humanities?

### ... and to what extent has it influenced — or is likely to influence — the perception and use of Linked Data in these fields?

</div>

<!-- 

 -->

---

# Context

![center w:410](https://julsraemy.ch/prezi/assets/phd-context.svg)

---

# Theoretical Framework

![center w:1150](https://julsraemy.ch/prezi/assets/sympoiesis-theories.svg)


---


# Methodology

- **Mixed methods**: Combined quantitative and qualitative techniques, guided by ANT
- **Data collection and curation**: Collected and curated data from guidelines, meeting minutes, GitHub issues, surveys and project implementations; modelled this data for deeper analysis.
- **Data analysis and reporting**: Used Python (including libraries like NetworkX), Gephi as well as RStudio for data analysis and visualisation; shared scripts and results on GitHub to improve publication and transparency.
- **Empirical studies across three case studies**: Explored the IIIF and Linked Art communities, the PIA research project, and Yale's LUX platform to assess the implementation and impact of LOUD standards.

<!-- 

Two perspectives have served as threads interwoven across chapters

A three-act empirical structure

 -->


---


# The Social Fabrics of IIIF and Linked Art

![bg 68%](https://julsraemy.ch/prezi/assets/use_cases-specifications-2.svg)


<!-- 

 -->



---

# The Social Fabrics of IIIF and Linked Art

![center w=75%](https://julsraemy.ch/prezi/assets/survey_heatmap.svg)

<div style="font-size: 70%;">
    Raemy [2023]
</div>


---

# The Social Fabrics of IIIF and Linked Art


![center w:740px](https://julsraemy.ch/prezi/assets/attendance_stacked_bar_la.svg)

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



# Machine-generated annotations

![center width:864px](https://julsraemy.ch/prezi/assets/pia_iiif_mirador.png)

<div style="font-size: 70%;">
    See Cornut et al. [2023]
</div>


---


# Yale's LUX and LOUD Consistency

![bg opacity:.2](https://library.yale.edu/sites/default/files/beinecke720.jpeg)
![bg opacity:.2](https://britishart.yale.edu/sites/default/files/img/overview/2020-06/2016EF11.572_D8.jpg)
![bg opacity:.2](https://th-thumbnailer.cdn-si-edu.com/DZU5wD7JlgYEjvqC0RGXWZ_45EM=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/fa/49/fa494e15-0d54-403d-9c50-3af1c5890780/ypmarexhgreathall001web.jpg)
![bg opacity:.2](https://artgallery.yale.edu/sites/default/files/styles/max_2600x2600/public/2023-03/2023-ag-exb-4581-0003-pub.jpg)


1-2 quotes

<!-- 

LUX: Yale University Library, Yale Center for British Art, Yale Peabody Museum, Yale University Art Gallery

 -->



---

# Yale's LUX and LOUD Consistency

Shared terminology


---

# Yale's LUX and LOUD Consistency

Valid/Invalid Manifests

BO See Raemy [2022]

---

# Further Contributions

<br>

➡️ https://phd.julsraemy.ch/research

![center w:920](https://julsraemy.ch/prezi/assets/loud-infra-example.jpg)

<div style="font-size: 70%;">
[Felsing et al. 2023]
</div>


<!-- 

 -->



---


# Conclusion


<!-- 

 -->






---


<!-- class: tinytext --> 

# References

Cornut, M., Raemy, J. A., & Spiess, F. (2023). Annotations as Knowledge Practices in Image Archives: Application of Linked Open Usable Data and Machine Learning. _Journal on Computing and Cultural Heritage_, 16(4), 1–19. https://doi.org/10.1145/3625301

Felsing, U., Fornaro, P., Frischknecht, M., & Raemy, J. A. (2023). Community and Interoperability at the Core of Sustaining Image Archives. _Digital Humanities in the Nordic and Baltic Countries Publications_, 5(1), 40–54. https://doi.org/10.5617/dhnbpub.10649

Raemy, J. A. (2022, October 20). Back and Forth from Boundary Objects to IIIF Resources: The Recipes of a Community-driven Initiative Specifying Standards. _DARIAH-CH Study Day 2022 Posters_. DARIAH-CH Study Day, Mendrisio, Switzerland. https://doi.org/10.5281/zenodo.7015256

Raemy, J. A. (2023). _Characterising the IIIF and Linked Art Communities: Survey report_ (p. 29) [Report]. University of Basel. https://doi.org/10.5451/unibas-ep95340

Raemy, J. A., & Sanderson, R. (2024). Analysis of the Usability of Automatically Enriched Cultural Heritage Data. In F. Moral-Andrés, E. Merino-Gómez, & P. Reviriego (Eds.), _Decoding Cultural Heritage: A Critical Dissection and Taxonomy of Human Creativity through Digital Tools_ (pp. 69–93). Springer Nature Switzerland. https://doi.org/10.1007/978-3-031-57675-1_4



---

![bg opacity:.2](https://iiif.dasch.swiss/0812/3GiQt3LMMgl-ToSOskchDW7.jpx/full/max/0/default.jpg)
![bg opacity:.2](https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/full/max/0/default.jpg)

# Image Credits

## Cultural Anthropology Switzerland (CAS)

These images are part of the [photographic archives of Cultural Anthropology Switzerland](https://archiv.sgv-sstp.ch/), formerly the _Swiss Society for Folklore Studies_, based in Basel, Switzerland. Licence: CC BY-NC 4.0 [![w:60](https://julsraemy.ch/prezi/assets/cc-by-nc.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

- Brunner, Ernst. [Blick auf das Spalentor]. Basel, 1938. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_00115. Alte Bildnummer: AB 15. https://archiv.sgv-sstp.ch/resource/422350 

- Brunner, Ernst. [Ringtanz während der Masüras auf der Alp Sura]. Guarda, 1939. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_08589. Alte Bildnummer: DL 89. https://archiv.sgv-sstp.ch/resource/430824
