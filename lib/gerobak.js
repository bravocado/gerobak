/*global console, basket, gerobak */

(function( window, document ) {
	'use strict';

	var nameSpace = '[gerobak-load]';

	// global registering
	console.log();

	var forEach = function (array, callback, scope) {
		for (var i = 0; i < array.length; i++) {
			callback.call(scope, i, array[i]);
		}
	};

	window.gerobak = {

		attr: function(arg) {
			arg = arg || nameSpace;
			var matchingElements = [];
			var allElements = document.querySelectorAll(arg);
			forEach(allElements, function (i) {
				matchingElements.push(allElements[i].getAttribute('gerobak-load'));
			});
			return (matchingElements);
		},

		docking: function(arg) {
			arg = arg || nameSpace;
			var srcs = gerobak.attr(arg);
			forEach(srcs, function (i, val) {
				basket.require({ url: val });
			});
			return srcs;
		}

	};

})( this, document );


window.onload= function(){
	'use strict';

	// initial docking when the document ready
	basket.clear();
	gerobak.docking();
};
