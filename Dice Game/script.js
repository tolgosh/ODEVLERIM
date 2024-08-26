const rollBtn = document.getElementById("rollBtn");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const result = document.getElementById("result");
const player1NameInput = document.getElementById("player1Name");

const diceImages = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];

rollBtn.addEventListener("click", function() {
    // Disable button during rolling
    rollBtn.disabled = true;
    result.textContent = "Rolling... 🎲";
    
    let rollInterval = setInterval(() => {
        // Random dice for the animation during rolling
        player1Dice.src = diceImages[Math.floor(Math.random() * 6)];
        player2Dice.src = diceImages[Math.floor(Math.random() * 6)];
    }, 100);

    setTimeout(() => {
        clearInterval(rollInterval);

        // Generate random dice rolls
        const player1Roll = Math.floor(Math.random() * 6);
        const player2Roll = Math.floor(Math.random() * 6);

        // Set the dice images to the final roll
        player1Dice.src = diceImages[player1Roll];
        player2Dice.src = diceImages[player2Roll];

        // Determine the winner
        const player1Name = player1NameInput.value || "Player 1";
        if (player1Roll > player2Roll) {
            result.textContent = `${player1Name} Wins! 🏆`;
        } else if (player2Roll > player1Roll) {
            result.textContent = "Computer Wins! 🏆";
        } else {
            result.textContent = "It's a Draw! 🤝";
        }

        // Re-enable button after rolling
        rollBtn.disabled = false;
    }, 3000);
});
