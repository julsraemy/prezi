---
marp: true
lang: de
author: Julien A. Raemy
title: "Kurs auf IIIF: Was bei docuteam in Vorbereitung ist"
description: Präsentation von Julien A. Raemy am docuteam Community Day 2026 in Zürich am 5. November 2026 über IIIF und die Pläne von docuteam
keywords: IIIF, docuteam, Archive, Interoperabilität, Image API, Presentation API, docuteam context
image: https://julsraemy.ch/prezi/assets/og/kurs-auf-iiif-docuteam.jpg
url: https://julsraemy.ch/prezi/kurs-auf-iiif-docuteam.html
presented: 2026-11-05
event: 'docuteam Community Day 2026'
place: 'Zürich, Switzerland'
theme: docuteam
paginate: true
_paginate: false
---

<!-- _class: cover -->

<img class="hero" src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/title.jpg" alt="">

# Kurs auf IIIF: Was bei docuteam in Vorbereitung ist

<p>Zürich, Community Day 2026 | Julien A. Raemy<br>05.11.2026</p>

<!-- Hallo allerseits, ich möchte euch ein wenig über IIIF erzählen und was bei docuteam gerade in Vorbereitung ist. Erstens: Wer hat schon von IIIF gehört? -->

---

<!-- _class: about -->

## Über mich

<img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/photo-julien.jpg" alt="Julien A. Raemy">
<div class="who">
<p class="t34 red"><b>Julien A. RAEMY</b></p>
<p><b>Semantic Architect &amp; Projektleiter</b></p>
<p class="dark">Spezialist für Kulturerbe und Interoperabilität. Mitglied der IIIF- und der Linked-Art-Community</p>
</div>

<!-- Mein Name is Julien Raemy, ich bin PL und Semantic Architect. Ich bin sehr aktiv in den IIIF-Communities sowie bei «Linked Art», einer Community, die ein Anwendungsprofil für CIDOC CRM entwickelt. -->

---

## Ablauf | <span>vier Schritte</span>

<div class="stage agenda">
<div><div class="dot">01</div><p class="step">Warum IIIF?</p><p class="dark">Das Problem von Bildern, die in Silos eingeschlossen sind</p></div>
<div><div class="dot">02</div><p class="step">Was IIIF ermöglicht</p><p class="dark">Ein schneller Rundgang durch konkrete Beispiele</p></div>
<div><div class="dot">03</div><p class="step">Wie es funktioniert</p><p class="dark">Zwei APIs im Kern des Standards</p></div>
<div><div class="dot r">04</div><p class="step">Kurs docuteam</p><p class="dark">Unser erster Schritt und alles Weitere, gemeinsam zu gestalten</p></div>
</div>

<!-- Ich werde mit einer Einführung zum Thema IIIF beginnen: Warum brauchen wir diese Reihe von Standards, was ermöglichen sie, wie funktionieren sie und was ist bei docuteam in Vorbereitung? Teil 4 ist eine Orientierungshilfe und befindet sich noch auf konzeptioneller Ebene. -->

---

## Was ist IIIF? | <span>eine Reihe von Standards</span>

<div class="stage" style="grid-template-columns:537px 1010px; column-gap:87px; top:272px; height:652px">
<img src="https://julsraemy.ch/prezi/assets/IIIF-logo-500w.png" alt="IIIF" style="width:537px; height:539px; object-fit:contain">
<div>
<p class="t44" style="line-height:1.15; margin-bottom:6px"><b>International Image Interoperability Framework</b></p>
<p class="t28 grey" style="margin-bottom:34px"><i>ausgesprochen «Triple-I-F»</i></p>
<p class="t36" style="margin-bottom:23px"><b>Ein Modell</b> zur Darstellung und Annotation digitaler Objekte.</p>
<p class="t36" style="margin-bottom:34px"><b>Eine weltweite Community,</b> die gemeinsame APIs entwickelt, diese in Software umsetzt und interoperable Inhalte im Web bereitstellt.</p>
<p class="dark" style="margin-bottom:34px">2011 aus einer Initiative von Gedächtnisinstitutionen entstanden, darunter Oxford, Stanford und die British Library.</p>
<p class="t32 red"><a href="https://iiif.io">iiif.io</a></p>
</div>
</div>

<!-- Man kann IIIF sowohl als Modell als auch als Gemeinschaft verstehen, die gemeinsam offene Programmierschnittstellen entwickelt. -->

---

## Eine weltweite Community | <span>und offen</span>

<div class="stage" style="grid-template-columns:1077px 511px; column-gap:46px; height:663px">
<div>
<img src="https://julsraemy.ch/prezi/assets/iiif-map.png" alt="Karte der Institutionen, die IIIF nutzen" style="width:1077px; height:594px; object-fit:contain; object-position:left top">
<p class="t24 red" style="margin-top:26px"><a href="https://bit.ly/iiifmap">Karte der Institutionen, die IIIF nutzen: bit.ly/iiifmap</a></p>
</div>
<div style="display:grid; grid-template-rows:repeat(4,153px); row-gap:17px">
<div class="card" style="padding:8px 16px; line-height:1.2"><p><b>Bibliotheken</b></p><p class="t24 dark">BnF, British Library, Library of Congress, Vatikanische Bibliothek, Nationalbibliotheken von Wales und Schottland</p></div>
<div class="card" style="padding:8px 16px; line-height:1.2"><p class="red"><b>Archive</b></p><p class="t24 dark">Schweizerisches Bundesarchiv, Schwedisches Reichsarchiv, Internet Archive</p></div>
<div class="card" style="padding:8px 16px; line-height:1.2"><p><b>Museen</b></p><p class="t24 dark">Rijksmuseum, Victoria &amp; Albert Museum, National Gallery of Art, Getty, Yale Center for British Art</p></div>
<div class="card" style="padding:8px 16px; line-height:1.2"><p><b>Universitäten und Aggregatoren</b></p><p class="t24 dark">Cambridge, Harvard, Oxford, Stanford, Europeana, DPLA, Wikimedia</p></div>
</div>
</div>

<!-- Es handelt sich um eine weltweite Community, die vor allem in Gedächtnisinstitutionen angesiedelt ist und sich zum grössten Teil in Nordamerika und Europa befindet. Ich habe einige Beispiele aufgelistet. Und das sind nur die bekannten Institutionen: Da IIIF offen ist, kann es jede und jeder umsetzen, ohne sich zu melden. -->

---

## IIIF in der Schweiz | <span>bereits breit eingeführt</span>

