var app = require('../app');

exports.printProfile = function(req, res) {
	var id = req.session.user;
	var query;
	query = "SELECT id_persona, nombre, apellido1, apellido2, correo, usuario, clave, tipo FROM persona WHERE id_persona = "+id;
	app.connection.query(query, function (err, resp) {
		if(err)
			console.log("ERROR: CONSULTA A LA BASE DE DATOS");
		else {
			if(resp.length > 0) {
				var name= resp[0].nombre;
				var apell1 = resp[0].apellido1;
				var apell2 = resp[0].apellido2;
				var email = resp[0].correo;
				var user = resp[0].usuario;
				var pass = resp[0].clave;

				switch(resp[0].tipo) {
				case "1":

					// admin
					break;
				case "2":
					query = "SELECT , puesto, imagen, descripcion FROM persona INNER JOIN usuario ON persona.id_persona=usuario.id_persona WHERE usuario='"+user+"'";
					break;
				case "3":
					break;
				}
				//if( == "")
			}
            res.render('news', { data: resp, title: "Laboratorio Agronomico Responsables", number: "24606262", email: "labagronomico@itcr.ac.cr" }); 
		} 
	});
};