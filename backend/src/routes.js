const express = require('express');
const ControllerUsuario = require('./controllers/ControllerUsuario');
const ControllerProcedimento = require('./controllers/ControllerProcedimento');
const ControllerUsuarioProcedimento = require('./controllers/ControllerUsuarioProcedimento');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({hello: 'world'});
});

//Autenticação
routes.post('/login', ControllerUsuario.authenticate); 
routes.get('/authentication/:token', ControllerUsuario.confirmation);


//Rota de cadastro de usuário
routes.get('/usuarios', ControllerUsuario.all);
routes.post('/cadastro', ControllerUsuario.store);
routes.post('/usuario', ControllerUsuario.index);
routes.delete('/usuario', ControllerUsuario.remove);
routes.put('/usuario', ControllerUsuario.edit);

//Procedimento
routes.get('/procedimento', ControllerProcedimento.all);
routes.post('/cadastrar-procedimento', ControllerProcedimento.store);
routes.post('/procedimento', ControllerProcedimento.index);
routes.delete('/procedimento', ControllerProcedimento.remove);
routes.put('/procedimento', ControllerProcedimento.edit);

//UsuarioProcedimento
routes.get('/usuarioprocedimentos', ControllerUsuarioProcedimento.all);
routes.post('/usuarioprocedimentos', ControllerUsuarioProcedimento.index);
routes.post('/cadastrar-horarios', ControllerUsuarioProcedimento.store);
routes.put('/usuarioprocedimentos', ControllerUsuarioProcedimento.edit);
routes.delete('/usuarioprocedimentos', ControllerUsuarioProcedimento.remove);
routes.get('/procedimentos-livres', ControllerUsuarioProcedimento.freeTime);
routes.get('/procedimentos-marcados', ControllerUsuarioProcedimento.appointment);
routes.post('/marcar-horario', ControllerUsuarioProcedimento.mark);


module.exports = routes;