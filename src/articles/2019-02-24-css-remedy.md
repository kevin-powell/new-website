---
title: CSS remedy - rethinking the approach to CSS resets
description: Jen Simmons is currently working on a new way to think about CSS Resets, and is calling it CSS Rememdy
---

Jen Simmons with Mozilla Developer Outreach is spearheading a new approach to the idea behind CSS resets like [Eric Myer's Reset](https://meyerweb.com/eric/tools/css/reset/), [Normalize](https://necolas.github.io/normalize.css/), and [Bootstrap's Reboot](https://getbootstrap.com/docs/4.0/content/reboot/). 

They are calling it **[CSS Remedy](https://github.com/mozdevs/cssremedy)**, and instead of trying to get things to behave the same (as it says in their documentation, browsers are much better at that these days), it's about **rethinking how the default styles might look if CSS were created today**. This is such a great idea and initiative!

CSS Remedy already has some really good stuff in there right now, so I suggest you go and check it out, but I've grabbed a few things out to show you below that will give you a bit of a taste of what they are after.

```css
* { box-sizing: border-box; } /* Switch to border-box for box-sizing. */

body {
  margin: 0; /* Remove the tiny space around the edge of the page */
}

img, video, canvas, audio, iframe, embed, object  { 
  display: block; /* Switch display mode to block, since that's what we usually want for images. */
  vertical-align: middle;  /* If you override, and make an image inline, it's likely you'll want middle vertical alignment. */
}
```

It's still in it's infancy and isn't ready to be used in production as of yet (February 2019), but I'm really looking forward to where this goes. I'll be following it closely!
