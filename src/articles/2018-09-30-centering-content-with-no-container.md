---
title: Centering content without a container
desription: Using containers or wrappers is a popular way to center content inside a parent that has a width of 100%. It adds extra markup, and isn't needed when using Grid, but what about fallbacks?
---

Using a `.container` or `.wrapper` with a fixed width on it is a popular way to center content on the screen. Something like this:

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
}
```

It works wonderfully, but now that we have grid, I've stopped creating `.container` on my site. They aren't needed. It's just extra markup for nothing.

<!--more-->

Here is a very simple example of what I might be doing when using grid:

<p data-height="265" data-theme-id="0" data-slug-hash="bmNZvZ" data-default-tab="css,result" data-user="kevinpowell" data-pen-title="Very simple layout with grid, without " class="codepen">See the Pen <a href="https://codepen.io/kevinpowell/pen/bmNZvZ/">Very simple layout with grid, without </a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

This works fantastically. But if someone is on a browser that doesn't support grid, it will look pretty bad, especially on large screens where the text will just fill the width of the browser.

## `Calc()` to the rescue!

Luckily, calc() allows us forgo the `.container` completely, and get the exact same results.

_I came across this trick in Lea Verou's excellent [CSS Secrets book](https://www.amazon.com/CSS-Secrets-Lea-Verou/dp/1449372635). If you haven't read it, I strongly recommend you check it out. In the book she doesn't use it as a grid fallback, but when I came across an old CodePen of mine where I'd used it, I thought it'd be perfect for this!_

Instead of relying on my container, I can use `calc()` to control the `padding` in a creative way:

```css
.section {
  padding: 0 calc(50% - 400px);
}
```

### Breaking down this `calc()`

The 50% part of this is setting the padding to 50% on the left, and 50% on the right. So it effectively makes the padding 100%, squishing the content into the middle.

Then we subtract away from that 50%. In this case I'm subtracting 400px. But remember, that 400px will subtract from the left _and_ the right, so it gives me a total of 800px.

(before we continue, a little interuption just to say that if you're enjoying this article, you might want to consider signing up to my newsletter so you don't miss any future ones 🙂)

{% include cta-short.njk %}

Here it is in action (I've made the total size smaller so it's easier to see on smaller screens):

<p data-height="265" data-theme-id="0" data-slug-hash="MPYxBw" data-default-tab="result" data-user="kevinpowell" data-pen-title="Very simple layout without a container" class="codepen">See the Pen <a href="https://codepen.io/kevinpowell/pen/MPYxBw/">Very simple layout without a container</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Cool, right? It's not as good as the grid layout, but it's an awesome fallback that doesn't rely on more markup being used, which is a huge bonus.

## Using it as a fallback to a grid layout

I'm going to start using this as my fallback from now on. It's really awesome as it only takes one line to write!

For the fallback, I'd write it first, then use a feature query to set my grid layout:

```css
.section {
  padding: 10vh calc(50% - 400px);
}

@supports (display: grid) {
  .section {
    display: grid;
    padding: 10vh 0;
    grid-template-columns: minmax(1em, 1fr) minmax(200px, 800px) minmax(1em, 1fr);
  }
}
```

{% include cta.html %}
