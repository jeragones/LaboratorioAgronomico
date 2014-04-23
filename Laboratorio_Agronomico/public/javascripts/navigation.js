
$( document ).ready(function() {    
    $("#opHome").click(function() {
        
        if(localStorage["sessionLAG"] === undefined || localStorage["sessionLAG"] === "undefined" || localStorage["sessionLAG"] == null)
            $("#containerBody").load("news.html");
        else {
            if(localStorage["sessionLAG"].split(",")[1] === "admin")
                $("#containerBody").load("adminNews.html");
        }
    });

    $("#opAnalysis").click(function() {
        if(localStorage["sessionLAG"] === undefined || localStorage["sessionLAG"] === "undefined" || localStorage["sessionLAG"] == null)
            $("#containerBody").load("publicAnalysis.html");
        else 
            $("#containerBody").load("userAnalysis.html");
            /*{
            switch(localStorage["sessionLAG"].split(",")[1]) {
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
        }*/
    });

    $("#opResponsible").click(function() {
        $("#containerBody").load("responsible.html");
        resp();
    });

    $("#opContact").click(function() {
        if(localStorage["sessionLAG"] === undefined || localStorage["sessionLAG"] === "undefined" || localStorage["sessionLAG"] == null)
            $("#containerBody").load("contact.html");
        else {
            if(localStorage["sessionLAG"].split(",")[1] === "admin")
                $("#containerBody").load("adminContact.html");
        }
    });
});