var app = require('../app');

exports.session = function(req, res) {
	console.log(req.session.user);
	if(req.session.user) {
		var query = 'SELECT nombre, apellido1 FROM persona WHERE (usuario LIKE "'+req.session.user+'"';
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
	console.log("usurio: "+user+" pass: "+password);
	var query = 'SELECT id_persona, tipo, nombre, apellido1 FROM persona WHERE (usuario LIKE "'+user+'" OR correo LIKE "'+user+'") AND clave LIKE "'+password+'"';
	console.log(query);
	app.connection.query(query, function (err, resp) {
		if(err)
			console.log("ERROR: CONSULTA A LA BASE DE DATOS");
		else {
			if(resp.length > 0) {
				req.session.user = user;
				var name = resp[0].nombre +" "+ resp[0].apellido1;
				console.log("si existe un usuario: "+req.session.user);
				res.render('index', { title: 'Laboratorio Agronomico', number: "24606262", email: "labagronomico@itcr.ac.cr", session: true, name: name });
			} else {
				console.log("no existe un usuario");
				res.render('index', { title: 'Laboratorio Agronomico', number: "24606262", email: "labagronomico@itcr.ac.cr", session: true, name: "jorge rojas" });
			}
	    }
	});
};
// *********************************************************************************************************************************************************
exports.logout = function(req, res) {
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