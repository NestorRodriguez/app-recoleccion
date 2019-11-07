/**
 * Middleware para validar si la petición se realiza con un usuario activo en el sistema
 * @author jaimecastrillon@gmail.com
 */

const moment = require('moment');
const Logger = require('../utils/logger')();
const Token = require('../utils/token');
const Messages = require('../utils/messages');

module.exports = ({
    isAuth:(req, res, next) => {
        try{
            const { headers: { authorization } } = req;
            if(authorization){

                const payload = Token.validateToken(authorization.split(' ').pop());
                if(payload){
                    if(payload.iat < moment().unix()){
                        res.status(401).send(Messages('AUTH_EXPIRED'));
                    } else {
                        const token = Token.createToken(payload.user);
                        res.header('Authorization', `Bearer ${token}`);
                        next();
                    }
                } else {
                    res.status(403).send(Messages('AUTH_ERROR'));
                }
            } else {
                res.status(403).send(Messages('AUTH_ERROR'));
            }
        } catch (error) {
            res.status(403).send(Messages('AUTH_ERROR'));
        }
    }
});
