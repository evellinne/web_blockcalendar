const Procedimento = require("../models/Procedimento");

module.exports = {
    async all(req, res) {
        console.log("Retornar todos os procedimentos");
        const procedimentos = await Procedimento.findAll();

        return res.json(procedimentos);
    },
    async store(req, res) {
        console.log("Cadastrar um procedimento");
        const { duracao, nome } = req.body;
        
        const procedimento = await Procedimento.create({
            duracao: duracao, 
            nome: nome
        });

        return res.json(procedimento);
    }
};