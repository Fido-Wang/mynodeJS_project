// 安装操作mysql数据库的第三方模块 mysql
// 通过mysql模块连接到mysql数据库
// 通过 mysql模块执行SQL语句
const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1', // 数据库的ip地址
    port: '3306',
    user: 'root', // 登录数据库的账号
    password: 'Moshangrenruyu.1', // 登录数据库的密码
    database: 'project_1' // 指定要操作哪个数据库
})

// 测试mysql模块是否能正常工作
// db.query('select 1', (err, res)=> {
//     if(err) return console.log('err', err)
//     console.log('res', res)
// })

// 查询user表中所有的数据
// 如果执行的是select查询语句 则执行的结果是数组 ***
// const sqlUser = 'SELECT * FROM user WHERE id=1'
// db.query( sqlUser,(err, res)=> {
//     if(err) return console.log(err)
//     console.log(res)
// })


// 向数据库中插入数据
// const data = { username:'karsa2', password: '123456'}
// const sqlInsertIntoUser = "INSERT INTO user (username, password) values (?, ?)"
// db.query(sqlInsertIntoUser , [data.username, data.password],(err, res)=> {
//     if(err) return console.log(err.message)
//     if(res.affecteRows ===1) {
//         cosnole.log('插入数据成功')
//     }
// })

// 删除数据库中的数据（逻辑删除 更新）
const id = 13
const sqlstr1 = 'UPDATE user SET status=0 WHERE id=?'
db.query(sqlstr1, id, (err, res)=> {
    if(err) return console.log('err')
    if(res.affectedRows === 1) {
        console.log('successful')
    }
})
