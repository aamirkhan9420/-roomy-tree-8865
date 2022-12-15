const mongoose=require("mongoose")
mongoose.set('strictQuery', false)
require("dotenv").config()
const dataBaseConnection=mongoose.connect("mongodb+srv://user:prem@crud-app.116najg.mongodb.net/unitProject?retryWrites=true&w=majority")
module.exports={dataBaseConnection}