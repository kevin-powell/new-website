---
title: Initial, Unset and Revert
description: An exploration into CSS' "initial", "unset", and "revert" values and when they might come in handy.
---

CSS is an interesting language. It’s fun to see how different solutions arrive to deal with certain situations, and how those solutions sometimes evolve — something like `grip-gap` evolving into `gap` and making it’s way into flexbox, for example.

One interesting set of values has always been `initial` and the much lesser known `unset`. Both of these don’t exactly work how you think they would though, often giving you unexpected results. It would seem that `revert` is here to help with that.

In this article, we’ll be taking a look at all three, exploring their similarities and differences, and we'll wrap it up with when `revert` might come in handy.

<!--more-->

## What `initial` actually does

Before reading on, can you think of what the following code would result in?

```css
p {
  display: initial;
}
```

Many, including myself, assume that it would result in `display: block` as that’s the browser default for paragraphs.

Oh, but we would all be wrong.

When we set `initial` on a property, it doesn’t look at the element, it looks at the property itself. Did you know that properties have a default? I didn’t until I read more about it on the MDN, though it does make sense.

I always assumed it would go back to the default though, and it’s a little strange, in my mind at least, that this isn’t how it works.

### Unexpected results with `initial`

The problem that `initial` is that it can do some really unexpected things. First, it might make something `inline` when you were expecting block, which is strange enough. In that same vein, it will never set anything to `inherit`, because once again it isn’t looking at the element, that you are styling but the property itself.

It simply resets the whole lot of everything, mostly to values that you don’t think it will. Which is surprising because I’ve been using `initial` for a long time and never realized it wasn’t working how I thought it was….

<p class="codepen" data-height="258" data-theme-id="0" data-default-tab="css,result" data-user="kevinpowell" data-slug-hash="rgvwLy" style="height: 258px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="using initial">
  <span>See the Pen <a href="https://codepen.io/kevinpowell/pen/rgvwLy/">
  using initial</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## `Unset` is a less extreme version of `initial`

Unset is the little brother of `initial`, both in that it isn’t quite as much of a scorched-earth approach, and also because nobody knows about it.

`unset` actually works just like `initial` does with one very important difference: It will first check to see if the <strike>default is `inherit`</strike> property is inherited (a thank you to [@hrvbrs](https://twitter.com/hrvbrs) for pointing out that no property defaults to `inherit`. If it did, then it would work that way with `initial`!). 

If it is an inherited property, it’ll set `inherit`, but if the property is not inherited, it will then act just like initial does and set things to the property default.

In this example below, I've used the exact same setup as the above, but set both the `display` and the `color` to `unset`.

As you can see, the `display` still turns them inline, because this isn't something which is inherited by default. The color on the other hand is still being inherited from the `body`.

<p class="codepen" data-height="270" data-theme-id="0" data-default-tab="html,result" data-user="kevinpowell" data-slug-hash="NVMgRW" style="height: 270px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="using unset">
  <span>See the Pen <a href="https://codepen.io/kevinpowell/pen/NVMgRW/">
  using unset</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Enter `revert`

This is a value that’s still a working draft, but somehow Safari has supported it since 2016 without any other browser bothering to… that is, except for Firefox which just recently shipped it!

`revert` acts like you’d expect `initial` to work. It goes back to the user agent style!

<small>(side note: what’s the deal with Safari supporting a few really cool properties that no one else does, but then seems to lag behind on others? I think it’s good that we have browser diversity, and it’s good that they decide to go in different directions at times as it leads to them pushing each other to add more functionality, but Safari really seems to be out in left field sometimes)</small>

## Use cases for `revert`

Without proper browser support, we can’t really start to use `revert` yet, but I do see it being useful in a couple of different situations.

The first is when you come into a site that is already been created and you need to add something on top of it. Maybe you need a heading somewhere that looks completely different than what the site already has. This was never part of the original plan, so the styling is on the heading itself and not a class, say something like:

```css
h3 {
  color: #454545;
  font-weight: 300;
  font-size: 2.275rem;
  border-bottom: 1px solid currentColor;
  padding-bottom: 0.25em;
  margin: 1.5em 0 2em;
}
```

If you wanted to have an `h3` that looks _completely_ different, for say, a call to action, you’d have to overwrite everything!

But with `revert` we could do the following:

```css
.cta-title {
  all: revert;
  font-size: 3rem;
  margin: 0;
  color: #f4f4f4;
}
```

Yes, we’re still declaring things like `font-size` and `color`, which we’d have to do either way, but with this we don’t have to worry about the `padding` or `border` or `font-weight`.

This could also prove useful if you’re forced to work with a framework such as Bootstrap which has some default styling that you just don’t feel like dealing with.

## When can we start using `revert`?

I don’t think it’s really something we can use until it hits Chrome (which will mean it’ll land in Edge too). It's not like `scroll-behavior: smooth` or [`position: sticky`](https://www.kevinpowell.co/article/positition-fixed-vs-sticky/) which won't change the styling of something, they just help increase the UX a little.

As it stands now, [the feature request](https://bugs.chromium.org/p/chromium/issues/detail?id=579788) doesn’t tell us much except that they don’t seem to be worrying about it yet. Hopefully it’ll come along pretty quickly though, because while it isn’t something you’d use every day, I think it could prove to be really useful from time to time.

And before I finish off, I'd like to thank [Facundo](https://twitter.com/fcorradini) for letting me know about this going live in Firefox. We'd had a discussion a little while back about how `initial` wasn't what either of us had thought it was, and he'd found `revert` back then, when only Safari was supporting it, and was kind enough to let me know when he saw this hit Firefox. Thanks Facundo!
