var jade = require('jade'),
    	fs = require('fs');

var instanceAPP = require('../app');
var app = instanceAPP.app;


/*$('.navMenu.hijax').click(function (e) {
    e.preventDefault(); // Stop browser from loading the URL.
    $.ajax({
        url: $(this).attr('href'),
    }).done(function (markup) {
        $('#container').html(markup);
    });
});*/