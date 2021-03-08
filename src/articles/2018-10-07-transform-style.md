---
title: transform-style opens up some cool possibilities
desription: In trying to recreate something I found online, I came across the transform-style property. I don't do much fancy 3D transforms with CSS normally, but I really like the doors this opens up.
---

I don't do a lot of fancy transitions with CSS. I'm a fan of minimilism in general, so simple layouts with simple effects tend to win me over. Because of this, I haven't spent much time playing with anything 3D related with CSS very much. I've toyed around with `persepective` a little, but that's about it.

That is, until I saw a tweet (that I've since been unable to refind) that had a cool effect in it. I was intrigued, and tried to replicate it for fun, but I wasn't able to do it until I discovered `tranform-style`.

<!--more-->

## What is `transform-style`?

It is an interesting property that deals with the 3D position of the children of an element.

`transform-style` comes with only two values:

- `flat` (the default)
- `preserve-3d`

Normally a child element can have some 3D type stuff done to it, say a rotation, but it's only visual. It's still flat on the parent. `transform-style` let's us have children also be in the 3D space. And that might have left you confused, as it's really hard to explain with words. Let's look at some examples to clear things up.

 <p data-height="265" data-theme-id="0" data-slug-hash="GYqLXO" data-default-tab="result" data-user="kevinpowell" data-pen-title="transform-style - rotating" class="codepen">See the Pen <a href="https://codepen.io/kevinpowell/pen/GYqLXO/">transform-style - rotating</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

If you hover over the above example, you'll see the parent rotate on the Y-axis. Nothing fancy going on here at all. The child is inside the parent, so it rotates along with it, and everything works as you'd expect.

We can take this up another level by rotating the child inside the parent as well. I'm not sure why you'd do this, because as we can see below, it just looks a little strange. But we can do it.

<p data-height="265" data-theme-id="0" data-slug-hash="KGMLwj" data-default-tab="css,result" data-user="kevinpowell" data-pen-title="transform-style - rotating parent and child" class="codepen">See the Pen <a href="https://codepen.io/kevinpowell/pen/KGMLwj/">transform-style - rotating parent and child</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

(Before we keep going, a short little interuption. If you're enjoying this article, you can use the below sign up to make sure you don't miss any new ones in the future!)

{% include cta-short.njk %}

That above example can get really interesting if we add `transform-style: preserve-3d;` to this one. At first it looks a little broken, but once you hover on the parent, you'll imediately understand what's happening.

<p data-height="265" data-theme-id="0" data-slug-hash="pxbmEz" data-default-tab="css,result" data-user="kevinpowell" data-pen-title="transform-style - rotating parent and child with preserve-3d" class="codepen">See the Pen <a href="https://codepen.io/kevinpowell/pen/pxbmEz/">transform-style - rotating parent and child with preserve-3d</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

That's really cool, right?

## What `preserve-3d` is doing.

When we rotate the parent, normally the children stay 'flat' with it, which is why that's the default property for `transform-style`. This is probably what you want most of the time, but sometimes, you might want the child to behave different.

So with `transform-style: preserve-3d` on the parent element, it's keeping the 3d-ness of the children. So as you can see in the example above, it opens up some pretty cool possibilities. I'm playing around with this a lot right now to see what I can come up with, and so far I'm really enjoying some of the little things you can do with it.

## Browser support

This part is usually a 'this is cool, but...' type thing, but [browser support is really good](https://caniuse.com/#search=transform-style) on this! As usual, IE is the downfall here. But, even though that's the case, it's not the end of the world. As long as the `preserve-3d` isn't essential to the entire thing being accessible, even if it fails it's probably not the end of the world. Of course, the above example is a time when it failing might cause an issue, but for most of the use cases I've been finding for it, it wouldn't be a problem. Just keep it in mind when you play with it, and see it as a progressive enhancement.

## Seeing it in more action

This is an update to the original post. I've since published a video on my channel where I go a bit more in depth and do some more fun stuff with this! [Click here to watch the video](https://youtu.be/FeJEEE3zc4U).

{% include cta.html %}
