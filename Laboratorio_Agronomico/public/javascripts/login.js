var socket = io.connect('http://localhost:3000');

$(document).ready(function() {
	if(localStorage["sessionAgronomico"] === undefined || localStorage["sessionAgronomico"] === "undefined" || localStorage["sessionAgronomico"] == null) {
		logout();
	} else {
		var query = 'SELECT nombre, apellido1 FROM persona WHERE usuario LIKE "'+localStorage["sessionAgronomico"]+'"';
		socket.emit('databaseAction', { query : query });
		socket.on('databaseAction', function(data) {
			if(data.error) {
				alert("ocurrio un error en la consulta");
			} else {
				var name = data.data[0].nombre+" "+data.data[0].apellido1;
				login(localStorage["sessionAgronomico"], name);
			}
		});
	}

	$("#txtUser").focus(function() {
		$(this).css("border-style", "hidden");
	});

	$("#txtPassword").focus(function() {
		$(this).css("border-style", "hidden");
	});
});

function validateLogin() {
	var cont = 0;
	var user = $("#txtUser").val();
	var pass = $("#txtPassword").val();
	localStorage["sessionIntent"] = 0;
	if(user === "") {
		$("#txtUser").css("border-style", "solid");
		$("#txtUser").css("border-color", "#A90E0A");
	} 
	if(pass === "") {
		$("#txtPassword").css("border-style", "solid");
		$("#txtPassword").css("border-color", "#A90E0A");
	} 
	if(user !== "" && pass !== "") {
		var query = 'SELECT usuario, nombre, apellido1 FROM persona WHERE (usuario LIKE "'+user+'" OR correo LIKE "'+user+'") AND clave LIKE "'+pass+'"';
		socket.emit('databaseAction', { query : query });
		socket.on('databaseAction', function(data) {
			cont--;
			//alert(JSON.stringify(data.data));
			if(data.error) {
				alert("ocurrio un error en la consulta");
			} else {
				if(data.data.length == 0) {
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
				} else {
					$("#txtUser").css("border-style", "hidden");
					$("#txtPassword").css("border-style", "hidden");
					var name = data.data[0].nombre+" "+data.data[0].apellido1;
					login(data.data[0].usuario, name);
				}
			}
		});
	}
}

function login(user, name) {
	localStorage["sessionAgronomico"] = user;
	$("#containerLogin").empty();
	$("#containerLogin").append('<img id="logImage" class="logImage" onclick="loginMenu()" src="/images/logimage.png">');
	$("#containerLogin").append('<a id="logName" title="Ir a mi perfil">'+name+'</a>');
	$("#containerLogin").append('<section id="logMenu" value="0"><ul><li><a onclick="loginPerfil()">Perfil</a></li> <li><a onclick="loginClose()">Cerrar Sesión</a></li></ul></section>');
	var position = $("#logImage").position();
	$("#logMenu").css({top: position.top+15, left: position.left});
	$("#logMenu ul li").click().mouseover(function() {
	    $(this).children().animate({paddingLeft:"8px"}, {queue:false, duration:300});
	}).mouseout(function() {
	    $(this).children().animate({paddingLeft:"0"}, {queue:false, duration:300});
	});
}

function logout() {
	localStorage["sessionAgronomico"] = undefined;
	$("#containerLogin").empty();
	$("#containerLogin").append('<input id="txtUser" class="txtLogin" type="text" placeholder="Usuario: / Correo:">');
	$("#containerLogin").append('<input id="txtPassword" class="txtLogin" type="password" placeholder="Clave:">');
	$("#containerLogin").append('<button id="btnLogin" class="btnLogin" onclick="validateLogin()">iniciar</button>');
}

function loginMenu() {
	$("#logMenu").slideDown("1500");
	$(document).mouseup(function (e) {
	    if (!$("#logMenu").is(e.target) && $("#logMenu").has(e.target).length === 0) {
	        $("#logMenu").slideUp("1500");
	    }
	});
}

function loginClose() {
	$("#logMenu").slideUp("1500");
	logout();
}

function loginPerfil() {
	$("#logMenu").slideUp("1500");
	// mostrar el perfil del usuario ************************************************************************************
}