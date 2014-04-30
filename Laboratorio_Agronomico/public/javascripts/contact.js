//var socket = io.connect('http://localhost:3000');

function contacts() {
	/*socket.emit('databaseAction', { query : "select correo,numero from persona, telefono where persona.id_persona=telefono.id_persona" });
		socket.on('databaseAction', function(data) { 
			if(data.error) {
				alert("ocurrio un error en la consulta");
			} else {
				$("#contact_info").empty();
				var numero, email;
				$("#contact_info").append( "<h1> Dirección </h1>" );
				$("#contact_info").append( "<p> Alajuela, San Carlos, Santa Clara <p>" );
				for (var x in data.data) {
					numero = (data.data[x].numero).toString();
					if(data.data[x].correo != null) {
						email = (data.data[x].correo).toString();
					} else {
						email ="___";
					}
				$("#contact_info").append( "<h1> Teléfono </h1>" );
				$("#contact_info").append( "<p>"+numero+"<p>" );	
				$("#contact_info").append( "<h1> Correo </h1>" );
				$("#contact_info").append( "<p>"+email+"<p>" );			
				}
			}
		});*/


	var query = "SELECT correo, numero FROM persona INNER JOIN telefono ON persona.id_persona=telefono.id_persona";
	$.ajax({
        type: 'POST',
        data: JSON.stringify({query : query}),
        contentType: 'application/json',
        cache: false,
        url: URL
    }).success(function(data) {
    	alert(JSON.stringify(data));
        if(data !== "") {
        	$("#contact_info").empty();
			var numero, email="";
			$("#contact_info").append( "<h1> Dirección </h1>" );
			$("#contact_info").append( "<p> Alajuela, San Carlos, Santa Clara <p>" );
			for (var x in data) {
				numero = (data[x].numero).toString();
				if(data[x].correo != null) {
					email = (data[x].correo).toString();
				} 
				$("#contact_info").append( "<h1> Teléfono </h1>" );
				$("#contact_info").append( "<p>"+numero+"<p>" );	
				$("#contact_info").append( "<h1> Correo </h1>" );
				$("#contact_info").append( "<p>"+email+"<p>" );			
			}
        }
    }).error(function() {
        alert("ERROR");
    });
}