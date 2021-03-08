---
title: You need to fix your `line-height`
description: Line-height is one of the problems that I see plague pretty much every site I see that didn’t have the direct input of a designer. People overlook it, but it has a huge effect on the readability, and overall design aesthetic, of a site.
---

I’ve been doing some diggin into my audience lately, and the most common issue is one relating to design. So because of that, I’m going to start talking a little bit more about design stuff here, but from the point of view of a developer, since that’s what most of you are. Little tips and tricks that can help you improve your designs, whether it’s small tweaks to work you’re doing, or just for your own personal projects.

In this article, we’re looking at `line-height`. It’s one of the problems that I see plague pretty much every site I see that didn’t have the direct input of a designer, and **it has a massive impact on the aesthtic, and more importantly, the readability of a site**.

Sometimes it’s a question of someone just not even bothering with it, but more often, it’s a bad use of it once we’re outside the ‘normal’ or body text. So to help you out, we’ll be looking at:

- How to pick a good, default `line-height` for your site
- Situatons where you need to move away from your default `line-height`

<!--more-->

## Picking a good `line-height`

First off, **there is no perfect default**. Many things influence how you should set your `line-height`, such as:

- the font that you are using
- the size of the font
- the length of the line

That said, the default from the browser is far from ideal. It defaults to a `normal` value, which seems to [fall to around 1.2].(https://developer.mozilla.org/en-US/docs/Web/CSS/line-height#Values).

**As a starting point**, I usually start at `1.5` or `1.6`. As I mentioned, there is no perfect to use as the default. This changes based on the font, and font-size. But it’s a good starting point, and it’s the place where **most people make their first mistake**. People keep this number way too small.

EDIT: A reader, [Facundo Corradini](https://twitter.com/fcorradini), kindly pointed out over on Twitter, the _Web Content Accessibility Guidelines_ [recommend a minimum line-height of `1.5` for your paragraph text](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-visual-presentation), so start there and, if anything, make it a little bigger.

A larger `line-height` makes things a lot easier to read. See for yourself:

<p data-height="265" data-theme-id="0" data-slug-hash="ddc32d91edad602c062c01e40b0fd549" data-default-tab="result" data-user="kevinpowell" data-pen-title="line-height example-one" class="codepen">See the Pen <a href="https://codepen.io/kevinpowell/pen/ddc32d91edad602c062c01e40b0fd549/">line-height example-one</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

A larger line-height takes away from the density of a block of text and just helps to lighten everything up, making it _much_ easier to read.

{% include cta-short.njk %}

## When a large `line-height` can cause problems

### Large font sizes

That said, we don’t always want a large `line-height`. This works for body copy (your regular paragraphs). **It starts to cause problems at larger font sizes**. See for yourself.

<p data-height="265" data-theme-id="0" data-slug-hash="1d1b82fa9bc4ac480bc7ff4748f30081" data-default-tab="result" data-user="kevinpowell" data-pen-title="line-height example-two" class="codepen">See the Pen <a href="https://codepen.io/kevinpowell/pen/1d1b82fa9bc4ac480bc7ff4748f30081/">line-height example-two</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

As you can see, with the example on the left, the `line-height` of `1.5` is just way too much. The `normal` on the one on the right looks much better.

### Uppercase text

**Another place that causes issue’s is text that is uppercase.** Once again, let’s look at an example.

<p data-height="199" data-theme-id="0" data-slug-hash="fd81f60812a2700b57dcaf2d81cc7257" data-default-tab="result" data-user="kevinpowell" data-pen-title="line-height example-three" class="codepen">See the Pen <a href="https://codepen.io/kevinpowell/pen/fd81f60812a2700b57dcaf2d81cc7257/">line-height example-three</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Once again, you can see that the one on the right side just looks better. With all caps, we have no decenders (the little bits of letters that stick out the bottom) to fill up any of the space between the lines, and it starts looking like it’s almost double spaced. And if you were to make the font-size bigger (say for a large title) it will simply look terrible.

## TL;DR

- Body text (your normal paragraph text) should have a `line-height` of 1.4–1.6, give or take.
- Different fonts mean different `line-height`
- Changes in `font-size` mean adjusting `line-height`
- Really big fonts should have a tight `line-height`
- `uppercase` text should have a tighter `line-height` than the body

There is more to it than this, but if you’re a dev who’s just looking to clean things up and make your design look a little sharper, this should help push you in the right direction 🙂

{% include cta.html %}
