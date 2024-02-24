const { StatusCodes } = require("http-status-codes");

const { CityRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const cityRepository = new CityRepository();

async function createCity(data) {
	try {
		const city = await cityRepository.create(data);
		return city;
	} catch (error) {
		if (
			error.name == "SequelizeValidationError" ||
			error.name == "SequelizeUniqueConstraintError"
		) {
			let explanation = [];
			error.errors.forEach((err) => {
				explanation.push(err.message);
			});
			throw new AppError(explanation, StatusCodes.BAD_REQUEST);
		}
		throw new AppError(
			"Cannot Create an City Object",
			StatusCodes.INTERNAL_SERVER_ERROR
		);
	}
}

async function destroyCity(id) {
	try {
		const response = await cityRepository.delete(id);
		return response;
	} catch (error) {
		if (error.statusCode == StatusCodes.NOT_FOUND) {
			throw new AppError(
				"The city you requested to delete is not present in the database",
				error.statusCode
			);
		}
		throw new AppError(
			"Something went wrong",
			StatusCodes.INTERNAL_SERVER_ERROR
		);
	}
}

async function updateCity(data, id) {
	try {
		const response = await cityRepository.update(data, id);
		// const city = await getCity(id);
		return response;
	} catch (error) {
		if (error.statusCode == StatusCodes.NOT_FOUND) {
			throw new AppError(
				"The city you requested to update is not present in the database",
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
	createCity,
	destroyCity,
	updateCity,
};
