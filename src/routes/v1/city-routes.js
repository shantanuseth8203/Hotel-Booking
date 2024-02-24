const express = require("express");
const router = express.Router();
const { CityMiddlewares } = require("../../middlewares");
const { CityController } = require("../../controllers");

//api/v1/city POST
router.post("/",
               CityMiddlewares.validateCreateRequest,
               CityController.createCity);

// //api/v1/city GET
// router.get("/", CityController.getCity);

// // api/v/city/:id GET
// router.get("/:id", CityController.getCity);

// api/v/city/:id DELETE
router.delete("/:id", CityController.destroyCity);

// api/v/city/:id PATCH
router.patch("/:id",
	CityMiddlewares.validateUpdateRequest,
	CityController.updateCity
);

module.exports = router;
