//guessedletters
const guessedLettersElement = document.querySelector(".guessed-letters");
//guess button with text
const guessButton= document.querySelector(".guess");
//text input where player will guess a letter
const playerLetter = document.querySelector(".letter");
//empty paragraph of word in progress
const wordInProgress = document.querySelector(".word-in-progress");
//paragraph of remaining guesses display
const remainingGuesses = document.querySelector(".remaining");
//span inside paragraph of remaining guesses
const remainingGuessesSpan = document.querySelector(".remaining span");
//empty paragraph messages when letter guessed
const messages = document.querySelector(".message");
//hidden button for play again
const playAgainButton = document.querySelector(".play-again hide");
//starting word
const word = "magnolia";
//empty array for containing guesses
const guessedLetters = [];

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
//empty the message element
messages.innerText = "";
//grab what was entered in the input
const guess = playerLetter.value;
//console.log(guess)
//make sure it is single letter
const goodGuess = letterInput(guess);

if(goodGuess){
    makeGuess(guess);
}

playerLetter.value = "";

})

//letter input function expression
const letterInput = function(input){

    const acceptedLetter = /[a-zA-Z]/
    if (input.length === 0){
        messages.innerText = "Please input a letter.";
    } else if (input.length >1){
        messages.innerText = "Please input only 1 letter.";
    } else if (!input.match(acceptedLetter)){
        messages.innerText = "Did you enter something other than a letter?";
    } else {
        messages.innertext = "Yes! We have a letter!";
        return input;
    }
}

// new function makeguess
const makeGuess = function(guess){
    guess = guess.toUpperCase();
    if(guessedLetters. includes(guess)){
        messages.innerText= "You already guessed that letter! Try again!";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters)
        displayedGuesses();
        
        
    }


}

const displayedGuesses = function (){

    guessedLettersElement.innerHTML = "";
    for(const letter of guessedLetters){
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
}
}

const wordInProgressUpdate = function(guessedLetters){

    const wordUpper = word.toUpperCase;
    const wordArray = wordUpper.split("");
    console.log(wordArray)

}