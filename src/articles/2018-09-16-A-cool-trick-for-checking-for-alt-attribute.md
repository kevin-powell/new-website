---
title: A cool trick for checking for the alt attribute
description: You always want to include an alt attribute on your image, even if it's blank. This cool trick makes it easy to find any images you might have missed it on.
---

A little while ago I came across [this tweet](https://twitter.com/jdjuan/status/1022301088651853824?s=03):

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Include this <a href="https://twitter.com/hashtag/CSS?src=hash&amp;ref_src=twsrc%5Etfw">#CSS</a> rule in your styles and ensure every image tag includes an <a href="https://twitter.com/hashtag/alt?src=hash&amp;ref_src=twsrc%5Etfw">#alt</a> attribute or things will look pretty dark for you 😉 <a href="https://t.co/lCmNpxzXAo">pic.twitter.com/lCmNpxzXAo</a></p>&mdash; Juan Herrera 🇨🇴 (@jdjuan) <a href="https://twitter.com/jdjuan/status/1022301088651853824?ref_src=twsrc%5Etfw">July 26, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I love that idea so much, and had to write up on it.

Let's break down exactly how this is working before we dive into a bit more info on why you might even want to bother with this.

<!--more-->

## Breaking down the selector - `:not()`

So that selector is first, selecting all images, but then we have `:not()` added on. Not let’s us select all of something, but not what is inside the `()`. This can be really handy for a lot of things. I’ve found this to be useful in the past:

```css
* {
  margin: 0;
}

p:not(:last-child) {
  margin: 0 0 1em 0;
}
```

It depends on the circumstances, but if you have a lot of text inside something like a card, this can be handy in ensuring that the paragraphs aren’t causing extra spacing at the bottom of them, for example.

**Back to the selector**

```css
img:not([alt]) {
  filter: grayscale(100%);
}
```

So in this case, we’re selecting everything that doesn’t have an alt attribute on it, letting us style our images with the missing `alt`, and only those ones.

## The filter

With all our images with the missing `alt` selected, we’re then using `filter: grayscale(100%)`, which is a fun property on it’s own, to turn this these into grayscale images. Super cool. The `filter` property [can do a lot more](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) than make your images grayscale, doing things like blurring images, changing the hues, and adding contrast.

Here is a working example with the grayscale at work:

<p data-height="265" data-theme-id="0" data-slug-hash="QVVgZp" data-default-tab="result" data-user="kevinpowell" data-pen-title="QVVgZp" class="codepen">See the Pen <a href="https://codepen.io/kevinpowell/pen/QVVgZp/">QVVgZp</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

If you’d like a more aggressive approach, I’ve seen others add something like `border: 3px solid magenta` to really make it obvious. You'd only be using this while debugging a site and not on something that's live, so even something aggressive like this would be fine.

## Do you really need `alt` attributes?

I’m far from an accessibility expert (if you are, I’d love if you could contact me!), but everything [should have an](https://davidwalsh.name/accessibility-tip-empty-alt-attributes) `[alt](https://davidwalsh.name/accessibility-tip-empty-alt-attributes)` [attribute on it](https://davidwalsh.name/accessibility-tip-empty-alt-attributes), even if it’s blank. As Dave explains it in that article:

> Omitting the `alt` attribute makes most screen readers read out the entire image URL and providing an `alt` attribute when the image is for visual purposes only is just as useless.

I always knew that it was better to have an empty `atl` rather than no `alt` at all, but I never knew why. It was just one of those things I heard a long time ago and did. Luckily, in this case, it was good advice, because way too often we do this with bad advice as well.

{% include cta.html %}
