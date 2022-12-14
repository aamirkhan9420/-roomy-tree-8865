const express = require("express");
const app = express();
const port = 8080;

const { dataBaseConnection } = require("./config/database");
const { CarRoute } = require("./routes/car.route");
const { FlightRoute } = require("./routes/flight.route");
const { PackageRoute } = require("./routes/package.route");
const { HotelRoute } = require("./routes/hotel.route");

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/car", CarRoute);
app.use("/flight", FlightRoute);
app.use("/package", PackageRoute);
app.use("/hotel", HotelRoute);

app.listen(port, async () => {
  try {
    await dataBaseConnection;
    console.log({ msg: "connected to databse" });
  } catch (err) {
    console.log(err);
  }

  console.log(`Example app listening on port ${port}!`);
});
