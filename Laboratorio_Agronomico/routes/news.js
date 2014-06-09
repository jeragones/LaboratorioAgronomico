
var app = require('../app');

exports.news = function(req, res){
	var query = "SELECT id_noticia, encabezado, descripcion FROM noticia ORDER BY fecha_creacion DESC";
	app.connection.query(query, function (err, resp) {
		if(err)
			console.log("ERROR: CONSULTA A LA BASE DE DATOS");
		else {
			if(resp.length > 0) {
				var head, date, description;
				var data = [];
				for (var i in resp) {
					head = (resp[i].encabezado).toString();
					date = new Date(resp[i].fecha_creacion);
					description = (resp[i].descripcion).toString();
					var notice = [ {head: head}, {date: date.toLocaleDateString("en-US")}, {description: description}, {id: i} ];
					data.push(notice);
				}
				console.log(data);
				res.render('news', { data: data });
			} 
		} 
	});
};

exports.notice = function(req, res) {
    var value = req.body.value;
    console.log("hola: "+JSON.stringify(value));
    var query = "SELECT id_noticia, encabezado, descripcion FROM noticia WHERE id_noticia="+value;
    app.connection.query(query, function (err, resp) {
        if(err)
            console.log("ERROR: CONSULTA A LA BASE DE DATOS");
        else {
            if(resp.length > 0) {
                var id, head, date, description;
                var data = [];
                /*var head = (resp[0].encabezado).toString();
                var date = new Date(resp[0].fecha_creacion);
                var description = (resp[0].descripcion).toString();
                var data = [ {head: head}, {date: date.toLocaleDateString("en-US")}, {description: description}, {id: "1"} ];*/
                for (var i in resp) {
                    id = (resp[i].id_noticia).toString();
                    head = (resp[i].encabezado).toString();
                    date = new Date(resp[i].fecha_creacion);
                    description = (resp[i].descripcion).toString();
                    var notice = [ {head: head}, {date: date.toLocaleDateString("en-US")}, {description: description}, {id: id} ];
                    data.push(notice);
                }
                console.log(data);
                res.render('notice', { data: data });
            } 
        } 
    });
};



/*
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
                                     '<div class="form-group"><h4>'+row.Title+'</h4></div>'+
                                     '<div class="form-group pull-right"><h5>'+rowdate.toLocaleDateString("en-US")+'</h5></div>'+
                                '</form>'+
                                '<div class="panel-footer">'+
                                    '<p>'+row.Body+'</p>'+
                                '</div>'
                                ); addToSideNews(data[i].id_noticia);
                        }
                    }   
                }
            }).error(function() {
            alert("ERROR")
        });
}*/