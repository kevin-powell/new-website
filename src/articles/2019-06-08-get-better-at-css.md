---
title: You'd be better at CSS if you knew how it worked
description: Being good at CSS means knowing how it works. In this article, I explore how you can learn it better through different resources as well as by asking better questions.
---

CSS looks so simple. It gives off that impression because **the syntax is so basic and easy to understand**.

Show the following snippet to someone who has never seen CSS and I bet they can get at least a rough idea of what is going on.

```css
.textbox {
  background: pink;
  border-width: 5px;
  border-color: red;
  border-style: solid;
}
```

One of the problems with the syntax being so basic is that it gives off the impression that it is a simple language. It's simple in how it's written, but **it can be downright complex in how it actually works**.

![Man sitting at his laptop, clearly frustrated with what is on the screen](../../img/get-better-at-css/get-better-at-css.jpg)

People are tricked into thinking it's simple and then, when it doesn't work they expect it to, they say it's broken.

<!--more-->

Even people who are wizards at "real" programming languages get frustrated with it. They're tricked by it just as much as a someone who hasn't written a line of code in their life.

As much as they'd like us to think it, CSS isn't broken. **They don't know how CSS works** and they don't take the time to figure it out because "it's so basic".

<!--more-->

## A common hack people don't understand

For example, a lot of people will use `overflow: auto` on a parent element to stop weird things happening when some of the children are using float.

They know that it works, but they don't know _why_ it works.

Do you know why it works?

<p class="codepen" data-height="464" data-theme-id="0" data-default-tab="result" data-user="kevinpowell" data-slug-hash="gEZmXy" data-preview="true" style="height: 464px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="overflow: auto ... but why?">
  <span>See the Pen <a href="https://codepen.io/kevinpowell/pen/gEZmXy/">
  overflow: auto ... but why?</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

