let express = require('express');
let router = express.Router();
let md5 = require('js-md5');

//连接mysql
let mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
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
  //console.log(params);

  //查询数量
  let limit = params.limit;
  let limitVal = ``;
  
  if(limit){
    console.log(limit);
    limit = Number(limit);
    limitVal = ` limit ${limit}`;
  }

   //主分类
  let name = params.name;
  let sqlVal = `name = '${name}'`;

  //副分类
  let sort = params.sort;
  if(sort !== '所有'){
    sqlVal += ` and sort = '${sort}'`;
  }

  //材质
  let texture_classify = params.texture_classify;
  if(texture_classify !== '所有材质'){
    sqlVal += ` and texture_classify = '${texture_classify}'`;
  }

  //宝石
  let jewel_classify = params.jewel_classify;
  if(jewel_classify !== '所有宝石'){
    sqlVal += ` and jewel_classify = '${jewel_classify}'`;
  }


  //console.log(typeof limit);

  let sql = `select * from goods where ${sqlVal} ${limitVal}`;
  console.log(sql);

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
