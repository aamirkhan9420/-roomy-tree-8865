const express = require("express");
const HotelRoute = express.Router();
const { HotelModel } = require("../models/hotel.model");

HotelRoute.get("/", async (req, res) => {
  try {
    const Hotels = await HotelModel.find();
    res.status(200).send(Hotels);
  } catch (err) {
    res.status(404).send({ msg: "NOT FOUND" });
  }
});

HotelRoute.get("/:hotelID", async (req, res) => {
  const hotelID = req.params.hotelID;
  try {
    const hotel = await HotelModel.findById(hotelID);
    res.status(200).send(hotel);
  } catch (err) {
    console.log(err);
    res.status(404).send({ msg: "not a valid ID" });
  }
});

module.exports = { HotelRoute };
