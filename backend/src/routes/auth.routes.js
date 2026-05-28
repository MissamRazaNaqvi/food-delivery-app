const express = require("express");
const { userRegister } = require("../controller/auth.controller");

const userRouter= express.Router();

userRouter.post('/user/register',userRegister)

module.exports=userRouter;