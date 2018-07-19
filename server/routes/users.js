const express = require('express');
const router = express.Router();
const md5 = require('js-md5');

//连接mysql
const connection = require('../modules/mysql');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

//获取图形验证码
const code = require('../modules/code');
router.get('/code',code);

//用户注册
router.post('/register',(req,res) => {

  let params = req.body;
  let password = md5(params.password); //md5加密

  let sql = `insert into users (username,password,phone) values ('${params.username}','${password}','${params.phone}')`;

  connection.query(sql,(err,result) => {
    if(err){
      console.log(`注册失败：${err.message}`);
      return;
    }

    console.log(result);

    res.json({
      error_code: 0,
      data: {
        username: params.username
      }
    });


  });

});

module.exports = router;
