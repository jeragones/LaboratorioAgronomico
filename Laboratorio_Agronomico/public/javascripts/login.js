$(document).ready(function() {
	if(localStorage["sessionLAG"] === undefined || localStorage["sessionLAG"] === "undefined" || localStorage["sessionLAG"] == null)
		logout();
	else {
		var query = 'SELECT nombre, apellido1 FROM persona WHERE id_persona = '+localStorage["sessionLAG"].split(",")[0];
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
 
	$("#txtUser").focus(function() {
		$(this).css("border-style", "hidden");
	});

	$("#txtPassword").focus(function() {
		$(this).css("border-style", "hidden");
	});
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
		var query = 'SELECT id_persona, usuario, nombre, apellido1 FROM persona WHERE (usuario LIKE "'+user+'" OR correo LIKE "'+user+'") AND clave LIKE "'+pass+'"';
		$.ajax({
            type: 'POST',
            data: JSON.stringify({query : query}),
            contentType: 'application/json',
            url: URL
        }).success(function(data) {
            if(data !== "") {
            	$("#txtUser").css("border-style", "hidden");
				$("#txtPassword").css("border-style", "hidden");
				loginSession(data[0].usuario, data[0].id_persona);
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
        }).error(function() {
            alert("ERROR");
        });
	}
}

function loginSession(user, id_persona) {
	if(user === "Admin")
		localStorage["sessionLAG"] = id_persona+",admin";
	else {
		var query = 'SELECT id_usuario FROM usuario WHERE id_persona ='+id_persona;
		$.ajax({
            type: 'POST',
            data: JSON.stringify({query : query}),
            contentType: 'application/json',
            url: URL
        }).success(function(data) {
            if(data !== "")
            	localStorage["sessionLAG"] = id_persona+",user";
            else {
            	query = 'SELECT id_cliente FROM cliente WHERE id_persona ='+id_persona;
            	$.ajax({
		            type: 'POST',
		            data: JSON.stringify({query : query}),
		            contentType: 'application/json',
		            url: URL
		        }).success(function(data) {
		            if(data !== "")
		            	localStorage["sessionLAG"] = id_persona+",client";
		        }).error(function() {
		            alert("ERROR");
		        });
            }
        }).error(function() {
            alert("ERROR");
        });
	}
}

function login(name) {
	$("#containerLogin").empty();
	$("#containerLogin").append('<img id="logImage" class="logImage" onclick="loginMenu()" src="/images/logimage.png">');
	$("#containerLogin").append('<a id="logName" onclick="loginPerfil()" title="Ir a mi perfil">'+name+'</a>');
	$("#containerLogin").append('<section id="logMenu"><ul><li><a onclick="loginPerfil()">Perfil</a></li> <li><a onclick="loginClose()">Cerrar Sesión</a></li></ul></section>');
	var position = $("#logImage").position();
	$("#logMenu").css({top: position.top+15, left: position.left});
	$("#logMenu ul li").click().mouseover(function() {
	    $(this).children().animate({paddingLeft:"8px"}, {queue:false, duration:300});
	}).mouseout(function() {
	    $(this).children().animate({paddingLeft:"0"}, {queue:false, duration:300});
	});
}

function logout() {
	localStorage["sessionLAG"] = undefined;
	$("#containerLogin").empty();
	$("#containerLogin").append('<form action="/login" method="post">');
	$("#containerLogin").append('<input id="txtUser" class="txtLogin" type="text" placeholder="Usuario: / Correo:">');
	$("#containerLogin").append('<input id="txtPassword" class="txtLogin" type="password" placeholder="Clave:">');
	$("#containerLogin").append('<button id="btnLogin" class="btnLogin" onclick="validateLogin()">iniciar</button>');
	$("#containerLogin").append('</form>');
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
	$("#containerBody").load("profile.html");
}