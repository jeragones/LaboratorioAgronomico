
$( document ).ready(function() {    
    $("#opHome").click(function(req, res) {
        if(localStorage["sessionLAG"] === undefined || localStorage["sessionLAG"] === "undefined" || localStorage["sessionLAG"] == null) {
            if(localStorage["sessionLAG"].split(",")[1] === "admin")
                $("#containerBody").load("adminNews.html");
        } else
            $("#containerBody").load("news.html");
    });

    $("#opAnalysis").click(function() {
        if(localStorage["sessionLAG"] === undefined || localStorage["sessionLAG"] === "undefined" || localStorage["sessionLAG"] == null)
            $("#containerBody").load("publicAnalysis.html");
        else {
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
        }
    });

    $("#opResponsible").click(function() {
        $("#containerBody").load("responsible.html");
        resp();
    });

    $("#opContact").click(function() {
        if(localStorage["sessionLAG"] === undefined || localStorage["sessionLAG"] === "undefined" || localStorage["sessionLAG"] == null) {
            if(localStorage["sessionLAG"].split(",")[1] === "admin")
                $("#containerBody").load("adminContact.html");
        } else
            $("#containerBody").load("contact.html");
    });
});