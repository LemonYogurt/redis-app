var ObjectID = require('bson').ObjectID;
var async = require('async');
var client = require('../00');

async.series({
	lpush: function (done) {	
		client.lpush(['newuserlink', ]);
	}
}, function (err, result) {

});

