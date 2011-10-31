/**
 * JQMacroSelect
 * String macros which "compiles" to jQuery method chains
 * E.g.
 *    This: $.macroSelect('div $:closest form $:find a')
 * Becomes: $('div').closest('form').find('a')
 * Returns: jQuery object full of anchors (hopefully)
 */

jQuery.macroSelect = function(selector) {

	var $ = jQuery,
		rMethod = /^\$:/,
		cur = $(document),
		m = selector.match(/\$:[\w+$]+|.+?(?=\$:|$)/g),
		m0, m1;

	while (m.length) {

		// Get current and next item (trimmed)
		m0 = m[0].replace(/^\s+|\s+$/, '');
		m1 = m[1] && m[1].replace(/^\s+|\s+$/, '');

		if (!m0) {
			// Move along.
			m.shift();
			continue;
		}

		if (rMethod.test(m0)) {
			if (!m1 || rMethod.test(m1)) {
				// Call method with no arguments
				cur = cur[m.shift().replace(rMethod, '')]();
			} else {
				// Call method with arguments
				cur = cur[m.shift().replace(rMethod, '')](m.shift());
			}
		} else {
			// No method name is defined. Just use .find() on cur:
			cur = cur.find(m.shift());
		}

	}

	cur = $.unique(cur);

	return cur;

};
