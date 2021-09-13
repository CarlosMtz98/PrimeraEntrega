const { Sequelize, STRING } = require('sequelize');

const sequelize = new Sequelize('mtc_cmr', 'user2', 'root', {
    dialect: 'mysql',
    host: '52.87.253.96'
});

const User = sequelize.define('usuarios', {
    usuario: {
        type: STRING(30),
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: String(30),
        allowNull: false
    }
})

sequelize.sync()
    .then(res => {
        console.log(res);
    })
    .catch(err => 
        console.error(err))
