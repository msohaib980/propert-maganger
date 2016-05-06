var express = require('express');
var router = express.Router();

/* GET client and homes listing. */
router.use('/clients', require('./clients'));
router.use('/homes', require('./homes'));

module.exports = router;
