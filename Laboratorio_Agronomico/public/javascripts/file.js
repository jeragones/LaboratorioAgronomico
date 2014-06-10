
$(document).ready(function() {

    var obj = $("#dropzone");
    obj.on('dragenter', function (e) 
    {
        e.stopPropagation();
        e.preventDefault();
        $(this).css('border', '2px solid #0B85A1');
    });
    obj.on('dragover', function (e) {
         e.stopPropagation();
         e.preventDefault();
    });
    obj.on('drop', function (e) {
     
        $(this).css('border', '2px dotted #0B85A1');
        e.preventDefault();


        //Retrieve all the files from the FileList object
    var files = e.originalEvent.dataTransfer.files; 
            
    if (files) {
        for (var i=0, f; f=files[i]; i++) {
              var r = new FileReader();
            r.onload = (function(f) {
                return function(e) {
                    var contents = e.target.result;
                    //var rows = contends.split(" ");
                    alert("mierda" +
                          "Got the file.n" 
                          +"name: " + f.name + "n"
                          +"type: " + f.type + "n"
                          +"size: " + f.size + " bytesn"
                          + "starts with: " /*+ contents*/
                    ); 
                };
            })(f);

            r.readAsBinaryString(f);
        }   
    } else {
          alert("Failed to load files"); 
    }










        /*var files = e.originalEvent.dataTransfer.files;
        var reader = new FileReader();
        var result = "";
 		for (var i = 0, f; f = files[i]; i++) {
            result += '<li><strong>'+f.name+'</strong></li>';
            
            $.when(loadFile(reader, f)).then(function(data) {
                result += data;
                $("#filelist").append(result);
            });

        }*/
        
         //We need to send dropped files to Server
         //handleFileUpload(files,obj);

        /*for (var i = 0, f; f = files[i]; i++) {
            alert(f.name);
            // Only process image files.
            if (!f.type.match('image.*')) {
                continue;
            }

            

            // Closure to capture the file information.
            
            reader.onload = (function(theFile) {
                return function(e) {
                // Render thumbnail.
                    alert(e.target.result);
                    $("#filelist").append('<li><strong>'+e.target.result+'</strong></li>'); 
                    var span = document.createElement('span');
                    span.innerHTML = ['<img class="thumb" src="', e.target.result,
                                    '" title="', escape(theFile.name), '"/>'].join('');
                    document.getElementById('list').insertBefore(span, null);
                };
            });

            // Read in the image file as a data URL.
            reader.readAsText(f);
            }
        }*/


    });

/*
    function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);
*/
});

function loadFile(reader, f) {
    /*reader.onload = function(e) {
        return result += '<li><p>hola</p></li>';
    // e.target.result should contain the text
    };*/
    reader.readAsText(f);
    return '<li>'+reader.result+'</li>';
}

function cargarnormal(){
  return false;
}