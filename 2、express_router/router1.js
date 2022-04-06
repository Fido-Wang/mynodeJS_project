const express = require('express')

// const app = express()

const router1 = express.Router()

// 挂载具体的路由
router1.get('/user/list',(req, res)=> {
    res.send('get user list')
})

router1.post('/user/list',(req,res)=> {
    res.send('add new user')
})
// 向外到处路由对象
module.exports = router1