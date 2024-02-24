const {StatusCodes} = require('http-status-codes');

const {AirplaneRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
   try {
      const airplane = await airplaneRepository.create(data);
      return airplane;
   } catch (error) {
      if(error.name == 'SequelizeValidationError') {
         let explanation=[];
         error.errors.forEach((err) => {
            explanation.push(err.message)
         });
         throw new AppError(explanation, StatusCodes.BAD_REQUEST);
      }
      throw new AppError("Cannot Create an Aiprlane Object", StatusCodes.INTERNAL_SERVER_ERROR);
   }
}

async function getAirplanes() {
   try {
      const airplanes = await airplaneRepository.getAll();
      return airplanes;
   }
   catch(error) {
      throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
   }
}

async function getAirplane(id) {
   try {
      const airplane = await airplaneRepository.get(id);
      return airplane;
   }
   catch(error) {
      if(error.statusCode == StatusCodes.NOT_FOUND) {
			throw new AppError("The airplane you requested to get is not present in the database",error.statusCode);
      }
      throw new AppError('Something went wrong', StatusCodes.INTERNAL_SERVER_ERROR);
   }
}

async function destroyAirplane(id) {
	try {
		const response = await airplaneRepository.delete(id);
		return response;
	} catch (error) {
		if (error.statusCode == StatusCodes.NOT_FOUND) {
			throw new AppError("The airplane you requested to delete is not present in the database",error.statusCode);
		}
		throw new AppError("Something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
	}
}

async function updateAirplane(data, id) {
	try {
		const response = await airplaneRepository.update(data,id);
      const airplane = await getAirplane(id);
		return airplane;
	} catch (error) {
		if (error.statusCode == StatusCodes.NOT_FOUND) {
			throw new AppError("The airplane you requested to update is not present in the database",error.statusCode);
		}
		throw new AppError("Something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
	}
}
module.exports = {
   createAirplane,
   getAirplanes,
   getAirplane,
   destroyAirplane,
   updateAirplane
}