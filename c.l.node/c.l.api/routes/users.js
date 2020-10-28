var express = require('express');
var esearch = require('../esearch/client');
var fileServices = require('../services/fileServices');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.get("/es", async (req, res) => {
  var search = {
    query: {
      match: { quote: 'winter' }
    }
  };
  var result = await esearch.search('game-of-thrones', 'game', search);

  res.json(result)
})


router.get("/ls", async (req, res) => {
  var result = await fileServices.scan('/home/cc/git/cc/CC-Live/');
  res.json({ result })
})


router.get("/index", async (req, res) => {
  var result = await fileServices.index('/home/cc/git/cc/CC-Live/');
  res.json({ result })
})







/*所有请求*/
// router.all("*", (req, res) => {
//   res.json("/users , 请求错误")
// })
module.exports = router;
