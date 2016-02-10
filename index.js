#!/usr/bin/env node

const https = require('https');

var KerbalStuffWrapper = function() {};

KerbalStuffWrapper.prototype.browse = function() {
	var options = {
		hostname: 'kerbalstuff.com',
		path: '/api/browse',
		method: 'GET'
	};

	console.info('Options prepared:');
	console.info(options);
	console.info('Do the GET call');

	// do the GET request
	var reqGet = https.request(options, function(res) {
		console.log("statusCode: ", res.statusCode);
		// uncomment it for header details
		//  console.log("headers: ", res.headers);

		res.on('data', function(d) {
			console.info('GET result:\n');
			process.stdout.write(d);
			console.info('\n\nCall completed');
		});

	});

	reqGet.end();
	reqGet.on('error', function(e) {
		console.error(e);
	});
};

var test = new KerbalStuffWrapper();
test.browse();