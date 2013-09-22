var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;

// connect once and use the pool.
//http://learnmongodbthehardway.com/ex4.html
// http://stackoverflow.com/questions/15680985/what-is-the-right-way-to-deal-with-mongodb-connections
//https://groups.google.com/forum/#!msg/node-mongodb-native/mSGnnuG8C1o/Hiaqvdu1bWoJ

// and don't close
//https://github.com/mongodb/node-mongodb-native/issues/84


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





