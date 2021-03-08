---
title: The &lt;wbr&gt; tag and when you might want to use it
description: the <wbr> HTML tag is a bit obscure, but it can come in handy
---

The `<wbr>` tag is the type of thing that I originally created my articles for in the first place: [An obscure HTML/CSS _thing_](https://www.kevinpowell.co/article/there-is-a-turn-unit-in-css/) that, while [it might not come up often](https://www.kevinpowell.co/article/background-attachment-local/), can really come in handy!

In this post, I'll be exploring what `<wbr>` does, but more important, a few use cases where you might find it being useful.

<!--more-->

## What is `<wbr>`?

`<wbr>` is short for Word Break—it's easy enough to remember, since I think everyone is familiar with `<br>`.

There are two big differences between `<br>` and `<wbr>` though.

1. `<br>` will always cause a break, `<wbr>` is an optional break.
2. `<br>` is generally used for breaking between two words. `<wbr>` is used to break words.

Basically, you are telling the browser where it could break a word if it's too long, and would otherwise overflow outside it's parent, as we can see below.

<div style="width: 200px; background: #f3f3f3; padding: .5em">
 Really long words like "antidisestablishmentarianism" can cause problems in narrow containers, or on mobile devices, especially when they are title.
</div>

We can fix the above with the use of `<wbr>`, though it has a bit of an issue.

```html
Really long words like "anti<wbr />disestablish<wbr />mentarian<wbr />ism" can
cause problems in narrow containers, or on mobile devices, especially when they
are title.
```

Results in:

<div style="width: 200px; background: #f3f3f3; padding: .5em">
 Really long words like "anti<wbr>disestablish<wbr>mentarian<wbr>ism" can cause problems in narrow containers, or on mobile devices, especially when they are title.
</div>

You can see that I used 3 `<wbr>` above. I used three because I wasn't sure where it would break, so I gave it three options, and the browser uses the one that works best.

Can you spot the problem?

The browser doesn't hyphenate the break, making it look like two words. Ugh.

## Better use cases

Because of that problem, it's not really ideal for long words. You _could_ use it for long words in headings to stop any overlow issues on mobile if you're using large a large `font-size`, but it's going to be a little awkward without the hyphenation.

A better use case is one that I'm sure we've all run into at one point or another. Long URLs.

<div style="width: 200px; background: #f3f3f3; padding: .5em">
 https://www.kevinpowell.co/article/longtitlehere/
</div>

Ugh.

`<wbr>` to the rescue:

```html
https://www<wbr />.kevinpowell<wbr />.co/article<wbr />/longtitlehere/
```

<div style="width: 200px; background: #f3f3f3; padding: .5em">
 https://www<wbr>.kevinpowell<wbr>.co/article<wbr>/longtitlehere/
</div>

It might not be the perfect solution, but it's a lot better than the URL overflowing out the side, either being hidden, or causing some vertical scrolling.

### Resources

[MDN article on `<wbr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr)

{% include cta.html %}
