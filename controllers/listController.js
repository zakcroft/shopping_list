var listDao = require('../daos').listDao;
var userDao = require('../daos').userDao;

var ObjectID = require('mongodb').ObjectID;
//collection.findOne({_id: new ObjectID(idString)}, console.log)  // ok

exports.createList = function(req, res){

    userDao.findOne({"_id": req.userId}, function(err, user){
        if(err) throw err;

        var list = {
            "title": req.name,
            "creator": user.email,
            "created": new Date().getTime(),
            "users": [user._id],
            "items": []
        }

        listDao.create(list, function(err, list){
            if(err) throw err;
            res.redirect("/list", list)
        })
    })

}

exports.displayList = function (req, res) {

    userDao.findOne({"_id": req.userId}, function (err, user) {
        if (err) throw err;

        listDao.getAllUserList(user._id, function (err, list) {
            if (err) throw err;
            res.redirect("/list", list)
        })
    })
}


//exports.displayList = function(req, res){
//
//    listDao.getList(req.listId, function(err, list){
//        if (err) throw err;
//        res.redirect("list/list", list)
//    })
//}

exports.addItem = function (req, res) {
    "use strict";

    var item = {
        "name": req.name,
        "creator": req.creator,
        "created": new Date().getTime(),
        "done":false
    }

    listDao.add(item, function(err, item){
         //TODO update list
        // use ajax to update part of list and leave safe:false?
        //res.
    })
}

exports.setDone = function(req, res){

    listDao.setItemDone(req.itemId, function(){

        //TODO update list
        // use ajax to update part of list and leave safe:false?
        //res

    })

}