'use strict';
//const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },
      tipo: {
          allowNull: false,
          type: Sequelize.INTEGER
      },
      nome: {
          allowNull: false,
          type: Sequelize.STRING(40),
          validate: {
              len: [2, 40]
          }
      },
      email: {
          unique: true,
          allowNull: false,
          type: Sequelize.STRING(40),
          validate: {
              len: [2, 40]
          }
      },
      telefone: {
          unique: true,
          allowNull: false,
          type: Sequelize.STRING(15),
          validate: {
              len: [2, 15]
          }
      },
      senha: {
          allowNull: false,
          type: Sequelize.STRING(15),
          validate: {
              len: [2, 15]
          }
      }
    }, {
      timestamps: false,
      //freezeTableName: true,
      /*indexes: [
        {
          unique: true,
          fields: ['telefone']
        },
        {
          unique: true,
          fields: ['email']
        }
      ],*/
      /*instanceMethods: {
        generateHash(senha) {
            return bcrypt.hash(senha, bcrypt.genSaltSync(8));
        },
        validPassword(senha) {
            return bcrypt.compare(senha, this.senha);
        }
    }*/
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario');
  }
};