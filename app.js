'use strict'

// 加载 express 模块
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./routes/router')

// 调用 express 得到一个 app 实例
const app = express()
// 实现浏览器实时刷新
app.use(require('connect-livereload')());
//  一般对于一个规范的目录 模板文件就放在views目录下 设置静态目录
app.set('views',path.join(__dirname,'views'))
// 设置使用 ejs 模板引擎 第一个参数 view engine 不能改变
app.set('view engine','ejs')
// 设置静态资源处理中间件 注意 第一个是虚拟路径  第二个参数表示要设置那个目录作为静态资源的存储位置
app.use(express.static('www'));   // www/index.html 访问


// 挂载路由中间件
app.use(router)

app.listen(9000,'127.0.0.1',function() {
  console.log('server is running at 9000...')
})
