function speak() {
    const textToSpeak = document.getElementById("textToSpeak").value;
    const speech = new SpeechSynthesisUtterance(textToSpeak);
    //this line tells the browser to speak the text stored in the speech object
    speechSynthesis.speak(speech);
}