<div class="stage" style="grid-template-columns:repeat(3,526px); column-gap:28px; height:686px">
<div class="panel" style="background:#000; color:#fff">
<p class="t34"><b>Verbundplattformen</b></p>
<p style="color:#ff8a8a; margin-top:12px; line-height:1.15"><a href="https://www.e-codices.ch/"><b>e-codices</b></a></p><p class="t24" style="color:#cfcfcf; line-height:1.15">Handschriften</p>
<p style="color:#ff8a8a; margin-top:12px; line-height:1.15"><a href="https://www.e-manuscripta.ch/"><b>e-manuscripta</b></a></p><p class="t24" style="color:#cfcfcf; line-height:1.15">handschriftliche Quellen</p>
<p style="color:#ff8a8a; margin-top:12px; line-height:1.15"><a href="https://www.e-rara.ch/"><b>e-rara</b></a></p><p class="t24" style="color:#cfcfcf; line-height:1.15">digitalisierte Drucke</p>
<p style="color:#ff8a8a; margin-top:12px; line-height:1.15"><a href="https://fragmentarium.ms/"><b>Fragmentarium</b></a></p><p class="t24" style="color:#cfcfcf; line-height:1.15">mittelalterliche Fragmente</p>
<p style="color:#ff8a8a; margin-top:12px; line-height:1.15"><a href="https://zentralgut.ch/"><b>ZentralGut</b></a></p><p class="t24" style="color:#cfcfcf; line-height:1.15">Zentralschweiz</p>
</div>
<div class="panel">
<p class="t34"><b>Archive und Forschung</b></p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><b>Schweizerisches Bundesarchiv</b></p><p class="t24" style="color:#8c8c8c; line-height:1.15"><a href="https://www.recherche.bar.admin.ch/">Online-Zugang</a>, <a href="https://www.chgov.bar.admin.ch/">Protokolle des Bundesrates</a>, <a href="https://www.alptransit-portal.ch/">Alptransit-Portal</a></p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://www.dasch.swiss"><b>DaSCH</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">Mitglied des Konsortiums</p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://www.unibe.ch/"><b>Universität Bern</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">Mitglied des Konsortiums</p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://www.parc-portal.org/"><b>PARC</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">Universität Basel</p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://visualcontagions.unige.ch/explore/"><b>Visual Contagions</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">Université de Genève</p>
</div>
<div class="panel">
<p class="t34"><b>Museen und Kultur</b></p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://iiif.kumu.swiss/"><b>Kunstmuseum Basel</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">Online-Sammlung</p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://digital.kunsthaus.ch/"><b>Kunsthaus Zürich</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">Online-Sammlung</p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://bodmerlab.unige.ch/"><b>BodmerLab</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">UNIGE</p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://plume.epfl.ch/"><b>Plume</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">EPFL, wertvolle Bestände</p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://www.bilder-der-schweiz.online"><b>Bilder der Schweiz online</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">Fotografie</p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://www.performing-arts.ch/"><b>Performing Arts</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">SAPA</p>
<p style="color:#d0101b; margin-top:12px; line-height:1.15"><a href="https://digital.skkg.ch/"><b>SKKG</b></a></p><p class="t24" style="color:#8c8c8c; line-height:1.15">Stiftung, Winterthur</p>
</div>
</div>
<p class="grey" style="position:absolute; top:956px; left:146px; width:1540px; font-size:20px"><b>Nicht abschliessende Liste:</b> Der Bericht <i>IIIF in Switzerland</i> (siehe unten) bietet einen breiteren Überblick. Es gibt in der Schweiz weitere IIIF-Umsetzungen, die nicht (vollständig) mit den Spezifikationen kompatibel sind.<br>Raemy, J. A. (2026). <i>IIIF in Switzerland: A landscape of compatible platforms and engaged institutions</i> [Report]. University of Bern. <a href="https://doi.org/10.5281/zenodo.23242983">https://doi.org/10.5281/zenodo.23242983</a></p>

<!-- Die Einführung von IIIF in der Schweiz begann zunächst mit Plattformen für Handschriften und alte Bücher, hauptsächlich von Kulturerbe- und Universitätsbibliotheken, und mittlerweile gibt es immer mehr Umsetzungen im akademischen Bereich, in Archiven und Museen. -->

---

## Warum IIIF? | <span>Bilder tragen Information</span>

<div class="stage" style="grid-template-columns:repeat(4,383px); column-gap:34px; grid-template-rows:604px 68px; top:266px; height:680px">
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/redon.jpg" alt="" style="width:383px; height:488px; object-fit:contain; object-position:center bottom"><p class="t24 grey center" style="margin-top:11px">Odilon Redon, Ophelia, 1906. Art Institute of Chicago</p></div>
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/turtle.jpg" alt="" style="width:383px; height:488px; object-fit:contain; object-position:center bottom"><p class="t24 grey center" style="margin-top:11px">Rob Stevenson, Tüpfelschildkröte, 2004. CC BY 3.0, via Artstor</p></div>
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/zebra.jpg" alt="" style="width:383px; height:488px; object-fit:contain; object-position:center bottom"><p class="t24 grey center" style="margin-top:11px">Asymmetrische Zellteilung in einem Zebrafisch-Embryo, 2015. Wellcome Collection, CC BY</p></div>
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/tribune.jpg" alt="" style="width:383px; height:488px; object-fit:contain; object-position:center bottom"><p class="t24 grey center" style="margin-top:11px">New-York Tribune, 16. Februar 1919. Library of Congress</p></div>
<p class="t40 center" style="grid-column:1 / -1"><b>Bilder sind grundlegende Informationsträger des kulturellen Erbes.</b></p>
</div>

<!-- Kunst, Naturwissenschaften, Medizin, Presse: Das Bild steht im Zentrum aller Kulturerbebestände. -->

---

## Das Problem | <span>eine Welt der Silos</span>

<div class="stage" style="grid-template-columns:635px 964px; column-gap:68px; top:278px; height:690px; width:1667px">
<div>
<p class="t44" style="margin-bottom:28px"><b>Eine Welt von Silos und Doppelspurigkeiten</b></p>
<img src="https://julsraemy.ch/prezi/assets/silos.png" alt="Silos" style="width:392px; height:233px; object-fit:cover; margin-bottom:20px">
<p class="t34" style="line-height:1.32; margin-bottom:23px">Die Bereitstellung von Bildern im Web war lange schwierig, langsam, teuer und abgeschottet.</p>
<p class="t34 dark" style="line-height:1.32">Jede Institution hat ihre eigene Technologie: Bilder werden kopiert, zugeschnitten, verkleinert, und die Verbindung zur Quelle geht verloren.</p>
</div>
<div style="display:grid; grid-template-rows:auto 91px; row-gap:51px; align-content:start">
<div style="display:grid; grid-template-columns:300px 32px 300px 32px 300px">
<div style="display:grid; grid-template-rows:51px 108px 108px 108px; row-gap:22px"><p class="center"><b>Archiv A</b></p><div class="card box-center t26" style="padding:11px">Eigener Viewer</div><div class="card box-center t26" style="padding:11px">Eigene Metadaten</div><div class="dark-box box-center t26" style="padding:11px">Server</div></div>
<p class="t40 red center" style="align-self:center; line-height:1.15"><b>✕</b></p>
<div style="display:grid; grid-template-rows:51px 108px 108px 108px; row-gap:22px"><p class="center"><b>Bibliothek B</b></p><div class="card box-center t26" style="padding:11px">Eigener Viewer</div><div class="card box-center t26" style="padding:11px">Eigene Metadaten</div><div class="dark-box box-center t26" style="padding:11px">Server</div></div>
<p class="t40 red center" style="align-self:center; line-height:1.15"><b>✕</b></p>
<div style="display:grid; grid-template-rows:51px 108px 108px 108px; row-gap:22px"><p class="center"><b>Museum C</b></p><div class="card box-center t26" style="padding:11px">Eigener Viewer</div><div class="card box-center t26" style="padding:11px">Eigene Metadaten</div><div class="dark-box box-center t26" style="padding:11px">Server</div></div>
</div>
<div class="box-center t28 red" style="border:3px solid #d0101b; border-radius:9px; line-height:1.15"><b>Keine Interoperabilität: Man muss von Website zu Website wechseln.</b></div>
</div>
</div>

