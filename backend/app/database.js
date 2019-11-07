'use strict';

const Sequelize = require('sequelize');
const { db } = require('./config');
const sequalize = new Sequelize(db.database, db.user, db.access, {
    host: db.host,
    dialect: db.dialect,
    pool: db.pool
});

sequalize.authenticate()
    .then(() => {
        console.log('Conexión exitosa.');
    })
    .catch(error => {
        console.error('Error de conexión:', error);
    });
module.exports = sequalize;
