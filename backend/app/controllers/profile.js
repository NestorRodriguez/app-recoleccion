/**
 * Controlador de Perfiles de usuario
 * @author jaimecastrillon@gmail.com
 */

const Controller = require('./controller');
const Service = require('../services/profile');

class ProfileController extends Controller {

    constructor(){
        super(Service);
    }
}

module.exports = ProfileController;
