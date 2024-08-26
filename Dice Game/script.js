// Button and image elements
const rollBtn = document.getElementById("rollBtn");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const result = document.getElementById("result");
const player1NameInput = document.getElementById("player1Name");

// Array holding dice image paths
const diceImages = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];

// Event listener for roll button click
rollBtn.addEventListener("click", function() {
    // Disable button during rolling animation
    rollBtn.disabled = true;
    result.textContent = "Rolling... 🎲";
    
    // Change dice images rapidly to simulate rolling
    let rollInterval = setInterval(() => {
        player1Dice.src = diceImages[Math.floor(Math.random() * 6)];
        player2Dice.src = diceImages[Math.floor(Math.random() * 6)];
    }, 100);

    // Stop the rolling animation and display the final result after 3 seconds
    setTimeout(() => {
        clearInterval(rollInterval);

        // Generate random rolls for both players
        const player1Roll = Math.floor(Math.random() * 6);
        const player2Roll = Math.floor(Math.random() * 6);

        // Update dice images to final roll results
        player1Dice.src = diceImages[player1Roll];
        player2Dice.src = diceImages[player2Roll];

        // Get the player name or use "Player 1" as default
        const player1Name = player1NameInput.value || "Player 1";

        // Determine the winner and display the result
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
