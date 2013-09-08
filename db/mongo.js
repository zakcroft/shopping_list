var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;



//MongoClient.connect('mongodb://localhost:27017/shopping_list', function(err, db) {
//    if(err) throw err;
//});


exports.init = function (callback) {

    var mongoClient = new MongoClient(new Server('localhost', 27017, {}));

    mongoClient.open(function (err, mongoClient) {
        if(err) throw err;
        module.exports.mongoClient = mongoClient;
        module.exports.db = mongoClient.db("shopping_list");
        callback();
    });
};





