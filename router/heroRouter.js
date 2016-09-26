// establish technologies
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// require model in route
var heroModel = require('../models/heroModel');

router.get('/', function (req, res) {
  console.log('in heroes get route');
  heroModel.find({}, function (err, heroes) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('hero get route success!');
      res.send(heroes);
    } // end else
  }); // end find heroes
}); // end get route

router.post('/', function (req, res) {
  console.log('in heroes post route');
}); // end post route

module.exports = router;
