var express = require('express');
var router = express.Router();

/* GET thelabratory page. */
router.get('/', function(req, res, next) {
  res.render('mynewpage', { title: 'The My New Page' });
});

module.exports = router;