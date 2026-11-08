---
marp: true
lang: fr
author: Julien A. Raemy
title: "Cap sur IIIF : ce qui se prépare chez docuteam"
description: Présentation de Julien A. Raemy au Community Day docuteam 2026 à Lausanne le 12 novembre 2026 sur IIIF et les projets de docuteam
keywords: IIIF, docuteam, archives, interopérabilité, API Image, API Présentation, docuteam context
image: https://julsraemy.ch/prezi/assets/og/cap-sur-iiif-docuteam.jpg
url: https://julsraemy.ch/prezi/cap-sur-iiif-docuteam.html
date: 2026-11-12
event: 'docuteam Community Day 2026'
theme: docuteam
paginate: true
_paginate: false
---

<!-- _class: cover -->

<img class="hero" src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/title.jpg" alt="">

# Cap sur IIIF : ce qui se prépare chez docuteam

<p>Lausanne, Community Day 2026 | Julien A. Raemy<br>12.11.2026</p>

---

<!-- _class: about -->

## À propos

<img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/photo-julien.jpg" alt="Julien A. Raemy">
<div class="who">
<p class="t34 red"><b>Julien A. RAEMY</b></p>
<p><b>Semantic Architect &amp; Chef de projet</b></p>
<p class="dark">Spécialiste patrimoine culturel et interopérabilité. Membre des communautés IIIF et Linked Art.</p>
</div>

<!-- Me présenter en quelques mots : mon rôle chez docuteam et mon implication dans les communautés IIIF et Linked Art. -->

---

## Déroulement | <span>quatre étapes</span>

<div class="stage agenda">
<div><div class="dot">01</div><p class="step">Pourquoi IIIF ?</p><p class="dark">Le problème des images enfermées dans des silos</p></div>
<div><div class="dot">02</div><p class="step">Ce que IIIF permet</p><p class="dark">Un tour rapide d'exemples concrets</p></div>
<div><div class="dot">03</div><p class="step">Comment ça fonctionne</p><p class="dark">Deux API au cœur du standard</p></div>
<div><div class="dot r">04</div><p class="step">Cap docuteam</p><p class="dark">Notre première étape et la suite, à construire ensemble</p></div>
</div>

<!-- Insister dès maintenant : la partie 4 décrit une direction, pas une fonctionnalité disponible aujourd'hui. -->

---

## Qu'est-ce que IIIF ? | <span>une suite de standards</span>

<div class="stage" style="grid-template-columns:537px 1010px; column-gap:87px; top:272px; height:652px">
<img src="https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png" alt="IIIF" style="width:537px; height:539px; object-fit:contain">
<div>
<p class="t44" style="line-height:1.15; margin-bottom:6px"><b>International Image Interoperability Framework</b></p>
<p class="t28 grey" style="margin-bottom:34px"><i>prononcé « triple-i-f »</i></p>
<p class="t36" style="margin-bottom:23px"><b>Un modèle</b> pour présenter et annoter des objets numériques.</p>
<p class="t36" style="margin-bottom:34px"><b>Une communauté mondiale</b> qui développe des API partagées, les implémente dans des logiciels et expose des contenus interopérables sur le web.</p>
<p class="dark" style="margin-bottom:34px">Né en 2011 d'une initiative d'institutions patrimoniales, dont Oxford, Stanford et la British Library.</p>
<p class="t32 red"><a href="https://iiif.io">iiif.io</a></p>
</div>
</div>

<!-- IIIF est une suite de standards ouverts et gratuits, pas un produit : n'importe qui peut les implémenter. Un consortium soutient la communauté. -->

---

## Une communauté mondiale | <span>et ouverte</span>

<div class="stage" style="grid-template-columns:1077px 511px; column-gap:46px; height:663px">
<div>
<img src="https://julsraemy.ch/prezi/assets/iiif-map.png" alt="Carte des institutions utilisant IIIF" style="width:1077px; height:594px; object-fit:contain; object-position:left top">
<p class="t24 red" style="margin-top:26px"><a href="https://bit.ly/iiifmap">Carte des institutions utilisant IIIF : bit.ly/iiifmap</a></p>
</div>
<div style="display:grid; grid-template-rows:repeat(4,153px); row-gap:17px">
<div class="card" style="padding:8px 16px; line-height:1.2"><p><b>Bibliothèques</b></p><p class="t24 dark">BnF, British Library, Library of Congress, Vaticane, bibliothèques nationales du pays de Galles et d'Écosse</p></div>
<div class="card" style="padding:8px 16px; line-height:1.2"><p class="red"><b>Archives</b></p><p class="t24 dark">Archives fédérales suisses, Archives nationales de Suède, Internet Archive</p></div>
<div class="card" style="padding:8px 16px; line-height:1.2"><p><b>Musées</b></p><p class="t24 dark">Rijksmuseum, Victoria &amp; Albert Museum, National Gallery of Art, Getty, Yale Center for British Art</p></div>
<div class="card" style="padding:8px 16px; line-height:1.2"><p><b>Universités et agrégateurs</b></p><p class="t24 dark">Cambridge, Harvard, Oxford, Stanford, Europeana, DPLA, Wikimedia</p></div>
</div>
</div>

<!-- Et ce ne sont que les institutions connues : comme IIIF est ouvert, chacun peut l'implémenter sans le déclarer. -->

---

## IIIF en Suisse | <span>déjà largement adopté</span>

