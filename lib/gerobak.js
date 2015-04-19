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

	var toObject = function(arr) {
		var ob = {};
		for (var i = 0; i < arr.length; ++i) {
			if (arr[i] !== undefined) {
				ob[i] = arr[i];
			}
		}
		return ob;
	};

	window.gerobak = {

		attr: function(arg) {
			// set the default to nameSpace
			arg = arg || nameSpace;
			// initial variables
			var attr = [];
			var matchingElements = [];
			// select all elements contain nameSpace
			var allElements = document.querySelectorAll(arg);
			// chaining process
			// 1 - replacing [], () and {}
			forEach(allElements, function (i) {
				matchingElements.push(allElements[i].getAttribute(arg.replace(/[\])}[{(]/g, '')));
			});
			// 2 - spliting the comma and space
			forEach(matchingElements, function (i) {
				attr.push(matchingElements[i].split(',' + ' '));
			});
			return (attr);
		},

		getUrl: function(arg) {
			arg = arg || nameSpace;
			var urls = gerobak.attr(arg);
			var url = [];
			// foreach after looking for attribute and options
			forEach(urls, function (i, val) {
				url.push(val[0]);
			});
			return url;
		},

		getOpt: function(arg) {
			arg = arg || nameSpace;
			var opt = [];
			var elements = gerobak.attr(arg);
			forEach(elements, function(i, val) {
				if (elements[i].length > 1) {
					opt = val.slice(1);
				}
			});
			return opt;
		},

		docking: function(arg) {
			arg = arg || nameSpace;
			var srcs = gerobak.getUrl(arg);
			var src = [];
			var asd = true;
			// foreach after looking for attribute and options
			forEach(srcs, function (i, val) {
				basket.require({ url: val });
			});
		}

	};

})( this, document );


window.onload= function(){
	'use strict';

	// initial docking when the document ready
	basket.clear();
	gerobak.docking();
};
