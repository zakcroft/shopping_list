var  mongo = require('../db/mongo.js');

exports.login = function(){

    mongo.users.insert({test: 'obj'}, {safe:true}, function(err, objects) {
        if (err)
            console.warn(err.message);
    });
}

exports.create = function(err, user){
    if (err) throw err;

    mongo.users.insert({test: 'obj'}, {safe:true}, function(err, objects) {
        if (err)
            console.warn(err.message);
    });
}

exports.read = function(err, user){

}

exports.update = function(err, user){

}

exports.delete = function(err, user){

}
