const express = require("express");
const bannnedUserRoute = express.Router();
const { BannedUserModel } = require("../models/banneduser.model");

bannnedUserRoute.get("/", async (req, res) => {
  try {
    const bannedusers = await BannedUserModel.find();
    res.status(200).send(bannedusers);
  } catch (err) {
    console.log(err);
    res.send({ msg: "error" });
  }
});

bannnedUserRoute.get("/:userID", async (req, res) => {
  const userID = req.params.userID;
  try {
    const banneduser = await BannedUserModel.findById(userID);
    res.status(200).send(banneduser);
  } catch (err) {
    console.log(err);
    res.status(404).send({ msg: "error" });
  }
});


bannnedUserRoute.post("/",async(req,res)=>{
    const payload=req.body
    try{

        const newbanneduser= new BannedUserModel(payload)
        await newbanneduser.save()
        res.status(200).send({"msg":"user banned succesfully"})
    }catch(err){
        console.log(err)
        res.send({"msg":"error"})
    }
})

bannnedUserRoute.delete("/:userID", async (req, res) => {
    const userID = req.params.userID;
    try {
      await BannedUserModel.findByIdAndDelete(userID);
      res.status(200).send({"msg":"User removed from banned user"});
    } catch (err) {
      console.log(err);
      res.status(404).send({ msg: "error" });
    }
  });

module.exports={bannnedUserRoute}