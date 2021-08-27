const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
    res.json({
        list: [{
            msg: 'a.router.list'
        }]
    })
})

module.exports = router;