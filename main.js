var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function selfie(){
    recognition.start();
}
recognition.onresult = function (event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie"){
        speak();
    }
    
}
function speak(){
    var speaker = window.speechSynthesis;
    var speaking = "Taking your Selfie in Five Seconds"
    var utter = new SpeechSynthesisUtterance(speaking);
    speaker.speak(utter);
    setTimeout(function(){takeselfie();saveimg();},5000);
}
Webcam.set({
    width: 300,
    hieght: 320,
    image_format: 'png',
    png_quality: 90
});
Webcam.attach("#camera");
function takeselfie(){
    Webcam.snap(function (urlcam){
        document.getElementById("img_captured").innerHTML = "<img id='img' src="+ urlcam +">";
    });
}
function saveimg(){
    link = document.getElementById("link");
    saving = document.getElementById("img").src;
    link.href = saving;
    link.click();
}