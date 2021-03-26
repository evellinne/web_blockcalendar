const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');
const Procedimento = require('../models/Procedimento');
const UsuarioProcedimento = require('../models/UsuarioProcedimento');

const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Procedimento.init(connection);
UsuarioProcedimento.init(connection);


Usuario.associate(connection.models);
Procedimento.associate(connection.models);
UsuarioProcedimento.associate(connection.models);

module.exports = connection;