
function loadnews(){
		var query = 'select * from noticia order by fecha_creacion desc';
		$.ajax({
            type: 'POST',
            data: JSON.stringify({query : query}),
            contentType: 'application/json',
            url: URL
        }).success(function(data) {
            if(data !== null) {  
                addToSideNews(data)
            }
        });
	}

function addToSideNews(table) {
    $("#newSide").empty();
    if(table!== null){
   for (var i = 0; i < table.length; i++) { 
    var row=table[i];
    var rowdate = new Date(table[i].fecha_creacion);
    $("#newSide").append(
            '<div class="row panel panel-default breadcrumb" onclick="addnewsTobody('+row.id_noticia+')"> '+
                    '<div class="row">'+
                            '<form class="form-inline" role="form">'+
                                 '<div class="form-group">'+
                                    '<h5>'+row.Title+'</h5>'+
                                 '</div>'+
                                 '<div class="form-group pull-right">'+
                                  '<h5>'+rowdate.toLocaleDateString("en-US")+'</h5>'+
                                '</div>'+
                            '</form>'+
                    '</div>'+
                    '<div class="row">'+
                        '<h5>'+row.Description+'</h5>'+
                    '</div>'+
            '</div>'
    );
    }
    }
}

function addnewsTobody(newsID){
    var query = 'select * from noticia where id_noticia='+newsID+'';
    $.ajax({
        type: 'POST',
        data: JSON.stringify({query : query}),
        contentType: 'application/json',
        url: URL
        }).success(function(data) {
            $("#newSideBody").empty();
                if(data!==null){
                    for (var i = 0; i < data.length; i++) { 
                        if(data[i].id_noticia==newsID){
                        var row=data[i];
                        var rowdate = new Date(data[i].fecha_creacion);
                        $("#newSideBody").append(            
                            '<form class="form-inline" role="form">'+
                                 '<div class="form-group"><h4>'+row.Title+'</h4></div>'+
                                 '<div class="form-group pull-right"><h5>'+rowdate.toLocaleDateString("en-US")+'</h5></div>'+
                            '</form>'+
                            '<div class="panel-footer">'+
                                '<p>'+row.Body+'</p>'+
                            '</div>'
                            );
                        }
                    }   
                }
            }).error(function() {
            alert("ERROR")
        });
};