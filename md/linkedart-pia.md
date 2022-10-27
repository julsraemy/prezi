---
marp: true
author: Julien A. Raemy
title: Linked Art at PIA
description: This presentation is about the deployment of Linked Art within the PIA research project
keywords: LOUD, Linked Art, IIIF, PIA
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://julsraemy.ch/prezi/linked-art.html
theme: gaia
class: invert
paginate: true
_paginate: false
---

<!-- _class: lead -->

# <!-- fit --> Linked Art at PIA
[Julien A. Raemy](https://julsraemy.ch) | PhD Candidate in DH, University of Basel
02.11.2022 | Linked Art WG Call

<!-- This presentation is about the deployment of Linked Art within the PIA research project  -->

--- 

<!-- footer: 'Julien A. Raemy | Linked Art at PIA' -->

![bg right:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)

# Linked Open Usable Data in the Humanities
#### <!-- fit --> Perspectives on Semantics and Interoperability

(Working title)

[PhD Website](https://phd.julsraemy.ch)

<!-- It is grounded as part of the Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA) research project, which aims to develop a Citizen Science platform around three photographic collections of the Swiss Society for Folklore Studies (SSFS). The theoretical framework of the thesis is situated through and beyond an Actor-Network Theory (ANT) lens.  -->

--- 

# Agenda
![bg right:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)

- Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA)
- PIA goes LOUD
- Linked Art
- Collaboration with the Linked Art II project
- Future Work

--- 

<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)


# <!-- fit --> PIA

---
![bg right:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)

# PIA Teams

- **Cultural Anthropology**: Institute for Cultural Anthropology and European Ethnology, University of Basel
- **Technology**: Digital Humanities Lab, University of Basel
- **Design**: Bern Academy of the Arts, Bern University of Applied Sciences

