/**
 * Servicio que implementa la funcionalidad del modelo Profile
 * @author jaimecastrillon@gmail.com
 */

const Database = require('../../app/database');
const Model = Database.import('../models/profile');
const Service = require('./service');

class ProfileService extends Service{

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id", "name", "active"]
            },
            one: {
                attributes: ["id", "name", "active"]
            },
            all: {
                attributes: ["id", "name", "active"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = ProfileService;
