## jQuery.macroSelect

`jQuery.macroSelect` is a small plugin that takes one String argument and returns a selection, much like `jQuery(...)`. The only difference is that the String that `jQuery.macroSelect` accepts is a hybrid between a CSS selector and a jQuery method chain.

So, instead of:

    $('div').closest('.foo').children();

You could do:

    $.macroSelect('div $:closest .foo $:children');

### WTF?

Why would you want to use this? I dunno. For me, it was a necessity because I needed to be able to select complex nodes and I needed to specify the selector to do so in a JSON format. What I needed to select wasn't possible with regular CSS (even CSS3) selectors. I needed to be able to define a single string which would represent the location of these nodes. 
