var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ title: 'index' });
});

/*所有请求*/
// router.all("*",(req,res)=>{
//   res.json("/  请求错误")
// })

module.exports = router;
