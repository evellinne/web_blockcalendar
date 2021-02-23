module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'admin',
    password: 'admin',
    database: 'projetoweb',
    define: {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    }
};