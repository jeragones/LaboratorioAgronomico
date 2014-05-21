

$( document ).ready(function() {  
    contact();

    $("#opHome").click(function(e) {
        e.preventDefault();
        if(USUARIO.split(",")[1] === "1")
            $("#containerBody").load("adminNews.html");
        else
            $("#containerBody").load("news.html"); 
    }); 

    $("#opAnalysis").unbind("click").click(function(e) {
        e.preventDefault();
        if(USUARIO === undefined || USUARIO === "undefined" || USUARIO == null)
            $("#containerBody").load("publicAnalysis.html");
        else {
            switch(USUARIO.split(",")[1]) {
            case "1":
                $("#containerBody").load("adminAnalysis.html");
                break;
            case "2":
                $("#containerBody").load("userAnalysis.html");
                break;
            case "3":
                $("#containerBody").load("clientAnalysis.html");
                break;
            }    
        }
    });

    $("#opResponsible").unbind("click").click(function(e) {
        e.preventDefault();
        responsibles();
    });
});
