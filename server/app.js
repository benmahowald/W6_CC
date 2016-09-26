// require technologies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongoose = require('mongoose');
var path = require('path');

// initialize port
var port = process.env.PORT | 4242;

// static public folder
app.use(express.static('public'));

// link server side model and route
var heroRouter = require('../router/heroRouter');
app.use('/heroes', heroRouter);

// link server to DB
var mongoURI = 'mongodb://localhost:27017/w6_cc';
var MongoDB = mongoose.connect(mongoURI).connection;

// spin server
app.listen(port, function () {
  console.log('server spinning onport:', port);
}); // end app listen

// base url
app.get('/', function (req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
});
