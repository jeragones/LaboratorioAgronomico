
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////// EJECUCION DE QUERYS EN LA BASE DE DATOS ///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var URL = 'http://localhost:3000/database';
/*
var result = "";
function database(query) {
	$.ajax({
        type: 'POST',
        data: JSON.stringify({query : query}),
        contentType: 'application/json',
        url: 'http://localhost:3000/database'
    }).success(function(data) {
        //alert(JSON.stringify(data));
        result = data;
        //return result;
        //return JSON.stringify(data);
    }).error(function() {
        result = "error";
    });
    return result;
}*/

/*
var socket = io.connect('http://localhost:3000');

function dataBase(query) {
	
}

$(document).ready(function() {

	$('#prueba').click(function() {
		socket.emit('databaseAction', { query : "select * from persona" });
		socket.on('databaseAction', function(data) { 
			if(data.error) {
				alert("ocurrio un error en la consulta");
			} else {
				$("#containerBody").empty();
				var name, lastName1, lastName2, email="", user, password;
				for (var x in data.data) {
					name = (data.data[x].nombre).toString();
					lastName1 = (data.data[x].apellido1).toString();
					lastName2 = (data.data[x].apellido2).toString();
					if(data.data[x].correo != null) {
						email = (data.data[x].correo).toString();
					} else {
						email ="___";
					}
					user = (data.data[x].usuario).toString();
					password = (data.data[x].clave).toString();
					$("#containerBody").append( "<p>"+ name + ", " + lastName1 + ", " + lastName2 + ", " + email + ", " + user + ", " + password + "</p>" );
				}
			}
		});
	});
	
});*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// CONSULTAS A LA BASE DE DATOS ////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
