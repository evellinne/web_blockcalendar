const UsuarioProcedimento = require("../models/UsuarioProcedimento");

module.exports = {
    async all(req, res) {
        console.log("Retornar todos usuarioProcedimentos");
        const usuarioProcedimentos = await UsuarioProcedimento.findAll();
        return res.json(usuarioProcedimentos);
    },
    async store(req, res) {
        console.log("Cadastrar um usuário");
        const { hora, usuario_id, procedimento_id, dia } = req.body;
        
        const usuarioProcedimento = await UsuarioProcedimento.create({
            hora: hora, 
            usuario_id: usuario_id, 
            procedimento_id: procedimento_id, 
            dia: dia
        });

        return res.json(usuarioProcedimento);
    }
};