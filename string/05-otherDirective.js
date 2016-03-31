"use strict";
var async = require('async');
var client = require('../00.js');

/*
	string类型操作
	把value追加到key的原值上
	append key value
	获取字符串中 [start, stop]范围的值
	getrange key start stop
	获取并返回旧值，设置新值
	getset key newvalue
*/
async.series({
	set: function (done) {
		client.set('norse attack map', 'chinese', function (err, result) {
			done(err, result);
		});
	},
	append: function (done) {
		client.append('norse attack map', ' Beijing', function (err, result) {
			done(err, result);
		});
	},
	// inese
	getrange: function (done) {
		client.getrange('norse attack map', 2, 6, function (err, result) {
			done(err, result);
		});
	},
	getset: function (done) {
		client.getset('norse attack map', 'China', function (err, result) {
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