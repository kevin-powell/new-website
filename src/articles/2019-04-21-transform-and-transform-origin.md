---
title: CSS transform and transform-origin
description: CSS’s transform property opens up a ton of options for us, and those options are pushed even further when you add in transform-origin. In this article, we’ll be breaking down both of them and looking at some interesting ways you can use them.
---

## `transform` is a bit of a strange property

All CSS properties have a range of possible values, but `transform` is a little different than most, in that its values do completely different types of things. They are all related to transforming our selector, but it’s not really the same as `color`. Sure, `color` allows us to set pretty much any color we want, but all of them are just setting a color. 

With `transform` we can do the following:

- `rotate` - rotates the element
- `scale` - scales the element, making it bigger or smaller
- `translate` - move the element around, up, down, left and right
- `skew` - skews it, which is like pulling or tilting the element

<!--more-->

And other than `rotate`, the above are all shorthand values as well, we can `scaleX` or `translateY`, for example, with X and Y indicating the axis.

On top of that, it opens up access to 3D functionality as well, which I won’t be looking at specifically in this post, but I did create a fun 3D card using it [in this YoutUbe video](https://www.youtube.com/watch?v=FeJEEE3zc4U). When dealing with 3D, we also have the `perspective` value to play with, as well as the Z axis, so you can do `translateZ` for example.

<small>There is also the `matrix` value. It’s basically opening up all of the above into one single value. If you want to know about how that one works, [read this really good article on it](https://dev.opera.com/articles/understanding-the-css-transforms-matrix/) because it hurts my head trying to think about it, never mind write about it.</small>

The above values are pretty self-explanatory, but if you’d like a deep dive into them, the below is an embedded Scrimba video that dives into the specifics of each and how it works. You can pause the video at any time and change and play with the code, and then hit play to resume where you left off.

<small><em>If the preview is covering the code in the Srimba below, you can move and resize it while the video is playing.</em></small>

<iframe class="scrimba" src="https://scrimba.com/c/cKweQDt3"></iframe>

## Using more than one `transform` at a time

Sometimes one of the above transitions isn’t enough, you want to do two (or more!). Luckily that’s super easy to do! It all needs to be done on one single line though, if you try something like this, it won’t work:

```css
.my-selector {
  transform: translateX(50px);
  transform: rotate(45deg); /* only this one works */
}
```

That’s because we can’t declare a property twice. Or, well, you can, but the browser will always apply the second one, like if we tried this, our text would be orange.

```css
.my-selector {
  color: blue;
  color: orange; /* text will be orange */
```

So, to apply multiple transforms, you need to put them on a single property and simply add in as many values as you want, all separated by a space. 

```css
.my-selector {
  transform: translateX(50px) rotate(45deg);
}
```

## `transform-origin` opens up some extra doors.

All together, transforms allow us to do some really cool things, and when you add in `transform-origin` it opens up even more doors.

Let’s look at a basic `rotate` for an example, as I think that it is the easiest to understand. In the below CodePen, you can switch the `transform-origin` around and see how it affects the `rotate` that is on the square.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="kevinpowell" data-slug-hash="XQEPvB" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="transform-origin">
  <span>See the Pen <a href="https://codepen.io/kevinpowell/pen/XQEPvB/">
  transform-origin</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Putting `transform-origin` to use

You might be wondering where `transform-origin` might be useful, other than some rare edge cases. It’s really nice when combined with transforms which are only on one axis (or at least I think so, hah).

Let’s say you have a button that only has a border, but when you hover on it, it fills with red. You could just turn the background on and off, but if we use a pseudo-element, we can add a transition to it to have it slide in. If we use `scale(0,1)` we are scaling it to 0 on the x-axis. 

```css
btn::after {
  content: '';
  display: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: red;
  transform: scale(1,0).
}
```

On hover, you want to background to fill with red:

```css
.btn::after {
  /* other styles */
  transition: transform 150ms;
  transform: scale(1,0);
}

.btn:hover::after {
  transform: scale(1,1);
}
```

This is fun, but then we can add transform origin to control if it’s sliding in from the middle (default), the left, or the right, as I did in the CodePen below.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="kevinpowell" data-slug-hash="17e038fe8df95da7560ae8e6fed39919" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="button bgs with transform origin">
  <span>See the Pen <a href="https://codepen.io/kevinpowell/pen/17e038fe8df95da7560ae8e6fed39919/">
  button bgs with transform origin</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

If you have any cool uses for `transform` and `transform-origin` I’d love to see them. [Hit me up on Twitter](https://twitter.com/kevinjpowell/) and share away, whether it’s something you came up with or just a really cool use that you stumbled across!

{% include cta.html %}
