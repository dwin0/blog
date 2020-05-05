---
title: HTML
date: '2020-05-03'
description: ''
keywords:
  - html
  - hypertext markup language
  - html struktur
  - html zweck
  - html head body
  - webseite
---

import { Link } from 'gatsby'

Die Hauptbestandteile einer Webseite sind <a href="https://developer.mozilla.org/de/docs/Web/HTML" target="_blank" rel="noopener noreferrer">HTML</a> Dateien, <a href="https://developer.mozilla.org/de/docs/Web/CSS" target="_blank" rel="noopener noreferrer">CSS</a> Dateien und <a href="https://developer.mozilla.org/de/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">JavaScript</a> Dateien. Dieser Artikel geht auf die Konzepte von HTML ein.

## Name

HTML ist die Abkürzung für Hypertext Markup Language. Hypertext ist Text, welcher durch Links zu anderen Texten verbunden ist. Dies ist typisch für Webseiten. Markup Language, zu deutsch "Auszeichnungssprache", weist einem Wort oder Text eine bestimmte Bedeutung zu. Mehr dazu weiter unten.

## HTML Struktur

HTML besteht aus vorgegebenen Elementen, den sogenannten "Tags". Diese legen die Art des Inhalts fest. Eine Zeile besteht jeweils aus:

- Öffnendem Tag `<tag>`
- Inhalt
- Schliessendem Tag `</tag>`

```html
<tag>Inhalt</tag>

<!-- Beispiel -->
<h1>First Website</h1>
```

Einige Elemente haben keinen Inhalt, sogenannte "self-closing Tags".

```html
<tag />

<!-- Beispiel -->
<img src="landscape.jpg" />
```

HTML Elemente können ineinander verschachtelt sein.

```html
<h1>First <strong>Website</strong></h1>
```

## Zweck von HTML

Eine Webseite besteht aus viel Text. Dieser hat jedoch unterschiedliche Bedeutungen. Die HTML Tags umschliessen daher den Text und geben ihm damit eine bestimmte Bedeutung.

Beispiel:

```html
<h1>landscape</h1>
<cite>landscape</cite>
```

Obwohl der gleiche Text verwendet wird, haben die Elemente eine völlig unterschiedliche Bedeutung. Im ersten Beispiel ist "landscape" der Haupttitel der Seite, im zweiten ein Zitat.

### Wieso ist diese Unterscheidung wichtig? Mit CSS kann ich das Aussehen des Zitates auch so verändern, dass es wie ein Titel aussieht.

Das ist möglich, jedoch die falsche Vorgehensweise. Nicht jeder Besucher sieht unserer Webseite mit den Augen. Menschen, die nur wenig oder gar nichts sehen, verwenden sogenannte <a href="https://www.itwissen.info/Screenreader-screenreader.html" target="_blank" rel="noopener noreferrer">Screenreader</a>. Diese Software ist darauf angewiesen, dass Texte korrekt gekennzeichnet sind.<br />
Auch die Software von Google, welche unsere Seite bewertet und in den Suchergebnissen auflistet, richtet sich nach diesen Tags.

Eine vollständige Liste der Tags kann auf der <a href="https://developer.mozilla.org/de/docs/Web/HTML/Element" target="_blank" rel="noopener noreferrer">MDN-Seite über HTML Elemente</a> gefunden werden.

Nachdem die Elemente von HTML vorgestellt wurden, nun ein Blick auf den Aufbau einer HTML Datei.

## HTML Datei

Es gibt zwei Hauptbereiche:

- **head**: Enthält Informationen, die für den Browser gedacht sind.<br />
  Beispiele:
  - title: Text, welcher oben im Browser Tab angezeigt wird
  - link: Verweis auf eine andere Datei, welche der Browser laden soll. Mehr Informationen dazu wird es im Artikel über CSS geben.
- **body**: Informationen aus diesem Bereich werden im Browserfenster angezeigt.<br />
  Beispiele:
  - h1: Haupttitel der Seite
  - img: Bild
  - p: Textabschnitt

Zusammengesetzt sieht das so aus:

```html
<html>
  <head>
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>First Website</h1>
    <img src="landscape.jpg" />
    <p>Photo by Meritt Thomas on Unsplash</p>
  </body>
</html>
```

Dies entspricht dem HTML Code der Webseite, welche im Artikel über <Link to='/de/blog/webserver'>Webserver</Link> ausgeliefert wurde. Die Links wurden zur Vereinfachung des Beispielcodes weggelassen.<br />
Der nächste Artikel wird auf das Aussehen derselben Seite mit CSS eingehen, sodass die Seite am Ende wie folgt aussieht:

![Browserfenster, welches eine Webseite mit Titel und Bild anzeigt](./web-server-website.jpg)

Dieser Artikel stellte lediglich die groben Konzepte von HTML dar, um den Einstieg zu erleichtern. Um die Sprache komplett zu lernen, empfehle ich folgende Ressourcen:

- Online gratis: <a href="https://www.learn-html.org/" target="_blank">learn-html.org</a>
- Buch für Beginner: <a href="https://amzn.to/2W6FX5Y" target="_blank">HTML & CSS: Erfolgreich Websites gestalten und programmieren</a>
