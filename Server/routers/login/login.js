const request = require('request');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//需要读写文件（存图片）
const fs = require('fs');

const queryString = require('querystring')
//创建可模块化，可挂载的路由句柄
const router = express.Router();

//引入utils
const utils = require('../../utils/utils');

//载入数据库内collection    
// const Users = require('../dbTypes/db_users');



router.post('/login',function(req, res) {
      try {
    // 解析路由
    let [reqPath, query] = req.url.split('?')
    let params = query ? queryString.parse(query) : {}
    // 解析cookie
    // 解析body
    let chunks = []
    req.on('data', (chunk) => chunks.push(chunk))
    req.on('end', () => {
      // 拼接Buffer，生成body
      try {
        let data = Buffer.concat(chunks).toString('utf-8')
        req.body = JSON.parse(data)
      } catch (error) {
        req.body = {}
      }
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Request-Method','*');
      //****************************** */
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      // 映射路由函数
      try {
        
        if (reqPath === '/api/add') {
          //console.log(req.body)
          if (
            req.body.time &&
            req.body.content &&
            req.body.name &&
            req.body.email &&
            req.body.tip
          ) {
            //console.log(req.body)
            let id = uuid.v4()
            arr.push({ ...req.body, id })
            console.log(arr)
            res.end(JSON.stringify({ stat: 'Good', id:id }))
          } else {
            res.end(JSON.stringify({ stat: 'param_lost', msg: '参数缺失' }))
          }
        } else if (reqPath === '/api/get') {
          if (req.body.id) {
            let cap = arr.find((x) => x.id == req.body.id)
            if (cap) {
              return res.end(JSON.stringify(cap))
            } else {
              return res.end(
                JSON.stringify({ stat: 'not_found', msg: '胶囊未找到' }),
              )
            }
          } else {
            res.end(JSON.stringify({ stat: 'param_lost', msg: '参数缺失' }))
          }
        } else {
          res.statusCode = 404
        }
      } catch (err) {
        res.statusCode = 500
      } finally {
        res.end()
      }
    })
  } catch (error) {
    console.trace(error)
    res.statusCode = 500
    res.end()
  }
    
    // // 解析body
    // let chunks = [];
    // req.on('data', (chunk) => chunks.push(chunk))
    // req.on('end', () => {
    //   // 拼接Buffer，生成body
    //   let data = Buffer.concat(chunks).toString('utf-8');
    //   let body = JSON.parse(data);
    //   //跨域
    //   res.setHeader('Access-Control-Allow-Origin', '*');
    //   res.setHeader('Access-Control-Request-Method','*');
    //   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    //   //相关操作
    //   let promise= new Promise((resolve,reject)=>{
    //     if(body){
    //       resolve()
    //     }else{
    //       reject()
    //     }
    //   })

    //   promise
    //     .then(()=>{
    //       res.json({
    //         name:'dsa'
    //       })
    //     })
    //     .catch((err)=>{
    //       res.json({
    //         err_code:10050,
    //         msg:'login error'
    //       })
    //     })
    // })

})



//4.  导出
module.exports = router;