"use strict";
var async = require('async');
var client = require('../00.js');

/*
	string类型操作
	 get name mget key1 key2 ..keyn
*/
async.series({
	get: function (done) {
		client.get('user:userid:01:username', function (err, result) {
				done(err, result);
			});
	},
	mget: function (done) {
		client.mget([
			'user:userid:01:age', 
			'user:userid:02:age',
			'user:userid:03:age'], function (err, result) {
				// 如果没有查到任何内容，则返回null
				done(err, result);
			});
	},
	quit: function (done) {
		client.quit(function (err, result) {
			done(err, result);
		});
	}
}, function (err, results) {
	console.log(results);
});