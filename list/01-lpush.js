"use strict";
var async = require('async');
var client = require('../00.js');

/*
list

*/
async.series({
    del: function (done) {
        client.del('firstList', 'secondList', function(err, result) {
            done(err, result);
        });
    },
    // 向左添加元素
    // 把值插入到链接头部
    lpush: function (done) {
        client.multi([
            ['lpush', 'firstList', 'a', 'b', 'c', 'd'],
            ['lpush', 'secondList', '1', '2', '3', '4']
        ]).exec(function(err, result) {
            done(err, result);
        });
    },
    // 向右添加元素
    rpush: function (done) {
        client.rpush(['firstList', 'e', 'f', 'g', 'h'], function (err, result) {
            done(err, result);
        });
    },
    // 根据下标查询list元素
    lrange: function (done) {
        client.lrange(['firstList', 0, -1], function (err, result) {
            done(err, result);
        });
    },
    // 查询list的长度
    llen: function (done) {
        client.llen('firstList', function (err, result) {
            done(err, result);
        });
    },
    // 根据传入的下标查出list中的元素
    lindex: function (done) {
        client.lindex('firstList', -3, function (err, result) {
            done(err, result);
        });
    },
    quit: function (done) {
    	client.quit(function (err, result) {
    		done(err, result);
    	});
    }
}, function(err, result) {
	console.log(result);
});
