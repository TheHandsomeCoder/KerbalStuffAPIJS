#!/usr/bin/env node
"use strict";

const baseRequest = require('request-promise').defaults({
	baseUrl: 'https://kerbalstuff.com/api',
	json: true
})

var KerbalStuffWrapper = function() {};

KerbalStuffWrapper.prototype.browse = function(page, orderBy, order, count) {

	let options = {
		uri: '/browse',
		qs: {
			page: page,
			orderBy: orderBy,
			order: order,
			count: count
		}
	};

	return baseRequest.get(options);
};

var test = new KerbalStuffWrapper();
test.browse().then(json => {
	console.log(json);
});


