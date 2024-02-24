"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Flight extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.belongsTo(models.Airplane, {
				foreignKey: "airplaneId",
				onDelete: "CASCADE",
				as: "Airplane_Details",
			});
      this.belongsTo(models.Airport, {
				foreignKey: "departureAirportId",
				onDelete: "CASCADE",
				as: "Departure_Airport",
			});
      this.belongsTo(models.Airport, {
				foreignKey: "arrivalAirportId",
				onDelete: "CASCADE",
				as: "Arrival_Airport",
			});
		}
	}
	Flight.init(
		{
			flightNumber: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			airplaneId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			departureAirportId: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			arrivalAirportId: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			arrivalTime: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			departureTime: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			boardingGate: {
				type: DataTypes.STRING,
			},
			totalSeats: { //total remaining seats
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "Flight",
		}
	);
	return Flight;
};
