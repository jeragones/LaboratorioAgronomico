
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////// EJECUCION DE QUERYS EN LA BASE DE DATOS ///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var URL = 'http://localhost:3000/database';
var USUARIO = localStorage["sessionLAG"];

function loadProvince(select) {
	var query = 'SELECT id_provincia, nombre FROM provincia ORDER BY nombre ASC';
	$.when(ajax(query, URL)).then(function(data) {
		if(data !== "") {
			for (var x in data)
				$(select).append($('<option>', { value: data[x].id_provincia, text: data[x].nombre }));
		}
	});
}

function loadCanton(id, select) {
	var query = 'SELECT id_canton, nombre FROM canton WHERE id_provincia='+id+' ORDER BY nombre ASC';
	$.when(ajax(query, URL)).then(function(data) {
		if(data !== "") {
			for (var x in data)
				$(select).append($('<option>', { value: data[x].id_canton, text: data[x].nombre }));
		}
	});
}

function loadDistrict(id, select) {
	var query = 'SELECT id_distrito, nombre FROM distrito WHERE id_canton='+id+' ORDER BY nombre ASC';
	//alert(query);
	$.when(ajax(query, URL)).then(function(data) {
		if(data !== "") {
			//alert(JSON.stringify(data));
			for (var x in data)
				$(select).append($('<option>', { value: data[x].id_distrito, text: data[x].nombre }));
		}
	});
}

function ajax(query, url) {
	return $.ajax({
        type: 'POST',
        data: JSON.stringify({query : query}),
        contentType: 'application/json',
        url: url
    });
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// CONSULTAS A LA BASE DE DATOS ////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
