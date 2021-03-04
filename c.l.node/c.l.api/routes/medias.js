var express = require('express');
var esResource = require('../esearch/esResource');
var fileServices = require('../services/fileServices');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({ title: 'Medias' });
});



router.get("/ls", async (req, res) => {
  var result = await fileServices.scan('/home/cc/git/cc/CC-Live/');
  res.json({ result })
})


router.get("/flash", async (req, res) => {
  var result = await fileServices.index('/home/cc/git/cc/CC-Live/');
  res.json({ result })
})

router.get("/search", async (req, res) => {
  let pager = { pageIndex: 1, pageSize: 20, totalCount: 0 };
  var model = { pager, search: { key: '' } };
  var result = await esResource.search(model);
  res.json({ success: true, message: "ok", data: result })
})

router.get("/search/:key", async (req, res) => {
  let { key } = req.params;
  let pager = { pageIndex: 1, pageSize: 20, totalCount: 0 };
  var model = { pager, search: { key } };
  console.log(model)
  var { totalCount, result } = await esResource.search(model);
  pager.totalCount = totalCount;
  res.json({ success: true, message: "ok", data: result, pager })
})






/*所有请求*/
// router.all("*", (req, res) => {
//   res.json("/users , 请求错误")
// })
module.exports = router;
