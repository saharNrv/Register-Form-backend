const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const userRouter=require('./routers/userRouter')

const app=express()
app.use(cors())
app.use(bodyParser.json())


app.use('/api/user-list',userRouter)

app.listen(3000)