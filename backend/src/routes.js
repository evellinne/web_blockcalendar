const express = require('express');
const ControllerUsuario = require('./controllers/ControllerUsuario');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({hello: 'World'});
});

//Rota de cadastro de usuário
routes.get('/usuarios', ControllerUsuario.index);
routes.post('/cadastro', ControllerUsuario.store);


module.exports = routes;