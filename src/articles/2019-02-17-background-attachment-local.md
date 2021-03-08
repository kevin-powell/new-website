---
title: What the heck is background-attachment local 
description: A look at how you can use the pattern attribute for advanced form validation
---

I recently came across `background-attachment: local` because of [this super amazing trick over on Smashing Magazine](https://www.smashingmagazine.com/2019/01/table-design-patterns-web/#style-the-scroll) that adds a gradient on the sides of a table… only if the table is overflowing. It’s really neat, but while I knew of the `scroll` and `fixed` values for `background-attachment`, I’d never heard of `local` before.

<!--more-->

To understand what `local` does, you need to know what `scroll` and `fixed` do first, so a really quick primer on those:

- `scroll` is the default - the background scrolls with the page as you’d expect
- `fixed` makes it so the image is fixed in place while the page scrolls past. It sort of gives you a parallax type of effect.

There is an issue with `scroll` though, and that is, it doesn’t work as you’d expect it to if that isolated elment has a scrollbar. If that’s the case, it actually behaves like `fixed`. Here is an example to illustrate what I mean.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="kevinpowell" data-slug-hash="yZjKZV" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="background-attachment: scroll - wtf?!">
  <span>See the Pen <a href="https://codepen.io/kevinpowell/pen/yZjKZV/">
  background-attachment: scroll - wtf?!</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Notice that, if you scroll the *page* the background works as you’d expect it to, but if you scroll within that element itself, it acts like a `fixed` background. **This is because the background of an element with `background-attachement: scroll` scrolls with it’s border**. When the entire page scrolls, the background moves along with it, but when you scroll within that element, the border of that element isn’t moving, hence the background doesn’t move either.

## `local` to the rescue

This is what `local` is for. It fixes the background to the content instead of the border of an element. Below is an example of all three at work. Notice that if you scroll the page, the first and last elements (`scroll` and `local` respectively) behave the same… but then scroll inside the element. The one with `local` is probably what you were after in the first place.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="kevinpowell" data-slug-hash="bzMvzN" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="background-attachment: local">
  <span>See the Pen <a href="https://codepen.io/kevinpowell/pen/bzMvzN/">
  background-attachment: local</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

I'm happy I found this out before I ran into an issue with it, because it's one of those CSS quirks that can really drive you bananas when you can't figure out why it's not behaving like you'd expect it to.

{% include cta.html %} 
