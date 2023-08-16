---
marp: true
author: Julien A. Raemy
title: Créer des API ouvertes - les pratiques et le tissu social des communautés IIIF et Linked Art 
description: Cette présentation sur les pratiques des communautés IIIF et Linked Art a été réalisée dans le cadre de la journée LibreABC qui s'est déroulée le 31 août 2023 au Musée d'ethnographie de Genève. 
keywords: API, IIIF, Linked Art, LOUD
image: https://julsraemy.ch/assets/images/portrait-px.png
url: https://doi.org/10.5281/zenodo.8178671
theme: gaia
class: invert
paginate: true
_paginate: false
---

<!-- _class: lead -->

# <!-- fit --> Créer des API ouvertes
## Les pratiques et le tissu social des communautés IIIF et Linked Art
Julien A. Raemy (Digital Humanities Lab, Université de Bâle)
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759) [![Google Scholar](https://img.shields.io/static/v1?label=Google%20Scholar&message=Julien%20A.%20Raemy&color=4285F4&logo=googlescholar)](https://scholar.google.ch/citations?user=pGROUG0AAAAJ&hl) [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=julsraemy&color=181717&logo=github)](https://github.com/julsraemy) [![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@julsraemy@hcommons.social&color=6364FF&logo=mastodon)](https://hcommons.social/@julsraemy)

LibreABC – Journée des logiciels libres en Archives, Bibliothèques et Centres de documentation
Musée d'ethnographie de Genève | 31 août 2023

<!-- Bonjour à toutes et à tous. Je suis doctorant en humanités numériques à l'Université de Bâle et auparavant, j'ai étudié les sciences de l'information à la Haute école de gestion de Genève, donc cela me fait très plaisir d'ouvrir cette journée avec ce keynote qui se base sur mon implication au sein des communautés IIIF et Linked Art et la thèse que je rédige actuellement est basée sur cette thématique.  -->


---

# Linked Open Usable Data for Cultural Heritage
#### Perspectives on Community Practices and Semantic Interoperability
![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/1000,/0/default.jpg)

Thèse de doctorat encadré par : 
- Peter Fornaro (University of Basel)
- Walter Leimgruber (University of Basel)
- Robert Sanderson (Yale University)

<!-- Je réalise mon doctorat sur les données ouvertes, utilisables et liées ou Linked Open Usable Data en me concentrant sur son utilisation dans le domaine du patrimoine culturel et les perspectives que cela offrent en termes de pratiques communautaires et d'interopérabilité sémantique. Ce doctorat se fait dans le cadre d'un projet FNS de quatre ans où nous travaillons sur trois collections photographiques des archives de la société suisse des traditions populaires, les images que vous pouvez apercevoir font partie de la collection Ernst Brunner.  -->

<!-- _footer: "https://phd.julsraemy.ch" -->

---

# Déroulement
![bg right:30%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/1000,/0/default.jpg)

* Préambule : axes d'exploration
* International Image Interoperability Framework (IIIF)
* Linked Art
* IIIF et Linked Art : bref aperçu du fonctionnement des communautés
* LUX : Yale Collections Discovery 

<!-- Je vais démarrer par un préambule qui donnera déjà quelques pistes de réflexion ou des axes d'exploration. Ensuite je vais tout de même vous expliquer ce que sont IIIF et Linked Art, puis un bref aperçu de comment ces communautés fonctionnent. Finalement, je vais brièvement vous présenter un cas concret avec LUX, la plateforme de Yale qui a mis en œuvre les API IIIF et Linked Art -->

---

<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)

# <!-- fit --> Préambule
Axes d'exploration


---
# <!-- fit --> $I$ – Une vision ouverte du Web

> The WWW project merges the techniques of information retrieval and hypertext to make an easy but powerful global information system. The project started with **the philosophy that much academic information should be freely available to anyone**.

<!-- _footer: "Berners-Lee (1991)" -->

<!-- J'aimerais revenir à un événement qui s'est déroulé il y a maintenant plus de trente ans et qu'il est l'avènement du Web, créé non loin d'ici au CERN par Tim Berners-Lee. Dans l'un de ces emails, archivés par Internet Archive, Berners-Lee évoque que le projet du web avait débuté avec l'idée qu'une grande partie des informations académiques devrait être accessible librement à toutes et tous. -->

---
# <!-- fit --> $II$ – Linked Open Usable Data (LOUD)

Principes de conception du LOUD :

* A – La bonne abstraction en fonction du public 
* B – Peu d'obstacles à l'entrée 
* C – Compréhensible par introspection 
* D – Documentation comportant des exemples concrets
* E – Peu d'exceptions, mais de nombreux modèles cohérents

<!-- Le web a évolué mais l'idée d'un web sémantique remonte déjà à la fin des années 1990 avec la spécification du standard de syntaxe RDF (Resource Description Framework) et plus tard avec les principes du Linked Data dans les années 2000. Un constat, c'est que les projets autour du Linked Open Data (LOD) se sont principalement concentrés sur la publication et la consommation de données. LOUD ou « données ouvertes liées et utilisables », est un terme et une démarche qui veut mettre l'accent sur l'utilisabilité.  Une des premières intentions du LOUD est de permettre autant à la communauté scientifique qu’aux développeurs de logiciels d’accéder aux données. Il convient donc de trouver un équilibre qui prenne en compte les besoins en matière d’exhaustivité et de précision des données, qui dépend de la construction ontologique, et les préoccupations pragmatiques qui sont l’évolutivité et la facilitation d’utilisation. Cinq principes ont donc été créés autour du LOUD. -->


<!-- _footer: "Traduction : Raemy (2022). Version orginale : LOUD Design Principles (https://linked.art/loud)" -->

---

# <!-- fit --> $III$ – Patrimoine matériel, immatériel et naturel

> Cultural heritage is, in its broadest sense, both a product and a process, which provides societies with a wealth of  resources  that  are  inherited  from  the  past,  created  in  the  present  and  bestowed  for  the  benefit  of  future  generations.  Most  importantly,  it  includes  not  only  **tangible**,  but  also  **natural**  and  **intangible  heritage**. 

<!-- _footer: "UNESCO. Culture for Development Indicators (2014)" -->

<!-- Je passe maintenant dans un autre axe, autrement dit des principes au contenu même et pour moi il s'agit de définir ce que j'entends par patrimoine culturel, souvent délimités autour des concepts de matérialisation d'un objet ou d'une tradition. Dans un des rapports de l'UNESCO, le patrimoine culturel est compris comme un produit et un processuss comprenant également le patrimoine naturel, ce que je trouve assez pertinent lorsqu'on imagine les standards aidant à la description et à la dissémination des données comme étant agnostiques. -->

---

# <!-- fit --> $IV$ – Interopérabilité : essai de définition

Perspective du W3C (Etemad & Rivoal 2023) synthétisée par Robert Sanderson dans le but de positionner IIIF  à travers le prisme de l'interopérabilité :

> L'interopérabilité est un état dans lequel deux ou plusieurs systèmes technologiques mis au point indépendamment et testés peuvent interagir avec succès en fonction de leur champ d'application grâce à la mise en œuvre de normes convenues. 

<!-- Au sein de la communauté IIIF, nous sommes en train de préparer différents papiers ou rapports dans le cadre d'une action de promotion et de positionnement, notamment pour définir ce que nous entendons par interopérabilité. Et ce qui en ressort c'est que nous nous alignons plus ou moins avec les intentions du W3C, le World Wide Web Consortium, où au moins deux ou plusieurs systèmes ou logiciels doivent comprendre des normes convenues, dans le cas de IIIF, des interfaces de programmation applicatives (API).   -->

---

# <!-- fit --> $V$ – Information sémantique

![bg contain right:45%](https://www.researchgate.net/profile/Luciano-Floridi/publication/257666827/figure/fig2/AS:392780774952979@1470657642732/Floridis-original-information-map-redrawn-based-on-Floridi-2011.png)

> Semantic Information is well-formed, meaningful, and truthful data.

Pour toutes les données $x$, si $x$ est bien formé, significatif et véridique, alors $x$ représente de l'information sémantique :

$
\forall x \, [W(x) \land M(x) \land T(x)] \rightarrow S(x)
$
<!-- _footer: "Floridi (2011)" -->

<!-- Que les systèmes puissent interagir entre eux, c'est une chose, mais il faut également que les données qui y transitent aient un sens et pour la défition de l'information sémantique, je me base sur les travaux de Luciano Floridi qui implique plusieurs éléments pour y parvenir que sont : être bien formé, significatif et véridique. Pour chacun de ces éléments, on peut imaginer plusieurs couches ou niveaux d'abstraction, que ça soit au niveau du format de fichier, des métadonnées associées, du processus du numérisation et les systèmes sous-jacents nécessaires pour parvenir à stocker et disséminer cette donnée. 

J'en ai maintenant terminé avec cette phase exploratoire et je vais vous parler, peut-être enfin, de ce qu'est IIIF et vous donner une définition simplifiée de ce qu'est une interface de programmation applicative ou API. -->

---


<!-- _class: lead -->
![bg 89%](https://julsraemy.ch/prezi/assets/IIIF-logo-stacked.png)

--- 

![bg right:30% width:300px](https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png)

### International Image Interoperability Framework (IIIF)

- Un modèle pour la présentation et annotation d’objets numériques
- Une communauté, qui développe des API partagées, les implémentent dans des logiciels et exposent des contenus interopérables sur le Web



<!-- _footer: "https://iiif.io" -->

<!-- IIIF est une initiative reposant sur une communauté, qui réunit des acteurs clés du milieu académique et du domaine du patrimoine culturel. IIIF définit des API ouvertes et partagées pour normaliser la façon dont les ressources basées sur l'image sont diffusées sur le Web.. La mise en oeuvre de ces API permet aux institutions de mieux utiliser leurs documents numérisés ou nés numériques en leur fournissant, par exemple, des fonctionnalités de zoom profond et progressif, de comparaison, de recherche en texte intégral de textes océrisés ou d'annotation. -->

---


#### Adoption des standards IIIF et membres du consortium (IIIF-C)

&rarr; Principalement des universités, bibliothèques et musées

<!-- _footer: 'https://bit.ly/iiifmap' -->

![bg contain right:66%](https://julsraemy.ch/prezi/assets/iiif-map.png)

<!-- Sur la carte, on peut voir les institutions impliquées au sein de la communauté IIIF, à différents niveaux, autrement dit elles ont implémenté les standards pour disséminer leurs collections ou bien elles ont créés des outils compatibles aux API ou encore elles font partie du consortium - qui a été créé en 2016 pour soutenir l'initiative. On retrouve majoritairement des universités, bibliothèques, musées ainsi que des agrégateurs tels qu'Europeana. Même s'il s'agit d'une initiative internationale, on voit bien les efforts qu'il y a encore à fournir pour qu'il y ait une adoption plus forte en Amérique du Sud, en Afrique, ainsi qu'en Asie.  -->

---

<!-- _class: lead -->
![bg right:40%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19566.jp2/full/1000,/0/default.jpg)

## Pourquoi avons-nous besoin de IIIF ?

---

<!-- _footer: "Toutes les images sont conformes à l'API Image de IIIF, vérifiez [le code source HTML](https://julsraemy.ch/prezi/libreabc2023.html)" -->

![bg opacity:.4](https://images.collections.yale.edu/iiif/2/ycba:4f227f08-7842-46cc-b05a-e3c6a4614cc1/1319,2496,6055,6201/1000,/0/default.jpg)
![bg opacity:.4](https://www.artic.edu/iiif/2/400aafd7-392c-cd87-b8b4-0ff2faedf967/full/1000,/0/default.jpg)
![bg opacity:.4](https://e-codices.ch/loris/fmb%2Ffmb-cb-0600a%2Ffmb-cb-0600a_004.jp2/73,2219,963,1142/1000,/0/default.jpg)


# <!-- fit --> Les images sont des vecteurs fondamentaux d'information

<!--

Pourquoi avons-nous besoin de IIIF ? Les images numériques sont des vecteurs ou supports fondamentaux d'information dans les domaines du patrimoine culturel, des sciences naturelles et au-delà. Elles nous aident à comprendre des processus complexes grâce à la visualisation.

Image 1 : Dort or Dordrecht: The Dort Packet-Boat from Rotterdam Becalmed painted by Joseph Turner (YCBA)
Image 2 : Vision of Saint Gregory, unknown artist, n.d. (Art Institute Chicago)
Image 3 : The Life of Buddha, first book. Cod. Bodmer 600a (Fondation Martin Bodmer, e-codices)

 -->

---


![bg right:45%](https://julsraemy.ch/prezi/assets/silos.png)

# <!-- fit --> Le problème
#### Un mode de silos et de redondance

Historiquement, la diffusion d'images sur le Web a rencontré beaucoup de limites ; difficile, lente, coûteuse, incohérente, verrouillée et cloisonnée.

<!-- Historiquement, la diffusion d'images sur le Web a rencontré beaucoup de limites ; difficile, lente, coûteuse, incohérente, verrouillée et cloisonnée. -->

---

<!-- _class: lead -->
![bg right:40%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19566.jp2/full/1000,/0/default.jpg)

## Quelques cas d'application de IIIF

---

<!-- _footer: "https://purl.stanford.edu/hs631zg4177" -->

![bg contain 80%](https://julsraemy.ch/prezi/assets/iiif_deepzoom.gif)

<!-- IIIF apporte une solution, par exemple pour le zoom profond et progressif. -->

---

<!-- _footer: "https://www.theleidencollection.com/viewer/david-and-uriah/" -->


![bg contain 75%](https://julsraemy.ch/prezi/assets/Leiden_curtain_viewer.gif)

<!-- Pour comparer une ou des images, ici scanné avec différentes méthodes -->

---


<!-- _footer: "https://demos.biblissima.fr/chateauroux/demo/" -->

![bg contain 62%](https://julsraemy.ch/prezi/assets/biblissima-demo.gif)

<!-- Afin de réunier des miniatures et le manuscrit qui sont préservées dans deux institutions différentes -->

---

![bg contain](https://julsraemy.ch/prezi/assets/crowdsourcing-nlw.gif)

<!-- Pour des efforts de crowdsourcing ou production participative comme ici avec la Biliothèque nationale du Pays de Galles qui a utilisé IIIF pour aider à l'identification de personnes, de lieux, de mots-clés ou encore pour enregistrer des souvenirs. -->


---

<!-- _footer: "http://storiiies.cogapp.com/" -->

![bg contain 65%](https://julsraemy.ch/prezi/assets/storiiies.gif)

<!-- IIIF peut être une technologie de médiation pour la mise en récit, comme ici avec un outil qui se nomme Storiiies. -->

---

<!-- _footer: "https://ddmal.music.mcgill.ca/IIIF-AV-player/" -->

![bg contain 72%](https://iiif.io/assets/uploads/ddmal_section.gif)

<!-- Les standards ne sont pas non plus limités aux images en deux dimensions, il y a égalemt la possibilité d'annoter des contenus audiovisuels et d'ici quelques années, la 3D va également être intégré dans la mise à jour du protocole qui se nomme Presentation API. -->
---

<!-- _class: lead -->
![bg right:40%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19566.jp2/full/1000,/0/default.jpg)

# <!-- fit --> Comment fonctionne IIIF ?
Les protocoles IIIF

---

![bg contain](https://julsraemy.ch/prezi/assets/iiif-apis.gif)

<!--Les API fournissent un moyen structuré de connecter des systèmes. Autrement dit, dans une architecture client-serveur, si différents logiciels comprennent une API spécifique, on peut facilement les permuter. -->

---

![bg contain](https://julsraemy.ch/assets/images/silos_to_iiif.gif)

---


![bg right:55% contain](https://julsraemy.ch/prezi/assets/mirador-coreapis.png)

#### Les protocoles IIIF

- **Image API**
- **Presentation API**
- Authorization Flow API
- Change Discovery API
- Content Search API
- Content State API

<!-- _footer: "https://iiif.io/api" -->

<!-- Pour l'instant, 6 API ont été définis par la communauté IIIF, les API Image et Presentation sont les spécifications principales. A savoir que ces différentes API sont complémentaires, peuvent être implémenter de manière indépendante ou en combinaison, autrement dit il y a aussi un effort d'interopérabilité à ce niveau-là et une intégration facilitée. -->

---

![bg contain](https://julsraemy.ch/prezi/assets/iiif-tools.png)

<!-- Beaucoup d'outils, surtout des serveurs d'image et de visionneuses ou de lecteurs web ont été crée par la communauté IIIF élargie, autrement dit ce n'est pas IIIF qui créent la plupart de ces outils mais bien les individus ou institutions qui gravitent autour et parfois il y a aussi des outils qui sont compatibles à l'une ou plusieurs des API et qu'en tant que communauté, nous découvrons plus tard.  -->

---

<!-- _class: lead -->
![bg 58%](https://julsraemy.ch/prezi/assets/Linked_Art_logo.png)

<!-- J'en suis maintenant à Linked Art, troisième point de ce keynote. -->

---


# Linked Art

![bg contain right:42%](https://julsraemy.ch/prezi/assets/la-model.svg)

Linked Art est une communauté et un groupe de travail du CIDOC qui collabore à la définition d'un profil d'application de métadonnées (le modèle) pour décrire les données du patrimoine culturel et les moyens techniques pour interagir avec celles-ci (l'API). 

<!-- _footer: "https://linked.art" -->

<!-- CIDOC : Conseil international pour la documentation du Conseil international des musées -->

---

### Fondamentaux du modèle Linked Art

| Niveau d'abstraction         | Linked Art                      |
|----------------|---------------------------------|
| **Modèle**      | CIDOC Conceptual Reference Model (CRM)                       |
| **Ontologie**   | Encodage RDF de la version CRM 7.1, plus quelques extensions       |
| **Vocabulaire** | Getty (AAT, ULAN, TGN) |
| **Profile**    | Patrimoine culturel, principalement axé sur les objets des musées d'art |
| **API**        | JSON-LD, style d'architecture REST              |

---

![bg 60%](https://julsraemy.ch/prezi/assets/linkedart_50k_feet.svg)

<!-- - Fait correspondre les classes et leurs relations respectives à partir de l’ontologie RDF CIDOC-CRM 7.1
- Sérialisation en JSON-LD
- Vocabulaires Getty (AAT, ULAN, TGN)
- Règles/Patterns
- Intégration facilitée d’objets et services numériques
-->

<!-- _footer: "Raemy et al. (2023), adapté de Sanderson (2018)" -->

---


# <!-- fit --> JavaScript Object Notation for Linked Data (JSON-LD)

JSON-LD : sérialisation JSON basée sur la syntaxe RDF ($s \ \vec{p} \ o$)

```json
{
  "@context": "https://linked.art/ns/v1/linked-art.json", 
  "id": "https://example.org/event/42",
  "type": "Activity",
  "_label": "LibreABC – Journée des logiciels libres en Archives, Bibliothèques et Centres de documentation",
  "classified_as": [
    {
      "id": "http://vocab.getty.edu/aat/300054789", 
      "type": "Type", 
      "_label": "Conference"
    }
  ],
  ...
}
```
<!-- _footer: "Basé sur le modèle `Event` de l'API Linked Art : https://linked.art/api/1.0/endpoint/event/" -->

---

![bg 94%](https://julsraemy.ch/prezi/assets/IIIF-LA.svg)

<!-- _footer: "Intégration de services et ressources IIIF au sein du modèle Linked Art" -->

---

<!-- _class: lead -->
![bg left:33%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)

# <!-- fit --> IIIF et Linked Art 

Bref aperçu du fonctionnement des communautés

---

# Cadre simplifié

* Identification des scénarios ou cas d'utilisation
* Synthèse du cas sur GitHub
* Discussion et intégration ou non du cas d'utilisation au sein des spécifications
  * Outils : Liste de discussion, Slack, Zoom
* Evaluation sur la mise en œuvre

&rarr; Transparence, Collaboration

---

![bg contain](https://julsraemy.ch/prezi/assets/iiif-trc-1.png)
![bg contain](https://julsraemy.ch/prezi/assets/iiif-trc-2.png)

<!-- _footer: "https://iiif.io/community/trc/" -->

---
# Se réunir

![bg contain](https://iiif.io/assets/images/heroes/event_2.webp)
![bg contain](https://julsraemy.ch/prezi/assets/linked-art-call.png)

---

![bg contain](https://julsraemy.ch/prezi/assets/iiif-calendar.png)

---


![bg contain](https://julsraemy.ch/prezi/assets/iiif_community_overview.svg)

---

<!-- _footer: "Raemy (2023)" -->

![bg 77% contain](https://julsraemy.ch/prezi/assets/survey_heatmap.svg)

<!-- 

1) Belonging to a given commnity - before 2011
2) People that have been active prior to 2021 tend to be more active

-->

---

![bg contain](https://julsraemy.ch/prezi/assets/loud-infra-example.jpg)

---

<!-- _class: lead -->
![bg right:40%](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19566.jp2/full/1000,/0/default.jpg)

# <!-- fit --> LUX
Yale Collections Discovery 

---
# LUX

- LUX est un outil de recherche et de découverte rassemblant des données disparates de Yale touchant au patrimoine culturel. 
  - _Yale University Library, Yale Center for British Art, Yale Peabody Museum, Yale University Art Gallery, Archives at Yale_
- La plateforme LUX se caractérise par ses nombreuses connexions, non seulement au sein des unités Yale, mais aussi au-delà, grâce à l'inclusion de sources de données externes (Wikidata, )

<!-- Plateforme reposant sur une série de réalisations progressive -->


<!-- _footer: "https://lux.collections.yale.edu/" -->

---

# Basé sur des standards

- Standards ouverts : Linked Art, IIIF, W3C Activity Streams (tous sérialisés en JSON-LD)
- Technologies communes : Python, JavaScript, Node.js, React, AWS
- Documentation et mise à disposition des chaînes de traitement, modélisation et correspondance des données
- Base de données multimodale orientée documents (NoSQL) : MarkLogic Server

&rarr; Toutes les composantes de LUX, y compris le code spécifique pour MarkLogic, sera rendu open source.

---

![bg contain 80%](https://julsraemy.ch/prezi/assets/lux-demo.gif)


<!-- 

• Briser les silos (techniques) au sein de communautés (IIIF, Linked Art)
• LOUD comme langage commun entre les institutions du patrimoine culturel et les scientifiques
• Ne pas être seulement sur le web, en faire parti
• LOD + API JSON(-LD) pour se faire comprendre de plusieurs publics

-->

<!-- _footer: "[Lien vers une résolution optimisée de la vidéo](https://julsraemy.ch/prezi/assets/lux-demo.webm)"-->

---

![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_00115.jp2/full/1000,/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19553.jp2/full/1000,/0/default.jpg)
![bg opacity:.2](https://sipi.participatory-archives.ch/SGV_12/SGV_12N_19566.jp2/full/1000,/0/default.jpg)

# Bibliographie et crédits photo

- Bibliographie : https://www.zotero.org/groups/5145178/raemy-libreabc/library
- Photographies de la société suisse des traditions populaires (SSTP). Licence : CC BY-NC 4.0
  - [Blick auf das Spalentor]. Basel, 1938. Ernst Brunner. SGV_12N_00115 
  - [Katze auf einer Mauer]. Ort und Datum unbekannt. Ernst Brunner. SGV_12N_19553
  - [Katze]. Ort und Datum unbekannt. Ernst Brunner. SGV_12N_19566

