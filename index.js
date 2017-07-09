var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cats');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

var cats = require('./routes/catRoutes')(app);

app.get('/', function(req,res) {    
	res.send('Hello World!');
    //res.json({hello:'Hello World'});
});

var server = app.listen(3000, function(){
	console.log('Server running at local host port 3000 ');
});

