const path = require('path');

module.exports = {
    language: 'es',
    host: process.env.URL,
    port: process.env.PORT || 3000,
    sessionEncrypt: "$ZC6rNk/Y5MWPj8-3Q0WcK48ZgHvL.",
    sessionToken: "$Tv8eZm/G2jEwI9-5V9TLK86bQGcD.",
    sessionTime: 3, // Definicion en horas de sesión
    appPath: path.dirname(__dirname),
    db: {
        user: "root",
        access: "root",
        database: "gaz",
        host: "localhost",
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
};
