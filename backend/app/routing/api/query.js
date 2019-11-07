/**
 * Implementación de la ruta: /api/v1.0/profiles
 * @author jaimecastrillon@gmail.com
 */

const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/query');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router.post('/queries/query', Auth.isAuth, routing.query);

module.exports = router;
