/* Dependencies */
var express = require('express');
var router = express.Router();

/* Models */
var User = require('../models/user-model');

/* Router */
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');

/* Return router */
module.exports = router;