var id1, id2, name, name1, name2, email="", job, image="", description, province, canton, district, direction, phone="";

function profileView() {
	
	var query1, query2, query3;
	id1 = USUARIO.split(",")[0];
	id2 = USUARIO.split(",")[1];
	query2 = 'SELECT numero FROM telefono WHERE id_persona='+id1;
	//query3 = 'SELECT numero FROM telefono WHERE id_persona='+id;
	switch(id2) {
    case "1":
        query1 = "SELECT nombre, apellido1, apellido2, correo FROM persona WHERE id_persona="+id1;
        break;
    case "2":
        query1 = "SELECT nombre, apellido1, apellido2, correo, puesto, imagen, descripcion FROM persona INNER JOIN usuario ON persona.id_persona=usuario.id_persona WHERE persona.id_persona="+id1;
        break;
    case "3":
        query1 = "SELECT nombre, apellido1, apellido2, correo, provincia, canton, distrito, direccion FROM persona INNER JOIN cliente ON persona.id_persona=cliente.id_persona WHERE persona.id_persona="+id1;
        break;
    }

	$.when(ajax(query1, URL), ajax(query2, URL)).then(function(data1, data2) {
		
		var result="";

		$("#containerBody").empty();

		if(data1[0] !== "") {
			name = (data1[0][0].nombre).toString();
			name1 = (data1[0][0].apellido1).toString();
			name2 = (data1[0][0].apellido2).toString();
			if(data1[0][0].correo != null) 
				email = (data1[0][0].correo).toString();			
		}

		if(data2[0] !== "") { 
			if(data2[0][0].numero != null)
				phone = (data2[0][0].numero).toString();
		}

		result  +=  '<section id="profSection">' +
						'<article id="profInformation">' +
	  						'<table class="profTable">' +
	  							'<tr>' +
	  								'<td class="profTd"><h3>Nombre:</h3></td>' +
	  								'<td class="profTd"><h4>'+name+' '+name1+' '+name2+'</h4></td>' +
	  							'</tr>' +
	  							'<tr>' +
	  								'<td class="profTd"><h3>Correo:</h3></td>' +
	  								'<td class="profTd"><h4>'+email+'</h4></td>' +
	  							'</tr>' +
	  							'<tr>' +
	  								'<td class="profTd"><h3>Teléfono:</h3></td>' +
	  								'<td class="profTd"><h4>'+phone+'</h4></td>' +
	  							'</tr>';

		if(id2 === "2") {
			job = data1[0][0].puesto;
			image = data1[0][0].imagen;
			description = data1[0][0].descripcion;
			result  +=  '<tr>' +
							'<td class="profTd"><h3>Puesto:</h3></td>' +
							'<td class="profTd"><h4>'+job+'</h4></td>' +
						'</tr>';
			if(image != null) {
				result  +=  '<tr>' +
  								'<td class="profTd"><h3>Imagen:</h3></td>' +
  								'<td class="profTd"><h4>'+image+'</h4></td>' +
  							'</tr>';
			}
			if(description != null) {
				result  +=  '<tr>' +
  								'<td class="profTd"><h3>Descripción:</h3></td>' +
  								'<td class="profTd"><h4>'+description+'</h4></td>' +
  							'</tr>';
			}
		} else if(id2 === "3") {
			province = data1[0][0].provincia;
			canton = data1[0][0].canton;
			district = data1[0][0].distrito;
			direction = data1[0][0].direccion;
			result  +=  '<tr>' +
							'<td class="profTd"><h3>Provincia:</h3></td>' +
							'<td class="profTd"><h4>'+province+'</h4></td>' +
						'</tr>' +
						'<tr>' +
							'<td class="profTd"><h3>Cantón:</h3></td>' +
							'<td class="profTd"><h4>'+canton+'</h4></td>' +
						'</tr>' +
						'<tr>' +
							'<td class="profTd"><h3>Distrito:</h3></td>' +
							'<td class="profTd"><h4>'+district+'</h4></td>' +
						'</tr>' +
						'<tr>' +
							'<td class="profTd"><h3>Dirección:</h3></td>' +
							'<td class="profTd"><h4>'+direction+'</h4></td>' +
						'</tr>';
		}

		result  +=  '<tr>' +
						'<td colspan="2" class="profTd">' +
							'<button class="btn btn-primary" onclick="modProfile()" role="button">' +
								'<span class="glyphicon glyphicon-pencil"></span>&nbsp;&nbsp;Editar' +
							'</button>' +
						'</td>' +
					'</tr>' + 
					'</table>' +
					'</article>' +
					'</section>';
		$("#containerBody").append(result);
	});
}

