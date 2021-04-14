const { Op } = require('sequelize');
const Usuario = require('../models/Usuario');
const jwtoken  = require('jsonwebtoken');
//const bcrypt = require('bcryptjs');
const authConfig = require('../config/auth.json');
const nodemailer =require('nodemailer');
const MailCredential = require('../config/credential');

const transporter = nodemailer.createTransport(MailCredential);


module.exports = {
    async all(req, res) {
        console.log("Retornar todos usuarios");
        const usuarios = await Usuario.findAll();
        usuarios.forEach(function(usuario){
            usuario.senha = undefined;
        });
        return res.json(usuarios);
    },
    async store(req, res) {
        console.log("Cadastrar um usuário");
        //Pegar itens da requisição
        const { tipo, nome, email, telefone, senha } = req.body;

        //Verificar se já tem um usuário com este e-mail ou senha
        const usuarioExiste = await Usuario.findOne({
            where: {  
                [Op.or]: [{email: email}, {telefone: telefone}]
            }
        });
        if(usuarioExiste){
            return res.status(400).send({error: 'Já existe um usuário cadastrado com este e-mail ou telefone'});
        }

        //Criptografar a senha
        //const hash = await bcrypt.hash(senha, 10);
        
        //Criar usuário
        const usuario = await Usuario.create({
            tipo: 0,
            nome: nome, 
            email: email, 
            telefone: telefone, 
            senha: senha
            //senha: hash 
        });

        //Enviar email
        jwtoken.sign(
            {id: usuario.id},
            authConfig.secret,
            {
                expiresIn: 1800
            },
            (err, emailToken) => {
                const url = `http://localhost:8080/token/${emailToken}`;

                transporter.sendMail({
                    to: usuario.email,
                    subject: 'Confirmar E-mail',
                    html: `Por favor click <a href="${url}">${url}</a>`,
                });
            },
        );

        console.log("email enviado");
        
        //Não devolver a senha na resposta
        usuario.senha = undefined;


        return res.json(usuario);
    },
    async index(req, res) {
        console.log("Consultar usuário por ID");
        const { id } = req.body;

        const usuario = await Usuario.findByPk(id);
        
        if(usuario){
            usuario.senha = undefined;
            return res.json(usuario);
        } else {
            return res.json({"Mensagem":`Usuário de id = ${id} não existe`});
        }
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
            
            usuario.senha = undefined;
            res.json(usuario);
        }
        else
            res.json({"Mensagem":`Usuário de id = ${id} não existe`});
        return res.send();
    },
    async authenticate(req, res) {
        const { email, senha} = req.body;
        
        //Procurar se há usuário com este email
        const usuario = await Usuario.findOne({ where: {email: email} });
        if(!usuario){
            return res.status(400).send({error: 'Senha e/ou e-mail incorretos'});
        }

        //Comparar senha
        /*
        Quando a senha estiver encriptada
        if(!await bcrypt.compare(senha, usuario.senha)){
            return res.status(400).send({error: 'Senha e/ou e-mail incorretos'});
        }*/

        //Checar se é um usuário confirmado
        if(usuario.tipo == 0){

        }

        //Remover senha da resposta
        usuario.senha = undefined;

        //Verificar se o usuário confirmou email
        if(usuario.tipo == 0){
            return res.status(400).send({error: 'Por favor confirme seu e-mail'});
        }

        //gerar token que dura 3 dias
        const token = jwtoken.sign({id: usuario.id}, authConfig.secret, {
            expiresIn: 259200,
        });

        return res.send({ usuario, token });
    },
    async confirmation(req, res){
        var token =  req.params.token;
        var usuario_id;
        try{
            const { id } = jwtoken.verify(token, authConfig.secret);
            usuario_id = id;
            await Usuario.update({ tipo: 1 }, {where: {id} });
        } catch (err){
            res.status(400).send(err);
        }

        const usuario = await Usuario.findByPk(usuario_id);
        usuario.senha = undefined;
       
        return res.send({ usuario, "token":token });
    }
};