const UsuarioProcedimento = require("../models/UsuarioProcedimento");
const { Op } = require('sequelize');

module.exports = {
    async all(req, res) {
        console.log("Retornar todos usuarioProcedimentos");
        const usuarioProcedimentos = await UsuarioProcedimento.findAll();
        return res.json(usuarioProcedimentos);
    },
    async store(req, res) {
        console.log("Cadastrar um usuário");
        let procedimentos = req.body;
        let i = 0;
        let loop = true;

        do {
            procedimentos[i].usuario_id = 1;
            procedimentos[i].procedimento_id = 1;
            i++;
            if(procedimentos[i] == undefined || procedimentos[i] == null)
                loop = false;
        } while (loop);

       const usuarioProcedimentos = await UsuarioProcedimento.bulkCreate(procedimentos)
            .then(function(usuariosProcesimentos){
                return res.json(usuariosProcesimentos);
            }).catch(function(err){
                return res.json({error: err});
            });
    },
    async index(req, res) {
        console.log("Consultar usuarioprocedimento por ID");
        const { id } = req.body;

        const usuarioProcedimentos = await UsuarioProcedimento.findByPk(id, {
            include: [
                {association: 'usuario'},
                {association:'procedimento'}
            ]
        });

        if(!usuarioProcedimentos){
            return res.status(400).json({ error: 'UsuarioProcedimento não existe'});
        }
        usuarioProcedimentos.usuario_id = undefined;
        usuarioProcedimentos.procedimento_id = undefined;

        return res.json(usuarioProcedimentos);
    },
    async remove(req, res) {
        console.log("Remover usuarioprocedimento por ID");
        const { id } = req.body;
        const usuarioprocedimento = await UsuarioProcedimento.findByPk(id);
        if(usuarioprocedimento){
            usuarioprocedimento.destroy();
            res.json({"Mensagem":`usuarioprocedimento de id = ${id} deletado`});
        }
        else
            res.json({"Mensagem":`usuarioprocedimento de id = ${id} não existe`});
        return res.send();
    },
    async edit(req, res) {
        console.log("Editar usuarioprocedimento");
        const { id, hora, dia } = req.body;

        const usuarioprocedimento = await UsuarioProcedimento.findByPk(id);
        if(usuarioprocedimento){
            usuarioprocedimento.update({
                hora: hora, 
                dia: dia
            });
            res.json(usuarioprocedimento);
        }
        else
            res.json({"Mensagem":`usuarioprocedimento de id = ${id} não existe`});
        return res.send();
    },
    async freeTime(req, res) {
        console.log("Consultar horários livres");

        const usuarioprocedimento = await UsuarioProcedimento.findAll({ where: [{usuario_id: 1}, {procedimento_id: 1}] });

        if(usuarioprocedimento){
            res.json(usuarioprocedimento);
        }
        else {
            res.json({error: 'Sem horários livres'});
        }
        return res.send();
    },
    async mark(req, res) {
        console.log("Marcar um horário");
        const { id, usuario, procedimento } = req.body;

        const usuarioprocedimento = await UsuarioProcedimento.findByPk(id);
        
        if(!usuarioprocedimento){
            return res.status(400).json({ error: 'UsuarioProcedimento não existe'});
        } else {
            if(usuarioprocedimento.usuario_id == 1 && usuarioprocedimento.procedimento_id == 1){
                usuarioprocedimento.update({
                    usuario_id: usuario, 
                    procedimento_id: procedimento
                });
                res.json(usuarioprocedimento);
            } else {
                return res.status(400).json({ error: 'UsuarioProcedimento não está livre'});
            }

        }
        return res.json(usuarioProcedimentos);
    },
    async appointment(req, res) {
        console.log("Consultar procedimentos marcados");

        const usuarioprocedimentos = await UsuarioProcedimento.findAll({
            where: {  
                usuario_id: {[Op.ne]: 1 },
                procedimento_id: {[Op.ne]: 1 }
            },
            include: [
                {association: 'usuario'},
                {association:'procedimento'}
            ]
        });

        usuarioprocedimentos.forEach(function(proc){
            proc.usuario_id = undefined;
            proc.procedimento_id = undefined;
        });
        
        if(!usuarioprocedimentos){
            return res.status(400).json({ error: 'Sem consultas marcadas'});
        } 

        return res.json(usuarioprocedimentos);
    }
};