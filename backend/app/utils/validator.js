/**
 * Utilidad para realizar las validaciones de los modelos en los servicios
 * @author jaimecastrillon@gmail.com
 */

const Logger = require('./logger')();
const Database = require('../database');

module.exports = ({
    errors: (validation) => {
        let message = [];
        const {errors} = validation;
        if (errors) {
            errors.map(error => {
                message.push(error.message);
            });
            Logger.error(`[action: validation][msg: ${message.join(', ')}][line:${__line}:${__filename}]`);
        } else {
            Logger.warn(`[action: validation][msg: ${validation.message}][line:${__line}:${__filename}]`);
        }
        return {
            type: (errors) ? 'warning' : 'error',
            title: (errors) ? 'Validación de datos' : 'Error de datos',
            description: (errors) ? message.join(', ') : 'Error en el proceso de los datos',
        };
    },
    isUnique: (pathModel,self, next, field, message) => {
        const Model = Database.import(pathModel);
        Model.findOne({where: field})
            .then((user) => {
                if (user && self.id !== user.id) {
                    return next(message);
                }
                return next();
            })
            .catch((err) => {
                return next(err);
            });
    }
});
