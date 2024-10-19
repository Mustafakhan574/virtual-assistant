let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");
function speak(text){//                      for speak 
          let textSpeech = new SpeechSynthesisUtterance(text);
          textSpeech.rate=1
          textSpeech.pitch=1
          textSpeech.volume=1
          textSpeech.lang = "hi-IN"
          window.speechSynthesis.speak(textSpeech);
}
btn.addEventListener("click",()=>{
    //wishme();
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
});
function wishme(){//            for date upload in pixella
    let day = new Date();
   let hours = day.getHours();
   if(hours >=0 && hours<12){
    speak("Good morning sir, what can i do for you");
   }
   else if(hours>=12 && hours < 16){
    speak("Good after noon sir what can i do for you");
   }
   else{
    speak("Good evening sir, what can i do for you");
   }
}
let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()// audio for pixella
recognition.onresult=(event)=>{
  let currentIndex = event.resultIndex
  let transcript = event.results[currentIndex][0].transcript
  content.innerText = transcript;
  takecommand(transcript.toLowerCase());
}
function takecommand(message){
    btn.style.display = "flex";
    voice.style.display = "none";
          if(message.includes("hello pixella")||message.includes("hi pixella")||message.includes("hello pixel")){
            speak("hello sir , how can i help you?");
          }
          else if(message.includes("namaste pixella")||message.includes("pixella namaste")){
            speak("namaste");
          }
          else if(message.includes("assalam walekum")||message.includes("pixella assalam walekum")){
            speak("walekum assalam");
          }
          else if(message.includes("tell me a joke")||message.includes("pixella joke sunao")){
            speak("santa ne question puchha banta se: banta bhaiya batao jisko sunai nahi deta usse kya kehte hai? banta ne jawad diya kuch bhi bol do santa bhaiya usse sunai hi nahi deta");
          }
          else if(message.includes("shayari sunao")||message.includes("tell me a shayari")){
            speak("hasi aati hai mujhe hasrat-e-insaan par : gunaah karta hai khud : lanat bhejta hai shaitan par");
          }
else if(message.includes("shayari romantic sunao")||message.includes("tell me a romantic shayari")){
            speak("ajib se betabi hai : tere bina : reh bhi lete hai: aur raha bhi nahi jata");
          }
          else if(message.includes("pixella hu r u")||message.includes("who are you")||message.includes("hu r u")){
            speak("i am virtual assistant , created by mustafa khan sir");
          }
          else if(message.includes("open youtube")){
            speak("opening youtube...");
            window.open("https://www.youtube.com");
          }
          else if(message.includes("who is nasim mewati")){
            speak("nasim mewati nehru collge ka bca second year ka student hai,currently he is preparing for government job");
          }
          else if(message.includes("who is aditya")){
            speak("aditya delhi university ka student hain after graduation he will be preparing for goverment job");
          }
          else if(message.includes("who is vikas")){
            speak("vikash nehru collge ka bca second year ka student hai,currently he is preparing for railway government job");
          }
          else if(message.includes("open google")){
            speak("opening google...");
            window.open("https://www.google.com");
          }
          else if(message.includes("open facebook")){
            speak("opening facebook...");
            window.open("https://www.facebook.com");
          }
          else if(message.includes("open instagram")){
            speak("opening instagram...");
            window.open("https://www.instagram.com");
          }
          else if(message.includes("open calculator")){
            speak("opening calculator...");
            window.open("calculator://");
          }
          else if(message.includes("open calculator")){
            speak("opening calculator...");
            window.open("calculator://");
          }
          else if(message.includes("what is time")||message.includes("what time is it")){
            let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"});
            speak(time);
          }
          else if(message.includes("what is date")){
            let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"});
            speak(date);
          }
          else if(message.includes("what is year")){
            let years = new Date().toLocaleString(undefined,{day:"numeric",year:"numeric",month:"short"});
            speak(years);
          }
          else{// inside google search
 let finaltext="this is what i found on internet regarding"+message.replace("pixella","")||message.replace("pixela","");
           speak(finaltext);
            window.open(`https://www.google.com/search?q=${message.replace("pixella","")}`);
          }
}