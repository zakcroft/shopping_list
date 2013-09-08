var controllers = require('../controllers');
var home = controllers.home;
var user = controllers.user;

var router = function(app){

        app.get('/welcome', home.index);

        app.get('/login', user.login);

        //app.get('/user/new', user.registerUser);

        app.post('/login', user.registerUser);



}


module.exports = router;
