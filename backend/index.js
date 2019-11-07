const app = require('./app/app');
const { port } = require('./app/config');

app.listen(port, () => {
    console.log(`Servidor iniciado en: http://localhost:${port}`);
});