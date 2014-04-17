
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// DEPENDENCIA DE MODULOS ////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var express = require('express');
var jshtml = require('jshtml-express')
var http = require('http');
var path = require('path');
var mysql = require('mysql');

var app = express();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// CONEXION CON LA BASE DE DATOS /////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var connection = mysql.createConnection({
	user: 'Admin',
	password: 'hufVQcVJypRHpKhb',
	host: 'localhost'//,
	//port: 3306, 
	//database: 'suelosdb'
});

connection.connect(function(err) {
   	if (err) console.log("error conexion con la base de datos")
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// CONFIGURACION DEL SERVIDOR ////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('connection', connection);
app.engine('jshtml', jshtml);
app.set('view engine', 'jshtml');
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

app.get('/', function(req, res) {
	//req.session.loggedIn = false;
    res.locals({ title : "LAG" });
    res.render('index');
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// EJECUCION DEL SERVIDOR ////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var io = require('socket.io').listen(server);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////// EJECUCION DE QUERYS EN LA BASE DE DATOS ///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

io.on('connection', function(socket) {
	socket.on('databaseInput', function(data) { 
		connection.query(data.query, function (res) {
			socket.emit('databaseOutput', {data : res});
		});
	});
});