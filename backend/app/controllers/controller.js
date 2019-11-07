/**
 * Clase Controller base para implementar la funcionalidad de la clase Service
 * @author jaimecastrillon@gmail.com
 */

class Controller {

    constructor(service) {
        this.service = new service();
    }

    async create(data) {
        try {
            return await this.service.create(data);
        } catch (error) {
            return await Promise.reject(error);
        }
    }

    async update(id, data) {
        try {
            return await this.service.update(id, data);
        } catch (error) {
            return await Promise.reject(error);
        }
    }

    async destroy(id) {
        try {
            return await this.service.destroy(id);
        } catch (error) {
            return await Promise.reject(error);
        }
    }

    async all() {
        try {
            return await this.service.all();
        } catch (error) {
            return await Promise.reject(error);
        }
    }

    async one(id) {
        try {
            return await this.service.one(id);
        } catch (error) {
            return await Promise.reject(error);
        }
    }

    async query(query, params) {
        try {
            return await this.service.query(query, params);
        } catch (error) {
            return await Promise.reject(error);
        }
    }
}

module.exports = Controller;
