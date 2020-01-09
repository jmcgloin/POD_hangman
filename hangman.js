console.log('hangman')
const WORD = 'christmas'

/*

1. christmas/holiday
2. letters guessed
3. word and length *
4. wrong guesses
5. guesses til death - countdown
6. ignore duplicate guesses
7. track key presses
8. update dom on guesses
9. word to letters to blank spaces
10. only alpha characters

*/

document.addEventListener('DOMContentLoaded', () => {

	let game = new Game(WORD)
	document.addEventListener('keyup', (e) => game.onGuess(e))
	

})

class Game {
	constructor(word) {
		this.word = word
		this.characters = word.split('')
		this.incorrectGuesses = []
		this.displayWord = []
		this.guessesRemaining = 6
		this.guesses = []
		// this.difficulty = difficulty
		this.cloak()
	}
	cloak() {
		this.displayWord =  '_'.repeat(this.word.length).split('')
		document.getElementById('displayWord').innerText = this.displayWord.join(' ')
	}
	onGuess(e) {
		if(e.keyCode < 65 || e.keyCode > 90) return //eventually check for remaining guesses and duplicates
		let letter = e.key
		this.guessesRemaining--
		console.log(this)
		this.guesses.push(letter)
	}
}

// const game = {
// 	word: WORD,
// 	guesses: [],
// 	incorrectGuesses: [],
// 	guessesRemaining: 6,
// 	correctGuesses:[],
// 	displayWord: [],
// 	cloak: function() {
// 		this.displayWord =  '_'.repeat(this.word.length).split('')
// 	},
// 	onGuess: function(guess) {

// 	}

// 	/*
// 		compare guesses with word's letters

// 	*/
// }

// const onGuess = (e) => {
// 	if(e.keyCode < 65 || e.keyCode > 90) return
// 	let letter = e.key
// 	game.guessesRemaining--
// 	game.guesses.push(letter)
// }