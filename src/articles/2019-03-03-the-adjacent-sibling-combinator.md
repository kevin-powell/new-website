---
title: Write more effecient CSS with the `+` combinator
description: The `+` combinator allows us to do some really nice things and write better CSS
---

The `+` combinator is amazing but I always forget that it exists. I recently used it when making a few updates to this site, and thought it would be fun to explore why I love it so much.

## How the `+` combinator works

I feel like the [MDN describes it perfectly](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors), saying “_The_ `+` _combinator selects adjacent siblings. This means that the second element directly follows the first, and both share the same parent_”.

### An example

On my own site, I have the following markup on my articles (such as this one).

```html
<h1>Article title</h1>
<time class="date">March 3 2019</time>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus in ullam
  voluptatibus consequatur, vel hic?
</p>
<p>
  Quia, ipsam! Dolores corporis ullam, ut natus consequatur, quaerat
  necessitatibus officiis, incidunt rerum ex ea!
</p>
<p>
  Velit amet blanditiis tempora, incidunt, sint dolor architecto at et
  similique, ex nulla hic fugiat.
</p>
```

I don’t have classes on any of my paragraphs because I write everything with markup. I could configure things to add something like a `.intro` to the first paragraph, but there is no need.

I could use something like `p:nth-of-type(1)` but that would have a lot of potential to break things throughout the rest of a site. In my case, it would affect all my pages, so I’d have to add another selector to ensure I’m on an article.

A great solution is using the `+` combinator in my CSS selectors:

<!--more-->

```css
.date + p {
  font-size: 1.3rem;
}
```

This is only going to select `p` that come directly after a `.date`. Now this might not work on all sites, depending on how they are set up, but on mine it works great because I only use `.date` on my individual article pages.

## Other use cases

A lot of the time these days, I’m using grid or flexbox on my `div`s, and one of the side-effects of that is margins no longer collapse. That can cause some problems. Let’s look at an example of what I mean:

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="kevinpowell" data-slug-hash="7772e186a78b7052f5b22558b20a430b" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="no more collapsing margins">
  <span>See the Pen <a href="https://codepen.io/kevinpowell/pen/7772e186a78b7052f5b22558b20a430b/">
  no more collapsing margins</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

That spacing on the ‘flex’ one is terrible. There are other ways to fix this, but the `+` combinator is perfect, where we can do this:

```css
p {
  /* other styles */
  margin: 0;
}

p + p {
  margin-top: 0.8em;
}
```

I usually like to work with `margin-bottom` for everything, but for the simplicity of this, I love it. Here it is in action with the above example:

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="kevinpowell" data-slug-hash="5b1063e39b46b53e7d0a78a7fd75244e" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="no more collapsing margins fixed with + combinator">
  <span>See the Pen <a href="https://codepen.io/kevinpowell/pen/5b1063e39b46b53e7d0a78a7fd75244e/">
  no more collapsing margins fixed with + combinator</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

{% include cta-short.njk %}

## It’s awesome for cards and buttons

I’m sure you’ve had a layout that had multple cards, one next to the other. You don’t want the cards to touch, so first you have to add margin to one side, and then remove it from the last one (or first one). Something like this:

```css
.card {
  margin-right: 1em;
  padding: 1.5em;
  background: #333;
  color: white;
  /* etc... */
}

.card:not(:last-of-type) {
  margin-right: 0;
}
```

It works, and isn’t even that bad to set up, but we could do it all a little faster with the `+` combinator, like so:

```css
/* no margin settings in my card here */
.card {
  padding: 1.5em;
  background: #333;
  color: white;
  /* etc... */
}

.card + .card {
  margin-left: 1em;
}
```

Notice how I have to put the margin on the right side when I used the `+` combinator. This is because it won’t select my first `.card`, but it will select all the others.

## It gets even better with Sass

I took a look at this is [my Sass course](https://www.kevinpowell.co/sass-course/) with a similar example to the above. The cool thing with Sass is we have the parent selector `&`. So, instead of having to write my full selector out, I can nest `& + &` inside my `.card` selector like so:

```scss
.card {
  padding: 1.5em;
  background: #333;
  color: white;

  & + & {
    margin-left: 1em;
  }
}

/* ===========
   compiles to
   =========== */
.card {
  padding: 1.5em;
  background: #333;
  color: white;
}

.card + .card {
  margin-left: 1em;
}
```

This doesn’t change the world, but it does make things that little bit easier!

So whether or not you are using Sass, the `+` combinator is really awesome and can help do some fun things without the need of extra lines of CSS or having to add extra classes to your markup. It’s always nice when we can be a little more effecient.

And if you liked this post, you might also like [this video](https://youtu.be/Bcr70LIJcOk) I did awhile back where I look at this, but also other selectors and combinators such as `*`, `~`, `>` and attribute selectors.

{% include cta.html %}
