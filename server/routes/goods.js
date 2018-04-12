let express = require('express');
let router = express.Router();
let md5 = require('js-md5');

//连接mysql
let mysql = require('mysql');
let connection = mysql.createConnection({
  host: '123.207.246.238',
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'mohuan'
});
connection.connect();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

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
      data: '注册成功！'
    });


  });

});

module.exports = router;
