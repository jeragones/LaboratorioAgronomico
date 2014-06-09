
/*
 * GET home page.
 */

var app = require('../app');

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
				res.locals({ title: 'Laboratorio Agronomico', number: (resp[0].numero).toString(), email: email, body: '' });
				res.render('index');
			}
		} 
	});
};