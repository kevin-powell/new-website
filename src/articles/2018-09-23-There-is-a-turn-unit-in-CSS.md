---
title: There is a turn unit in CSS
desription: Did you know there is a turn unit in CSS?
---

Following up on [my posts inspired by tweets](/a-cool-trick-for-checking-for-alt-attribute) that I come across (front-end dev twitter is *amazing* for finding little tips and tricks and stuff like I like to post here), here is an amazing thing I came across by none other than Wes Bos:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">🔥 Did you know CSS has a `turn` unit? It’s often easier to turn something `rotate(0.75turn)` instead of doing the math to `rotate(270deg)`</p>&mdash; Wes Bos (@wesbos) <a href="https://twitter.com/wesbos/status/1031644788095942658?ref_src=twsrc%5Etfw">August 20, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<!--more-->

Did you about the `turn` unit? I sure as hell didn't.

I think Wes’ tweet sums up how it works, as it’s a pretty simple property, but here it is in action incase you want to play around with it a bit:

<p data-height="265" data-theme-id="0" data-slug-hash="JaYXXN" data-default-tab="css,result" data-user="kevinpowell" data-pen-title="JaYXXN" class="codepen">See the Pen <a href="https://codepen.io/kevinpowell/pen/JaYXXN/">JaYXXN</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

As you might be able to see here, for some adjustments or minor tweeks, sticking with degrees might help, but for bigger rotations, this can be pretty handy, specially if you are doing an animation and need something to turn more than one time, you can easily enough use `4turn` (hover over the last one in the above codepen to see that in action). 

This probably isn't something that you'd be using on a regular basis, but I love finding out about these little things. It's one of those little things that will pop-up from time to time and make things just a little bit easier.

{% include cta.html %}
