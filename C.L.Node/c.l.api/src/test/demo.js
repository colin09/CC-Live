const os = require('os')

const cpus = os.cpus();

console.log(cpus.length);

const total = os.totalmem();
const free = os.freemem();
console.log('total', total / 1024 / 1024 / 1024);
console.log('free', free / 1024 / 1024 / 1024);

// console.log('network', os.networkInterfaces());


const http = require('http')
const server = http.createServer((req,res)=>{
    res.end('hi, cc.live');
})

server.listen(9003,'127.0.0.1',()=>{
    console.log('lister on 9003');
})




/*
配置nodemon ，自动重启
1.npm install nodemon -D
2.修改 package.json 中的启动命令  "start": "nodemon src/app.js",
3.通过增加 nodemon.json 指定特定的 watch 文件
4.debug 模式 "start": "DEBUG=* nodemon src/app.js",




*/