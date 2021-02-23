const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Usuario = require('../models/Usuario');

const connection = new Sequelize(dbConfig);

Usuario.init(connection);

/*Sequelize.authenticate().then(() => {
    console.log('Conexão estabelecida');
}).catch(err => {
    console.error('Não foi possível se conectar com o banco de dados', err);
});*/