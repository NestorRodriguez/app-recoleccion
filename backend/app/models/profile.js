/**
 * Modelo de la tabla perfiles
 * @author jaimecastrillon@gmail.com
 */
const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('profiles', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'nombre es requerido'
            },
            len: {
                args: [5, 20],
                msg: "nombre debe tener minimo 3 y máximo 20 caracteres"
            },
            is: {
                args: ["^[a-z ]+$", 'i'],
                msg: "nombre debe contener solo letras"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("nombre no debe estar vacío");
                }
            },
            isUnique: function (name, next) {
                const self = this;
                return Validator.isUnique('../models/profile.js', self, next, {name}, 'nombre está asociado a otro perfil');
            }
        }
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        validate: {
            customValidator(value) {
                if (typeof(value) !== 'boolean') {
                    throw new Error("activo debe ser verdadero o falso");
                }
            },
        }
    }
}, {
    underscored: true,
    timestamps: true,
});
