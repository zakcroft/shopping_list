var db = require('../db/mongo').db;
var lists = db.collection('lists');

exports.create = function(list, callback){

    lists.insert(list, {"safe":true},  function(err, inserted){
        if(err) throw err;
        callback(err, inserted);
    })
}

//exports.getAllUserList = function (userEmail, callback) {
//
//    lists.find({"creator": userEmail}, function (err, list) {
//        if (err) throw err;
//        callback(err, list);
//    })
//}


exports.getList = function(id, callback){

    lists.findOne({"_id":id}, function(err, list){
        if(err) throw err;
        callback(err, list);
    })
}

exports.addItem = function (listId, item, callback) {

    lists.update({'_id': listId}, {'$push': {'items': item}}, function(err, item){
        if (err) throw err;
        callback(err, item);
    })
}

exports.setItemDone = function(itemId, callback){

    lists.update({'_id': itemId}, {'$set': {done:true}}, function (err, item) {
        if (err) throw err;
        callback(err, item);
    })
}


