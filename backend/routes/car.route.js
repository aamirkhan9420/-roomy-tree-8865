const express = require("express");
const { CarModel } = require("../models/car.model");
const CarRoute = express.Router();

CarRoute.get("/", async (req, res) => {
  const cars = await CarModel.find();
  res.status(200).send(cars);
});

CarRoute.get("/:carID", async (req, res) => {
  const carID = req.params.carID;
  try {
    const car = await CarModel.findById(carID);
    res.status(200).send(car);
  } catch (err) {
    console.log(err);
    res.status(404).send({ msg: "not a valid ID" });
  }
});

module.exports = { CarRoute };
