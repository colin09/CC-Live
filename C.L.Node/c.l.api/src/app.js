const express = require('express');
const app = express();
const port = 9003

function mw_logger(err, req, res, next) {
    let msg = new {
        url: req.path,
        method: req.method,
    };
    console.log(msg);
    console.log('log.................')
    next();
}
app.use(mw_logger);


app.use(express.static('static', {

}));

app.get('/get', (req, res) => {

    console.log('llllllllllllllllllllllllllllll');
    let msg = new {
        url: req.path,
        method: req.method
    };
    console.log(msg);   
    res.json({
        success: true
    })
})

app.get('/err', (req, res) => {
    throw new error('exception ....');
})

app.use(function (err, req, res, next) {
    if (err) {
        res.json({
            code: 500,
            success: false,
            message: err.message
        });
    }
    else {
        console.log('-----------------')
        // let msg = new {
        //     url: req.path,
        //     method: req.method,
        // };
        // console.log(msg);
    }
    next();
})


app.listen(port, () => {
    console.log(`app started, lister at http://localhost:${port}...`);
})