<div class="stage" style="grid-template-columns:repeat(3,526px); column-gap:28px; height:686px">
<div class="panel" style="background:#000; color:#fff">
<p class="t34"><b>Plateformes</b></p>
<p style="color:#ff8a8a; margin-top:12px; line-height:1.15"><a href="https://www.e-codices.ch/"><b>e-codices</b></a></p><p class="t24" style="color:#cfcfcf; line-height:1.15">manuscrits médiévaux et modernes</p>
<p style="color:#ff8a8a; margin-top:12px; line-height:1.15"><a href="https://www.e-manuscripta.ch/"><b>e-manuscripta</b></a></p><p class="t24" style="color:#cfcfcf; line-height:1.15">manuscrits numérisés</p>
<p style="color:#ff8a8a; margin-top:12px; line-height:1.15"><a href="https://www.e-rara.ch/"><b>e-rara</b></a></p><p class="t24" style="color:#cfcfcf; line-height:1.15">imprimés numérisés</p>
<p style="color:#ff8a8a; margin-top:12px; line-height:1.15"><a href="https://www.e-newspaperarchives.ch/"><b>e-newspaperarchives</b></a></p><p class="t24" style="color:#cfcfcf; line-height:1.15">presse</p>
<p style="color:#ff8a8a; margin-top:12px; line-height:1.15"><a href="https://fragmentarium.ms/"><b>Fragmentarium</b></a></p><p class="t24" style="color:#cfcfcf; line-height:1.15">fragments médiévaux</p>
<p style="color:#ff8a8a; margin-top:12px; line-height:1.15"><a href="https://zentralgut.ch/"><b>ZentralGut</b></a></p><p class="t24" style="color:#cfcfcf; line-height:1.15">Suisse centrale</p>
</div>
<div class="panel">
<p class="t34"><b>Archives et recherche</b></p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><b>Archives fédérales suisses</b></p><p class="t24" style="color:#8c8c8c; line-height:1.15"><a href="https://www.recherche.bar.admin.ch/">Accès en ligne</a>, <a href="https://www.chgov.bar.admin.ch/">Procès-verbaux du Conseil fédéral</a>, <a href="https://www.alptransit-portal.ch/">Portail AlpTransit</a></p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://www.dasch.swiss"><b>DaSCH</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">membre du consortium</p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://www.unibe.ch/"><b>Université de Berne</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">membre du consortium</p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://www.parc-portal.org/"><b>PARC</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">Université de Bâle</p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://visualcontagions.unige.ch/explore/"><b>Visual Contagions</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">Université de Genève</p>
</div>
<div class="panel">
<p class="t34"><b>Musées et culture</b></p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://iiif.kumu.swiss/"><b>Kunstmuseum Basel</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">collection en ligne</p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://digital.kunsthaus.ch/"><b>Kunsthaus Zürich</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">collection en ligne</p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://bodmerlab.unige.ch/"><b>BodmerLab</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">UNIGE</p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://plume.epfl.ch/"><b>Plume</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">EPFL, ouvrages précieux</p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://www.bilder-der-schweiz.online"><b>Bilder der Schweiz online</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">photographie</p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://www.performing-arts.ch/"><b>Performing Arts</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">SAPA</p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://digital.skkg.ch/"><b>SKKG</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">fondation, Winterthour</p>
</div>
</div>
<p class="grey" style="position:absolute; top:958px; left:146px; width:1540px; font-size:20px">Raemy, J. A. (2026). IIIF in Switzerland: A Landscape of Compatible Platforms and Engaged Institutions. University of Bern. <a href="https://doi.org/10.5281/zenodo.23242983">https://doi.org/10.5281/zenodo.23242983</a></p>

<!-- Tous les liens sont cliquables. Montrer un ou deux exemples si le temps le permet, par exemple e-rara ou les procès-verbaux du Conseil fédéral. -->

---

## Pourquoi IIIF ? | <span>les images portent l'information</span>

<div class="stage" style="grid-template-columns:repeat(4,383px); column-gap:34px; grid-template-rows:604px 68px; top:266px; height:680px">
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/redon.jpg" alt="" style="width:383px; height:488px; object-fit:contain; object-position:center bottom"><p class="t24 grey center" style="margin-top:11px">Odilon Redon, Ophélie, 1906. Art Institute of Chicago</p></div>
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/turtle.jpg" alt="" style="width:383px; height:488px; object-fit:contain; object-position:center bottom"><p class="t24 grey center" style="margin-top:11px">Rob Stevenson, tortue ponctuée, 2004. CC BY 3.0, via Artstor</p></div>
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/zebra.jpg" alt="" style="width:383px; height:488px; object-fit:contain; object-position:center bottom"><p class="t24 grey center" style="margin-top:11px">Division cellulaire asymétrique, embryon de poisson-zèbre, 2015. Wellcome Collection, CC BY</p></div>
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/tribune.jpg" alt="" style="width:383px; height:488px; object-fit:contain; object-position:center bottom"><p class="t24 grey center" style="margin-top:11px">New-York Tribune, 16 février 1919. Library of Congress</p></div>
<p class="t40 center" style="grid-column:1 / -1"><b>Les images sont des vecteurs essentiels d'information du patrimoine culturel.</b></p>
</div>

<!-- Art, sciences naturelles, médecine, presse : l'image est au cœur de tous les fonds patrimoniaux. -->

---

## Le problème | <span>un monde de silos</span>

<div class="stage" style="grid-template-columns:635px 964px; column-gap:68px; top:278px; height:690px; width:1667px">
<div>
<p class="t44" style="margin-bottom:28px"><b>Un monde de silos et de doublons</b></p>
<img src="https://julsraemy.ch/prezi/assets/silos.png" alt="Silos" style="width:392px; height:233px; object-fit:cover; margin-bottom:20px">
<p class="t34" style="line-height:1.32; margin-bottom:23px">La diffusion d'images sur le web a longtemps été difficile, lente, coûteuse et cloisonnée.</p>
<p class="t34 dark" style="line-height:1.32">Chaque institution, sa technologie : les images sont copiées, recadrées, redimensionnées, et le lien vers la source se perd.</p>
</div>
<div style="display:grid; grid-template-rows:auto 91px; row-gap:51px; align-content:start">
<div style="display:grid; grid-template-columns:300px 32px 300px 32px 300px">
<div style="display:grid; grid-template-rows:51px 108px 108px 108px; row-gap:22px"><p class="center"><b>Archives A</b></p><div class="card box-center t26" style="padding:11px">Visionneuse maison</div><div class="card box-center t26" style="padding:11px">Métadonnées propres</div><div class="dark-box box-center t26" style="padding:11px">Serveur</div></div>
<p class="t40 red center" style="align-self:center; line-height:1.15"><b>✕</b></p>
<div style="display:grid; grid-template-rows:51px 108px 108px 108px; row-gap:22px"><p class="center"><b>Bibliothèque B</b></p><div class="card box-center t26" style="padding:11px">Visionneuse maison</div><div class="card box-center t26" style="padding:11px">Métadonnées propres</div><div class="dark-box box-center t26" style="padding:11px">Serveur</div></div>
<p class="t40 red center" style="align-self:center; line-height:1.15"><b>✕</b></p>
<div style="display:grid; grid-template-rows:51px 108px 108px 108px; row-gap:22px"><p class="center"><b>Musée C</b></p><div class="card box-center t26" style="padding:11px">Visionneuse maison</div><div class="card box-center t26" style="padding:11px">Métadonnées propres</div><div class="dark-box box-center t26" style="padding:11px">Serveur</div></div>
</div>
<div class="box-center t28 red" style="border:3px solid #d0101b; border-radius:9px; line-height:1.15"><b>Aucune interopérabilité : il faut passer d'un site à l'autre.</b></div>
</div>
</div>

