const express = require('express')

// const app = express()

const router2 = express.Router()

// 挂载具体的路由
router2.get('/user/id',(req, res)=> {
    res.send('get user id')
})

router2.post('/user/id',(req,res)=> {
    res.send('add new user id')
})
// 向外到处路由对象
module.exports = router2