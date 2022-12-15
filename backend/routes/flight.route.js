const express=require("express")
const {FlightModel}=require("../models/flight.model")
const FlightRoute=express.Router()

FlightRoute.get("/",async(req,res)=>{
  let flights=await FlightModel.find()
  res.send(flights)
})

FlightRoute.get("/:flightID",async (req,res)=>{
    const flightID = req.params.flightID;
    try {
      const flight = await FlightModel.findById(flightID);
      res.status(200).send(flight);
    } catch (err) {
      res.status(404).send({ msg: "not a valid ID" });
    }

})

module.exports={FlightRoute}