// id1, id2, name, name1, name2, email, job, image, description, province, canton, district, direction, phone
function modProfile() {
	var result="";
	result  +=  '<section id="profSection">' +
					'<article id="profInformation">' +
  						'<table class="profTable">' +
  							'<tr>' +
  								'<td class="profTd">' +
  									'<div class="form-group">' +
    									'<label for="profTxtName">Nombre</label>' +
    									'<input type="text" class="form-control" id="profTxtName" value="'+name+'" placeholder="Nombre">' +
  									'</div>' +
								'</td>' +
  							'</tr>' +
  							'<tr>' +
  								'<td class="profTd">' +
  									'<div class="form-group">' +
    									'<label for="profTxtApell1">Primer Apellido</label>' +
    									'<input type="text" class="form-control" id="profTxtApell1" value="'+name1+'" placeholder="Apellido">' +
  									'</div>' +
								'</td>' +
  							'</tr>' +
  							'<tr>' +
  								'<td class="profTd">' +
  									'<div class="form-group">' +
    									'<label for="profTxtApell2">Segundo Apellido</label>' +
    									'<input type="text" class="form-control" id="profTxtApell2" value="'+name2+'" placeholder="Apellido">' +
  									'</div>' +
								'</td>' +
  							'</tr>' +
  							'<tr>' +
  								'<td class="profTd">' +
  									'<div class="form-group">' +
    									'<label for="profTxtEmail">Correo Electrónico</label>' +
    									'<input type="email" class="form-control" id="profTxtEmail" value="'+email+'" placeholder="Correo">' +
  									'</div>' +
								'</td>' +
  							'</tr>' +
  							'<tr>' +
  								'<td class="profTd">' +
  									'<div class="form-group">' +
    									'<label for="profTxtPhone">Teléfono</label>' +
    									'<input type="text" class="form-control" id="profTxtPhone" value="'+phone+'" placeholder="Teléfono">' +
  									'</div>' +
								'</td>' +
  							'</tr>';
/*
	if(id2 === "2") {
		job = data1[0][0].puesto;
		image = data1[0][0].imagen;
		description = data1[0][0].descripcion;
		result  +=  '<tr>' +
						'<td class="profTd"><h3>Puesto:</h3></td>' +
						'<td class="profTd"><h4>'+job+'</h4></td>' +
					'</tr>';
		if(image != null) {
			result  +=  '<tr>' +
							'<td class="profTd">' +
								'<div class="input-group">' +
									'<span class="input-group-addon">Imagen</span>' +
									//'<input type="file" class="form-control" placeholder="Imagen">' +
									'<input type="text" text="'+phone+'" class="form-control" placeholder="Teléfono">' +
								'</div>' +
							'</td>' +
						'</tr>';
		}
		if(description != null) {
			result  +=  '<tr>' +
							'<td class="profTd">' +
								'<div class="input-group">' +
									'<span class="input-group-addon">Descripción</span>' +
									'<textarea rows="9" cols="50" class="form-control">'+description+'</textarea>' +
									//'<input type="text" text="'+phone+'" class="form-control" placeholder="Teléfono">' +
								'</div>' +
							'</td>' +
						'</tr>';
		}
	} else*/ if(id2 === "3") {
		result  +=  '<tr>' +
						'<td class="profTd">' +
							'<div class="form-group">' +
								'<label for="profCmbProvince">Provincia</label>' +
								'<select id="profCmbProvince" class="form-control selectpicker" data-container="body" data-live-search="true">'+PROVINCIAS+'</select>' +
							'</div>' +
						'</td>' +
					'</tr>' +
					'<tr>' +
						'<td class="profTd">' +
							'<div class="form-group">' +
								'<label for="profCmbCanton">Cantón</label>' +
								'<select id="profCmbCanton" class="form-control selectpicker" data-container="body" data-live-search="true">'+CANTONES+'</select>' +
							'</div>' +
						'</td>' +
					'</tr>' +
					'<tr>' +
						'<td class="profTd">' +
							'<div class="form-group">' +
								'<label for="profCmbDistrict">Distrito</label>' +
								'<select id="profCmbDistrict" class="form-control selectpicker" data-container="body" data-live-search="true">'+DISTRITOS+'</select>' +
							'</div>' +
						'</td>' +
					'</tr>' +
					'<tr>' +
						'<td class="profTd">' +
							'<div class="form-group">' +
								'<label for="profTxtDirection">Dirección</label>' +
								'<textarea id="profTxtDirection" rows="4" cols="50" class="form-control">'+direction+'</textarea>' +
							'</div>' +
						'</td>' +
					'</tr>';
	}

	result  +=  '<tr>' +
					'<td class="profTd">' +
						'<button type="button" class="btn btn-success" onclick="modifyProfile()">' +
							'<span class="glyphicon glyphicon-floppy-disk"></span>&nbsp;&nbsp;Guardar' +
						'</button>' +
						'<button type="button" class="btn btn-danger" onclick="profileView()">' +
							'<span class="glyphicon glyphicon-ban-circle"></span>&nbsp;&nbsp;Cancelar' +
						'</button>' +
					'</td>' +
				'</tr>' + 
				'</table>' +
				'</article>' +
				'</section>';

	$("#containerBody").empty();
	$("#containerBody").append(result);
	$(".selectpicker").selectpicker();
}

function modifyProfile() {

}