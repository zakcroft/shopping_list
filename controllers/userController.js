var userDao = require('../daos').userDao;
var validator = require('../helpers/validator');


exports.displayRegistration = function (req, res) {
    "use strict";
    return res.render("register")
}

exports.register = function (req, res) {
    "use strict";
    validator.validateRegistration(req, function (err, errs) {

        if (err) throw err;

        if(errs){
            return res.render("register", {
                errs: errs,
                validated: req.body
            })
        }

        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;

        userDao.getUser(email, function (err, user) {

            if (!user) {

                userDao.create(username, email, password, function (err, user) {

                    if (err) {
                        // TODO logging and alerts/events
                        console.warn("Sign up failed");
                        return res.redirect("/register", {'message': "Sorry there was an error please try again"});

                    } else if (user && user[0]) {

                        return res.redirect("/index", {'username': user[0].username});

                    }
                });

            } else {

                return res.redirect("/login", {'message': "User already registered, please login in"})
            }
        })
    })
};


exports.displayLogin = function (req, res) {
    "use strict";
    return res.render("login", {username: "", password: "", login_error: ""})
}


exports.login = function (req, res) {

    var email = req.body.email;
    var password = req.body.password;

    // TODO authenticate

    userDao.login(email, password, function (err, user) {

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

exports.displayLogout = function () {
    "use strict";
    return res.render("logout", {'message': "Thanks and see you soon"})
}

exports.loginOut = function (req, res) {

    userDao.getUser(email, function (err, user) {

        userDao.logout(email, function (err, user) {

            if (err) {
                console.warn(err.message);
                throw err;

            } else if (user) {
                return res.redirect("/welcome", {'username': user.username});

            } else {
                // TODO logging and alerts/events
                // force signout?
                console.log("welcome: can't identify user...redirecting to welcome");
                return res.redirect("/");
            }
        })

    })

    // TODO authenticate


};


exports.doSomething = function (req, res) {

    userDao.getUser(req, res, function (err, user) {


    })
};





