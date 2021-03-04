/*** mongodb **/

var express = require('express');
var mongo = require('../mongo/client');
var router = express.Router();





/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({ title: 'mongodb' });
});


router.get('/idx', async function (req, res, next) {
    let data = await mongo.index("Message", { FailedMessage: 'text' });
    res.json(data)
});

router.get('/msg', async function (req, res, next) {
    let data = await mongo.search("Message", {});
    res.json(data)
});

router.get('/msg/:key', async function (req, res, next) {
    let { key } = req.params;
    var query = { $text: { $search: key } };
    let data = await mongo.search("Message", query);
    res.json(data)
});


router.post("/search", async (req, res) => {
    let key = req.body.key;
    let pager = { pageIndex: req.body.pIndex, pageSize: req.body.pSize, totalCount: 0 };
    var model = { pager, search: { key } };

    var query = {};
    if (key.length > 2) query = { $text: { $search: key } };

    console.log(model)
    var { totalCount, result } = await mongo.searchByPager("Message", query, pager.pageIndex, pager.pageSize);
    pager.totalCount = totalCount;
    res.json({ success: true, message: "ok", data: result, pager })

    // res.json({ success: true, message: "ok", data: model, pager })
})






module.exports = router;
