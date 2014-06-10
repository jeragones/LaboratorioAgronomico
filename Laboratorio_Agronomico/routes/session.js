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


function sessionOn(name) {
	return '<a onclick="loginMenu()" href="#" class="dropdown-toggle" data-toggle="dropdown">'+name+'<strong class="caret"></strong></a>' +
			'<div id="logMenu" class="dropdown-menu">' +
				'<ul>' +
					'<li><a onclick="loginPerfil()">Abrir perfil</a></li>' +
					'<li><a onclick="loginClose()">Cerrar Sesión</a></li>' +
				'</ul>' +
			'</div>';
}

function sessionOff() {
	return '<a onclick="loginMenu()" href="#" class="dropdown-toggle" data-toggle="dropdown">Iniciar Sesión<strong class="caret"></strong></a>' +
			'<div id="logMenu" class="dropdown-menu">' +
			    '<div id="frmLogin" class="form-inline" role="form">' +
			        '<input id="txtUser" class="form-control" placeholder="Usuario: / Correo:">' +
			        '<input id="txtPassword" class="form-control" type="password" placeholder="Clave:">' +
			        '<button id="btnLogin" class="btn btn-primary" onclick="validateLogin()" role="button">iniciar</button>' +
			    '</div>' +
			'</div>';
}

exports.login = function(req, res){
	var user = req.body.txtUser;
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
	});
};
// *********************************************************************************************************************************************************
exports.logout = function(req, res){
	var user = req.body.txtUser;
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
	});
};