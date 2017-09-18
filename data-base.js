/*
Proyecto: Scraper Evaluacion Konfio
Author: Miguel Añez
Fecha creacion: 17/09/2017
Ultima modificacion: 18/09/2017 *Limpieza de codigo, se agregaron comentarios*
*/

const mysql = require('mysql');

//Datos de conectividad para iniciar el pool de conexiones
const pool = mysql.createPool({
  connectionLimit : 100,
  host     : 'localhost',
  port	   : '3306',
  user     : 'root',
  password : '',
  database : 'scrapper'
});

//Funcion para guardar en la BD los productos procedentes del scraping
var saveProducts = (products) => {
	pool.getConnection(function(err, connection) {
		if (err) {
  			connection.release();
  			res.json({"code" : 100, "status" : "Error in connection database"});
  			return;
  		}
  		var sql = "INSERT INTO products_information (Store, Name, Price) VALUES ?";
  		connection.query(sql, [products], function (err, rows) {
    	if (err) connection.release();
    	return;
  		});

  		connection.on('error', function(err) {      
    	res.json({"code" : 100, "status" : "Error in connection database"});
    	return;     
  		});
	}); 
}

//Funcion para mostrar los productos almacenados en la BD
var showProducts = (req, res) => {
	pool.getConnection(function(err, connection) {
  if (err) {
  	connection.release();
  	res.json({"code" : 100, "status" : "Error in connection database"});
  	return;
  }
  var sql = "SELECT Store, Name, Price FROM products_information";
  connection.query(sql, function (err, rows) {
    if (err) connection.release();
    res.json(rows);
  });

  connection.on('error', function(err) {      
    res.json({"code" : 100, "status" : "Error in connection database"});
    return;     
  });
  
});
}


module.exports = {
	saveProducts,
	showProducts
};