<!-- Jede Plattform hat ihren Viewer, ihre Formate, ihre Kopien. Das bedeutet: technologische Silos, schlechte oder gar lächerliche Lösungen. -->

---

## Die Lösung | <span>Interoperabilität über APIs</span>

<div class="stage" style="grid-template-columns:646px 74px 249px 46px 283px 46px 272px; top:278px; height:567px; width:1616px">
<div>
<p class="t44" style="margin-bottom:34px"><b>IIIF trennt die Speicherung der Bilder von ihrer Nutzung.</b></p>
<p class="t34" style="line-height:1.32; margin-bottom:34px">Jeder kompatible Viewer kann jede kompatible Ressource anzeigen, ohne Kopie und ohne Sonderentwicklung.</p>
<p class="t34 red" style="line-height:1.32"><b>Die Bilder bleiben bei ihren Eigentümern; was zirkuliert, sind die Nutzungen.</b></p>
</div>
<div></div>
<div style="display:grid; grid-template-rows:repeat(3,130px); row-gap:40px; margin-top:28px; align-content:start">
<div class="dark-box box-center t26"><b>Ihr Archiv</b></div>
<div class="dark-box box-center t26"><b>Eine Bibliothek</b></div>
<div class="dark-box box-center t26"><b>Ein Museum</b></div>
</div>
<p class="center" style="font-size:48px; align-self:center; font-weight:700; margin-top:28px">→</p>
<div class="red-box box-center" style="margin-top:28px; height:471px; border-radius:11px">
<p class="t44" style="line-height:1.15"><b>IIIF-APIs</b></p>
<p class="t28">eine gemeinsame Sprache</p>
</div>
<p class="center" style="font-size:48px; align-self:center; font-weight:700; margin-top:28px">→</p>
<div style="display:grid; grid-template-rows:repeat(3,130px); row-gap:40px; margin-top:28px; align-content:start">
<div class="card box-center t28 red"><a href="https://projectmirador.org/"><b>Mirador</b></a></div>
<div class="card box-center t28 red"><a href="https://universalviewer.io/"><b>Universal Viewer</b></a></div>
<div class="card box-center t28"><b>Ihre Werkzeuge</b></div>
</div>
</div>

<!-- IIIF trennt die Speicherung der Bilder von ihrer Nutzung. Das bedeutet, dass man IIIF als gemeinsame Sprache ansehen kann und problemlos den Server oder den Viewer wechseln sowie die Ressourcen einer Institution in einem Viewer einer anderen Institution darstellen kann. -->

---

## Was IIIF ermöglicht | <span>Tiefzoom</span>

<div class="stage example">
<img class="fit" src="https://julsraemy.ch/prezi/assets/iiif_deepzoom.gif" alt="Tiefzoom">
<div class="panel">
<p class="verb">Zoomen</p>
<p class="lead">Bilder in sehr hoher Auflösung, die beim Navigieren kachelweise geladen werden.</p>
<p class="online">Online ansehen</p>
<p class="link"><a href="https://purl.stanford.edu/hs631zg4177">Stanford Libraries</a></p>
</div>
</div>

<!-- Der erste historische Anwendungsfall: eine grosse Karte oder einen Plan im Detail lesen, ohne eine riesige Datei herunterzuladen. -->

---

## Was IIIF ermöglicht | <span>Vergleich von Ressourcen</span>

<div class="stage example">
<img class="fit" src="https://julsraemy.ch/prezi/assets/compare.gif" alt="Vergleich">
<div class="panel">
<p class="verb">Vergleichen</p>
<p class="lead">Dokumente nebeneinander anzeigen, ob sie aus derselben Institution stammen oder nicht.</p>
<p class="caption">Brief vom 6. September 1780, Library of Congress, Alexander Hamilton Papers</p>
</div>
</div>

<!-- Der Vergleich ist eine zentrale Arbeitsmethode der Forschung. -->

---

## Was IIIF ermöglicht | <span>Zusammenführung verstreuter Bestände</span>

<div class="stage example">
<img class="fit" src="https://julsraemy.ch/prezi/assets/biblissima-demo.gif" alt="Biblissima">
<div class="panel">
<p class="verb long">Wiedervereinigen</p>
<p class="lead">Eine Handschrift virtuell rekonstruieren, deren Text und Miniatur sich in zwei Institutionen befinden.</p>
<p class="caption">Handschrift 5 der Bibliothèque municipale de Châteauroux, um 1460: Blatt in der BVMM, Miniatur in der BnF</p>
<p class="online">Online ansehen</p>
<p class="link"><a href="https://demos.biblissima.fr/chateauroux/demo/">Biblissima-Demonstrator</a></p>
</div>
</div>

<!-- Die Handschrift wurde verstümmelt, die Miniatur landete in der BnF. Da beide Institutionen ihre Bilder über IIIF bereitstellen, lassen sie sich wieder zusammenführen. -->

---

## Was IIIF ermöglicht | <span>Volltextsuche</span>

<div class="stage example">
<img class="fit" src="https://julsraemy.ch/prezi/assets/content-search.gif" alt="Suche">
<div class="panel">
<p class="verb">Suchen</p>
<p class="lead">Ein Wort im OCR-Text oder in der Transkription suchen und direkt auf dem Bild wiederfinden.</p>
<p class="caption">Kendal Franks, The Germ Theory. Wellcome Library, gemeinfrei</p>
<p class="online">Online ansehen</p>
<p class="link"><a href="https://wellcomecollection.org/">Wellcome Collection</a></p>
</div>
</div>

<!-- Content Search API: Der Treffer wird auf der Seite sichtbar markiert. -->

---

## Was IIIF ermöglicht | <span>Annotationen</span>

<div class="stage example">
<img class="fit" src="https://julsraemy.ch/prezi/assets/harvard-anno.gif" alt="Annotationen">
<div class="panel">
<p class="verb">Annotieren</p>
<p class="lead">Kommentare, Transkriptionen oder Identifikationen zu einem bestimmten Bildbereich hinzufügen.</p>
<p class="online">Online ansehen</p>
<p class="link"><a href="https://courses.edx.org/courses/course-v1:HarvardX+MCB64.1x+2T2016/d16e07a5cec442eeb7cd9dfcb695dce0/">HarvardX, Kurs in Zellbiologie</a></p>
</div>
</div>

<!-- Die Annotationen folgen dem Web Annotation Data Model des W3C und bleiben dadurch interoperabel. Hier ein Beispiel aus Harvard im Mirador-Viewer. -->

---

## Was IIIF ermöglicht | <span>Crowdsourcing</span>

