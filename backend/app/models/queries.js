/**
 * Funcionalidad para obtener consultas específicas
 * @author jaimecastrillon@gmail.com
 */

const queries = require('./queries/queries.json');
const Sequelize = require('sequelize');
const Database = require('../database');

module.exports = ({
    get: async (query, params) => {
        return await Database.query(queries[query], { replacements: params, type: Sequelize.QueryTypes.SELECT });
    }
});
