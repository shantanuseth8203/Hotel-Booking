const express = require('express');
const router = express.Router();
const {AirplaneMiddlewares } = require('../../middlewares')
const {AirplaneController} = require('../../controllers')

//api/v1/airplanes POST
router.post('/',
               AirplaneMiddlewares.validateCreateRequest,            
               AirplaneController.createAirplane);

//api/v1/airplanes GET
router.get('/',AirplaneController.getAirplanes);

// api/v/airplanes/:id GET
router.get("/:id", AirplaneController.getAirplane);

// api/v/airplanes/:id DELETE
router.delete("/:id", AirplaneController.destroyAirplane);

// api/v/airplanes/:id PATCH
router.patch("/:id",
               AirplaneMiddlewares.validateUpdateRequest,            
               AirplaneController.updateAirplane);

module.exports = router;