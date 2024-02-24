const express = require("express");
const router = express.Router();
const { AirportMiddlewares } = require("../../middlewares");
const { AirportController } = require("../../controllers");

//api/v1/airports POST
router.post(
	"/",
	AirportMiddlewares.validateCreateRequest,
	AirportController.createAirport
);

//api/v1/airports GET
router.get("/", AirportController.getAirports);

// api/v/airports/:id GET
router.get("/:id", AirportController.getAirport);

// api/v/airports/:id DELETE
router.delete("/:id", AirportController.destroyAirport);

// api/v/airports/:id PATCH
router.patch(
	"/:id",
	AirportMiddlewares.validateUpdateRequest,
	AirportController.updateAirport
);

module.exports = router;
