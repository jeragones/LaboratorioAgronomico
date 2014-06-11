
/*
 * GET home page.
 */

var app = require('../app');

exports.index = function(req, res){
	var session, query;
	var user = req.session.user;
	console.log(user);
	if(user) {
		session = true;
		query = 'SELECT nombre, apellido1 FROM persona WHERE usuario="'+user+'"';
	} else {
		session = false;
	}
		
	query = "SELECT correo, numero FROM persona INNER JOIN telefono ON persona.id_persona=telefono.id_persona AND tipo=1";
	app.connection.query(query, function (err, resp) {
		if(err)
			console.log("ERROR: CONSULTA A LA BASE DE DATOS");
		else {
			if(resp.length > 0) {
				var email = "";
				if(resp[0].correo != null)
					email = (resp[0].correo).toString();
				var number = (resp[0].numero).toString();
				if(session) {
					query = 'SELECT nombre, apellido1 FROM persona WHERE usuario LIKE "'+user+'"';
					app.connection.query(query, function (err, resp) {
						if(err)
							console.log("ERROR: CONSULTA A LA BASE DE DATOS");
						else {
							if(resp.length > 0) {
								var name = resp[0].nombre +" "+ resp[0].apellido1;
								res.render('index', { title: 'Laboratorio Agronomico', number: number, email: email, session: session, name: name });
							}
						}
					});
				} else {
					res.render('index', { title: 'Laboratorio Agronomico', number: number, email: email, session: session });
				}
			}
		}
	});
};
