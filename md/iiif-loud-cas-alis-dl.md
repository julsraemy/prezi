---
marp: true
lang: fr
author: Julien A. Raemy
title: "Des données liées aux données utilisables : IIIF, Linked Art et l'approche LOUD"
description: "Présentation de Julien A. Raemy donnée le 22 janvier 2027 dans le cadre du cours « Interopérabilité sémantique du patrimoine culturel : données liées, identifiants, vocabulaires et IIIF » du CAS ALIS-DL (Universités de Berne et Lausanne). Introduction à l'International Image Interoperability Framework (IIIF), à Linked Art et aux principes Linked Open Usable Data (LOUD)."
keywords: IIIF, Linked Art, LOUD, Linked Open Usable Data, Données liées, Interopérabilité sémantique, Patrimoine culturel, Web Annotation, Copyfraud
image: https://julsraemy.ch/prezi/assets/og/iiif-loud-cas-alis-dl.jpg
url: https://julsraemy.ch/prezi/iiif-loud-cas-alis-dl.html
presented: 2027-01-22
event: "CAS ALIS-DL, Interopérabilité sémantique du patrimoine culturel : données liées, identifiants, vocabulaires et IIIF"
place: 'Bern, Switzerland'
theme: beam
paginate: true
_paginate: false

---

![bg opacity:.15](https://iiif.ptt-archiv.ch/iiif/3/P-38-2-1851-08.jp2/pct:0,0,93,100/2000,/0/default.jpg)

<div style="text-align: center; font-size: 150%">

## Des données liées aux données utilisables

</div>

<div style="text-align: center; font-size: 125%">

### IIIF, Linked Art et l'approche LOUD

</div>

<div style="text-align: center; font-size: 84%">

**Dr. Julien A. Raemy**
docuteam, Université de Berne
[![ORCID](https://img.shields.io/static/v1?label=ORCID&message=0000-0002-4711-5759&color=A6CE39&logo=orcid)](https://orcid.org/0000-0002-4711-5759) [![Google Scholar](https://img.shields.io/static/v1?label=Google%20Scholar&message=Julien%20A.%20Raemy&color=4285F4&logo=googlescholar)](https://scholar.google.ch/citations?user=pGROUG0AAAAJ&hl) [![GitHub](https://img.shields.io/static/v1?label=GitHub&message=julsraemy&color=181717&logo=github)](https://github.com/julsraemy) [![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@julsraemy@hcommons.social&color=6364FF&logo=mastodon)](https://hcommons.social/@julsraemy)

_Interopérabilité sémantique du patrimoine culturel : données liées, identifiants, vocabulaires et IIIF_ | Bloc 2
22.01.2027 | CAS ALIS-DL, Universités de Berne et Lausanne

</div>

<!-- 

Bonjour à toutes et à tous. Après le bloc de Baptiste sur les enjeux et principes de l'interopérabilité sémantique, on passe de la théorie à deux standards communautaires très concrets : IIIF et Linked Art. Le fil conducteur : comment des données « liées » deviennent réellement « utilisables ».

En fond : la carte des courses postales suisses de 1851 (Archives PTT), un réseau de nœuds et de liens avant l'heure. Elle est recadrée à la volée par l'API IIIF Image (pct:0,0,93,100, pour masquer la mire de couleurs) : vous la manipulerez vous-mêmes cet après-midi.

-->

---

<!-- header: Julien A. Raemy | Des données liées aux données utilisables | [![w:35 CC BY 4.0](https://julsraemy.ch/prezi/assets/cc-by.svg)](https://creativecommons.org/licenses/by/4.0/) -->
<!-- footer: CAS ALIS-DL | Bloc 2 | 22.01.2027
 -->

# Déroulement

<div style="font-size: 90%;">

1. **Du lien à l'usage** : pourquoi « liées » ne suffit pas
2. **Pourquoi IIIF ?** : les images au cœur du patrimoine
3. **Comment ça marche** : API Image et API Presentation
4. **LOUD** : cinq principes pour des données utilisables
5. **Linked Art** : décrire le patrimoine, relier les images
6. **Droits et limites** : copyfraud, robots et gouvernance
7. **Cet après-midi** : vers les exercices

</div>

<div style="font-size: 70%;">

Fil rouge : _Sous les étoiles : poésies_ d'**Isabelle Kaiser** (1866-1925), Genève, 1890, sur [e-rara](https://doi.org/10.3931/e-rara-139152)

</div>

<!-- 

Timing indicatif (90 min) : 1) 5 min, 2) 15 min, 3) 20 min, 4) 15 min, 5) 15 min, 6) 12 min, 7) 8 min. En cas de retard, condenser la partie LOUD.

Chaque partie se termine par un renvoi vers un exercice de l'après-midi : on prépare le terrain, on ne fait pas les exercices.

-->

