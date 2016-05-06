'use strict';

var express = require('express');
var router = express.Router();

var Home = require('../models/home');


router.get('/', (req, res) => {

  Home.find({}, (err, homes) => {
    if(err) {
      return res.status(400).send(err)
    }
    res.send(homes);



  })
});

router.post('/', (req, res) => {
  Home.create(req.body, (err, home) =>{
    if(err) {
      return res.status(400).send(err)
    }
    res.send(home);
  })
});


module.exports = router
