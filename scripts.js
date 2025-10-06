document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("roll-button").addEventListener("click", findWinner);
});

function findWinner() {
    const player1Die = Math.floor(Math.random() * 6) + 1;
    const player2Die = Math.floor(Math.random() * 6) + 1;

    document.querySelectorAll('.die')[0].src = 'img/dice-' + player1Die + '.png';
    document.querySelectorAll('.die')[1].src = 'img/dice-' + player2Die + '.png';

    let resultText = '';
    if (player1Die > player2Die) {
        resultText = 'Player 1 is the winner!';
    } else if (player2Die > player1Die) {
        resultText = 'Player 2 is the winner!'; 
    } else {
        resultText = "It's a tie!"; 
    }

    let resultElement = document.getElementById('result');
    resultElement.textContent = resultText;
}