<!-- Partir du vécu des archivistes : chaque plateforme a sa visionneuse, ses formats, ses copies. -->

---

## La solution | <span>l'interopérabilité par les API</span>

<div class="stage" style="grid-template-columns:646px 74px 249px 46px 283px 46px 272px; top:278px; height:567px; width:1616px">
<div>
<p class="t44" style="margin-bottom:34px"><b>IIIF sépare le stockage des images de leur consultation.</b></p>
<p class="t34" style="line-height:1.32; margin-bottom:34px">Toute visionneuse compatible peut afficher toute ressource compatible, sans copie ni développement spécifique.</p>
<p class="t34 red" style="line-height:1.32"><b>Les images restent chez leur détenteur ; ce sont les usages qui circulent.</b></p>
</div>
<div></div>
<div style="display:grid; grid-template-rows:repeat(3,130px); row-gap:40px; margin-top:28px; align-content:start">
<div class="dark-box box-center t26"><b>Vos archives</b></div>
<div class="dark-box box-center t26"><b>Une bibliothèque</b></div>
<div class="dark-box box-center t26"><b>Un musée</b></div>
</div>
<p class="center" style="font-size:48px; align-self:center; font-weight:700; margin-top:28px">→</p>
<div class="red-box box-center" style="margin-top:28px; height:471px; border-radius:11px">
<p class="t44" style="line-height:1.15"><b>Protocoles IIIF</b></p>
<p class="t28">un langage commun</p>
</div>
<p class="center" style="font-size:48px; align-self:center; font-weight:700; margin-top:28px">→</p>
<div style="display:grid; grid-template-rows:repeat(3,130px); row-gap:40px; margin-top:28px; align-content:start">
<div class="card box-center t28 red"><a href="https://projectmirador.org/"><b>Mirador</b></a></div>
<div class="card box-center t28 red"><a href="https://universalviewer.io/"><b>Universal Viewer</b></a></div>
<div class="card box-center t28"><b>Vos outils</b></div>
</div>
</div>

<!-- Transition vers les exemples : tout ce qui suit repose sur les mêmes API. -->

---

## Ce que IIIF permet | <span>zoom profond</span>

<div class="stage example">
<img class="fit" src="https://julsraemy.ch/prezi/assets/iiif_deepzoom.gif" alt="Zoom profond">
<div class="panel">
<p class="verb">Zoomer</p>
<p class="lead">Des images de très haute résolution, chargées par tuiles au fil de la navigation.</p>
<p class="online">Voir en ligne</p>
<p class="link"><a href="https://purl.stanford.edu/hs631zg4177">Stanford Libraries</a></p>
</div>
</div>

<!-- Premier cas d'usage historique : lire une grande carte ou un plan dans le détail, sans télécharger un fichier énorme. -->

---

## Ce que IIIF permet | <span>comparaison de ressources</span>

<div class="stage example">
<img class="fit" src="https://julsraemy.ch/prezi/assets/compare.gif" alt="Comparaison">
<div class="panel">
<p class="verb">Comparer</p>
<p class="lead">Afficher côte à côte des documents, qu'ils viennent de la même institution ou non.</p>
<p class="caption">Lettre du 6 septembre 1780</p>
<p class="online">Voir en ligne</p>
<p class="link"><a href="https://prtd.app/#72f604db-6869-4c08-91ce-7c79502a7f35">Library of Congress, papiers d'Alexander Hamilton</a></p>
</div>
</div>

<!-- La comparaison est une méthode de travail centrale pour la recherche. -->

---

## Ce que IIIF permet | <span>réunification de fonds dispersés</span>

<div class="stage example">
<img class="fit" src="https://julsraemy.ch/prezi/assets/biblissima-demo.gif" alt="Biblissima">
<div class="panel">
<p class="verb long">Réunifier</p>
<p class="lead">Reconstituer virtuellement un manuscrit dont le texte et la miniature se trouvent dans deux institutions.</p>
<p class="caption">Manuscrit 5 de la Bibliothèque municipale de Châteauroux, vers 1460 : folio dans la BVMM, miniature à la BnF</p>
<p class="online">Voir en ligne</p>
<p class="link"><a href="https://demos.biblissima.fr/chateauroux/demo/">Démonstrateur Biblissima</a></p>
</div>
</div>

<!-- Le manuscrit a été mutilé ; la miniature a fini à la BnF. Comme les deux institutions exposent leurs images en IIIF, on peut les réunir. -->

---

## Ce que IIIF permet | <span>recherche plein texte</span>

<div class="stage example">
<img class="fit" src="https://julsraemy.ch/prezi/assets/content-search.gif" alt="Recherche">
<div class="panel">
<p class="verb">Rechercher</p>
<p class="lead">Rechercher un mot dans le texte océrisé ou transcrit et le retrouver directement sur l'image.</p>
<p class="caption">Kendal Franks, The Germ Theory. Wellcome Library, domaine public</p>
<p class="online">Voir en ligne</p>
<p class="link"><a href="https://wellcomecollection.org/">Wellcome Collection</a></p>
</div>
</div>

<!-- API Content Search : le résultat est surligné sur la page. -->

---

## Ce que IIIF permet | <span>annotations</span>

<div class="stage example">
<img class="fit" src="https://julsraemy.ch/prezi/assets/harvard-anno.gif" alt="Annotations">
<div class="panel">
<p class="verb">Annoter</p>
<p class="lead">Ajouter commentaires, transcriptions ou identifications sur une zone précise de l'image.</p>
<p class="online">Voir en ligne</p>
<p class="link"><a href="https://courses.edx.org/courses/course-v1:HarvardX+MCB64.1x+2T2016/d16e07a5cec442eeb7cd9dfcb695dce0/">HarvardX, cours de biologie cellulaire</a></p>
</div>
</div>

<!-- Les annotations suivent le Web Annotation Data Model du W3C : elles restent interopérables. -->

---

## Ce que IIIF permet | <span>crowdsourcing</span>

<div class="stage example">
<img class="fit" src="https://julsraemy.ch/prezi/assets/crowdsourcing-nlw.gif" alt="Crowdsourcing">
<div class="panel">
<p class="verb">Contribuer</p>
<p class="lead">Faire participer le public pour identifier des personnes, des lieux ou des objets sur des documents numérisés.</p>
<p class="caption dark t26">Projet Torf de la Bibliothèque nationale du pays de Galles, réalisé avec la plateforme Madoc de Digirati</p>
</div>
</div>

<!-- Crowdsourcing : la communauté locale identifie les personnes sur les photos. Les annotations peuvent aussi être géolocalisées. -->

