const express= require('express');
const connectDB = require('./dbConfig/dbConfig');
const userRouter = require('./routes/auth.routes');
const app = express();

connectDB()

app.use(express.json());


app.use('/api', userRouter);

app.get('/',(req,res)=>{
    res.send("hello world")
})



module.exports=app;