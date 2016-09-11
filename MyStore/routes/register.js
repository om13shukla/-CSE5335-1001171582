var express = require('express');
var validator = require('express-validator');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register' });
});



module.exports = router;
    