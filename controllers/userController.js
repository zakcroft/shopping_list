
var userDao = require('../daos').userDao;

exports.register = function (req, res) {

    var email = req.body.email
    var username = req.body.username
    var password = req.body.password

    // TODO already registered?

    userDao.create(username, email, password, function (err, user) {

        if (err) {

            console.warn(err.message);
            return res.redirect("/signup", {'message': "Sorry there was an error please try again"})

        } else if (user) {

            return res.redirect("/welcome", {'username': user.username})

        } else {
            // TODO logging and alerts/events
            console.warn("Sign up failed");
            return res.redirect("/signup");
        }
    });
};

exports.login =  function(req, res, callback){

    var username = req.body.username;
    var password = req.body.password;

    // TODO authenticate

    userDao.login(username, password, function(err, user){

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

exports.findUser = function (req, res, callback) {

    userDao.find(req, res, function (err, user) {

        if (err) {
            console.warn(err.message);
            throw err;

        } else if (user) {
            return res.redirect("/welcome", {'username': user.username});

        } else {
            // TODO logging and alerts/events
            console.log("welcome: can't identify user...redirecting to signup");
            return res.redirect("/signup");
        }
    })
};





