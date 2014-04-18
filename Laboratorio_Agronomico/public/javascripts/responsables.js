
var resposables = ["daniel","jorge","favian"]; 
var n = resposables.length;
var section = document.getElementById("responsibles");
var h1 = document.createElement("h1");


/*$( document ).ready(function() {
	document.write("no");
	alert("NO");
	

});*/

$("#resp").click(function(){
	
	var q = dataBase('Select * from usuario');
	alert("yes");
	alert(q[0].puesto);

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

