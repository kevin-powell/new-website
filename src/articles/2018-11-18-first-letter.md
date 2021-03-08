---
title: The ::first-letter pseudo-element
description: The ::first-letter pseudo-element is a nice, easy, and very well supported way to create nice looking drop caps and initial letters with very little work!
---

I can’t figure out why I don’t see more use of `::first-letter` other than people not knowing about it. Things like [drop caps and initial letters](http://www.magazinedesigning.com/drop-caps-and-initial-letters/) are super common print, and have been forever. There are a few places I see it pop up on the web, but it’s far and few between.

And while there is the possibility of an `initial-letter` property (it’s partially supported by Safari at the time of writing), we can pull off the effect we need with the `::first-letter` pseudo-element really easily.

<!--more-->

## How `::first-letter` works

It’s a really simple pseudo-element, selecting the first letter of your selector, and letting you style it as you want.

```css
.selector::first-letter {
  color: red;
  font-size: 2em;
}
```

If you want to get something that looks a bit fancier, you can, though it does take a little playing around with, it’s far from painful:

<p data-height="265" data-theme-id="0" data-slug-hash="387f57a8702c55cf74d8bbd9aaaa5113" data-default-tab="result" data-user="kevinpowell" data-pen-title="first-letter" class="codepen">See the Pen <a href="https://codepen.io/kevinpowell/pen/387f57a8702c55cf74d8bbd9aaaa5113/">first-letter</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

The above example works great, but as you can see from it, I did have to play around with a negative `margin-bottom`, which prevented a big whitespace under the drop cap. There isn’t too much styling that needs to go into something like this though, and it can add a really nice visual touch!

## Browser Support of `::first-letter`

Another reason I find it strange that more people aren't using `::first-letter` is that browser support for it is great, being supported by all modern browsers, and even as far back as IE6 (!) if you use the old `:first-letter` instead of with the double colon (and IE9 and up support the double colon version).

{% include cta.html | safe %}
