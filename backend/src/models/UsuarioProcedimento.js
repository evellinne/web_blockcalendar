const { Model, DataTypes} = require('sequelize');

class UsuarioProcedimento extends Model {
    static init (sequelize){
        super.init({
            hora: DataTypes.INTEGER,
            usuario_id: DataTypes.INTEGER,
            procedimento_id: DataTypes.INTEGER,
            dia: DataTypes.DATE
        }, {
            sequelize
        });
    }
};

module.exports = UsuarioProcedimento;