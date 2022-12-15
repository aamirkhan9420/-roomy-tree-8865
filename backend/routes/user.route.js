const express = require("express");
const userRoute = express.Router();
const { UserModel } = require("../models/user.model");
const { signupcheck } = require("../middlewares/signup.check");
const { banneduserCheck } = require("../middlewares/bannedUser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


userRoute.get("/",async(req,res)=>{
    try {
const users=await UserModel.find()
res.status(200).send(users)
    }catch{
res.status(404).send({"msg":"something went wrong"})
    }
})
userRoute.post("/signup", signupcheck,banneduserCheck, async (req, res) => {
  const { email, password} = req.body;
  console.log(req.body);
  const hashedPass = await bcrypt.hash(password, 6);
  const newUser = new UserModel({ email, password: hashedPass, });
  await newUser.save();
  res.status(201).send({ msg: "User created successfull" });
});

userRoute.post("/login", banneduserCheck,async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) res.status(400).send({ msg: "wrong creadentials" });
  const user = await UserModel.findOne({ email: email });
  if (!user) return res.status(400).send({ msg: "wrong creadentials" });
  const isValidUser = await bcrypt.compare(password, user.password);
  if (!isValidUser) return res.status(400).send({ msg: "wrong creadentials" });
  var token = await jwt.sign({ userID: user._id }, "todoapp");
  res.status(202).send(token);
});

module.exports = { userRoute };
