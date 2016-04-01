"use strict";
var async = require('async');
var client = require('../00.js');

/*
list
sort key [by pattern] [limit offset count] [get pattern [get pattern ...]] [asc|desc] [alpha] [store destination]
*/
async.series({
    del: function (done) {
        client.del('userAddrlink', function(err, result) {
            done(err, result);
        });
    },
    mset: function (done) {
        client.mset([
            'user:userid:01:addr', 'beijing',
            'user:userid:02:addr', 'shandong',
            'user:userid:03:addr', 'haiyang',
            'user:userid:04:addr', 'jinan',
            'user:userid:05:addr', 'shanghai',
            'user:userid:06:addr', 'fenlan'
        ], function (err, result) {
            done(err, result);
        });
    },
    lpush: function (done) {
        client.lpush(['userAddrlink', '01', '02', '03', '04', '05', '06'], function (err, result) {
            done(err, result);
        });
    },
    sort_1: function (done) {
        client.sort(['userAddrlink', 'desc'], function (err, result) {
            done(err, result);
        });
    },
    sort_2: function (done) {
       client.sort(['userAddrlink', 'desc', 'get', 'user:userid:*:addr'], function (err, result) {
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
