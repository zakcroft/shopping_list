var express = require('express'),
    //socketIo = require('socket.io'),
    mongo = require('./db/mongo'),
    //Router = require('./routes/router')

    //router = require('./routes'),

    http = require('http'),
    //path = require('path'),

    app = express();


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


