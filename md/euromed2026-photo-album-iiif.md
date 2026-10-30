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
0:20

Thank you to the chair. This is joint work with Murielle Cornut, with equal contribution.

One question: how do we model an object whose pages exist in several material states at once?
-->

---

<!-- header: Cornut & Raemy | Rethinking Photo Album Representation Through IIIF -->
<!-- footer: EuroMed 2026 | 11.2026 | [![w:35 CC BY 4.0](https://julsraemy.ch/prezi/assets/cc-by.svg)](https://creativecommons.org/licenses/by/4.0/) -->

# Album 31, Kreis Family Collection

<div style="display: flex; gap: 1em; align-items: center;">
<div style="flex: 3;">

- **Cultural Anthropology Switzerland (CAS)**, Basel: collection acquired 1991, around 20,000 photographs (1850 to 1980)
- **93 albums** restored, catalogued and digitised in the PIA project (2021 to 2025)
- **Album 31** (SGV_10A_00031): travel album, 1926 to 1928, 40 pages with parchment interleaves, 28.3 × 38.4 × 3.3 cm
- Albums are "bulky" objects that resist linear reading

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
1:15

Kreis Family Collection: a local family of physicians and printers, typical urban bourgeois culture. About a quarter of the 20,000 photographs are organised into 93 albums.

PIA (Participatory Knowledge Practices in Analogue and Digital Image Archives) restored, catalogued and digitised all of them.

Album 31: blue textile cover, two perforations of a former cord binding. Opens with a journey through northern Italy in 1927 (Milan, Venice, Pisa, Florence), later Walter Kreis's student trips (Grenoble, Arles, Lyon, Strasbourg, Valais).

Albums are "bulky" [Stiegler & Yacavone 2021], marked by "aesthetic, epistemic, and praxeological restlessness" [Stiegler 2021].
-->

---

# What a single image cannot say

<div style="display: flex; gap: 1em; align-items: center;">
<div style="flex: 1;">

- Archival logic: **album → page → photograph** ("is part of")
- 197 photographs (SGV_10P_09847 to SGV_10P_10042): numbering ignores the travel chronology
- Narrative and material relations stay **implicit**
- One page, several **states**: with or without interleave, loose photographs present or absent, traces of earlier arrangements

</div>
<div style="flex: 1;">

![w:540](https://julsraemy.ch/prezi/assets/euromed2026/album31-page5-mirador.png)

</div>
</div>

<!--
1:30

Cataloguing: SGV_10A_00031 for the album, _01 for the front cover, pages from _02 onward, then each photograph linked to its page and to the album.

The standard digital surrogate is one stabilised view per page.

Loose photographs on page 6, two on page 14, one on page 22: left unattached on purpose during conservation, because their original placement could not be determined. Page 17 still shows the corner traces of missing photographs.

The screenshot already hints at our answer: Mirador's layers panel shows the whole spread, so one layer for page 4 (a single image) plus the four states of page 5. Which state is "the" page?
-->

---

# IIIF and LOUD as a modelling layer

| Archive | IIIF / LOUD |
|---|---|
| Album | `Manifest` |
| Page | `Canvas` |
| Page capture | painting `Annotation` |
| Alternative material states | **`Choice`** |
| Photographs, context, enrichment | Web Annotation, Linked Art |

LOUD: the right abstraction for the audience, few barriers to entry

<div style="font-size: 60%;">

[Snydman et al. 2015; Raemy 2024; Raemy & Sanderson 2024]

</div>

<!--
1:30

IIIF since 2011, community-driven [Snydman et al. 2015].

The Manifest was built with iiif-prezi3 (IIIF Presentation API 3.0): paged viewing behaviour, left-to-right.

Choice bundles alternative captures as bodies of ONE annotation on ONE Canvas: no separate records per state, no lossy normalisation, one place to harmonise metadata.

Three LOUD specifications: Presentation API 3.0, W3C Web Annotation Data Model, Linked Art [Raemy 2024].
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

Page 5: four states on one Canvas (bare, `mit_Schutz`, `mit_Zusatz`, `mit_Zusatz_mit_Schutz`)
Manifest: [julsraemy.ch/hostiiing/manifests/SGV_10A_00031_layers.json](https://julsraemy.ch/hostiiing/manifests/SGV_10A_00031_layers.json) (under reconstruction with [iiif-photoalbum](https://github.com/Participatory-Image-Archives/iiif-photoalbum), republished soon)

</div>

<!--
2:00

Narrate the video: toggle the interleave (mit_Schutz), then the loose photograph (mit_Zusatz), then both.

Three patterns:
- Front cover: current state versus remnants of the original cord binding.
- Most pages: bare page versus page with its parchment interleave.
- Page 5: four alternatives.

Even-numbered Canvases (structurally simpler surfaces such as pastedowns) carry a single image, no Choice.

If asked why this is a recording and not live: the PIA image server (Cantaloupe, migrated from SIPI) is no longer publicly reachable, so the Manifests are being regenerated with the iiif-photoalbum script, which now takes the images from Memobase, and will be republished soon under the same URLs.
-->

---

# More than real, and more fragmented

- **Simultaneity**: states that never coexist in the analogue encounter
- **Ambiguity as structure**: no single authoritative state per page
- **Fragmentation**: each state is a separate act of handling (cover: 3662 × 2730 versus 3663 × 2729 pixels)
- **Neither is primary**: the Manifest is a new actor in the network around the album

<div style="font-size: 60%;">

[Latour 2005; Johnson 2025]

</div>

<!--
1:30

The paradox of digital surrogacy: we reveal more than is physically accessible, while fragmenting the object.

The pixel differences are artefacts of repositioning the album between shots: the surrogate stays shaped by the material constraints of its production.

"Bulkiness" is not eliminated, it is transformed into a proliferation of images and navigational choices.

Johnson: for personal artefacts, researchers still seek the physical encounter. Latour: the Manifest extends the chain of mediations, it does not replace the album.
-->

---

# A boutique Manifest: the cost of care

![center w:1060](https://julsraemy.ch/prezi/assets/euromed2026/iiif-photoalbum-workflow.svg)

- **Users**: switch states in any IIIF viewer, compare across collections, annotate
- **Takeaway**: digitisation as **interpretive modelling**, not mass reproduction

<div style="font-size: 60%;">

Tool: [iiif-photoalbum](https://github.com/Participatory-Image-Archives/iiif-photoalbum) [Raemy 2026] | [Cornut et al. 2023; Felsing et al. 2023]

</div>

<!--
1:45

"Boutique", a term borrowed from colleagues at the Getty: carefully crafted, purpose-built, for close examination of one materially complex object.

Long-term preservation is technical, institutional and economic: the Manifest references image services by URI, so every migration means updating identifiers.

Collaboration: conservators, archivists, anthropologists and technicians, none of whom could have done it alone.

Users: the Manifest loads in any compliant viewer (Mirador, Universal Viewer). Researchers can juxtapose the Italian travel photographs with vedute from other institutions publishing IIIF. Archivists, family members or automated systems (handwriting recognition, object detection) can layer annotations without altering the resource; competing identifications can coexist.

Identifiers: the image server became Cantaloupe but kept the host name sipi.participatory-archives.ch so that URIs kept resolving; it is no longer public. The Manifests are now rebuilt on another image host without changing their own ids, which is what the published URLs rely on.

Walk through the diagram, left to right.

Human (scalability): a boutique Manifest for each of the 93 albums by hand is not realistic, so the human stays where judgement is needed. Curators fill in a spreadsheet, images.csv: one line per image in album order, and images sharing the same page value become the layers of one Canvas (interleave, loose photograph, cord binding). album.yml holds the title and metadata. new-album.py drafts both files from a list of file names. No code, no pixel sizes to know.

Automated (iiif-photoalbum, built on iiif-prezi3): the build finds each image on the configured image sources (IIIF services or plain JPEG/PNG), reads its size, and checks the layers of each page against the first one: different shape (layer would look stretched), different resolution, missing CORS header. It writes three Manifests per album (individuals, paged, layers with Choice) and a Collection.

Validity (reviewer 1): three checks, because the IIIF Presentation API validator (https://presentation-validator.iiif.io/) only checks schema conformance: the schema, every image and info.json answers, and the Collections are complete. GitHub Actions rebuilds and validates on every push. The IIIF community defines the technical criteria; whether the layers are meaningful is decided by the curators, and the build report sends what needs attention back to them.

Publish: stable URLs, loaded in any IIIF viewer. While the images are being moved, the Manifests carry an "Under construction" notice with their image coverage.

Scalability is an effect of network-building, not its precondition.

Thank you. Questions.

Anticipated question (reviewer 1): who defines quality? Technical validity: the IIIF specification and validator. Meaningful layers: curators, with conservators and researchers.
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