---

## Ce que IIIF permet | <span>storytelling</span>

<div class="stage example">
<img class="fit" src="https://julsraemy.ch/prezi/assets/storiiies.gif" alt="Storiiies">
<div class="panel">
<p class="verb">Raconter</p>
<p class="lead">Guider le public à travers une image par une suite d'annotations, comme une visite commentée.</p>
<p class="online">Voir en ligne</p>
<p class="link"><a href="https://www.cogapp.com/r-d/storiiies">Storiiies, Cogapp</a></p>
</div>
</div>

<!-- Outil de médiation simple, construit sur les annotations IIIF. -->

---

## Ce que IIIF permet | <span>superposition de techniques d'imagerie</span>

<div class="stage example">
<img class="fit" src="https://julsraemy.ch/prezi/assets/Leiden_curtain_viewer.gif" alt="Leiden Curtain Viewer">
<div class="panel">
<p class="verb">Superposer</p>
<p class="lead">Comparer différentes couches d'imagerie d'une même œuvre : lumière visible, infrarouge, rayons X.</p>
<p class="online">Voir en ligne</p>
<p class="link"><a href="https://www.theleidencollection.com/viewer/david-and-uriah/">The Leiden Collection, Curtain Viewer</a></p>
</div>
</div>

<!-- Intéressant pour la restauration et l'étude matérielle. -->

---

## Ce que IIIF permet | <span>au-delà des images</span>

<div class="stage example">
<img class="fit" src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/utk-iiif-av.gif" alt="UTK">
<div class="panel">
<p class="verb">Écouter</p>
<p class="lead">IIIF décrit aussi l'audio et la vidéo : un entretien peut être présenté avec sa transcription synchronisée.</p>
<p class="caption">Entretien avec Adesola Odunayo, 23 avril 2020</p>
<p class="online">Voir en ligne</p>
<p class="link"><a href="https://rfta.lib.utk.edu/interviews/object/adesola-odunayo-2020-04-23/">Rising from the Ashes, University of Tennessee</a></p>
<p class="link"><a href="https://digital.lib.utk.edu/assemble/manifest/rfta/86">Le manifeste IIIF correspondant</a></p>
</div>
</div>

<!-- Pertinent pour les archives audiovisuelles et l'histoire orale. -->

---

## Ce que IIIF permet | <span>valoriser et exposer</span>

<div class="stage" style="grid-template-columns:800px 800px; column-gap:34px; grid-template-rows:408px 79px 113px; row-gap:11px; height:685px">
<img class="fit" src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/selfmuseum.jpg" alt="Self Museum">
<img class="fit" src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/imaginarium.jpg" alt="Imaginarium" style="object-position:center bottom">
<div><p><b>Créer son musée virtuel</b></p><p class="t26 red"><a href="https://self-museum.cultural.jp/">Self Museum, Cultural Japan</a></p></div>
<div><p><b>Une exposition immersive</b></p><p class="t26 red"><a href="https://imaginarium.nationalgallery.org.uk/">Imaginarium, National Gallery (Londres)</a></p></div>
<div class="outline" style="grid-column:1 / -1; margin-top:50px; padding:10px 28px; height:95px"><p><b>Explorer une archive photographique : </b><a class="red" href="https://12sunsets.getty.edu/">12 Sunsets, les photographies de Sunset Boulevard par Ed Ruscha</a> (Getty Research Institute), avec IIIF comme intermédiaire.</p></div>
</div>

<!-- Trois exemples de médiation. 12 Sunsets est particulièrement parlant pour un fonds photographique d'archive. -->

---

## Comment ça fonctionne | <span>deux API au cœur</span>

<div class="stage" style="grid-template-columns:533px 533px 494px; column-gap:29px; height:686px; width:1650px">
<div class="panel" style="height:686px">
<img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/puzimg.png" alt="" style="width:189px; height:215px; object-fit:contain; margin:0 auto 23px">
<p class="t48" style="margin-bottom:12px"><b>API Image</b></p>
<p class="t32 red" style="margin-bottom:14px"><b>Livrer les pixels</b></p>
<p class="dark" style="margin-bottom:14px">Un service web simple : une adresse standardisée pour demander une image, une région, une taille, une rotation.</p>
<p class="t26 red"><a href="https://iiif.io/api/image/3.0/">Spécification</a></p>
</div>
<div class="panel" style="height:686px">
<img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/puzpres.png" alt="" style="width:303px; height:215px; object-fit:contain; margin:0 auto 23px">
<p class="t48" style="margin-bottom:12px"><b>API Présentation</b></p>
<p class="t32 red" style="margin-bottom:14px"><b>Décrire l'objet</b></p>
<p class="dark" style="margin-bottom:14px">Juste assez de métadonnées pour afficher correctement l'objet : structure, ordre des vues, libellés.</p>
<p class="t26 red"><a href="https://iiif.io/api/presentation/3.0/">Spécification</a></p>
</div>
<div style="display:grid; grid-template-rows:57px repeat(4,119px); row-gap:17px; align-content:start">
<p class="t32"><b>Quatre autres spécifications</b></p>
<div class="card" style="height:119px"><p class="t28 red"><a href="https://iiif.io/api/auth/"><b>Authorization Flow</b></a></p><p class="t24 dark">accès restreint</p></div>
<div class="card" style="height:119px"><p class="t28 red"><a href="https://iiif.io/api/discovery/"><b>Change Discovery</b></a></p><p class="t24 dark">moissonnage des changements</p></div>
<div class="card" style="height:119px"><p class="t28 red"><a href="https://iiif.io/api/search/"><b>Content Search</b></a></p><p class="t24 dark">recherche plein texte</p></div>
<div class="card" style="height:119px"><p class="t28 red"><a href="https://iiif.io/api/content-state/"><b>Content State</b></a></p><p class="t24 dark">partager une vue précise</p></div>
</div>
</div>

<!-- Image et Présentation sont les API cœur de IIIF, et ce sont les deux que docuteam vise en premier. -->

---

## Comment ça fonctionne | <span>les deux API dans Mirador</span>

<div class="stage" style="grid-template-columns:1219px 370px; column-gap:45px; top:268px; height:666px">
<img class="fit" src="https://julsraemy.ch/prezi/assets/mirador-coreapis.png" alt="Mirador avec les deux API">
<div>
<p class="t36 red"><b>API Présentation</b></p>
<p class="t28 dark" style="margin-bottom:34px">titre, métadonnées, structure, ordre des pages</p>
<p class="t36" style="color:#1f5f99"><b>API Image</b></p>
<p class="t28 dark" style="margin-bottom:34px">les pixels, au bon cadrage et à la bonne taille</p>
<p><b>IIIF lie étroitement images et métadonnées : les images restent contextualisées.</b></p>
</div>
</div>

