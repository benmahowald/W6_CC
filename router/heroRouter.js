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
  var data = req.body;
  var hero = new heroModel ({
    alias: data.alias,
    first_name: data.first_name,
    last_name: data.last_name,
    city: data.city,
    power_name: data.power_name
  }); // end hero constructor

  hero.save( function (err) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('hero save success');
      res.sendStatus(201);
    } // end else
  }); // end her.save
}); // end post route

router.delete('/', function () {
  console.log('in delete route');
});

module.exports = router;
