var controllers = require('../controllers');
var home = controllers.home;
var user = controllers.user;

var router = function(app){

        app.get('/', home.index);

        app.get('/welcome', home.index);

        app.get('/register', user.displayRegistration);

        app.post('/register', user.register);

        app.get('/login', user.displayLogin);

        app.post('/login', user.login);

}


module.exports = router;
