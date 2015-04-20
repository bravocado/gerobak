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

	var toObject = function(data) {
		var i = 0,
				k = 0,
				obj = null,
				output = [],
				keys = data
		;

		for (k = 0; k < keys.length; k++) {
			obj = {};
			obj[keys[k][i]] = data[k][1];

			output.push(obj);
		}

		return output;
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
			var data = [];
			var obj = [];
			var urlOpt = 'url:';
			// foreach after looking for attribute and options
			forEach(urls, function (i, val) {
				data.push(urlOpt.concat(val[0]));
			});
			forEach(data, function(i, val) {
				url.push(val.split(/:/));
				// switch to object
				forEach(url, function(i, val) {
					obj = toObject(url);
				});
			});
			return obj;
		},

		getOpt: function(arg) {
			arg = arg || nameSpace;
			var obj = [];
			var opt = [];
			var prop = [];
			var elements = gerobak.attr(arg);
			forEach(elements, function(i, val) {
				if (elements[i].length > 1) {
					// exclude the url
					opt = val.slice(1);
					// split the colon
					forEach(opt, function(i, val) {
						prop.push(val.split(/:/));
						// switch to object
						forEach(prop, function(i, val) {
							obj = toObject(prop);
						});
					});
				}
			});
			return obj;
		},

		docking: function(arg) {
			arg = arg || nameSpace;
			var srcs = gerobak.attr(arg);
			var src = [];
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
