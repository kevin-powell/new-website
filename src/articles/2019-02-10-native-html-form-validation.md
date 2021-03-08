---
title: Native HTML form validation
description: A look at how you can use the pattern attribute for advanced form validation
---

HTML can do a boatload of form validation all on it’s own. You probably know that you can put the `required` attribute and the form won’t submit if that’s missing. 

On top of `required` you can also use `type=` to define the type, which can help with validation for things like email addresses (`<input type="email">`). 

But what if you want someone’s first name, and you don’t want them to put in numbers or strange symbols? Or what if you want a password that has a minimum length, a mix of upper- and lower-case letters, and a symbol?

You can do all of that with the `pattern` attribute!

<!--more-->

## Using the `pattern` attribute

Here is an example of it in action:

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="kevinpowell" data-slug-hash="f1be05739856662eb423ef8f77a87e20" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Native HTML form validation with pattern">
  <span>See the Pen <a href="https://codepen.io/kevinpowell/pen/f1be05739856662eb423ef8f77a87e20/">
  Native HTML form validation with pattern</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

You’ll notice in there that I’m using the `pattern` attribute with a bunch of stuff after it. That stuff is all [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) and let me tell you, they are strange. Simple stuff isn’t too bad, but if you look at the above form, some of those things look terribly complicated. 

Luckily, there is a website here to save us: [html5pattern.com](http://html5pattern.com/). If you go on there, they have a bunch of categories on the left, things like names, passwords, colors, postal codes, etc. Click on the category you want and you get a bunch of different options that you can use. 

## Two drawbacks the `pattern` attribute

There are two big drawbacks here. 

- Generic error message and styling
- Limited in what it can check

You’ll notice that the error messages are super generic. The styling of them is also controlled by the browser, meaning that it’ll look completely different in each browser as well. Both of these can be changed with JS, but that does mean that suddenly we’re moving out of the realm of native HTML validation that this was so awesome for.

Also, you might notice that it’ll accept your submission if the two passwords are different. Once again, we’ve got to dive into JS to validate things like that.

## It’s still pretty awesome

Despite the drawbacks, I think it’s still pretty awesome that you can do so much, all within HTML itself. You might still find yourself requiring some JS, but the amount you need isn’t too bad at all compared to the types of things we used to have to do.
