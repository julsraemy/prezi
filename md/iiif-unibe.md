---
marp: true
author: Julien A. Raemy
title: The International Image Interoperability Framework (IIIF) - community-driven standards to deliver, view and annotate digital objects
description: This presentation is about the International Image Interoperability Framework (IIIF) and was given at the University of Bern in April 2023
keywords: LOUD, IIIF, Web Annotation Data Model, PIA
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://julsraemy.ch/prezi/iiif-unibe.html
theme: gaia
class: invert
paginate: true
_paginate: false
---

<!-- _class: lead -->

# The International Image Interoperability Framework (IIIF)
### Community-driven standards to deliver, view and annotate digital objects
[Julien A. Raemy](https://julsraemy.ch), PhD Candidate in Digital Humanities
DHLab, University of Basel
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759) [![Google Scholar](https://img.shields.io/static/v1?label=Google%20Scholar&message=Julien%20A.%20Raemy&color=4285F4&logo=googlescholar)](https://scholar.google.ch/citations?user=pGROUG0AAAAJ&hl) [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=julsraemy&color=181717&logo=github)](https://github.com/julsraemy) [![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@julsraemy@hcommons.social&color=6364FF&logo=mastodon)](https://hcommons.social/@julsraemy)

Digital Humanities Workshops & Vorträge FS 2023
Universität Bern | 04.04.2023

<!-- This presentation is about Linked Open Usable Data (LOUD) and was created for a Research & Infrastructure Support (RISE) Internl Talk at the University of Basel -->

--- 

![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/1500,/0/default.jpg)

### Linked Open Usable Data for Cultural Heritage
#### <!-- fit --> Perspectives on Semantics and Interoperability

PhD Thesis - https://phd.julsraemy.ch - supervised by: 
- Peter Fornaro (University of Basel)
- Walter Leimgruber (University of Basel)
- Robert Sanderson (Yale University)

<!-- I am doing my PhD in Digital Humanities on Linked Open Usable Data, with a focus on its (potential) use in the Humanities and the perspectives it could bring in terms of semantics and interoperability. My research is grounded as part of the Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA) research project, which aims to develop a Citizen Science platform around three photographic collections of the Swiss Society for Folklore Studies (SSFS).  -->

--- 

# Agenda
![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/1000,/0/default.jpg)

- What is IIIF?
- Core IIIF APIs
- Try it yourself
- Annotation Workflow within the PIA research project

<!-- footer: 'Julien A. Raemy | IIIF - 04.04.2023' -->

---

<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)


# <!-- fit --> What is IIIF?

---
![bg right:30% width:300px](https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png)

# <!-- fit --> International Image Interoperability Framework 
(triple-eye-eff)

- A model for presenting and annotating content
- A global community that develops shared application programming interfaces (APIs), implements them in software, and exposes interoperable content

https://iiif.io

<!-- IIIF is a community-driven initiative, which brings together key players in the academic and CH fields, and has defined open and shared APIs to standardise the way in which image-based resources are delivered on the Web. Implementing the IIIF APIs enables institutions to make better use of their digitised or born-digital material by providing, for instance, deep zooming, comparison, full-text search of OCR objects or annotation capabilities.  -->

---

![bg contain](https://julsraemy.ch/prezi/assets/iiif-map.png)

---

![bg contain](https://julsraemy.ch/prezi/assets/iiif_deepzoom.gif)



---
![bg right:30% width:300px](https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png)

# <!-- fit -->  IIIF Design Principles (1)

1. Scope Design Through Shared Use Cases
2. Select Solutions That Are as Simple as Possible and No Simpler
3. Intelligently Manage Ramping Up
4. Avoid Dependency on Specific Technologies
5. Use Resource Oriented Design
6. Don’t Break Web Caches
7. Follow Linked Data Principles

<!-- The IIIF Design Principles should be used as a guide for ongoing and future work in order to promote consistency across the growing number of IIIF specifications. 

Some of them:

1) IIIF specifications are shaped by shared, documented, and well-understood use cases. Shared understanding promotes interoperability, and the specifications are more likely to be implemented if the results solve real, not speculative, problems. Assessment of use cases is a key factor in the process of determining which features should be included or prioritized.

4) IIIF specifications should avoid placing undue value on one technology or format over another, unless there is a clear benefit and the choice does not pose a significant barrier to entry

-->

---

![bg right:30% width:300px](https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png)

# <!-- fit -->  IIIF Design Principles (2)

