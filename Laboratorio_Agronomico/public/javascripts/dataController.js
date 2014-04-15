
// CONEXION CON LA BASE DE DATOS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var mysql = require('mysql');

function DB() {
	var cliente = mysql.createConnection({
		user: 'Admin',
		password: 'hufVQcVJypRHpKhb',
		host: 'localhost',
		port: 3306, 
		database: 'suelosdb'
	});
	return cliente;
}

// INSTANCIA DE LA BASE DE DATOS
var objDB = DB();


// CONSULTAS A LA BASE DE DATOS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Comprueba si el usuario existe en la base de datos
// usuario: correo del usuario
// clave: contraseña del usuario
function iniciarSesion(usuario, clave) {
	objDB.query('SELECT nombre, apellido1, apellido2 FROM persona WHERE correo LIKE "'+ usuario +'" AND clave LIKE "'+ clave +'"', 
	function(err, res, row) {
		if(err) {
			console.log("error");
		} else {
			if(res.length > 0) {
				return true;
			} else {
				return false;
			}
		}
	});
}

// consulta la cantidad de usuarios registrados en la base de datos
// retorna la misma cantidad

/*function cantUser(){
	objDB.query('SELECT count(*) FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'usuario' ',
		function(err, res, row) {
		if(err) {
			console.log("error");
		}
		else{
			console.log("HOOOOOOLAAA");
		}
	}

		);
}
*/


// INSERCIONES EN LA BASE DE DATOS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// MODIFICACIONES EN LA BASE DE DATOS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// ELIMINACIONES EN LA BASE DE DATOS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

