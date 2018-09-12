// declare and initialize variables
var n_wins = 0;
var n_losses = 0;
var n_guesses = 9;
var guessed_letters = [];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// computer chooses a random number between 0-25 representing a letter
var computerGuess = alphabet[Math.floor(Math.random() * 26)];

// when key on keyboard is inputed
document.onkeyup = function(event) {
    document.getElementById("announcement").textContent = "Guess what letter I'm thinking of.";

    // checks if input is a letter
    var letter = false;
    for (i = 0; i < alphabet.length; i++) {
        if (event.key == alphabet[i]) {
            letter = true;
        };
    };

    // alert wrong input choice if not letter
    if (letter === false) {
        alert("Please input an alphabetical letter.");

    } else 
    // correct guess: wins and resets game
    if (event.key === computerGuess) {
        n_wins += 1;
        document.getElementById("wins").textContent = n_wins;
        n_guesses = 9;
        document.getElementById("guesses").textContent = n_guesses;
        guessed_letters = [];
        document.getElementById("already_guessed").textContent = guessed_letters;
        computerGuess = alphabet[Math.floor(Math.random() * 26)];

    // wrong guesses
    } else {
        // checks to see if guess is a duplicate
        var duplicate = false
        for (var d = 0; d < guessed_letters.length; d++) {
            if (event.key == guessed_letters[d]) {
            duplicate = true;
            };
        };

        // alert if input is a duplicate
        if (duplicate === true) {
            document.getElementById("announcement").textContent = "You have already guessed this letter. Please choose a different letter.";

        } else {
            // decrement guesses remaining with a wrong guess
            n_guesses -= 1;
            document.getElementById("guesses").textContent = n_guesses;
            
            // losing and resetting the game
            if (n_guesses === 0) {
                n_losses += 1;
                document.getElementById("losses").textContent = n_losses;
                n_guesses = 9;
                document.getElementById("guesses").textContent = n_guesses;
                guessed_letters = [];
                document.getElementById("already_guessed").textContent = guessed_letters;
                computerGuess = alphabet[Math.floor(Math.random() * 26)];
            
            } else {
                // standard incorrect guess: adds input to array of guessed letters
                guessed_letters.push(event.key);
                document.getElementById("already_guessed").textContent = guessed_letters;

            };
        };
    };
};

