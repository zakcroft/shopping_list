var util = require('util');
var events = require('events');

var controllers = require('../controllers');
var home = controllers.home;
var user = controllers.user;

function Router() {
    events.EventEmitter.call(this);
}

util.inherits(Router, events.EventEmitter);


Router.prototype = {

    init: function (app) {

        app.get('/', home.index);

        app.get('/login', user.login);

        //app.get('/user/new', user.registerUser);

        app.post('/login', user.registerUser);

        this.emit('ready');
    }
}


module.exports = Router;
