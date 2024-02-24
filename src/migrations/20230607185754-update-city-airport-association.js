'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Airports' , {
      type: 'foreign key',
      fields: ['cityId'],
      name: 'city_fk_constraint',
      references: {
        table: 'cities',
        field: 'id'
      },
      onDelete: 'CASCADE',
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint("Airports", "city_fk_constraint");
  }
};
