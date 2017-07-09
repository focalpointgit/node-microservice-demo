var express = require('express');
var dogServerApp = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dogs');

dogServerApp.use(bodyParser.json());
dogServerApp.use(bodyParser.urlencoded({
    extended:true
}));

var dogRoutes = require('./routes/dogRoutes.js')(dogServerApp);

var server = dogServerApp.listen(3001, function(){
    console.log("Doggy server running on port 3001");
});