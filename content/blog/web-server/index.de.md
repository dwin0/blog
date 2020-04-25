---
title: Web Server
date: '2020-04-25'
description: ''
---

Ruft man eine Webseite auf, so wird diese von einem Webserver ausgeliefert. Was ist aber eigentlich ein Webserver?

In meinen eigenen Worten:

> Ein Webserver ist ein Programm, das auf einem Computer läuft und Anfragen aus dem Internet beantwortet.

Wie jedes Programm, folgt ein Webserver bestimmten Regeln, welche ein Programmierer festgelegt hat. Der folgende Beispielcode zeigt solche Regeln, wie sie mit [express](https://expressjs.com/) geschrieben werden. express hilft dabei, einen Webserver zu erstellen. <br />
Es geht nicht darum den Code zu verstehen, sondern eine Idee davon zu bekommen, wie solche Regeln aussehen:

```js
app.get('/', (request, response) => response.send('Home'))
app.get('/hello', (request, response) => response.send('How are you?'))
```

- Wenn eine URL im Browser eingegeben wird, so startet dieser eine GET-Anfrage. [Genauere Erklärung GET](https://developer.mozilla.org/de/docs/Web/HTTP/Methods/GET)
- `'/'` bzw. `'/hello'` definiert den Pfad in der URL
- Nehmen wir an, dass der Computer ist unter der Adresse www.web-server.com erreichbar ist.

Die erste Regel lautet: Wenn im Browser die Adresse www.web-server.com<b>/</b> eingegeben wird, dann antworte mit `'Home'`.<br/>
Die zweite Regel lautet: Wenn im Browser die Adresse www.web-server.com<b>/hello</b> eingegeben wird, dann antworte mit `'How are you?'`.<br/>

Im Browser sieht die Antwort dann so aus:

![Browserfenster, welches die Wörter 'How are you?' anzeigt](./web-server-hello.jpg)

Diese Antwort sieht allerdings nicht so aus, wie wenn wir eine "normale" Webseite aufrufen. Der unterschied liegt darin, dass eine Webseite aus HTML, CSS, JavaScript und weiteren Teilen besteht. Wie eine einfache Webseite aus diesen Teilen erstellt wird, ist Thema des nächsten Blogbeitrages.<br />
Grundsätzlich sind dies aber alles Dateien, welche auf dem gleichen Computer abgespeichert sind, auf welchem der Webserver läuft. Wir können also die Regeln so ändern, dass Anstatt die Wörter `'Home'` und `'How are you?'`, Dateien an den Browser geschickt werden. Dies sieht dann so aus:

```js
```
