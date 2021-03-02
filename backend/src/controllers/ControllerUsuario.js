const Usuario = require("../models/Usuario");

module.exports = {
    async all(req, res) {
        console.log("Retornar todos usuarios");
        const usuarios = await Usuario.findAll();
        return res.json(usuarios);
    },
    async store(req, res) {
        console.log("Cadastrar um usuário");
        const { tipo, nome, email, telefone, senha } = req.body;
        
        const usuario = await Usuario.create({
            tipo: 1, 
            nome: nome, 
            email: email, 
            telefone: telefone, 
            senha: senha 
        });

        return res.json(usuario);
    },
    async index(req, res) {
        console.log("Consultar usuário por ID");
        const { id } = req.body;

        const usuario = await Usuario.findByPk(id);
        return res.json(usuario);
    },
    async remove(req, res) {
        console.log("Remover usuário por ID");
        const { id } = req.body;

        const usuario = await Usuario.findByPk(id);
        if(usuario){
            usuario.destroy();
            res.json({"Mensagem":`Usuário de id = ${id} deletado`});
        }
        else
            res.json({"Mensagem":`Usuário de id = ${id} não existe`});
        return res.send();
    },
    async edit(req, res) {
        console.log("Editar usuário");
        const { id, nome, email, telefone, senha } = req.body;

        const usuario = await Usuario.findByPk(id);
        if(usuario){
            usuario.update({
                nome: nome, 
                email: email, 
                telefone: telefone, 
                senha: senha
            });
            res.json(usuario);
        }
        else
            res.json({"Mensagem":`Usuário de id = ${id} não existe`});
        return res.send();
    }

};