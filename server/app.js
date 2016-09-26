// require technologies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

// initialize port
var port = process.env.PORT | 4242;

// link server to DB
var mongoURI = 'mongodb://localhost:27017/pi_pets';
var MongoDB = mongoose.connect(mongoURI).connection;

// static public folder
app.use(express.static('/public'));

// spin server
app.listen(port, function () {
  console.log('server spinning onport:', port);
}); // end app listen

// base url
app.get('/', function (req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
});
