var words = [
	"The Beauty and The Beast",
	"Cinderella",
	"Jungle Book",
	"Sleeping Beauty",
	"Fantasia",
	"Bambi",
	"Peter Pan",
	"Pinocchio",
	"Snow White"
]
var	guessed = "";
var display = [];
var start = 0;
var	maxGuess = 6;
var guessLeft = maxGuess;
var losses = 0;
var wins = 0;


function startGame(){
	// pick a random word from the array
	var selectedWord = words[Math.floor(Math.random()*words.length)];
	return(selectedWord.toUpperCase());

}

function createDisplay(word){
	for (var i = 0; i < selectedWord.length; i++) {
	
		if(selectedWord[i] == ' '){
			display[i] = ' ';
		}
		else{
			display[i] = '_';
		}
	}
	return (display);
}

function showDisplay(display){
	document.querySelector('#textToShow').innerHTML = "Pick a Letter";
	document.querySelector('#displayResults').innerHTML = display.join(' ');
}

function resetDisplay(){
	guessed = "";
	display = [];
	start = 0;
	guessLeft = maxGuess;			
}


document.onkeyup = function(event){
	// take the player guess
	var playerGuess = event.key;
	if(start == 0){
		selectedWord = startGame();
		display = createDisplay(selectedWord);
		showDisplay(display);
		start = 1;
		console.log(selectedWord);

	}
	else{
		debugger;
		//change this if statement after the guess
		if(display.join("") == selectedWord){
			debugger;
			wins++;
			document.querySelector('#dWins').innerHTML = "Wins: " + wins;
			// gues
			resetDisplay();	
		}
		else{
			if (guessLeft > 0) {
				// check if the player guess is a valid letter
				inWord = selectedWord.indexOf(playerGuess.toUpperCase());
				if (inWord < 0) {
					guessLeft --;
				}
				else{
					//create a loop to check the quantity of the letters
					//in the array
					for (var i = 0; i < selectedWord.length; i++) {
						inWord = selectedWord.indexOf(playerGuess.toUpperCase(),i);
						if (inWord >= 0) {
							display[inWord] = playerGuess.toUpperCase();
							i = inWord;
						}
						else{
							i = selectedWord.length;
						}
					}
				}
				guessed += playerGuess;
			} 
			else{
				losses ++;
				debugger;
				resetDisplay();
				document.querySelector('#dLosses').innerHTML = "Losses: " + losses;

			}
			// keep track of the letters pick by the player
			console.log(display);
			document.querySelector('#dRemaining').innerHTML = "Guess Left: " + guessLeft;
			document.querySelector('#displayResults').innerHTML = display.join(" ");
			document.querySelector('#dGuessed').innerHTML = "Letters Picked: " + guessed;
		}
	}
	// show the player the progress

	// finish after 6 intents
}