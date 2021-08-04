---
title: Dealing with the “webiness” of CSS
description: CSS is something that you can write with confidence. There is a
  logic behind it, and it can make sense. It's different from other languages,
  but embrace how it's meant to work instead of fighting against it, you'll
  start having a much better time with it.
date: 2021-08-04T14:10:20.192Z
---
<br>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ktw5g24YPWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**CSS is hard because we don’t have total control over the output**. We have to tell the browser our intended output, and then depending on a ton of variables, it gives the user the best it can.

Think of it, we don’t know what device our users are on! Users can have different screen sizes, resolutions, and orientations. Different color gamuts and input devices, different browsers and browser settings, different operating systems, and more!

With all that at play, we can’t have total control over the output, the user does!

**Other languages like JavaScript** work in absolutes. You tell it to do something and it does that. Or, of course, it fails.

**CSS doesn’t “fail”**. If the browser doesn’t understand a line of code, it just skips it and keeps on going with the rest of it. This is similar to if it runs into overflowing content, it’ll let it overflow and keep on going.

As Robin Rendle put it in a response to a tweet of mine awhile back, it’s one reason a lot of people coming from a computer science background don’t like CSS. They have to face the “webniness”, or the changing nature and the unknown variables of the web when writing CSS. 

How can we possibly deal with all those unknowns and variables? **Part of it is anticipating the variables.**

<!--more-->

We know people will use small screens, large screens, and everything in between, so we need to test small screens, large screens, and everything in between.

**Another is avoiding absolutes.**

If I declare `width: 1000px` on a container, it’s locked in. If the screen is smaller than that, it’s going to overflow and cause horizontal scrolling.

Instead, I might set the width using a percentage. Say `90%` with `margin-left` and `margin-right` auto to keep it in the middle. Now I know that my container will grow and shrink with the device width. Awesome.

But then when testing I realize that at large screens, my container is *too big*! Now I can come in with a `max-width` and solve that issue.

**This can all be hard at first**, especially when we don’t know all the tools we have at our disposal, but that’s just like how JavaScript can be hard when we don’t know how to write a loop. 

CSS is the same, it becomes hard to solve specific problems when we don’t know all the tools we have at our disposal.

When we’re writing CSS, sometimes we run into an issue. For simplicity, let’s stick with that `width: 1000px`.

We realize we can’t do that because on many screens it will cause horizontal scrolling, and that sucks.

So we switch it out for a `width: 90%`, and it fixes that issue, but then we have a new one where the div gets too wide on large screens. Now we need to add a `max-width` on top of that. 

## Bandaids on top of bandaids

**And sometimes as we keep adding fixes one on top of the other**, it feels like we’re just piling on the bandaids one on top of the other in an attempt to stop the bleeding.

And then the bandaids start getting in each other’s way **causing all new problems**, and then you feel like Peter Griffin.

![Peter Griffin meme, with him trying to raise vanician blinds and the situation gets worse and worse and worse every time he tries](/src/img/uploads/peter.gif)

It’s *really* easy to fall into the trap of putting bandaids on top of bandaids too. 

We’ve all been there cursing when you’re sure you finally fixed the issue, only for it to cause an even bigger problem.

**Usually, the best way to avoid this type of situation is to plan things out** before writing a single line of code. Look at the design you’re trying to accomplish and think about what parts are moving around, and how they need to move. 

**Try to anticipate the issues.** 

The more practice you get and the more situations you run into, the more you’ll be able to anticipate problems before they happen.

There is no magic bullet either, it takes work and effort and experience. 

**But it also takes a good understanding of the problem itself**. I think a lot of people don’t stop to think about what’s going wrong, or more importantly, *why* it’s going wrong.

When a problem happens, you might not know the best solution, but before adding a bandaid on top of another on top of another one that isn’t working either, stop and think about *why* the issue is happening in the first place. 

Is something not adapting to the screen properly? Why not? What did you try? Why didn’t that work? 

**Work backwards and try to analyze the situation**, see if you can think of a new way, research a new way, or see how another site does it. 

**Piling on bandaids can work in the short-term**, but it doesn’t actually stop the bleeding, it just hides it away. 

It doesn’t help you come up with solutions you can use in future projects, and it doesn’t help when you need to make a slight change or tweak and everything is so locked in that you have no idea what to do next.

**So stop piling on those bandaids and see if you can’t find a different way to approach the problem from the very beginning**. It sucks to start over, but often it’s faster and easier in the long-run.

## Take a breath and analyze the situation

**What’s causing the issue in the first place?** 

This is usually the easy thing to figure out. Something is overflowing, something is adding extra space, or something isn’t going where you want it to in your layout.

**If you aren’t sure how to fix it, going back to square one doesn’t always help out**, though. If you had a better solution, you’d already be using it!

When you’re in a pinch, places like StackOverflow can help out, but my one problem with them is they rarely look at problems in context.

For other languages like JavaScript, that’s often fine. JavaScript, like most programming languages, doesn’t do well in the global scope. We try to keep the scope as small as possible, which helps prevent problems.

**With CSS, with so many variables at play**, it becomes tough to troubleshoot them. 

So what can we do?

We need to give CSS the respect it deserves and **go beyond the basic syntax and understand how CSS *really works***. 

We need to know:

* How the cascade can impact how we write our code
* What formatting contexts are and how they can influence the way we approach layouts
* Understand the different types of boxes things can be in, and the implications these have on our layouts
* We need to understand that there *are* situations where `!important` doesn’t win
* Know how users can overwrite the CSS we wrote
* And of course how to figure all of this out in the first place!

**We need to stop letting CSS trick us into thinking it’s a simple language** and we need to understand what causes it to render the way it does on a page, and we need to learn the properties that we have to help us control a layout.

When we do that, it simplifies our questions when we run into problems.

If I’m trying to use flexbox for a layout and it’s causing me an issue, I can isolate that one problem, research the one property that isn’t acting how I think it should, and probably get a solution. 

That’s much better than not *really* understanding how to position something on a page and combining floats with positioning and trying to then add flexbox on top of it. 

Bandaids on top of bandaids on top of bandaids.

## Unlocking the potential of CSS

And the nice thing is, once you really start understanding how CSS is meant to work, then as you start unlocking more and more of it, **you start to be able to anticipate how it’s going to work**. 

You know what you need to do to achieve a specific layout, and you can predict how it will render across different screens, devices, and browsers.

Even better? Once we understand CSS at a deep level, when a problem does come up, **you’ll be able to find a solution to it so much faster**. 

You’ll start knowing where to look, or often you’ll know the reason right away and have a solution in mind without even having to go try to look things up.

We learn the very foundations early on, then assume we know them and keep moving forward, then get mad at CSS because it doesn’t work how we think it should. 

**But that’s because we only know the fundamentals exist instead of knowing how they work.** One of the keys to learning CSS at a deep level is understanding the fundamentals at a very deep level.

**That is why I’ve created [CSS Demystified](https://cssdemystified.com)**, a course that deep dives *how* CSS works. The first two weeks are devoted to the “simple” fundamentals, but instead of looking at the basics of how they work, I look at the implications that they have on how we write code. 

In CSS Demystified, I break it all down, going over the mistakes I see people making early on. From there, we slowly work our way up to more advanced approaches where we’re taking advantage of how CSS works to write clean, functional, and easy to maintain CSS.

CSS is something that you can write with confidence. There is a logic behind it, and it can make sense. It's different from other languages, but embrace how it's meant to work instead of fighting against it, you'll start having a much better time with it.