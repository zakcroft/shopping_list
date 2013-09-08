var app = require('express')(),
//socketIo = require('socket.io'),
    router = require('./routes'),
    mongoDb = require('./db/mongo'),
    http = require('http')


function Main(mongoDb, app, router) {
    this.mongoDb = mongoDb;
    this.app = app;
    this.router = router;
    this.init();
}

Main.prototype = {

    init: function () {
        this.app.set('port', process.env.PORT || 3000);
        this.app.set('views', __dirname + '/views');
        this.app.set('view engine', 'ejs');
        this.mongoDb.init(this.startServer);
    },

    startServer: function () {


        this.router.init(app);

        http.createServer(app).listen(app.get('port'), function () {
            console.log('Express server listening on port ' + app.get('port'));
        });
    }
}

var router = new router();

main = new Main(mongoDb, app, router).init();


//mongo.on('connected', start);
/**
 * Created by zak
 * Date: 06/09/13
 * Time: 14:09
 */
