var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;

var MongoClient = new MongoClient(new Server('localhost', 27017, {}));

//MongoClient.connect('mongodb://localhost:27017/shopping_list', function(err, db) {
//    if(err) throw err;
//});



module.exports.init = function (callback) {

    mongoClient.open(function (err, db) {
        if(err) throw err;
        module.exports.db = db("shopping_list");
    });
};


