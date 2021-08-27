

mkdir l.api
cd l.api
npm init -y
npm install express -S
npm install nodemon -D
code .\

"start": "nodemon ./src/app.js"

## 中间件
    1. 是一个函数
    2. function mw_demo（error,req,res,next）{
        a. 异常处理
        b. 参数验证
        c. 处理业务功能
        d. 
    }
    3. app.all('*', mw_demo);




express 

    1. npm install -g express-generator
    2. express -h
    3. express --view=pug [myapp]
    4. npm install
    5. DEBUG=myapp:* npm start

elasticSearch
    1. npm install @elastic/elasticsearch
    2. 