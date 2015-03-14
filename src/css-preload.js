/*! MIT licensed by https://github.com/AndersDJohnson/css-preload */
(function (root, factory) {
  var name = 'cssPreload';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], function ($) {
        // Also create a global in case some scripts
        // that are loaded still are looking for
        // a global even when an AMD loader is in use.
        return (root[name] = factory($));
    });
  } else {
    // Browser globals
    root[name] = factory(root.jQuery);
  }
}(this, function ($) {

  var cssPreload = {};

  var $el = $([document.documentElement, document.body]);

  var onLoaded = function() {
    $el.removeClass("css-preload");
  };

  if (! $el.hasClass('css-preload--manual')) {
    $(window).load(cssPreload.onLoaded);
    $(cssPreload.onLoaded);
  });

  cssPreload.$el = $el;
  cssPreload.onLoaded = onLoaded;

  return cssPreload;

}));
