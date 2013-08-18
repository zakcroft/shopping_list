var  db = require('../db/mongo').db;
var users = db.collection('users');

exports.login = function(){

}

exports.create = function(err, user){
    if (err) throw err;

    users.insert(user, {safe:true}, function(err, objects) {
        if (err) {
            console.warn(err.message);
        }

    });
}

exports.read = function(err, user){

}

exports.update = function(err, user){

}

exports.delete = function(err, user){

}
