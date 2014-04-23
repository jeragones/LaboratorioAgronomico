
var socket = io.connect('http://localhost:3000');


/*$( document ).ready(function() {
	document.write("no");
	alert("NO");
	

});*/

function resp(){
	$("#responsibles").empty();
	socket.emit('databaseAction', { query : "select nombre, apellido1, apellido2, correo, puesto, imagen, descripcion  from persona inner join usuario on persona.id_persona = usuario.id_persona" });
	socket.on('databaseAction', function(data) { 
		if(data.error) {
			alert("ocurrio un error en la consulta");
		} else {
			
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
					imagen = "/images/pasto3.png";
				}
				
				if(data.data[x].descripcion != null){
					descripcion = (data.data[x].descripcion).toString();
				}

				$("#responsibles").append( 
					"<article class='resp'>" +
					"<img src="+"'"+imagen+"'"+">" + 
					"<div>"+
						"<h2>"+nombre + " " + apellido1 +" "+ apellido2 + "</h2>" +
						"<label>"+ puesto + "</label>"+ 
						"<p>"+ descripcion + "</p>"+
						"<a href=mailto:"+correo+">"+ correo + "</a>"+ 
					"</div>"+ 
					"</article>" );
			}
		}
	});

}


$("#resp").click(function(){
resp();

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

