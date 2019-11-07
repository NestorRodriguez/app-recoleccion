/**
 * Servicio que implementa la funcionalidad del modelo User
 * @author jaimecastrillon@gmail.com
 */

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const Hash = require('../utils/hash');

const Database = require('../../app/database');
const Model = Database.import('../models/user');
const Service = require('./service');

const Response = require('../routing/response');
const Messages = require('../utils/messages');
const Logger = require('../utils/logger')();

class UserService extends Service {

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id", "name", "email", "username", "idProfile", "active"]
            },
            one: {
                attributes: ["id", "name", "email", "username", "idProfile", "active"]
            },
            all: {
                attributes: ["id", "name", "email", "username", "idProfile", "active"]
            },
        };
        super(Model, modelOptions);
    }

    async login(username, access) {
        try {
            const user = await this.model.scope('withPassword').findOne({
                where: {
                    [Op.or]: [{ username: username }, { email: username }]
                }
            });

            if(user && access) {
                if(user.active){
                    const isValid = await Hash.validateHash(access, user.access);
                    if(isValid){
                        const userData = {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            username: user.username,
                            idProfile: user.idProfile,
                            lastLogin: user.lastLogin,
                            acceptTerms: user.acceptTerms
                        };
                        return Response.success(userData);
                    } else {
                        await Promise.reject(Response.error(Messages('LOGIN_NOT_EXIST'), 404));
                    }
                } else {
                    await Promise.reject(Response.error(Messages('LOGIN_INACTIVE'), 403));
                }
            } else {
                await Promise.reject(Response.error(Messages('LOGIN_NOT_EXIST'), 404));
            }
        } catch (error) {
            Logger.error(`[action: login][msg: ${JSON.stringify(error)}][line:${__line}:${__filename}]`);
            await Promise.reject(Response.error(error.error || Messages('LOGIN_ERROR'), error.status || 500));

        }
    }

}

module.exports = UserService;
