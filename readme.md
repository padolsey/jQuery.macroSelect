## jQuery.macroSelect

`jQuery.macroSelect` is a small plugin that takes one String argument and returns a selection (a jQuery instance), much like `jQuery(...)`. The only difference is that the String that `jQuery.macroSelect` accepts is a hybrid between a CSS selector and a jQuery method chain.

So, instead of:

    $('div').closest('.foo').children();

You could do:

    $.macroSelect('div $:closest .foo $:children');

### WTF?

Why would you want to use this? I dunno. For me, it was a necessity because I needed to be able to select complex nodes and I needed to specify the selector to do so in a JSON file.

What I needed to select wasn't possible with regular CSS (even CSS3) selectors. I needed to be able to define a single string which would represent the location of these nodes. 

### Usage:

The format of the macro-selector is as follows:

	[$:JQ_METHOD ][CSS_SELECTOR]

Both are optional, and this format can occur one or more times.

If the JQ_METHOD isn't specified, then the default of `$(document).find()` will be used -- this'll only occur if you start your macro-selector with a CSS selector instead of a method call -- which is the norm.

If you don't specify a CSS_SELECTOR then the specified JQ_METHOD is called with no arguments. E.g. `div $:children` (no arguments passed to `$.fn.children`).

**Note**: The CSS_SELECTOR doesn't have to actually be a CSS selector. Anything that does not match the $:METHOD format will simply be passed to the previous method. So `div $:eq 0` will work fine.

A more complex example:

	h1 + p $:nextUntil h1, h2 $:andSelf

Which is equivelant to:

	$('h1 + p').nextUntil('h1, h2').andSelf();

### If you're crazy

Hell, this thing could be used for anything really. It was made with a specific purpose in mind (above), but if you're willing:

    body $:empty$:prepend <h1>Yo.</h1><p>...</p>
