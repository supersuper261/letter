function toggleEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.toggle('open');
}

function sendLetter() {
    const letter = document.querySelector('.letter');
    letter.style.transition = 'transform 1s ease';
    letter.style.transform = 'translateX(100%)';
}
