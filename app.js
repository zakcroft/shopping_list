var express = require('express'),
    //socketIo = require('socket.io'),

    router = require('./routes/router')


    http = require('http'),
    //path = require('path'),

    app = express();


app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

router.configure();

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

