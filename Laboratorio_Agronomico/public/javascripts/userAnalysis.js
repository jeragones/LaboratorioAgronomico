/*
$('#dropFile').click(function(e) {
    alert("abrir archivo");

});*/

function radioAnalysis(category) {
    
    /*var query = 'SELECT nombre FROM analisis WHERE categoria="'+category+'"';
    alert(query);
    $.ajax({
        type: 'POST', 
        data: JSON.stringify({query : query}),
        contentType: 'application/json',
        url: url
    }).success(function(data) {
        alert(JSON.stringify(data));
        if(data !== "") {
            var options = "";
            for( var i=0; i < data.length; i++) { 
                 options += '<option>'+(data[i].nombre).toString()+'</option>';
            }
            alert(options);
            //$("#slpAnalysis").prop('disabled', true);
            $("#slpAnalysis").append(options);
        }
        //$("html").html(data);
    });*/
}



function insertxmldata_azufre(row){
	if(row.length==6){
		var query = 'insert into Azufre(No_Muestra,ID_Muestra,Type_Muestra,Fosforo,Abs,Wavelengtn) values('+row[0]+','+row[1]+','+row[2]+','+row[3]+','+row[4]+','+row[5]+');';
		$.ajax({
	        type: 'GET',
	        data: JSON.stringify({query : query}),
	        contentType: 'application/json',
	        url: URL
	    }).success(function(data) {
	    	c=0;
        }).error(function(error) {
            alert("ERROR: "+ JSON.stringify(error));
        });
	}
}