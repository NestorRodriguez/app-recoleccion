/**
 * Controlador de Perfiles de usuario
 * @author jaimecastrillon@gmail.com
 */

const Controller = require('./controller');
const Service = require('../services/query');

class QueryController extends Controller {

    constructor(){
        super(Service);
    }
}

module.exports = QueryController;
