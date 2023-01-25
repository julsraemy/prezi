---
marp: true
author: Julien A. Raemy
title: The intersection of ARKs and IIIF
description: This presentation is about the intersection of Archival Resource Keys (ARKs) and IIIF resources
keywords: ARKs, IIIF, PID
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://julsraemy.ch/prezi/ark-iiif.html
theme: gaia
class: invert
paginate: true
_paginate: false
---

<!-- _class: lead -->

#  The intersection of Archival Resource Keys (ARKs) and IIIF resources
Julien A. Raemy (University of Basel / DaSCH)
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759) [![Google Scholar](https://img.shields.io/static/v1?label=Google%20Scholar&message=Julien%20A.%20Raemy&color=4285F4&logo=googlescholar)](https://scholar.google.ch/citations?user=pGROUG0AAAAJ&hl) [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=julsraemy&color=181717&logo=github)](https://github.com/julsraemy) [![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@julsraemy@hcommons.social&color=6364FF&logo=mastodon)](https://hcommons.social/@julsraemy)

IIIF Community Call | Wednesday, 25 January 2023

--- 

![bg contain 90%](https://gallica.bnf.fr/iiif/ark:%2F12148%2Fbtv1b8449691v%2Ff29/2131,4016,1467,948/full/0/default.jpg)

---

# Background

- Ben Brumfield, Sara Brumfield, Andy Irving, Rachael Kotarski, Joseph Padfield, Julien A. Raemy, Anne McLaughlin, & Frances Madden. PIDs in IIIF Webinar. Persistent Identifiers in IIIF. 26 October 2021. https://doi.org/10.5281/zenodo.5780055
- RAEMY, Julien Antoine, JUNG, John, and KUNZE, John. Images and the promise of ARKs with IIIF. ARK Alliance. 23 November 2022. https://arks.org/blog/images-and-the-promise-of-arks-with-iiif/

<!-- footer: 'Julien A. Raemy | ARKs and IIIF' -->

---

![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_26488.jp2/full/960,/0/default.jpg)

# ARKs and IIIF

- Open communities that maintain standards/infrastructure
    - [ARK Alliance](https://arks.org/)
    - [IIIF Community](https://iiif.io/community/) / [IIIF Consortium](https://iiif.io/community/consortium/)
- Prevalent in the Cultural Heritage field
- Highly flexible in terms of associated metadata
- No (direct) fees

---

![bg right:45% auto width:95%](https://iiif.io/api/image/3.0/img/transformation.png)

## IIIF Image API

It specifies a RESTful web service that returns an image in response to a standard HTTP(S) request.
- Image Request
- Image Information (JSON-LD)

https://iiif.io/api/image

---

- Base URI
`{scheme}://{server}{/prefix}/{identifier}`

- Image Request
`{$BASE}/{region}/{size}/{rotation}/{quality}.{format}`
https://khirin-i.rekihaku.ac.jp/iiif/nmjh_rekimin_h/13348049_02.tif/376,940,1700,2037/full/0/default.jpg

- Image Information (Metadata)
`{$BASE}/info.json`
https://khirin-i.rekihaku.ac.jp/iiif/nmjh_rekimin_h/13348049_02.tif/info.json

---

![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_26488.jp2/full/960,/0/default.jpg)

### IIIF Image API expressed via identifiers

> [The identifier] may be an ARK, URN, filename, or other identifier.

> The API places no restrictions on the form of the identifiers that a server may use or support. All special characters (e.g. `?` or `#`) must be URI encoded to avoid unpredictable client behaviors. The URI syntax relies upon slash (`/`) separators.

<!-- URI Syntax (part 2) - Identifiers (part 3) -->

---

![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_26488.jp2/full/960,/0/default.jpg)

### IIIF Presentation API expressed via identifiers

> While any HTTP(S) URI is technically acceptable for any of the resources in the API, there are several best practices for designing the URIs for the resources. (...) Once published, they should be as persistent and unchanging as possible.

https://iiif.io/api/presentation/3.0/#61-uri-recommendations


---

![bg contain](https://julsraemy.ch/prezi/assets/ARK_anatomy_IIIF_syntax.png)

---

![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_26488.jp2/full/960,/0/default.jpg)

### Congruence of ARK extensions and IIIF paths

- ARK suffixes (extensions), which are used to refer to sub-objects in a hierarchy and to variant formats, are a natural fit for IIIF, with the Image API parameters expressed as path extensions.
- Because ARKs permit [suffix passthrough](https://n2t.net/e/suffix_passthrough.html), it is possible to register just the top-level resolvable ARK to support an infinite number of resolvable suffix combinations.

---

# Suffix Passthrough

![bg contain 70%](https://n2t.net/e/images/learn_spt_in_action.gif)

<!-- Suffix Passthrough makes every ARK the root of its own "namespace". Any provider-added (or user-added) suffix, which is a common way to form sub-object identifiers, will be passed through to the stored target object. For example, a dataset with X component parts and just this one "ancestor" ARK, -->

---

![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_26488.jp2/full/960,/0/default.jpg)

### ARKs and IIIF in practice

- Many organizations use the ARK and IIIF specifications, sometimes in conjunction. Examples include the BnF, the British Library, Durham University Library, DaSCH, etc.
- The application of ARKs within a IIIF ecosystem can go beyond the Image and Presentation APIs.

---

![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_26488.jp2/full/960,/0/default.jpg)

### Some questions

 - Do we need best practices for using ARKs with IIIF?
 - Reserved URI characters in the IIIF Image API? (cf. [ARK Specification Character Repertoires](https://www.ietf.org/archive/id/draft-kunze-ark-36.html#name-character-repertoires))
 - What about annotations?

---


![bg opacity:.2](https://gallica.bnf.fr/iiif/ark:/12148/btv1b8449691v/f29/2131,4016,1467,948/full/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_26488.jp2/full/960,/0/default.jpg)

### Image Credits
- A rectangular detail region of interest (coordinates 2131,4016,1467,948) requested via [IIIF-compliant path elements](https://gallica.bnf.fr/iiif/ark:/12148/btv1b8449691v/f29/2131,4016,1467,948/full/0/default.jpg) from the folio 29 of: _Grande Bible hitoriale complétée. Maître du livre d'heures de Johanette Ravenelle._ 1395-1401. BnF Département des Manuscrits. Français 159. https://gallica.bnf.fr/ark:/12148/btv1b8449691v
- _[Beton - Brücke]_. Biasca, date unknown. Ernst Brunner. SGV_12N_26488. Swiss Society for Folfklore Studies. CC BY-NC. https://archiv.sgv-sstp.ch/resource/448723