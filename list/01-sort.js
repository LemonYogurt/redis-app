// sort -> list / set / order set
"use strict";
var async = require('async');
var ObjectID = require('bson').ObjectID;
var client = require('../00.js');

var userIDArr = [];

async.series({
	select: function (done) {
		client.select('15', function (err, result) {
			done(err, result);
		});
	},
	flushdb: function (done) {
		client.flushdb(function (err, result) {
			done(err, result);
		});
	},
	setHash: function (done) {
		for (let i = 0; i < 4; i++) {
			userIDArr.push(new ObjectID().toString());
		}
		client.multi([
			['hmset', 'user:userid:' + userIDArr[0], 'name', 'zhangsan', 'createAt', Date.now()],
			['lpush', 'user:userid', userIDArr[0]],
			['hmset', 'user:userid:' + userIDArr[1], 'name', 'lisi', 'createAt', Date.now()],
			['lpush', 'user:userid', userIDArr[1]],
			['hmset', 'user:userid:' + userIDArr[2], 'name', 'wangwu', 'createAt', Date.now()],
			['lpush', 'user:userid', userIDArr[2]],
			['hmset', 'user:userid:' + userIDArr[3], 'name', 'zhaoliu', 'createAt', Date.now()],
			['lpush', 'user:userid', userIDArr[3]]
		]).exec(function (err, result) {
			done(err, result);
		});
	},
	sortNoSort: function (done) {
		// alpha desc // 得到所有的内容，不进行排序
		client.sort('user:userid', 'by', 'not-exists-key', function (err, result) {
			done(err, result);
		});
	},
	// 不排序，类似于join方式得到用户名
	sortGetHash: function (done) {
		client.sort('user:userid', 'by', 'not-exists-key', 'get', 'user:userid:*->name', function (err, result) {
			done(err, result);
		});
	},
	// 按照时间排序，得到用户名
	sortGetHashTimeSort: function (done) {
		client.sort('user:userid', 'by', 'user:userid:*->createAt', 'asc', 'get', 'user:userid:*->name', function (err, result) {
			done(err, result);
		});
	},
    quit: function (done) {
    	client.quit(function (err, result) {
    		done(err, result);
    	});
    }
}, function(err, result) {
	console.log(err, result);
});