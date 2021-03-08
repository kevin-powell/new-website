---
title: "CSS Scroll snapping just blew me away"
description: CSS has scroll snapping now, opening up a bunch of cool things that we can do without the need for JavaScript!
---

CSS seems to be stealing more and more functionality from things we traditionally had to use JavaScript for. This is good because not only does it help performance and reduce dependencies, it also makes our lives easier 😊. It also reduces the barrier of entry for people to make cool and fun websites, which is awesome.

I've been a huge fan of `scroll-behaviour: smooth` since I discovered it, and in a similar vien I've recently stumbled across _scroll snapping_ and it's pretty incredible, and now that support has dropped on the most recent version of Chrome, I think that it's worth taking a look at it.

Here, is an example of how it works. Try scrolling and see what happens (you'll have to be on a desktop for this, as I mention lower down, browser support hasn't hit mobile yet).

<p data-height="387" data-theme-id="0" data-slug-hash="aabYVb" data-default-tab="result" data-user="kevinpowell" data-pen-title="CSS Scroll snapping basic example" class="codepen">See the Pen <a href="https://codepen.io/kevinpowell/pen/aabYVb/">CSS Scroll snapping basic example</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Cool, right?

<!--more-->

## How it works

### Setting up the parent

It takes a little bit of work to get this to go. First, you need to give the parent a `scroll-snap-type`. First, you can choose if you want it on the `x` or `y` axis, or `both`. Second, you can choose between `mandatory` or `proximity`. As you can guess, `mandatory` forces the issue a litte more, whereas the `proximity` value is... well a bit abstract in my opinion. The spec even says that it _may_ snap. `mantatory` can cause issues too though, if it scrolls when you're trying to read content.

So to get started you could throw something like this down to start:

```css
body {
  scroll-snap-type: y mandatory;
}
```

{% include cta-short.njk %}

### Setting things up on the children

With the parent having that in place, no behavior will change at first. For things to work, you also need to give the children a `scroll-snap-align`. This can take the values of `start`, `end`, and `center`. Basically, when the scroll snaps, should it snap to the start (top), the end (bottom), or the center of the element in question.

Here is an example, the first is set to top, the second center, and the third one to end:

<p data-height="296" data-theme-id="0" data-slug-hash="mGdxaB" data-default-tab="result" data-user="kevinpowell" data-pen-title="CSS Scroll snapping problem" class="codepen">See the Pen <a href="https://codepen.io/kevinpowell/pen/mGdxaB/">CSS Scroll snapping problem</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## There is a lot more to it

I'm just covering the basics here, but there is [a lot more control](https://www.w3.org/TR/css-scroll-snap-1/#values) that you can use, including setting [padding](https://www.w3.org/TR/css-scroll-snap-1/#scroll-padding) and [margin](https://www.w3.org/TR/css-scroll-snap-1/#scroll-margin) on the snap points.

This is something that, once browser support gets a little bit better, I could see it being used quite a bit. I do see some issues that using this could cause though, as well.

## Browser support

Speaking of browser support, as of the time of writing, [browser support is a bit of a mixed bag](https://caniuse.com/#feat=css-snappoints). Chrome 69 recently hit, and with it came support for it, and Safari also supports it. IE, Edge, and Firefox all support an older version of the specification, but I can only guess Edge and Firefox will get there soon enough.

One big issue at the moment though, is that there is no browser support on mobile yet, which is one of the places I see this working best. Hopefully we aren't waiting too long for it.

### Graceful degradation

One nice thing about CSS scroll snapping is that, if someone is on an older browser that doesn't support it, it really isn't the end of the world. Things will still scroll, the site will still work fine, it just won't snap in place. Maybe it's not ideal, but at least everything is still working fine. This is a little different than say, Grid, where if you don't build in a fallback, can leave the site without a layout on an old browser.

## When should you use this?

Scroll jacking is a contensious issue and I wouldn't just implement this because _hey, this is cool!_. While I think it's really awesome that CSS is introducing something like this, I do think people need to be careful with it. People think drop shadows are fun, and so use them too much and make terrible looking sites. Now that this is easy, people _will_ use it in inappropriate places just because they think it's cool. Use it if you can justify it from the _users perspective_.

### Possible UX benefits

The [introduction section of the spec](https://www.w3.org/TR/css-scroll-snap-1/#intro) mentions the _"imprecise nature of scrolling inputs like touch panning and mousewheel scrolling"_ with the example of _"creating the effect of paging through content"_. Think of your mobile device. Whether it's Android or iOS, you've got a few 'pages' on your home screen, and it more or less uses scroll snapping to make sure you don't end up between two of those pages, which would be terrible. You could use this now in a web app, or even on a webpage in specific situations where it can enhance the user experience.

One plae this could work well is **setting up a carousel**? You could easily have it center on each image with a `scroll-snap-align: center`. Or you can even pull it off with grid, like I did below (without images):

<p data-height="265" data-theme-id="0" data-slug-hash="qMpWQZ" data-default-tab="result" data-user="kevinpowell" data-pen-title="qMpWQZ" class="codepen">See the Pen <a href="https://codepen.io/kevinpowell/pen/qMpWQZ/">qMpWQZ</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

If you're after some sort of effect like that, this could be a nice situation where you can forego JavaScript. But if you're just doing it to be cute, then maybe give it a second thought.

It can be a cool effect, and it can add to the user experience if used correctly, but _please_ be careful with it!

{% include cta.html %}
