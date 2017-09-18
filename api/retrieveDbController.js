/*
Proyecto: Scraper Evaluacion Konfio
Author: Miguel Añez
Fecha creacion: 17/09/2017
Ultima modificacion: 18/09/2017 *Limpieza de codigo, se agregaron comentarios*
*/

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../data-base.js');

var basicAuth = require('basic-auth');

//Funcion para el manejo del Basic Auth
var auth = function (req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(401);
  };

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  };

  if (user.name === 'admin' && user.pass === 'welcome') {
    return next();
  } else {
    return unauthorized(res);
  };
};

router.use(bodyParser.urlencoded({ extended: true }));

//Llamado a la funcion de mostrar productos de la BD al recibir un get
router.get('/', auth, function (req, res) {
    db.showProducts(req, res);
});

module.exports = router;