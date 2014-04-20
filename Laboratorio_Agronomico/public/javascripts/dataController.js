
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////// EJECUCION DE QUERYS EN LA BASE DE DATOS ///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var socket = io.connect('http://localhost:3000');

function dataBase(query) {
	
}

$(document).ready(function() {
	// FUNCION DE EJEMPLO
	$('#prueba').click(function() {
<<<<<<< HEAD
		// SI ES UNA CONSULTA SE CREA UNA VARIABLE PARA OBTENER EL RESULTADO DE LA MISMA, DE LO CONTRARIO NO ES NECESARIO CREAR LA VARIABLE

		
		//var mm = dataBase('CREATE DATABASE IF NOT EXISTS testeme');
		var mm = dataBase("select * from persona");

=======
		// SI ES UNA INSERCION, MODIFICACION, ELIMINACION SE REALIZA DE LA SIGUIENTE MANERA:
		/* socket.emit('databaseAction', { query : "insertar/modificar/eliminar querys" }); 
		socket.on('databaseAction', function(data) { 
			if(data.error) {
				alert("ocurrio un error en la insersion");
			}
		});
		*/
>>>>>>> 819a04d2740ea5f5cce51933a84f341d15758f0c
		
//


		// SI ES UNA CONSULTA SE REALIZA LO SIGUIENTE:
		socket.emit('databaseAction', { query : "select * from persona" });
		socket.on('databaseAction', function(data) { 
			if(data.error) {
				alert("ocurrio un error en la consulta");
			} else {
				$("#containerBody").empty();
				var name, lastName1, lastName2, email="", user, password;
				for (var x in data.data) {
					name = (data.data[x].nombre).toString();
					lastName1 = (data.data[x].apellido1).toString();
					lastName2 = (data.data[x].apellido2).toString();
					if(data.data[x].correo != null) {
						email = (data.data[x].correo).toString();
					} else {
						email ="___";
					}
					user = (data.data[x].usuario).toString();
					password = (data.data[x].clave).toString();
					$("#containerBody").append( "<p>"+ name + ", " + lastName1 + ", " + lastName2 + ", " + email + ", " + user + ", " + password + "</p>" );
				}
			}
		});
	});
	
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// CONSULTAS A LA BASE DE DATOS ////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {

});

// Comprueba si el usuario existe en la base de datos
// usuario: correo del usuario
// clave: contraseña del usuario
function iniciarSesion(usuario, clave) {
	
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






/*
connection.beginTransaction(function(err) {
  if (err) { throw err; }
  connection.query('INSERT INTO posts SET title=?', title, function(err, result) {
    if (err) { 
      connection.rollback(function() {
    throw err;
      });
    }

    var log = 'Post ' + result.insertId + ' added';

    connection.query('INSERT INTO log SET data=?', log, function(err, result) {
      if (err) { 
    connection.rollback(function() {
      throw err;
    });
      }  
      connection.commit(function(err) {
    if (err) { 
      connection.rollback(function() {
        throw err;
      });
    }
    console.log('success!');
      });
    });
  });
});
*/