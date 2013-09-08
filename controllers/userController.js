
var userDao = require('../daos').userDao;

exports.login =  function(req, res, callback){

    userDao.login(req, res, function(err, user){

        if(err) {
            console.warn(err.message);
            throw err;

        }else if (user) {
            return res.redirect("/welcome", {'username': user.username});

        }else {
            // TODO logging and alerts/events
            console.log("welcome: can't identify user...redirecting to signup");
            return res.redirect("/signup");
        }
    })
};

exports.signUp = function (req, res) {

    userDao.signup(req, res, function(err, user){

        if (err) {

            console.warn(err.message);
            return res.redirect("/signup", {'message': "Sorry there was an error please try again"})

        } else if (user) {

            return res.redirect("/welcome", {'username': user.username})

        }else {
            // TODO logging and alerts/events
            console.warn("Sign up failed");
            return res.redirect("/signup");
        }
    });
};


exports.registerUser =  function(req, res){
    res.render('login', { title: 'Register' });
    userDao.create();
};

