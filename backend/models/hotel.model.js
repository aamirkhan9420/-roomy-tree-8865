const mongoose = require("mongoose");
const hotelScema = mongoose.Schema({
  hotelPic: {type:String,required:true},
  hotelName: {type:String,required:true},
  hotelTag: {type:String,required:true},
  hotelDesc: {type:String,required:true},
  hotelOffer: {type:String,required:true},
  rating: {type:String,required:true},
  hotelFees: {type:String,required:true},
  totalFees: {type:String,required:true},
});

const HotelModel = mongoose.model("hotels", hotelScema);
module.exports = { HotelModel };
