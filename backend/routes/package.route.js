const express=require("express")
const {PackageModel}=require("../models/package.model")
const PackageRoute=express.Router()

PackageRoute.get("/",async(req,res)=>{
    const packages=await PackageModel.find()
    res.send(packages)
})


PackageRoute.get("/:packageID",async(req,res)=>{ 
   const packageID=req.params.packageID
try{
const package=await PackageModel.findById(packageID)
res.status(200).send(package)
}catch(err){
console.log(err)
res.status(404).send({"msg":"not a valid ID"})
}

})

module.exports={PackageRoute}