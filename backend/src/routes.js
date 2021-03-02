const express = require('express');
const ControllerUsuario = require('./controllers/ControllerUsuario');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({hello: 'World'});
});

//Rota de cadastro de usuário
routes.get('/usuarios', ControllerUsuario.all);
routes.post('/cadastro', ControllerUsuario.store);
routes.post('/usuario', ControllerUsuario.index);
routes.delete('/usuario', ControllerUsuario.remove);
routes.put('/usuario', ControllerUsuario.edit);


module.exports = routes;