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

I wrote this abstract and carried out this project while Murielle Cornut and I were both PhD candidates in Basel. Murielle is now a Project Collaborator at the Photothek of the Kunsthistorisches Institut in Florenz, Max-Planck-Institut, and the work is very much a collaboration between the two of us.

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

<div style="display: flex; gap: 1.2em; align-items: flex-start;">
<div style="flex: 1; font-size: 72%;">

| Digital Objects | Presentation API 3.0 |
|---|---|
| Album | `Manifest`, `paged`, left-to-right |
| Page | `Canvas`, size of default capture |
| Capture | `painting` `Annotation`, Image API 2.1 or 3.0 |
| States | **`Choice`** of `Image` bodies |
| Context | Web Annotation, Linked Art |

LOUD: the right abstraction for the audience, few barriers to entry

**Why this approach**: few post-digitisation systems can handle layers, so we remodel afterwards

</div>
<div style="flex: 1.3; font-size: 52%;">

```json
{ "@context": "http://iiif.io/api/presentation/3/context.json",
  "id": ".../manifests/SGV_10A_00031_layers.json",
  "type": "Manifest",
  "behavior": ["paged"], "viewingDirection": "left-to-right",
  "items": [ ...,
    { "id": ".../canvas/p5", "type": "Canvas",
      "height": 1759, "width": 2400,
      "items": [{ "type": "AnnotationPage", "items": [{
        "type": "Annotation", "motivation": "painting",
        "body": { "type": "Choice", "items": [
          { "id": ".../full/full/0/default.jpg",
            "type": "Image", "format": "image/jpeg",
            "height": 1759, "width": 2400,
            "label": { "en": ["005"] },
            "service": [{
              "@id": "https://media.memobase.ch/iiif/...",
              "@type": "ImageService2", "profile": "level2" }] },
          { "type": "Image", "height": 2707, "width": 3694,
            "label": { "en": ["005_mit_Schutz"] },
            "service": [{ "type": "ImageService3", ... }] },
          { "label": { "en": ["005_mit_Zusatz"] }, ... },
          { "label": { "en": ["005_mit_Zusatz_mit_Schutz"] }, ... }
        ] },
        "target": ".../canvas/p5" }] }] },
    ... ] }
```

<div style="font-size: 115%;">

Manifest: Presentation API 3.0 | Memobase images: Image API 2.1

</div>

</div>
</div>

<div style="font-size: 60%;">

