function contact() {
	var numero, email="";
	var query = "SELECT correo, numero FROM persona INNER JOIN telefono ON persona.id_persona=telefono.id_persona AND tipo=1";
	$.ajax({
        type: 'POST',
        data: JSON.stringify({query : query}),
        contentType: 'application/json',
        url: URL
    }).success(function(data) {
		if(data !== "") {
			for (var x in data) {
				numero = (data[x].numero).toString();
				if(data[x].correo != null) {
					email = (data[x].correo).toString();
				}		
			}
			$("#containerFooter").append('<table>');
			$("#containerFooter").append("<tr>");
			$("#containerFooter").append('<td><label class="lblContactInfo">Dirección:</label></td>');
			$("#containerFooter").append('<td><label>Alajuela, San Carlos, Santa Clara</label></td>');
			$("#containerFooter").append('<td><label class="lblContactInfo">Teléfono:</label></td>');
			$("#containerFooter").append('<td><label>'+numero.substring(0, 4)+"-"+numero.substring(4, 8)+'</label></td>');
			$("#containerFooter").append('<td><label class="lblContactInfo">Correo:</label></td>');
			$("#containerFooter").append('<td><a class="contactEmail" href="mailto:'+email+'">'+email+'</a></td>');
			$("#containerFooter").append("</tr>");
		}
	});
}