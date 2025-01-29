---
title: 5 of my favourite Sass features
description: CSS has come a really long way since I started created websites,
  and modern CSS features are absolutely amazing. But that said, I still use
  Sass on every single project that I work on.
date: 2021-03-10T19:26:31.907Z
---
CSS has come a really long way since I started created websites, and modern CSS features like custom properties, `calc()`, `clamp()` are absolutely amazing.

That said, I still use Sass on every single project that I use, and in this post, I'll be looking over my favourite features. If you'd like a more in-depth look at these, I also created [a YouTube video](https://youtu.be/g1kF45K-q7o) that dives into them.

And before we dive in, one of the things that I love the most about Sass is that you can easily add one feature at a time, so if you are thinking about learning or getting into Sass, you can pick one thing and start using it, without changing anything else you are work

## Nesting

Nesting looks something like this:

```scss
.card {
  padding: 1em; 
  .title {
     font-size: 1.75rem;
  }
}
```

Which would generate the following CSS:

```scss
.card {
  padding: 1em; 
}

.card .title {
  font-size: 1.75rem;
}
```

  * basic nesting
  * ampersand
* Mixins

  * media query mixin
  * pseudo-element mixin
* Organization

  * using partials
* Functions

  * color function
* Loops (grid system)

As I said, one of the things people struggle with the most is getting their CSS organized, and I just showed a quick example of partials in this video. If you'd like to learn more about getting organized with partials, check out this video right here, or check down below for links to some of my other Sass content.

Thanks so much for watching, a huge thank you to Zack for being my enabler of awesome and all my Patrons for their generous support, and until next time don't forget to make your corner of the internet just a little bit more awesome.

<!--EndFragment-->