<!-- Montrer ce que chaque API apporte à l'écran. -->

---

## Comment ça fonctionne | <span>un écosystème</span>

<div class="stage" style="grid-template-rows:544px 113px; row-gap:28px; height:685px">
<img class="fit" src="https://julsraemy.ch/prezi/assets/iiif-ecosystem.png" alt="Écosystème IIIF">
<div class="panel" style="padding:14px 28px"><p><b>Une interface bien définie rend les briques interchangeables : </b>on peut changer de visionneuse, de serveur, ou des deux, et chercher ou annoter à travers plusieurs dépôts.</p></div>
</div>

<!-- La normalisation par les API permet de chercher à travers plusieurs dépôts, de voir les annotations d'autres institutions, ou d'afficher les images d'une institution dans une application tierce. -->

---

## L'API Image | <span>une adresse qui dit tout</span>

<div class="stage" style="grid-template-rows:159px 221px 244px; row-gap:24px; top:272px; height:680px; align-content:start">
<div style="display:grid; grid-template-columns:420px 244px 244px 244px 391px; column-gap:20px; width:1621px">
<div><div class="dark-box box-center t26" style="height:91px; border-radius:7px"><b>{serveur}/{identifiant}</b></div><p class="t24 dark center" style="margin-top:11px">où se trouve l'image</p></div>
<div><div class="red-box box-center t26" style="height:91px; border-radius:7px"><b>{région}</b></div><p class="t24 dark center" style="margin-top:11px">full, x,y,l,h, pct:…</p></div>
<div><div class="red-box box-center t26" style="height:91px; border-radius:7px"><b>{taille}</b></div><p class="t24 dark center" style="margin-top:11px">max, 1000, …</p></div>
<div><div class="red-box box-center t26" style="height:91px; border-radius:7px"><b>{rotation}</b></div><p class="t24 dark center" style="margin-top:11px">0, 90, !0 …</p></div>
<div><div class="red-box box-center t26" style="height:91px; border-radius:7px"><b>{qualité}.{format}</b></div><p class="t24 dark center" style="margin-top:11px">default.jpg, gray.png …</p></div>
</div>
<div style="display:grid; grid-template-columns:800px 800px; column-gap:34px">
<div class="panel" style="padding:18px 28px">
<p class="t28" style="margin-bottom:6px"><b>Version 2.1</b></p>
<p class="t24 grey">Image entière</p>
<p class="t24 red" style="margin-bottom:6px"><a href="https://www.e-manuscripta.ch/i3f/V21/2886901/full/full/0/default.jpg">…/full/full/0/default.jpg</a></p>
<p class="t24 grey">Carte d'identité technique</p>
<p class="t24 red"><a href="https://www.e-manuscripta.ch/i3f/V21/2886901/info.json">…/info.json</a></p>
</div>
<div class="panel" style="padding:18px 28px">
<p class="t28" style="margin-bottom:6px"><b>Version 3.0</b></p>
<p class="t24 grey">Image entière</p>
<p class="t24 red" style="margin-bottom:6px"><a href="https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/full/max/0/default.jpg">…/full/max/0/default.jpg</a></p>
<p class="t24 grey">Carte d'identité technique</p>
<p class="t24 red"><a href="https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/info.json">…/info.json</a></p>
</div>
</div>
<div class="outline" style="height:244px">
<p class="t32" style="margin-bottom:9px"><b>Le fichier info.json</b></p>
<p class="dark" style="margin-bottom:14px">Il indique les dimensions de l'image, les tailles et formats disponibles et le niveau de conformité du serveur. C'est lui que docuteam context lira en premier pour une image IIIF.</p>
<p class="t26"><b>Quelques serveurs d'images IIIF :</b> <a class="red" href="https://cantaloupe-project.github.io/">Cantaloupe</a>, <a class="red" href="https://iipimage.sourceforge.io/">IIPImage</a>, <a class="red" href="https://github.com/dasch-swiss/sipi">SIPI</a>, <a class="red" href="https://github.com/dbmdz/wolpi">Wolpi</a></p>
</div>
</div>

<!-- Ouvrir un lien puis modifier la taille ou la rotation directement dans l'URL pour montrer la simplicité. -->

---

## L'API Image | <span>paramètres et tuiles</span>

<div class="stage" style="grid-template-columns:714px 874px; column-gap:46px; grid-template-rows:584px 68px; row-gap:28px; height:680px">
<img class="fit" src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/params.png" alt="Paramètres de l'API Image">
<img class="fit" src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/tile-pyramid.gif" alt="Pyramide de tuiles">
<p class="t26 dark center">Région, taille, rotation, qualité : chaque paramètre transforme l'image à la volée.</p>
<p class="t26 dark center">La pyramide de tuiles permet le zoom fluide. <a class="red" href="https://observablehq.com/@allmaps/tile-pyramid">Démo Allmaps</a></p>
</div>

<!-- Le serveur calcule l'image demandée à la volée : on ne transfère que ce qui est affiché. -->

---

## L'API Présentation | <span>manifestes et collections</span>

<div class="stage" style="grid-template-columns:918px 670px; column-gap:46px; top:266px; height:680px">
<div>
<div style="display:grid; grid-template-columns:221px 1fr; column-gap:17px; margin-left:0px; margin-bottom:37px; height:102px"><div class="dark-box box-center"><b>Collection</b></div><p class="t28 dark" style="align-self:center; line-height:1.2">regroupe des manifestes, p. ex. une série ou un fonds</p></div>
<div style="display:grid; grid-template-columns:221px 1fr; column-gap:17px; margin-left:51px; margin-bottom:37px; height:102px"><div class="red-box box-center"><b>Manifeste</b></div><p class="t28 dark" style="align-self:center; line-height:1.2">un objet, p. ex. un dossier, un registre, un album</p></div>
<div style="display:grid; grid-template-columns:221px 1fr; column-gap:17px; margin-left:102px; margin-bottom:37px; height:102px"><div class="dark-box box-center"><b>Canevas</b></div><p class="t28 dark" style="align-self:center; line-height:1.2">une vue : une page, une face, une photographie</p></div>
<div style="display:grid; grid-template-columns:221px 1fr; column-gap:17px; margin-left:153px; margin-bottom:37px; height:102px"><div class="dark-box box-center"><b>Contenu</b></div><p class="t28 dark" style="align-self:center; line-height:1.2">le contenu posé sur la vue : image, texte, son</p></div>
<div class="outline" style="padding:12px 24px; margin-top:48px"><p><b>Un objet = un manifeste.</b> C'est l'unité centrale de IIIF : une visionneuse n'a besoin que de son URL.</p></div>
</div>
<div>
<img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/manifest_json.png" alt="Manifeste (JSON)" style="width:670px; height:445px; object-fit:contain; margin-bottom:18px">
<p class="t26 dark" style="margin-bottom:9px">Un manifeste est un simple fichier JSON-LD sur un serveur.</p>
<p class="t24 red"><a href="https://www.e-codices.ch/metadata/iiif/zbs-S-0160/manifest.json">Manifeste e-codices, Solothurn Cod. S 160</a></p>
<p class="t24 red"><a href="https://www.e-codices.ch/en/searchresult/list/one/zbs/S-0160">La notice correspondante</a></p>
</div>
</div>

