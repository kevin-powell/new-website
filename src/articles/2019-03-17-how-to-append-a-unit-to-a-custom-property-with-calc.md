---
title: How to append a unit to a unitless CSS custom property with calc()
description: A quick look at how you can use calc() to append a unit to a CSS custom property
---

I’ve seen complaints that you can’t append a unit to a custom property.

## What you can’t do

The complaints seem to come from not being able to do something like this:

```css
.icon {
  --scale: 1;

  /* this doesn't work */
  font-size: var(--scale) + 'px';
}
```

Granted, that would be awesome if we *could* do that. But we aren’t writing JavaScript, so we can’t. 

<!--more-->


## `calc()` to the rescue

The CSS `calc()` function is one of those things that doesn’t always have a super obvious use. It’s awesome in a really sneaky way though. This is one of those sneaky awesome ways it can help us.

```css
.icon {
  --scale: 1;

  /* this works */
  font-size: calc(var(--scale) * 1rem);
}
```

## How this works

One of the coolest things with `calc()` is that it allows you to mix units when doing calculations. So I can do something like `width: calc(100vw - 100px);` or `width: calc(50em - 25%);` and the browser just figures it out.

In the case of using my `--scale`, it’ll multiply my unitless number by `1rem`, adding `rem` to whatever I’ve put in my scale.


## Putting it to use

Andy Bell recently posted a handy little trick on [how to control the size of your icons with `font-size`](https://andy-bell.design/links/121/). 

This is cool, as you can easily set up icons to inherit the font-size from their parent like so:

```css
svg {
  width: 1em;
  height: 1em;
}

.icon {
  font-size: inherit;
  color: inherit;
}
```

If ever you need a larger or smaller icon, you can change the `font-size`. 

```css
.icon-large {
  font-size: 1.5em;
}
```

While this is awesome, we can make everything a lot more readable by using a few custom properties:

```css
svg {
  width: 1em;
  height: 1em;
}

.icon {
  font-size: var(--scale);
  color: var(--color, currentColor);
}
```

This is great, but our scale requires us to use a unit right now. We can improve this by using `calc()` like we did above.

```css
.icon {
  font-size: calc(var(--scale) * 1em));
  color: var(--color, currentColor);
}
```

Here it is in use:

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="kevinpowell" data-slug-hash="49a4da5bc5a4ad913cd452ce3f7e3c66" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Appending a unit to a custom property">
  <span>See the Pen <a href="https://codepen.io/kevinpowell/pen/49a4da5bc5a4ad913cd452ce3f7e3c66/">
  Appending a unit to a custom property</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

{% include cta.html %}


