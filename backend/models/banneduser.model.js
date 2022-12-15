const mongoose=require("mongoose")
let BannedUserScema=mongoose.Schema({
    email:String
})

const BannedUserModel=mongoose.model("bannedUsers",BannedUserScema)
module.exports={BannedUserModel}