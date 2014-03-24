var instanceAPP = require('../app');

var app = instanceAPP.app;

/*app.post('/prueba', function(req, res) {
	
});*/

function prueba() {
	alert("hola pavo");
}


/*exports.upload = function(req, res){
	
		alert("hola pavo");
  	
  //res.render('news', { title: 'Express' });
};*/







/*app.post('/autentificar', function( req, res ){
	var objDB = DB();
	var user = req.body.txtUsuario;
	var pass = req.body.txtClave;
	objDB.query('SELECT * FROM usuario WHERE alias LIKE "'+ user +'" AND clave LIKE "'+ pass +'"', function(err, resp, row){
		if(err){
			console.log("error");
			console.log(err.length);
		} else {
			if(resp.length > 0){
				console.log("si funca");
				req.session.user = user;
				res.redirect('/privada');
			} else {
				resp.send('INGRESO FALLIDO: Datos incorrectos');
			}
		}
	});
	/*if(req.body.txtUsuario == 'jeragones' && req.body.txtClave == '123'){
		req.session.user = req.body.txtUsuario;
		res.redirect('/privada');
	} else {
		res.send('INGRESO FALLIDO: Datos incorrectos');
	}*/
//});