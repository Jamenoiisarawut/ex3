var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'หน้าหลัก' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'นายศราวุธ เชียงพันธ์' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: '061-1967317' });
});
module.exports = router;
