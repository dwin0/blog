---
title: HTML
date: '2020-05-03'
description: ''
---

import { Link } from 'gatsby'

The main components of a website are <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">HTML</a> files, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">CSS</a> files and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">JavaScript</a> files. This article discusses the concepts of HTML.

## HTML structure

HTML consists of predefined elements, so-called "tags". These determine the type of content. A line consists of:

- Opening tag `<tag>`
- Content
- Closing tag `</tag>`

```html
<tag>content</tag>

<!-- Example -->
<h1>First Website</h1>
```

Some elements have no content, so-called "self-closing tags".

```html
<tag />

<!-- Example -->
<img src="landscape.jpg" />
```

HTML elements can be nested within each other.

```html
<h1>First <strong>Website</strong></h1>
```

## Purpose of HTML

A website consists of a lot of text. This text has however different meanings. The HTML tags therefore enclose the text and give it a certain meaning.

Example:

```html
<h1>landscape</h1>
<cite>landscape</cite>
```

Although the same text is used, the elements have a completely different meaning. In the first example, "landscape" is the main title of the page, in the second it is a quote.

### Why is this distinction important? With CSS, I can change the appearance of the quote to make it look like a title.

This is possible, however the wrong approach. Not every visitor sees our website with his eyes. People who see little or nothing use so-called <a href="https://webaccess.berkeley.edu/ask-pecan/what-is-a-screen-reader" target="_blank" rel="noopener noreferrer">screenreaders</a>. This software depends on texts being correctly marked.<br />
Google's software, which ranks our site and lists it in the search results, is also based on these tags.

A complete list of tags can be found on the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank" rel="noopener noreferrer">MDN page about HTML elements</a>.

After introducing HTML tags, we'll now have a look at the structure of an HTML file.

## HTML file

There are two main areas:

- **head**: Contains information intended for the web browser.<br />
  Examples:
  - title: Text that is displayed at the top of the page, in the browser tab
  - link: Reference to another file which the browser should load. More information will be available in the article about CSS.
- **body**: Information from this section will be displayed in the browser window.<br />
  Examples:
  - h1: Main title of the page
  - img: Image
  - p: Text section

Altogether it looks like this:

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

This corresponds to the HTML code of the web page that was delivered in the article about <Link to='/en/blog/webserver'>web servers</Link>. The links have been omitted to simplify the example code.<br />
The next article will discuss the appearance of the same page with CSS, so that the page looks like this in the end:

![Browser window, which displays a web page with a title and an image](./web-server-website.jpg)

This article only presented the rough concepts of HTML to make it easier to get started. To learn the language completely, I recommend the following resources:

- Online for free: <a href="https://www.learn-html.org/" target="_blank">learn-html.org</a>
- Book for beginners: <a href="https://amzn.to/2S94gz6" target="_blank">HTML and CSS: Design and Build Websites</a>
