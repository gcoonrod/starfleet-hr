var express = require('express'),
    bodyParser = require('body-parser'),
    apiRouter = require('./routers/api');

var app = express();

app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.use('/api', apiRouter);

app.listen(app.get('port'), function(){
    console.log("Starfleet HR listening on port " + app.get('port'));
});
