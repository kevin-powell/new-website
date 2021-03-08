---
title: CSS Custom Properties in a Sass project
description: CSS Custom Properties are great, and can be integrated into a Sass project in interesting ways.
---

Last week [I took a look at how I set up a Sass map](/article//using-my-colors), to use my colors on my site, and I teased you a bit about how I went and set up some CSS custom properties.

Sidenote: If you're not familiar with CSS custom properties (commonly referred to as CSS variables), you can check out [my YouTube series on them](https://youtu.be/PHO6TBq_auI), which I think is a nice introduction to them (as I would, 😊)!

## Why I wanted to use CSS custom properties

Since you're on my site, you might have noticed that each "section" or page uses it's own color, and that color is unique to that design. It's used for the headers links and button colors.

### The setup

So instead of having to declare a different value everywhere, I set up this to start with:

```scss
:root {
  --main: #{clr(neutral)}; // placeholder
}
```

I set this neutral color as a placeholder, so that if I forget to use it somewhere, or I create a new page, this will be the default anywhere I use `--main`.

You'll notice that I had to use interpolation where I decaled my `--main: #{clr(neutral)}`. This took me a little while to figure out, as without it, it would spit out `clr(neutral)` as the color in my compiled CSS, and not the actual color I wanted (if you aren't familiar with interpolation, it's just wrapping something in sass with `#{ ... }` so that it will interpolate the value inside to what you need). If you were using it with just a normal color value here, it wouldn't be an issue, but because I wanted to use my map function, it wouldn't work without this.

### How I used it on my site

Each page of mine has it's own class on the body so that I can easily select it. Then, all I have to do is this:

```scss
.youtube {
  --main: #{clr(yt)};
}

.article,
.articles {
  --main: #{clr(articles)};
}

.community {
  --main: #{clr(com)};
}

.courses {
  --main: #{clr(course)};
}
```

The real benefit here is being able to reduce the amount of code that I write, as for all my styles, the headers, links, and a few other elements, I just have to set their color or background to `var(--main)`. For example:

```scss
.hero__title,
.section__title {
  color: var(--main);
}
```

As I mentioned, I also used this on my links and some other elements. Then, by changing the color of `--main` for each page, the color cascades throughout that page. 

## Other ways of using this

There are a ton of ways that this can be used other than themeing individual pages. It can be used for themeing sites, or, as I'm going to look at in a future post, themeing individual components on a site. All of it let's you write a lot less code if you set things up well, and in reality you don't have to do it with Sass. I used Sass because it's a big part of my workflow, but I'm starting to use CSS variables more and more, and I'm loving them more every time I do :).
