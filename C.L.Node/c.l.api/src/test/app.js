const express = require('express');

const app = express();

const aRouter = require('./a.router');
const bRouter = require('./b.router');


function mw_log(req,res,next){
    console.log();
    next();
}


app.use(mw_log);
app.use(express.static('static',{
    
}));

// app.use((req, res) => {
//     res.json({
//         hi: 'cc.live  -   use',
//         method: req.method,
//         uri: req.path
//     })
// })

app.use('/a',aRouter);
app.use('/b',bRouter);


app.post('/name', (req, res) => {
    let para = req.params;
    res.send('hi ,  /name ')
})

app.get('/name/:age', (req, res) => {
    let { age } = req.params;
    res.json({ msg: 'hi ,  /name post', age })
})

app.all('/age', (req, res) => {
    res.json({
        msg: 'hi , /age  -  all',
        method: req.method
    })
})

app.all('*', (req, res) => {
    res.json({
        msg: 'cc.live  -  all * ',
        method: req.method,
        uri: req.path
    })
})

app.listen(9004, () => {
    console.log('server start ...')
})