"use strict";
var async = require('async');
var client = require('../00.js');

/*
	string类型操作
	set key value [ex 秒数] / [px 毫秒数]  [nx] / [xx]
*/
async.series({
	set: function (done) {
		client.set('user:userid:01:username', 'redis', function (err, result) {
			done(err, result);
		});
	},
	// xx：表示key存在时，执行操作
	setXX: function (done) {
		client.set('user:userid:01:username', 'redis explain', 'xx', function (err, result) {
			done(err, result);
		});
	},
	// 20秒后，过期
	setExpire: function (done) {
		client.set('user:userid:02:username', 'redis profiling', 'px', 20000, function (err, result) {
			done(err, result);
		});
	},
	// 10秒后过期
	setExpireSe: function (done) {
		client.set('user:userid:03:username', 'redis second', 'ex', 10, function (err, result) {
			done(err, result);
		});
	},
	// 另一种写法，使用数组括起来
	setOtherMethod: function (done) {
		client.set(['user:userid:04:username', 'redis Other Method', 'ex', 20], function (err, result) {
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