---
title: Position fixed vs position sticky
description: A look at the similarities and differences between CSS's position fixed and sticky, as well as when you might use one over the other
---

`position: fixed` has been a staple of CSS for a long time now, and it’s served us well. More recently, we’ve been treated with `position: sticky`.

Both of them are really similar but there are some important differences. In this post, we’ll be looking at the differences, as well as the use cases for each.

<!--more-->

## The differences between `sticky` and `fixed`

`position: fixed` generally means **fixed to the viewport\***. You tell it where to position itself, and it stays there as the user scrolls. **It is out of the flow of the rest of the document**.

- There are some [edge cases](https://codepen.io/kevinpowell/pen/ywdNzL) where it isn’t fixed to the viewport. This can be a real pain if you run into the issue, though I think it’d be somewhat rare. [The MDN outlines them](https://developer.mozilla.org/en-US/docs/Web/CSS/position#Values) if you are interested. [Hit me up on Twitter](https://twitter.com/kevinjpowell) if you can think of a possible benefit or use case!

On the other hand, `sticky` **scrolls along like anything else until it reaches the offset that you set.** At that point, it acts like it’s `fixed`.

There is a catch though, it must stay within it’s containing block (it’s parent)! **Once that containing block scrolls off the page, it leaves with it**.

That can cause some problems, but when you know how to use it properly, can open up some doors.

Here are both of them in action, which should help clarify the differences.

<p class="codepen" data-height="427" data-theme-id="0" data-default-tab="result" data-user="kevinpowell" data-slug-hash="eXwdwq" data-preview="true" style="height: 427px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="sticky vs fixed">
  <span>See the Pen <a href="https://codepen.io/kevinpowell/pen/eXwdwq/">
  sticky vs fixed</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## When to use `fixed`

So with that in mind, we want to use fixed when it must always be on the same place on the page at all times. **It simply doesn’t move**.

**Be careful with** `fixed` **though**. Using it takes that element out of the document flow. Visitors to your page can see it, but as far as the rest of the content on the page is concerned, it isn’t there.

That means **it can potentially cover some elements**, hiding them from view. Sometimes it’s not a big deal on desktop, but when you hit mobile and screen real-estate is limited, this can cause problems.

## When to use `sticky`

You’ll want to use `sticky` when you want something to scroll into view and then stop once it reaches a certain point. In the past we had to use JavaScript to do this. It’s amazing that we can do it with CSS now, and that it’s so simple to use.

Keep in mind that it stays within its parent, **so once the parent scrolls off, it’s gone**. This isn’t an issue if the parent is the `body`, but the rest of the time you might not get the effect you are after.

{% include cta.html %}
