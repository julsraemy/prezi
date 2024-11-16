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


![center](https://julsraemy.ch/prezi/assets/ringtanz.drawio.svg)



<!-- 

This image offers multiple avenues for exploration. It can be studied through various lenses: the date it was taken, when it was acquired by the photographic archives, or even when it was digitized. Notably, the photograph was also part of the iconic "Family of Man" exhibition, organized by Edward Steichen and first shown at the Museum of Modern Art in New York in 1955. This exhibition was intended as a declaration of global solidarity in the decade following World War II, capturing shared human experiences across cultures.

Family of Man Exhibition
https://www.moma.org/calendar/exhibitions/2429

Now, the question is: while we as humans understand the semantics, how can we ensure that machines do as well? How do we make catalogues of metadata easily shareable and interoperable across memory institutions?

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
        }]}],
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
        }]}],
...
}
```

<!-- 

This JSON-LD snippet represents just "the tip of the iceberg." It illustrates one step toward realizing the broader vision of the Semantic Web: a network of linked, machine-readable data that can be shared and understood across systems. Behind it lies the challenge of organizing these pieces of information in ways that different systems can interpret consistently. Achieving this level of interoperability requires consensus on metadata standards and structures.

-->


---


![bg opacity:.10](https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/full/max/0/default.jpg)

# Linked Open Usable Data (LOUD)

- LOUD aims to bring the vision of the Semantic Web into practical, global use, especially within cultural heritage, by building on community-driven standards like the International Image Interoperability Framework (IIIF) and Linked Art.

- It is centred on JavaScript Object Notation for Linked Data (JSON-LD) as the preferred serialisation format.


<div style="font-size: 50%;">

https://linked.art/loud

</div>

<!-- 

Linked Open Usable Data - or LOUD - aims to bring the vision of the Semantic Web into practical, global use, especially within cultural heritage, by building on community-driven standards like the International Image Interoperability Framework (IIIF) and Linked Art.

LOUD has five design principles as the baseline for usability and are targeted primarily to software developers.

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

As a Digital Humanitis, I combined quantitative and qualitative approaches. I collected data from web pages, meeting minutes, or GitHub issues. 

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

This chart illustrates the patterns of community participation in Linked Art meetings held between January 2019 and March 2024. During this period, 130 individuals attended 115 meetings, most of which were virtual, with five face-to-face gatherings. The average attendance was 13.57 sessions per participant, but the median was only 2, suggesting a small core of consistently active members alongside a larger group with sporadic involvement. This pattern reflects the challenges and successes of maintaining sustained engagement, especially within a volunteer-driven environment.

The challenge lies not only in attracting more participants but in encouraging those who are currently passive to engage more actively. A similar participation pattern is observed in the IIIF community.

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

The use of LOUD standards in this exploratory setting has shown how quickly these APIs can be implemented, while underscoring the importance of a sustainable, long-term strategy for their maintenance. For instance, IIIF Image API compliance could be later managed via the DSP’s SIPI image server, reducing backend maintenance demands. However, sustained operational support for the IIIF Presentation and Change Discovery APIs—potentially in a read-only format—would require managing hosting costs post-project. DaSCH could perhaps help mitigate these costs by extending its hosting services to include these APIs.


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

LUX integrates collections from the Yale University Library, Yale Center for British Art, Yale Peabody Museum, and Yale University Art Gallery. This example showcases how LOUD standards can scale effectively, supporting the complex needs of major cultural heritage institutions and facilitating interconnected access to their vast resources.

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

The success of Yale’s collaboration can be attributed to a shared vision that values the connections between diverse collections across various domains. This vision has fostered active contributions over the years, with resources from each participating unit supporting committees, working groups, and unit-level development efforts. This commitment highlights how sustained engagement and a unified approach can enhance the effectiveness and reach of institutional initiatives.

 -->



---


![center w:770](https://julsraemy.ch/prezi/assets/lux-arch-simple.png)

<div style="font-size: 70%;">
See Raemy and Sanderson [2024]
</div>


<!-- 

Beyond the collaborative vision, LUX’s effectiveness relies on a carefully constructed infrastructure that supports its diverse data connections. This site of assemblage brings together various sources to provide a cohesive and enriched experience for users.

The architecture of LUX comprises interconnected components: data harvesting, a data pipeline, a back-end database, a middle tier, and a front-end. LUX’s extensive connections span across Yale units and beyond, integrating external Linked Data sources from different fields. This setup broadens the platform’s scope, allowing users to explore cultural heritage information through a range of interconnected perspectives.


 -->

---

![](https://julsraemy.ch/prezi/assets/lux-vocab-ycba-yuag.png)

<!-- 

Moving from LUX’s technical architecture, I examined the vocabulary consistency, which plays a critical role in aligning and connecting the metadata across Yale’s collections.

This plot highlights how Getty Vocabularies are applied within the Yale Center for British Art (YCBA) and Yale University Art Gallery (YUAG) collections, focusing on shared terms across both units. The UpSet plot shows that ULAN is heavily used for referencing people, while AAT has the highest overlap between collections. TGN is less frequently applied. This approach facilitates interoperability without restricting the potential for programmatically generated connections.

 -->

---

# Further Contributions

<br>

➡️ https://phd.julsraemy.ch/research

<div style="display: flex; justify-content: center; align-items: center; gap: 20px; width: 100%;">
    <div style="text-align: center; width: 50%;">
        <img src="https://julsraemy.ch/prezi/assets/pia_iiif_mirador.png" alt="Cornut et al. 2023" style="width: 100%; height: auto;">
        <div style="font-size: 70%;">[Cornut et al. 2023]</div>
    </div>
    <div style="text-align: center; width: 50%;">
        <img src="https://julsraemy.ch/prezi/assets/loud-infra-example.jpg" alt="Felsing et al. 2023" style="width: 100%; height: auto;">
        <div style="font-size: 70%;">[Felsing et al. 2023]</div>
    </div>
</div>



<!-- 

Following the analysis of the three empirical cases, I also engaged in related publications and open-source contributions.

In addition to the dissertation, I wrote multiple articles, often with PIA project members, and published most of the scripts and data models on GitHub to promote transparency and reusability. 

The two highlighted contributions focus on (1) machine-generated annotations using IIIF and the Web Annotation Data Model and (2) envisioning what a LOUD ecosystem could look like for any institutions interested in deploying those specifications.


 -->



---

![bg opacity:.10](https://iiif.dasch.swiss/0812/3GiQt3LMMgl-ToSOskchDW7.jpx/full/max/0/default.jpg)


# Conclusion

<div style="font-size: 86%;">

- Advocated for LOUD to improve the accessibility and usability of cultural heritage data through collaborative efforts such as IIIF and Linked Art
- Emphasised that these de-facto standards act as a lingua franca, with their design principles serving as common denominators, facilitating interoperability and collaboration across institutions.
- Demonstrated in the PIA project how the implementation of IIIF APIs facilitated participatory practices and data reuse, demonstrating the practical benefits of LOUD.
- Observed that the perception of Linked Data hasn't evolved significantly despite the introduction of LOUD
- Acknowledged shortcomings, such as a greater focus on community practices rather than semantic interoperability, and the need to address limitations such as broad scope and limited appeal to technical audiences.
- Suggested future research, including exploring the benefits of early adopters, fully implementing Linked Art in projects, and encouraging participation from the Global South.

</div>

<!-- 

In conclusion, I emphasized LOUD’s role in improving cultural heritage data accessibility and usability through collaborative standards like IIIF and Linked Art. The PIA project illustrated how LOUD supports participatory practices and data reuse, while JSON-LD enables both accessibility and technical rigor—though it may not significantly shift perceptions of Linked Data, as JSON-LD can also function seamlessly as JSON. Nonetheless, increasing the implementation of Linked Data across institutions remains valuable, with LOUD offering an accessible pathway that doesn’t require full graph-based interpretation.

I acknowledge critiques about balancing community practices with semantic interoperability, noting that this balance reflects current adoption challenges. Future research could address this by expanding engagement with the Global South, adding diverse cultural perspectives and extending LOUD’s reach. Strengthening semantic web integration will also be essential to improve interoperability without compromising accessibility for a broad range of users.

 -->



---



![bg opacity:.17](https://iiif.dasch.swiss/0812/3GiQt3LMMgl-ToSOskchDW7.jpx/full/max/0/default.jpg)
![bg opacity:.17](https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/full/max/0/default.jpg)

# References and Image Credits

### References

<div style="font-size: 55%;">

Cornut, M., Raemy, J. A., & Spiess, F. (2023). Annotations as Knowledge Practices in Image Archives: Application of Linked Open Usable Data and Machine Learning. _Journal on Computing and Cultural Heritage_, 16(4), 1–19. https://doi.org/10.1145/3625301

Felsing, U., Fornaro, P., Frischknecht, M., & Raemy, J. A. (2023). Community and Interoperability at the Core of Sustaining Image Archives. _Digital Humanities in the Nordic and Baltic Countries Publications_, 5(1), 40–54. https://doi.org/10.5617/dhnbpub.10649

Raemy, J. A., & Sanderson, R. (2024). Analysis of the Usability of Automatically Enriched Cultural Heritage Data. In F. Moral-Andrés, E. Merino-Gómez, & P. Reviriego (Eds.), _Decoding Cultural Heritage: A Critical Dissection and Taxonomy of Human Creativity through Digital Tools_ (pp. 69–93). Springer Nature Switzerland. https://doi.org/10.1007/978-3-031-57675-1_4

</div>

### Image Credits

<div style="font-size: 55%;">

These images are part of the [photographic archives of Cultural Anthropology Switzerland](https://archiv.sgv-sstp.ch/), formerly the _Swiss Society for Folklore Studies_, based in Basel, Switzerland. Licence: CC BY-NC 4.0 [![w:60](https://julsraemy.ch/prezi/assets/cc-by-nc.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

- Brunner, Ernst. [Blick auf das Spalentor]. Basel, 1938. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_00115. Alte Bildnummer: AB 15. https://archiv.sgv-sstp.ch/resource/422350 

- Brunner, Ernst. [Ringtanz während der Masüras auf der Alp Sura]. Guarda, 1939. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_08589. Alte Bildnummer: DL 89. https://archiv.sgv-sstp.ch/resource/430824

</div>

<!-- 

Many thanks for your attention. I now look forward to your questions and am ready to engage in a thoughtful discussion.

 -->