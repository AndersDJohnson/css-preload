css-preload
=======================

Prevent FOUC for CSS - e.g. for CSS3 transitions.

## Features
* CSS transitions
  * All CSS transitions overridden to `none` until window `load` event. Inspired by [CSS-Tricks](http://css-tricks.com/transitions-only-after-page-load/).

## Usage

```html
<!doctype html>
<html class="css-preload">
  <head>
    <link href="css-preload.css" rel="stylesheet" type="text/css" />
    <script src="css-preload.js" type="text/javascript"></script>
  </head>
  <body>
    ...
  </body>
</html>
```
