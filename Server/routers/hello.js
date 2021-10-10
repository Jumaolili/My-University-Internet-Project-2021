const request = require('request');
const express = require('express');
const path = require('path');

//需要读写文件（存图片）
const fs = require('fs');


//创建可模块化，可挂载的路由句柄
const router = express.Router();

//载入数据库内collection    
// const Users = require('../dbTypes/db_users');



router.get('/', function(req, res) {
    res.json({
        err_code:200,
        msg:'hello'
    })

})



//4.  导出
module.exports = router;