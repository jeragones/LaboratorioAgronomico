var jade = require('jade'),
    	fs = require('fs');

var instanceAPP = require('../app');
var app = instanceAPP.app;

$(".navMenu").click(function(){
	//$(".navMenu").css("background", "linear-gradient(#33814D, #5C9A71)");
	$(".navMenu").css("background", "background: #EBF291");
});
