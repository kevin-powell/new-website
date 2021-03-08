---
title: Dynamic text color with Sass
---

CSS is awesome and with the addition of [Custom Properties](https://www.kevinpowell.co/article/css-custom-props-and-sass/) and things like calc() it’s really, really powerful. Sass is still a major part of my workflow though. It saves allows me to work faster and be better organized, but this newsletter is about neat tips and tricks and fun little things, so in staying on topic, here is a fun way you can use Sass to dynamically set your font color to ensure high contrast with your background color!

<!--more-->

### Creating our Sass Function

To do something like this, we need a variable, we need to create our own function, and we also have to use a built in Sass function.

```scss
$bg: #000; // my background color

@function text-clr($color) {
  // do something
}
```

What I’ve done here is created a variable called `$bg`, and for the moment set it to black. Then I created a function. This function is called `text-clr` and it accents one argument.

```scss
$bg: #000; // my background color

@function text-clr($color) {
  @if (lightness($color) > 50) {
    // do something
  } @else {
    // do something
  }
}
```

Inside my function, I’ve added an if statement. The `lightness($color)` will look at my color as an HSL value. HSL is Hue, Saturation, Lightnes. Lightness is a percentage, so 0% is black, 100% and 50% is right dead in the middle. So it’s checking the lightness of whatever color I input in. If the lightness is less than 50, I want it to do something. If it isn’t less than 50, I want to do something else.

```scss
$bg: #000; // my background color

@function text-clr($color) {
  @if (lightness($color) > 50) {
    @return #000;
  } @else {
    @return #fff;
  }
}
```

So what I’ve told it to do is spit out black if my lightness is greater than 50, and spit out white if my lightness is less than 50. Now that it’s all set up, I can use it.

### Using our Sass function

```scss
body {
  background: $bg;
  color: text($bg);
}
```

So I first set my background using my variable, and then I used my custom function to set the `color`, using that variable that I created for both the background and the color function I created.

### Making life easier with a `@mixin`

And if the idea of having to write out the same colour twice drives you nuts, maybe it’s worth taking 20 seconds to add this mixin:

```scss
@mixin dc($color) {
  // dc is short for dynamic color
  background: $color;
  color: text($color);
}
```

A Sass mixin allows us to take a block of code that we repeat a lot and store it, to be used anywhere we want. So now:

```scss
body {
  @include dc($bg);
}
```

And that’s it!

Here it is in action, play around with the `background-color` and see what happens!

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="kevinpowell" data-slug-hash="45ed86610f4fbdb2d05c8d6261e45b75" data-preview="true" data-editable="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="45ed86610f4fbdb2d05c8d6261e45b75">
  <span>See the Pen <a href="https://codepen.io/kevinpowell/pen/45ed86610f4fbdb2d05c8d6261e45b75/">
  45ed86610f4fbdb2d05c8d6261e45b75</a> by Kevin (<a href="https://codepen.io/kevinpowell">@kevinpowell</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Now, I’m just using this on my body, and I’m only setting it up using white or black, but you could push this more using brand colours to work nicer, and even push it futher with some other functions instead of `lightness()`. Even a simple implimentation of this could be amazing for quick mockups, or even simple theming.

And Sass can do a heck of a lot more than this. It's such a powerful language that I see many people not pushing to it's full potential, I decided to make a [course on it](https://www.kevinpowell.co/sass-course)! I also have a bunch of YouTube videos that explore a lot of it for free as well.

{% include cta.html %}
