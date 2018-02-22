var express = require('express');
var router = express.Router();
var http = require('http');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/a', function (req, res, next) {
  req.models.Weixin_toutiao.find().limit(6).offset(2).run(function (err, people) {
    console.log(people);
    res.send(people);
    // 查询年龄为18岁,跳过前两条记录并只保留三条记录
    // 且返只回名字；
});
});

router.get('/b', function (req, res, next) {
  req.models.Weixin_toutiao.find(function (err, movie) {
    if (err) {
      res.send(err);
    } else {
      res.send(movie);
    }
  });
});
module.exports = router;
