const express = require("express");
const router = express.Router();
const { FlightMiddlewares } = require("../../middlewares");
const { FlightController } = require("../../controllers");

//api/v1/flights POST
router.post(
	"/",
	FlightMiddlewares.validateCreateRequest,
	FlightMiddlewares.validateTime,
	FlightController.createFlight
);

//api/v1/flights/?{query-params} GET
router.get("/", FlightController.getAllFlights);

// api/v1/flights/:id GET
router.get("/:id", FlightController.getFlight);

// // api/v1/airports/:id DELETE
// router.delete("/:id", AirportController.destroyAirport);

// api/v1/flights/:id/seats PATCH
router.patch(
	"/:id/seats",
	FlightMiddlewares.validateUpdateRemainingSeatsRequest,
	FlightController.updateRemainingSeats
);

module.exports = router;