<div class="stage example">
<img class="fit" src="https://julsraemy.ch/prezi/assets/crowdsourcing-nlw.gif" alt="Crowdsourcing">
<div class="panel">
<p class="verb">Mitwirken</p>
<p class="lead">Das Publikum einbeziehen, um Personen, Orte oder Gegenstände auf Digitalisaten zu identifizieren.</p>
<p class="caption dark t26">Projekt Torf der National Library of Wales, umgesetzt mit der Plattform Madoc von Digirati</p>
</div>
</div>

<!-- Crowdsourcing: Die lokale Bevölkerung identifiziert die Personen auf den Fotos. Annotationen lassen sich auch geografisch verorten. Man kann IIIF hier als Mediationstool verwenden. -->

---

## Was IIIF ermöglicht | <span>Storytelling</span>

<div class="stage example">
<img class="fit" src="https://julsraemy.ch/prezi/assets/storiiies.gif" alt="Storiiies">
<div class="panel">
<p class="verb">Erzählen</p>
<p class="lead">Das Publikum mit einer Abfolge von Annotationen durch ein Bild führen, wie bei einer Führung.</p>
<p class="online">Online ansehen</p>
<p class="link"><a href="https://www.cogapp.com/r-d/storiiies">Storiiies, Cogapp</a></p>
</div>
</div>

<!-- Ein einfaches Vermittlungswerkzeug, das auf IIIF-Annotationen aufbaut. -->

---

## Was IIIF ermöglicht | <span>Überlagerung von Aufnahmeverfahren</span>

<div class="stage example">
<img class="fit" src="https://julsraemy.ch/prezi/assets/Leiden_curtain_viewer.gif" alt="Leiden Curtain Viewer">
<div class="panel">
<p class="verb">Überlagern</p>
<p class="lead">Verschiedene Bildebenen desselben Werks vergleichen: sichtbares Licht, Infrarot, Röntgen.</p>
<p class="online">Online ansehen</p>
<p class="link"><a href="https://www.theleidencollection.com/viewer/david-and-uriah/">The Leiden Collection, Curtain Viewer</a></p>
</div>
</div>

<!-- Interessant für Restaurierung und Materialforschung. -->

---

## Was IIIF ermöglicht | <span>Über Bilder hinaus</span>

<div class="stage example">
<img class="fit" src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/utk-iiif-av.gif" alt="UTK">
<div class="panel">
<p class="verb">Hören</p>
<p class="lead">IIIF beschreibt auch Audio und Video: Ein Interview lässt sich mit synchronisierter Transkription präsentieren.</p>
<p class="caption">Interview mit Adesola Odunayo, 23. April 2020</p>
<p class="online">Online ansehen</p>
<p class="link"><a href="https://rfta.lib.utk.edu/interviews/object/adesola-odunayo-2020-04-23/">Rising from the Ashes, University of Tennessee</a></p>
<p class="link"><a href="https://digital.lib.utk.edu/assemble/manifest/rfta/86">Das zugehörige IIIF-Manifest</a></p>
</div>
</div>

<!-- Relevant für audiovisuelle Archive und Oral History. -->

---

## Was IIIF ermöglicht | <span>Vermitteln und ausstellen</span>

<div class="stage" style="grid-template-columns:800px 800px; column-gap:34px; grid-template-rows:408px 79px 113px; row-gap:11px; height:685px">
<img class="fit" src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/selfmuseum.jpg" alt="Self Museum">
<img class="fit" src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/imaginarium.jpg" alt="Imaginarium" style="object-position:center bottom">
<div><p><b>Ein eigenes virtuelles Museum erstellen</b></p><p class="t26 red"><a href="https://self-museum.cultural.jp/">Self Museum, Cultural Japan</a></p></div>
<div><p><b>Eine immersive Ausstellung</b></p><p class="t26 red"><a href="https://imaginarium.nationalgallery.org.uk/">Imaginarium, National Gallery (London)</a></p></div>
<div class="outline" style="grid-column:1 / -1; margin-top:50px; padding:10px 28px; height:95px"><p><b>Ein Fotoarchiv erkunden: </b><a class="red" href="https://12sunsets.getty.edu/">12 Sunsets, die Fotografien des Sunset Boulevard von Ed Ruscha</a> (Getty Research Institute), mit IIIF als Vermittler.</p></div>
</div>

<!-- Drei Vermittlungsbeispiele. 12 Sunsets ist für einen fotografischen Archivbestand besonders anschaulich. -->

---

## Wie es funktioniert | <span>zwei Kern-APIs</span>

<div class="stage" style="grid-template-columns:533px 533px 494px; column-gap:29px; height:686px; width:1650px">
<div class="panel" style="height:686px">
<img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/puzimg.png" alt="" style="width:189px; height:215px; object-fit:contain; margin:0 auto 23px">
<p class="t48" style="margin-bottom:12px"><b>Image API</b></p>
<p class="t32 red" style="margin-bottom:14px"><b>Pixel liefern</b></p>
<p class="dark" style="margin-bottom:14px">Ein einfacher Webdienst: eine standardisierte Adresse, um ein Bild, einen Ausschnitt, eine Grösse oder eine Drehung abzufragen.</p>
<p class="t26 red"><a href="https://iiif.io/api/image/3.0/">Spezifikation</a></p>
</div>
<div class="panel" style="height:686px">
<img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/puzpres.png" alt="" style="width:303px; height:215px; object-fit:contain; margin:0 auto 23px">
<p class="t48" style="margin-bottom:12px"><b>Presentation API</b></p>
<p class="t32 red" style="margin-bottom:14px"><b>Das Objekt beschreiben</b></p>
<p class="dark" style="margin-bottom:14px">Gerade genug Metadaten, um das Objekt korrekt darzustellen: Struktur, Reihenfolge der Ansichten, Beschriftungen.</p>
<p class="t26 red"><a href="https://iiif.io/api/presentation/3.0/">Spezifikation</a></p>
</div>
<div style="display:grid; grid-template-rows:57px repeat(4,119px); row-gap:17px; align-content:start">
<p class="t32"><b>Vier weitere Spezifikationen</b></p>
<div class="card" style="height:119px"><p class="t28 red"><a href="https://iiif.io/api/auth/"><b>Authorization Flow</b></a></p><p class="t24 dark">eingeschränkter Zugang</p></div>
<div class="card" style="height:119px"><p class="t28 red"><a href="https://iiif.io/api/discovery/"><b>Change Discovery</b></a></p><p class="t24 dark">Änderungen einsammeln (Harvesting)</p></div>
<div class="card" style="height:119px"><p class="t28 red"><a href="https://iiif.io/api/search/"><b>Content Search</b></a></p><p class="t24 dark">Volltextsuche</p></div>
<div class="card" style="height:119px"><p class="t28 red"><a href="https://iiif.io/api/content-state/"><b>Content State</b></a></p><p class="t24 dark">eine bestimmte Ansicht teilen</p></div>
</div>
</div>

<!-- Image und Presentation sind die Kern-APIs von IIIF, und genau diese beiden nimmt docuteam zuerst ins Visier. -->

---

## Wie es funktioniert | <span>die beiden APIs in Mirador</span>

