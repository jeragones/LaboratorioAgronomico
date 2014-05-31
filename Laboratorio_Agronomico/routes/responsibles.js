
var app = require('../app');

exports.responsible = function(req, res){
	var query = "SELECT nombre, apellido1, apellido2, correo, puesto, imagen, descripcion FROM persona INNER JOIN usuario ON persona.id_persona = usuario.id_persona";
	app.connection.query(query, function (err, resp) {
		if(err)
			console.log("ERROR: CONSULTA A LA BASE DE DATOS");
		else {
			if(resp.length > 0) {
				var name, apell1, apell2, email="", job, image="", description="";
				for (var i in resp) {
					name = (resp[i].nombre).toString();
					apell1 = (resp[i].apellido1).toString();
					apell2 = (resp[i].apellido2).toString();
					if(resp[i].correo != null) 
						email = (resp[i].correo).toString();
					
					job = (resp[i].puesto).toString();
					if(resp[i].imagen != null) {
						image = (resp[i].imagen).toString();
					} else {
						image = "/images/Administrator.png";
					}
					if(resp[i].descripcion != null) {
						description = (resp[i].descripcion).toString();
					}
					res.locals({ name: name+" "+apell1+" "+apell2, email: email, job: job, image: image, description: description });
					res.render('responsibles');
					console.log("consulta exitosa");
				}
			}
		}
	});
};