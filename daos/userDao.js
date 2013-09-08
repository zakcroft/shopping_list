var  db = require('../db/mongo').db;
var users = db.collection('users');


exports.login = function (req, res, callback) {

    var username = req.body.username;
    var password = req.body.password;

    // TODO authenticate

    users.findOne({"name": username, "password":password}, function(err, user){
        if(err) throw err;
        callback(err, user);
    })
}

exports.create = function (req, res, callback) {

    var email = req.body.email
    var username = req.body.username
    var password = req.body.password

    users.insert({"name": username, "password": password}, {safe:true}, function(err, inserted) {
        if (err) throw err;
        callback(err, inserted);
    });
}

exports.read = function(err, user){

}

exports.update = function(err, user, params){
    var email = req.body.email
    var username = req.body.username
    var password = req.body.password

    users.update({"id": user.id}, params, {upsert: true, safe: true}, function (err, updated) {
        if (err) throw err;
        callback(err, updated);
    });
}

exports.delete = function(err, user){

}
