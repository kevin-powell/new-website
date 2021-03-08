---
title: Scaling buttons with CSS custom properties
description: Custom properties allow us to write less markup. Creating a locally scoped scale for buttons can let us stop the need for so many different button classes.
---

Custom properties are everywhere now, and for good reason as there are so many useful — and fun! — applications that you can do with them!

A couple of weeks ago, I had an article published on CSS-Tricks where I looked at the benefits of locally scoping custom properties. In that article I quickly mentioned how it could be really useful to create a button scale.

The article ended up being really long, so I cut out the part about creating a button scale with custom properties. I think it’s a really fun application though, as there are two different ways you could approach it.

<!--more-->

## Scaling buttons

When working with buttons, it’s really common to see something like this:

```html
<button class="btn btn-xs">xs</button>
<button class="btn btn-sm">small</button>
<button class="btn">default</button>
<button class="btn btn-lg">large</button>
<button class="btn btn-xl">xl</button>
```

By using `em` for the padding of my button, when I change the `font-size`, everything will scale all together. So we could do something like this:

```css
.btn-xs {
  font-size: 0.75rem;
}
.btn-xl {
  font-size: 1.5rem;
}
```

And it will work. And when someone is asked to add a new `.btn-xxl` they’ll probably be able to figure it out relatively quickly.

But we can take advantage of CSS custom properties to make something even better here. As I looked at in a previous article, we can use `calc()` to create a unitless scale custom property. So we can take advantage of that to make create our button scale.

```css
.btn {
  /* using calc to append 'rem' to a unitless custom property */
  font-size: calc(var(--scale) * 1rem);

  /* rest of the styles */
}
```

Now we can do this:

```css
.btn-xs {
  --scale: 0.75;
}

.btn-sm {
  --scale: 0.9;
}

.btn-lg {
  --scale: 1.3;
}

.btn-xl {
  --scale: 1.65;
}
```

Anyone who wants to create a `.btn-xxl` won’t even have to think twice here. By using CSS Custom Properties, we’re able to explicitly state the purpose of our numbers and help boost the readability of our code, even if it is a bit more abstract in the initial definition of our `.btn`.

<p class="codepen" data-height="228" data-theme-id="0" data-default-tab="css,result" data-user="kevinpowell" data-slug-hash="wOGrGq" style="height: 228px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Button scale with CSS Custom Properties">
  <span>See the Pen <a href="https://codepen.io/kevinpowell/pen/wOGrGq/">
  Button scale with CSS Custom Properties</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Another approach

As I looked at in the CSS-Tricks article, custom properties are really handy for “theming” things within your page.

I think that you could easily do away with the need for a set of buttons like we had above. We only really need one button class, that is set up to be able to scale.

```css
.btn {
  // 1rem becomes the default
  font-size: calc(var(--btn-scale) * 1rem), 1rem;
}
```

Because we have a fallback to 1rem, it will default to that. But, if we want a larger or smaller button, we can easily do that!

```css
.cta {
  --btn-scale: 1.3;
  /* other styles */
}

.widget {
  --btn-scale: 0.85;
  /* other styles */
}
```

By working like this, we can simplify our markup, eliminate a bunch of CSS, _and_ it’s super easy to understand what’s going on.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="kevinpowell" data-slug-hash="gyYNGd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="custom property button scale">
  <span>See the Pen <a href="https://codepen.io/kevinpowell/pen/gyYNGd/">
  custom property button scale</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

{% include cta.html %}
