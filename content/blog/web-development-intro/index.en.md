---
title: Web development introduction
date: '2020-04-23'
description: ''
---

import { Link } from 'gatsby-plugin-intl'

What happens if you enter a URL in the browser and it displays a web page?

First of all, two computers communicate. The own computer and the computer on which the website is stored. A website consists of several files and is sent from the computer on which they are stored to the computer that wants to display the website.

![A computer that asks another computer for files.](./computer-communication.jpg)

What files exactly does a website consist of? The main components are [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) und [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript). In addition there are for example pictures or videos.

- **HTML**: Describes the structure of a web page. This includes the text and the information what this text represents.<br />
  Examples:

  - "Book collection" as title

    ```html
    <h1>Book collection</h1>
    ```

  - Book titles in a list
    ```html
    <ul id="book-list">
      <li>Harry Potter and the Philosopher's Stone</li>
      <li>Harry Potter and the Chamber of Secrets</li>
    </ul>
    ```

- **CSS**: Describes the appearance of the website.<br />
  Examples:

  - Title centered on the page

    ```css
    h1 {
      text-align: center;
    }
    ```

  - List elements in a blue font
    ```css
    li {
      color: blue;
    }
    ```

- **JavaScript**: Is responsible for the behavior of the website.<br />
  Example:

  - Find the list of books and change the color to green

    ```js
    var listOfBooks = document.getElementById('book-list')
    listOfBooks.style.color = 'green'
    ```

The difference between HTML and CSS as opposed to JavaScript is that the first two **describe** what you want, whereas with JavaScript you program the behavior. (WHAT do I want? vs. HOW should something happen?)

How does the requested computer know which files to send to the requesting computer? This task is performed by the web server. More information about this can be found in the <Link to="/en/blog/webserver/">next blog post</Link>.

After all files have been transferred, the browser reads them and calculates how the web page looks like. It then displays the page.

Web development is thus about, among other things, the creation of HTML, CSS and JavaScript, and the provision of these files by a web server. Online learning programs as well as books for learning these languages alredy exist. Here are some recommendations:

- HTML and CSS:
  - Online for free: <a href="https://www.learn-html.org/" target="_blank">learn-html.org</a>
  - Book for beginners: <a href="https://amzn.to/2S94gz6" target="_blank">HTML and CSS: Design and Build Websites</a>
- JavaScript:
  - Online for free: <a href="https://www.learn-js.org/" target="_blank">learn-js.org</a>
  - Book for beginners: <a href="https://amzn.to/3cTfeRa" target="_blank">JavaScript and JQuery: Interactive Front-End Web Development</a>

This blog does not repeat these language courses, but focuses on the concepts and terms of web development and the interaction of technologies. As in this article, it will show the big picture, but then also goes into the individual aspects. My goal is to give the reader a strong understanding of web development.
