/**
 * Controlador de Usuarios
 * @author jaimecastrillon@gmail.com
 */

const Controller = require('./controller');
const Service = require('../services/user');

class UserController extends Controller {

    constructor(){
        super(Service);
    }

    async login(user, access) {
        try {
            return await this.service.login(user, access);
        } catch (error) {
            return await Promise.reject(error);
        }
    }
}

module.exports = UserController;
