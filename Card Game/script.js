const cardImages = [...Array(12).keys()].map(i => `https://picsum.photos/id/${i + 100}/120/120`); // 12 farklı resim
const cards = [...cardImages, ...cardImages]; // Resimleri çiftlemek için iki kez ekliyoruz
let score = 0;
let flippedCards = [];
let matchedCards = [];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function createBoard() {
    const board = document.getElementById('game-board');
    shuffle(cards);

    cards.forEach((image, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.image = image;
        card.innerHTML = `
            <div class="card-front"></div>
            <div class="card-back" style="background-image: url('${image}')"></div>
        `;
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    });
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.image === card2.dataset.image) {
        matchedCards.push(card1, card2);
        score += 50;
        card1.removeEventListener('click', flipCard);
        card2.removeEventListener('click', flipCard);
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }, 1000);
        score -= 10;
    }

    flippedCards = [];
    document.getElementById('score').textContent = `Puan: ${score}`;

    if (matchedCards.length === cards.length) {
        setTimeout(() => {
            document.getElementById('restart-button').style.display = 'block';
        }, 500);
    }
}

function restartGame() {
    score = 0;
    flippedCards = [];
    matchedCards = [];
    document.getElementById('game-board').innerHTML = '';
    document.getElementById('score').textContent = `Puan: ${score}`;
    document.getElementById('restart-button').style.display = 'none';
    createBoard();
}

document.getElementById('restart-button').addEventListener('click', restartGame);

createBoard();
