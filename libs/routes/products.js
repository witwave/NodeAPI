var express = require('express');
var passport = require('passport');
var router = express.Router();
var restify = require('express-restify-mongoose');
var libs = process.cwd() + '/libs/';
var log = require(libs + 'log')(module);

var ProductModel = require(libs + 'model/product');

restify.serve(router, ProductModel);
module.exports = router;
