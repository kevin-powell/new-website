---
title: Change from HEX to RGB to HSL in seconds with VS Code
description: "HEX is the easier color mode to copy and paste values around from
  colour pickers and the like. But it's the hardest to work with when you need
  to make changes to your colors, or make variations of your colors. "
date: 2021-03-19T14:26:44.410Z
---

There are a ton of websites that can help you pick colours for your web design projects out there, but most of the time, HEX is the only colour mode you can copy and paste into your editor without having to make any changes to get it working.

[Ideally, we are working with HSL](https://sujansundareswaran.com/blog/why-hsl-is-better-than-hex-and-rgb), as it's the easiest to make changes to. Here are the variations I have of my primary colour here on this site. The `400` is the base, and then I just modified the `l` value (lightness) for each variation. Easy peasy!

<!--more-->

![Screenshot of my colours from VS Code. Base color is set to hsl(12, 100%, 43%). From there, the lightness goes up in steps of 10 to 20%.](/img/uploads/my-colors.jpg)

But, when I go to copy colours from colour picking sites, I can always get a one-click paste of the HEX. If I want HSL, I usually have to click a few times to switch to it HSL (like on [coolors](https://coolors.co/)), don't even have the option (like on [mycolor.space](https://mycolor.space/)), or you have to remove the degree symbol from the hue (like on [Google's color picker](https://www.google.com/search?q=color+picker)).

And in all those above cases, you also have to write out `hsl()` and paste the number inside the parenthesis.

And yes, it's not _that_ much work, but it's a lot of extra steps, especially when you have a lot of colours to work with!

## VS Code to the rescue

I always knew that VS Code had a built-in colour picker. When it shows one of those colour squares, you just hover over it, or the colour value, for a second and boom, it shows up.

![Colour picking popping up when cursor hovers over colour value in VS Code](/img/uploads/pop-up.gif)

But what I didn't know is that you can switch to it by clicking at the top of the picker, where it shows you the colour value. It's so awesome and quick and makes me so happy!

![Changing color mode of a color from HEX to RGB to HSL by clicking on the value in the colour picker in VS Code](/img/uploads/change-mode.gif)

I wish I could give full credit to who taught me this. During a live stream, I was working on my colours, and someone in the chat mentioned that we can do that. So if you are that person, thank you so much!
