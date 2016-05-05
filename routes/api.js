var express = require('express');
var router = express.Router();

/* GET questions listing. */
router.use('/clients', require('./clients'));
// router.use('/homes', require('./homes'));

module.exports = router;
