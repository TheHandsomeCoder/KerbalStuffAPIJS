#!/usr/bin/env node
"use strict";

const baseRequest = require('request-promise').defaults({
	baseUrl: 'https://kerbalstuff.com/api',
	json: true
});

function KerbalStuffWrapper(){}

/**
 * Gets mods sorted by selected conditions from KerbalStuff.com
 * @param  {number} [page] - Which page of results to retrieve
 * @param  {string} [orderBy] - Which property of mod use for ordering. Valid values: name, updated, created. Default: created
 * @param  {string} [order] - Which ordering direction to use. Valid values: asc, desc. Default: asc. [optional]
 * @param  {int} [count] - Which count of mods to show per page. Valid values: 1-500. Default 30. [optional]
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

/**
 * Gets the newest mods on KerbalStuff.com
 * @param  {number} page - Which page of results to retrieve [optional]
 * @return {Promise}      
 */
KerbalStuffWrapper.prototype.browseNew = function(page) {

	let options = {
		uri: '/browse/new',
		qs: {
			page: page			
		}
	};

	return baseRequest.get(options);
};

/**
 * Gets the top mods on KerbalStuff.com
 * @param  {number} page - Which page of results to retrieve [optional]
 * @return {Promise}      
 */
KerbalStuffWrapper.prototype.browseTop = function(page) {

	let options = {
		uri: '/browse/top',
		qs: {
			page: page			
		}
	};

	return baseRequest.get(options);
};

/**
 * Gets the featured mods on KerbalStuff.com
 * @param  {number} page - Which page of results to retrieve [optional]
 * @return {Promise}      
 */
KerbalStuffWrapper.prototype.browseFeatured = function(page) {

	let options = {
		uri: '/browse/featured',
		qs: {
			page: page			
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









