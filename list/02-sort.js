"use strict";
var async = require('async');
var client = require('../00.js');

/*
list
sort key [by pattern] [limit offset count] [get pattern [get pattern ...]] [asc|desc] [alpha] [store destination]
*/
async.series({
    //
    quit: function (done) {
    	client.quit(function (err, result) {
    		done(err, result);
    	});
    }
}, function(err, result) {
	console.log(result);
});
