/*
$('#dropFile').click(function(e) {
    alert("abrir archivo");
<<<<<<< HEAD
});*/


=======
});


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
>>>>>>> 2c00d59511cd07fbda197cbf1c58ac9fb68ddb92
