"use strict";
var async = require('async');
var client = require('../00.js');

/*
	string类型操作
	 setrange key offset value
	 把key的值的offset偏移字节，改成value
	 把key的值从下标offset开始，使用给定的value进行替换（下标从0开始）
*/
async.series({
	set: function (done) {
		client.set('school', 'ShanDongNormalUniversity', function (err, result) {
			done(err, result);
		});
	},
	setrange: function (done) {
		// 6 space
		client.setrange('school', 8, '      ', function (err, result) {
			done(err, result);
		});
	},
	get: function (done) {
		client.get('school', function (err, result) {
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