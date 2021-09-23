'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Book = loader.database.define(
  'books',
  {
    bookName: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    pageCount:{
      type: Sequelize.INTEGER,
      allowNull: false
    },
    memo: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    createdBy: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
    indexes: [
      {
        fields: ['createdBy']
      }
    ]
  }
);

module.exports = Book;