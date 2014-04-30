
$( document ).ready(function() {   
    var user = localStorage["sessionLAG"];
    
    $("#opHome").click(function() {
        if(user === undefined || user === "undefined" || user == null)
            $("#containerBody").load("news.html");
        else {
            if(user.split(",")[1] === "admin")
                $("#containerBody").load("adminNews.html");
        }
    });

    $("#opAnalysis").click(function(e) {
        e.preventDefault();
        if(user === undefined || user === "undefined" || user == null)
            $("#containerBody").load("publicAnalysis.html");
        else {
            switch(user.split(",")[1]) {
            case "admin":
                $("#containerBody").load("adminAnalysis.html");
                break;
            case "user":
                $("#containerBody").load("userAnalysis.html");
                break;
            case "client":
                $("#containerBody").load("clientAnalysis.html");
                break;
            }    
        }
    });
    $("#opResponsible").unbind("click").click(function(e) {
        e.preventDefault();
        $("#containerBody").load("responsible.html");
        $("#responsibles").empty();
        $(document).ready(responsibles);
        //responsibles(); 
    });

    $("#opContact").click(function() {
        if(user === undefined || user === "undefined" || user == null)
            $("#containerBody").load("contact.html");
        else {
            if(user.split(",")[1] === "admin")
                $("#containerBody").load("adminContact.html");
        }
    });
});