<div class="stage" style="grid-template-columns:1219px 370px; column-gap:45px; top:268px; height:666px">
<img class="fit" src="https://julsraemy.ch/prezi/assets/mirador-coreapis.png" alt="Mirador mit den beiden APIs">
<div>
<p class="t36 red"><b>Presentation API</b></p>
<p class="t28 dark" style="margin-bottom:34px">Titel, Metadaten, Struktur, Seitenreihenfolge</p>
<p class="t36" style="color:#1f5f99"><b>Image API</b></p>
<p class="t28 dark" style="margin-bottom:34px">die Pixel, im richtigen Ausschnitt und in der richtigen Grösse</p>
<p><b>IIIF verbindet Bilder und Metadaten eng: Die Bilder bleiben kontextualisiert.</b></p>
</div>
</div>

<!-- Die Image-API könnte man auch als Pixel-API bezeichnen. Was die Presentation API betrifft, so handelt es sich dabei gewissermassen um das Bindemittel von IIIF, das einem digitalen Objekt eine Struktur gibt und die Möglichkeit bietet, deskriptive und rechtliche Metadaten zu verknüpfen. -->

---

## Wie es funktioniert | <span>ein Ökosystem</span>

<div class="stage" style="grid-template-rows:544px 113px; row-gap:28px; height:685px">
<img class="fit" src="https://julsraemy.ch/prezi/assets/iiif-ecosystem.png" alt="IIIF-Ökosystem">
<div class="panel" style="padding:14px 28px"><p><b>Eine klar definierte Schnittstelle macht die Bausteine austauschbar: </b>Man kann den Viewer, den Server oder beides wechseln und über mehrere Repositorien hinweg suchen oder annotieren.</p></div>
</div>

<!-- Dank der Normalisierung durch die APIs kann man über mehrere Repositorien hinweg suchen, Annotationen anderer Institutionen sehen oder die Bilder einer Institution in einer Drittanwendung anzeigen. -->

---

## Die Image API | <span>eine Adresse, die alles sagt</span>

<div class="stage" style="grid-template-rows:159px 221px 244px; row-gap:24px; top:272px; height:680px; align-content:start">
<div style="display:grid; grid-template-columns:420px 244px 244px 244px 391px; column-gap:20px; width:1621px">
<div><div class="dark-box box-center t26" style="height:91px; border-radius:7px"><b>{server}/{identifier}</b></div><p class="t24 dark center" style="margin-top:11px">wo sich das Bild befindet</p></div>
<div><div class="red-box box-center t26" style="height:91px; border-radius:7px"><b>{region}</b></div><p class="t24 dark center" style="margin-top:11px">full, x,y,w,h, pct:…</p></div>
<div><div class="red-box box-center t26" style="height:91px; border-radius:7px"><b>{size}</b></div><p class="t24 dark center" style="margin-top:11px">max, 1000, …</p></div>
<div><div class="red-box box-center t26" style="height:91px; border-radius:7px"><b>{rotation}</b></div><p class="t24 dark center" style="margin-top:11px">0, 90, !0 …</p></div>
<div><div class="red-box box-center t26" style="height:91px; border-radius:7px"><b>{quality}.{format}</b></div><p class="t24 dark center" style="margin-top:11px">default.jpg, gray.png …</p></div>
</div>
<div style="display:grid; grid-template-columns:800px 800px; column-gap:34px">
<div class="panel" style="padding:18px 28px">
<p class="t28" style="margin-bottom:6px"><b>Version 2.1</b></p>
<p class="t24 grey">Ganzes Bild</p>
<p class="t24 red" style="margin-bottom:6px"><a href="https://www.e-manuscripta.ch/i3f/V21/2886901/full/full/0/default.jpg">…/full/full/0/default.jpg</a></p>
<p class="t24 grey">Technische Informationen</p>
<p class="t24 red"><a href="https://www.e-manuscripta.ch/i3f/V21/2886901/info.json">…/info.json</a></p>
</div>
<div class="panel" style="padding:18px 28px">
<p class="t28" style="margin-bottom:6px"><b>Version 3.0</b></p>
<p class="t24 grey">Ganzes Bild</p>
<p class="t24 red" style="margin-bottom:6px"><a href="https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/full/max/0/default.jpg">…/full/max/0/default.jpg</a></p>
<p class="t24 grey">Technische Informationen</p>
<p class="t24 red"><a href="https://iiif.dasch.swiss/0812/276uIbjSulF-k5RrtYZ3LUA.jpx/info.json">…/info.json</a></p>
</div>
</div>
<div class="outline" style="height:244px">
<p class="t32" style="margin-bottom:9px"><b>Die Datei info.json</b></p>
<p class="dark" style="margin-bottom:14px">Sie enthält die Abmessungen des Bildes, die verfügbaren Grössen und Formate sowie die Konformitätsstufe des Servers. Genau diese Datei liest docuteam context als Erstes bei einem IIIF-Bild.</p>
<p class="t26"><b>Einige IIIF-Bildserver:</b> <a class="red" href="https://cantaloupe-project.github.io/">Cantaloupe</a>, <a class="red" href="https://iipimage.sourceforge.io/">IIPImage</a>, <a class="red" href="https://github.com/dasch-swiss/sipi">SIPI</a>, <a class="red" href="https://github.com/dbmdz/wolpi">Wolpi</a></p>
</div>
</div>

<!-- Einen Link öffnen und dann Grösse oder Drehung direkt in der URL ändern, um die Einfachheit zu zeigen. -->

---

## Die Image API | <span>Parameter und Kacheln</span>

<div class="stage" style="grid-template-columns:714px 874px; column-gap:46px; grid-template-rows:584px 68px; row-gap:28px; height:680px">
<img class="fit" src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/params.png" alt="Parameter der Image API">
<img class="fit" src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/tile-pyramid.gif" alt="Kachelpyramide">
<p class="t26 dark center">Region, Grösse, Drehung, Qualität: Jeder Parameter verändert das Bild on the fly.</p>
<p class="t26 dark center">Die Kachelpyramide ermöglicht flüssiges Zoomen. <a class="red" href="https://observablehq.com/@allmaps/tile-pyramid">Allmaps-Demo</a></p>
</div>

<!-- Der Server berechnet das angeforderte Bild on the fly: Übertragen wird nur, was angezeigt wird. -->

---

## Die Presentation API | <span>Manifeste und Collections</span>

