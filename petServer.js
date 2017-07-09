var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pets');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

var petRoutes = require('./routes/petRoutes.js')(app);

var server = app.listen(3002, function(){
    console.log("Pet server running on port 3002");
});