
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var jade = require('jade');
var fs = require('fs');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}





/*app.post('/index', function( req, res ){
	//res.redirect('/userAnalysis');
	//$("contentBody").html( publicAnalysis.jade );
});*/




app.get('/ajax', function(req, res) { 
	alert("canica!!!");
	fs.readFile(req.query.file, 'utf8', function (err, data) { 
		if (err) throw err; var fn = jade.compile(data); 
		var html = fn({}); 
		res.send(html); 
	}); 
});


/*      jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj*/

app.get('/', routes.index);

app.get('/users', user.list);

app.get('/news', function(req, res){
	res.render('news');
});

app.get('/contact', function(req, res){
	res.render('contact');
});

app.get('/clientAnalysis', function(req, res){
	res.render('clientAnalysis');
});

app.get('/publicAnalysis', function(req, res){
	res.render('publicAnalysis');
});

app.get('/responsible', function(req, res){
	res.render('responsible');
});

app.get('/userAnalysis', function(req, res){
	res.render('userAnalysis');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

exports.app = app;