<!-- La hiérarchie évoque la description archivistique mais ne la remplace pas : le manifeste sert l'affichage, la description reste dans le système d'archivage. -->

---

## Des visionneuses au choix | <span>interchangeables</span>

<div class="stage" style="grid-template-columns:repeat(3,522px); column-gap:34px; grid-template-rows:repeat(2,325px); row-gap:26px; top:268px; height:680px">
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/v_mirador.jpg" alt="" style="width:522px; height:264px; object-fit:contain"><p class="t28 red center" style="margin-top:12px"><a href="https://projectmirador.org/"><b>Mirador</b></a></p></div>
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/v_uv.jpg" alt="" style="width:522px; height:264px; object-fit:contain"><p class="t28 red center" style="margin-top:12px"><a href="https://universalviewer.io/"><b>Universal Viewer</b></a></p></div>
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/v_tify.jpg" alt="" style="width:522px; height:264px; object-fit:contain"><p class="t28 red center" style="margin-top:12px"><a href="https://tify.rocks/"><b>Tify</b></a></p></div>
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/v_curation.jpg" alt="" style="width:522px; height:264px; object-fit:contain"><p class="t28 red center" style="margin-top:12px"><a href="https://codh.rois.ac.jp/icp/index.html"><b>IIIF Curation Viewer</b></a></p></div>
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/v_glycerine.jpg" alt="" style="width:522px; height:264px; object-fit:contain"><p class="t28 red center" style="margin-top:12px"><a href="https://glycerine.io/try-viewer/"><b>Glycerine</b></a></p></div>
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/v_clover.jpg" alt="" style="width:522px; height:264px; object-fit:contain"><p class="t28 red center" style="margin-top:12px"><a href="https://samvera-labs.github.io/clover-iiif/docs/viewer/demo"><b>Clover</b></a></p></div>
</div>

<!-- Toutes ces visionneuses sont libres. La maquette docuteam prévoit d'ouvrir les ressources dans Mirador ou Clover. -->

---

## Cap docuteam | <span>notre point de départ</span>

<div class="stage" style="grid-template-columns:800px 800px; column-gap:34px; grid-template-rows:130px 1fr; row-gap:52px; top:266px; height:680px">
<div class="panel box-center" style="grid-column:1 / -1; text-align:left; padding:14px 28px"><p class="t40"><b>Aujourd'hui, nos solutions ne prennent pas encore en charge IIIF.</b></p></div>
<div>
<p class="t36" style="margin-bottom:16px"><b>Ce que nous observons</b></p>
<p class="t32" style="margin-bottom:20px">Plusieurs institutions disposent déjà de leur propre serveur IIIF.</p>
<p class="t32" style="margin-bottom:20px">Elles souhaitent relier toutes les représentations d'un document à sa description archivistique.</p>
<p class="t32">Les images IIIF vivent souvent à côté du système d'archivage, sans lien explicite.</p>
</div>
<div>
<p class="t36" style="margin-bottom:16px"><b>Notre approche</b></p>
<p class="t32" style="margin-bottom:20px">Commencer petit, là où la valeur est immédiate.</p>
<p class="t32" style="margin-bottom:20px">S'appuyer sur les standards : RiC pour la description, IIIF pour la diffusion.</p>
<p class="t32">Construire la suite avec vous, selon vos besoins réels.</p>
</div>
</div>

<!-- Être transparent : rien n'est disponible aujourd'hui. Ce qui suit est une direction, avec une première étape en conception. -->

---

## Nos fondations | <span>iiif-blueprints</span>

<div class="stage" style="grid-template-columns:714px 874px; column-gap:46px; top:266px; height:680px">
<div>
<p class="t48" style="margin-bottom:23px"><b>iiif-blueprints</b></p>
<p class="t34" style="margin-bottom:28px; line-height:1.32">Des architectures conceptuelles et des scénarios de déploiement pour explorer l'adoption de IIIF chez docuteam.</p>
<p style="margin-bottom:9px"><b>La référence unique pour :</b></p>
<p class="dark">les scénarios d'architecture</p>
<p class="dark">les critères de décision</p>
<p class="dark" style="margin-bottom:28px">les schémas de flux de travail possibles</p>
<p class="red"><b>Un document vivant, mis à jour au fil des besoins pour accompagner l'adoption en interne.</b></p>
</div>
<div style="position:relative">
<p style="position:absolute; top:0; left:0"><b>Du plus simple au plus complet</b></p>
<div class="card" style="position:absolute; top:386px; left:0; width:276px; height:283px; padding:20px"><p class="t32 red" style="margin-bottom:9px"><b>Minimal</b></p><p class="t26">Servir les images via l'API Image</p></div>
<div class="card" style="position:absolute; top:216px; left:299px; width:276px; height:454px; padding:20px; background:#d9d9d9"><p class="t32 red" style="margin-bottom:9px"><b>Intermédiaire</b></p><p class="t26">Générer des manifestes à partir des métadonnées existantes</p></div>
<div class="dark-box" style="position:absolute; top:46px; left:598px; width:276px; height:624px; padding:20px"><p class="t32" style="margin-bottom:9px; color:#ff6b6b"><b>Complet</b></p><p class="t26">Présentation 3.0, y compris l'audio et la vidéo<br><br>Présentation 4.0,<br>y compris la 3D</p></div>
</div>
</div>

<!-- Travail préparatoire interne : ces scénarios guident nos choix et évitent de repartir de zéro à chaque besoin client. Ils ne constituent pas une offre, mais un cadre de décision que je continue de mettre à jour. -->

---

## Première étape | <span>IIIF comme instanciation numérique</span>

