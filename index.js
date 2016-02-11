#!/usr/bin/env node
"use strict";

const baseRequest = require('request-promise').defaults({
	baseUrl: 'https://kerbalstuff.com/api',
	json: true
});

function KerbalStuffWrapper(){}

/**
 * @param  {number} [page]
 * @param  {string} [orderBy]
 * @param  {string} [order]
 * @param  {int} [count]
 * @return {Promise}
 */

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

KerbalStuffWrapper.prototype.search = function(searchString) {

	let options = {
		uri: '/search',
		qs: {
			search: searchString			
		}
	};

	return baseRequest.get(options);
};

var test = new KerbalStuffWrapper();
test.browse()
    .then(json => console.log(json))
    .catch(error => console.log(error));





