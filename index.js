#!/usr/bin/env node
"use strict";

const baseRequest = require('request-promise').defaults({
	baseUrl: 'https://kerbalstuff.com/api',
	json: true
})

function KerbalStuffWrapper(){};

/**
 * @param  {number} page
 * @param  {string} orderBy
 * @param  {string} order	
 * @param  {int} count
 * @return {promise}
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





