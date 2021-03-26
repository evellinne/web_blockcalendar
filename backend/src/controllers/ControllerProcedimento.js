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
    },
    async index(req, res) {
        console.log("Consultar procedimento por ID");
        const { id } = req.body;

        const procedimento = await Procedimento.findByPk(id);
        return res.json(procedimento);
    },
    async remove(req, res) {
        console.log("Remover procedimento por ID");
        const { id } = req.body;

        const procedimento = await Procedimento.findByPk(id);
        if(procedimento){
            procedimento.destroy();
            res.json({"Mensagem":`procedimento de id = ${id} deletado`});
        }
        else
            res.json({"Mensagem":`procedimento de id = ${id} não existe`});
        return res.send();
    },
    async edit(req, res) {
        console.log("Editar procedimento");
        const { id, duracao, nome } = req.body;

        const procedimento = await Procedimento.findByPk(id);

        if(procedimento){
            procedimento.update({
                duracao: duracao, 
                nome: nome
            });
            res.json(procedimento);
        }
        else
            res.json({"Mensagem":`procedimento de id = ${id} não existe`});
        return res.send();
    }
};