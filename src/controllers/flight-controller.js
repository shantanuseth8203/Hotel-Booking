const { StatusCodes } = require("http-status-codes");
const { FlightService } = require("../services");
const { response } = require("express");

const { ErrorResponse, SuccessResponse } = require("../utils/common");

async function createFlight(req, res) {
	try {
		const flight = await FlightService.createFlight({
			flightNumber: req.body.flightNumber,
			airplaneId: req.body.airplaneId,
			departureAirportId: req.body.departureAirportId,
			arrivalAirportId: req.body.arrivalAirportId,
			arrivalTime: req.body.arrivalTime,
			departureTime: req.body.departureTime,
			price: req.body.price,
			boardingGate: req.body.boardingGate,
			totalSeats: req.body.totalSeats,
		});
		SuccessResponse.messages = "Flight Created SuccessFully";
		SuccessResponse.data = flight;
		return res.status(StatusCodes.CREATED).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(error.statusCode).json(ErrorResponse);
	}
}

async function getAllFlights(req, res) {
	try {
		const flights = await FlightService.getAllFlights(req.query);
		SuccessResponse.messages = "Flight Searched SuccessFully";
		SuccessResponse.data = flights;
		return res.status(StatusCodes.OK).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(error.statusCode).json(ErrorResponse);
	}
}

async function getFlight(req, res) {
	try {
		const flight = await FlightService.getFlight(req.params.id);
		SuccessResponse.data = flight;
		return res.status(StatusCodes.OK).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(error.statusCode).json(ErrorResponse);
	}
}

async function updateRemainingSeats(req, res) {
	try {
		const flight = await FlightService.updateRemainingSeats({
			flightId: req.params.id,
			seats: req.body.seats,
			dec: req.body.dec,
		});
		SuccessResponse.data = flight;
		return res.status(StatusCodes.OK).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(error.statusCode).json(ErrorResponse);
	}
}
module.exports = {
	createFlight,
	getAllFlights,
	getFlight,
	updateRemainingSeats,
};
