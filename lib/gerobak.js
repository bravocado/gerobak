/*global console, log, basket, getUrl, saveUrl, RSVP, gerobak */

(function( window, document ) {
	'use strict';

	var head = document.head || document.getElementsByTagName('head')[0];

	var LoadConfig = {
		index: ['fixtures/index.js'],
		parent: ['fixture/parent.js']
	};

	window.gerobak = {

		findPort: function() {
			log('Find Port');
		}

	};

})( this, document );

function docking(){
	'use strict';

	var body = document.body || document.getElementsByTagName('body')[0];

	log(body);

	gerobak.findPort();

}

window.onload=docking;
