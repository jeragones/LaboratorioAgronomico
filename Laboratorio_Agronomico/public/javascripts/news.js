/*
function loadNotice(value) {
    $.ajax({ 
        url: 'http://localhost:3000/notice',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ value : value })
    }).success(function(data) {
        //alert("esta funcionando");
        $("html").html(data);
    });
}*/



/*
function addToSideNews(NewsID) {
    var query = 'select * from noticia order by fecha_creacion desc';
    $.ajax({
            type: 'POST',
            data: JSON.stringify({query : query}),
            contentType: 'application/json',
            url: URL
        }).success(
        function(data) {
            if(data !== null) { 
                $("#newSide").empty();
                if(data!== null){
                    for (var i = 0; i < data.length; i++) { 
                        var row=data[i];
                        var rowdate = new Date(data[i].fecha_creacion);
                        if(row.id_noticia==NewsID){
                            $("#newSide").append(
                                '<div class="row panel panel-default breadcrumb newsItemSelected" onclick="addnewsTobody('+row.id_noticia+')"> '+
                                        '<div class="row">'+
                                                '<form class="form-inline" role="form">'+
                                                     '<div class="form-group NewsitemTitle">'+
                                                        '<h5>'+row.Title+'</h5>'+
                                                     '</div>'+
                                                     '<div class="form-group pull-right NewsitemDate">'+
                                                      '<h5>'+rowdate.toLocaleDateString("en-US")+'</h5>'+
                                                    '</div>'+
                                                '</form>'+
                                        '</div>'+
                                        '<div class="row Newsitemdecrip">'+
                                            '<h5>'+row.Description+'</h5>'+
                                        '</div>'+
                                '</div>'
                            );}
                        else
                            $("#newSide").append(
                                    '<div class="row panel panel-default breadcrumb newsItemReview" onclick="addnewsTobody('+row.id_noticia+')"> '+
                                            '<div class="row">'+
                                                    '<form class="form-inline" role="form">'+
                                                         '<div class="form-group NewsitemTitle">'+
                                                            '<h5>'+row.Title+'</h5>'+
                                                         '</div>'+
                                                         '<div class="form-group pull-right NewsitemDate">'+
                                                          '<h5>'+rowdate.toLocaleDateString("en-US")+'</h5>'+
                                                        '</div>'+
                                                    '</form>'+
                                            '</div>'+
                                            '<div class="row Newsitemdecrip">'+
                                                '<h5>'+row.descripcion+'</h5>'+
                                            '</div>'+
                                    '</div>'
                                );
                            }
                        $("#newSide").append(
                            '<div class="newspagination">'+
                               '<ul class="pagination">'+
                                    '<li class="disabled"><a href="#">&laquo;</a></li>'+
                                    '<li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>'+
                                    '<li><a href="#">&raquo;</a></li>'+
                                '</ul>'+
                             '</div>'
                        );
                    }
            }
        }).error(function() {
            alert("ERROR")
        });
}*/




function addnewsTobody(newsID) {
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
                                     '<div class="form-group"><h4>'+row.encabezado+'</h4></div>'+
                                     '<div class="form-group pull-right"><h5>'+rowdate.toLocaleDateString("en-US")+'</h5></div>'+
                                '</form>'+
                                '<div class="panel-footer">'+
                                    '<p>'+row.descripcion+'</p>'+
                                '</div>'
                                ); addToSideNews(data[i].id_noticia);
                        }
                    }   
                }
            }).error(function() {
            alert("ERROR")
        });

}


function loadXMLDoc(filename){
    if (window.XMLHttpRequest){
        xhttp=new XMLHttpRequest();
    }
    else{
         xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET",filename,false);
    xhttp.send();
    return xhttp.responseXML;
}

function load_xmlfile(){
    xmlDoc=loadXMLDoc("../upload/Azufre.xml");
    data=xmlDoc.getElementsByTagName("Row");
    for (i=0;i<data.length;i++){       
        if((data[i].nodeType==1)&&(i>0)){
            rowdata=data[i].getElementsByTagName("Data");
            var insertdata=new Array(rowdata.length);
            for(j=0;j<rowdata.length;j++){
                insertdata[j]=rowdata[j].childNodes[0].nodeValue;
            }
         insertxmldata_azufre(insertdata);
        }       
    }
}


