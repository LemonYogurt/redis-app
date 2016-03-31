"use strict";
var async = require('async');
var client = require('../00.js');

/*
	string类型操作
	指定的key的值加1,并返回加1后的值,不存在的key当成0，
	再incr操作,如果字符串不是数值型的字符串，则会报错
	incr key
	为key的内容增加指定的值
	incrby key number
	为key的内容增加指定的浮点值
	incrbyfloat key floatnumber
	指定的key的值减1,并返回减1后的值
	decr key
	为key的内容减去指定的值
	decrby key number
*/
async.series({
	incr: function (done) {
		client.incr('num', function (err, result) {
			done(err, result);
		});
	},
	incrby: function (done) {
		client.incrby('num', 20, function (err, result) {
			done(err, result);
		});
	},
	decr: function (done) {
		client.decr('num', function (err, result) {
			done(err, result);
		});
	},
	decrby: function (done) {
		client.decrby('num', 20, function (err, result) {
			done(err, result);
		});
	},
	// 注意：没有decrbyfloat，只能使用incrbyfloat增加负值
	incrbyfloat: function (done) {
		client.incrbyfloat('num', -0.65, function (err, result) {
			done(err, result);
		})
	},
	quit: function (done) {
		client.quit(function (err, result) {
			done(err, result);
		});
	}
}, function (err, results) {
	console.log(results);
});