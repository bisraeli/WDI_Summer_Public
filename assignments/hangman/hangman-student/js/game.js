function splitWordIntoLetters(theWord) {
  var letters = [];
  for (var i = 0; i < theWord.length; i++) {
    letters.push(theWord[i]);  // or could've used (theWord.charAt(i))
  }
  return letters;
}

var word = {
  // This is an attribute of the object word.
  secretWord: "model",
  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],

<<<<<<< HEAD
  setSecretWord: function(){
    var theWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
    this.secretWord = splitWordIntoLetters(theWord);
  },

  checkLetters: function(guessedLetters) {
    var correctLetters = _.intersection(this.secretWord, guessedLetters);
    var wrongLetters = _.difference(guessedLetters, correctLetters);
    return [correctLetters, wrongLetters];
=======
  // START HERE: Step 1
  // Selects a random word from the word list sets the secret word
  // it will set the secretWord attribute from Line 3
  setSecretWord: function(){
    //this.secretWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
    this.secretWord = this.wordList[_.random(this.wordList.length - 1)];
  },

  // This feels pretty hard- what can we do to make it easier, or fake it for the moment?
  // How do we deal with multiple, multiple occurrances of letters (ie. google)?
  // Takes an array of letters as input and returns an array of two items:
  // 1) A string with the parts of the secret word that have been guessed correctly and an underscore for the parts that haven't
  // 2) An array of all the guessed letters that were not in the secret word. This is my 'wrongLetters' array
  checkLetters: function(guessedLetters){
    // How can I check against 'model'?
    // I have an array of guessed letters
    // I have my secret word of 'model'
    // this.secretWord; => model
    // guessedLetters; => mq 
    var correct_letters = _.intersection(this.secretWord, guessedLetters);
    var wrongLetters = [];
    for(var i = 0; i < guessedLetters.length; i++) {
      for(var n = 0; n < this.secretWord.length; n++) {
        if(guessedLetters[i] !== this.secretWord[n]) {
          wrongLetters.push(guessedLetters[i]);
        }
      }
    }
    return ['m____',wrongLetters]; 
>>>>>>> 352c7b374e81cabda3bd895051767d4f6dec5069
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

<<<<<<< HEAD
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
=======
  // Check if the player has lost and end the game if so
  // Assume they've guessed [x,z, k, p, q,s,t,v,7]
  // How can I test this? Where does wrongLetters come from?
  checkLose: function(wrongLetters){
    // if(!checkWin) {
    //   wrongLetters;
    // }
    return wrongLetters.length >= this.MAX_GUESSES;
>>>>>>> 352c7b374e81cabda3bd895051767d4f6dec5069
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
<<<<<<< HEAD

=======
  console.log(word.secretWord);
  console.log(word.checkLetters(['m', 'q'])[1]);

  // // Created a losing scenario
  // console.log(player.checkLose(wrongLettersArray));

  // Created a not yet losing scenario
  // console.log(player.checkLose(wrongLettersArray));
>>>>>>> 352c7b374e81cabda3bd895051767d4f6dec5069
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


