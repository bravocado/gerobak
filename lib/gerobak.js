/*global basket, gerobak */

(function( window, document ) {
	'use strict';

	var nameSpace = '[gerobak-load]';

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

	var merge = function() {
		var obj = {},
				i = 0,
				il = arguments.length,
				key;
		for (; i < il; i++) {
			for (key in arguments[i]) {
				if (arguments[i].hasOwnProperty(key)) {
					obj[key] = arguments[i][key];
				}
			}
		}
		return obj;
	};

	var	getAttr = function(arg) {
		// set the default to nameSpace
		arg = arg || nameSpace;
		// initial variables
		var matchingElements = [];
		// select all elements contain nameSpace
		var allElements = document.querySelectorAll(arg);
		// chaining process
		// 1 - replacing [], () and {}
		forEach(allElements, function (i) {
			matchingElements.push(allElements[i].getAttribute(arg.replace(/[\])}[{(]/g, '')));
		});
		return matchingElements;
	};

	var extractAttr = function() {
		// initial variables
		var attr = []
				matchingElements = getAttr()
		;
		// 2 - spliting the comma and space
		forEach(matchingElements, function (i) {
			attr.push(matchingElements[i].split(',' + ' '));
		});
		return attr;
	};

	var attrSlicer = function() {
		var attr = extractAttr(),
				url = [],
				opt = [],
				obj = []
		;

		// slice the url
		var urlOpt = 'url:'
				data = [],
				urlAttr = []
		;

		// slice the options
		var opts = [],
				optAttr = [],
				emptyOpt = 'options:none'
		;

		// find the url
		forEach(attr, function (i, val) {
			data.push(urlOpt.concat(val[0]));
		});
		forEach(data, function(i, val) {
			urlAttr.push(val.split(/:/));
			// switch to object
			forEach(urlAttr, function() {
				url = toObject(urlAttr);
			});
		});

		// find the options
		forEach(attr, function(i, val) {
			if (attr[i].length  === 1) {
				attr[i].push(emptyOpt);
			}
			opts = val.slice(1);
			// split the colon
			forEach(opts, function(i, val) {
				optAttr.push(val.split(/:/));
				// switch to object
				forEach(optAttr, function() {
					opt = toObject(optAttr);
				});
			});
		});

		forEach(attr, function(i) {
			obj.push(merge(url[i], opt[i]));
		});

		return obj;
	};


	window.gerobak = {

		docking: function(arg) {
			arg = arg || getAttr(arg);
			forEach(arg, function (i) {
				basket.require( attrSlicer()[i] );
			});
		}

	};

	window.onload= function(){

		// initial docking when the document ready
		basket.clear();
		gerobak.docking();

	};


})( this, document );


