var app=require("../app");

exports.addclient=function(req, res){
	var query = "SELECT nombre FROM provincia ORDER BY nombre DESC";
	app.connection.query(query, function (err, resp) {
		if(err)
			console.log("ERROR: CONSULTA A LA BASE DE DATOS");
		else {
            res.render('addclient', { data: resp, title: "Laboratorio Agronomico Responsables", number: "24606262", email: "labagronomico@itcr.ac.cr" }); 
		} 
	});
}

exports.canton = function(req,res){
	var nameProvincia=req.body.selctprovincia;
	var query = "SELECT canton.nombre FROM provincia inner join canton on provincia.id_provincia=canton.id_provincia WHERE provincia.nombre="+nameProvincia
	app.connection.query(query, function (err, resp) {
		if(err)
			console.log("ERROR: CONSULTA A LA BASE DE DATOS");
		else {
            res.render('addclient', { data: resp, title: "Laboratorio Agronomico Responsables", number: "24606262", email: "labagronomico@itcr.ac.cr" }); 
		} 
	});
}
// SELECT canton.nombre FROM provincia inner join canton on provincia.id_provincia=canton.id_provincia WHERE provincia.nombre="Alajuela"