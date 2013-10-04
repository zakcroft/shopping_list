// something to think about
//http://www.aspectjs.com/

var util = require('util');

var validators = {
    username:{
        msg: 'Please supply a username',
        tests:['notEmpty']
    },
    password: {
        msg: 'Password needs to be between 6 and 10 characters',
        tests: [{'len':[6, 10]}]
    },
    email: {
        msg: 'Invalid email',
        tests: ['isEmail']
    }
}

// this will test all the body params so is a generic validation
// a validator config must be present in validator object

var validateAll = function (req, res) {

    Object.keys(validators).forEach(function(key){

        var validator = validators[key];
        var bodyParam = req.checkBody( key, validator['msg']);
        var params = [];

        validator['tests'].forEach(function(method, index, array){

            if(Object.prototype.toString.call(method) === "[object Object]"){

                var test = method;  // for brevity

                Object.keys(test).forEach(function(method){

                    params = test[method];

                    bodyParam = bodyParam[method].apply(bodyParam, params)
                });

            }else {
                bodyParam = bodyParam[method]()
            }

        })

    })

    var errors = req.validationErrors();
    //console.log(util.inspect(errors, { showHidden: true, depth: null }

    //TODO
    if(errors){
        // this needs to be redirect back to page or ajax
        res.send('There have been validation errors: ' + util.inspect(errors), 400);
        return;
    } else {
        return true;
    }

}

var validateRegistration = function(req, res){
        if(req.body.password === req.body.confirm_password){
            validateAll(req, res);
        }else {
            res.send('Passwords not the same', 400);
        }
}

module.exports = {
    validateAll: validateAll,
    validateRegistration: validateRegistration
}