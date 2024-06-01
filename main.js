var synth=window.speechSynthesis;

function add(){
    var answer = Number(document.getElementById("num1").value)+ Number(document.getElementById("num2").value);
    document.getElementById("ans").innerHTML = answer;

    var speakthis=new SpeechSynthesisUtterance("The answer is "+answer);
    synth.speak(speakthis)

}


function multiply(){
    var answer = Number(document.getElementById("num1").value) *Number(document.getElementById("num2").value);
    document.getElementById("ans").innerHTML = answer;
    var speakthis=new SpeechSynthesisUtterance("The answer is "+answer)
    synth.speak(speakthis)
}
function sub(){
    var answer=Number(document.getElementById("num1").value) -Number(document.getElementById("num2").value);
    document.getElementById("ans").innerHTML = answer;

    var speakthis=new SpeechSynthesisUtterance("The answer is "+answer)
    synth.speak(speakthis)

    
}
function divide(){
    var answer= Number(document.getElementById("num1").value) /Number(document.getElementById("num2").value);
    document.getElementById("ans").innerHTML = answer
    var speakthis=new SpeechSynthesisUtterance("The answer is "+answer)
    synth.speak(speakthis)
}
function reset(){
    document.getElementById("ans").innerHTML=""
    document.getElementById("num1").value=""
    document.getElementById("num2").value="";

    var speakthis=new SpeechSynthesisUtterance("The calculator is reset.")
    synth.speak(speakthis)
}