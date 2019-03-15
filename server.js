var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

var app = express();
var mongoose = require('mongoose');
app.use(express.static(path.join(__dirname, "./public")));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');


mongoose.connect('mongodb://localhost/restful_api');
mongoose.Promise = global.Promise;


const models = require("./server/models.js");
var Task = mongoose.model('Task'); 


require('./server/routes.js')(app)

app.listen(8000, function() {
});