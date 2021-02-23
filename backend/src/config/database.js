module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'admin',
    password: 'admin',
    database: 'teste',
    //database: 'app_agendamento',
    define: {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    }
};