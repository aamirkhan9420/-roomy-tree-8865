const mongoose = require("mongoose");
const hotelScema = mongoose.Schema({
  hotelPic: String,
  hotelName: String,
  hotelTag: String,
  hotelDesc: String,
  hotelOffer: String,
  rating: String,
  hotelFees: String,
  totalFees: String,
});

const HotelModel = mongoose.model("hotels", hotelScema);
module.exports = { HotelModel };
