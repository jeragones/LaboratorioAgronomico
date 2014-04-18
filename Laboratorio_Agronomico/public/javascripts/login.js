var socket = io.connect('http://localhost:3000');

/*window.onload = function() {

	$("#containerLogin").load("logout.html");
	if(session == null) {
		$("#containerLogin").load("logout.html");
	} else {
		$("#containerLogin").load("login.html");
		// setear el link con el nombre del que esta logueado
	}
}*/

$(document).ready(function() {
	$("#btnLogin").click(function() {
		var count = 0;
		var user = $("#txtUser").val();
		var pass = $("#txtPassword").val();
	
		if(user === "") {
			alert("usuario vacio");
		} else if(pass === "") {
			alert("pass vacio");
		} else {
			var query = 'SELECT usuario, nombre, apellido1 FROM persona WHERE (usuario LIKE "'+user+'" OR correo LIKE "'+user+'") AND clave LIKE "'+pass+'"';
			socket.emit('databaseAction', { query : query });
			socket.on('databaseAction', function(data) {
				alert(JSON.stringify(data.data));
				if(data.error) {
					alert("ocurrio un error en la consulta");
				} else {
					if(data.data.length == 0) {
						$("#txtPassword").val("");
						count++;
						if(count == 3) {
							$("#txtUser").val("");
							count = 0;
						}
						// error de inicio de sesion, datos incorrectos
					} else {
						//session = (data.data.usuario).toString();
						//req.session.user = user;
						$("#containerLogin").load("login.html");
						$("#logName").text("hola");
						// setear el link con el nombre del que esta logueado
					}
				}
			});
		}
	});	
});
/*
function logout(req, res) {
	delete req.session.user;
	// mas acciones con respecto a cerrar la sesion
}*/