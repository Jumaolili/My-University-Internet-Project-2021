const express = require('express')
const bodyParser = require('body-parser');
const arttemplate = require('art-template');
const path = require('path');
const fs = require('fs');
const request = require('request');
const cors = require('cors');

//引入express-ws库
const expressWs = require('express-ws');

//引入websocket库
// const WebsocketServer = require('websocket').server;


//引入路由器
const hello = require('./routers/hello');
const login = require('./routers/login/login');

//开启服务
const app = express();



//配置bodyparser
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

//开放静态资源(后期需要用来开放 users和goods图片文件)
app.use('/node_modules', express.static('./node_modules/'));
app.use('/public', express.static('./public'));

// app.use('/user_src', express.static('./user_src'));

//挂载路由
app.use(hello);
app.use(login);


// 开启服务器 
app.listen(8080, function() {
    console.log("server is running now ......")
})