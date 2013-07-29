function splitWordIntoLetters(theWord) {
  var letters = [];
  for (var i = 0; i < theWord.length; i++) {
    letters.push(theWord[i]);  // or could've used (theWord.charAt(i))
  }
  return letters;
}

var word = {
  secretWord: "",
  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],

  setSecretWord: function(){
    var theWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
    this.secretWord = splitWordIntoLetters(theWord);
  },

  checkLetters: function(guessedLetters) {
    var correctLetters = _.intersection(this.secretWord, guessedLetters);
    var wrongLetters = _.difference(guessedLetters, correctLetters);
    return [correctLetters, wrongLetters];
  }
};

var player = {

  MAX_INCORRECT_GUESSES: 8,
  guessedLetters: [],
  correctLetters: [],
  wrongLetters: [],

  makeGuess: function(letter) {
    this.guessedLetters.push(letter);
    var result = word.checkLetters(this.guessedLetters);
    this.correctLetters = result[0];
    this.wrongLetters = result[1];
    this.checkWin();
  },

  checkWin: function() {
    if (this.hasTooManyIncorrectGuesses()) {
      alert("You've lost. Too many incorrect guesses.");
    } else if (this.secretWordComplete()) {
      alert("You won - Game over!");
    }
  },

  hasTooManyIncorrectGuesses: function () {
    return this.wrongLetters.length > this.MAX_INCORRECT_GUESSES;
  },

  secretWordComplete : function () {
    return _.difference(word.secretWord, this.correctLetters).length === 0;
    // other option _.every(word.secretWord, function(letter) {
    //   var value = _.contains(this.correctLetters, letter);
    //   console.log("letter " + letter + " is " + (value ? "" : "not ") + "in the array");
    //   return value;
    // });


    /*
     * For every letter in my word.secretWord array, run the given function.
     * If that function returns true for the current letter in the array,
     * continue on to the next letter, or return true if there are no more
     * letters. If that function returns false for the current letter, stop
     * iterating and return false.
     *
     * The function (the 2nd parameter) needs to return a truth-y or false-y
     * value. Remember, that in JavaScript false, 0, null, and undefined are
     * considered false-y, everything else is a truthy value.
     * /

    /* Ruby-ized:
     *   word.secret_word.all?{ |each| self.correct_letters.include?(each) }
     */
  }
};

var game = {
  // Resets the game
  resetGame: function(){},

  // Reveals the answer to the secret word and ends the game
  giveUp: function(){},

  // Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
  updateDisplay: function(secretWordWithBlanks, guessedLetters, guessesLeft){}
};

window.onload = function(){

  // Start a new game
  // Add event listener to the letter input field to grab letters that are guessed
  // Add event listener to the reset button to reset the game when clicked
  // Add event listener to the give up button to give up when clicked
};

//This feels pretty hard - what can we do to make it easier, or fake it for the moment?
//How do we deal with multiple, multiple occurances of letters?
//takes an array of letters as input and returns an array of two items:
//1) A string with the parts of the secret word that have been guessed corretly and udnerscore for the parts that haven't
//2) An array of all the guessed letters that were not in the secret word


  // Takes an array of letters as input and returns an array of two items:
  // 1) A string with the parts of the secret word that have been guessed correctly and underscore for the parts that haven't
  // 2) An array of all the guessed letters that were not in the secret word


