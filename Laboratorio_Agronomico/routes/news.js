
var app = require('../app');

exports.news = function(req, res){
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
    var query = "SELECT id_noticia, encabezado, cuerpo, fecha_creacion, descripcion FROM noticia ORDER BY fecha_creacion DESC";
	app.connection.query(query, function (err, resp) {
		if(err)
			console.log("ERROR: CONSULTA A LA BASE DE DATOS");
		else {
            res.render('news', { data: resp, title: "Laboratorio Agronomico Responsables", number: "24606262", email: "labagronomico@itcr.ac.cr", session: session, name: nombre }); 
		} 
	});
};

exports.notice = function(req, res) {
    var value = req.body.value;
    var query = "SELECT id_noticia, encabezado, fecha_creacion, descripcion FROM noticia WHERE id_noticia="+value;
    app.connection.query(query, function (err, resp) {
        if(err)
            console.log("ERROR: CONSULTA A LA BASE DE DATOS");
        else {
            if(resp.length > 0) {
                res.render('notice', { data: resp, title: "Laboratorio Agronomico Responsables", number: "24606262", email: "labagronomico@itcr.ac.cr" });
            } 
        } 
    });
}; 