const express= require('express')
const app = express()


// 监听客户端的get 和 post请求 并向客户端相应具体的内容
app.get('/user',(req, res)=> {
    res.send(
        {
            userName: '王111',
            age: 24,
            lover: 'xia'
        }
    )
})

// 通过req.params 可以获取到客户端发送过来的查询参数
app.post('/user',(req, res)=> {
    res.send(
        {
            username:'xia1',
            age: 24,
            lover: 'wang'
        }
    )
})

// 通过req.params对象 可以访问到url中 通过：匹配到的动态参数
app.get('/user/:id', (req,res)=> {
    console.log(req.query) // req.query 默认是一个空对象
    console.log(req.params)
    res.send(req.params)
})
app.listen(7070,()=> {
    console.log('express server running at http://127.0.0.1:7070')
})