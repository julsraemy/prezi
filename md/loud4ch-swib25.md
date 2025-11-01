---
marp: true
author: Julien A. Raemy
title: Linked Open Usable Data for Cultural Heritage - Community Building and Semantic Interoperability in Practice
description: Presentation on Linked Open Usable Data (LOUD) given by Julien A. Raemy in the context of the 17th Semantic Web in Libraries Conference (SWIB25) on 18 November 2025. 
keywords: Cultural Heritage, IIIF, Linked Art, Linked Data, LOUD, Community Practices, Semantic Interoperability, Web Annotation
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://doi.org/10.5281/zenodo.17478215
theme: beam
paginate: true
_paginate: false
---



![bg opacity:.15](https://iiif.dasch.swiss/0812/3GiQt3LMMgl-ToSOskchDW7.jpx/full/max/0/default.jpg)


<div style="text-align: center; font-size: 140%">

## Linked Open Usable Data for Cultural Heritage
### Community Building and Semantic Interoperability in Practice

</div>

<div style="text-align: center;">

**Dr. Julien A. Raemy**
Walter Benjamin Kolleg, University of Bern; Swiss Federal Archives
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759) [![Google Scholar](https://img.shields.io/static/v1?label=Google%20Scholar&message=Julien%20A.%20Raemy&color=4285F4&logo=googlescholar)](https://scholar.google.ch/citations?user=pGROUG0AAAAJ&hl) [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=julsraemy&color=181717&logo=github)](https://github.com/julsraemy) [![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@julsraemy@hcommons.social&color=6364FF&logo=mastodon)](https://hcommons.social/@julsraemy)
17th Semantic Web in Libraries Conference (SWIB25) | 18th November 2025

</div>

<!-- 

Hello everyone,

Thank you for joining me today for my PhD defense. I’d like to extend my gratitude to my supervisors for their guidance and insights throughout this journey.

My thesis examines how collaborative structures and standardized data can support meaningful exchange and reuse of information. It also reflects my interest for using web-based and community-driven technologies to transform the way we understand, share and value cultural heritage.

 -->

---

<!-- header: Julien A. Raemy | [![w:35 CC BY 4.0](https://julsraemy.ch/prezi/assets/cc-by.svg)](https://creativecommons.org/licenses/by/4.0/) -->
<!-- footer: Linked Open Usable Data for Cultural Heritage | SWIB25
 -->

 # Context

 <div style="font-size: 75%;">

 ## PhD Thesis in Digital Humanities (2021-2024)

 Raemy, J. A. (2024). _Linked Open Usable Data for Cultural Heritage: Perspectives on Community Practices and Semantic Interoperability_ [Doctoral Thesis, University of Basel]. https://hdl.handle.net/20.500.14716/148352

 HTML version: https://phd.julsraemy.ch/thesis.html

 :sparkles: **I defended it exactly one year ago!**  :sparkles:

 ## Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA)

Swiss National Science Foundation (SNSF) research project, Sinergia (2021-2025)
- University of Basel: Institute for Cultural Anthropology and European Ethnology and Digital Humanities Lab
- Bern University of Applied Sciences: Bern Academy of the Arts (HKB)
- Cultural Anthropology Switzerland (CAS) photographic archives: Atlas of the Swiss Folklore, Kreis Family, Ernst Brunner

https://data.snf.ch/grants/grant/193788
https://about.participatory-archives.ch

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

- The term was coined by Robert Sanderson [2018, 2019] who has been involved in the conception and maintenance of web standards, mainly in the cultural heritage field.

- LOUD aims to bring the vision of the Semantic Web into practical, global use, especially within cultural heritage, by building on community-driven standards like the International Image Interoperability Framework (IIIF) and Linked Art. The Web Annotation Data Model is also considered as a LOUD-compliant standard.

- It has five main design principles to make the data more easily accessible to software developers, who play a key role in interacting with the data and building software and services on top of it, and to some extent to scholars. 

https://linked.art/loud/


---

# LOUD Ecosystem

### IIIF

* IIIF facilitates the sharing of high-resolution image-based content through a series of specifications. It also makes use of some resource types defined by the Web Annotation Data Model. Semantic metadata can be linked from IIIF resources via `seeAlso`.

### Web Annotation Data Model

* The Web Annotation Data Model provides a standard for creating and sharing annotations across various platforms.

###  Linked Art

* Linked Art provides a model based on CIDOC-CRM and a series of API endpoints (entities) for semantically describing cultural heritage. With this specification, it is possible as well to describe web services such as IIIF.

<!-- 

LOUX integrates technologies, mostly community-driven, like IIIF, WADM, and Linked Art. Together, they demonstrate a transformative potential in how cultural heritage data is interacted with and understood, reshaping traditional humanities and opening new research opportunities.

 -->


---

# LOUD-Driven Infrastructure

![center w:1000](https://julsraemy.ch/prezi/assets/loud-infra-example.jpg)

[Felsing et al. 2023]

---

![bg opacity:.14](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## PhD Thesis

- Scope
- Empirical Studies

---


# Scope

<div style="font-size: 82%;">

## Methodology

- **Mixed methods**: Combined quantitative and qualitative approaches, guided by Actor-Network Theory (ANT).
- **Data collection**: Curated data from guidelines, meeting minutes, GitHub issues, surveys, and project implementations; modeled for analysis.
- **Analysis & reporting**: Used R, Python, and Gephi for analysis and visualization; shared scripts and results on GitHub to support transparency.

## Empirical studies

1. IIIF and Linked Art communities
2. PIA research project
3. LUX: Yale Collections Discovery

</div>

<!-- 

As a Digital Humanist, I indeed combined quantitative and qualitative approaches. I collected data from web pages, meeting minutes, GitHub issues and conducted a survey as well as interviews. For analysis and report, I mainly used R or Python as wel as Gephi.

The empirical studies follow a three-act structure, namely I studied the social fabrics of the IIIF and Linked Art communities, the PIA research project as a laboratory to implement LOUD standards, and investigated LUX, Yale Collections Discovery platform. 

While I may have sacrificed some depth in individual areas, it was crucial for covering LOUD’s wide-ranging applications.

 -->


---


# The Social Fabrics of IIIF and Linked Art

<div style="display: flex; justify-content: center; align-items: center; gap: 20px; width: 100%;">
    <div style="text-align: center; width: 50%;">
        <img src="https://iiif.io/assets/images/heroes/event_2.webp" alt="Photo of the 2023 IIIF Conference attendees" style="width:90%; max-width:600px; height:auto;">
        <div style="font-size: 50%;"> 
            <a href="https://iiif.io" target="_blank">https://iiif.io</a></br>2019 IIIF Conference in Göttingen<br/>
        </div>
    </div>
    <div style="text-align: center; width: 50%;">
        <img src="https://julsraemy.ch/prezi/assets/linked-art-rijks-2023.jpeg" alt="Linked Art Workshop attendees in Amsterdam (2023)" style="width: 90%; height: auto;">
        <div style="font-size: 50%;">
            <a href="https://linked.art" target="_blank">https://linked.art</a>
        </div>
    </div>
</div>

<!-- 

With the exception of annual conferences or face-to-face workshops, the vast majority of meetings take place online. These are open, with a clear agenda written on Google Docs, and use GitHub as a central platform for collecting use cases and collaboratively writing specifications.

 -->


---

![bg 85%](https://julsraemy.ch/prezi/assets/use_cases-specifications-2.svg)


<!-- 

Consensus-building is indeed a sustaining factor, as demonstrated here with the release of the IIIF Image and Presentation APIs 3.0 in 2020. The diagram illustrates the process undertaken by the IIIF community to review, validate, and release both specifications.

This structured approach begins with groups such as the Editors, who identify and propose changes. These changes are then rigorously discussed and reviewed by members of the Technical Review Committee (or TRC).

We can see the distributed agency that defines this community-driven process.

 -->



---


![center w:870px](https://julsraemy.ch/prezi/assets/attendance_stacked_bar_la.svg)


<!-- 

This chart illustrates the patterns of community participation in Linked Art meetings held between January 2019 and March 2024. During this period, 130 individuals attended 115 meetings. The average attendance was 13.57 sessions per participant, but the median was only 2, suggesting a small core of consistently active members alongside a larger group with sporadic involvement. This pattern reflects the challenges and successes of maintaining sustained engagement, especially within a volunteer-driven environment.

The challenge lies not only in attracting more participants but in encouraging those who are currently passive to engage more actively. A similar participation pattern is observed in the IIIF community.

 -->

 
---

![bg opacity:.2](https://iiif.dasch.swiss/0812/3Z1k2I7LDap-Ww23UPF4EXk.jpx/full/max/0/default.jpg)

## The IIIF and Linked Art communities offer a model for transparent, open collaboration that fosters growth and innovation, though their future relevance will depend on integrating diverse perspectives to avoid perceptions of exclusivity and Anglo-Saxon bias.

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

<!-- 

The IIIF and Linked Art communities offer a model for transparent, open collaboration that fosters growth and innovation, though their future relevance will depend on integrating diverse perspectives to avoid perceptions of exclusivity and Anglo-Saxon bias.

-->


---


# PIA as a Laboratory 

<div style="display: flex; justify-content: center; align-items: center; gap: 10px; width: 100%;">
    <div style="text-align: center; width: 50%;">
        <img src="https://julsraemy.ch/prezi/assets/pia-header.png" alt="PIA Header (Project Website)" style="width:100%; max-width:600px; height:auto;">
    </div>
    <div style="text-align: center; width: 50%;">
        <img src="https://julsraemy.ch/prezi/assets/pia-team.png" alt="PIA Team" style="width: 100%; height: auto;">
        </div>
    </div>
</div>


<div style="font-size: 50%;">

https://about.participatory-archives.ch/

</div>

<!-- 

PIA provided an opportunity to demonstrate how it could act as a testbed for the implementation of LOUD standards and to benefit from the best practices and tools created by the communities. PIA has developed interfaces that support indexing and interaction with digital resources, and are designed to foster reflective engagement.

 -->

---




![](https://julsraemy.ch/prezi/assets/infrastructure_constellation.svg)

<!-- 


This is a synoptic View of the PIA infrastructure and it showcases its Connection to the DaSCH Service Platform, where the data is preserved for the long-term, and the Cultural Anthroplogy Switzerland Photo Archive Website. 

The use of LOUD standards in this exploratory setting has shown how quickly these APIs can be implemented, while underscoring the importance of a sustainable, long-term strategy for their maintenance. For instance, the IIIF Image API service could be later managed uniquely through the DaSCH infrastructure, reducing backend maintenance demands. However, sustained operational support for the IIIF Presentation and Change Discovery APIs—potentially in a read-only format—would require managing hosting costs post-project.


 -->

---

# Machine-generated annotations in a IIIF setting

![center width:800px](https://julsraemy.ch/prezi/assets/pia_iiif_mirador.png)

[Cornut et al. 2023]

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

<div style="text-align: center;">
  <video controls loop style="width: 100%; max-width: 900px; height: auto;">
    <source src="https://julsraemy.ch/prezi/assets/mirador-album-layers.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<div style="font-size: 50%;">

https://projectmirador.org/embed/?iiif-content=https://julsraemy.ch/hostiiing/manifests/SGV_10A_00031_layers.json

</div>


<!-- 

This video recording illustrates a materiality use case within the PIA project, where the protective films of a photo album are modeled as a IIIF resource. You can also see a loose photograph alongside its original placement on the album page. In total, there are four photographs that can each be displayed as layers in the Mirador viewer.

Modeling complex digital objects like this is typically handled on a case-by-case basis to faithfully represent the materiality of photographic albums. This approach, selectively applied, reflects practices at institutions like the Getty Institute, which similarly addresses unique cases by adapting standards to capture complex physical details.

 -->

---

![bg opacity:.2](https://iiif.dasch.swiss/0812/3Z1k2I7LDap-Ww23UPF4EXk.jpx/full/max/0/default.jpg)

## PIA demonstrates how LOUD specifications, especially IIIF APIs, have the potential to support public engagement through proxy mechanisms and participatory practices, though, for now, this engagement relies primarily on reusing tools developed by community-driven processes; achieving scalability and lasting impact will require ongoing commitments to both data preservation and service maintenance beyond the project’s duration.

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->


<!-- 

PIA demonstrates how LOUD specifications, especially IIIF APIs, have the potential to support public engagement through proxy mechanisms and participatory practices, though, for now, this engagement relies primarily on reusing tools developed by community-driven processes; achieving scalability and lasting impact will require ongoing commitments to both data preservation and service maintenance beyond the project’s duration.

-->


---


# Yale's LUX and LOUD Consistency


<div style="display: flex; justify-content: center; align-items: center; gap: 10px; width: 100%;">
    <div style="text-align: center; width: 50%;">
        <img src="https://julsraemy.ch/prezi/assets/lux-ui.png" alt="LUX User Interface" style="width:100%; max-width:600px; height:auto;">
    </div>
    <div style="text-align: center; width: 50%;">
        <img src="https://julsraemy.ch/prezi/assets/lux-launch.jpg" alt="LUX Launch Event" style="width: 100%; height: auto;">
        </div>
    </div>
</div>

<div style="font-size: 50%;">

https://lux.collections.yale.edu/

</div>

<!-- 

Transitioning from a project-specific implementation, we now look at LUX as an example of LOUD applied on a larger institutional scale, demonstrating its adaptability to meet diverse needs across multiple institutions.

LUX integrates collections from the Yale University Library, Yale Center for British Art, Yale Peabody Museum, and Yale University Art Gallery. 

 -->

---

![bg opacity:.15](https://library.yale.edu/sites/default/files/beinecke720.jpeg)
![bg opacity:.15](https://britishart.yale.edu/sites/default/files/img/overview/2020-06/2016EF11.572_D8.jpg)
![bg opacity:.15](https://th-thumbnailer.cdn-si-edu.com/DZU5wD7JlgYEjvqC0RGXWZ_45EM=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/fa/49/fa494e15-0d54-403d-9c50-3af1c5890780/ypmarexhgreathall001web.jpg)
![bg opacity:.15](https://artgallery.yale.edu/sites/default/files/styles/max_2600x2600/public/2023-03/2023-ag-exb-4581-0003-pub.jpg)


> The LUX initiative has created a model of collegial and productive collaboration that colleagues at Yale can look to. This collaborative approach extends beyond Yale, and I hope it has a trickle-down effect on the thinking of those who develop systems for libraries and museums. It remains to be seen how this initiative will influence the broader community and shape the future of museum system development.

Heather Gendron, Director, Robert B. Haas Family Arts Library, Yale University Library

<!-- 

As part of the research, I conducted interviews with people involved in the LUX initiative to gain insight into its collaborative impact and adaptability. Here is an excerpt from an interview with Heather Gendron, Director of the Robert B. Haas Family Arts Library at Yale University, who reflects on LUX as a model for collegial and productive collaboration within Yale and potentially beyond.

The success of Yale’s collaboration can be attributed to a shared vision that values the connections between diverse collections across various domains. This vision has fostered active contributions over the years. This commitment shows how sustained engagement and a unified approach can improve the effectiveness and reach of institutional initiatives.


 -->


---

<div style="text-align: center;">
  <video controls loop style="width: 100%; max-width: 1000px; height: auto;">
    <source src="https://julsraemy.ch/prezi/assets/lux-demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>


---

![center w:700](https://julsraemy.ch/prezi/assets/lux-arch-simple.png)

[Raemy & Sanderson 2024]

---

![](https://julsraemy.ch/prezi/assets/lux-vocab-ycba-yuag.png)

<!-- 

Beyond the collaborative vision, LUX’s effectiveness relies on a carefully constructed infrastructure that supports its diverse data connections. For instance, I examined the vocabulary consistency, which plays a critical role in aligning and connecting the metadata across Yale’s collections.

This plot highlights the shared usage patterns of Getty Vocabulary terms between the Yale Center for British Art and the Art Gallery, revealing significant intersections in how both institutions apply controlled terms. 

Reconciliation through the LUX pipeline ensures that terms from controlled vocabularies align seamlessly, allowing the collections to be enriched with consistent metadata across units.


 -->

---


![bg opacity:.2](https://iiif.dasch.swiss/0812/3Z1k2I7LDap-Ww23UPF4EXk.jpx/full/max/0/default.jpg)

### As a large-scale Linked Data initiative, LUX illustrates how socio-technical principles can align data and human contributors around common goals, achieved through iterative development and interdisciplinary collaboration. Going forward, LUX will need to prioritise user feedback, expand collections and refine metadata to improve representation and maintain its role as a flagship cultural heritage project that sets a benchmark for other institutions - although the full impact of this work is still unfolding.

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

<!-- 

As a large-scale Linked Data initiative, LUX illustrates how socio-technical principles can align data and human contributors around common goals, achieved through iterative development and interdisciplinary collaboration. Going forward, LUX will need to prioritise user feedback, expand collections and refine metadata to improve representation and maintain its role as a flagship cultural heritage project that sets a benchmark for other institutions - although the full impact of this work is still unfolding.

 -->


---

![bg opacity:.10](https://iiif.dasch.swiss/0812/3GiQt3LMMgl-ToSOskchDW7.jpx/full/max/0/default.jpg)


# Conclusion

<div style="font-size: 88%;">

- Advocated LOUD as a means of improving the accessibility and usability of cultural heritage data through community-driven standards such as IIIF and Linked Art, establishing a common language that promotes interoperability between institutions.
- Demonstrated in the PIA research project how IIIF APIs can support participatory practices and data reuse, illustrating the practical benefits of LOUD in real-world settings.
- Recognised that while JSON-LD makes Linked Data more accessible, it hasn't yet significantly changed the broader perception of Linked Data, but offers a pragmatic, flexible approach that many institutions can adopt without full graph-based interpretation.
- Acknowledged areas for improvement, such as balancing community-driven practices with semantic interoperability, and addressing the broad scope that can limit technical engagement.
- Suggested future research focused on early adopter benefits, expanded implementation of Linked Art, and greater inclusion of Global South perspectives to broaden LOUD's impact and reach.

</div>

<!-- 

In conclusion, I emphasized LOUD’s role in improving accessibility and usability in cultural heritage through IIIF and Linked Art. The PIA project showed LOUD’s impact on participatory practices and data reuse, while JSON-LD allows for both technical rigor and accessibility, even if it doesn’t transform perceptions of Linked Data entirely.

I acknowledge critiques about balancing community practices with semantic interoperability, reflecting current adoption challenges. Future research could address this by expanding engagement with the Global South, which would add cultural diversity and extend LOUD’s reach. Strengthening semantic web integration will also be important to improve interoperability without compromising accessibility.


 -->



---



![bg opacity:.17](https://iiif.dasch.swiss/0812/3GiQt3LMMgl-ToSOskchDW7.jpx/full/max/0/default.jpg)
![bg opacity:.17](https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/full/max/0/default.jpg)

# References

<div style="font-size: 70%;">

Cornut, M., Raemy, J. A., & Spiess, F. (2023). Annotations as Knowledge Practices in Image Archives: Application of Linked Open Usable Data and Machine Learning. _Journal on Computing and Cultural Heritage_, 16(4), 1–19. https://doi.org/10.1145/3625301

Felsing, U., Fornaro, P., Frischknecht, M., & Raemy, J. A. (2023). Community and Interoperability at the Core of Sustaining Image Archives. _Digital Humanities in the Nordic and Baltic Countries Publications_, 5(1), 40–54. https://doi.org/10.5617/dhnbpub.10649

Raemy, J. A., & Sanderson, R. (2024). Analysis of the Usability of Automatically Enriched Cultural Heritage Data. In F. Moral-Andrés, E. Merino-Gómez, & P. Reviriego (Eds.), _Decoding Cultural Heritage: A Critical Dissection and Taxonomy of Human Creativity through Digital Tools_ (pp. 69–93). Springer Nature Switzerland. https://doi.org/10.1007/978-3-031-57675-1_4

 Raemy, J. A. (2024). _Linked Open Usable Data for Cultural Heritage: Perspectives on Community Practices and Semantic Interoperability_ [Doctoral Thesis, University of Basel]. https://hdl.handle.net/20.500.14716/148352

Sanderson, R. (2018, May 15). _Shout it Out: LOUD._ EuropeanaTech Conference 2018, Rotterdam, the Netherlands. https://www.slideshare.net/Europeana/shout-it-out-loud-by-rob-sanderson-europeanatech-conference-2018

Sanderson, R. (2019). Keynote: Standards and Communities: Connected People, Consistent Data, Usable Applications. _2019 ACM/IEEE Joint Conference on Digital Libraries (JCDL)_, 28. https://doi.org/10.1109/JCDL.2019.00009

</div>

---

# Image Credits

<div style="font-size: 75%;">

These images are part of the [photographic archives of Cultural Anthropology Switzerland](https://archiv.sgv-sstp.ch/), formerly the _Swiss Society for Folklore Studies_, based in Basel, Switzerland. Licence: CC BY-NC 4.0 [![w:60](https://julsraemy.ch/prezi/assets/cc-by-nc.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

- Brunner, Ernst. [Blick auf das Spalentor]. Basel, 1938. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_00115. Alte Bildnummer: AB 15. https://ark.dasch.swiss/ark:/72163/1/0812/6mo320CeXUqvWftaKoKPWws

- Brunner, Ernst. [Ringtanz während der Masüras auf der Alp Sura]. Guarda, 1939. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_08589. Alte Bildnummer: DL 89. https://ark.dasch.swiss/ark:/72163/1/0812/T6ITgGbkVomteyknedSDsA7

- Brunner, Ernst. [Katze auf einer Mauer]. Ort und Datum unbekannt. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_19553. Alte Bildnummer: HV 53. https://ark.dasch.swiss/ark:/72163/1/0812/9Uux7KkDW92sHVgDliEHbwV

- Brunner, Ernst. Luzerner Studenten studieren das Luzerner Bauernhaus. Kanton Luzern, August 1958. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_44825. Alter Bildnummer:  SY 25. https://ark.dasch.swiss/ark:/72163/1/0812/B9YPMjRFXIibPQtJ=O=fvAO

</div>

<!-- 

Many thanks for your attention. I now look forward to your questions and am ready to engage in a thoughtful discussion.

 -->