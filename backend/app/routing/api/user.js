/**
 * Implementación de la ruta: /api/v1.0/users
 * @author jaimecastrillon@gmail.com
 */

const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/user');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/users', Auth.isAuth, routing.all)
    .get('/users/:id', Auth.isAuth, routing.one)
    .post('/users', Auth.isAuth, routing.create)
    .post('/users/login', routing.login)
    .put('/users/:id', Auth.isAuth, routing.update)
    .delete('/users/:id', Auth.isAuth, routing.destroy);

module.exports = router;
