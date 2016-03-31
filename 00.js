var redis = require('redis');

var redisDB = {
	host: 'localhost',
	port: 6379
}
//  returns a RedisClient object.
var client = redis.createClient(redisDB.port, redisDB.host);
client.on('connect', function () {
	console.log('client connect!!!');
});
client.on('ready', function () {
	console.log('client ready!!!');
});
client.on('error', function (msg) {
	console.log('client error:', msg);
});
client.on('end', function () {
	console.log('client end !!!');
});

module.exports = client;

