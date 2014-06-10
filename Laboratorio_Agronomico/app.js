
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// DEPENDENCIA DE MODULOS ////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var express = require('express');
//var jshtml = require('jshtml-express');
var routes = require('./routes');
var responsibles = require('./routes/responsibles');
var news = require('./routes/news');
var analysis = require('./routes/analysis');
var client = require('./routes/client');
var http = require('http');
var path = require('path');
var mysql = require('mysql');
var app = express();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// CONEXION CON LA BASE DE DATOS /////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var connection = mysql.createConnection({

	user:  'Admin',
	password: 'hufVQcVJypRHpKhb', 

	host: 'localhost',
	port: 3306, 
	database: 'suelosdb'
});

connection.connect(function(err) {
   	if (err) console.log("error conexion con la base de datos")
   	else console.log("conexion exitosa con la base de datos")
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// CONFIGURACION DEL SERVIDOR ////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.engine('jshtml', jshtml);
//app.set('view engine', 'jshtml');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser()); 
app.use(express.session({secret: 'session1234567890'}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////// RUTAS DE ARCHIVOS POR EL LADO DEL CLIENTE /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/', routes.index);
app.get('/addclient', client.addclient);
app.get('/responsibles', responsibles.responsibles);
app.get('/news', news.news);
app.get('/analysis', analysis.analysis);
app.post('/notice', news.notice);
app.post('/loadCanton', client.canton);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// EJECUCION DEL SERVIDOR ////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

http.createServer(app).listen(app.get('port'), function() {
	console.log('Servidor Express ejecutandose en el puerto ' + app.get('port'));
});

/*
var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Servidor Express ejecutandose en el puerto ' + app.get('port'));
});

var io = require('socket.io').listen(server);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////// EJECUCION DE QUERYS EN LA BASE DE DATOS ///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.post('/login', function(req, res) { 
	console.log(req.body.query);
	connection.query(req.body.query, function (err, resp) {
		if(err)
			console.log("ERROR: CONSULTA A LA BASE DE DATOS");
		else {
			if(resp.length == 0)
				res.send(null);
			else
				res.send(resp);
		}
	});
});

app.post('/database', function(req, res) { 
	connection.query(req.body.query, function (err, resp) {
		if(err)
			console.log("ERROR: CONSULTA A LA BASE DE DATOS");
		else {
			if(resp.length == 0) {
				console.log("consulta vacia");	
				res.send(null);
			} else {
				console.log("consulta exitosa");
				res.send(resp);
			}
		}
	});
});

module.exports.connection = connection;


/*
io.on('connection', function(socket, req) {
	socket.on('databaseAction', function(data) { 
		connection.query(data.query, function (err, resp) {
			socket.emit('databaseAction', {error : err, data : resp});

		});
		//connection.release();
	});

	socket.on('loggedIn', function(user) {
		req.session.name = user;
		socket.emit('getUser', {user : req.session.name});
	});

	socket.on('loggedOut', function(user) {
		delete req.session.name;
	});	
});*/