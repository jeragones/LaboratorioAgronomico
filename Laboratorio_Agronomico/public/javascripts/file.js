
$(document).ready(function() {


var obj = $("#dropzone");
obj.on('dragenter', function (e) 
{
    e.stopPropagation();
    e.preventDefault();
    $(this).css('border', '2px solid #0B85A1');
});
obj.on('dragover', function (e) 
{
     e.stopPropagation();
     e.preventDefault();
});
obj.on('drop', function (e) 
{
 
     $(this).css('border', '2px dotted #0B85A1');
     e.preventDefault();
     var files = e.originalEvent.dataTransfer.files;
 		for (var i = 0, f; f = files[i]; i++) {
    	$("#filelist").append('<li><strong>'+f.name+'</strong></li>'); 
    }
     //We need to send dropped files to Server
     //handleFileUpload(files,obj);
});






/*$("#dropzone").dragover(function(evt) {
    
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
});
$("#dropzone").drop(function(evt) {
	evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files;

    for (var i = 0, f; f = files[i]; i++) {
    	$("#FileList").append('<li><strong>'+f.name+'</strong></li>'); 
    }
});*/
});