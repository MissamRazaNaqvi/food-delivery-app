const express= require('express');
const connectDB = require('./dbConfig/dbConfig');

const app = express();

connectDB()

app.get('/',(req,res)=>{
    res.send("hello world")
})

module.exports=app;