'use strict';

var express = require('express');
var router = express.Router();

var Client = require('../models/client');


router.get('/', (req, res) => {

  Client.find({}, (err, clients) => {
    if(err) {
      return res.status(400).send(err)
    }
    res.send(clients);
  })
})

router.post('/', (req, res) => {
  Client.create(req.body, (err, client) =>{
    if(err) {
      return res.status(400).send(err)
    }
    res.send(client);
  })
});

router.delete('/:id', (req, res) => {
  Client.findByIdAndRemove(req.params.id, (err, clients) => {
    if(err) {
      return res.status(400).send(err)
    }
    console.log(clients);
    res.send(clients);
  })
})

router.put('/:id', (req, res) => {
  Client.findByIdAndUpdate(req.params.id, (err, client) => {
    res.status(err ? 400 : 200).send(err || client);
  });
})


module.exports = router
