// something to think about
//http://www.aspectjs.com/

var validateRegistration = function(req, callback){

            var passwordMinLength = 6;
            var passwordMaxLength = 10;

            req.checkBody("username", "Please supply a username").notEmpty();
            req.checkBody("email", "Invalid email").isEmail();

            req.checkBody("password", {
                equals: "Passwords not the same",
                len:"Password needs to be between %1 and %2  characters"
            }).equals(req.body.confirm_password).len(passwordMinLength, passwordMaxLength);

            req.checkBody("confirm_password", {
                equals: "Passwords not the same",
                len: "Password needs to be between %1 and %2  characters"
            }).equals(req.body.password).len(passwordMinLength, passwordMaxLength);

            callback(null, req.validationErrors(true));

}

module.exports = {
    validateRegistration: validateRegistration
}



// not used

//var util = require('util');
//
//var validators = {
//    username: {
//        msg: 'Please supply a username',
//        tests: ['notEmpty']
//    },
//    password: {
//        msg: 'Password needs to be between 6 and 10 characters',
//        tests: [
//            {'len': [6, 10]}
//        ]
//    },
//    email: {
//        msg: 'Invalid email',
//        tests: ['isEmail']
//    }
//}

//// this will test all the body params so is a generic validation
//// a validator config must be present in validators object
//
//var validateAll = function (req, res, callback) {
//
//    Object.keys(validators).forEach(function (key) {
//
//        var validator = validators[key];
//        var bodyParam = req.checkBody(key, validator['msg']);
//        var params = [];
//
//        validator['tests'].forEach(function (method, index, array) {
//
//            if (Object.prototype.toString.call(method) === "[object Object]") {
//
//                var test = method;  // for brevity
//
//                Object.keys(test).forEach(function (method) {
//
//                    params = test[method];
//
//                    bodyParam = bodyParam[method].apply(bodyParam, params)
//                });
//
//            } else {
//                bodyParam = bodyParam[method]()
//            }
//
//        })
//
//    })
//
//    callback(req.validationErrors());
//
//
//}