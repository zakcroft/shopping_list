    var util = require('util'),

    express = require('express'),

    expressValidator = require('express-validator'),

    //socketIo = require('socket.io'),

    mongo = require('./db/mongo'),

    //MongoStore = require('connect-mongo')(express);
    //Router = require('./routes/router')

    //router = require('./routes'),

    http = require('http'),
    //path = require('path'),

    app = express();

// performance for production
//app.use(express.compress());
//app.use(express.static(__dirname + '/public', { maxAge: 86400000 })); // caching for one day

// statics
app.use(express.static(__dirname + '/public'));

// sessions
app.use(express.cookieParser());
app.use(express.session({secret: '1234567890QWERTY'}));

// forms
app.use(express.bodyParser());
app.use(expressValidator());

app.use(app.router);


app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


function start(){
    var router = require('./routes')(app);
    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
}


mongo.init(start);
//mongo.on('connected', start);