8. Design for JSON-LD First
9. Use Existing Standards Where Possible
10. Follow Existing Best Practices
11. Separate Concerns, Loosely Couple APIs
12. Define Success, Not Failure
13. Design for Worldwide Use

[→ IIIF Design Principles](https://iiif.io/api/annex/notes/design_principles/)

---
<!-- _footer: " " -->

![bg contain](https://julsraemy.ch/prezi/assets/iiif_community_overview.svg)

---

![bg right:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/1000,/0/default.jpg)

# IIIF Specifications

- **Image API**
- **Presentation API**
- Authentication API
- Change Discovery API
- Content Search API
- Content State API

_The Image and Presentation APIs are referred to as the core IIIF APIs_

---

<!-- _footer: ' ' -->

![bg auto](https://training.iiif.io/iiif-online-workshop/day-one/img/apis.png)

<!-- The two core specifications are the Image API and the Presentation API. The former is a web service for manipulating an image through a URL and the latter "specifies the information needed to drive a remote viewing experience". -->

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
https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/1000,/0/default.jpg

- Image Information (Metadata)
`{$BASE}/info.json`
https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/info.json


---
![bg right:45% auto width:95%](https://iiif.io/api/assets/images/data-model.png)

## IIIF Presentation API

It is a JSON-LD based web service which provides the necessary information about the object or collection structure and layout.

https://iiif.io/api/presentation


<!-- The purpose of the API is to display descriptive information that is intended for humans and does not aim to provide semantic metadata for search engines -->

---

![bg width:1070px](https://julsraemy.ch/prezi/assets/presentationapi-resources.png)

---

![bg contain](https://julsraemy.ch/assets/images/silos_to_iiif.gif)

---

![bg contain](https://julsraemy.ch/prezi/assets/iiif-ecosystem.png)

---

![bg right:40% width:480px](https://julsraemy.ch/prezi/assets/anno-model.png)

# Web Annotation Data Model 

The Web Annotation Data Model (WADM) derives from the Open Annotation Specification.

https://www.w3.org/TR/annotation-model/

<!-- The Web Annotation Data Model was created alongside a vocabulary and a protocol by a dedicated W3C group that reworked the Open Annotation specification, developed in 2013, "(...) [specifying] an interoperable framework for creating associations between related resources, called annotations, using a methodology that conforms to the Architecture of the World Wide Web". 

Its operating principle is based on the division of an annotation into two distinct parts: the body, which corresponds to the resource on which one seeks to annotate something, and the target, which represents the object being annotated.

We will see an example later on.
 -->

---

![bg right:40% width:480px](https://julsraemy.ch/prezi/assets/anno-model.png)

## WADM Motivations 

_To uderstand the reasons why the Annotation was created, or why the Textual Body was included in the Annotation._

Some of the Motivations: `commenting`, `highlighting`, `identifying`, `tagging`

---


<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)


# <!-- fit --> PIA

---

![bg right:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/1000,/0/default.jpg)

## Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA)

Research project funded by the Swiss National Science Foundation (SNSF) under the Sinergia scheme (2021-2025)

[Project Website](https://about.participatory-archives.ch/) 

---

![bg right:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/1000,/0/default.jpg)

# PIA Teams

- **Cultural Anthropology**: Institute for Cultural Anthropology and European Ethnology, University of Basel
- **Technology**: Digital Humanities Lab, University of Basel
- **Design**: Bern Academy of the Arts, Bern University of Applied Sciences

<!-- PIA is a Sinergia project funded by the Swiss National Science Foundation (SNSF) led by the University of Basel, the Uni, the Bern Academy of the Arts, and the Swiss Society for Folklore Studies. PIA wants to connect the world of data and things in an interdisciplinary manner. 

We explore the phases of the analogue and digital archive from the perspectives of cultural anthropology, technology and design. The common goal of this project is to design a visual interface with machine learning-based tools to make it easy to annotate, contextualize, organize, and link both images and their meta-information, to deliberately encourage the participatory use of archives. -->

---
![bg right:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/1000,/0/default.jpg)

#### Collections of the Swiss Society for Fokflore Studies (SSFS) within PIA

- Cartography - **SGV_05 Atlas der Schweizerischen Volkskunde**
- Vernacular Photography - **SGV_10 Familie Kreis**
- Photojournalism - **SGV_12 Ernst Brunner**

[https://archiv.sgv-sstp.ch](https://archiv.sgv-sstp.ch)


---

<!-- _class: lead -->

# <!-- fit --> PIA goes LOUD
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)

---
<!-- _footer: " " -->

![bg contain](https://julsraemy.ch/prezi/assets/pia_iiif_workflow.jpg)

<!-- IIIF Workflow within PIA -->

---

<!-- _footer: " " -->

![bg contain](https://julsraemy.ch/prezi/assets/pia_iiif_mirador.png)

---

```json
{
  "@context": "http://iiif.io/api/presentation/3/context.json",
  "id": "https://iiif.participatory-archives.ch/annotations/SGV_12N_00001-p1-list.json",
  "type": "AnnotationPage",
  "items": [
    {
      "@context": "http://www.w3.org/ns/anno.jsonld",
      "id": "https://iiif.participatory-archives.ch/annotations/SGV_12N_00001-p1-list/annotation-2800001.json",
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
          "value": "<br><small>Detection score: 0.999616265296936</small>",
          "purpose": "commenting"
        }
      ],
      "target": {
        "source": "https://iiif.participatory-archives.ch/SGV_12N_00001/canvas/p1",
        "selector": {
          "type": "FragmentSelector",
          "conformsTo": "http://www.w3.org/TR/media-frags/",
          "value": "xywh=3225,201,943,4051"
        },
        "dcterms:isPartOf": {
          "type": "Manifest",
          "id": "https://iiif.participatory-archives.ch/SGV_12N_00001/manifest.json"
        }
      }
    },
```
--- 

![bg right:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/1000,/0/default.jpg)

##### Why do we need/want Linked Art at PIA?

_Conveying semantically enriched events and as a benchmark against other collections leveraging this model_

- Event-based model inherited from CIDOC-CRM
- Being part of a community of developers/scholars
- Potential aggregation capabilities
- Additional (LOUD) access point


---

| **LA API Endpoint** | **SSFS Class** | **Relevance to PIA**                                                                              |
|---------------------|----------------|---------------------------------------------------------------------------------------------------|
| Concept             | `sgv:Concept`  | The terms from the [Ernst Brunner Thesaurus](https://vocab.participatory-archives.ch/)            |
| Digital Objects     | `sgv:Object`   | Digital-born resources as well as digital (positive) surrogates that were created from negatives. |
| Events              | `sgv:Event`    | TBD                                                                                               |
| Groups              | `sgv:Agent`    | Differentiate the different Agents                                                                |


---

| **LA API Endpoint**   | **SSFS Class** | **Relevance to PIA**                                                      |
|-----------------------|----------------|---------------------------------------------------------------------------|
| People                | `sgv:Agent`    | Differentiate the different Agents                                        |
| Physical Objects (HMO)     | `sgv:Object`   | "Everything that can easily be held in one's hands"                       |
| Places                | None           | Not as top-level entity. Geonames -> Thesaurus of Geographic Names (TGN)? |
| Provenance Activities | `sgv:Event`    | TBD                                                                       |

---

| **LA API Endpoint** | **SSFS Class**                 | **Relevance to PIA**                                                 |
|---------------------|--------------------------------|----------------------------------------------------------------------|
| Sets                | `sgv:Collection` `sgv:Dataset` | Official collections from the SSFS Archives, User-generated datasets |
| Text                | None                           | Could be used for the Atlas of Swiss Folkflore                       |
| Visual              | None                           | It isn't planned to be leveraged as a top-level entity within PIA.   |

[![GitHub](https://img.shields.io/static/v1?label=GitHub&message=PIA%20Linked%20Art&color=181717&logo=github)](https://github.com/Participatory-Image-Archives/linkedart)

---

<!-- _footer: " " -->

![bg contain](https://raw.githubusercontent.com/Participatory-Image-Archives/linkedart/main/assets/pia_linkedartmodel.svg)

---

![bg right:50%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00001.jp2/full/1000,/0/default.jpg)

## Schwyzer Fasnacht

Black and White Negative modelled as a `DigitalObject`


- https://archiv.sgv-sstp.ch/resource/422236
- https://participatory-archives.ch/s/explore/item/232922

---

<!-- _footer: " " -->

![bg contain](https://linked.art/api/1.0/endpoint/digital_object/digital_properties.png)

---

### Needed properties/patterns for our `DigitalObject`

- `member_of` → Collection (SGV_12) - Pointing a `Set`
- `subject_of` → Web Pages / IIIF Manifest
- `current_owner`→ SSFS Photographic Archives
- `created_by` → Through the digitisation of a negative
- `produced_by` → Production of the negative
- `digitally_shows` → Visual Content
- `identified_by` → Names and Identifiers
- `access_point` → IIIF Image API

---

```json
{
  "@context": "https://linked.art/ns/v1/linked-art.json", 
  "id": "https://linkedart.participatory-archives.ch/digital/12033",
  "type": "DigitalObject",
  "_label": "PIA ID 12033 - [Schwyzer Fasnacht]",
  "classified_as": [
    {
      "id": "http://vocab.getty.edu/aat/300215302", 
      "type": "Type", 
      "_label": "Digital Image"
    }
  ],
  "member_of": [
    {
      "id": "https://linkedart.participatory-archives.ch/set/12",
      "type": "Set",
      "_label": "SGV_12 (Ernst Brunner)",
      "classified_as": [
        {
        "id": "http://vocab.getty.edu/aat/300025976",
        "type": "Type",
        "_label": "Collection"
        }
      ]
    }
  ],
```

<!-- `member_of` → Collection (SGV_12) -->

---

```json
  "subject_of": [
    {
      "type": "LinguisticObject",
      "_label": "SGV Homepage for PIA ID 12033 - [Schwyzer Fasnacht]",
      "digitally_carried_by": [
        {
          "type": "DigitalObject",
          "_label": "SGV Homepage for PIA ID 12033 - [Schwyzer Fasnacht]",
          "format": "text/html",
          "access_point": [
            {
              "id": "https://archiv.sgv-sstp.ch/resource/422236",
              "type": "DigitalObject"
            }
          ],
          "classified_as": [
            {
              "id": "http://vocab.getty.edu/aat/300264578",
              "type": "Type",
              "_label": "Web Page"
            }
          ],
          "identified_by": [
            {
              "type": "Name",
              "content": "SGV Homepage for PIA ID 12033 - [Schwyzer Fasnacht]"
            }
          ]
        }
      ]
    },
```

<!-- `subject_of` → Web Page (SSFS) -->
---



```json
    {
      "type": "LinguisticObject",
      "_label": "IIIF Manifest for PIA ID 12033 - [Schwyzer Fasnacht]",
      "digitally_carried_by": [
        {
          "type": "DigitalObject",
          "_label": "IIIF Manifest for PIA ID 12033 - [Schwyzer Fasnacht]",
          "format": "application/ld+json",
          "conforms_to": [
            {
              "id": "http://iiif.io/api/presentation/3/context.json",
              "type": "InformationObject"
            }
          ],
          "access_point": [
            {
              "id": "https://iiif.participatory-archives.ch/12033/manifest.json",
              "type": "DigitalObject"
            }
          ],
          "identified_by": [
            {
              "type": "Name",
              "content": "IIIF Manifest for PIA ID 12033 - [Schwyzer Fasnacht]"
            }
          ]
        }
      ]
    }
  ],
```

<!-- `subject_of` → IIIF Manifest -->

---


```json
  "current_owner": [
    {
      "id": "https://linkedart.participatory-archives.ch/group/42",
      "type": "Group",
      "_label": "SGV Fotoarchiv",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300343368",
          "type": "Type",
          "_label": "Photo Archives"
        }
      ]
    }
  ],
```
<!-- `current_owner`→ SSFS Photographic Archives -->
---


```json
  "created_by": {
    "type": "Creation",
    "_label": "Digitisation of Photograph",
    "used_specific_object": [
      {
        "type": "HumanMadeObject",
        "_label": "Negative of [Schwyzer Fasnacht]",
        "classified_as": [
          {
            "id": "http://vocab.getty.edu/aat/300128343",
            "type": "Type",
            "_label": "Black and White Negative",
            "classified_as": [
              {
                "id": "http://vocab.getty.edu/aat/300435443",
                "type": "Type",
                "_label": "Type of Work"
              }
            ]
          }
        ],
```
<!-- `created_by` → Through the digitisation of a negative -->

---

```json
        "dimension": [
          {
            "type": "Dimension",
            "classified_as": [
              {
                "id": "http://vocab.getty.edu/aat/300055647",
                "type": "Type",
                "_label": "Width"
              }
            ],
            "value": 6,
            "unit": {
              "id": "http://vocab.getty.edu/aat/300379098",
              "type": "MeasurementUnit",
              "_label": "Centimetres"
            }
          },
          {
            "type": "Dimension",
            "classified_as": [
              {
                "id": "http://vocab.getty.edu/aat/300055644",
                "type": "Type",
                "_label": "Height"
              }
            ],
            "value": 6,
            "unit": {
              "id": "http://vocab.getty.edu/aat/300379098",
              "type": "MeasurementUnit",
              "_label": "Centimetres"
            }
          }
```
<!-- `created_by` → Through the digitisation of a negative -->

---

```json
"produced_by": {
            "type": "Production",
            "timespan": {
              "type": "TimeSpan",
              "identified_by": [
                {
                  "type": "Name",
                  "classified_as": [
                    {
                      "id": "http://vocab.getty.edu/aat/300404669",
                      "type": "Type",
                      "_label": "Display Title"
                    }
                  ],
                  "content": "1937"
                }
              ],
              "begin_of_the_begin": "1937-01-01T00:00:00Z",
              "end_of_the_end": "1937-12-31T23:59:59Z"
            },
            "took_place_at": [
              {
                "id": "https://linkedart.participatory-archives.ch/place/2",
                "type": "Place",
                "_label": "Schwyz"
              }
            ],
            "carried_out_by": [
              {
                "id": "https://linkedart.participatory-archives.ch/person/12345",
                "type": "Person",
                "_label": "Ernst Brunner"
              }
            ]
          },

```

<!-- `produced_by` → Production of the negative -->

---

```json
"digitally_shows": [
    {
      "type": "VisualItem",
      "_label": "Visual Content of Digital Positive of [Schwyzer Fasnacht]",
      "represents_instance_of_type": [
        {
          "id": "http://vocab.getty.edu/aat/300164207",
          "type": "Type",
          "_label": "Carnival"
        }
      ]
    }
  ],
```

---

```json
  "identified_by": [
    {
      "type": "Name",
      "content": "[Schwyzer Fasnacht]",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300404670",
          "type": "Type",
          "_label": "Owner-Assigned Title"
        }
      ],
      "language": [
        {
          "id": "http://vocab.getty.edu/aat/300388344",
          "type": "Language",
          "_label": "German"
        }
      ]
    },
    {
      "type": "Identifier",
      "content": "AA 1",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300417447",
          "type": "Type",
          "_label": "Creator-Assigned Number"
        }
      ]
    },
    {
      "type": "Identifier",
      "content": "SGV_12N_00001",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300312355",
          "type": "Type",
          "_label": "SGV Signature"
        }
      ]
    },
```
<!-- `identified_by` → Names and Identifiers -->

---

```json
"access_point": [
    {
      "id": "https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00001.jp2/full/1000,/0/default.jpg",
      "type": "DigitalObject",
      "_label": "Image in full resolution"
    }
  ],
  "digitally_available_via": [
    {
      "type": "DigitalService",
      "_label": "IIIF Image API",
      "format": "application/ld+json",
      "access_point": [
        {
          "id": "https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00001.jp2/info.json",
          "type": "DigitalObject"
        }
      ],
      "conforms_to": [
        {
          "id": "http://iiif.io/api/image/3/context.json",
          "type": "InformationObject"
        }
      ]
    }
  ]
```
<!-- `access_point` → IIIF Image API -->

---



<!-- _footer: " " -->
<!-- _backgroundColor: white-->

![bg contain](https://raw.githubusercontent.com/Participatory-Image-Archives/linkedart/main/modelling/digital/12033.svg)  


---

<!-- _footer: " " -->

![bg contain](https://julsraemy.ch/prezi/assets/IIIF-LA.png)

<!-- Linked Art and IIIF -->

---

<!-- _footer: " " -->

![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/1000,/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/1000,/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_36937.jp2/full/1000,/0/default.jpg)

### Image Credits
- [Blick auf das Spalentor]. Basel, 1938. Ernst Brunner. SGV_12N_00115 
- [Katze auf einer Mauer]. Ort und Datum unbekannt. Ernst Brunner. SGV_12N_19553
- [Ringtanz während der Masüras auf der Alp Sura]. Guarda, 1939. SGV_12N_08589
- ["Steffenbach-Brücke" der Furka-Bahn: Bau und Erneuern der Brücke]. Kanton Wallis, 1950. Ernst Brunner. SGV_12N_36937

These images are part of the [photographic archives of the Swiss Society for Folklore Studies](https://archiv.sgv-sstp.ch/). Licence: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/legalcode)

