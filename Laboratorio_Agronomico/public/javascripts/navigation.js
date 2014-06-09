

$( document ).ready(function() {  

    $("#opHome").click(function(e) {
        e.preventDefault();
        if(USUARIO.split(",")[1] === "1")
            $("#containerBody").load("adminNews.html");
        else
            $("#containerBody").load("news.html"); 
    }); 
    

    $("#opnews").click(function(e) {
        e.preventDefault();
        if(USUARIO.split(",")[1] === "1"){
            $("#containerBody").load("news.html");
            addToSideNews(0);
        }
        else{
            $("#containerBody").load("news.html");
            addToSideNews(0);
        }
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
        //mm();
        
        $.ajax({url:'http://localhost:3000/responsibles/', type:'POST'});
        
        
        

        /*$.ajax({url:'/responsibles/' + userId,type:'DELETE'}).done(function() {
            window.location.href = "/";
        });*/
        
        //responsibles();
    });
});

function mm() {
    return $.ajax({url:'http://localhost:3000/responsibles/', type:'POST'});
}