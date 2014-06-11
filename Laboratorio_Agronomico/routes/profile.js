var app = require('../app');

exports.profPrint = function(req, res) {
	var user = req.session.user;
	//********************************************************************************************************************
	var query = "SELECT nombre, encabezado, fecha_creacion, descripcion FROM noticia ORDER BY fecha_creacion DESC";
	app.connection.query(query, function (err, resp) {
		if(err)
			console.log("ERROR: CONSULTA A LA BASE DE DATOS");
		else {
            res.render('news', { data: resp, title: "Laboratorio Agronomico Responsables", number: "24606262", email: "labagronomico@itcr.ac.cr" }); 
		} 
	});
};