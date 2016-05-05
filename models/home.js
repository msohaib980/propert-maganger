'use strict';

var mongoose = require('mongoose');


var homeInfo = new mongoose.Schema({
  name: { type: String,   },
  location: { type: String, },
  rent: { type: Number }
  cost: { type: Number }
});


var Home = mongoose.model('Home', homeInfo);
module.exports = mongoose.model('',homeInfo);
