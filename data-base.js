const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit : 100,
  host     : 'localhost',
  port	   : '3306',
  user     : 'root',
  password : '',
  database : 'scrapper'
});

// var saveProducts = (products) => {
// 	connection.connect(function(err) {
//   		if (err) throw err;
//   		var sql = "INSERT INTO products_information (Store, Name, Price) VALUES ?";
//   		connection.query(sql, [products], function (err, result) {
//     	if (err) throw err;
//     	console.log("Number of records inserted: " + result.affectedRows);
//   	});

//   connection.end();
// });
// }

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