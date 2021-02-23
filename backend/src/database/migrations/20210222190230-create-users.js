'use strict';

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
          allowNull: false,
          type: Sequelize.STRING(40),
          validate: {
              len: [2, 40]
          }
      },
      telefone: {
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
      indexes: [
        {
          unique: true,
          fields: ['telefone']
        },
        {
          unique: true,
          fields: ['email']
        }
      ]
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario');
  }
};
