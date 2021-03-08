---
title: Using a typographic scale
description: When it comes to picking font sizes, it can be hard to find a good balance. Instead of overly thinking it, or even worse, ignoring it, a typographic scale can really help you out.
---

Continuing my look at [design tips](https://www.kevinpowell.co/article/line-height) that can help out front-end devs a little, one issue that I see cropping up often is a lack of contrast with font sizes. And by contrast, often I’ll see some color differences or something simple, but almost all the font sizes are the same, or there is no _flow_ or _rythm_ to the design. **Having a typographic scale can help with this**.

**There are a lot of** **_very_** **in-depth and, sometimes overly complicated examinations of using a modular scale on the web**. It can find it’s way into line-height, and even your padding and margins. It can reach into all aspects of your design, and for those who aren’t already knowledeable on the subject, **it can be overwhelming**. If you want to get deeper into the design world, it’s probably worth exploring. But if you’re a dev who just wants to make their site look a little better, **you don’t have to go crazy**.

Here, I’m going to look at the simple basics of it by looking at:

- What is a typographic scale
- Where to find typographic scales
- How to go about using a typographic scale (and how CSS variables can make this easier)
- Why they need to change at different screen sizes (and how CSS variables also make this easier)

<!--more-->

## What is a typographic scale

**Have you every wondered what the deal was with the default font sizes in pretty much all of our software?** From Microsoft Word to all the Adobe software and beyond, when you hit that dropdown box to pick a font size, it allows follows the same pattern: 6, 8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72. Why 24 and not 22?

It’s because they are following a typographic scale. Actually, they are following the classical typographic scale that has it’s roots in the very old days of typesetting! If you’d like a little more history on the scale (and some of the issues of it), [this is a fanscinating read](http://spencermortensen.com/articles/typographic-scale/).

The idea behind a typographic scale is just like a musical scale. It’s finding **font sizes that work in harmony with one another**. It starts with picking an actual scale, and then exponentially working your way up (and down) based on that scale. Let's look at an example to make this more clear.

Basically, it ends up being growing (and shrinking) exponentially. The first one will be your base size, then your base size multiplied by the scale. This is followed by the base size, multiplied by the scale squared, and so on.

### A simple example of typographic scale

**The basic idea of a typographic scale** that our font sizes fall on a set scale. To go with a basic example, let's set we decide on a scale of 1.5, solely because it's an easy number to work with. The base is the base, so let's say 10px, again, to make it really easy to work with. For the first step up our scale, we multiply by our scale unit. Then, we put the scale to the power of 2. Then the power of 3, etc.

```css
body {
  font-size: 10px;
} /* base */
h3 {
  font-size: 15px;
} /* base * (base * scale) */
h2 {
  font-size: 22.5px;
} /* base * (base * scale * scale) */
h1 {
  font-size: 33.75px;
} /* base * (base * scale * scale * scale) */
```

## Where to find a typographic scale

There are fantastic tools, such as [Modularscale](https://www.modularscale.com/) by [Scott Kellum](https://scottkellum.com/) and [Tim Brown](https://twitter.com/nicewebtype), which has a bunch of scales that you can play around with, as well as a really cool Sass plugin that you can use in your projects.

**An even better option might be** [**Type Scale**](https://type-scale.com/) by [Jeremy Church](https://twitter.com/jeremybchurch) as it gives a better visual preview, _as well as_ a preview using some dummy text. Specially if you aren’t used to playing with font sizes, it’s really nice seeing it in a more realistic setting first. Heck, it even lets you choose different fonts and set different colors.

{% include cta-short.njk %}

## How to use a typographic scale

Saying to use a scale is easy enough, but it can be a little overwhelming when you’ve got a pile of sizes to choose from.

To start with, assuming you’re using [Type Scale](https://type-scale.com/) or another similar tool, **the base will be what you’ll use for your body**. We always start worrying about text from the body up (even though a lot of people tackle it the other way around).

Once you have a size for your body, you can move onto the headings. **When choosing the sizes for your heading, the content you’re dealing with will have an impact on the scale you use**. If you have a bunch of very short headings, maybe you can go with a more drastic scale where they can take up more room and make a bigger visual impact, for example.

And don’t be afraid to experiement a little bit while you’re at it. Try out more than one scale and see what works for you!

## Using CSS variables to set up your scale

CSS Custom properties make our lives a lot easier. So once you've decided on a scale to use, I find the easiest thing to do is set up some custom properties for them. For example, let's say I got with a base unit of 16px (so 1rem), and then use the the Golden Ratio as my scale.

```css
:root {
  --fs-1: 1rem;
  --fs-2: 1.618rem;
  --fs-3: 2.618rem;
  --fs-4: 4.236rem;
  --fs-5: 6.854rem;
  --fs-small: 0.618rem;
}
```

The `fs` at the start is for _font size_. This let's me have them, but not lock them into specific elements, such as `h1`, `h2`, etc. I can use them as needed, where ever I need. I know I'll be consistent with my font sizes and have a nice scale going on with my typography.

## Changing your scale for different screen sizes

Sadly, you might pick the perfect scale, only to test your site on mobile and realize it looks like crap when your big, bold, beautiful `h2` fills the entire screen.

In general, everything gets smaller on mobile. The base `font-size` might shrink, white space shrinks down, and so can your scale. So while on a large screen, you might be using something like the Golden Ratio (1.618), on mobile, you might switch over to something a little smaller like 1.333.

### CSS custom properties make responsiveness super easy

**Luckily, CSS custom properties allow us to make changes to them inside media queries** (something which a post processor, such Sass, can't do). So, we can do something like this:

```css
:root {
  --fs-1: 1rem;
  --fs-2: 1.333rem;
  --fs-3: 1.777rem;
  --fs-4: 2.369rem;
  --fs-5: 3.157rem;
  --fs-small: 0.75rem;
}

@media (min-width: 960px) {
  :root {
    --fs-1: 1rem;
    --fs-2: 1.618rem;
    --fs-3: 2.618rem;
    --fs-4: 4.236rem;
    --fs-5: 6.854rem;
    --fs-small: 0.618rem;
  }
}
```

Now, no matter where I've used those font sizes throughout my site, everything will adjust. I've used the smaller scale as my initial scale, and then at large screen sizes, it adjusts to my larger scale!

Here it is in action:

<p data-height="349" data-theme-id="0" data-slug-hash="298cbf33ee4d8fd0267afd6509dffdf8" data-default-tab="result" data-user="kevinpowell" data-pen-title="type scale with custom props" class="codepen">See the Pen <a href="https://codepen.io/kevinpowell/pen/298cbf33ee4d8fd0267afd6509dffdf8/">type scale with custom props</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## There is (or can be) more to it than this

Whatever you do, don’t be overwhelmed by a typographic scale. As I mentioned in the intro, there are some _very_ in-depth articles on it which can overwhelm. While it can find its way into a lot of your design decisions, don’t be a slave to it. Use it as a tool to ensure that you have a nice rythm with your typography, and to avoid lacking contrast in your font sizes. As you get used to using it, maybe then you can start to explore it a bit more in other aspects of your sites.

{% include cta.html %}