<div class="stage" style="grid-template-columns:918px 670px; column-gap:46px; top:266px; height:680px">
<div>
<div style="display:grid; grid-template-columns:221px 1fr; column-gap:17px; margin-left:0px; margin-bottom:37px; height:102px"><div class="dark-box box-center"><b>Collection</b></div><p class="t28 dark" style="align-self:center; line-height:1.2">fasst Manifeste zusammen, z. B. eine Serie oder einen Bestand</p></div>
<div style="display:grid; grid-template-columns:221px 1fr; column-gap:17px; margin-left:51px; margin-bottom:37px; height:102px"><div class="red-box box-center"><b>Manifest</b></div><p class="t28 dark" style="align-self:center; line-height:1.2">ein Objekt, z. B. ein Dossier, ein Register, ein Album</p></div>
<div style="display:grid; grid-template-columns:221px 1fr; column-gap:17px; margin-left:102px; margin-bottom:37px; height:102px"><div class="dark-box box-center"><b>Canvas</b></div><p class="t28 dark" style="align-self:center; line-height:1.2">eine Ansicht: eine Seite, eine Bildseite, eine Fotografie</p></div>
<div style="display:grid; grid-template-columns:221px 1fr; column-gap:17px; margin-left:153px; margin-bottom:37px; height:102px"><div class="dark-box box-center"><b>Content</b></div><p class="t28 dark" style="align-self:center; line-height:1.2">der Inhalt auf der Ansicht: Bild, Text, Ton</p></div>
<div class="outline" style="padding:12px 24px; margin-top:48px"><p><b>Ein Objekt = ein Manifest.</b> Es ist die zentrale Einheit von IIIF: Ein Viewer braucht nur dessen URL.</p></div>
</div>
<div>
<img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/manifest_json.png" alt="Manifest (JSON)" style="width:670px; height:445px; object-fit:contain; margin-bottom:18px">
<p class="t26 dark" style="margin-bottom:9px">Ein Manifest ist eine einfache JSON-LD-Datei auf einem Server.</p>
<p class="t24 red"><a href="https://www.e-codices.ch/metadata/iiif/zbs-S-0160/manifest.json">Manifest e-codices, Solothurn Cod. S 160</a></p>
<p class="t24 red"><a href="https://www.e-codices.ch/en/searchresult/list/one/zbs/S-0160">Der zugehörige Katalogeintrag</a></p>
</div>
</div>

<!-- Die Hierarchie erinnert an die archivische Verzeichnung, ersetzt diese aber nicht: Während das Manifest der Anzeige gilt, bleibt die Verzeichnung im Archivsystem bestehen. -->

---

## Viewer zur Auswahl | <span>austauschbar</span>

<div class="stage" style="grid-template-columns:repeat(3,522px); column-gap:34px; grid-template-rows:repeat(2,325px); row-gap:26px; top:268px; height:680px">
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/v_mirador.jpg" alt="" style="width:522px; height:264px; object-fit:contain"><p class="t28 red center" style="margin-top:12px"><a href="https://projectmirador.org/"><b>Mirador</b></a></p></div>
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/v_uv.jpg" alt="" style="width:522px; height:264px; object-fit:contain"><p class="t28 red center" style="margin-top:12px"><a href="https://universalviewer.io/"><b>Universal Viewer</b></a></p></div>
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/v_tify.jpg" alt="" style="width:522px; height:264px; object-fit:contain"><p class="t28 red center" style="margin-top:12px"><a href="https://tify.rocks/"><b>Tify</b></a></p></div>
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/v_curation.jpg" alt="" style="width:522px; height:264px; object-fit:contain"><p class="t28 red center" style="margin-top:12px"><a href="https://codh.rois.ac.jp/icp/index.html"><b>IIIF Curation Viewer</b></a></p></div>
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/v_glycerine.jpg" alt="" style="width:522px; height:264px; object-fit:contain"><p class="t28 red center" style="margin-top:12px"><a href="https://glycerine.io/try-viewer/"><b>Glycerine</b></a></p></div>
<div><img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/v_clover.jpg" alt="" style="width:522px; height:264px; object-fit:contain"><p class="t28 red center" style="margin-top:12px"><a href="https://samvera-labs.github.io/clover-iiif/docs/viewer/demo"><b>Clover</b></a></p></div>
</div>

<!-- Alle diese Viewer sind Open Source. -->

---

## Kurs docuteam | <span>unser Ausgangspunkt</span>

<div class="stage" style="grid-template-columns:800px 800px; column-gap:34px; grid-template-rows:130px 1fr; row-gap:52px; top:266px; height:680px">
<div class="panel box-center" style="grid-column:1 / -1; text-align:left; padding:14px 28px"><p class="t40"><b>Heute unterstützen unsere Lösungen IIIF noch nicht.</b></p></div>
<div>
<p class="t36" style="margin-bottom:16px"><b>Was wir beobachten</b></p>
<p class="t32" style="margin-bottom:20px">Mehrere Institutionen verfügen bereits über einen eigenen IIIF-Server.</p>
<p class="t32" style="margin-bottom:20px">Sie möchten alle Repräsentationen eines Dokuments mit seiner archivischen Verzeichnung verknüpfen.</p>
<p class="t32">IIIF-Bilder existieren oft neben dem Archivsystem, ohne explizite Verbindung.</p>
</div>
<div>
<p class="t36" style="margin-bottom:16px"><b>Unser Ansatz</b></p>
<p class="t32" style="margin-bottom:20px">Klein anfangen, dort, wo der Nutzen unmittelbar ist.</p>
<p class="t32" style="margin-bottom:20px">Auf Standards setzen: RiC für die Verzeichnung, IIIF für die Bereitstellung.</p>
<p class="t32">Das Weitere gemeinsam mit Ihnen gestalten, entlang Ihrer tatsächlichen Bedürfnisse.</p>
</div>
</div>

<!-- Transparent sein: Heute ist nichts verfügbar. Was folgt, ist eine Richtung, mit einem ersten Schritt in Konzeption. -->

---

## Unsere Grundlagen | <span>iiif-blueprints</span>

<div class="stage" style="grid-template-columns:714px 874px; column-gap:46px; top:266px; height:680px">
<div>
<p class="t48" style="margin-bottom:23px"><b>iiif-blueprints</b></p>
<p class="t34" style="margin-bottom:28px; line-height:1.32">Konzeptionelle Architekturen und Deployment-Szenarien, um die Einführung von IIIF bei docuteam zu erkunden.</p>
<p style="margin-bottom:9px"><b>Die zentrale Referenz für:</b></p>
<p class="dark">Architekturszenarien</p>
<p class="dark">Entscheidungskriterien</p>
<p class="dark" style="margin-bottom:28px">mögliche Workflow-Muster</p>
<p class="red"><b>Ein lebendiges Dokument, das bei Bedarf aktualisiert wird, um die interne Einführung zu begleiten.</b></p>
</div>
<div style="position:relative">
<p style="position:absolute; top:0; left:0"><b>Vom Einfachsten zum Umfassendsten</b></p>
<div class="card" style="position:absolute; top:386px; left:0; width:276px; height:283px; padding:20px"><p class="t32 red" style="margin-bottom:9px"><b>Minimal</b></p><p class="t26">Bilder über die Image API bereitstellen</p></div>
<div class="card" style="position:absolute; top:216px; left:299px; width:276px; height:454px; padding:20px; background:#d9d9d9"><p class="t32 red" style="margin-bottom:9px"><b>Mittel</b></p><p class="t26">Manifeste aus bestehenden Metadaten generieren</p></div>
<div class="dark-box" style="position:absolute; top:46px; left:598px; width:276px; height:624px; padding:20px"><p class="t32" style="margin-bottom:9px; color:#ff6b6b"><b>Umfassend</b></p><p class="t26">Presentation 3.0, einschliesslich Audio und Video<br><br>Presentation 4.0,<br>einschliesslich 3D</p></div>
</div>
</div>

