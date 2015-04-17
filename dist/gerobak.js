/*!
* gerobak
* v0.1.0 - 2015-04-18
* http://github.com/bravocado/gerobak
* (c) Bravocado;* Uses basket.js, https://github.com/addyosmani/basket.js
*/(function( window, document ) {
	'use strict';

	var nameSpace = '[gerobak-load]';

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
			forEach(allElements, function (i, val) {
				matchingElements.push(val.attributes[0].value);
			});
			return(matchingElements);
		},

		docking: function() {
			var srcs = gerobak.attr();
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
	gerobak.docking();
};
