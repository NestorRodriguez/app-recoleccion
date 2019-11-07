const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

// Implementación de cors
app.use(cors());
// Parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: true, limit: '10mb' }));
// Parse application/json
app.use(parser.json({ extended: true, limit: '10mb' }));
// Ruta de la carpeta pública
app.use(express.static(path.join(__dirname, 'public')));

// Importación de las rutas de la app
const routes = require('./routing/routes');
app.use('/api/v1.0/', routes);

// Ruta de error cuando no se encuentre definida
app.all('*', (req, res) => {
    res.status(404).send({ 'error': 404 });
});

// Application server config
app.disable('x-powered-by');

module.exports = app;
