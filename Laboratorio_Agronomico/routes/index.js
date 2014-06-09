
/*
 * GET home page.
 */

var app = require('../app');

var contact = [];

exports.index = function(req, res){
	var query = "SELECT correo, numero FROM persona INNER JOIN telefono ON persona.id_persona=telefono.id_persona AND tipo=1";
	app.connection.query(query, function (err, resp) {
		if(err)
			console.log("ERROR: CONSULTA A LA BASE DE DATOS");
		else {
			if(resp.length > 0) {
				var email = "";
				if(resp[0].correo != null)
					email = (resp[0].correo).toString();
				contact = ['Laboratorio Agronomico', (resp[0].numero).toString(), email];
				res.render('index', { title: contact[0], number: contact[1], email: contact[2] });
			}
		} 
	});
};

//module.exports.contact = contact;