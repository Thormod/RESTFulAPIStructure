/* Dependencies */
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

/* Database connection: MongoDB */
mongoose.connect('mongodb://localhost/rest_api');

/* Express */
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Routing */
app.use('/api', require('./routes/api'));

/* Start server */
app.listen(3000);
console.log('<Api is running on port: 3000>');