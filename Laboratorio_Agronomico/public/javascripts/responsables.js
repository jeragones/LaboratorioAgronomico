
//var socket = io.connect('http://localhost:3000');


/*$( document ).ready(function() {
	document.write("no");
	alert("NO");
	

});*/

function responsibles() {
	$("#responsibles").empty();
	var query = "SELECT nombre, apellido1, apellido2, correo, puesto, imagen, descripcion FROM persona INNER JOIN usuario ON persona.id_persona = usuario.id_persona";
	$.ajax({
        type: 'POST',
        data: JSON.stringify({query : query}),
        contentType: 'application/json',
        cache: false,
        url: URL
    }).success(function(data) {

        //alert(JSON.stringify(data));
        //if (this.readyState == 4 && this.status == 200) {

        	if(data !== "") {
        	var nombre, apellido1,apellido2,correo="",puesto,imagen="",descripcion="";
        	for (var x in data) {
				nombre = (data[x].nombre).toString();

				apellido1 = (data[x].apellido1).toString();
				apellido2 = (data[x].apellido2).toString();
				if(data[x].correo != null) {
					correo = (data[x].correo).toString();
				}
				puesto = (data[x].puesto).toString();
				if(data[x].imagen != null){
					imagen = (data[x].imagen).toString();
				}
				else{
					imagen = "/images/Administrator.png";
				}
				
				if(data[x].descripcion != null){
					descripcion = (data[x].descripcion).toString();
				}
				//$("#responsibles").append("hola");
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
        
        //}
    }).error(function() {
        alert("ERROR");
    });



/*
	socket.emit('databaseAction', { query :  });
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
					imagen = "/images/Administrator.png";
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
	});*/

}

/*$("#resp").click(function(){
responsibles();

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
//	});

