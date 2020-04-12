const http = require('http')

const server = http.createServer((req, res) => {
    res.end('hi, cc.live !')
})


server.listen(9003, '127.0.0.1', () => {
    console.log('lister on 9003');
})