$(document).ready(function() {
	/*$.ajax({ 
        url: 'http://localhost:3000/session',
        type: 'GET',
        contentType: 'application/json',
        data: JSON.stringify({ value : value })
    }).success(function(data) {
        $("#opLogin").append(data);
    });*/
    




















}



/*
	//localStorage["sessionLAG"] = undefined;
	if(USUARIO === undefined || USUARIO === "undefined" || USUARIO == null)
		logout();
	else {
		var query = 'SELECT nombre, apellido1 FROM persona WHERE id_persona = '+USUARIO.split(",")[0];
		$.ajax({
            type: 'POST',
            data: JSON.stringify({query : query}),
            contentType: 'application/json',
            url: URL
        }).success(function(data) {
            if(data !== "") {
            	var name = data[0].nombre+" "+data[0].apellido1;
				login(name);
            }
        }).error(function() {
            alert("ERROR");
        }); 
	}
});

var cont = 0;
function validateLogin() {

	var user = $("#txtUser").val();
	var pass = $("#txtPassword").val();
	if(user === "") {
		$("#txtUser").css("border-style", "solid");
		$("#txtUser").css("border-color", "#A90E0A");
	} 
	if(pass === "") {
		$("#txtPassword").css("border-style", "solid");
		$("#txtPassword").css("border-color", "#A90E0A");
	} 
	if(user !== "" && pass !== "") {
		var query = 'SELECT id_persona, tipo, nombre, apellido1 FROM persona WHERE (usuario LIKE "'+user+'" OR correo LIKE "'+user+'") AND clave LIKE "'+pass+'"';
		$.ajax({
	        type: 'POST',
	        data: JSON.stringify({query : query}),
	        contentType: 'application/json',
	        jsonpCallback : "_testcb",
	        url: URL
	    }).success(function(data) {
            if(data !== "") {
				//loginSession(data[0].tipo, data[0].id_persona);
				USUARIO = data[0].id_persona+","+data[0].tipo;
				localStorage["sessionLAG"] = USUARIO;
				var name = data[0].nombre+" "+data[0].apellido1;
				login(name);
            } else {
            	$("#txtPassword").val("");
				$("#txtPassword").css("border-style", "solid");
				$("#txtPassword").css("border-color", "#A90E0A");
				cont++;
				if(cont == 5) {
					$("#txtUser").val("");
					$("#txtUser").css("border-style", "solid");
					$("#txtUser").css("border-color", "#A90E0A");
					cont = 0;
				}
            }
        }).error(function(error) {
            alert("ERROR: "+ JSON.stringify(error));
        });
	}
}

function loginSession(type, id_persona) {
	if(type === "Admin")
		USUARIO = id_persona+",admin";
	else {
		var query = 'SELECT id_usuario FROM usuario WHERE id_persona ='+id_persona;
		$.ajax({
            type: 'POST',
            data: JSON.stringify({query : query}),
            contentType: 'application/json',
            url: URL
        }).success(function(data) {
            if(data !== "")
            	USUARIO = id_persona+",user";
            else {
            	query = 'SELECT id_cliente FROM cliente WHERE id_persona ='+id_persona;
            	$.ajax({
		            type: 'POST',
		            data: JSON.stringify({query : query}),
		            contentType: 'application/json',
		            url: URL
		        }).success(function(data) {
		            if(data !== "")
		            	USUARIO = id_persona+",client";
		        }).error(function() {
		            alert("ERROR");
		        });
            }
        }).error(function() {
            alert("ERROR");
        });
	}
	localStorage["sessionLAG"] = USUARIO;
}

function login(name) {
	$("#opLogin").empty();
	$("#opLogin").append('<a onclick="loginMenu()" href="#" class="dropdown-toggle" data-toggle="dropdown">'+name+'<strong class="caret"></strong></a>' +
						'<div id="logMenu" class="dropdown-menu">' +
							'<ul>' +
								'<li><a onclick="loginPerfil()">Abrir perfil</a></li>' +
								'<li><a onclick="loginClose()">Cerrar Sesión</a></li>' +
							'</ul>' +
						'</div>'
	);
}

function logout() {
	USUARIO = undefined;
	$("#opLogin").empty();
	$("#opLogin").append('<a onclick="loginMenu()" href="#" class="dropdown-toggle" data-toggle="dropdown">Iniciar Sesión<strong class="caret"></strong></a>' +
						'<div id="logMenu" class="dropdown-menu">' +
						    '<div id="frmLogin" class="form-inline" role="form">' +
						        '<input id="txtUser" class="form-control" placeholder="Usuario: / Correo:">' +
						        '<input id="txtPassword" class="form-control" type="password" placeholder="Clave:">' +
						        '<button id="btnLogin" class="btn btn-primary" onclick="validateLogin()" role="button">iniciar</button>' +
						    '</div>' +
						'</div>'
	);
	$("#containerBody").load("news.html");
}

function loginMenu() {
	$("#logMenu").slideDown("1500");
	$(document).mouseup(function (e) {
	    if (!$("#logMenu").is(e.target) && $("#logMenu").has(e.target).length === 0)
	        $("#logMenu").slideUp("1500");
	});
}

function loginClose() {
	$("#logMenu").slideUp("1500");
	logout();
}

function loginPerfil() {
	$("#logMenu").slideUp("1500");
	profileView();
}*/