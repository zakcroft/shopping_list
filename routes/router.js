
var  main = require('../controllers');
var  user = require('../controllers/userController');


exports.configure = function(){

    app.get('/', main.index);

    app.get('/login', user.login);

    //app.get('/user/new', user.registerUser);

    app.post('login', user.registerUser);

}



