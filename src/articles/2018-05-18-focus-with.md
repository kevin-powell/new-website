---
title: :focus-within
---

The `:focus` pseudo selector is useful, but it only allows us to style something which has focus directly on it. What if we want to style the _parent_ of the thing with focus?

The common example you’ll find is changing the background, or border, of a form when someone goes inside it:

```css
form:focus-within {
  background: limegreen;
}
```

With the above code, as soon as someone either clicks or tabs into an input, the background of the entire form will change!

<!--more-->

While I think this is awesome, and is something I’m looking at implementing into my site when I redesign it, the perhaps most useful example I’ve come across yet is allowing us to make a CSS only dropdown menu that doesn’t rely on `:hover`!

{% include cta-short.njk %}

Here is a snippet of how I might use it, go and checkout [this Codepen where I put it to use](https://codepen.io/kevinpowell/pen/ZodMqP/) 🙂

```css
.nav__dropdown-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: none;
  position: absolute;
  background: white;
}

.nav__list-item:focus-within .nav__dropdown-list {
  display: block;
}
```

### Browser support

As you might have been acustomed to with these emails, browser support is… [questionable](https://caniuse.com/#search=focus-within). So be careful using it. Depending on the usecase though (say, highlighting a form), it can degrade gracefully, but if you’re using it for a dropdown menu you might want to consider JS still. You can also checkout [this polyfill](https://allyjs.io/api/style/focus-within.html).
