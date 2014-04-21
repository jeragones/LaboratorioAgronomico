
var socket = io.connect('http://localhost:3000');


/*$( document ).ready(function() {
	document.write("no");
	alert("NO");
	

});*/

$("#resp").click(function(){
	
	socket.emit('databaseAction', { query : "select nombre, apellido1, apellido2, correo, puesto, imagen, descripcion  from persona inner join usuario on persona.id_persona = usuario.id_persona" });
		socket.on('databaseAction', function(data) { 
			if(data.error) {
				alert("ocurrio un error en la consulta");
			} else {
				//$("#responsibles").empty();
				var nombre, apellido1,apellido2,correo="",puesto,imagen="",descripcion="";
				for (var x in data.data) {
					nombre = (data.data[x].nombre).toString();

					apellido1 = (data.data[x].apellido1).toString();
					apellido2 = (data.data[x].apellido2).toString();
					if(data.data[x].correo != null) {
						correo = (data.data[x].correo).toString();
					}
					puesto = (data.data[x].puesto).toString();
					if(data.data[x].imagen != null){
						imagen = (data.data[x].imagen).toString();
					}
					else{
						imagen = "/images/Administrator.png";
					}
					
					if(data.data[x].descripcion != null){
						descripcion = (data.data[x].descripcion).toString();
					}

					$("#responsibles").append( "<article'>" +"<img src="+"'"+imagen+"'"+">" + nombre + ", " + apellido1 + ", " + apellido2 + ", " + correo + ", " + puesto + "," + descripcion + "</article>" );
				}
			}
		});
	

	/*for(var r in q){
		var newarticle = document.createElement('article');
		newarticle.innerHTML= "<article>"+q[r]+"</article>";
	
		section.appendChild(newarticle);
		
	}*/

// Agrega articles al section
	/*var newarticle = document.createElement('article');
	newarticle.innerHTML= "<article>daniel</article>";
	
	section.appendChild(newarticle);
	*/	

	
	
	
	});