<div class="stage" style="grid-template-columns:431px 79px 578px 79px 467px; grid-template-rows:249px 102px 136px; row-gap:48px; top:283px; height:600px">
<div class="dark-box box-center" style="border-radius:14px; padding:20px"><p class="t34"><b>Ressource archivistique</b></p><p class="t26">description RiC dans docuteam context</p></div>
<p class="center" style="font-size:52px; font-weight:700; align-self:center">→</p>
<div class="red-box box-center" style="border-radius:14px; padding:20px"><p class="t34" style="margin-bottom:9px"><b>Instanciation numérique</b></p><p class="t28" style="margin-bottom:9px">Image IIIF : URL d'un info.json (répétable)</p><p class="t28">Présentation IIIF : URL d'un manifeste ou d'une collection (unique)</p></div>
<div class="center" style="align-self:center"><p style="font-size:52px; font-weight:700; line-height:1">→</p><p class="t24 grey">lien</p></div>
<div class="outline box-center"><p class="t34"><b>Serveur IIIF de l'institution</b></p><p class="t26 dark">hébergé chez vous ou chez un tiers</p></div>
<p class="t34" style="grid-column:1 / -1"><b>Les images restent sur votre serveur :</b> docuteam context enregistre le lien, le vérifie et en affiche un aperçu.</p>
<div class="outline-red box-center" style="grid-column:1 / -1; text-align:left"><p class="t32"><b>Cible indicative :</b> une version future de docuteam context (1.19 ou 1.20). À ce stade, seules la conception et les maquettes existent.</p></div>
</div>

<!-- Dans RiC, une ressource archivistique peut avoir plusieurs instanciations. La première étape ajoute deux nouveaux types de champ : Image IIIF et Présentation IIIF. Les ressources sont externes : docuteam ne stocke ni ne sert les images à ce stade. -->

---

## Esquisse | <span>lier une image IIIF</span>

<div class="stage" style="grid-template-columns:975px 613px; column-gap:46px; height:716px">
<div>
<img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/sk_empty.png" alt="" style="width:975px; height:127px; object-fit:contain; object-position:left">
<p class="t24 grey" style="margin:4px 0 8px">1. Le champ, replié</p>
<img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/sk_image.png" alt="" style="width:975px; height:499px; object-fit:contain; object-position:left">
<p class="t24 grey" style="margin-top:4px">2. Le champ, déplié après validation</p>
</div>
<div class="panel" style="height:692px">
<p class="t40" style="margin-bottom:18px"><b>Lier une image IIIF</b></p>
<p style="margin-bottom:18px">L'archiviste colle l'URL de l'image ; à l'enregistrement, docuteam context lit son info.json et affiche :</p>
<p class="t28 dark" style="margin-bottom:9px">la version de l'API et le niveau de conformité</p>
<p class="t28 dark" style="margin-bottom:9px">l'orientation et les dimensions en pixels</p>
<p class="t28 dark" style="margin-bottom:9px">une vignette générée via l'API Image</p>
<p class="t28 dark" style="margin-bottom:18px">des accès à une visionneuse et au fichier info.json</p>
<p class="t24 red"><i>Esquisse de conception : l'interface finale peut différer.</i></p>
<p class="t24 red"><a href="https://www.e-rara.ch/i3f/v20/186955/info.json">L'image e-rara de l'esquisse</a></p>
</div>
</div>

<!-- Esquisse issue de l'EPIC, pas encore développée. Le champ fonctionne comme les autres champs de métadonnées du formulaire. -->

---

## Esquisse | <span>lier un manifeste IIIF</span>

<div class="stage" style="grid-template-columns:816px 710px; column-gap:108px">
<img class="fit" src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/sk_pres.png" alt="">
<div class="panel">
<p class="t40" style="margin-bottom:16px"><b>Lier un manifeste IIIF</b></p>
<p style="margin-bottom:16px">L'archiviste colle l'URL d'un manifeste ou d'une collection ; docuteam context en extrait :</p>
<p class="t28 dark" style="margin-bottom:6px">le type et le titre</p>
<p class="t28 dark" style="margin-bottom:6px">les cinq premières métadonnées</p>
<p class="t28 dark" style="margin-bottom:6px">une vignette : celle du manifeste, sinon la première vue, sinon une image par défaut</p>
<p class="t28 dark" style="margin-bottom:16px">des accès à une visionneuse et au manifeste</p>
<p class="t26 dark" style="margin-bottom:16px"><b>Aperçu technique uniquement : les métadonnées du manifeste ne sont pas importées dans la description.</b></p>
<p class="t24 red"><i>Esquisse de conception : l'interface finale peut différer.</i></p>
<p class="t24 red"><a href="https://www.e-rara.ch/i3f/v20/186941/manifest">Le manifeste e-rara de l'esquisse</a></p>
</div>
</div>

<!-- Un seul manifeste par champ. Le contenu du manifeste n'est pas validé en profondeur. -->

---

## Concrètement | <span>le parcours prévu pour l'archiviste</span>

<div class="stage" style="grid-template-columns:repeat(5,306px); column-gap:26px; grid-template-rows:403px 130px; row-gap:51px; top:300px; height:584px">
<div><div class="dot" style="width:102px; height:102px; font-size:40px; margin:0 auto 29px">1</div><div class="panel center" style="height:272px; padding:24px 20px"><p class="t34" style="margin-bottom:14px"><b>Ajouter</b></p><p class="t28 dark">une instanciation dans le formulaire de la ressource</p></div></div>
<div><div class="dot" style="width:102px; height:102px; font-size:40px; margin:0 auto 29px">2</div><div class="panel center" style="height:272px; padding:24px 20px"><p class="t34" style="margin-bottom:14px"><b>Coller</b></p><p class="t28 dark">l'URL IIIF : info.json ou manifeste</p></div></div>
<div><div class="dot r" style="width:102px; height:102px; font-size:40px; margin:0 auto 29px">3</div><div class="panel center" style="height:272px; padding:24px 20px"><p class="t34" style="margin-bottom:14px"><b>Vérifier</b></p><p class="t28 dark">à l'enregistrement : l'URL répond et renvoie du JSON</p></div></div>
<div><div class="dot" style="width:102px; height:102px; font-size:40px; margin:0 auto 29px">4</div><div class="panel center" style="height:272px; padding:24px 20px"><p class="t34" style="margin-bottom:14px"><b>Prévisualiser</b></p><p class="t28 dark">métadonnées techniques et vignette dans la galerie</p></div></div>
<div><div class="dot" style="width:102px; height:102px; font-size:40px; margin:0 auto 29px">5</div><div class="panel center" style="height:272px; padding:24px 20px"><p class="t34" style="margin-bottom:14px"><b>Consulter</b></p><p class="t28 dark">la ressource dans une visionneuse IIIF</p></div></div>
<div class="outline box-center" style="grid-column:1 / -1; text-align:left; padding:10px 28px"><p><b>Validation volontairement souple : </b>une URL injoignable ou un contenu qui n'est pas du JSON bloque l'enregistrement ; des informations manquantes n'entraînent qu'un avertissement.</p></div>
</div>

