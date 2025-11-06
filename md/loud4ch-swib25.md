---
marp: true
author: Julien A. Raemy
title: Linked Open Usable Data for Cultural Heritage - Community Building and Semantic Interoperability in Practice
description: Presentation on Linked Open Usable Data (LOUD) given by Julien A. Raemy in the context of the 17th Semantic Web in Libraries Conference (SWIB25) on 18 November 2025. 
keywords: Cultural Heritage, IIIF, Linked Art, Linked Data, LOUD, Community Practices, Semantic Interoperability, Web Annotation
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://julsraemy.ch/prezi/loud4ch-swib25.html
theme: beam
paginate: true
_paginate: false
---


![bg opacity:.15](https://iiif.dasch.swiss/0812/3GiQt3LMMgl-ToSOskchDW7.jpx/full/max/0/default.jpg)


<div style="text-align: center; font-size: 145%">

## Linked Open Usable Data for Cultural Heritage

</div>

<div style="text-align: center;">

### Community Building and Semantic Interoperability in Practice

**Dr. Julien A. Raemy**
Walter Benjamin Kolleg, University of Bern; Swiss Federal Archives
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759) [![Google Scholar](https://img.shields.io/static/v1?label=Google%20Scholar&message=Julien%20A.%20Raemy&color=4285F4&logo=googlescholar)](https://scholar.google.ch/citations?user=pGROUG0AAAAJ&hl) [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=julsraemy&color=181717&logo=github)](https://github.com/julsraemy) [![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@julsraemy@hcommons.social&color=6364FF&logo=mastodon)](https://hcommons.social/@julsraemy)
17th Semantic Web in Libraries Conference (SWIB25) | 18th November 2025

<div style="text-align: center; font-size: 60%">

Extended transcript: https://boris-portal.unibe.ch/handle/20.500.12422/222942

</div>

</div>

<!-- 

Hello everyone,

Thank you for attending this session. I'd like to extend my gratitude to the SWIB25 organizers for the opportunity to present my research.

My presentation today will share key findings from my PhD thesis, which examined how collaborative structures and standardised data, more specially Linked Open Usable Data, can support meaningful exchange and reuse of information in cultural heritage. This work reflects my interest in using web-based and community-driven technologies to transform how we understand, share, and value cultural heritage in an interopable manner.
-->

---

<!-- header: Julien A. Raemy | [![w:35 CC BY 4.0](https://julsraemy.ch/prezi/assets/cc-by.svg)](https://creativecommons.org/licenses/by/4.0/) -->
<!-- footer: Linked Open Usable Data for Cultural Heritage | SWIB25
 -->

 # Context & Background

 <div style="font-size: 80%;">

 ## PhD Thesis in Digital Humanities (2021-2024)

:sparkles: **I defended it exactly one year ago!**  :sparkles: 

 Raemy, J. A. (2024). _Linked Open Usable Data for Cultural Heritage: Perspectives on Community Practices and Semantic Interoperability_ [Doctoral Thesis, University of Basel]. https://hdl.handle.net/20.500.14716/148352

&rarr; HTML version: https://phd.julsraemy.ch/thesis.html

- Mixed methods research guided by Actor-Network Theory (ANT)
- Three empirical studies:
  1. IIIF & Linked Art communities
  2. Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA) research project implementation - https://data.snf.ch/grants/grant/193788
  3. LUX: Yale Collections Discovery - https://lux.collections.yale.edu/


</div>

<!-- 

This research was conducted as part of my PhD at the University of Basel, which I successfully defended last year. The thesis examined Linked Open Usable Data for cultural heritage, with a particular focus on community practices and semantic interoperability.

I employed mixed methods combining quantitative and qualitative approaches, with Actor-Network Theory as the theoretical framework. This allowed me to consider both human and non-human actors in the socio-technical networks of these communities.

Much of my empirical work was conducted within the PIA project - a Swiss National Science Foundation project that provided a laboratory for testing LOUD specifications with photographic archives.

My three empirical studies consisted of examining the communities behind LOUD specifications, implementing these specifications in the PIA research project and investigating the LUX platform at Yale as a large-scale institutional implementation. 
-->

---

# Linked Open Usable Data (LOUD) Fundamentals

- Term coined by Robert Sanderson [2018, 2019]
- Makes Linked Data more developer-friendly, leveraging JSON-LD-based standards
- Compliant specifications:
  - International Image Interoperability Framework (IIIF) Presentation API 3.0
  - Web Annotation Data Model
  - Linked Art
- Five design principles to increase usability

https://linked.art/loud/

<!-- 
LOUD was conceptualized by Robert Sanderson, who has been deeply involved in developing and maintaining web standards for cultural heritage. The concept emerged from his extensive experience with both technical implementation and community building.

What makes LOUD distinctive is its focus on making Linked Data more developer-friendly through JSON-LD. It represents a pragmatic approach to the Semantic Web vision, emphasizing usability alongside technical rigor.

The LOUD design principles focus on making data more accessible to software developers - recognizing that these technical practitioners play a crucial role in building the interfaces and services that ultimately make cultural heritage accessible. 
-->

---

# LOUD Ecosystem

 <div style="font-size: 85%;">

## IIIF

* IIIF facilitates the sharing of high-resolution image-based content through a series of specifications. It also makes use of some resource types defined by the Web Annotation Data Model. Semantic metadata can be linked from IIIF resources via `seeAlso`.

## Web Annotation Data Model

* The Web Annotation Data Model provides a standard for creating and sharing annotations across various platforms.

##  Linked Art

* Linked Art provides a model based on CIDOC-CRM and a series of API endpoints (entities) for semantically describing cultural heritage. With this specification, it is possible as well to describe web services such as IIIF.

</div>

<!-- 
The LOUD ecosystem integrates several community-driven technologies:

IIIF provides standardized ways to share high-resolution images and associated metadata. It's widely implemented across libraries, museums, and archives globally.

The Web Annotation Data Model, a W3C standard, enables consistent annotation of digital resources, creating a layer of commentary and enrichment that can span institutional boundaries.

Linked Art, which is based on CIDOC-CRM, provides a more semantically rich description of cultural heritage objects and their relationships. It's particularly focused on art museum collections but has broader applications across cultural heritage.

Together, these technologies form a complementary stack that addresses different aspects of digital cultural heritage representation and access. Their integration demonstrates how community-driven specifications can work together to create a more comprehensive framework.
-->


---

# LOUD-Driven Infrastructure

![center w:1050](https://julsraemy.ch/prezi/assets/loud-infra-example.jpg)

<div style="font-size: 60%;">

[Felsing et al. 2023]

</div>

<!-- 
This diagram illustrates how a LOUD-driven infrastructure could work in practice, showing the integration of various components that support both the creation and consumption of cultural heritage data.

The infrastructure demonstrates how different standards - IIIF for image delivery, Web Annotations for collaborative enhancement, and Linked Art for semantic description - can work together to create a cohesive user experience.
-->

---

![bg opacity:.14](https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## Key Finding 1

Sustainable Development Through Community Engagment

<!-- 
My first key finding focuses on the critical role of sustained community engagement in the development and maintenance of LOUD standards. This finding emerged primarily from my analysis of the IIIF and Linked Art communities, where I discovered patterns of participation and collaboration that have significant implications for the sustainability of these initiatives.
-->

---


# The Social Fabrics of IIIF and Linked Art

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

Finding: Sustained engagement crucial but challenging in volunteer communities

 -->

 
---

![bg opacity:.14](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## Key Finding 2

Inclusion Frameworks and Power Dynamics


---

# Demographic Analysis & Inclusion Challenges

<div style="font-size: 90%;">

## Current state

- GitHub serves as a hub for community involvement, but reflects biases similar to FLOSS communities
- _‘Standards are made by the people who show up, and not nearly enough people are showing up’_ [Cramer 2016] - demographic homogeneity perpetuates biases
- Concentration of decision-making among privileged participants from dominant cultural and economic centres
- Anglo-Saxon approach to consensus building dominates community practices
- Participation in standardisation processes is itself a privilege
- Assumption of universal internet access and digital resources excludes many potential contributors

</div>

<!-- 

My research revealed that GitHub has become the central platform for collaboration in both communities, but this approach inherits many of the same biases found in Free/Libre Open Source Software communities. The data analysis of meeting attendance showed that a small core of participants, primarily from Western academic and cultural institutions, drives most of the decision-making processes.

The statement that "standards are made by the people who show up" became evident in my analysis, as demographic homogeneity among active participants has led to specifications that may not fully address the needs of diverse cultural contexts. The minutes from meetings demonstrated an Anglo-Saxon approach to consensus building characterized by few substantive points and critical turning points.

My findings emphasize that participation in these standardization processes is itself a privilege that requires time, resources, and institutional support that is not universally available. Furthermore, both communities operate with an implicit assumption of universal internet access and digital resources, which creates significant barriers to participation for many potential contributors outside of well-resourced institutions.
-->


---

# Demographic Analysis & Inclusion Challenges

<div style="font-size: 90%;">

## Transforming Inclusion Frameworks in LOUD Communities

- Need for ‘sympoietic collaboration’ (making-with) vs. ‘autopoiesis’ (self-making) approaches [Haraway 2016]
- Critical examination of inclusion frameworks and power structures
- Proactive integration of marginalised perspectives beyond superficial diversity
- Expansion of outreach programs like IIIF Ambassadors
- Questioning who defines terms of inclusion and who benefits from them

</div>

<!-- 
Drawing from Donna Haraway's concept of sympoietic collaboration, my research suggests a shift from self-making to making-with approaches that acknowledge interdependence across diverse communities and perspectives. This requires moving beyond tokenistic inclusion to a fundamental transformation of power dynamics within these communities.

My findings indicate that a critical examination of existing inclusion frameworks is necessary, questioning not just who is absent but also who defines the terms of inclusion and who ultimately benefits from current structures. The current approach often adds diversity to existing power structures without transforming them fundamentally.

Practical steps forward include addressing specific barriers faced by non-English speakers and institutions outside Western academic and technological hubs through translated documentation and regionally sensitive meeting times. The IIIF Ambassadors program represents a positive step that could be expanded to create more pathways for diverse participation.

For lasting change, these communities must move beyond viewing inclusion as a static goal and instead embrace it as an ongoing, reflective process where marginalized communities actively shape policies and practices. This transformation requires sustained commitment rather than one-off initiatives.
-->


---

![bg opacity:.14](https://iiif.dasch.swiss:443/0812/2z2vWczu8BU-kPpspxL78cS.jpx/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## Key Finding 3
Technical Interoperability and Infrastructure Requirements for Democratising Access


---


# PIA as a Laboratory 

![](https://julsraemy.ch/prezi/assets/infrastructure_constellation.svg)

<!-- 


This is a synoptic View of the PIA infrastructure and it showcases its Connection to the DaSCH Service Platform, where the data is preserved for the long-term, and the Cultural Anthroplogy Switzerland Photo Archive Website. 

The use of LOUD standards in this exploratory setting has shown how quickly these APIs can be implemented, while underscoring the importance of a sustainable, long-term strategy for their maintenance. For instance, the IIIF Image API service could be later managed uniquely through the DaSCH infrastructure, reducing backend maintenance demands. However, sustained operational support for the IIIF Presentation and Change Discovery APIs—potentially in a read-only format—would require managing hosting costs post-project.

We also faced challenges balancing detailed representation with scalability - particularly when modeling complex objects like photo albums with multiple layers. And we identified the need for standardised authentication mechanisms to support user-generated annotations.

These technical challenges highlight that while LOUD specifications themselves are open, their implementation often requires significant technical expertise and infrastructure investment, creating potential barriers to adoption for less-resourced institutions.

 -->

---

![center width:1000px](https://julsraemy.ch/prezi/assets/pia_iiif_mirador.png)

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
  <video controls loop style="width: 100%; max-width: 920px; height: auto;">
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

# Yale's LUX 

![center w:640](https://julsraemy.ch/prezi/assets/lux-arch-simple.png)

<div style="font-size: 60%;">

[Raemy & Sanderson 2024]

</div>

<!-- 
Yale's LUX platform represents a large-scale, enterprise implementation of LOUD specifications that integrates collections from multiple Yale institutions - the University Library, Center for British Art, Peabody Museum, and University Art Gallery.

The technical architecture includes a multi-modal database (MarkLogic) capable of handling heterogeneous data from different source systems. It implements comprehensive ETL pipelines that normalize data and apply unified vocabulary control using Getty resources.

LUX provides standardized JSON-LD API endpoints following the Linked Art specification, enabling programmatic access to collection data. It also implements IIIF for image delivery, supporting deep zoom and annotation capabilities.

The architecture includes specialized indexes for faceted navigation and cross-collection search, demonstrating how LOUD specifications can support integrated discovery across previously siloed collections.

This enterprise-scale implementation required significant technical expertise and infrastructure investment, along with sustained institutional commitment. It represents what's possible with sufficient resources, highlighting both the potential and the technical requirements of comprehensive LOUD implementation.
-->

---

![w:1100](https://julsraemy.ch/prezi/assets/lux-vocab-ycba-yuag.png)

<!-- 

Beyond the collaborative vision, LUX’s effectiveness relies on a carefully constructed infrastructure that supports its diverse data connections. For instance, I examined the vocabulary consistency, which plays a critical role in aligning and connecting the metadata across Yale’s collections.

This plot highlights the shared usage patterns of Getty Vocabulary terms between the Yale Center for British Art and the Art Gallery, revealing significant intersections in how both institutions apply controlled terms. 

Reconciliation through the LUX pipeline ensures that terms from controlled vocabularies align seamlessly, allowing the collections to be enriched with consistent metadata across units.


 -->

---


![bg opacity:.10](https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/full/max/0/default.jpg)


# Conclusion

<div style="font-size: 70%;">

## 1. Sustainable Development Through Community Engagement
- Community-led practices provide the socio-technical foundation for ongoing development
- Continuous engagement beyond initial implementation is essential
- Challenge remains in broadening participation beyond core contributors

## 2. Confronting Power Dynamics in Inclusion Frameworks
- Current demographic homogeneity perpetuates biases that marginalise diverse perspectives
- Transformation requires structural changes in governance and participation models
- Voices from the so-called Global South are particularly needed to broaden the impact

## 3. Technical Requirements for Democratising Access
- LOUD specifications foster cross-institutional semantic interoperability through formalised knowledge representation schemas
- Implementation necessitates significant socio-technical infrastructure investment and interdisciplinary expertise
- Sustainable adoption requires models of collegial collaboration that transcend institutional boundaries and establish shared governance frameworks for long-term maintenance



</div>

<!-- 
In conclusion, I would like to point out three critical dimensions of LOUD implementation that must be addressed together for these standards to fulfill their potential.

First, sustainable development requires ongoing community engagement that extends beyond initial specification development. The social fabric of these communities is as important as the technical specifications they produce, and broadening participation remains a key challenge.

Second, confronting power dynamics in inclusion frameworks is essential. The current demographic homogeneity in these communities perpetuates biases and limits perspectives. Meaningful transformation requires structural changes to governance and participation models, particularly incorporating voices from beyond Western academic and cultural institutions.

Third, the technical requirements for democratising access reveal that while LOUD specifications foster cross-institutional semantic interoperability, their implementation requires a delicate balance of technological sophistication and collaborative governance. As demonstrated by the LUX initiative, successful implementation models transcend institutional boundaries, creating collegial and productive collaborations that can serve as exemplars for the broader GLAM sector. The sociotechnical infrastructure necessary for sustainable implementation demands not just technical expertise but also shared governance frameworks that distribute maintenance responsibilities across participating institutions. This collaborative approach, when successful, has the potential to fundamentally transform system development practices across cultural heritage institutions.
-->


---

![bg opacity:.10](https://iiif.dasch.swiss:443/0812/2z2vWczu8BU-kPpspxL78cS.jpx/full/max/0/default.jpg)

# Perspectives

<div style="font-size: 90%;">

- **Quantitative Impact Assessment**: Developing metrics to measure the benefits of LOUD adoption
- **Tiered Implementation Models**: Creating pathways for institutions with varying technical capabilities
- **Global Participation Strategies**: Concrete approaches to increase diversity in specification development
- **Technical Documentation Accessibility**: Creating resources at multiple expertise levels
- **Integration with Adjacent Standards**: Strengthening connections to broader semantic web ecosystem
- **User Experience Research**: Understanding how LOUD impacts end-user discovery and engagement
- **Sustainability Frameworks**: Ensuring long-term maintenance beyond initial implementation

</div>

<!-- 
Looking forward, my research suggests several important directions for future work on LOUD standards and implementations.

We need better methods for quantitative impact assessment - developing metrics that can measure the benefits of LOUD adoption beyond anecdotal evidence. This would help make the case for institutional investment in these technologies.

Tiered implementation models could provide realistic pathways for institutions with varying technical capabilities, ensuring that LOUD benefits extend beyond well-resourced organizations.

More concrete global participation strategies are needed to increase diversity in specification development, moving beyond good intentions to structural changes that enable broader involvement.

Technical documentation should be available at multiple expertise levels, creating on-ramps for newcomers while providing detailed guidance for advanced implementations.

Further integration with adjacent standards would strengthen LOUD's connection to the broader semantic web ecosystem, enhancing interoperability beyond cultural heritage.

User experience research is needed to better understand how LOUD implementations impact end-user discovery and engagement - ultimately, these technologies should serve human needs.

Finally, we need to develop sustainability frameworks that ensure long-term maintenance beyond initial implementation, addressing the challenge of maintaining these complex systems over time.

These future directions would help LOUD fulfill its potential for transforming how we share, discover, and engage with cultural heritage in the digital age.
-->

---


# References

<div style="font-size: 52%;">

Cornut, M., Raemy, J. A., & Spiess, F. (2023). Annotations as Knowledge Practices in Image Archives: Application of Linked Open Usable Data and Machine Learning. _Journal on Computing and Cultural Heritage_, 16(4), 1–19. https://doi.org/10.1145/3625301.

Cramer, D. (2016). _W3C and IDPF: Better Together?._ Medium URL https://medium.com/@dauwhe/w3c-and-idpf-better-together-c92988674444.

Felsing, U., Fornaro, P., Frischknecht, M., & Raemy, J. A. (2023). Community and Interoperability at the Core of Sustaining Image Archives. _Digital Humanities in the Nordic and Baltic Countries Publications_, 5(1), 40–54. https://doi.org/10.5617/dhnbpub.10649.

Haraway, D. J. (2016). _Staying with the trouble: Making kin in the Chthulucene._ Duke University Press. ISBN 978-0-8223-7378-0

Raemy, J. A., & Sanderson, R. (2024). Analysis of the Usability of Automatically Enriched Cultural Heritage Data. In F. Moral-Andrés, E. Merino-Gómez, & P. Reviriego (Eds.), _Decoding Cultural Heritage: A Critical Dissection and Taxonomy of Human Creativity through Digital Tools_ (pp. 69–93). Springer Nature Switzerland. https://doi.org/10.1007/978-3-031-57675-1_4.

Raemy, J. A. (2024). _Linked Open Usable Data for Cultural Heritage: Perspectives on Community Practices and Semantic Interoperability_ [Doctoral Thesis, University of Basel]. https://hdl.handle.net/20.500.14716/148352.

Raemy, J. A. (2025). _Linked Open Usable Data for Cultural Heritage: Community Building and Semantic Interoperability in Practice._ 17th Semantic Web in Libraries Conference (SWIB25). https://boris-portal.unibe.ch/handle/20.500.12422/222942


Sanderson, R. (2018, May 15). _Shout it Out: LOUD._ EuropeanaTech Conference 2018, Rotterdam, the Netherlands. https://www.slideshare.net/Europeana/shout-it-out-loud-by-rob-sanderson-europeanatech-conference-2018.

Sanderson, R. (2019). Keynote: Standards and Communities: Connected People, Consistent Data, Usable Applications. _2019 ACM/IEEE Joint Conference on Digital Libraries (JCDL)_, 28. https://doi.org/10.1109/JCDL.2019.00009.

</div>

---

![bg opacity:.15](https://iiif.dasch.swiss/0812/3GiQt3LMMgl-ToSOskchDW7.jpx/full/max/0/default.jpg)
![bg opacity:.15](https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/full/max/0/default.jpg)
![bg opacity:.15](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)
![bg opacity:.15](https://iiif.dasch.swiss:443/0812/2z2vWczu8BU-kPpspxL78cS.jpx/full/max/0/default.jpg)

# Image Credits

<div style="font-size: 65%;">

These images are part of the [photographic archives of Cultural Anthropology Switzerland](https://archiv.sgv-sstp.ch/), formerly the _Swiss Society for Folklore Studies_, based in Basel, Switzerland. Licence: CC BY-NC 4.0 [![w:60](https://julsraemy.ch/prezi/assets/cc-by-nc.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

- Brunner, Ernst. [Blick auf das Spalentor]. Basel, 1938. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_00115. Alte Bildnummer: AB 15. https://ark.dasch.swiss/ark:/72163/1/0812/6mo320CeXUqvWftaKoKPWws

- Brunner, Ernst. [Ringtanz während der Masüras auf der Alp Sura]. Guarda, 1939. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_08589. Alte Bildnummer: DL 89. https://ark.dasch.swiss/ark:/72163/1/0812/T6ITgGbkVomteyknedSDsA7

- Brunner, Ernst. [Katze auf einer Mauer]. Ort und Datum unbekannt. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_19553. Alte Bildnummer: HV 53. https://ark.dasch.swiss/ark:/72163/1/0812/9Uux7KkDW92sHVgDliEHbwV

- Brunner, Ernst. ["Steffenbach-Brücke" der Furka-Bahn: Bau und Erneuern der Brücke]. Kanton Wallis, 1950. Black and White Negative, 6x6cm. SGV_12 Ernst Brunner. SGV_12N_36937. Alte Bildnummer: PU 37. https://ark.dasch.swiss/ark:/72163/1/0812/ODlFFvdYVc=xa_VyOACHoAf

</div>

<!-- 

Many thanks for your attention. I now look forward to your questions and am ready to engage in a thoughtful discussion.

 -->