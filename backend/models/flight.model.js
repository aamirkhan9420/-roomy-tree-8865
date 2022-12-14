const mongoose = require("mongoose");
const flightScema = mongoose.Schema({
  time: String,
  from: String,
  to: String,
  flightN: String,
 safety: String,
  price: String,
  image: String,
});

const FlightModel = mongoose.model("flights",flightScema);
module.exports = { FlightModel };
