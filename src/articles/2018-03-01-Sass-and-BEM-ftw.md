---
title: Sass and BEM ftw
---

The parent selector in Sass is amazing. I love Sass for a lot of reasons, but this is a really big one (there are many other reasons I love Sass too, which is why [I made a course on it](https://www.kevinpowell.co/sass-course)).

In Sass, you can use nesting, which is when you nest a selector inside another selector. It's powerful, though it can lead to some messy code if you aren't careful. One really cool thing with nesting though, is if you combine it with the parent selector, it becomes really powerful.

To create a parent selector, you just have to use the ampersand character (`&`).

<!--more-->

So a super basic example would be:

```css
.parent {
  background: blue;

  &-child {
    background: red;
  }
}
```

That would output CSS which would look like this:

```css
.parent {
  background: blue;
}

.parent-child {
  background: red;
}
```

## A more realistic example

Abstract examples are the worst though, right? Here is a more realistic way that I might use it:

```scss
a {
  color: #555;
  &:hover {
    color: red;
    text-decoration: underline;
  }
  &:visited {
    color: purple;
  }
}
```

That will compile to CSS which look like this:

<!--more-->

```css
a {
  color: #555;
}
a:hover {
  color: red;
  text-decoration: underline;
}
a:visited {
  color: purple;
}
```

The other time it’s awesome is if you use something like the BEM naming convention for your class names, where you’ll have a component, such as a `.button`, and then you use modifiers to change the color, size, etc:

```scss
.button {
  display: inline-block;
  padding: .5em 1.25em;
  text-transform: uppcase;
  &--primary {
    background: $primary;
    color: white;
    &:hover {
      background: $primary-dark;
    }
  }
  &--accent {
    background: $accent;
    color: black;
    &:hover {
      background: $accent-dark;
    }
  }
}
```

![](https://d2mxuefqeaa7sj.cloudfront.net/s_D5700D1BE4B9644C19F1E6DE2869B13C8C7CEE348637B82FC7807C9A5F12A97A_1529240288815_image.png)

This is just one of the many reasons that I love Sass! It's an insanely powerful language that let's your literally do some magic like automatically picking a text color to keep high contrast based on the background you set, among many other cool and awesome things. If you haven't started playing with it yet, I hope this post inspires you to try it out!

{% include cta.html %}
