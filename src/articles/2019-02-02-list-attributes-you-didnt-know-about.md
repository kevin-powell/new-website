---
title: List attributes you didn't know existed
description: Did you know you can reverse a list for a countdown, or start an ordered list at any number you want?
---

I think most people know that you can change the `type` of an `<ol>`, so you can get something like this:

<ol type="a">
  <li>List Item</li>
  <li>List Item</li>
  <li>List Item</li>
</ol>

But, did you know you can also easily reverse the order of a list so it counts down instead of up? Or, what about starting it at a different number (or letter)?

<!--more-->

I didn't know this until very recently, and I never hear anyone talking about it, so I'm sure I'm not the only one. And I know these probably aren't the most common things you'll ever use, but like most things I post here, they are the type of things that come up at some random time and you're so happy you have a simple solution for it.

## Reversing a list

To reverse the order of a list, all you have to do is add the `reveresed` attribute to it:

```html
<ol reversed>
  <li>List Item 1</li>
  <li>List Item 2</li>
  <li>List Item 3</li>
</ol>
```

If ever you need to down down to something, instead counting up, this can be useful. Below is how that code would render. Notice that the list items stay in the same order, it's just the counter that is reversed. 

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="kevinpowell" data-slug-hash="717023b59effb5ba9b7a2736dee9dc5e" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="a reversed list">
  <span>See the Pen <a href="https://codepen.io/kevinpowell/pen/717023b59effb5ba9b7a2736dee9dc5e/">
  a reversed list</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

So we're not flipping the list around, we're keeping it the same way you wrote it, just counting down instead of counting up. Cool beans.

## Starting at a number other than 1

You can start a list at a number other than one, again, something you won't use every day, but which might come in handy, by adding in the `start` attribute, followed by a number:

```html
<ol start="5">
  <li>List Item 1</li>
  <li>List Item 2</li>
  <li>List Item 3</li>
</ol>
```

And of course, his can be combined with the `type` attribute which you can use to change the style of the number to roman numerials (`i` for lowercase, `I` for uppercase), or to letters (`a` for lowercase, `A` for uppercase).

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="kevinpowell" data-slug-hash="da6a4466331932692ed36b10eecfd20d" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="starting a list at &amp;apos;F&amp;apos;">
  <span>See the Pen <a href="https://codepen.io/kevinpowell/pen/da6a4466331932692ed36b10eecfd20d/">
  starting a list at &apos;F&apos;</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

And there you have it, some `<ol>` attributes you probably didn't know existed 😄


{% include cta.html %}
