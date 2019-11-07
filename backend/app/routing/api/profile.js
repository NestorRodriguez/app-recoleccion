/**
 * Implementación de la ruta: /api/v1.0/profiles
 * @author jaimecastrillon@gmail.com
 */

const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/profile');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/profiles', Auth.isAuth, routing.all)
    .get('/profiles/:id', Auth.isAuth, routing.one)
    .post('/profiles', Auth.isAuth, routing.create)
    .put('/profiles/:id', Auth.isAuth, routing.update)
    .delete('/profiles/:id', Auth.isAuth, routing.destroy);

module.exports = router;