<!-- Le parcours tel qu'il est conçu dans les maquettes. -->

---

## Feuille de route | <span>un cap, pas une promesse</span>

<div style="position:absolute; top:439px; left:203px; width:1520px; height:6px; background:#8c8c8c"></div>
<div class="stage" style="grid-template-columns:repeat(3,522px); column-gap:34px; top:278px; height:566px">
<div>
<p class="t32 center" style="height:91px; display:flex; align-items:center; justify-content:center"><b>Aujourd'hui</b></p>
<div style="width:102px; height:102px; border-radius:50%; margin:22px auto 34px; position:relative; z-index:1; box-sizing:border-box; background:#000"></div>
<div class="panel" style="height:317px; box-sizing:border-box; ">
<p class="t24 grey" style="margin-bottom:9px"><b>EN COURS</b></p>
<p class="t34" style="margin-bottom:14px; line-height:1.15"><b>Conception et cadrage</b></p>
<p class="t28 dark">Maquettes de la première étape et scénarios d'architecture iiif-blueprints.</p>
</div>
</div>
<div>
<p class="t32 center red" style="height:91px; display:flex; align-items:center; justify-content:center"><b>docuteam context 1.19 ou 1.20</b></p>
<div style="width:102px; height:102px; border-radius:50%; margin:22px auto 34px; position:relative; z-index:1; box-sizing:border-box; background:#d0101b"></div>
<div class="panel" style="height:317px; box-sizing:border-box; ">
<p class="t24 grey" style="margin-bottom:9px"><b>CIBLE INDICATIVE</b></p>
<p class="t34" style="margin-bottom:14px; line-height:1.15"><b>Lier des ressources IIIF externes</b></p>
<p class="t28 dark">Image et Présentation comme instanciations numériques.</p>
</div>
</div>
<div>
<p class="t32 center" style="height:91px; display:flex; align-items:center; justify-content:center"><b>Ensuite</b></p>
<div style="width:102px; height:102px; border-radius:50%; margin:22px auto 34px; position:relative; z-index:1; box-sizing:border-box; background:#fff; border:5px solid #8c8c8c"></div>
<div class="" style="height:317px; box-sizing:border-box; border:3px solid #8c8c8c; border-radius:14px; padding:28px">
<p class="t24 grey" style="margin-bottom:9px"><b>PISTES À EXPLORER</b></p>
<p class="t34" style="margin-bottom:14px; line-height:1.15"><b>À construire avec vous</b></p>
<p class="t28 dark">Pistes non planifiées : générer des manifestes depuis vos descriptions, diffuser vos images en IIIF, aller vers l'audio et la vidéo.</p>
</div>
</div>
</div>

<!-- Seule la deuxième étape est planifiée, et la version reste indicative. La troisième colonne ouvre la discussion. -->

---

## Discussion | <span>construisons la suite ensemble</span>

<div class="stage" style="grid-template-columns:1168px 426px; column-gap:40px; top:266px; height:680px">
<div style="display:grid; grid-template-rows:repeat(4,102px); row-gap:45px; padding-top:12px; align-content:start">
<div style="display:grid; grid-template-columns:85px 1049px; column-gap:34px; align-items:center"><div class="dot r" style="width:85px; height:85px; font-size:36px">?</div><p class="t34">Disposez-vous déjà d'images ou de manifestes IIIF, chez vous ou chez un prestataire ?</p></div>
<div style="display:grid; grid-template-columns:85px 1049px; column-gap:34px; align-items:center"><div class="dot" style="width:85px; height:85px; font-size:36px">?</div><p class="t34">Quels usages vous seraient les plus utiles : consulter, comparer, diffuser, annoter ?</p></div>
<div style="display:grid; grid-template-columns:85px 1049px; column-gap:34px; align-items:center"><div class="dot" style="width:85px; height:85px; font-size:36px">?</div><p class="t34">Images isolées ou objets complets : qu'est-ce qui correspond le mieux à vos fonds ?</p></div>
<div style="display:grid; grid-template-columns:85px 1049px; column-gap:34px; align-items:center"><div class="dot" style="width:85px; height:85px; font-size:36px">?</div><p class="t34">Qu'attendriez-vous de docuteam après cette première étape ?</p></div>
</div>
<div class="panel" style="height:624px; box-sizing:border-box">
<p class="t34"><b>Pour aller plus loin</b></p>
<p class="red" style="margin-top:20px"><a href="https://iiif.io"><b>iiif.io</b></a></p><p class="t24 dark">le site de la communauté</p>
<p class="red" style="margin-top:20px"><a href="https://guides.iiif.io"><b>guides.iiif.io</b></a></p><p class="t24 dark">trouver des ressources, utiliser des visionneuses</p>
<p class="red" style="margin-top:20px"><a href="https://iiif.io/api"><b>iiif.io/api</b></a></p><p class="t24 dark">les spécifications</p>
<p class="red" style="margin-top:20px"><a href="https://github.com/IIIF/awesome-iiif"><b>Awesome IIIF</b></a></p><p class="t24 dark">outils et ressources recensés par la communauté</p>
</div>
</div>

<!-- (10 minutes) Recueillir les besoins concrets et noter les réponses pour la priorisation. -->

---

<h2 style="top:140px">Contact</h2>

<div style="position:absolute; top:240px; left:130px; width:660px; font-size:32px; line-height:1.3">
<p><b>Julien A. Raemy</b><br>Semantic Architect &amp; Chef de projet<br><span style="color:#4472c4">j.raemy@docuteam.ch</span><br><br><b>docuteam SA</b><br>Av. de Grandson 48<br>CH-1400 Yverdon-les-Bains<br>Tél : +41 21 510 21 81<br><a href="https://www.docuteam.ch/" style="color:#4472c4">https://www.docuteam.ch/</a></p>
</div>
<img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/contact.jpg" alt="" style="position:absolute; top:156px; left:816px; width:972px; height:767px; object-fit:cover">
<img src="https://julsraemy.ch/prezi/assets/cc-by-sa.svg" alt="CC BY-SA" style="position:absolute; top:962px; left:816px; width:193px; height:67px; object-fit:contain">
