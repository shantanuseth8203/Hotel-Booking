const CrudRepository = require("./crud-repository");

const {cities} = require("../models");

class CityRepository extends CrudRepository {
	constructor() {
		super(cities);
	}
}

module.exports = CityRepository;