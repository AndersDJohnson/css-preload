css-preload
=======================

Prevent FOUC for CSS - e.g. for CSS3 transitions.

Inspired by http://css-tricks.com/transitions-only-after-page-load/.

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
