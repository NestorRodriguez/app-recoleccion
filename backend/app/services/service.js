/**
 * Clase Service encargada de realizar el proceso de validación y almacenamiento en la base de datos
 * @author jaimecastrillon@gmail.com
 */

const Sequelize = require('sequelize');
const Queries = require('../models/queries');
const Validator = require('../utils/validator');
const Response = require('../routing/response');
const Messages = require('../utils/messages');
const Logger = require('../utils/logger')();

class Service {

    constructor(model, modelOptions = {}) {
        this.model = model;
        this.modelOptions = modelOptions;
    }

    _invalidId() {
        return Promise.reject(Response.error(Messages('INVALID_ID'), 400));
    }

    _createFilter(data) {
        const attributes = {};
        this.modelOptions.create.attributes.map(item => { Object.assign(attributes, {[item] : data[item]})});
        return attributes;
    }

    create(data) {
        return new Promise((resolve, reject) => {
            try {
                return this.model.create(data)
                    .then(result => {
                        const { create: { attributes } } = this.modelOptions;
                        const data = (attributes.length) ? this._createFilter(result) : result;
                        resolve(Response.success(data));
                    })
                    .catch(Sequelize.ValidationError, error => {
                        reject(Response.error(Validator.errors(error), 422));
                    })
                    .catch(error => {
                        Logger.error(`[action: create][msg: ${JSON.stringify(error)}][line:${__line}:${__filename}]`);
                        reject(Response.error(Messages('CREATE_ERROR'), 400));
                    });
            } catch (error) {
                Logger.error(`[action: create][msg: ${JSON.stringify(error)}][line:${__line}:${__filename}]`);
                reject(Response.error(error.error || Messages('CREATE_ERROR'), error.status || 500));
            }
        });
    }

    update(id, data) {
        return new Promise((resolve, reject) => {
            try {
                return this.model.update(data, {where: {id}})
                    .then(data => {
                        const [result] = data;
                        if (result) {
                            resolve(Response.success({updated: true, id}));
                        } else {
                            reject(Response.error(Messages('NOT_EXIST'), 404));
                        }
                    })
                    .catch(Sequelize.ValidationError, error => {
                        reject(Response.error(Validator.errors(error), 422));
                    })
                    .catch(error => {
                        Logger.error(`[action: update][msg: ${JSON.stringify(error)}][line:${__line}:${__filename}]`);
                        reject(Response.error(Messages('UPDATE_ERROR'), 400));
                    });
            } catch (error) {
                Logger.error(`[action: update][msg: ${JSON.stringify(error)}][line:${__line}:${__filename}]`);
                reject(Response.error(error.error || Messages('UPDATE_ERROR'), error.status || 500));
            }
        });
    }

    async destroy(id) {
        try {
            if (isNaN(id)) {
                return await this._invalidId();
            } else {
                const data = await this.model.destroy({where: {id}});
                return (data)
                    ? Response.success({deleted: true, id})
                    : await Promise.reject(Response.error(Messages('NOT_EXIST'), 404));
            }
        } catch (error) {
            Logger.error(`[action: destroy][msg: ${JSON.stringify(error)}][line:${__line}:${__filename}]`);
            await Promise.reject(Response.error(error.error || Messages('DELETE_ERROR'), error.status || 500));
        }
    }

    async all() {
        try {
            const attributes = this.modelOptions.all.attributes;
            const data = (attributes.length)
                ? await this.model.findAll({attributes})
                : await this.model.findAll();
            return Response.success(data);
        } catch (error) {
            Logger.error(`[action: all][msg: ${JSON.stringify(error)}][line:${__line}:${__filename}]`);
            await Promise.reject(Response.error(Messages('DATA_ERROR'), 500));
        }
    }

    async one(id) {
        try {
            if (isNaN(id)) {
                return await this._invalidId();
            } else {
                const attributes = this.modelOptions.one.attributes;
                const where = (attributes.length)
                    ? {attributes, where: {id}}
                    : {where: {id}};
                const data = await this.model.findOne(where);
                return (data)
                    ? Response.success(data)
                    : await Promise.reject(Response.error(Messages('NOT_EXIST'), 404));
            }
        } catch (error) {
            Logger.error(`[action: one][msg: ${JSON.stringify(error)}][line:${__line}:${__filename}]`);
            await Promise.reject(Response.error(error.error || Messages('ONE_ERROR'), error.status || 500));
        }
    }

    async query(query, params) {
        try{
            const data = await Queries.get(query, params);
            return (data)
                ? Response.success(data)
                : await Promise.reject(Response.error(Messages('QUERY_ERROR'), 400));
        } catch (error) {
            Logger.error(`[action: query][msg: ${JSON.stringify(error)}][line:${__line}:${__filename}]`);
            await Promise.reject(Response.error(error.error || Messages('QUERY_ERROR'), error.status || 500));
        }
    }
}

module.exports = Service;
