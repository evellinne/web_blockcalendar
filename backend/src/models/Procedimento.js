const { Model, DataTypes} = require('sequelize');

class Procedimento extends Model {
    static init (sequelize){
        super.init({
            duracao: DataTypes.INTEGER,
            nome: DataTypes.STRING,
        }, {
            sequelize
        });
    }
    static associate (models){
        this.hasMany(models.UsuarioProcedimento, { foreignKey: 'procedimento_id', as: 'usuarioprocedimentos'});
    }
};

module.exports = Procedimento;