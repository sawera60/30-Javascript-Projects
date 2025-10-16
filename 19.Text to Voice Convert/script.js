let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceSelect = document.querySelector("select");

// ✅ Correct event name
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    // Clear existing options before adding new ones
    voiceSelect.innerHTML = "";

    // Add all available voices
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.options.add(option);
    });
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
