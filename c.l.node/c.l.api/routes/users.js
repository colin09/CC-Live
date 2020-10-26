var express = require('express');
var esearch = require('../esearch/client');
var fileServices = require('../services/fileServices');
var router = express.Router();

const { Client } = require('@elastic/elasticsearch')
const address = 'http://172.16.1.197:9200/'

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.get("/es", (req, res) => {
  var search = {
    query: {
      match: { quote: 'winter' }
    }
  };
  var result = await esearch.search('game-of-thrones', 'game', search);
  
  res.json(result)
})









/*所有请求*/
// router.all("*", (req, res) => {
//   res.json("/users , 请求错误")
// })
module.exports = router;
