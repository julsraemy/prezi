---
marp: true
author: Julien A. Raemy
title: Linked Open Usable Data for Cultural Heritage - Doctoral Examination
description: Presentation given in the context of the doctoral examination on 18 November 2024 at the University of Basel
keywords: Cultural Heritage, IIIF, Linked Art, LOUD, Community Practices, Semantic Interoperability
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://doi.org/10.5281/zenodo.14175953
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

Hello everyone,

Thank you for joining me today for my PhD defense. I’d like to extend my gratitude to my supervisors for their guidance and insights throughout this journey.

My thesis examines how collaborative structures and standardized data can support meaningful exchange and reuse of information. It also reflects my interest for using web-based and community-driven technologies to transform the way we understand, share and value cultural heritage.

 -->

---

<iframe src="https://mejackreed.github.io/Leaflet-IIIF/examples/?url=https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/info.json" 
        width="100%" height="600px" style="border:none;">
</iframe>

<div style="font-size: 50%;">

https://mejackreed.github.io/Leaflet-IIIF/examples/?url=https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/info.json

</div>

<!-- header: Julien A. Raemy | **Linked Open Usable Data for Cultural Heritage** | [![w:35 CC BY 4.0](https://julsraemy.ch/prezi/assets/cc-by.svg)](https://creativecommons.org/licenses/by/4.0/) -->

<!-- footer: Doctoral Examination | University of Basel, 18th November 2024 -->

<!-- 

Let's start with a famous picture taken by Ernst Brunner in 1939 in Guarda showcasing people dancing in a circle.

With the protocols and tools available, it is now relatively easy to zoom in on a digital image. What you are actually seeing is not one image, but several of them, or parts of them, known as tiles, delivered by a server and displayed by a client, here Leaflet. Both programs support the IIIF Image API, allowing compatible images to be displayed in different environments.

 -->


---

![bg opacity:.5](https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/full/max/0/default.jpg)


![center](https://julsraemy.ch/prezi/assets/ringtanz.drawio.svg)



<!-- 

This image offers multiple avenues for exploration. It can be studied through various lenses: the date it was taken, when it was acquired by the photographic archives, or even when it was digitized. Notably, the photograph was also part of the iconic "Family of Man" exhibition, organized by Edward Steichen and first shown at the Museum of Modern Art in New York in 1955.

Now, the question is: while we as humans understand the semantics and these different entities (object, people, exhibition), how can we ensure that machines do as well? How do we make catalogues of metadata easily shareable and interoperable across memory institutions?

 -->



---


![bg opacity:.10](https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/full/max/0/default.jpg)

# Linked Open Usable Data (LOUD)

LOUD aims to bring the vision of the Semantic Web into practical, global use, especially within cultural heritage, by building on community-driven standards like the International Image Interoperability Framework (IIIF) and Linked Art.


<div style="font-size: 70%;">

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
        }]}],
}
```
</div>

<!-- 

Linked Open Usable Data - or LOUD - aims to bring the vision of the Semantic Web into practical, global use, especially within cultural heritage, by building on community-driven standards like the International Image Interoperability Framework (IIIF) and Linked Art.

LOUD has five design principles as the baseline for usability and are targeted primarily to software developers.

It is centred on JavaScript Object Notation for Linked Data (JSON-LD) as the preferred serialisation format. This snippet represents "the tip of the iceberg." Behind it lies the challenge of organizing these pieces of information in ways that different systems can interpret consistently. Achieving this level of interoperability requires consensus on metadata standards and structures.

 -->


---

# Research Question


<div style="text-align: center; font-size: 112%">

## How can the concept of LOUD be situated within the broader framework of cultural heritage and digital humanities?

### ... and to what extent has it influenced — or is likely to influence — the perception and use of Linked Data in these fields?

</div>

<!-- 

The main research question of my thesis seeks to situate LOUD within the borader framework of cultural heritage and digital humanities. To some extent, I also explore its potential to reshape the perception and use of Linked Data.

To answer this question, the thesis draws on a blend of theories that together provide a framework.

 -->

---

# Theoretical Framework

![center w:1200](https://julsraemy.ch/prezi/assets/sympoiesis-theories.svg)

<!-- 

The theoretical framework of this thesis is primarily grounded in Actor-Network Theory (ANT), supported by theories like Situated Knowledges, Boundary Objects, and the Philosophy of Information.

ANT was chosen as the central framework due to its strength in analyzing socio-technical networks, essential for understanding and map relationships between human and non-human actors.

Complementary theories add further insight, helping to interpret specific dynamics. However, they are not always central to the analysis but rather serve to deepen understanding of contextual aspects.

 -->


---


# Scope

<div style="font-size: 90%;">

## Methodology

- **Mixed methods**: Combined quantitative and qualitative approaches, guided by ANT.
- **Data collection**: Curated data from guidelines, meeting minutes, GitHub issues, surveys, and project implementations; modeled for analysis.
- **Analysis & reporting**: Used R, Python, and Gephi for analysis and visualization; shared scripts and results on GitHub to support transparency.

## Empirical studies

1. IIIF and Linked Art communities
2. Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA)
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
        <img src="https://iiif.io/assets/images/heroes/event_2.webp" alt="IIIF Image" style="width:100%; max-width:600px; height:auto;">
        <div style="font-size: 50%;">
            <a href="https://iiif.io" target="_blank">https://iiif.io</a>
        </div>
    </div>
    <div style="text-align: center; width: 50%;">
        <img src="https://julsraemy.ch/prezi/assets/linked-art-call.png" alt="Linked Art Agenda" style="width: 100%; height: auto;">
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


![center w:910px](https://julsraemy.ch/prezi/assets/attendance_stacked_bar_la.svg)


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

<div style="text-align: center;">
  <video controls loop style="width: 100%; max-width: 1000px; height: auto;">
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

# Further Contributions

<br>

➡️ https://phd.julsraemy.ch/research

<div style="display: flex; justify-content: center; align-items: center; gap: 15px; width: 100%;">
    <div style="text-align: center; width: 30%;">
        <img src="https://julsraemy.ch/prezi/assets/pia_iiif_mirador.png" alt="Cornut et al. 2023" style="width: 100%; height: auto;">
        <div style="font-size: 80%;">[Cornut et al. 2023]</div>
    </div>
    <div style="text-align: center; width: 38%;">
        <img src="https://julsraemy.ch/prezi/assets/loud-infra-example.jpg" alt="Felsing et al. 2023" style="width: 100%; height: auto;">
        <div style="font-size: 80%;">[Felsing et al. 2023]</div>
    </div>
    <div style="text-align: center; width: 30%;">
        <img src="https://julsraemy.ch/prezi/assets/lux-arch-simple.png" alt="Raemy and Sanderson 2024" style="width: 100%; height: auto;">
        <div style="font-size: 80%;">[Raemy and Sanderson 2024]</div>
    </div>
</div>



<!-- 

In addition to the dissertation, I wrote multiple articles, often with PIA project members, and published most of the scripts and data models on GitHub to promote transparency and reusability. 

The three highlighted contributions focus on (1) machine-generated annotations using IIIF and the Web Annotation Data Model, (2) envisioning what a LOUD ecosystem could look like, and (3) demonstrating that LUX, through its data pipeline and architecture, enables the automated enrichment in the cultural heritage sector.


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

# References and Image Credits

### References

<div style="font-size: 50%;">

Cornut, M., Raemy, J. A., & Spiess, F. (2023). Annotations as Knowledge Practices in Image Archives: Application of Linked Open Usable Data and Machine Learning. _Journal on Computing and Cultural Heritage_, 16(4), 1–19. https://doi.org/10.1145/3625301

Felsing, U., Fornaro, P., Frischknecht, M., & Raemy, J. A. (2023). Community and Interoperability at the Core of Sustaining Image Archives. _Digital Humanities in the Nordic and Baltic Countries Publications_, 5(1), 40–54. https://doi.org/10.5617/dhnbpub.10649

Raemy, J. A., & Sanderson, R. (2024). Analysis of the Usability of Automatically Enriched Cultural Heritage Data. In F. Moral-Andrés, E. Merino-Gómez, & P. Reviriego (Eds.), _Decoding Cultural Heritage: A Critical Dissection and Taxonomy of Human Creativity through Digital Tools_ (pp. 69–93). Springer Nature Switzerland. https://doi.org/10.1007/978-3-031-57675-1_4

</div>

### Image Credits

<div style="font-size: 50%;">

These images are part of the [photographic archives of Cultural Anthropology Switzerland](https://archiv.sgv-sstp.ch/), formerly the _Swiss Society for Folklore Studies_, based in Basel, Switzerland. Licence: CC BY-NC 4.0 [![w:60](https://julsraemy.ch/prezi/assets/cc-by-nc.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

- Brunner, Ernst. [Blick auf das Spalentor]. Basel, 1938. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_00115. Alte Bildnummer: AB 15. https://archiv.sgv-sstp.ch/resource/422350 

- Brunner, Ernst. [Ringtanz während der Masüras auf der Alp Sura]. Guarda, 1939. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_08589. Alte Bildnummer: DL 89. https://archiv.sgv-sstp.ch/resource/430824

- Brunner, Ernst. Luzerner Studenten studieren das Luzerner Bauernhaus. Kanton Luzern, August 1958. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_44825. Alter Bildnummer:  SY 25. https://archiv.sgv-sstp.ch/resource/467060 

</div>

<!-- 

Many thanks for your attention. I now look forward to your questions and am ready to engage in a thoughtful discussion.

 -->