'use strict';
const bodyParser = require('body-parser');
/**
 * 对于当前的router文件来说,他的工作就是:
 * 匹配用户请求的 url, 然后分发具体的处理函数
 */

const express = require('express');

// 我们都把具体的处理函数都放在一个叫做controller的目录中
// 可以使用 express.Router 类创建模块化 可挂载的路由句柄
const router = express.Router();
var app = express();
/*router.use(function timeLog(req,res,next) {
  console.log('Time ',Date.now())
  next();
})*/
app.use(bodyParser.json());
router.get('/',function(req,res) {
  var query = req.query;
  console.log(query);
 /* if(!query) {

  }*/
  res.render('index');
});

router.get('/api/:id',function(req,res) {
  console.log(req.params);
  res.send('api/:id');
});
module.exports = router;
