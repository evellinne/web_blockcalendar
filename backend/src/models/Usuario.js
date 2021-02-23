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
};

module.exports = Usuario;