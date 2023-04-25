function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/K9G7iaODD/model.json", modelReady)
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results)
        var random_number_r = Math.floor(Math.random()* 175) +1;
        var random_number_g = Math.floor(Math.random()* 175) +1;
        var random_number_b = Math.floor(Math.random()* 175) +1;
        document.getElementById("result_label").innerHTML = "Posso ouvir: " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Precisão:" + (results[0].confidence*100)
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+" , " +random_number_g+" , "+random_number_b+")"

        

        if(results[0].label == "cachorro"){
            document.getElementById("imagem").src= "schnauzer-desenho.jpg"
            document.getElementById("result_label").innerHTML = "Posso ouvir - Latidos"
            
        }
         else if(results[0].label == "Gato"){
            document.getElementById("imagem").src= "gato.png"
            document.getElementById("result_label").innerHTML = "Posso ouvir - Miados"
            
         }
            
         else {
            document.getElementById("imagem").src= "vaquinha.jpg"
            document.getElementById("result_label").innerHTML = "Posso ouvir - Mugidos"
        }
    }
}