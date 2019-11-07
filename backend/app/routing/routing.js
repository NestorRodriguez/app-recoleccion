/**
 * Funcionalidad para definir peticiones que pueden ser recibidas por los Controladores
 * @author jaimecastrillon@gmail.com
 */

const Token = require('../utils/token');

module.exports = (controller => {

    const ctrl = controller;

    const onSuccess = (res, success) => {
        res.status(success.status).send(success.data);
    };

    const onError = (res, error) => {
        res.status(error.status).send(error.error)
    };

    return {
        /**
         * Login de usuarios
         */
        login(req, res) {
            const user = req.body.username || '';
            const access = req.body.password || '';
            ctrl.login(user, access)
                .then(success => {
                    const token = Token.createToken(success.data);
                    res.header('Authorization', `Bearer ${token}`);
                    onSuccess(res, success);
                })
                .catch(error => onError(res, error));
        },

        /**
         * Funcionalidad para la creación de registros
         */
        create(req, res) {
            const data = req.body;
            ctrl.create(data)
                .then(success => onSuccess(res, success))
                .catch(error => onError(res, error));
        },

        /**
         * Funcionalidad para la actualización de registros
         */
        update(req, res) {
            const id = req.params.id;
            const data = req.body;
            ctrl.update(id, data)
                .then(success => onSuccess(res, success))
                .catch(error => onError(res, error));
        },

        /**
         * Funcionalidad para la eliminación de registros
         */
        destroy(req, res) {
            const id = req.params.id;
            ctrl.destroy(id)
                .then(success => onSuccess(res, success))
                .catch(error => onError(res, error));
        },

        /**
         * Funcionalidad para consultar todos los registros
         */
        all(req, res) {
            ctrl.all()
                .then(success => onSuccess(res, success))
                .catch(error => onError(res, error));
        },

        /**
         * Funcionalidad para consultar un solo registro
         */
        one(req, res) {
            const id = req.params.id;
            ctrl.one(id)
                .then(success => onSuccess(res, success))
                .catch(error => onError(res, error));
        },

        /**
         * Funcionalidad para ejecutar consultas configuradas en el archivo:
         * /app/models/queries/queries.json
         */
        query(req, res) {
            const query = req.body.query;
            const params = req.body.params;
            ctrl.query(query, params)
                .then(success => onSuccess(res, success))
                .catch(error => onError(res, error));
        },
    }

});
