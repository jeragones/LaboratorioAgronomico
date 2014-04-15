
$( document ).ready(function() {
    
    $("#opHome").click(function(req, res) {
        req.session.loggedIn = true;
        alert(req.session.loggedIn);
        $("#containerBody").load("news.html");
    });

    $("#opAnalysis").click(function() {

        // validar si hay un usuario logueado
        $("#containerBody").load(".html");
    });

    $("#opResponsible").click(function() {
        $("#containerBody").load("responsible.html");
    });

    $("#opContact").click(function() {
        $("#containerBody").load("contact.html");
    });
});