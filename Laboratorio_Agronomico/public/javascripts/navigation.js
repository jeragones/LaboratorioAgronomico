
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

    $("#opAnalysis").click(function() {
        if(user === undefined || user === "undefined" || user == null)
            $("#containerBody").load("publicAnalysis.html");
        else 
            //$("#containerBody").load("userAnalysis.html");
            {
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

    $("#opResponsible").click(function() {
        $("#containerBody").load("responsible.html");
        resp();
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