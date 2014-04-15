var mysql = require('mysql');

var connection = mysql.createConnection({
	user: 'Admin',
	password: 'hufVQcVJypRHpKhb',
	host: 'localhost',
	port: 3306, 
	database: 'suelosdb'
});

// CONEXION CON LA BASE DE DATOS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//var app = require('app');

// INSTANCIA DE LA BASE DE DATOS
//var objDB = app.objDB;


// CONSULTAS A LA BASE DE DATOS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Comprueba si el usuario existe en la base de datos
// usuario: correo del usuario
// clave: contraseña del usuario
function iniciarSesion(usuario, clave) {
	alert(connection.user);
	connection.connect();
	var query = connection.query('select * from persona', function(err, res, row) {
		if(err)
			alert("error");
		else {
			if(res.length > 0) {
				alert("inicio de sesion exitosa");
				return true;
			} else {
				alert("usuario invalido");
				return false;
			}
		}
	});
	/*console.log("error");
	alert(usuario + " " + clave);
	//objDB.query('SELECT nombre, apellido1, apellido2 FROM persona WHERE correo LIKE "'+ usuario +'" AND clave LIKE "'+ clave +'"',  
	objDB.query('SELECT * FROM persona',  
	function(err, res, row) {
		if(err) {
			alert("ocurrio un error");
			console.log("error");
		} else {
			if(res.length > 0) {
				alert("inicio de sesion exitosa");
				return true;
			} else {
				alert("usuario invalido");
				return false;
			}
		}
	});*/
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

