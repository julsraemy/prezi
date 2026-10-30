---
marp: true
author: Julien A. Raemy and Murielle Cornut
title: Rethinking Photo Album Representation Through IIIF
description: Presentation by Julien A. Raemy and Murielle Cornut at the 11th International Conference on Digital Heritage (EuroMed 2026) in November 2026
keywords: Cultural Anthropology, Digital Materiality, IIIF, Linked Open Usable Data, Semantic Interoperability
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://julsraemy.ch/prezi/euromed2026-photo-album-iiif.html
theme: beam
paginate: true
_paginate: false

---




<div style="text-align: center; font-size: 150%">

## Rethinking Photo Album Representation Through IIIF

</div>

<div style="text-align: center; margin-top: -1.2em;">

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.23762494.svg)](https://doi.org/10.5281/zenodo.23762494)

</div>

<div style="display: flex; gap: 2em; justify-content: center; text-align: center; font-size: 84%">
<div style="flex: 1;">

**Murielle Cornut**
Kunsthistorisches Institut in Florenz
Max Planck Society
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4899-1208&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4899-1208)

</div>
<div style="flex: 1;">

**Julien A. Raemy**
Walter Benjamin Kolleg / Digital Humanities
University of Bern
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759)

</div>
</div>

<div style="text-align: center; font-size: 84%">

11th International Conference on Digital Heritage (EuroMed 2026)
Online | November 2026

</div>

<!--
[0:30]

Thank you, and thank you to the organisers for having me.

My name is Julien Raemy, and I am now at the Walter Benjamin Kolleg, in Digital Humanities, at the University of Bern.

I wrote this abstract based on a project that Murielle Cornut and I carried out while we were both PhD candidates in Basel. Murielle is now a Project Collaborator at the Photothek of the Kunsthistorisches Institut in Florenz, Max-Planck-Institut, and the work is very much a collaboration between the two of us.

My talk revolves around one question: how do we model an object whose pages exist in several material states at once?
-->

---

