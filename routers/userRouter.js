const express = require('express')
const userDB = require('../db/userDB')

const userRouter = express.Router()


userRouter.post('/', (req, res) => {
    const body = req.body
    const date=new Date().toLocaleDateString('fa-IR')
    const postUserQuery = `INSERT INTO users VALUES (null,'${body.firstname}','${body.lastname}','${body.username}','${body.password}','${date}')`
    userDB.query(postUserQuery, (err, result) => {
        if (err) {

            console.log('query failed', err);
            res.send(null)
        } else {
            console.log('creat query');
            res.send(result)
        }
    })

})

userRouter.get('/',(req,res)=>{
    const getUserQuery=`SELECT * FROM users`
    userDB.query(getUserQuery,(err,result)=>{
        if(err){
            res.send(null)
        }else{
            res.send(result)
        }
    })
})

userRouter.delete('/:userID',(req,res)=>{
    const userID=req.params.userID

    const deleteUserQuery=`DELETE FROM users WHERE id=${userID}`
    userDB.query(deleteUserQuery,(err,result)=>{
        if(err){
            res.send(null)
        }else{
            res.send(result)
        }
    })
})
userRouter.put('/:userID', (req, res) => {
    const body = req.body
    const userID=req.params.userID
    const putUserQuery = `UPDATE users SET firstname='${body.firstname}',lastname='${body.lastname}',username='${body.username}' WHERE id=${userID}`
    userDB.query(putUserQuery, (err, result) => {
        if (err) {

            console.log('query failed', err);
            res.send(null)
        } else {
            console.log('creat query');
            res.send(result)
        }
    })

})
module.exports = userRouter;