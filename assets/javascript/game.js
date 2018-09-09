var n_wins = 0;
var n_losses = 0;
var n_guesses = 9;
var guessed_letters = [];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess = alphabet[Math.floor(Math.random() * 26)];
console.log(computerGuess);
document.onkeyup = function(event) {
    var letter = false;
    for (i = 0; i < alphabet.length; i++) {
        if (event.key === alphabet[i]) {
            letter = true;
        };
    };
    if (letter === false) {
        alert("Please input an alphabetical letter.");
    } else 
    if (event.key === computerGuess) {
        n_wins += 1;
        document.getElementById("wins").textContent = n_wins;
        n_guesses = 9;
        document.getElementById("guesses").textContent = n_guesses;
        guessed_letters = [];
        document.getElementById("already_guessed").textContent = guessed_letters;
        computerGuess = alphabet[Math.floor(Math.random() * 26)];
    } else {
        n_guesses -= 1;
        document.getElementById("guesses").textContent = n_guesses;
        if (n_guesses === 0) {
            n_losses += 1;
            document.getElementById("losses").textContent = n_losses;
            n_guesses = 9;
            document.getElementById("guesses").textContent = n_guesses;
            guessed_letters = [];
            document.getElementById("already_guessed").textContent = guessed_letters;
            computerGuess = alphabet[Math.floor(Math.random() * 26)];
        } else {
            guessed_letters.push(event.key);
            document.getElementById("already_guessed").textContent = guessed_letters;

        };
    };
};

