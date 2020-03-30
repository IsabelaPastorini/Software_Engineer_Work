var express = require('express');
var router = express.Router();
var path = require("path")


router.get('/', function(req, res, next) {
    res.render(path.join(__dirname + '/../views/login.ejs'), { title: 'Express' });
  });


  module.exports = router;