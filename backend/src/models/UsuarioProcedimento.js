const { Model, DataTypes} = require('sequelize');

class UsuarioProcedimento extends Model {
    static init (sequelize){
        super.init({
            hora: DataTypes.INTEGER,
            //usuario_id: DataTypes.INTEGER,
            //procedimento_id: DataTypes.INTEGER,
            dia: DataTypes.DATE
        }, {
            sequelize
        });
    }
    static associate(models){
        this.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario'});
        this.belongsTo(models.Procedimento, { foreignKey: 'procedimento_id', as: 'procedimento'});
    }
};

module.exports = UsuarioProcedimento;