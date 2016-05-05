'use strict';

var mongoose = require('mongoose');

var clientInfo = new mongoose.Schema({
  name: { type: String,   },
  Email: { type: String, },
  Phone: { type: Number }
});

var Client = mongoose.model('Client', clientInfo);
// module.exports =Client

module.exports = mongoose.model('',clientInfo);
