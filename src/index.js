const express = require('express')
const userController = require('./controllers/user.controllers')
app=express();

app.use(express.json());


app.use("/user",userController)


module.exports=app