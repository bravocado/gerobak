/*global console, log, basket, RSVP, gerobak */

(function( window, document ) {
	'use strict';

	var head = document.head || document.getElementsByTagName('head')[0];

	window.gerobak = {

		findEl: function(el) {
			var matchingElements = [];
			var allElements = document.getElementsByTagName('*');
			for (var i = 0, n = allElements.length; i < n; i++)
			{
				if (allElements[i].getAttribute(el) !== null)
				{
					// Element exists with attribute. Add to array.
					matchingElements.push(allElements[i]);
				}
			}
			return matchingElements;
		},

		findAttribute: function(attribute) {
			log(gerobak.findEl(attribute));
		}

	};

})( this, document );

function gerobakDocking(){
	'use strict';

	var nameSpace = 'gerobak-load';
	var body = document.body || document.getElementsByTagName('body')[0];
	// var port = gerobak.findPort(body, 'gerobak-load');
	gerobak.findAttribute(nameSpace);

}

window.onload= function(){
	'use strict';

	// initial gerobakDocking when the document ready
	gerobakDocking();

};
