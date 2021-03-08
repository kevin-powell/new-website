---
title: Using a Sass map for my colors
---

Last week [I took a look at how I chose my color scheme](/article/picking-colors), now for a little insight into how I used it when writing my Sass.

## Using my colors

First, **I created a variable for all my colors**. This was just to make life easier to reference, or make changes to later on:

```scss
$primary-color: #EE6352;
$youtube: #D16E8D;
$articles: #FFAC83;
$community: #3F78C9;
$courses: #49C4A3;
$white: #FFF;
$black: #444A51;

$lighten: 5;
$darken: 25;
```

You'll notice a `$lighten` and `$darken` variables there too. That was so I could lighten everything by the same amount, and very quickly change how much I'm lightening or darkening things by.

<!--more-->

### Creating a Sass map

With that in place **I created a Sass map to use them**, plus the light and dark versions, which you can see below. It looks complicated if you've never used Sass before, or a map before, but it's totally worth the time in my opinion.

```scss
$colors: (
  primary: (
    base: $primary-color,
    light: lighten($primary-color, $lighten),
    dark: darken($primary-color, $darken),
  ),
  yt: (
    base: $youtube,
    light: lighten($youtube, $lighten),
    dark: darken($youtube, $darken),
  ),
  articles: (
    base: $articles,
    light: lighten($articles, $lighten),
    dark: darken($articles, $darken),
  ),
  com: (
    base: $community,
    light: lighten($community, $lighten),
    dark: darken($community, $darken),
  ),
  course: (
    base: $courses,
    light: lighten($courses, $lighten),
    dark: darken($courses, $darken),
  ),
  neutral: ( 
    base: #69777F,
    light: #B2CAD8,
    dark: $black,
  ),
);
```

I then use a custom function to access my colors when I need them:

```scss
@function clr($base, $shade: base) {
  $color: map-get(map-get($colors, $base), $shade);
  @return $color;
}
```

This makes it *really easy* to use a color when I need it, including the light and dark versions. With how this is set up, the base version is the default, so if I need the base, I just write it in like this:

```scss
h1 {
  color: clr(course);
}
```

And then if I need a variation of it, I can write it like this:

```scss
h1 {
  color: clr(course, light);
}
```

This works *fantastically* well. It's a lot easier than remembering or having to reference hex codes, or even to reference a variable for the normal, light or dark version of it. Maps like this are one of the reasons that I love Sass.

### But what about CSS custom properties

Custom properties are amazing, and they are one of the things I thought of early on, since each 'section' of my site has a different color. They seemed like the perfect fit for this type of thing, and guess what? I was right. But to see how I pulled that off, and how CSS custom properties can work well with Sass variables and maps, well that'll have to wait until next week!