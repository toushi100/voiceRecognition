const btn = document.querySelector('#talk');
const content = document.querySelector('#content');
const greetings = ['im good homeboi','why do you care','Fuck off'];
const weather = ['it\'s fine why do you even care you dont even get out of you room','it\'s 55 degrees! a lovely weather for a tan'];
const SpeechRecognitiion = window.SpeechRecognitiion || window.webkitSpeechRecognition;

const recognition = new SpeechRecognitiion();

recognition.onstart = function (){
    console.log('voice is activated, you can use the microphone');
};

recognition.onresult= function (event) {
   const current = event.resultIndex;
   const transcript = event.results[current][0].transcript;
   content.textContent = transcript;

   readOutLoud(transcript);
};


btn.addEventListener('click',()=>{
    recognition.start();
});

function readOutLoud(message){
const speech = new SpeechSynthesisUtterance();
if(message.includes('how are you')){
    const finaltext = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finaltext;
}else if(message.includes('weather')){
    const finaltext = weather[Math.floor(Math.random() * weather.length)];
    speech.text = finaltext;
} else{
    speech.text = message;
}

speech.volume=1;
speech.rate=0.7;
speech.pitch=1;

window.speechSynthesis.speak(speech);
}