<!-- Interne Vorarbeit: Diese Szenarien leiten unsere Entscheidungen, damit wir nicht bei jedem Kundenbedürfnis bei null anfangen. Sie sind kein Angebot, sondern ein Entscheidungsrahmen, den ich laufend aktualisiere. -->

---

## Erster Schritt | <span>IIIF als digitale Instanziierung</span>

<div class="stage" style="grid-template-columns:431px 79px 578px 79px 467px; grid-template-rows:249px 102px 136px; row-gap:48px; top:283px; height:600px">
<div class="dark-box box-center" style="border-radius:14px; padding:20px"><p class="t34"><b>Record</b></p><p class="t26">Verzeichnung nach RiC in docuteam context</p></div>
<p class="center" style="font-size:52px; font-weight:700; align-self:center">→</p>
<div class="red-box box-center" style="border-radius:14px; padding:20px"><p class="t34" style="margin-bottom:9px"><b>Digitale Instanziierung</b></p><p class="t28" style="margin-bottom:9px">IIIF-Bild: URL einer info.json (wiederholbar)</p><p class="t28">IIIF-Presentation: URL eines Manifests oder einer Collection (einmalig)</p></div>
<div class="center" style="align-self:center"><p style="font-size:52px; font-weight:700; line-height:1">→</p><p class="t24 grey">Link</p></div>
<div class="outline box-center"><p class="t34"><b>IIIF-Server der Institution</b></p><p class="t26 dark">bei Ihnen oder bei einem Dritten gehostet</p></div>
<p class="t34" style="grid-column:1 / -1"><b>Die Bilder bleiben auf Ihrem Server:</b> docuteam context speichert den Link, prüft ihn und zeigt eine Vorschau an.</p>
<div class="outline-red box-center" style="grid-column:1 / -1; text-align:left"><p class="t32"><b>Indikatives Ziel:</b> eine künftige Version von docuteam context (1.19 oder 1.20). Derzeit existieren nur die Konzeption und die Skizzen.</p></div>
</div>

<!-- In RiC kann ein Record mehrere Instanziierungen haben. Im ersten Schritt werden zwei neue Feldtypen zu „docuteam context” hinzugefügt: „IIIF-Bild” und „IIIF-Presentation”. Die Ressourcen sind extern: docuteam cosmos speichert und liefert in diesem Zeitpunkt keine Bilder aus. -->

---

## Skizze | <span>ein IIIF-Bild verknüpfen</span>

<div class="stage" style="grid-template-columns:975px 613px; column-gap:46px; height:716px">
<div>
<img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/sk_empty.png" alt="" style="width:975px; height:127px; object-fit:contain; object-position:left">
<p class="t24 grey" style="margin:4px 0 8px">1. Das Feld, eingeklappt</p>
<img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/sk_image.png" alt="" style="width:975px; height:499px; object-fit:contain; object-position:left">
<p class="t24 grey" style="margin-top:4px">2. Das Feld, nach der Validierung ausgeklappt</p>
</div>
<div class="panel" style="height:692px">
<p class="t40" style="margin-bottom:18px"><b>Ein IIIF-Bild verknüpfen</b></p>
<p style="margin-bottom:18px">Die Archivarin oder der Archivar fügt die URL des Bildes ein. Beim Speichern liest docuteam context die info.json und zeigt an:</p>
<p class="t28 dark" style="margin-bottom:9px">die API-Version und die Konformitätsstufe</p>
<p class="t28 dark" style="margin-bottom:9px">die Ausrichtung und die Abmessungen in Pixeln</p>
<p class="t28 dark" style="margin-bottom:9px">ein über die Image API erzeugtes Vorschaubild</p>
<p class="t28 dark" style="margin-bottom:18px">Zugänge zu einem Viewer und zur Datei info.json</p>
<p class="t24 red"><i>Konzeptskizze: Die endgültige Oberfläche kann abweichen.</i></p>
<p class="t24 red"><a href="https://www.e-rara.ch/i3f/v20/186955/info.json">Das e-rara-Bild der Skizze</a></p>
</div>
</div>

<!-- Skizze aus dem EPIC, noch nicht entwickelt. Das Feld funktioniert wie die anderen Metadatenfelder des Formulars. -->

---

## Skizze | <span>ein IIIF-Manifest verknüpfen</span>

<div class="stage" style="grid-template-columns:816px 710px; column-gap:108px">
<img class="fit" src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/sk_pres.png" alt="">
<div class="panel">
<p class="t40" style="margin-bottom:16px"><b>Ein IIIF-Manifest verknüpfen</b></p>
<p style="margin-bottom:16px">Die Archivarin oder der Archivar fügt die URL eines Manifests oder einer Collection ein. docuteam context extrahiert daraus:</p>
<p class="t28 dark" style="margin-bottom:6px">den Typ und den Titel</p>
<p class="t28 dark" style="margin-bottom:6px">die ersten fünf Metadaten</p>
<p class="t28 dark" style="margin-bottom:6px">ein Vorschaubild: das des Manifests, sonst die erste Ansicht, sonst ein Standardbild</p>
<p class="t28 dark" style="margin-bottom:16px">Zugänge zu einem Viewer und zum Manifest</p>
<p class="t26 dark" style="margin-bottom:16px"><b>Nur eine technische Vorschau: Die Metadaten des Manifests werden nicht in die Verzeichnung übernommen.</b></p>
<p class="t24 red"><i>Konzeptskizze: Die endgültige Oberfläche kann abweichen.</i></p>
<p class="t24 red"><a href="https://www.e-rara.ch/i3f/v20/186941/manifest">Das e-rara-Manifest der Skizze</a></p>
</div>
</div>

<!-- Ein einziges Manifest pro Feld. Der Inhalt des Manifests wird nicht vertieft validiert. -->

---

## Konkret | <span>der vorgesehene Ablauf für Archivarinnen und Archivare</span>

<div class="stage" style="grid-template-columns:repeat(5,306px); column-gap:26px; grid-template-rows:403px 130px; row-gap:51px; top:300px; height:584px">
<div><div class="dot" style="width:102px; height:102px; font-size:40px; margin:0 auto 29px">1</div><div class="panel center" style="height:272px; padding:24px 20px"><p class="t34" style="margin-bottom:14px"><b>Hinzufügen</b></p><p class="t28 dark">eine Instanziierung im Formular des Records</p></div></div>
<div><div class="dot" style="width:102px; height:102px; font-size:40px; margin:0 auto 29px">2</div><div class="panel center" style="height:272px; padding:24px 20px"><p class="t34" style="margin-bottom:14px"><b>Einfügen</b></p><p class="t28 dark">die IIIF-URL, info.json oder Manifest</p></div></div>
<div><div class="dot r" style="width:102px; height:102px; font-size:40px; margin:0 auto 29px">3</div><div class="panel center" style="height:272px; padding:24px 20px"><p class="t34" style="margin-bottom:14px"><b>Prüfen</b></p><p class="t28 dark">beim Speichern: Die URL antwortet und liefert JSON</p></div></div>
<div><div class="dot" style="width:102px; height:102px; font-size:40px; margin:0 auto 29px">4</div><div class="panel center" style="height:272px; padding:24px 20px"><p class="t34" style="margin-bottom:14px"><b>Vorschau</b></p><p class="t28 dark">technische Metadaten und Vorschaubild in der Galerie</p></div></div>
<div><div class="dot" style="width:102px; height:102px; font-size:40px; margin:0 auto 29px">5</div><div class="panel center" style="height:272px; padding:24px 20px"><p class="t34" style="margin-bottom:14px"><b>Ansehen</b></p><p class="t28 dark">die Ressource in einem IIIF-Viewer</p></div></div>
<div class="outline box-center" style="grid-column:1 / -1; text-align:left; padding:10px 28px"><p><b>Bewusst tolerante Validierung: </b>Eine nicht erreichbare URL oder ein Inhalt, der kein JSON ist, blockiert das Speichern; fehlende Angaben führen nur zu einer Warnung.</p></div>
</div>

