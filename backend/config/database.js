const mongoose=require("mongoose")
mongoose.set('strictQuery', false)
require("dotenv").config()
const dataBaseConnection=mongoose.connect(process.env.MONGO_URL)
module.exports={dataBaseConnection}