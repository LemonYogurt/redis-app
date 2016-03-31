"use strict";
var async = require('async');
var client = require('../00.js');

/*
通用命令操作

*/
async.series({
    insertData: function(done) {
        client.multi([
            ['mset', 'goods:goods_id:01:name', 'leTing', 'goods:goods_id:02:name', 'handuyishe'],
            ['mset', 'goods:goods_id:01:leTing', 20, 'goods:goods_id:02:handuyishe', 40],
            ['set', 'allNum', 10],
            ['incr', 'allNum'],
            ['incrby', 'allNum', 20],
            ['incrbyfloat', 'floatNum', 0.546]
        ]).exec(function(err, result) {
        	done(err, result);
        });
    },
    keys: function (done) {
    	client.multi([
			['keys', '*'],
			['keys', 'goods:goods_id:01*'],
			['keys', 'goods:goods_id:01:leTin?g'],
			['keys', 'goods:goods_id:01:leT[gi]ng']
		]).exec(function (err, result) {
			done(err, result);
		});
    },
    randomkey: function (done) {
    	client.randomkey(function (err, result) {
    		done(err, result);
    	});
    },
    type: function (done) {
    	client.type('allNum', function (err, result) {
    		done(err, result);
    	});
    },
    exists: function (done) {
    	client.exists('goods:goods_id:01:leTing', function (err, result) {
    		done(err, result);
    	});
    },
    move: function (done) {
    	client.move('goods:goods_id:01:name', 1, function (err, result) {
    		done(err, result);
    	});
    },
    del: function (done) {
        client.del('goods:goods_id:01:leTing', 'goods:goods_id:02:name', 'goods:goods_id:02:handuyishe', function (err, result) {
            done(err, result);
        });
    },
    select: function (done) {
    	client.select(1, function (err, result) {
    		done(err, result);
    	});
    },
    quit: function (done) {
    	client.quit(function (err, result) {
    		done(err, result);
    	})
    }
}, function(err, result) {
	console.log(result);
});