<!-- Der Ablauf, wie er in den Skizzen konzipiert ist. -->

---

## Roadmap | <span>eine Richtung, kein Versprechen</span>

<div style="position:absolute; top:439px; left:203px; width:1520px; height:6px; background:#8c8c8c"></div>
<div class="stage" style="grid-template-columns:repeat(3,522px); column-gap:34px; top:278px; height:566px">
<div>
<p class="t32 center" style="height:91px; display:flex; align-items:center; justify-content:center"><b>Heute</b></p>
<div style="width:102px; height:102px; border-radius:50%; margin:22px auto 34px; position:relative; z-index:1; box-sizing:border-box; background:#000"></div>
<div class="panel" style="height:317px; box-sizing:border-box; ">
<p class="t24 grey" style="margin-bottom:9px"><b>IN ARBEIT</b></p>
<p class="t34" style="margin-bottom:14px; line-height:1.15"><b>Konzeption und Rahmen</b></p>
<p class="t28 dark">Skizzen des ersten Schritts und Architekturszenarien iiif-blueprints.</p>
</div>
</div>
<div>
<p class="t32 center red" style="height:91px; display:flex; align-items:center; justify-content:center"><b>docuteam context 1.19 oder 1.20</b></p>
<div style="width:102px; height:102px; border-radius:50%; margin:22px auto 34px; position:relative; z-index:1; box-sizing:border-box; background:#d0101b"></div>
<div class="panel" style="height:317px; box-sizing:border-box; ">
<p class="t24 grey" style="margin-bottom:9px"><b>INDIKATIVES ZIEL</b></p>
<p class="t34" style="margin-bottom:14px; line-height:1.15"><b>Externe IIIF-Ressourcen verknüpfen</b></p>
<p class="t28 dark">Image und Presentation als digitale Instanziierungen.</p>
</div>
</div>
<div>
<p class="t32 center" style="height:91px; display:flex; align-items:center; justify-content:center"><b>Danach</b></p>
<div style="width:102px; height:102px; border-radius:50%; margin:22px auto 34px; position:relative; z-index:1; box-sizing:border-box; background:#fff; border:5px solid #8c8c8c"></div>
<div class="" style="height:317px; box-sizing:border-box; border:3px solid #8c8c8c; border-radius:14px; padding:28px">
<p class="t24 grey" style="margin-bottom:9px"><b>MÖGLICHE WEGE</b></p>
<p class="t34" style="margin-bottom:14px; line-height:1.15"><b>Gemeinsam mit Ihnen zu gestalten</b></p>
<p class="t28 dark">Nicht geplante Ideen: Manifeste aus Ihren Verzeichnungen generieren, Ihre Bilder über IIIF bereitstellen, Audio und Video einbeziehen.</p>
</div>
</div>
</div>

<!-- Nur der zweite Schritt ist geplant, und die Version bleibt indikativ. Die dritte Spalte leitet zur Diskussion über. -->

---

## Diskussion | <span>gestalten wir das Weitere gemeinsam</span>

<div class="stage" style="grid-template-columns:1168px 426px; column-gap:40px; top:266px; height:680px">
<div style="display:grid; grid-template-rows:repeat(4,102px); row-gap:45px; padding-top:12px; align-content:start">
<div style="display:grid; grid-template-columns:85px 1049px; column-gap:34px; align-items:center"><div class="dot r" style="width:85px; height:85px; font-size:36px">?</div><p class="t34">Verfügen Sie bereits über IIIF-Bilder oder -Manifeste, bei sich oder bei einem Dienstleister?</p></div>
<div style="display:grid; grid-template-columns:85px 1049px; column-gap:34px; align-items:center"><div class="dot" style="width:85px; height:85px; font-size:36px">?</div><p class="t34">Welche Nutzungen wären für Sie am wertvollsten: ansehen, vergleichen, bereitstellen, annotieren?</p></div>
<div style="display:grid; grid-template-columns:85px 1049px; column-gap:34px; align-items:center"><div class="dot" style="width:85px; height:85px; font-size:36px">?</div><p class="t34">Einzelne Bilder oder ganze Objekte: Was passt am besten zu Ihren Beständen?</p></div>
<div style="display:grid; grid-template-columns:85px 1049px; column-gap:34px; align-items:center"><div class="dot" style="width:85px; height:85px; font-size:36px">?</div><p class="t34">Was würden Sie nach diesem ersten Schritt von docuteam erwarten?</p></div>
</div>
<div class="panel" style="height:624px; box-sizing:border-box">
<p class="t34"><b>Weiterführende Links</b></p>
<p class="red" style="margin-top:20px"><a href="https://iiif.io"><b>iiif.io</b></a></p><p class="t24 dark">die Website der Community</p>
<p class="red" style="margin-top:20px"><a href="https://guides.iiif.io"><b>guides.iiif.io</b></a></p><p class="t24 dark">Ressourcen finden, Viewer nutzen</p>
<p class="red" style="margin-top:20px"><a href="https://iiif.io/api"><b>iiif.io/api</b></a></p><p class="t24 dark">die Spezifikationen</p>
<p class="red" style="margin-top:20px"><a href="https://github.com/IIIF/awesome-iiif"><b>Awesome IIIF</b></a></p><p class="t24 dark">von der Community gesammelte Werkzeuge und Ressourcen</p>
</div>
</div>

<!-- (10 Minuten) Konkrete Bedürfnisse sammeln und die Antworten für die Priorisierung notieren. -->

---

<h2 style="top:140px">Kontakt</h2>

<div style="position:absolute; top:240px; left:130px; width:660px; font-size:32px; line-height:1.3">
<p><b>Julien A. Raemy</b><br>Semantic Architect &amp; Projektleiter<br><span style="color:#4472c4">j.raemy@docuteam.ch</span><br><br><b>docuteam AG</b><br>Av. de Grandson 48<br>CH-1400 Yverdon-les-Bains<br>Tel.: +41 21 510 21 81<br><a href="https://www.docuteam.ch/" style="color:#4472c4">https://www.docuteam.ch/</a></p>
</div>
<img src="https://julsraemy.ch/prezi/assets/iiif-docuteam-2026/contact.jpg" alt="" style="position:absolute; top:156px; left:816px; width:972px; height:767px; object-fit:cover">
<img src="https://julsraemy.ch/prezi/assets/cc-by-sa.svg" alt="CC BY-SA" style="position:absolute; top:962px; left:816px; width:193px; height:67px; object-fit:contain">
