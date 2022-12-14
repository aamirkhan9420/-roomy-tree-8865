// car models

const mongoose = require("mongoose");
const carScema = mongoose.Schema({
  name: String,
  refund: String,
  city: String,
  area: String,
  rating: String,
  price: String,
  left: String,
  image: String,
});

const CarModel = mongoose.model("cars", carScema);
module.exports = { CarModel };
