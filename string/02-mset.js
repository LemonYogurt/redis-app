"use strict";
var async = require('async');
var client = require('../00.js');

/*
	string类型操作
	 mset key1 v1 key2 v2 ...
*/
async.series({
	mset: function (done) {
		client.mset([
			'user:userid:01:age', 20, 
			'user:userid:02:age', 30,
			'user:userid:03:age', 40], function (err, result) {
				console.log(result);
				done(err, result);
			});
	},
	quit: function (done) {
		client.quit(function (err, result) {
			console.log(result);
			done(err, result);
		});
	}
}, function (err, results) {
	console.log(results);
});