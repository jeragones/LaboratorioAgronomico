var app = require('../app');

exports.printProfile = function(req, res) {
	console.log("entro a perfil");
	//****************************************************************************************************************************
    var nombre;
    var session;
    if(req.session.user) {
        session=true;
        if(req.session.user == 2)
            nombre="Jorge Rojas";
        else
            nombre="Fabian Vargas";
    } else {
        session = false;
    }
    // , session: session, name: nombre
    //****************************************************************************************************************************
	var id = req.session.user;
	var type;
	var query1 = "SELECT id_persona, nombre, apellido1, apellido2, correo, telefono, usuario, clave, tipo FROM persona WHERE id_persona = "+id;
	app.connection.query(query1, function (err, resp1) {
		if(err)
			console.log("ERROR: CONSULTA A LA BASE DE DATOS");
		else {
			if(resp1.length > 0) {
				var type = resp1[0].tipo;
				var query2;
				switch(type) {
				case 1:
					// admin
					break;
				case 2:
					query2 = "SELECT puesto, imagen, descripcion FROM usuario WHERE id_persona="+id;
					break;
				case 3:
					query2 = "SELECT provincia, canton, distrito, direccion FROM cliente WHERE id_persona="+id;
					break;
				}
				console.log("query2: "+query2);
				app.connection.query(query2, function (err, resp2) {
					if(err)
						console.log("ERROR: CONSULTA A LA BASE DE DATOS");
					else {
						console.log(resp1);
						console.log(resp2);
						res.render('profile', { data1: resp1, data2: resp2, type: type, title: "Laboratorio Agronomico Responsables", number: "24606262", email: "labagronomico@itcr.ac.cr", session: session, name: nombre }); 
					}
				});
			}
		} 
	});
};