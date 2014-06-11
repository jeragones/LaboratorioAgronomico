var app = require('../app');

exports.analysis = function(req, res) {
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
	var user = req.session.user;
	if(user) {
		var query = "SELECT tipo FROM persona WHERE id_persona="+user;
		app.connection.query(query, function (err, resp) {
			if(err)
				console.log("ERROR: CONSULTA A LA BASE DE DATOS");
			else {
				if(resp.length > 0) {
					//user = JSON.stringify(resp[0].tipo) 
					//console.log(JSON.stringify(resp[0].tipo));
					switch(resp[0].tipo) {
					case 1:
						res.render('adminAnalysis', {title: "Laboratorio Agronomico Responsables", number: "24606262", email: "labagronomico@itcr.ac.cr", session: session, name: nombre});
						break;
					case 2:
						res.render('adminAnalysis', {title: "Laboratorio Agronomico Responsables", number: "24606262", email: "labagronomico@itcr.ac.cr", session: session, name: nombre});
						/*console.log("si entro");
						query = "SELECT DISTINCT categoria FROM analisis ORDER BY categoria DESC";
						app.connection.query(query, function (err, resp) {
							if(err)
								console.log("ERROR: CONSULTA A LA BASE DE DATOS");
							else {
					            res.render('userAnalysis', { data: resp, title: "Laboratorio Agronomico Responsables", number: "24606262", email: "labagronomico@itcr.ac.cr" }); 
							}
						});*/
						break;
					case 3:
						res.render('ClientAnalysis', {title: "Laboratorio Agronomico Responsables", number: "24606262", email: "labagronomico@itcr.ac.cr", session: session, name: nombre});
						//client(req, res);
						break;

						
						//visit(req, res);
					}
					//res.render('adminAnalysis', {});
					//res.render('userAnalysis', { data: resp, title: "Laboratorio Agronomico Responsables", number: "24606262", email: "labagronomico@itcr.ac.cr" }); 
					
				}
				//res.render('userAnalysis', { data: resp, title: "Laboratorio Agronomico Responsables", number: "24606262", email: "labagronomico@itcr.ac.cr" }); 
			} 
		});
} else
	res.render('index', {title: "Laboratorio Agronomico Responsables", number: "24606262", email: "labagronomico@itcr.ac.cr", session: false});
	console.log("visitante");
};

function user(req, res) {
	var query = "SELECT DISTINCT categoria FROM analisis ORDER BY categoria DESC";
	app.connection.query(query, function (err, resp) {
		if(err)
			console.log("ERROR: CONSULTA A LA BASE DE DATOS");
		else {
			console.log("usuario:" +resp);
            res.render('userAnalysis', { data: resp, title: "Laboratorio Agronomico Responsables", number: "24606262", email: "labagronomico@itcr.ac.cr" }); 
		} 
	});
};

function visit(req, res) {

};

// delete req.session.user;

exports.adminanalysis= function(req, res) {
	res.render('adminAnalysis', {}); 
	};

exports.clientanalysis= function(req, res) {
	res.render('clientanalysis', {}); 
	};