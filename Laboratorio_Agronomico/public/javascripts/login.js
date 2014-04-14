$( document ).ready(function() {
	
});

$("#btnLogin").click(function(req, res) {
	alert(req.body.txtUser);
	if(req.body.txtUser != "" && req.body.txtPassword != "") {
		// consulta a la BD
		/* si retorna true entonces se guarda la sesion del usuario*/
		req.session.user = req.body.txtUser;
	} else {
		alert("Existen campos vacios");
		// se pueden contar los intentos y bloquear 
	}
});

// para validar si ya existe una sesion abierta
exports.function login(req, res, next) {
	if(req.session.user) {
		$("#containerLogin").load("login.html");
		alert("alguien esta logueado");
		// refrescar con una sesion abierta
	} else {
		$("#containerLogin").load("logout.html");
		// refrescar como si ningun usuario estuviera logueado
		alert("sin iniciar sesion");
	}
}

function logout(req, res) {
	delete req.session.user;
	// mas acciones con respecto a cerrar la sesion
}