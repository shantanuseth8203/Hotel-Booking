const express = require("express");

const router = express.Router();

const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");
const airportRoutes = require("./airport-routes");
const flightRoutes = require("./flight-routes");
const infoRoutes = require('./info-routes');

router.use("/airplane", airplaneRoutes);
router.use("/cities", cityRoutes);
router.use("/airports", airportRoutes);
router.use("/flights", flightRoutes);
router.use("/info",infoRoutes);


module.exports = router;
