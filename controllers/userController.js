
var userDao = require('../daos/userDao');

exports.login =  function(req, res){
    res.render('login', { title: 'Please Login' });

    userDao.login();
};


exports.registerUser =  function(req, res){
    res.render('login', { title: 'Register User' });

    userDao.saveUser();
};

