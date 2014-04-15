
var app = require('app');

// INSTANCIA DE LA BASE DE DATOS
var objDB = app.objDB;

$( document ).ready(function() {

	$("#opResponsible").click(function(){
	
	alert("si");
		objDB.query(
		'SELECT * from usuarios',function(err,result,fields){
			if(err){
			 	alert(err);
			}
			else{
				alert(result);
			}
		});
		alert("no");
		/*cliente.connect();

		var query = cliente.query(
			'SELECT * from usuario',function(err,result,fields){
				if (err) trow err;
				console.log('hola');
		});

		cliente.end();
		*/
	});

});

