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

router.get('/list',(req,res) => {

  let params = req.query;
  console.log(params);

  let limit = Number(params.limit),
    name = params.name;

  //console.log(typeof limit);

  let sql = `select * from goods where name = '串饰' limit ${limit}`;

  connection.query(sql,(err,result) => {
    if(err){
      console.log(`查询商品失败：${err.message}`);
      return;
    }

    //console.log(result);

    res.json({
      error_code: 0,
      data: result
    });
  });
});

module.exports = router;
