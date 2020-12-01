function previewImage(){
    var ofReader = new FileReader();
    ofReader.readAsDataURL(document.getElementById("imglink").files[0]);

    ofReader.onload = function (ofREvent){
        document.getElementById("uploadPreview").src = ofREvent.target.result;
    };
};


function previewvideo(){
    var ofReader = new FileReader();
    ofReader.readAsDataURL(document.getElementById("vidlink").files[0]);

    ofReader.onload = function (ofREvent){
        document.getElementById("uploadPreviews").src = ofREvent.target.result;
    };
};