var express = require('express');
var router = express.Router();

var products = ['product1', 'product2', 'product3'];
/* GET theproduct page. */
router.get('/', function (req, res, next) {
    res.render('roomwithaview', { title: 'Products', list: products });
});

module.exports = router;