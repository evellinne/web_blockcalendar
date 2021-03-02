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
};

module.exports = Procedimento;