_View my CodePen [here](https://codepen.io/kevinpowell/pen/gEZmXy)_.

Or what about when you set margin-top or padding-top as a percentage like so?

<p class="codepen" data-height="423" data-theme-id="0" data-default-tab="result" data-user="kevinpowell" data-slug-hash="08a64f87ab9b1e5df7af78af7e39335d" data-preview="true" style="height: 423px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="padding-top as a percentage">
  <span>See the Pen <a href="https://codepen.io/kevinpowell/pen/08a64f87ab9b1e5df7af78af7e39335d/">
  padding-top as a percentage</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

_View my CodePen [here](https://codepen.io/kevinpowell/pen/08a64f87ab9b1e5df7af78af7e39335d)._

Maybe you knew that the padding-top is based on the width and not the height. Did you know that it isn't based on the width of that element though?

Go take another look at that pen above. The blue box there has width: 300px. Rezise the window. The padding-top grows and shrinks almost as if it was set with vw.

## It's not counterintuitive, you don't know how it works

You might think I'm being a jackass here, but I'm not trying to be mean.

I teach CSS in the classroom as well as to 10s of thousands of people over on [my YouTube channel](https://youtube.com/kevinpowell). When I do deep dives into certain topics, people always reply with an "ohhh, that's how it works."

Sometimes it's something [they've been using for years](https://www.youtube.com/watch?v=zGiirUiWslI). It worked for all these years, but they didn't know _why_ it worked.

Many beginners start to figure out how it works, then they try to make their first site on their own without any help from a tutorial and they panic. It's no longer as easy as it looked!

With more practice and by learning to [plan things out more](https://www.kevinpowell.co/article/creating-a-website-getting-over-the-anxiety-of-starting-with-a-blank-file/), they get better. But then they fall into the trap of thinking they know more than they do.

It's the same for people who come from computer science backgrounds. The language gives off the impression of being very basic, so it must be!

In both situations, they don't dive in and actually learn how it's meant to work.

**That also means they can't take advantage of how it works**! I'm sure you've seen a few ridiculously awesome CSS hacks. People don't just pull them out of thin air, they figure them out because they understand the specification.

In this article, we'll look at an example that, from my experience, a lot of people don't really understand. More importantly, I'll also explore how you can learn how things are working in the future.

I'll give you a fish to start, but then I'll teach you how to fish, so to speak.

## Do you really know how pseudo-elements work?

Take a look at this code.

```css
.blockquote::before {
  content: "";
  position: absolute;
  left: -2em;
  top: 0;
  bottom: 0;
  width: 10px;
  background: #42d7f4;
}
```

Where would that `::before` pseudo-element live?

![A code snippit with option A pointing to before the actual element, and B pointing to just inside the element, before it's content](../../img/get-better-at-css/pseudo-element-01.jpg)

Do you know how many people pick A? I always assumed it was A. People in the comments of my videos often tell me they thought it was A. Intuitively, A makes sense because... well, we are going _before_ `.blockquote`.

That's not right though. We are going _before_ the content that is inside of `.blockquote`. The same applies for `::after`. It goes _after_ all the content of its parent, but it lives inside its parent.

![The DOM, showing a pseudo-element inside it's parent](../../img/get-better-at-css/pseudo-element-02.jpg)

This is a good thing of course. If not it would be a nightmare to use.

Knowing that it lives _inside_ its parent means that if we declare a position other than static on the parent, we can use `position: absolute` and get our pseudo-element right where we want it.

People work with pseudo-elements all the time and use them just like I described above, yet they think that A is still the answer.

If you picked A, I'd also suggest **you don't use your DevTools enough**. Get in there and look at why and how things are happening (and I was guilty here for the longest time as well)!

## How to get a better understanding of CSS

Since I started teaching CSS, I've had to dive in and learn things better. It's transformed how I think about and how I approach CSS.

If you can find the time to teach, that's awesome, but I realize that isn't an option (or desire) for a lot of people. That's okay, there are other ways to figure things out.

My single biggest piece of advice would be to **stop using StackOverflow so much**.

Don't get me wrong, StackOverflow is awesome. It's full of _amazing_ information. It's so nice to be able to quickly get answers. I wish I had something like StackOverflow when I first started making websites in the late 90s (and yes, I'm old).

The problem with it is when you copy and paste a solution from there, you didn't learn a damn thing. And let's be honest, that's what you do most of the time.

The resource I rely on the most when trying to understand something better is the [MDN Web Docs](https://developer.mozilla.org) or the actual specification. I find the MDN easier, so I start there and if I have to I'll go into the actual spec.

I literally google whatever I'm looking for and just stick MDN on the end to make sure it's the first result.

If we did that for `::before` you'd see this as the _very first sentence:_

> In CSS, ::before creates a pseudo-element that is the first child of the selected element.

It's not always so clear, and sometimes you need to dive into their examples or read a bit more in-depth for [more complicated matters](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context), but they do an amazing job of putting the information out there in a well organized and concise way.

## Putting it into practice

Let's use that `padding-top` example from above as a bit of a case study.

Let's say that you put the `padding-top` like I did above and it didn't really behave like you'd expect that it would. You get a bit annoyed.

Next step? Google "padding-top mdn".

Turns out they have [an actual page dedicated to ](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top)[padding-top](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top#Values) and not just some generic "padding" page. That's cool.

After you click through and scroll down a little, you find [a section devoted to possible values](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top#Values).

And in there it mentions fixed lengths and, well look at that, _percentages_. That's convenient. You read the following:

> The size of the padding as a percentage, relative to the width of the containing block. Must be nonnegative.

There is your answer. **It's relative to the width of the containing block**.

Now that we know how it's being calculated, we can use it properly (or in this case, perhaps, use a unit other than percentage).

In this case, that's sort of the end of the journey.

Sometimes the docs will explain why things behave in that way as well. Other times, like this, they don't really talk about why. In this case, it comes down to it creating a circular loop that could break your page. [This article does a nice job of breaking it down](https://www.hongkiat.com/blog/calculate-css-percentage-margins/) if you'd like to read up more on it.

## You don't need to do this for every single property

I know we can't do a deep dive into all of the CSS properties or else you'd never have time to write a line of code, plus I think we all know how `color` works. But the number of people who use flexbox and have no idea how flex-basis work is, well, probably 90% of people who use flexbox.

When you understand how a property is meant to work, you can use it more effectively and write better code that works the way _you expect it to_ each and every time.

Wouldn't that be nice?

So the next time you're writing code and something doesn't work, don't jump straight onto StackOverflow or find some patchwork answer that you can paste into your own code and hope that it works.

Take an extra 5 to 10 minutes and find out how that property actually is intended to work. Those extra minutes will save you tenfold that much time in the long run.

## You will still get stuck

The most important thing is to keep pushing. The more code you write, the more you use the tools at your disposal and the better easier everything gets. But there is one thing I can guarantee: you will still get stuck from time to time.

Whatever you do, don't fret if you run into something that really stumps you. **Find someone, or a group, where you feel comfortable asking questions**, whether its a community or someone you can shoot a DM to, it can make all the difference.

And if you don't have that option, StackOverflow is always there. As I said earlier, it's an amazing resource that I wish I had access to when I started! The big problem is that people too often want a solution to their problem, rather than trying to figure out what the problem is in the first place.

## Understanding problems vs getting solutions

When you get a solution on StackOverflow (or anywhere else), you're super happy because you copy and paste some code and it works!

You just banged your head against the wall for 2-hours and now it's fixed, woohoo!

But you didn't learn anything because you moved on. The problem was solved after all!

**The real trick is asking questions that, instead of asking for a solution, ask what is causing the problem in the first place**. Using high-quality questions that ask people what is causing the problem in the first place opens up a lot more learning.

And people, when faced with questions like that, will give you the solution too, but most of the time it's much more detailed and insightful.

I know they work because I answer peoples questions _all the time_.

If it's a low-value question, I answer quickly and move on, if they ask in the right way, I end up providing a lot more value because, while I want to answer quickly, I still want to actually answer their question!

You win twice because **you walk away with a solution, but even more importantly, you walk away with more understanding as well**. That means the next time it happens, you'll know why it happened and how to fix it, and that's amazing.

**Not sure how to ask high-value questions?** I've got a free PDF that goes deeper into the subject which you can get just below.

It goes into more detail into low- and high-value questions and gives concrete examples of ways you can ask the same question but in ways that extract maximum value.

{% include ask-question-ebook.html %}
