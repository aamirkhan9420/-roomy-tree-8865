const mongoose = require("mongoose");
const PackageScema = mongoose.Schema({
  name: String,
  refund: String,
  city: String,
  area: String,
  rating: String,
  price: String,
  left: String,
  image: String,
});

const PackageModel = mongoose.model("packages", PackageScema);
module.exports = { PackageModel};
