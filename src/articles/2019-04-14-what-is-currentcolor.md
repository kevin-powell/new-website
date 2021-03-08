---
title: What is currentColor?
description: currentColor is a fantastic CSS value and one that not nearly enough people know about.
---

`currentColor` is a fantastic CSS value and one that not nearly enough people know about.

`currentColor` is a value that takes on the value of whatever `color` is currently set to for that selector, whether it's implicitly set or if it's inherited.

This might sound a bit strange, but here is an example where it can be really useful for buttons that have a border that matches the font color

<!--more-->

```css
.btn {
  padding: 0.5em 1.25em;
  text-transform: uppercase;
  text-decoration: none;
  background: white;
  color: limegreen;
  border: 1px solid currentColor;
}
```

And, why not go the extra mile and throw a box shadow on there to boot:

```css
.btn {
  padding: 0.5em 1.25em;
  text-transform: uppercase;
  text-decoration: none;
  background: white;
  color: limegreen;
  border: 1px solid currentColor;
  box-shadow: 0 0 25px -10px currentColor;
}
```

Of course, we can keep a lot of that on a single button class, and then just manipulate the color with a modifier class, like I’ve done in the Pen below that you can explore.

<p class="codepen" data-height="236" data-theme-id="0" data-default-tab="result" data-user="kevinpowell" data-slug-hash="LvyrKw" style="height: 236px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Styling buttons with currentColor">
<span>See the Pen <a href="https://codepen.io/kevinpowell/pen/LvyrKw/">
Styling buttons with currentColor</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## While handy, it lets you done some fun things too

It can seem like a nice trick to let you get away with styling a little less, but you can push this to do some really fun things with it! [In this CodePen](https://codepen.io/bnthor/pen/abzyE) by Benjamin Réthoré, and entire form is styled with it, and [in this one](https://codepen.io/scottkellum/pen/Fhxql) by Scott Kellum, he uses it on the `html` selector itself to do some fun stuff.

Check those out, and then see what you can do with it!

{% include cta.html %}
