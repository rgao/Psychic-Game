var n_wins = 0;
var n_losses = 0;
var n_guesses = 9;
var guessed_letters = [9];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess = alphabet[Math.floor(Math.random() * 26)];
console.log(computerGuess);
document.onkeyup = function(event) {
    // letter = false;
    // for (i in alphabet) {
    //     if (event.key === i) {
    //         letter = true;
    //     };
    // };
    // if (letter === false) {
    //     alert("Please input an alphabetical letter.");
    // } else 
    if (event.key === computerGuess) {
        n_wins += 1;
        document.getElementById("wins").textContent = n_wins;
        computerGuess = alphabet[Math.floor(Math.random() * 26)];
    } else {
        for (j = 0; j < guessed_letters.length ; j++) {
            if (event.key === guessed_letters[j]) {
                alert("You have already guessed this letter. Try something else.");
            } else {
                n_guesses -= 1;
                document.getElementById("guesses").textContent = n_guesses;
                if (n_guesses === 0) {
                    n_losses += 1;
                    document.getElementById("losses").textContent = n_losses;
                    computerGuess = alphabet[Math.floor(Math.random() * 26)];
                } else {
                    guessed_letters.push(event.key);
                    document.getElementById("already_guessed").textContent = guessed_letters;
                };
            };
        };
    };
};
