var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('NHANVAT', { title: 'NHÂN VẬT' });
});

router.get('/DI-VAT-THANH', function(req, res, next) {

  const a = [
    {name:"tien"},
    {name:"tuan"}
    ,{name:"hoa"}]

  res.render('DIVATTHANH', { a });
});

router.get('/VU-KHI', function(req, res, next){
  res.render('VUKHI',{title:'VŨ KHÍ'})
});

router.get('/TIN-TUC', function(req, res, next){
  res.render('TINTUC',{title:'TIN TỨC'})
});

module.exports = router;
