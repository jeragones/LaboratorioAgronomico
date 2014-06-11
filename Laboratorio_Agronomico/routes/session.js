var app = require('../app');

exports.session = function(req, res) {
	if(req.session.user) {
		var query = 'SELECT nombre, apellido1 FROM persona WHERE id_persona = '+req.session.user;
		app.connection.query(query, function (err, resp) {
			if(err)
				console.log("ERROR: CONSULTA A LA BASE DE DATOS");
			else {
				if(resp.length > 0) {
					res.send({ html: sessionOn(resp[0].nombre +" "+ resp[0].apellido1) });
				}
			}
		});
	} else {
		res.send({ html: sessionOff() });
	}
};


exports.login = function(req, res){
	var user = req.body.user;
	var password = req.body.pass;
	var query = 'SELECT id_persona, tipo, nombre, apellido1 FROM persona WHERE (usuario LIKE "'+user+'" OR correo LIKE "'+user+'") AND clave LIKE "'+password+'"';
	app.connection.query(query, function (err, resp) {
		if(err)
			console.log("ERROR: CONSULTA A LA BASE DE DATOS");
		else {
			if(resp.length > 0) {
				req.session.user = resp[0].id_persona;
				var name = resp[0].nombre +" "+ resp[0].apellido1;
				res.send({name: name});
			}
	    }
	});
};
// *********************************************************************************************************************************************************
exports.logout = function(req, res) {
	delete req.session.user;
	console.log("si se cerro sesion");
	res.redirect("index", { title: "Laboratorio Agronomico Responsables", number: "24606262", email: "labagronomico@itcr.ac.cr" });
	/*var user = req.body.txtUser;
	var password = req.body.txtPassword;
	var query = 'SELECT id_persona, tipo, nombre, apellido1 FROM persona WHERE (usuario LIKE "'+user+'" OR correo LIKE "'+user+'") AND clave LIKE "'+password+'"';
	app.connection.query(query, function (err, resp) {
		if(err)
			console.log("ERROR: CONSULTA A LA BASE DE DATOS");
		else {
			if(resp.length > 0) {
				req.session.user = user;
				var name = resp[0].nombre +" "+ resp[0].apellido1;
				var html = '<a onclick="loginMenu()" href="#" class="dropdown-toggle" data-toggle="dropdown">'+name+'<strong class="caret"></strong></a>' +
							'<div id="logMenu" class="dropdown-menu">' +
								'<ul>' +
									'<li><a onclick="loginPerfil()">Abrir perfil</a></li>' +
									'<li><a onclick="loginClose()">Cerrar Sesión</a></li>' +
								'</ul>' +
							'</div>';
	            res.send({ html: html });
	        }
		}
	});*/
};