---

 ![bg opacity:.14](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## 1. Du lien à l'usage

---

# Ce que nous a appris le bloc 1

- Des **identifiants** stables (Cool URIs, PID) pour désigner les choses
- Des **vocabulaires contrôlés** et des **autorités** (GND, Wikidata, Getty) pour s'accorder sur leur sens
- Des **données liées** (RDF) pour relier les descriptions entre institutions

## Mais...

- Les approches LOD classiques n'offrent pas de solution standardisée pour les **objets numérisés** et nativement numériques
- La complexité de **SPARQL** et des ontologies crée des barrières pour les utilisateur·rice·s et les développeur·euse·s

> "IIIF is conceptually Linked Open Data. [It] is a visual support for LOD" [Cossu 2020]

<!-- 

Diapo de transition avec le bloc de Baptiste : ne pas refaire RDF ni les 5 étoiles. On rappelle les acquis, puis on pose le problème : les données liées sont puissantes mais souvent peu utilisées, et elles négligent la dimension visuelle du patrimoine. 

Question à la salle (à main levée) : qui a déjà écrit une requête SPARQL ? Qui a déjà zoomé dans un manuscrit numérisé en ligne ? Les deux reposent sur des données structurées, mais l'une est bien plus « utilisable » que l'autre.

-->

---

 ![bg opacity:.14](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## 2. Pourquoi IIIF ?

---

![bg opacity:.3](https://www.artic.edu/iiif/2/a6b1cdb3-accf-a52f-78df-cb39de3be5c6/full/1000,/0/default.jpg)
![bg opacity:.3](https://www.artic.edu/iiif/2/400aafd7-392c-cd87-b8b4-0ff2faedf967/full/1000,/0/default.jpg)
![bg opacity:.3](https://www.artic.edu/iiif/2/1542469c-b658-6e13-5701-dad656f51733/full/1000,/0/default.jpg)

## <!-- fit --> Les images sont des vecteurs d'information fondamentaux

<!-- 

Female Figurine, Chupicuaro, 500/300 av. J.-C. ; Vision of Saint Gregory, artiste inconnu ; Iyo Province: Saijo, Utagawa Hiroshige, 1855. Art Institute of Chicago, toutes servies en IIIF.

-->

---

# Le problème : un monde de silos et de doublons

![center w:800](https://julsraemy.ch/prezi/assets/silos-repos.png)

<!-- 

Chaque institution a longtemps développé sa propre visionneuse, son propre format, ses propres dérivés d'images. Résultat : impossible de comparer deux manuscrits conservés dans deux bibliothèques sans télécharger les images, et les mêmes efforts sont dupliqués partout.

-->

---

# La solution : _Triple-eye-eff_

<div style="display: flex; justify-content: center; align-items: center; gap: 20px; width: 100%;">
    <div style="text-align: center; width: 40%;">
        <img src="https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png" alt="Logo IIIF" style="width: 90%; height: auto;">
        <div style="font-size: 60%;">
            <a href="https://iiif.io" target="_blank">https://iiif.io</a>
        </div>
    </div>
    <div style="text-align: center; width: 60%;">
        <img src="https://iiif.io/assets/images/heroes/event_2.webp" alt="Participant·e·s de la conférence annuelle IIIF à Göttingen (2019)" style="width:90%; max-width:600px; height:auto;">
        <div style="font-size: 60%;"> 
            Conférence annuelle IIIF à Göttingen (2019)
        </div>
    </div>
</div>

<div style="font-size: 80%;">

Une suite de **spécifications ouvertes** et une **communauté mondiale** (bibliothèques, archives, musées, universités, entreprises) depuis 2011 [Snydman et al. 2015]

</div>

---

# Zoom profond dans des images géantes

![center w:800](https://julsraemy.ch/prezi/assets/iiif_deepzoom.gif)

<div style="font-size: 60%;">

近江國絵圖 (Ōmi Kuni-ezu). 1837. Stanford University Libraries. https://purl.stanford.edu/hs631zg4177

</div>

---

# Comparer des ressources

![center](https://julsraemy.ch/prezi/assets/compare.gif)

<div style="font-size: 60%;">

Lettre des Alexander Hamilton Papers (6 septembre 1780), Library of Congress : https://prtd.app/#72f604db-6869-4c08-91ce-7c79502a7f35

</div>

<!-- 

Ce que vous ferez cet après-midi dans Mirador avec les ressources trouvées autour d'Isabelle Kaiser (exercice a).

-->

---

# Réunifier des fonds dispersés

![center w:600](https://julsraemy.ch/prezi/assets/biblissima-demo.gif)

<div style="font-size: 60%;">

Démo de reconstitution virtuelle du manuscrit 5 de Châteauroux. https://demos.biblissima.fr/chateauroux/demo/
Manifest IIIF : https://iiif.biblissima.fr/chateauroux/B360446201_MS0005/manifest.json

</div>

---

# Rechercher dans le texte

![center](https://julsraemy.ch/prezi/assets/content-search.gif)

<div style="font-size: 60%;">

Franks, Kendal; Royal College of Surgeons of England. 1883. _The Germ Theory_. Wellcome Library. https://wellcomecollection.org/works/fcvqahh3
Manifest IIIF : https://iiif.wellcomecollection.org/presentation/v2/b22458876

</div>

---

# Au-delà des images

![center w:700](https://iiif.io/assets/uploads/ddmal_section.gif)

<div style="font-size: 60%;">

Démo IIIF AV Player de l'Université McGill
Manifest IIIF : https://ddmal.ca/IIIF-AV-player/samples/Chopin_Etude_Op_10_No_9_vid/manifest_chopin_etude_vid_multicanvas.json

</div>

---

# IIIF en Suisse

<div style="display: flex; gap: 30px; font-size: 70%;">
<div style="flex: 1;">

### Plateformes mutualisées

- [e-codices](https://www.e-codices.ch/) : manuscrits
- [e-manuscripta](https://www.e-manuscripta.ch/) : manuscrits numérisés
- [e-rara](https://www.e-rara.ch/) : imprimés numérisés
- [e-periodica](https://www.e-periodica.ch/) : revues
- [Fragmentarium](https://fragmentarium.ms/) : fragments médiévaux
- [ZentralGut](https://zentralgut.ch/) : Suisse centrale

</div>
<div style="flex: 1;">

### Archives et recherche

- [Archives fédérales suisses](https://www.recherche.bar.admin.ch/)
- [Archives PTT](https://www.pttarchiv.ch/)
- [DaSCH](https://www.dasch.swiss) (membre du consortium)
- [Université de Berne](https://www.unibe.ch/) (membre du consortium)
- [PARC](https://www.parc-portal.org/) (Université de Bâle)

</div>
<div style="flex: 1;">

### Musées et culture

- [Kunstmuseum Basel](https://iiif.kumu.swiss/)
- [Kunsthaus Zürich](https://digital.kunsthaus.ch/)
- [BodmerLab](https://bodmerlab.unige.ch/) (UNIGE)
- [Plume](https://plume.epfl.ch/) (EPFL)
- [Bilder der Schweiz online](https://www.bilder-der-schweiz.online)

</div>
</div>

<!-- 

Question à la salle : votre institution sert-elle déjà ses images en IIIF ? Si oui, savez-vous où trouver le lien vers le Manifest ?

-->

---

# Notre fil rouge dans une visionneuse

<div style="width:100%; max-width:1000px; height:430px; margin:0 auto;">
  <iframe 
    src="https://julsraemy.ch/prezi/assets/clover.html?iiif-content=https://www.e-rara.ch/i3f/v20/30561631/manifest" 
    title="Clover IIIF : Sous les étoiles d'Isabelle Kaiser" 
    style="width:100%; height:100%; border:none;">
  </iframe>
</div>

<div style="font-size: 50%;">

Kaiser, Isabelle. _Sous les étoiles : poésies_. Genève : H. Georg, 1890. Zentralbibliothek Zürich, CFM K 955. https://doi.org/10.3931/e-rara-139152
Manifest IIIF : https://www.e-rara.ch/i3f/v20/30561631/manifest
Visionneuse : [Clover IIIF](https://clover.iiif.library.northwestern.edu/?iiif-content=https://www.e-rara.ch/i3f/v20/30561631/manifest) (Northwestern University)

</div>

<!-- 

Démo en direct : le même livre, servi par e-rara, mais affiché dans Clover, une visionneuse développée à Northwestern University (Chicago). e-rara n'a rien eu à faire pour que cela fonctionne : c'est tout l'intérêt de l'interopérabilité. Montrer la navigation, le zoom, la table des matières, les métadonnées.

-->

---

# Des visionneuses interchangeables

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; font-size: 55%; text-align: center;">
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/v_mirador.jpg" style="width:100%"><br><a href="https://projectmirador.org/">Mirador</a></div>
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/v_uv.jpg" style="width:100%"><br><a href="https://universalviewer.io/">Universal Viewer</a></div>
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/v_tify.jpg" style="width:100%"><br><a href="https://tify.rocks/">TIFY</a></div>
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/v_curation.jpg" style="width:100%"><br><a href="https://codh.rois.ac.jp/icp/index.html">IIIF Curation Platform</a></div>
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/v_glycerine.jpg" style="width:100%"><br><a href="https://glycerine.io/try-viewer/">Glycerine</a></div>
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/v_clover.jpg" style="width:100%"><br><a href="https://samvera-labs.github.io/clover-iiif/docs/viewer/demo">Clover</a></div>
</div>

<!-- 

Une même ressource, plusieurs visionneuses : l'institution n'est plus prisonnière d'un logiciel, et les utilisateur·rice·s choisissent l'outil adapté à leur usage. → Exercice a (detektIIIF et Mirador).

-->

---

 ![bg opacity:.14](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## 3. Comment ça marche

---

# Les API IIIF

- **API Image** : obtenir des pixels
- **API Presentation** : décrire la structure d'un objet pour l'afficher
- API Authorization Flow : accès restreint
- API Change Discovery : moissonnage
- API Content Search : recherche plein texte
- API Content State : partager une vue précise

<div style="font-size: 60%;">

https://iiif.io/api

</div>

---

![center w:1100](https://julsraemy.ch/prezi/assets/mirador-coreapis.png)

<!-- 

Les deux API principales dans une visionneuse : l'API Image fournit les pixels (zoom, tuiles), l'API Presentation fournit la structure (pages, ordre, libellés, métadonnées).

-->

---

# API Image : une adresse qui dit tout

`{serveur}/{identifiant}/{region}/{size}/{rotation}/{quality}.{format}`

![center w:620](https://iiif.io/api/image/3.0/img/transformation.png)

<div style="font-size: 70%;">

- **Requête d'image** : https://iiif.ptt-archiv.ch/iiif/3/P-38-2-1851-08.jp2/full/max/0/default.jpg
- **Informations sur l'image** (JSON-LD) : https://iiif.ptt-archiv.ch/iiif/3/P-38-2-1851-08.jp2/info.json

</div>

<div style="font-size: 60%;">

https://iiif.io/api/image

</div>

<!-- 

C'est l'image que vous manipulerez dans l'échauffement de cet après-midi (exercice 1). Le info.json annonce 14 296 × 10 614 pixels, le niveau de conformité level2 et des qualités supplémentaires (bitonal, color, gray).

-->

---

# Activité : devinez l'URL

<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; text-align: center; align-items: end;">
<div><img src="https://iiif.ptt-archiv.ch/iiif/3/P-38-2-1851-08.jp2/full/250,/0/default.jpg" style="width:100%"><br><b>A</b></div>
<div><img src="https://iiif.ptt-archiv.ch/iiif/3/P-38-2-1851-08.jp2/pct:0,0,50,50/250,/0/default.jpg" style="width:100%"><br><b>B</b></div>
<div><img src="https://iiif.ptt-archiv.ch/iiif/3/P-38-2-1851-08.jp2/full/,250/90/default.jpg" style="height:250px"><br><b>C</b></div>
<div><img src="https://iiif.ptt-archiv.ch/iiif/3/P-38-2-1851-08.jp2/full/250,/0/gray.jpg" style="width:100%"><br><b>D</b></div>
</div>

<div style="font-size: 80%;">

Quel paramètre a changé pour chaque variante ?
`.../{region}/{size}/{rotation}/{quality}.{format}`

</div>

<!-- 

2 minutes, à deux. Ne pas montrer la solution avant d'avoir recueilli quelques réponses.

-->

---

# Activité : solution

<div style="font-size: 75%;">

| | Paramètre | URL |
|---|---|---|
| **A** | `size` | `.../full/250,/0/default.jpg` |
| **B** | `region` | `.../pct:0,0,50,50/250,/0/default.jpg` |
| **C** | `rotation` | `.../full/,250/90/default.jpg` |
| **D** | `quality` | `.../full/250,/0/gray.jpg` |

</div>

Une **seule image maîtresse**, toutes les variantes **à la demande** : pas de dérivés préparés à l'avance, et chaque détail se cite par une simple URL.

<!-- 

→ Échauffement 1 cet après-midi : vous produirez vous-mêmes ces variantes, avec l'IIIF Image Inspector (https://iiifimage.link/).

-->

---

# Pyramide d'images

<div style="text-align: center;">
  <video controls loop style="width: 100%; max-width: 1000px; height: auto;">
    <source src="https://julsraemy.ch/prezi/assets/schoonman-iiif-image-api-tile-pyramid.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<div style="font-size: 60%;">

https://observablehq.com/@allmaps/tile-pyramid

</div>

<!-- 

La pyramide est une représentation multirésolution de l'image (JPEG2000, TIFF pyramidal). La visionneuse ne demande que les tuiles visibles au niveau de zoom courant : c'est ce qui rend le zoom profond fluide, même pour une image de 150 mégapixels.

-->

---

<div style="width:100%; max-width:1200px; height:600px; margin:0 auto;">
  <iframe 
    src="https://julsraemy.ch/prezi/assets/iiif-image.html?url=https://iiif.ptt-archiv.ch/iiif/3/P-38-2-1851-08.jp2/info.json" 
    title="Zoom profond sur une image des Archives PTT" 
    style="width:100%; height:100%; border:none;">
  </iframe>
</div>

<div style="font-size: 50%;">

Zoom profond à partir du seul `info.json` : https://iiif.ptt-archiv.ch/iiif/3/P-38-2-1851-08.jp2/info.json

</div>

---

# API Presentation

L'API Presentation est un service web en **JSON-LD** qui décrit la **structure** et la **mise en page** d'un objet ou d'une collection, afin de piloter une expérience de consultation à distance.

<div style="font-size: 85%;">

- **Collection** : un regroupement ordonné de Manifests (ou de Collections)
- **Manifest** : un objet (livre, photographie, film, album)
- **Canvas** : une vue (page, face, plan)
- **Range** : une partie structurée (chapitre, article, rubrique)

</div>

<div style="font-size: 60%;">

https://iiif.io/api/presentation

</div>

<!-- 

Le but de l'API Presentation est l'affichage. Les métadonnées qu'elle contient sont destinées aux humains, pas à la description sémantique : c'est le rôle de Linked Art, que l'on verra plus loin.

-->

---

![bg width:800px](https://julsraemy.ch/prezi/assets/presentationapi-resources.png)

---

# Le Manifest d'Isabelle Kaiser

<div style="font-size: 55%;">

```json
{
  "@context": "http://iiif.io/api/presentation/2/context.json",
  "@id": "https://www.e-rara.ch/i3f/v20/30561631/manifest",
  "@type": "sc:Manifest",
  "label": "Sous les étoiles",
  "metadata": [
    { "label": "Titel", "value": "Sous les étoiles : poésies / Isabelle Kaiser" },
    { "label": "Autor, Beteiligte", "value": "Kaiser, Isabelle [1866-1925] " },
    { "label": "Impressum", "value": "Genève : H. Georg, libraire-éditeur, 1890" },
    { "label": "Besitzende Institution", "value": "Zentralbibliothek Zürich, CFM K 955" },
    { "label": "DOI", "value": "https://doi.org/10.3931/e-rara-139152" }
  ],
  "attribution": "e-rara, the platform for digitized rare books from Swiss institutions",
  "seeAlso": {
    "@id": "https://www.e-rara.ch/oai?verb=GetRecord&metadataPrefix=mets&identifier=30561631",
    "format": "application/xml",
    "label": "METS"
  },
  "service": [{ "profile": "http://iiif.io/api/search/1/search", "label": "Search within this manifest" }],
  ...
}
```

</div>

<!-- 

Extrait simplifié. À commenter :
- label et metadata : des paires libellé/valeur pour l'affichage, ici en allemand.
- L'autrice est une chaîne de caractères, pas un lien vers une autorité (GND, Wikidata) : la visionneuse ne « sait » pas qui est Isabelle Kaiser.
- seeAlso renvoie vers une notice METS lisible par une machine.
- Un service de recherche plein texte (Content Search API) est annoncé.
- Aucune propriété license : les conditions d'utilisation ne sont pas exprimées de manière lisible par une machine (on y revient dans la partie droits).

-->

---

# Une table des matières : les Ranges

<div style="font-size: 60%;">

```json
"structures": [
  {
    "@id": "https://www.e-rara.ch/i3f/v20/30561631/range/30561631",
    "@type": "sc:Range",
    "label": "Table of Contents",
    "viewingHint": "top",
    "ranges": [
      "https://www.e-rara.ch/i3f/v20/30561631/range/30594483",
      "https://www.e-rara.ch/i3f/v20/30561631/range/30594484",
      ...
    ]
  },
  {
    "@id": "https://www.e-rara.ch/i3f/v20/30561631/range/30594483",
    "@type": "sc:Range",
    "label": "Vorderdeckel",
    "canvases": [
      "https://www.e-rara.ch/i3f/v20/30561631/canvas/30561632",
      ...
    ]
  },
```

</div>

<!-- 

Le Manifest Kaiser contient 168 Canvases et une structure de Ranges : c'est ce qui permet aux visionneuses d'afficher nativement la table des matières (montrée tout à l'heure dans Clover).

→ Exercice b : e-periodica a fait un autre choix, avec un Manifest par niveau (volume, article). Vous comparerez les deux modélisations.

-->

---

# Version 2 ou version 3 ?

<div style="font-size: 75%;">

| | Presentation API 2.1 | Presentation API 3.0 |
|---|---|---|
| Identifiant / type | `@id`, `@type` (`sc:Manifest`) | `id`, `type` (`Manifest`) |
| Libellés | chaînes simples | multilingues (`{"fr": [...]}`) |
| Droits | `license`, `attribution` | `rights`, `requiredStatement` |
| Contenus | images uniquement | images, **audio, vidéo**, 3D (bientôt) |
| Page web associée | `related` | `homepage` |

</div>

e-rara expose encore la version 2.1. La plupart des visionneuses récentes lisent les deux.

<!-- 

Point utile pour l'après-midi : vous croiserez les deux versions selon les institutions. La version 3 est plus cohérente et internationale (libellés multilingues), et c'est elle qui ouvre IIIF à l'audiovisuel.

-->

---

 ![bg opacity:.14](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## 4. Linked Open Usable Data (LOUD)

---

# Linked Open Usable Data (LOUD)

## Données ouvertes liées et utilisables

* Terme proposé par **Robert Sanderson** [2018, 2019] pour **concrétiser l'intention du web sémantique de manière pragmatique**, en s'appuyant sur des spécifications communautaires fondées sur **JSON-LD**.

* LOUD vise d'abord les **développeur·euse·s**, qui créent les outils et services (visionneuses, portails, outils d'annotation) par lesquels le public accède ensuite aux données.

<div style="font-size: 60%;">

[Sanderson 2018; Raemy 2024]

</div>

<!-- 

Le message central : LOD n'est pas faux, mais il manque souvent la lettre U, pour Usable. Ce sont les développeur·euse·s qui transforment des données en services ; si les données sont trop difficiles à exploiter, rien ne se construit dessus.

-->

---

![bg opacity:.12](https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/full/max/0/default.jpg)

# Cinq principes de conception

<div style="font-size: 85%;">

**A.** La bonne abstraction en fonction du public
**B.** Peu d'obstacles à l'entrée
**C.** Compréhensible par introspection
**D.** Documentation comportant des exemples concrets
**E.** Peu d'exceptions, mais de nombreux modèles cohérents

</div>

<div style="font-size: 60%;">

https://linked.art/loud

</div>

<!-- 

A) Privilégier les cas d'usage plutôt que la rigueur ontologique pure.
B) Les données doivent être faciles à utiliser : plus c'est simple, plus il y a de réutilisation.
C) On doit pouvoir comprendre les données simplement en les lisant, sans documentation externe.
D) Une documentation riche avec des exemples qui fonctionnent.
E) Des motifs récurrents plutôt que des cas particuliers : on apprend une fois, on applique partout.

-->

---

# Les principes en pratique

<div style="font-size: 78%;">

| Principe | Exemple vu aujourd'hui |
|---|---|
| **A.** Abstraction | Le Manifest décrit _ce qu'il faut afficher_, pas toute la sémantique de l'objet |
| **B.** Obstacles | Une image se manipule avec une URL, dans un simple navigateur |
| **C.** Introspection | `"type": "Manifest"`, `"label"`, `"items"` : le JSON se lit presque comme du texte |
| **D.** Documentation | Le [IIIF Cookbook](https://iiif.io/api/cookbook/) : des recettes testées dans plusieurs visionneuses |
| **E.** Cohérence | Collection → Manifest → Canvas → Annotation : le même motif à chaque niveau |

</div>

<!-- 

Relier chaque principe à ce qu'on vient de voir, pour que les principes ne restent pas abstraits. Comparer au passage avec une requête SPARQL sur une ontologie complexe (bloc 1) : même ambition, mais pas le même niveau d'obstacles.

-->

---

![bg center width:45% opacity:0.07](https://json-ld.org/images/json-ld-logo.png) 

# Écosystème LOUD

<div style="font-size: 83%;">

## IIIF

* Partager et afficher des contenus (images, audio, vidéo) au moyen d'API. Les métadonnées sémantiques sont reliées via `seeAlso`.

## Web Annotation Data Model

* Une norme W3C pour produire et partager des annotations (transcriptions, commentaires, étiquettes) d'une plateforme à l'autre.

## Linked Art

* Un profil d'application de CIDOC-CRM et une API pour **décrire sémantiquement** le patrimoine culturel, y compris les services IIIF qui le donnent à voir.

</div>

---

# Annotations : un exemple (PIA)

![center width:750px](https://julsraemy.ch/prezi/assets/pia_iiif_mirador.png)

<div style="font-size: 60%;">

Annotations produites par apprentissage automatique (détection d'objets) et affichées dans Mirador. Projet _Participatory Knowledge Practices in Analogue and Digital Image Archives_ (PIA) [Cornut et al. 2023]

</div>

<!-- 

IIIF lui-même réutilise le Web Annotation Data Model : dans un Manifest, l'image est « peinte » sur le Canvas par une annotation (motivation painting). Les transcriptions, commentaires ou étiquettes générées par l'IA sont d'autres annotations sur le même Canvas.

-->

---

 ![bg opacity:.14](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## 5. Linked Art

---

# Linked Art

<div style="display: flex; justify-content: center; align-items: center; gap: 20px; width: 100%;">
    <div style="text-align: center; width: 40%;">
        <img src="https://julsraemy.ch/prezi/assets/Linked_Art_logo.png" alt="Logo Linked Art" style="width:90%; max-width:600px; height:auto;">
        <div style="font-size: 50%;"> 
            <a href="https://linked.art" target="_blank">https://linked.art</a>
        </div>
    </div>
    <div style="text-align: center; width: 60%;">
        <img src="https://julsraemy.ch/prezi/assets/linked-art-rijks-2023.jpeg" alt="Participant·e·s de la rencontre Linked Art à Amsterdam (2023)" style="width: 90%; height: auto;">
        <div style="font-size: 60%;">
Rencontre éditoriale et événement de diffusion Linked Art à Amsterdam (2023)
        </div>
    </div>
</div>

<!-- 

Linked Art est une communauté (musées, bibliothèques, archives, universités) qui développe un modèle de données partagé pour décrire le patrimoine culturel. Né dans le monde des musées d'art, il s'ouvre aujourd'hui à d'autres types de collections.

-->

---

# Des niveaux d'abstraction

<div style="font-size: 85%;">

| Niveau | Linked Art |
|---|---|
| **Modèle conceptuel** | [CIDOC Conceptual Reference Model](https://www.cidoc-crm.org/) (CRM) |
| **Ontologie** | Encodage RDF de CRM 7.1, avec quelques extensions |
| **Vocabulaires** | [Getty](https://www.getty.edu/research/tools/vocabularies/) (AAT, ULAN, TGN), mais aussi Wikidata, GND, etc. |
| **Profil** | Patrimoine culturel, d'abord les objets des musées d'art |
| **API** | JSON-LD, architecture REST |

</div>

<!-- 

C'est le principe A (la bonne abstraction) appliqué : CIDOC-CRM est très puissant mais très abstrait. Linked Art en sélectionne un sous-ensemble et le rend précis grâce aux vocabulaires contrôlés : le lien direct avec le bloc 1 de Baptiste.

-->

---

# Linked Art vu de 50 000 pieds

![center](https://julsraemy.ch/prezi/assets/linkedart_50k_feet.svg)

<div style="font-size: 60%;">

[Raemy et al. 2023, adapté de Sanderson 2018]

</div>

<!-- 

Les grandes entités : objets, œuvres (contenus), personnes et groupes, lieux, concepts, événements. Toutes reliées entre elles et aux vocabulaires contrôlés.

-->

---

# Relier la description et la présentation

![center](https://julsraemy.ch/prezi/assets/IIIF-LA.svg)

<!-- 

IIIF pour voir, Linked Art pour décrire, et des liens dans les deux sens :
- de Linked Art vers IIIF : un objet numérique (DigitalObject) qui pointe vers le Manifest ;
- de IIIF vers Linked Art : seeAlso dans le Manifest.

→ Exercice d : sur LUX, vous retrouverez la chaîne exacte de propriétés. Ne pas la dévoiler ici.

-->

---

# LUX : Yale Collections Discovery

![bg opacity:.16](https://library.yale.edu/sites/default/files/beinecke720.jpeg)
![bg opacity:.16](https://britishart.yale.edu/sites/default/files/img/overview/2020-06/2016EF11.572_D8.jpg)
![bg opacity:.16](https://th-thumbnailer.cdn-si-edu.com/DZU5wD7JlgYEjvqC0RGXWZ_45EM=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/fa/49/fa494e15-0d54-403d-9c50-3af1c5890780/ypmarexhgreathall001web.jpg)
![bg opacity:.16](https://artgallery.yale.edu/sites/default/files/styles/max_2600x2600/public/2023-03/2023-ag-exb-4581-0003-pub.jpg)

LUX offre un accès unifié, fondé sur des standards ouverts (Linked Art, IIIF), à plus de 41 millions de ressources des musées, archives et bibliothèques de l'Université Yale :

- Yale University Library
- Yale Center for British Art
- Yale Peabody Museum
- Yale University Art Gallery

<div style="font-size: 60%;">

[Metcalfe Hurst 2023; Raemy & Sanderson 2024]
https://lux.collections.yale.edu/

</div>

---

<div style="text-align: center;">
  <video controls loop style="width: 100%; max-width: 900px; height: auto;">
    <source src="https://julsraemy.ch/prezi/assets/lux-demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<div style="font-size: 50%;">

- https://lux.collections.yale.edu/view/object/a6b227ab-ce9c-49af-bcc4-0d2c7b63ced3 (HTML)
- https://lux.collections.yale.edu/data/object/a6b227ab-ce9c-49af-bcc4-0d2c7b63ced3 (JSON-LD Linked Art)

</div>

<!-- 

Le même objet existe en deux représentations : une page pour les humains, des données Linked Art pour les machines. C'est le JSON-LD qui alimente l'interface, y compris les filtres et facettes. → Exercices d (LUX) et e (Wikidata comme hub entre autorités et ressources IIIF).

-->

---

 ![bg opacity:.14](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## 6. Droits et limites

---

# Trois personnes, trois situations juridiques

<div style="font-size: 85%;">

| Personne | Statut | Conséquence |
|---|---|---|
| **Isabelle Kaiser** (1866-1925) | Domaine public | Œuvre réutilisable librement |
| **Jean-Louis Kuffer** ([Q3166832](https://www.wikidata.org/wiki/Q3166832)) | Sous droits | Métadonnées ouvertes, images restreintes |
| **Meret Oppenheim** (1913-1985) | Sous droits jusqu'en 2055 | Œuvres très documentées, peu d'images réutilisables |

</div>

En Suisse, les droits d'auteur s'éteignent **70 ans après la mort** de l'auteur·e.

<!-- 

Ce sont les trois personnes du fil rouge de l'après-midi. L'interopérabilité technique ne dit rien des droits : un Manifest peut être parfaitement lisible et pointer vers des images qu'on n'a pas le droit de réutiliser, ou inversement une œuvre du domaine public peut être entourée de restrictions abusives.

-->

---

# Copyfraud

> Le fait de revendiquer un droit d'auteur sur des contenus qui appartiennent au domaine public.

- Mentions « © Musée X » sur des reproductions fidèles d'œuvres du domaine public
- Conditions d'utilisation qui restreignent une réutilisation que la loi autorise
- Dans l'UE, les reproductions d'œuvres d'art visuel du domaine public ne sont pas protégées, sauf création originale (directive 2019/790, art. 14)

**À vous de juger** : œuvre, statut juridique, mention affichée. Concordent-ils ?

<div style="font-size: 60%;">

[Mazzone 2006]
Exemple : [Carnegie Museum of Art](https://collection.carnegieart.org/objects/21c30ae4-b135-4d61-aec9-7f78286ce114)

</div>

<!-- 

Démo en direct : ouvrir la page Carnegie dans un onglet et laisser la salle relever trois choses : l'œuvre et la date de décès de l'artiste (donc son statut juridique), puis la mention de droits ou les conditions d'utilisation affichées pour l'image. Question : la mention est-elle justifiée ? Que pourrait afficher le musée à la place (Public Domain Mark, CC0) ? Transition vers la diapo suivante : exprimer ces droits de manière lisible par une machine.

Le copyfraud n'est pas toujours intentionnel : il vient souvent de mentions génériques appliquées à toute une collection, sans distinguer ce qui est sous droits de ce qui ne l'est pas.

En Suisse, l'art. 2 al. 3bis LDA (révision de 2020) protège les photographies d'objets tridimensionnels même sans caractère individuel, mais pas les reproductions d'objets en deux dimensions comme les pages d'un livre ou une peinture.

-->

---

# Des droits lisibles par une machine

<div style="font-size: 70%;">

```json
"rights": "http://creativecommons.org/publicdomain/mark/1.0/",
"requiredStatement": {
  "label": { "fr": [ "Attribution" ] },
  "value": { "fr": [ "Zentralbibliothek Zürich, CFM K 955, via e-rara" ] }
}
```

</div>

- `rights` (API Presentation 3) : un URI [Creative Commons](https://creativecommons.org/) ou [RightsStatements.org](https://rightsstatements.org/)
- `requiredStatement` : le texte à afficher obligatoirement
- Le Manifest Kaiser **n'exprime pas** ses conditions d'utilisation de manière lisible par une machine

<!-- 

Exemple fictif de ce que pourrait contenir le Manifest Kaiser en version 3. Une visionneuse ou un agrégateur peut alors afficher automatiquement le bon logo et filtrer sur les ressources réutilisables. Sans cette information, la personne qui réutilise doit aller lire les conditions sur le site.

-->

---

# Quand la protection contre les robots casse l'interopérabilité

- Une plateforme publie des Manifests IIIF pour ses journaux du domaine public...
- ...mais un **défi anti-robots** (p. ex. Cloudflare) exige un navigateur qui exécute du JavaScript
- Une visionneuse tierce ou un agrégateur récupère le JSON directement (requête _cross-origin_, CORS) : **erreur 403**
- La ressource reste visible sur le site, mais **n'est plus réutilisable ailleurs**

### Pistes

<div style="font-size: 80%;">

Exempter les chemins IIIF des défis (avec une limitation de débit), garder les en-têtes CORS, proposer l'API Change Discovery ou des exports en masse, documenter publiquement une politique d'accès

</div>

<!-- 

Cas observé sur e-newspaperarchives.ch. Montre que l'interopérabilité dépend aussi de l'infrastructure et de la gouvernance, pas seulement des standards. La pression des robots d'IA sur les sites patrimoniaux rend ce problème de plus en plus fréquent.

-->

---

 ![bg opacity:.14](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## 7. Cet après-midi

---

# En résumé

<div style="font-size: 85%;">

- **IIIF** : _montrer_, avec des API qui séparent les pixels (Image) de la structure (Presentation)
- **Linked Art** : _décrire_, avec un modèle sémantique relié aux vocabulaires contrôlés
- **LOUD** : rendre les données liées _utilisables_, d'abord pour celles et ceux qui construisent des outils
- **Liens réciproques** entre description et présentation : c'est là que se joue l'interopérabilité
- **Droits et infrastructure** : des standards ouverts ne suffisent pas sans une politique d'accès ouverte

</div>

---

# Des concepts aux exercices

<div style="font-size: 75%;">

| Concept vu ce matin | Exercice |
|---|---|
| URL de l'API Image, `info.json` | **1)** Manipuler l'API IIIF Image |
| Identifiants, redirections, négociation de contenu | **2)** Tester les Cool URIs et les PID |
| Manifest, Collection, visionneuses | **a)** Constituer une collection IIIF autour d'Isabelle Kaiser |
| Ranges, granularité | **b)** La structure des Manifests sur e-periodica |
| Liens entre Linked Art et IIIF | **d)** IIIF et Linked Art sur LUX |
| Autorités, Wikidata comme hub | **e)** Interroger Wikidata avec SPARQL |

</div>

Fil rouge : **Isabelle Kaiser** ([Q118108](https://www.wikidata.org/wiki/Q118108)), **Jean-Louis Kuffer** ([Q3166832](https://www.wikidata.org/wiki/Q3166832)) et **Meret Oppenheim** ([Q61594](https://www.wikidata.org/wiki/Q61594))

<!-- 

Rappel de l'organisation : 15 min d'échauffement collectif (1 et 2), puis 60 min en petits groupes sur deux exercices au choix (idéalement un pratique, a ou e, et un d'analyse, b ou d), puis 15 min pour préparer la restitution du bloc 4.

-->


---

 ![bg opacity:.14](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)

<!-- _backgroundColor: #465B64  -->
<!-- _color: white  -->
<!-- _header: " "  -->
<!-- _footer: " "  -->

## Sources

---

# Bibliographie

<div style="font-size: 48%;">

Cornut, M., Raemy, J. A., & Spiess, F. (2023). Annotations as Knowledge Practices in Image Archives: Application of Linked Open Usable Data and Machine Learning. *Journal on Computing and Cultural Heritage*, *16*(4), 1–19. https://doi.org/10.1145/3625301

Cossu, S. (2020, April 27). *IIIF at the Getty: Vision & Tactics*. CNI Spring 2020, Virtual Membership Meeting. https://www.cni.org/wp-content/uploads/2020/03/scossu_iiif_getty_vision_and_tactics_cni_spring_2020.pdf

Mazzone, J. (2006). Copyfraud. *New York University Law Review*, *81*(3), 1026–1100.

Metcalfe Hurst, E. (2023). LUX: Yale Collections Discovery. *ARLIS/NA Multimedia & Technology Reviews*, *2023*(4), 1–4. https://doi.org/10.17613/3hy1-pv45

Raemy, J. A. (2024). *Linked Open Usable Data for Cultural Heritage: Perspectives on Community Practices and Semantic Interoperability* [Doctoral Thesis, University of Basel]. https://hdl.handle.net/20.500.14716/148352

Raemy, J. A., Gray, T., Collinson, A., & Page, K. R. (2023, July 12). *Enabling Participatory Data Perspectives for Image Archives through a Linked Art Workflow* (Poster). Digital Humanities 2023, Graz, Austria. https://doi.org/10.5281/zenodo.7878358

Raemy, J. A., & Sanderson, R. (2024). Analysis of the Usability of Automatically Enriched Cultural Heritage Data. In F. Moral-Andrés, E. Merino-Gómez, & P. Reviriego (Eds.), *Decoding Cultural Heritage: A Critical Dissection and Taxonomy of Human Creativity through Digital Tools* (pp. 69–93). Springer Nature Switzerland. https://doi.org/10.1007/978-3-031-57675-1_4

Sanderson, R. (2018, May 15). *Shout it Out: LOUD*. EuropeanaTech Conference 2018, Rotterdam, the Netherlands. https://www.slideshare.net/Europeana/shout-it-out-loud-by-rob-sanderson-europeanatech-conference-2018

Sanderson, R. (2019, June 27). *The Importance of being LOUD*. Keynote presented at the IIIF Conference, Göttingen, Germany. https://www.slideshare.net/azaroth42/the-importance-of-being-loud

Snydman, S., Sanderson, R., & Cramer, T. (2015). The International Image Interoperability Framework (IIIF): A community & technology approach for web-based images. *Archiving Conference*, *12*, 16–21. https://doi.org/10.2352/issn.2168-3204.2015.12.1.art00005

</div>

---

![bg opacity:.15](https://iiif.dasch.swiss/0812/3GiQt3LMMgl-ToSOskchDW7.jpx/full/max/0/default.jpg)
![bg opacity:.15](https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/full/max/0/default.jpg)
![bg opacity:.15](https://iiif.dasch.swiss/0812/5fZk9n63llU-v6bWewMrtCz.jpx/full/max/0/default.jpg)

# Crédits photographiques

<div style="font-size: 62%;">

Kaiser, Isabelle. _Sous les étoiles : poésies_. Genève : H. Georg, 1890. Zentralbibliothek Zürich, CFM K 955. e-rara. https://doi.org/10.3931/e-rara-139152 (domaine public)

_Tableau des courses postales de l'administration des postes de la Confédération suisse / Kurs-Karte der schweizerischen Postverwaltung_. 1851. Archives PTT, P-38-2-1851-08. https://iiif.ptt-archiv.ch/iiif/3/P-38-2-1851-08.jp2/info.json

Images du [Fonds photographique de l'Anthropologie culturelle suisse (ACS)](https://www.ekws.ch/), anciennement _Société suisse des traditions populaires_, à Bâle. Licence : CC BY-NC 4.0 [![w:60](https://julsraemy.ch/prezi/assets/cc-by-nc.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

- Brunner, Ernst. [Blick auf das Spalentor]. Basel, 1938. SGV_12N_00115. https://ark.dasch.swiss/ark:/72163/1/0812/6mo320CeXUqvWftaKoKPWws
- Brunner, Ernst. [Ringtanz während der Masüras auf der Alp Sura]. Guarda, 1939. SGV_12N_08589. https://ark.dasch.swiss/ark:/72163/1/0812/T6ITgGbkVomteyknedSDsA7
- Brunner, Ernst. [Katze auf einer Mauer]. Ort und Datum unbekannt. SGV_12N_19553. https://ark.dasch.swiss/ark:/72163/1/0812/9Uux7KkDW92sHVgDliEHbwV

</div>
