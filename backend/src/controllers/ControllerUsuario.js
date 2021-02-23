const Usuario = require("../models/Usuario");

module.exports = {
    async index(req, res) {
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
    }
};