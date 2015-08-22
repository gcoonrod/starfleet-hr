var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
    apiRouter = require('./routers/api');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/starfleet-hr');

var app = express();

app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.use('/api', apiRouter);

app.listen(app.get('port'), function(){
    console.log("Starfleet HR listening on port " + app.get('port'));
});
