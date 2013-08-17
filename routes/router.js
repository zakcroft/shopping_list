
var  main = require('../controllers');
var  user = require('../controllers/user');


exports.configure = function(){

    app.get('/', main.index);

    app.get('/login', user.login);

}



