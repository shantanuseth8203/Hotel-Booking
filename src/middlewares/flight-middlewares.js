const { StatusCodes } = require("http-status-codes");

const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");
const { compareTime } = require("../utils/helper/datetime-helper");
function validateCreateRequest(req, res, next) {
	if (!req.body.flightNumber) {
		ErrorResponse.messages = "Something went wrong while creating an flight";
		ErrorResponse.error = new AppError(
			["flightNumber not found in the incoming request in the correct form"],
			StatusCodes.BAD_REQUEST
		);
		return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
	}
	if (!req.body.airplaneId) {
		ErrorResponse.messages = "Something went wrong while creating an flight";
		ErrorResponse.error = new AppError(
			["airplaneId not found in the incoming request in the correct form"],
			StatusCodes.BAD_REQUEST
		);
		return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
	}
	if (!req.body.departureAirportId) {
		ErrorResponse.messages = "Something went wrong while creating an flight";
		ErrorResponse.error = new AppError(
			[
				"departureAirportId not found in the incoming request in the correct form",
			],
			StatusCodes.BAD_REQUEST
		);
		return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
	}
	if (!req.body.arrivalAirportId) {
		ErrorResponse.messages = "Something went wrong while creating an flight";
		ErrorResponse.error = new AppError(
			[
				"arrivalAirportId not found in the incoming request in the correct form",
			],
			StatusCodes.BAD_REQUEST
		);
		return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
	}
	if (!req.body.arrivalTime) {
		ErrorResponse.messages = "Something went wrong while creating an flight";
		ErrorResponse.error = new AppError(
			["arrivalTime not found in the incoming request in the correct form"],
			StatusCodes.BAD_REQUEST
		);
		return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
	}
	if (!req.body.departureTime) {
		ErrorResponse.messages = "Something went wrong while creating an flight";
		ErrorResponse.error = new AppError(
			["departureTime not found in the incoming request in the correct form"],
			StatusCodes.BAD_REQUEST
		);
		return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
	}
	if (!req.body.price) {
		ErrorResponse.messages = "Something went wrong while creating an flight";
		ErrorResponse.error = new AppError(
			["price not found in the incoming request in the correct form"],
			StatusCodes.BAD_REQUEST
		);
		return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
	}
	if (!req.body.totalSeats) {
		ErrorResponse.messages = "Something went wrong while creating an flight";
		ErrorResponse.error = new AppError(
			["totalSeats not found in the incoming request in the correct form"],
			StatusCodes.BAD_REQUEST
		);
		return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
	}
	next();
}

function validateTime(req, res, next) {
	if (!compareTime(req.body.arrivalTime, req.body.departureTime)) {
		ErrorResponse.messages = "Something went wrong while creating an flight";
		ErrorResponse.error = new AppError(
			["Arrival time cannot be less than departure time"],
			StatusCodes.BAD_REQUEST
		);
		return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
	}
	next();
}
function validateUpdateRemainingSeatsRequest(req, res, next) {
	if (!req.body.seats) {
		ErrorResponse.messages = "Something went wrong while creating an flight";
		ErrorResponse.error = new AppError(
			["totalSeats not found in the incoming request in the correct form"],
			StatusCodes.BAD_REQUEST
		);
		return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
	}
	next();
}

module.exports = {
	validateCreateRequest,
	validateTime,
	validateUpdateRemainingSeatsRequest
};
