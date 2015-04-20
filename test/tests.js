/*global console, gerobak, test, ok*/

test('Values', function(){
	'use strict';
	ok(true, 'passes');

	console.log(gerobak.getOpt());


	var data = gerobak.getOpt();

	function toObject(data) {
		var keys = data;
		var i = 0;
		var k = 0;
		var obj =  null;
		var output = [];


		for (k = 0; k < keys.length; k++) {
			obj = {};
			obj[keys[k][i]] = data[k][1];

			output.push(obj);
		}

		return output;

	}

	console.log(toObject(data));

});
