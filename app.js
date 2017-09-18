/*
Proyecto: Scraper Evaluacion Konfio
Author: Miguel Añez
Fecha creacion: 16/09/2017
Ultima modificacion: 18/09/2017 *Limpieza de codigo, se agregaron comentarios*
*/

const express = require('express');

const scrapperController = require('./api/scrapperController.js');
const retrieveDbController = require('./api/retrieveDbController.js');

//Enviamos la informacion de la app al modulo de express en el archivo server.js
const app = express();
app.use('/products', retrieveDbController);
app.use('/sources', scrapperController);

module.exports = app;