
/**
 * Module dependencies.
 */

var express = require('express');
var jshtml = require('jshtml-express')
var http = require('http');
var path = require('path');
var mysql = require('mysql');
var routes = require('./routes');
var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('jshtml', jshtml);
app.set('view engine', 'jshtml');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser("secret here")); //
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'Laboratorio_Agronomico')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res) {
	req.session.loggedIn = false;
    res.locals({ title : "LAG" });
    res.render('index');
});


//app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

function DB() {
	var cliente = mysql.createConnection({
		user: 'Admin',
		password: 'hufVQcVJypRHpKhb',
		host: 'localhost',
		port: 3306, 
		database: 'suelosdb'
	});
	return cliente;
}

var objDB = DB();

exports.objDB;

/*
app.configure(function() {
    app.use(express.bodyParser());
    
});
*/