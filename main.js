function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rzGBq0vjv/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults); 
}
function gotResults(error, results){
if (error) {
    console.error(error);
} else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'posso ouvir - '+
    results[0].label;
    document.getElementById("result_confidence").innerHTML = 'precisão - '+
    (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('cachorro')
    img1 = document.getElementById('gato')
    img2 = document.getElementById('galinha')

    if (results[0].label == "latido") {
        img.src = 'gtimthumb.jpeg';
        img1.src = 'download (11).jpeg';
        img2.src = 'download (12).jpeg';
    } else if (results[0].label == "miado") {
        img.src = 'download (10).jpeg';
        img1.src = 'gato-miando-1.jpg';
        img2.src = 'download (12).jpeg';
    } else {
        img.src = 'download (10).jpeg';
        img1.src = 'download (11).jpeg';
        img2.src = 'download (13).jpe';
    } 
}
}