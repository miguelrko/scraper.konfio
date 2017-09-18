/*
Proyecto: Scraper Evaluacion Konfio
Author: Miguel Añez
Fecha creacion: 17/09/2017
Ultima modificacion: 18/09/2017 *Limpieza de codigo, se agregaron comentarios*
*/

const app = require('./app.js');

const port = process.env.PORT || 3000;

//Inicializamos el servidor en el puerto 3000 para el ambiente local
const server = app.listen(port, function () {
  console.log('Express listening on port: ' + port);
});