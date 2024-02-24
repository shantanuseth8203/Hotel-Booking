const { StatusCodes } = require("http-status-codes");

const { AirportRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airportRepository = new AirportRepository();

async function createAirport(data) {
	try {
		const airport = await airportRepository.create(data);
		return airport;
	} catch (error) {
		if (error.name == "SequelizeValidationError") {
			let explanation = [];
			error.errors.forEach((err) => {
				explanation.push(err.message);
			});
			throw new AppError(explanation, StatusCodes.BAD_REQUEST);
		}
		throw new AppError(
			"Cannot Create an Aiport Object",
			StatusCodes.INTERNAL_SERVER_ERROR
		);
	}
}

async function getAirports() {
	try {
		const airports = await airportRepository.getAll();
		return airports;
	} catch (error) {
		throw new AppError(
			"Cannot fetch data of all the airports",
			StatusCodes.INTERNAL_SERVER_ERROR
		);
	}
}

async function getAirport(id) {
	try {
		const airport = await airportRepository.get(id);
		return airport;
	} catch (error) {
		if (error.statusCode == StatusCodes.NOT_FOUND) {
			throw new AppError(
				"The airport you requested to get is not present in the database",
				error.statusCode
			);
		}
		throw new AppError(
			"Something went wrong",
			StatusCodes.INTERNAL_SERVER_ERROR
		);
	}
}

async function destroyAirport(id) {
	try {
		const response = await airportRepository.delete(id);
		return response;
	} catch (error) {
		if (error.statusCode == StatusCodes.NOT_FOUND) {
			throw new AppError(
				"The airport you requested to delete is not present in the database",
				error.statusCode
			);
		}
		throw new AppError(
			"Something went wrong",
			StatusCodes.INTERNAL_SERVER_ERROR
		);
	}
}

async function updateAirport(data, id) {
	try {
		const response = await airportRepository.update(data, id);
		const airport = await getAirport(id);
		return airport;
	} catch (error) {
		if (error.statusCode == StatusCodes.NOT_FOUND) {
			throw new AppError(
				"The airport you requested to update is not present in the database",
				error.statusCode
			);
		}
		throw new AppError(
			"Something went wrong",
			StatusCodes.INTERNAL_SERVER_ERROR
		);
	}
}
module.exports = {
	createAirport,
	getAirports,
	getAirport,
	destroyAirport,
	updateAirport,
};
