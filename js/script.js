//guessedletters
const guessedLetters = document.querySelector(".guessed-letters");
//guess button with text
const guessButton= document.querySelector(".guess");
//text input where player will guess a letter
const playerLetter = document.querySelector(".letter");
//empty paragraph of word in progress
const wordInProgress = document.querySelector(".word-in-progress");
//paragraph of remaining guesses display
const remainingGuesses = document.querySelector(".remaining");
//span inside paragraph of remaining guesses
const remainingGuessesSpan = document.querySelector(".remaining").innerHTML;
//empty paragraph messages when letter guessed
const messages = document.querySelector(".message");
//hidden button for play again
const playAgainButton = document.querySelector(".play-again hide");
//starting word
const word = "magnolia"
//console.log(remainingGuessesSpan)

const updateCircle = function(word){
    const updateCircleLetters = []
    for(const letter of word){
        //console.log(letter);
        updateCircleLetters.push("●")
    }
    wordInProgress.innerText = updateCircleLetters.join("");  
}

updateCircle(word);

guessButton.addEventListener("click", function(e){
e.preventDefault();
const guess = playerLetter.value
console.log(guess)
playerLetter.value = "";

})