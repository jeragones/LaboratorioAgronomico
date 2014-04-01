var jade = require('jade'),
    	fs = require('fs');

var instanceAPP = require('../app');
var app = instanceAPP.app;

/*$(".navMenu").click(function(){
	//$(".navMenu").css("background", "linear-gradient(#33814D, #5C9A71)");
	$(".navMenu").css("background", "background: #EBF291");
});*/


/*$.ajax({
    // the URL for the request
    url: "http://localhost:3000/userAnalysis",
    // the data to send (will be converted to a query string)
    dataType: 'html',
    // whether this is a POST or GET request
    type: "POST"
 
    // code to run if the request succeeds;
    // the response is passed to the function
    success: function( json ) {
        alert("si funciona");
        /*$( "<h1/>" ).text( json.title ).appendTo( "body" );
        $( "<div class=\"content\"/>").html( json.html ).appendTo( "body" );*/
    /*},
 
    // code to run if the request fails; the raw request and
    // status codes are passed to the function
    error: function( xhr, status ) {
        alert( "Sorry, there was a problem!" );
    },
 
    // code to run regardless of success or failure
    complete: function( xhr, status ) {
        alert( "The request is complete!" );
    }
});

/*$.ajax({ url: 'http://yoursite.com/signup'
     , type: 'GET'
     , dataType: 'html'
    })
.done(function(data) {
  $('#container').html(data);
})
.fail(function() {
  console.log("Something went wrong!");
});