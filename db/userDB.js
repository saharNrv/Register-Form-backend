const mysql=require('mysql')

const userDB=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"user_register"
})

module.exports=userDB