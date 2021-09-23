'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/e_bookmarker'
);

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
};