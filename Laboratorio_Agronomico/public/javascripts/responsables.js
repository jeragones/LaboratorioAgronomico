
var resposables = ["daniel","jorge","favian"]; 
var n = resposables.length;
var section = document.getElementById("responsibles");
var h1 = document.createElement("h1");


/*$( document ).ready(function() {
	document.write("no");
	alert("NO");
	

});*/

$("#resp").click(function(){
	
	for(var r in resposables){
		var newarticle = document.createElement('article');
		newarticle.innerHTML= "<article>"+resposables[r]+"</article>";
	
		section.appendChild(newarticle);
		
	}

// Agrega articles al section
	/*var newarticle = document.createElement('article');
	newarticle.innerHTML= "<article>daniel</article>";
	
	section.appendChild(newarticle);
	*/	
	
	});

