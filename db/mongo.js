var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/shopping_list', function(err, db) {
    if(err) throw err;
});

var mongodb = require('mongodb');

module.exports.init = function (callback) {
    var server = new mongodb.Server("127.0.0.1", 27017, {});
    new mongodb.Db('test', server, {w: 1}).open(function (error, client) {
        //export the client and maybe some collections as a shortcut
        module.exports.client = client;
        module.exports.myCollection = new mongodb.Collection(client, 'myCollection');
        callback(error);
    });
};
