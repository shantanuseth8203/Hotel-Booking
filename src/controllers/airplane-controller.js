const {StatusCodes} = require('http-status-codes');
const {AirplaneService} = require('../services');
const { response } = require('express');

const {ErrorResponse, SuccessResponse} = require('../utils/common');

async function createAirplane(req,res) {
   try {
      const airplane = await AirplaneService.createAirplane({
         modelNumber: req.body.modelNumber,
         capacity : req.body.capacity,
      });
      SuccessResponse.messages = "Airplane Created SuccessFully";
      SuccessResponse.data = airplane;
      return res
               .status(StatusCodes.CREATED)
               .json(SuccessResponse);
      
   }
   catch (error) {
      ErrorResponse.error = error;
      return res
               .status(error.statusCode)
               .json(ErrorResponse);
   }
}

async function getAirplanes(req,res) {
   try {
      const airplanes = await AirplaneService.getAirplanes();
      SuccessResponse.data = airplanes;
      return res
               .status(StatusCodes.OK)
               .json(SuccessResponse);
   } catch (error) {
      ErrorResponse.error = error;
      return res
               .status(error.statusCode)
               .json(ErrorResponse);
   }
}

async function getAirplane(req, res) {
	try {
		const airplanes = await AirplaneService.getAirplane(req.params.id);
		SuccessResponse.data = airplanes;
		return res
               .status(StatusCodes.OK)
               .json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res
               .status(error.statusCode)
               .json(ErrorResponse);
	}
}

async function destroyAirplane(req,res) {
   try {
      const response = await AirplaneService.destroyAirplane(req.params.id);
      SuccessResponse.data = response;
      return res
               .status(StatusCodes.CREATED)
               .json(SuccessResponse);
      
   }
   catch (error) {
      ErrorResponse.error = error;
      return res
               .status(error.statusCode)
               .json(ErrorResponse);
   }
}
async function updateAirplane(req,res) {
   try {
      const response = await AirplaneService.updateAirplane({capacity : req.body.capacity},req.params.id);
      SuccessResponse.data = response;
      return res
               .status(StatusCodes.CREATED)
               .json(SuccessResponse);
      
   }
   catch (error) {
      ErrorResponse.error = error;
      return res
               .status(error.statusCode)
               .json(ErrorResponse);
   }
}
module.exports = {
	createAirplane,
	getAirplanes,
	getAirplane,
	destroyAirplane,
   updateAirplane
};