---
layout: blog
title: writing-mode
excerpt_separator: <!--more-->
---

So, it turns out doing something like this is super easy:

![](https://d2mxuefqeaa7sj.cloudfront.net/s_F07C5DFA2F96535F90BE71C502A9D2BB608E9BBC039F5BCD3044FA0B20237D9C_1526491188177_Screen+Shot+2018-05-16+at+1.19.32+PM.png)

### The Markup

The markup for this is nice and basic, pretty much a parent, with the two children:

```html
<div class="card">
  <div class="card__title">Title here</div>
  <div class="card__body">Lorem ipsum dolor sit amet...</div>
</div>
```

<!--more-->

I just gave the `.card` a width and `display: grid` with two columns, I could have used flexbox too (and even float, really).

The real magic comes from `writing-mode`. This let’s us control left-to-right or right-to-left for dealing with different languages, but it also gave us `vertical-lr` and `vertical-rl` for vertical left-to-right and vertical right-to-left. The only problem with this is it’s terrible. The vertical values put the text the wrong way around:

![](https://d2mxuefqeaa7sj.cloudfront.net/s_F07C5DFA2F96535F90BE71C502A9D2BB608E9BBC039F5BCD3044FA0B20237D9C_1526491750922_Screen+Shot+2018-05-16+at+1.28.43+PM.png)

I like the idea, but… ugh.

The whole `lr` part is for left-to-right, and it’s what happens if the text breaks over multiple lines.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_F07C5DFA2F96535F90BE71C502A9D2BB608E9BBC039F5BCD3044FA0B20237D9C_1526491973081_Screen+Shot+2018-05-16+at+1.32.08+PM.png)

Which… ummm, I don’t know how anyone thought this was a good idea, but okay.

### Text-orientation

There is the `text-orientation: upright;` property as well that’s intersting, all though still considered experimental, though browser support is fine outside of IE and Edge. I’m not a huge fan of the overall effect, but it might be worth exploring a bit more.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_F07C5DFA2F96535F90BE71C502A9D2BB608E9BBC039F5BCD3044FA0B20237D9C_1526494249386_Screen+Shot+2018-05-16+at+1.42.55+PM.png)

It would probably be best to do this in combination with `text-transform: uppercase`.

### Sideways to the rescue

Obviously I’m not the only one to feel like it’s a cool idea, but it isn’t very great, as they have given us two new values for `writing-mode` : `sideways-lr` and `sideways-rl`. These are new though, [and don’t have the greatest browser support](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode#Browser_compatibility), but they are what I used to create the very first image from this email.

And if it breaks over multiple lines, it still looks good!

![](https://d2mxuefqeaa7sj.cloudfront.net/s_F07C5DFA2F96535F90BE71C502A9D2BB608E9BBC039F5BCD3044FA0B20237D9C_1526492133414_Screen+Shot+2018-05-16+at+1.33.42+PM.png)

I love how this works, I wish I’d known about it earlier and I’m looking forward for browser support to catch up, because honestly I think this opens up some really interesting possibilities!

If you’d like to play around with my example, you can find [the codepen for it right here](https://codepen.io/kevinpowell/pen/KRGqQd).