<!-- header: Cornut & Raemy | Rethinking Photo Album Representation Through IIIF -->
<!-- footer: EuroMed 2026 | 11.2026 | [![w:35 CC BY 4.0](https://julsraemy.ch/prezi/assets/cc-by.svg)](https://creativecommons.org/licenses/by/4.0/) -->

# Album 31, Kreis Family Collection

<div style="display: flex; gap: 1em; align-items: center;">
<div style="flex: 3;">

- **CAS**, Basel: acquired 1991, c. 20,000 photographs (1850 to 1980)
- **93 albums** restored, catalogued, digitised in PIA (2021 to 2025)
- **Album 31**: 1926 to 1928, 28.3 × 38.4 × 3.3 cm, 40 pages with parchment interleaves, 6+ silver gelatin prints each
- **Materiality**: "bulky", restless objects; meaning emerges through form, sequence and use

</div>
<div style="flex: 2;">

![w:440](https://julsraemy.ch/prezi/assets/euromed2026/album31-cover.jpg)

</div>
</div>

<div style="font-size: 60%;">

[Stiegler 2021; Stiegler & Yacavone 2021]
Cover of SGV_10A_00031, Cultural Anthropology Switzerland (CAS), Basel. CC BY-NC 4.0

</div>

<!--
[1:15]

Our case comes from Cultural Anthropology Switzerland in Basel. In 1991 it acquired the collection of the Kreis family, a local family of physicians and printers, and a good example of urban bourgeois culture. That is around 20,000 photographs, and about a quarter of them are arranged in 93 albums.

In our research project PIA, Participatory Knowledge Practices in Analogue and Digital Image Archives, all 93 albums were restored, catalogued and digitised.

The one I will focus on is Album 31. You can see its blue textile cover, with two holes where a cord binding used to be. It opens with a family trip through northern Italy in 1927: Milan, Venice, Pisa, Florence. The later pages follow the youngest son, Walter, on his student trips to Grenoble, Arles, Lyon, Strasbourg and the Valais.

Photo albums are notoriously "bulky" objects, as Stiegler and Yacavone put it, and Stiegler speaks of their "aesthetic, epistemic, and praxeological restlessness". They simply do not read in a straight line.
-->

---

# What a single image cannot say

<div style="display: flex; gap: 1em; align-items: center;">
<div style="flex: 1;">

- Archival logic: **album → page → photograph** ("is part of")
- 197 photographs (SGV_10P_09847 to SGV_10P_10042): numbering ignores the travel chronology
- Narrative and material relations stay **implicit**
- One page, several **states**: **128 captures** for 84 page views (interleaves, loose prints, cord binding)

</div>
<div style="flex: 1;">

![w:540](https://julsraemy.ch/prezi/assets/euromed2026/album31-page5-mirador.png)

</div>
</div>

<!--
[1:30]

In the archive, the album is catalogued with a classic "is part of" logic: the album, then its pages, then the photographs on them. The album gets one identifier, the cover is unit 01, the pages follow, and each of the 197 photographs is linked to its page and to the album.

That is consistent, but a lot stays implicit. The photograph numbers do not follow the travel story, for instance. And the usual digital surrogate gives you one stable image per page.

The problem is that a page is not one thing. Some photographs are loose: one on page 6, two on page 14, one on page 22. The conservators deliberately left them unattached, because nobody could say for sure where they originally belonged. On page 17 you can still see the corners of photographs that are gone. And every page has its parchment interleave, which you can leave down or lift. In numbers: 128 captures for 84 page views, for a single album.

So which of these is "the" page? The screenshot on the right already hints at our answer. Mirador shows the whole spread here, so you see one layer for page 4 and the four states of page 5.
-->

---

# IIIF and LOUD as a modelling layer

<div style="display: flex; gap: 1.4em; align-items: center;">
<div style="flex: 0 0 38%; font-size: 70%;">

| Digital Objects | Presentation API 3.0 |
|---|---|
| Album | `Manifest`, `paged` |
| Page | `Canvas` |
| Capture | `painting` `Annotation` |
| States | **`Choice`** of `Image` |
| Images | Image API 2.1 (Memobase), 3.0 |
| Context | Web Annotation, Linked Art |

</div>
<div style="flex: 1; min-width: 0; font-size: 60%;">

```json
{ "id": ".../manifests/SGV_10A_00031_layers.json",
  "type": "Manifest", "behavior": ["paged"],
  "seeAlso": [{
    "id": ".../objects/SGV_10A_00031.json",
    "type": "Dataset",
    "profile": "https://linked.art/ns/v1/linked-art.json" }],
  "items": [ ...,
    { "id": ".../canvas/p5", "type": "Canvas",
      "items": [{ "type": "AnnotationPage", "items": [{
        "type": "Annotation", "motivation": "painting",
        "body": { "type": "Choice", "items": [
          { "label": { "en": ["005"] }, ... },
          { "label": { "en": ["005_mit_Schutz"] }, ... },
          { "label": { "en": ["005_mit_Zusatz"] }, ... },
          { "label": { "en": ["005_mit_Zusatz_mit_Schutz"] }, ... }
        ] },
        "target": ".../canvas/p5" }] }] },
    ... ] }
```

</div>
</div>

<div style="font-size: 60%;">

**Two-way, cross-API links**: Manifest `seeAlso` → [Linked Art record](https://julsraemy.ch/hostiiing/objects/SGV_10A_00031.json), record `subject_of` → Manifests
**Why this approach**: few post-digitisation systems can handle layers, so we remodel afterwards
Built with [iiif-prezi3](https://iiif-prezi.github.io/iiif-prezi3/) | [Snydman et al. 2015; Raemy 2024; Raemy & Sanderson 2024]

</div>

<!--
[1:30]

Why did we have to do this at all? Most systems that receive the files after digitisation expect one image per page, so the information about which capture belongs to which state gets lost. IIIF lets us remodel this after the fact. With a good digital asset management system that already holds such structure, you could plug it in even more easily.

So we use IIIF not as a display technology, but as a modelling layer. The album becomes a Manifest, each page a Canvas, and the scans are painted onto it through annotations. The key piece is the Choice: all the captures of a page become alternatives within one annotation, on one Canvas. No separate record per state, nothing thrown away.

On the right is the actual Canvas for page 5, abridged: a Choice of four images. The default capture comes from Memobase through Image API 2.1, the others through 3.0. The Choice does not mind; that is interoperability at work.

Context goes on top with the other two LOUD specifications. Web Annotations add knowledge to regions of a page. And since this week, Linked Art is in place too. IIIF says how the album is presented, Linked Art says what the album is. The record, linked at the bottom of the slide, describes the album as a physical object, classified as a photo album with the Getty AAT, produced between 1926 and 1928. The two point to each other: the Manifest links to the record with seeAlso, which you see at the top of the excerpt, and the record links to all three Manifests with subject_of. Two-way links across two different APIs: that is interoperability in practice.

And we did not write this JSON by hand: we used iiif-prezi3, the Python library maintained by the IIIF community, so the output follows the specification.
-->

---

# The `Choice` construct in practice

<div style="text-align: center;">
  <video controls loop style="width: 100%; max-width: 760px; height: auto;">
    <source src="https://julsraemy.ch/prezi/assets/mirador-album-layers.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<div style="font-size: 60%;">

Page 5: four states on one Canvas (bare, `mit_Schutz`, `mit_Zusatz`, `mit_Zusatz_mit_Schutz`). Layers Manifest: 86 Canvases, 40 with a `Choice`
Manifest: [julsraemy.ch/hostiiing/manifests/SGV_10A_00031_layers.json](https://julsraemy.ch/hostiiing/manifests/SGV_10A_00031_layers.json) (published in reduced form; full layers once the CAS files are served)

</div>

<!--
[2:00]

Let me show you what this looks like in Mirador. (Start the video.)

Here we are on page 5. First I switch on the interleave, "mit Schutz" in German. Now the loose photograph, "mit Zusatz". And now both together. Four states, one page, one Canvas.

Across the album there are three patterns. On the cover, you can switch between its current state and the remnants of the original cord binding. Most pages alternate between the bare page and the page with its interleave. Page 5 is the most complex case, with four alternatives. Simpler surfaces, like the pastedowns, just have a single image. In total, the layers Manifest has 86 Canvases, and 40 of them carry a Choice.

If asked why this is a recording and not live: our former image server is no longer publicly reachable. The Manifest is already republished under the same URL in a reduced form, with images from Memobase and an "Under construction" notice. The layers will display again once the CAS files are served.

If asked why 84 page views on slide 3 but 86 Canvases here: the two extra Canvases are the recto and verso of a loose photograph (09861), which the paged view leaves out.
-->

---

# More than real, and more fragmented

- **Simultaneity**: states that never coexist in the analogue encounter
- **Ambiguity as structure**: uncertainty is modelled, not resolved
- **Fragmentation**: separate acts of handling (cover: 3662 × 2730 vs 3663 × 2729 px) and of hosting (page 29: layers 2400 vs 12583 px wide)
- **Mediation**: the Manifest is a new actor in the album's network [Latour 2005]; the physical encounter keeps its authority [Johnson 2025]

<!--
[1:30]

This brings us to a paradox. The digital album shows more than you could ever see in the reading room: states that never coexist when you hold the album. In that sense it is "more than real". And the Manifest does not pick a winner: the ambiguity is part of the structure.

The price is fragmentation. Every state is a separate act of handling: the cover was captured at 3662 by 2730 pixels in one state and 3663 by 2729 in the other, because the album moved between shots. Hosting leaves traces too: on page 29, one layer is currently 2400 pixels wide and the other 12583, because one is a web derivative and the other the master. The bulkiness Stiegler describes does not disappear; it becomes a multitude of images and choices.

From a science and technology studies perspective, this is mediation, not substitution. In Latour's terms, the Manifest is a new actor in the album's network, alongside the archive, the scanner, the image server and the viewer. And as Valerie Johnson reminds us, researchers still seek the physical encounter with personal objects.
-->

---

# A boutique Manifest: the cost of care

![center w:900](https://julsraemy.ch/prezi/assets/euromed2026/iiif-photoalbum-workflow.svg)

- **Proof of concept**: 2 albums, 199 images, 6 Manifests, 2 Collections, 2 Linked Art records; generic beyond CAS and PIA
- **Users**: switch states in any IIIF viewer, compare across collections, annotate
- **Takeaway**: digitisation as **interpretive modelling**, not mass reproduction

<div style="font-size: 60%;">

"Boutique" after the Getty: [Bayard Album](https://www.getty.edu/art/collection/object/1040J2) and its [custom Manifest](https://data.getty.edu/media/manifest/bayard-custom)
Tool: [iiif-photoalbum](https://github.com/Participatory-Image-Archives/iiif-photoalbum) [Raemy 2026] | [Cornut et al. 2023; Felsing et al. 2023]

</div>

<!--
[1:45]

We call this a "boutique" Manifest, a term borrowed from colleagues at the Getty, who made a custom Manifest for their Bayard Album. Care has a cost: it took conservators, archivists, anthropologists and technicians. Can it scale to the other 92 albums? Not by hand. So we built iiif-photoalbum, and the diagram shows how it splits the work in three.

First, the human part: curators fill in a spreadsheet, and images that share a page become its layers. That is where judgement is needed.

Second, the automated part, run on every change and built on iiif-prezi3. It finds each image, reads its size, checks that the layers match, builds three Manifests per album and, optionally, a Linked Art record: more structured data for machines, linked both ways to the Manifests. Then it validates them, with the IIIF validator and by checking that every image answers. What needs attention goes back to the curators as a report.

Third, publication under stable URLs, open in any IIIF viewer.

This is a proof of concept, and it works: two albums, 199 images, six Manifests and two Linked Art records. And it is generic: a spreadsheet and images already online, so other institutions can use it beyond CAS and PIA, for instance from a DAM export.

My takeaway: digitisation is interpretive modelling, not mass reproduction. Thank you, I am happy to take your questions.

If asked about the checks: a layer is flagged when its aspect ratio differs by more than two percent from the default capture, or its resolution by more than a factor of two.

If asked who defines quality: technical validity is defined by the IIIF specification and checked by its validator. Whether a layer is meaningful is a curatorial decision, made by curators together with conservators and researchers.

If asked about long-term preservation: the Manifest points to image services by URI, so every migration means updating identifiers. Our image server moved from SIPI to Cantaloupe but kept its host name so the URIs would keep working. It is now no longer public, so the tool rebuilds the Manifests on another image host without changing their own identifiers, which is what the published URLs rely on. Meanwhile the Manifests carry an "Under construction" notice.

If asked about users: archivists, family members or automated systems such as handwriting recognition or object detection can all add annotations without touching the resource, and competing identifications can coexist.
-->

<!--
Reviewer feedback to keep in mind (EuroMed 2026): originality and impact, user accessibility, quality assessment and validation, scalability to large digitisation workflows, practical benefits for researchers and collection managers.
-->

---

# References

<div style="font-size: 48%;">

Cornut, M., Raemy, J. A., & Spiess, F. (2023). Annotations as Knowledge Practices in Image Archives: Application of Linked Open Usable Data and Machine Learning. *Journal on Computing and Cultural Heritage*, *16*(4), 1-19. https://doi.org/10.1145/3625301

Felsing, U., Fornaro, P., Frischknecht, M., & Raemy, J. A. (2023). Community and Interoperability at the Core of Sustaining Image Archives. *Digital Humanities in the Nordic and Baltic Countries Publications*, *5*(1), 40-54. https://doi.org/10.5617/dhnbpub.10649

Johnson, V. (2025). Exploring the Digital Analogue Archive. In E. Goudarouli & A. Prescott (Eds.), *Archival Materialities in a Digital Age* (pp. 21-39). UCL Press. https://doi.org/10.2307/jj.31510343

Latour, B. (2005). *Reassembling the Social: An Introduction to Actor-Network-Theory*. Oxford University Press. ISBN 978-0-19-925604-4

Raemy, J. A. (2024). *Linked Open Usable Data for Cultural Heritage: Perspectives on Community Practices and Semantic Interoperability* [Doctoral Thesis, University of Basel]. https://hdl.handle.net/20.500.14716/148352

Raemy, J. A. (2026). *iiif-photoalbum* (Version 1.0.0) [Computer software]. Zenodo. https://doi.org/10.5281/zenodo.23794321

Raemy, J. A., & Sanderson, R. (2024). Analysis of the Usability of Automatically Enriched Cultural Heritage Data. In F. Moral-Andrés, E. Merino-Gómez, & P. Reviriego (Eds.), *Decoding Cultural Heritage: A Critical Dissection and Taxonomy of Human Creativity through Digital Tools* (pp. 69-93). Springer Nature Switzerland. https://doi.org/10.1007/978-3-031-57675-1_4

Snydman, S., Sanderson, R., & Cramer, T. (2015). The International Image Interoperability Framework (IIIF): A community & technology approach for web-based images. *Archiving Conference*, *12*, 16-21. https://doi.org/10.2352/issn.2168-3204.2015.12.1.art00005

Stiegler, B. (2021). Was ist ein Fotoalbum. *Fotogeschichte. Beiträge zur Geschichte und Ästhetik der Fotografie*, *41*(161), 5-14.

Stiegler, B., & Yacavone, K. (2021). Fotoalben im 19. Jahrhundert. Editorial. *Fotogeschichte. Beiträge zur Geschichte und Ästhetik der Fotografie*, *41*(161), 3-4.

**Image credits**: Album 31 (SGV_10A_00031), Kreis Family Collection, Cultural Anthropology Switzerland (CAS), Basel. Licence: CC BY-NC 4.0 [![w:60](https://julsraemy.ch/prezi/assets/cc-by-nc.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

</div>
