function responsibles() {
	var query = "SELECT nombre, apellido1, apellido2, correo, puesto, imagen, descripcion FROM persona INNER JOIN usuario ON persona.id_persona = usuario.id_persona";
	$.ajax({
        type: 'POST',
        data: JSON.stringify({query : query}),
        contentType: 'application/json',
        jsonpCallback : "_testcb",
        cache: false,
        timeout: 5000,
        url: URL
    }).success(function(data) {
    	if(data !== "") {
        	var nombre, apellido1,apellido2,correo="",puesto,imagen="",descripcion="";
        	$("#containerBody").empty();
        	for (var x in data) {
				nombre = (data[x].nombre).toString();
				apellido1 = (data[x].apellido1).toString();
				apellido2 = (data[x].apellido2).toString();
				if(data[x].correo != null) {
					correo = (data[x].correo).toString();
				}
				puesto = (data[x].puesto).toString();
				if(data[x].imagen != null) {
					imagen = (data[x].imagen).toString();
				} else {
					imagen = "/images/Administrator.png";
				}
				if(data[x].descripcion != null) {
					descripcion = (data[x].descripcion).toString();
				}
				$("#containerBody").append(
					'<table id="tableResponsible">' +
						'<tr>' +
							'<td rowspan="4"><img src="'+imagen+'" class="imgResponsible"></td>' +
							'<td class="nameResponsible"><h2>'+nombre+' '+apellido1+' '+apellido2+'</h2></td>' +
						'</tr>' +
						'<tr>' +
							'<td class="jobResponsible"><h4>'+puesto+'</h4></td>' +
						'</tr>' +
						'<tr>' +
							'<td class="emailResponsible"><a href="mailto:'+correo+'">'+correo+'</a></td>' +
						'</tr>' +
						'<tr>' +
							'<td>'+descripcion+'</p></td>' +
						'</tr>' +
						'<tr><td colspan="2"><td></tr>' +
					'</table>'
				);
			}
        }
    }).error(function() {
        alert("ERROR");
    });
}
