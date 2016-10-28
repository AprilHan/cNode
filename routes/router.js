'use strict'
/**
 * 对于当前的router文件来说,他的工作就是:
 * 匹配用户请求的 url, 然后分发具体的处理函数
 */

const express = require('express')

// 我们都把具体的处理函数都放在一个叫做controller的目录中
// 可以使用 express.Router 类创建模块化 可挂载的路由句柄
const router = express.Router();

router.use(function timeLog(req,res,next) {
  console.log('Time ',Date.now())
  next();
})

router.get('/',function(req,res) {
  res.render('index');
})

router.get('/api/:id',function(req,res) {
  console.log(req.params);
  res.send('api/:id')
})
module.exports = router;
