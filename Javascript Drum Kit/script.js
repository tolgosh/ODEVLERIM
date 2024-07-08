document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', () => {
        playSound(button.getAttribute('data-sound'));
        animateButton(button);
    });
});

document.addEventListener('keydown', event => {
    const key = event.key.toLowerCase();
    const button = document.querySelector(`button[data-key="${key}"]`);
    if (button) {
        playSound(button.getAttribute('data-sound'));
        animateButton(button);
    }
});

function playSound(sound) {
    const audio = new Audio(sound);
    audio.play();
}

function animateButton(button) {
    // Eski animasyon sınıflarını kaldır
    button.classList.remove('playing-scale', 'playing-rotate', 'playing-shake');
    
    // Farklı tuşlara farklı animasyon sınıfları ekle
    const key = button.getAttribute('data-key');
    if (key === 'q' || key === 'w' || key === 'e') {
        button.classList.add('playing-scale');
    } else if (key === 'r' || key === 't' || key === 'y') {
        button.classList.add('playing-rotate');
    } else {
        button.classList.add('playing-shake');
    }

    // 100ms sonra animasyonu kaldır
    setTimeout(() => {
        button.classList.remove('playing-scale', 'playing-rotate', 'playing-shake');
    }, 100);
}
