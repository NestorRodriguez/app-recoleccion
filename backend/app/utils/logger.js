/**
 * Utilidad para registrar los LOG de la aplicación
 * @author jaimecastrillon@gmail.com
 */

const log4js = require('log4js');
const moment = require('moment');
const {appPath} = require('../config');

require('./fileline');

module.exports = () => {
    log4js.configure({
        appenders: {
            trappsporte: {
                type: 'file',
                filename: `${appPath}/logs/${moment().format('YYYYMMDD')}.log`
            }
        },
        categories: {
            default: {
                appenders: ['trappsporte'],
                level: 'info'
            }
        }
    });
    return log4js.getLogger('trappsporte');
};