[Project Website](https://about.participatory-archives.ch/) 

<!-- PIA is a Sinergia project funded by the Swiss National Science Foundation (SNSF) led by the University of Basel, the Uni, the Bern Academy of the Arts, and the Swiss Society for Folklore Studies. PIA wants to connect the world of data and things in an interdisciplinary manner. 

We explore the phases of the analogue and digital archive from the perspectives of cultural anthropology, technology and design. The common goal of this project is to design a visual interface with machine learning-based tools to make it easy to annotate, contextualize, organize, and link both images and their meta-information, to deliberately encourage the participatory use of archives. -->

---
![bg right:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)

#### Collections of the Swiss Society for Fokflore Studies (SSFS) within PIA

- **SGV_05 Atlas der Schweizerischen Volkskunde** - Cartography
- **SGV_10 Familie Kreis** - Vernacular Photography
- **SGV_12 Ernst Brunner** - Photojournalism

[https://archiv.sgv-sstp.ch](https://archiv.sgv-sstp.ch)

---

### PIA User interface

[Prototype based on Omeka S](https://participatory-archives.ch/) 

![bg right:70% contain](https://julsraemy.ch/prezi/assets/pia-omeka.png)

--- 

<!-- _class: lead -->

# <!-- fit --> PIA goes LOUD
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)

---
<!-- _footer: " " -->

![bg contain](https://julsraemy.ch/prezi/assets/pia_iiif_workflow.jpg)

<!-- IIIF Workflow within PIA -->

---

<!-- _footer: " " -->

![bg contain](https://julsraemy.ch/prezi/assets/pia_iiif_mirador.png)

---

### Web Annotation Data Model

![bg auto](https://julsraemy.ch/prezi/assets/anno-model.png)

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

<!-- _class: lead -->

# <!-- fit --> Linked Art
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)

---
![bg right:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)

##### Why do we need/want Linked Art at PIA?

- Data reconciliation
- Event-based model inherited from CIDOC-CRM
- Being part of a community of developers/scholars
- Potential aggregation capabilities
- Additional (LOUD) access point

https://github.com/Participatory-Image-Archives/linkedart


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

---

![bg right:50%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00001.jp2/full/max/0/default.jpg)

## Schwyzer Fasnacht

Black and White Negative modelled as a `DigitalObject`


- https://archiv.sgv-sstp.ch/resource/422236
- https://participatory-archives.ch/s/explore/item/232922

---

### Needed properties/patterns for our `DigitalObject`

- `member_of` → Collection (SGV_12)
- `subject_of` → Web Pages / IIIF Manifest
- `access_point` → IIIF Image API
- `current_owner`→ SSFS Photographic Archives
- `created_by` → Through the digitisation of a negative
- `produced_by` → Production of the negative
- `digitally_shows` → Visual Content
- `identified_by` → Names and Identifiers

---

<!-- _footer: " " -->
<!-- _backgroundColor: white-->

![bg contain](https://raw.githubusercontent.com/Participatory-Image-Archives/linkedart/main/modelling/digital/12033.svg)  


---

<!-- _footer: " " -->

![bg contain](https://julsraemy.ch/prezi/assets/IIIF-LA.png)

<!-- Linked Art and IIIF -->

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
---

```json
"access_point": [
    {
      "id": "https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00001.jp2/full/max/0/default.jpg",
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

---

<!-- _class: lead -->

# Collaboration with the Linked Art II Project
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)

---

### Linked Art II
![bg right:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_36937.jp2/full/max/0/default.jpg)

- Collaboration between PIA and the University of Oxford over the Summer 2022 after completion of a survey (centred on the application of Linked Art)
- Workflow for the transformation of photographic collection data to Linked Art

https://linked.art/community/projects/linkedartii/

<!-- Building upon participation in the Linked Art community, PIA have collaborated with the University of Oxford to create a workflow for transforming cultural heritage collection data into Linked Art that is reusable by the widest possible audience. For the already digitised Family Kreis and Ernst Brunner collections, boilerplates - to echo the IIIF Cookbook recipe process to some extent - have been generated for the different object types to demonstrate the range of Linked Art patterns needed for the workflow.  -->

---
![bg right:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_36937.jp2/full/max/0/default.jpg)

#### Linked Art Collection Data Workflow

Python Scripts:
1. Query an API for collection data
2. Transform collection data to an intermediate JSON data format
3. Transform JSON data to Linked Art

https://github.com/tgra/Linked-Art-Collection-Data-Workflow 

<!-- The process separates out the steps of getting the collection data from source, mapping the data to an intermediate data file, and the final transformation of the collection data to Linked Art.  -->

---

<!-- _footer: " " -->

![bg contain](https://julsraemy.ch/prezi/assets/Linked-Art-Collection-Data-Workflow.png)

<!-- The intermediate JSON data format is transformed to Linked Art with Python functions that define ‘patterns’ for representing different aspects of photographic collection data as Linked Art.  -->

---
### What has been done on the PIA side

- Boilerplates (JSON-LD + in some cases SVG)
    - `DigitalObject`
    - `HumanMadeObject`
    - `Set`
- Preliminary mappings of our several data models (old and new SSFS, PIA)
- Alignment of some terms against the AAT

---

<!-- _class: lead -->

# <!-- fit --> Future Work
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)

---

### Endpoints
![bg right:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_36937.jp2/full/max/0/default.jpg)

1. Deployment of the PIA Linked Art API at https://data.participatory-archives.ch. The PIA JSON API will be deprecated, but still accessible (at https://json.participatory-archives.ch)
2. Workflow Source: PIA JSON API → 
    - Omeka S API (JSON-LD) *or* 
    - DaSCH Service Platform API (JSON-LD, Turtle, RDF/XML)

---

### Templates 
![bg right:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_36937.jp2/full/max/0/default.jpg)

- Updating and creating new boilerplates for each (useful) top-level entity
- Generic vs specific: another workflow? Software?

---

<!-- _footer: " " -->

![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/max/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/max/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_08589.jp2/full/max/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_36937.jp2/full/max/0/default.jpg)

### Image Credits
- [Blick auf das Spalentor]. Basel, 1938. Ernst Brunner. SGV_12N_00115 
- [Katze auf einer Mauer]. Ort und Datum unbekannt. Ernst Brunner. SGV_12N_19553
- [Ringtanz während der Masüras auf der Alp Sura]. Guarda, 1939. SGV_12N_08589
- ["Steffenbach-Brücke" der Furka-Bahn: Bau und Erneuern der Brücke]. Kanton Wallis, 1950. Ernst Brunner. SGV_12N_36937

These images are part of the [photographic archives of the Swiss Society for Folfklore Studies](https://archiv.sgv-sstp.ch/). Licence: [CC-BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/legalcode)

