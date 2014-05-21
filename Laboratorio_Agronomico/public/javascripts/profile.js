function profileView() {
	var query;
	switch(USUARIO.split(",")[1]) {
    case "1":
        query = "SELECT nombre, apellido1, apellido2, correo FROM persona WHERE id_persona="+USUARIO.split(",")[0];
        break;
    case "2":
        query = "SELECT nombre, apellido1, apellido2, correo, imagen, descripcion FROM persona INNER JOIN usuario ON persona.id_persona=usuario.id_persona WHERE persona.id_persona="+USUARIO.split(",")[0];
        break;
    case "3":
        query = "SELECT nombre, apellido1, apellido2, correo, provincia, canton, distrito, direccion FROM persona INNER JOIN cliente ON persona.id_persona=cliente.id_persona WHERE persona.id_persona="+USUARIO.split(",")[0];
        break;
    }
	
    $("#containerBody").append('<section id="profSection">');
    $("#containerBody").append('<article id="profInformation">');
	$("#containerBody").append('<table id="profTable">');

	var name, name1, name2, email="";
	
	$.ajax({
        type: 'POST',
        data: JSON.stringify({query : query}),
        contentType: 'application/json',
        url: URL
    }).success(function(data) {
		//alert(JSON.stringify(data));
		if(data !== "") {
			name = (data[0].nombre).toString();
			name1 = (data[0].apellido1).toString();
			name2 = (data[0].apellido2).toString();
			if(data[0].correo != null) 
				email = (data[0].correo).toString();
							
			alert(name+" "+name1+" "+name2+" "+email);
			
			$("#containerBody").append('<tr>');
			$("#containerBody").append('<td><label>Nombre:</label></td>');
			$("#containerBody").append('<td><label>'+name+' 'name1+' '+name2+'</label></td>');
			$("#containerBody").append('<td><label>modificar</label></td>');
			$("#containerBody").append('</tr>');
			/*$("#containerBody").append('<tr>');
			$("#containerBody").append('<td><label>Correo:</label></td>');
			$("#containerBody").append('<td><label>'+email+'</label></td>');
			$("#containerBody").append('<td><label>modificar</label></td>');
			$("#containerBody").append('</tr>');
			/*
			switch(USUARIO.split(",")[1]) {
		    case "2":
		    	$("#profTable").append('<tr>');
				$("#profTable").append('<td><label>Fotografía:</label></td>');
		    	if(data[0].imagen != null)
					$("#profTable").append('<td><label>'+data[0].imagen+'</label></td>');
				else
					$("#profTable").append('<td><label>'+data[0].imagen+'</label></td>');
		        $("#profTable").append('<td><label>modificar</label></td>');
				$("#profTable").append('</tr>');
				$("#profTable").append('<tr>');
				$("#profTable").append('<td><label>Descripción:</label></td>');
		    	if(data[0].descripcion != null)
					$("#profTable").append('<td><label>'+data[0].descripcion+'</label></td>');
				else
					$("#profTable").append('<td></td>');
		        $("#profTable").append('<td><label>modificar</label></td>');
				$("#profTable").append('</tr>');
		        break;
		    case "3":
		        $("#profTable").append('<tr>');
				$("#profTable").append('<td><label>Provincia:</label></td>');
				$("#profTable").append('<td><label>'+data[0].provincia+'</label></td>');
		        $("#profTable").append('<td><label>modificar</label></td>');
				$("#profTable").append('</tr>');
				$("#profTable").append('<tr>');
				$("#profTable").append('<td><label>Cantón:</label></td>');
				$("#profTable").append('<td><label>'+data[0].canton+'</label></td>');
		        $("#profTable").append('<td><label>modificar</label></td>');
				$("#profTable").append('</tr>');
				$("#profTable").append('<tr>');
				$("#profTable").append('<td><label>Distrito:</label></td>');
				$("#profTable").append('<td><label>'+data[0].distrito+'</label></td>');
		        $("#profTable").append('<td><label>modificar</label></td>');
				$("#profTable").append('</tr>');
				$("#profTable").append('<tr>');
				$("#profTable").append('<td><label>Dirección:</label></td>');
				$("#profTable").append('<td><label>'+data[0].direccion+'</label></td>');
		        $("#profTable").append('<td><label>modificar</label></td>');
				$("#profTable").append('</tr>');
		        break;
		    }*/
		}
	});
	
	$("#containerBody").append('</table>');
	$("#containerBody").append('</article>');
	$("#containerBody").append('<article id="profAnalysis"></article>');
	$("#containerBody").append('</section>');
}