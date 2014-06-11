function loadNotice(value) {
    $.ajax({ 
        url: 'http://localhost:3000/loadCanton',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ value : value })
    }).success(function(data) {
        //alert("esta funcionando");
        $("html").html(data);
    });
}*/