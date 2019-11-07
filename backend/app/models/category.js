/**
 * Modelo de la tabla categorias
 * @author jaimecastrillon@gmail.com
 */

module.exports = (sequelize, DataTypes) => sequelize.define('categories',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    },
    {
        schema: 'settings',
        underscored: true,
        timestamps: true,
        indexes: [
            {
                name: 'settings_category_name',
                unique: true,
                fields: ['name']
            },
        ]
    }
);
