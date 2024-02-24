const { StatusCodes } = require("http-status-codes");
const { response } = require("express");
const { CityService } = require("../services");

const { ErrorResponse, SuccessResponse } = require("../utils/common");

async function createCity(req, res) {
	try {
		const city = await CityService.createCity({
			name: req.body.name,
		});
		SuccessResponse.messages = "City Model Created SuccessFully";
		SuccessResponse.data = city;
		return res
					.status(StatusCodes.CREATED)
					.json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res
					.status(error.statusCode)
					.json(ErrorResponse);
	}
}

async function destroyCity(req, res) {
	try {
		const response = await CityService.destroyCity(req.params.id);
		SuccessResponse.data = response;
		return res.status(StatusCodes.CREATED).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(error.statusCode).json(ErrorResponse);
	}
}

async function updateCity(req, res) {
	try {
		const response = await CityService.updateCity(
			{ name: req.body.name },
			req.params.id
		);
		SuccessResponse.data = response;
		return res.status(StatusCodes.CREATED).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(error.statusCode).json(ErrorResponse);
	}
}
module.exports = {
   createCity,
	destroyCity,
	updateCity
}