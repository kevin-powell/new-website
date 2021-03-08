---
title: I'm always surprised more people don't know this about CSS backgrounds
---

Maybe it's because I like playing around with these things, but it always amazes me how few people know that **you can set multiple backgrounds on something**, and there are some good use cases for it as well!

<!--more-->

## The `background` property

So before we really dive into this, I want to make sure that you’re aware that `background` is a shorthand property for a whole bunch of properties:

- background-clip
- background-color
- background-image
- background-origin
- background-position
- background-repeat
- background-size
- background-attachment

We can do a lot with this shorthand, but if you’re handling multiple backgrounds, it can get unweildy, but I could do something like this to set both an image and a color:

```css
body {
  background: black url(//unsplash.it/100/100) no-repeat;
}
```

Another major issue with this method is, each part of the background shorthand can accept either zero or one argument, so if I wanted multiple background images, I can’t. I would need to do it the long way.

### Multiple background images

Here we get our multiple background images working:

```css
body {
  background-color: black;
  background-image: url(//unsplash.it/100/100), url(//unsplash.it/200/200);
  background-repeat: no-repeat;
}
```

When you do this, the images stack on top of each other, with the first one being on top, and each one after that being one layer down in the stack.

In this case, both will be set to no repeat, but I can actually repeat them individually too:

```css
body {
  background-color: black;
  background-image: url(//unsplash.it/100/100), url(//unsplash.it/200/200);
  background-repeat: repeat-y, repeat-x;
}
```

By doing this, the first image will repeat along the Y-axis, and the second one along the X-axis.

### Blending modes

Probably one of the more useful cases of having multiple images (or an image and a color) is using `background-blending-mode` to blend them together!

```css
body {
  height: 100vh;
  background-image: linear-gradient(45deg, red, blue),
    url(//unsplash.it/1200/600);
  background-size: cover;
  background-blend-mode: multiply;
}
```

[Here is a codepen where I set that up](https://codepen.io/kevinpowell/pen/ZoMXoE), if you’d like to see it in action.
