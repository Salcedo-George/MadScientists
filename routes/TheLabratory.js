var express = require('express');
var router = express.Router();

/* GET TheLabratory page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'The Labratory' });
});

module.exports = router;