var  db = require('../db/mongo').db;
var users = db.collection('users');


exports.login = function (email,  password, callback) {

    users.findOne({"email": email, "password":password}, function(err, user){
        if(err) throw err;
        callback(err, user);
    })
}

exports.create = function (username, email, password, callback) {

    users.insert({"username": username, "password": password}, {safe:true}, function(err, inserted) {
        if (err) throw err;
        callback(err, inserted);
    });
}

exports.getUser = function(email, callback){

    users.findOne({"email": email}, function (err, user) {
        if (err) throw err;
        callback(err, user);
    })
}

exports.update = function(username, params, callback){

    users.update({"username,": username}, params, {upsert: true, safe: true}, function (err, updated) {
        if (err) throw err;
        callback(err, updated);
    });
}

exports.delete = function(err, user, callback){

    users.remove({"email,": email}, params, {safe: true}, function (err, updated) {
        if (err) throw err;
        callback(err, updated);
    });
}
