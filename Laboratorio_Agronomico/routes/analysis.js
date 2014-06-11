var app = require('../app');

exports.analysis = function(req, res) {
	var user = req.session.user;
	var query = "SELECT tipo FROM persona WHERE usuario='"+user+"'";
	app.connection.query(query, function (err, resp) {
		if(err)
			console.log("ERROR: CONSULTA A LA BASE DE DATOS");
		else {
			if(resp.length > 0) {
				console.log(resp[0].tipo);
				//user = JSON.stringify(resp[0].tipo) 
				//console.log(JSON.stringify(resp[0].tipo));
				switch(user) {
				case "1":
					console.log("administrador");
					res.render('adminAnalysis', {});
					break;
				case "2":
					console.log("usuario");
					res.render('adminAnalysis', {});
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
				case "3":
					console.log("cliente");
					res.render('clientanalysis', {});
					//client(req, res);
					break;
				default:
					//visit(req, res);
				}
				//res.render('adminAnalysis', {});
				//res.render('userAnalysis', { data: resp, title: "Laboratorio Agronomico Responsables", number: "24606262", email: "labagronomico@itcr.ac.cr" }); 
				
			}
			//res.render('userAnalysis', { data: resp, title: "Laboratorio Agronomico Responsables", number: "24606262", email: "labagronomico@itcr.ac.cr" }); 
		} 
	});
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