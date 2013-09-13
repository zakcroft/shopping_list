var controllers = require('../controllers');
var home = controllers.home;
var user = controllers.user;

var router = function(app){

        app.get('/welcome', home.index);

        app.get('/register', user.register);

        app.post('/register', user.register);

        app.get('/login', user.login);

        app.post('/login', user.login);

}


module.exports = router;