Built with [iiif-prezi3](https://iiif-prezi.github.io/iiif-prezi3/), the IIIF community's Python library for Presentation API 3.0
[Snydman et al. 2015; Raemy 2024; Raemy & Sanderson 2024]

</div>

<!--
[1:30]

Why did we have to do this at all? Because in many projects, the systems that receive the files after digitisation simply cannot process this kind of layering. They expect one image per page, and the structural information about which capture belongs to which state gets lost along the way.

Our answer was to use IIIF, the International Image Interoperability Framework, which has been developed by a community since 2011, not as a display technology but as a modelling layer. It lets us redo and remodel, after the fact, things that used to be much harder to do. Of course, if you have a good digital asset management system, or another system where such metadata and structural information can be recorded, you can plug that in much more easily. IIIF does not replace it; it gives us a standard way to express that structure.

The mapping is quite intuitive. The album becomes a Manifest, each page a Canvas, and the scans are painted onto the Canvas through annotations. The key piece is the Choice construct: all the captures of one page become alternatives within a single annotation, on a single Canvas. So no separate record for each state, nothing thrown away, and one place to describe the page.

On the right you see the actual Canvas for page 5, slightly abridged: one painting annotation whose body is a Choice of four images. The Canvas takes the size of the default capture, and each image keeps its own. You may notice that the first image comes from an Image API 2.1 service (Memobase) and the others from Image API 3.0: the Choice does not care, and that is precisely the point of interoperability.

Context and enrichment go on top, with Web Annotations and Linked Art. Together with the Presentation API, these are the three specifications that follow the Linked Open Usable Data principles, or LOUD: the right abstraction for the audience, and few barriers to entry.

We did not write the JSON by hand. We built the Manifest with iiif-prezi3, a Python library for the Presentation API 3.0 that is built and maintained by the IIIF community itself. Because it follows the specification, it lets us rely on a standard tool and produce compliant patterns, such as the ones documented in the IIIF Cookbook recipes, rather than an ad hoc format. The Manifest uses a paged layout, read from left to right.
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
Manifest: [julsraemy.ch/hostiiing/manifests/SGV_10A_00031_layers.json](https://julsraemy.ch/hostiiing/manifests/SGV_10A_00031_layers.json) (under reconstruction with [iiif-photoalbum](https://github.com/Participatory-Image-Archives/iiif-photoalbum), republished soon)

</div>

<!--
[2:00]

Let me show you what this looks like in Mirador. (Start the video.)

Here we are on page 5. First I switch on the interleave, "mit Schutz" in German. Now the loose photograph, "mit Zusatz". And now both together. Four states, one page, one Canvas.

Across the album there are three patterns. On the cover, you can switch between its current state and the remnants of the original cord binding. Most pages alternate between the bare page and the page with its interleave. Page 5 is the most complex case, with four alternatives. Simpler surfaces, like the pastedowns, just have a single image. In total, the layers Manifest has 86 Canvases, and 40 of them carry a Choice.

If asked why this is a recording and not live: our former image server is no longer publicly reachable. The Manifests are being regenerated with our iiif-photoalbum tool, with images now coming from Memobase, and they will be republished soon under the same URLs.
-->

---

# More than real, and more fragmented

- **Simultaneity**: states that never coexist in the analogue encounter
- **Ambiguity as structure**: uncertainty is modelled, not resolved
- **Fragmentation**: separate acts of handling (cover: 3662 × 2730 vs 3663 × 2729 px) and of hosting (layers of one page up to 5.2× apart in resolution)
- **Mediation**: the Manifest is a new actor in the album's network [Latour 2005]; the physical encounter keeps its authority [Johnson 2025]

<!--
[1:30]

This brings us to a paradox. The digital album shows more than you could ever see in the reading room: states that never exist side by side when you hold the album in your hands. In that sense it is "more than real".

And the Manifest deliberately does not pick a winner. No state is the authoritative one; the ambiguity is part of the structure.

But this comes at a price: fragmentation. Every state is a separate act of handling. Even the cover was captured at 3662 by 2730 pixels in one state and 3663 by 2729 in the other, simply because the album was moved between shots. And hosting leaves traces too: today, the layers of one page can differ by a factor of 5.2 in resolution, because some come from web derivatives and others from the full-resolution masters. The bulkiness that Stiegler describes does not disappear; it turns into a multitude of images and choices.

From a science and technology studies perspective, this is mediation, not substitution. In Latour's terms, the Manifest is a new actor in the network around the album: the album, the archival record, the scanner, the image server, the viewer and the researcher toggling between states all shape what the album can mean. And as Valerie Johnson reminds us, researchers still seek the physical encounter with personal objects; the material original keeps an authority the surrogate cannot replicate.
-->

---

# A boutique Manifest: the cost of care

![center w:900](https://julsraemy.ch/prezi/assets/euromed2026/iiif-photoalbum-workflow.svg)

- **Proof of concept**: 2 albums, 199 images, 6 Manifests, 2 Collections; generic beyond CAS and PIA
- **Users**: switch states in any IIIF viewer, compare across collections, annotate
- **Takeaway**: digitisation as **interpretive modelling**, not mass reproduction

<div style="font-size: 60%;">

"Boutique" after the Getty: [Bayard Album](https://www.getty.edu/art/collection/object/1040J2) and its [custom Manifest](https://data.getty.edu/media/manifest/bayard-custom)
Tool: [iiif-photoalbum](https://github.com/Participatory-Image-Archives/iiif-photoalbum) [Raemy 2026] | [Cornut et al. 2023; Felsing et al. 2023]

</div>

<!--
[1:45]

We call this a "boutique" Manifest, a term I borrowed from colleagues at the Getty, who made a custom Manifest for their Bayard Album. It is carefully crafted, made for close examination of one complex object. And care has a cost: it took conservators, archivists, anthropologists and technicians working together.

The obvious question is: can this scale to the other 92 albums? Not by hand. So we built a small tool, iiif-photoalbum, and the diagram shows how it splits the work.

On the left, the human part. Curators fill in a simple spreadsheet: one line per image, and images that share a page become the layers of that page. That is where judgement is needed, so that is where people stay.

Everything in the middle is automated and runs on every change. Under the hood it relies on iiif-prezi3, the community library, so the output stays compliant with the specification. The tool finds each image, reads its size, and checks whether the layers of a page actually match in shape and resolution. It then builds three Manifests per album, including the layered one, and validates them: with the official IIIF Presentation API validator, but also by checking that every image really answers. Whatever needs attention goes back to the curators as a build report.

On the right, the result is published under stable URLs, and anyone can open it in any IIIF viewer, compare it with other collections, or annotate it.

This is a proof of concept, and it works: so far two albums, 199 images, six Manifests and two Collections. A layer is flagged when its aspect ratio differs by more than two percent, or its resolution by more than a factor of two.

And it is not tied to our case. The repository is generic: it takes a spreadsheet and images that are already online, on any IIIF image server or as plain JPEG or PNG files, so it can be used for other layered objects and other institutions, well beyond Cultural Anthropology Switzerland and the PIA project. If your digital asset management system already holds the structure, you can export it into that spreadsheet and you are done.

So my takeaway: digitisation is interpretive modelling, not mass reproduction. Thank you very much, I am happy to take your questions.

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
