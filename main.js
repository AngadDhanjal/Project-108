//https://teachablemachine.withgoogle.com/models/Nl0878igW/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Nl0878igW/model.json',modelReady)
}

function modelReady()
{
    classifier.classify(gotResults);

}

var dog = 0;
var cat = 0;
var wolf = 0;
var cow = 0;


function gotResults(error,results)
{
    if(error)
    {
        console.error(error);
    }else{
        console.log(results);
        random_r = Math.floor(Math.random() * 255)+1;
        random_g = Math.floor(Math.random() * 255)+1;
        random_b = Math.floor(Math.random() * 255)+1;


        document.getElementById("result_label").innerHTML = "Detected voice is of - "+results[0].label;
        document.getElementById("result_count").innerHTML = "Detected Dog - "+dog+"Detected Cat - "+cat+"Detected Wolf - "+wolf+"Detected Cow - "+cow+""
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_count").style.color="rgb("+random_r+","+random_g+","+random_b+")";

        img1 = document.getElementById("result_label");

        if(results[0].label == "Barking")
        {
            img.src = "dog.jpg";
            dog = dog+1;

        }else if(results[0].label == "Meowing")
        {
            img.src = "kitty-cute.gif";
           cat = cat+1

        }else if(results[0].label == "Howling")
        {
            img.src = "download.jpg";
            wolf = wolf+1


        }else if(results[0].label == "Mooing")
        {
            img.src = "cow,jpg"
            cow = cow+1

        }else{
            img.src = "default image.png";
            
        }
          
    }
}