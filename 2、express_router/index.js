const express = require('express')

const app = express()

const userRouter1 = require('./router1')
const userRouter2 = require('./router2')

app.use(userRouter1, userRouter2)

app.listen(6060, ()=> {
    console.log('127.0.0.1:6060 is running')
})