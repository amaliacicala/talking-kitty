// HTML DOM variable
const textArea = document.querySelector('textarea');
const playButton = document.querySelector('button');
const pitchBar = document.querySelector('input');
const catFigure = document.querySelector('figure');

// cat speaks when the user inputs some text
playButton.addEventListener('click', function() {
    const textLength = textArea.value.trim().length;

    if (textLength > 0) {
        talk()
    }
})

// cat speaks
function talk() {
    // fetch text and pitch
    const text = textArea.value;
    const pitch = pitchBar.value;

    // prepare text for the Speech Synthesizer
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = pitch;

    speechSynthesis.speak(utterance);

    // cat animates when speaking
    utterance.addEventListener('start', function() {
        // disable controls while cat speaks
        textArea.disabled = true;
        pitchBar.disabled = true;
        playButton.disabled = true;

        catFigure.classList.add('talking')
    });

    // cat stops speaking
    utterance.addEventListener('end', function() {
        // re-enable controls when cat stops speaking
        textArea.disabled = false;
        pitchBar.disabled = false;
        playButton.disabled = false;

        catFigure.classList.remove('talking')
    });
}