const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
    res.json({
        list: [{
            msg: 'b.router.list'
        }]
    })
})

module.exports = router;