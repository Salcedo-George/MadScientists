var express = require('express');
var router = express.Router();

/* GET thelabratory page. */
router.get('/', function(req, res, next) {
  res.render('thelabratory', { title: 'The Labratory' });
});

module.exports = router;