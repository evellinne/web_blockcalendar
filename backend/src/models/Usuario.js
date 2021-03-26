const { Model, DataTypes} = require('sequelize');

class Usuario extends Model {
    static init (sequelize){
        super.init({
            tipo: DataTypes.INTEGER,
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            telefone: DataTypes.STRING,
            senha: DataTypes.STRING,
        }, {
            sequelize
        });
    }
    /*static beforeCreate(usuario) {
        const hash = bcrypt.hash(usuario.senha, 10);
        usuario.senha = hash;
    }*/
    static associate (models){
        this.hasMany(models.UsuarioProcedimento, { foreignKey: 'usuario_id', as: 'procedimentosusuario'});
    }
};

module.exports = Usuario;