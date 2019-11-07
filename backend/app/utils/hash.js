/**
 * Middleware que implementa la generación y validación de contraseñas de usuarios
 * @author jaimecastrillon@gmail.com
 */

const bcrypt = require('bcrypt');

module.exports = ({

    createHash: (string, saltRounds = 10) => {
        return new Promise((resolve, reject) => {
            try {
                bcrypt.hash(string, saltRounds, (error, hash) => {
                    if (error) {
                        reject(null)
                    } else {
                        resolve(hash);
                    }
                });
            } catch (e) {
                reject(null);
            }
        });
    },

    validateHash: (string, hash) => {
        return new Promise((resolve, reject) => {
            try {
                bcrypt.compare(string, hash, (error, response) => {
                    if (error) {
                        reject(null);
                    } else {
                        resolve(response);
                    }
                });
            } catch (e) {
                reject(null);
            }
        });
    }
});
