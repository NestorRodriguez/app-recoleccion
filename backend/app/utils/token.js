/**
 * Middleware que implementa la generación y validación de tokens de usuarios
 * @author jaimecastrillon@gmail.com
 */

const jwt = require('jsonwebtoken');
const moment = require('moment');
const {sessionEncrypt, sessionToken, sessionTime} = require('../config');
const encryptor = require('simple-encryptor')(sessionEncrypt);

module.exports = ({

    createToken: (user) => {
        try {
            let payload = {
                sub: encryptor.encrypt(user),
                name: user.name,
                iat: moment().add(sessionTime, 'hour').unix()
            };
            return jwt.sign(payload, sessionToken);
        } catch (e) {
            return false;
        }
    },

    validateToken: (token) => {
        try {
            let payload = jwt.verify(token, sessionToken);
            if (!payload) {
                return false;
            } else {
                payload.user = encryptor.decrypt(payload.sub);
                return payload;
            }
        } catch (e) {
            return false;
        }
    },
});
