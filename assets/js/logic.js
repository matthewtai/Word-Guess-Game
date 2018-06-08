var wordsList = ["accordion", "bagpipes", "cello", "bass", "clarinet", "doublebass", "drum", "flute", "guitar", "harp",
  "piano", "saxophone", "trumpet", "violin", "arethafranklin", "bobdylan", "buddyholly",
  "beethoven", "michaeljackson", "paulmccartney", "johnlennon", "davidbowie", "elvispresley",
  "franksinatra", "milesdavis", "mozart", "eltonjohn", "johncoltrane", "jimihendrix", "blues",
  "country", "electronic", "folk", "hiphop", "jazz", "pop", "rock"
];


var chosenWord = "";


var lettersInChosenWord = [];

var numBlanks = 0;


var blanksAndSuccesses = [];


var wrongGuesses = [];

var letterGuessed = "";

var sadtrombone = new Audio('assets/womp-womp.mp3');
var woww = new Audio('assets/wow.mp3')

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 10;


function startGame() {


  numGuesses = 10;


  chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];


  lettersInChosenWord = chosenWord.split("");


  numBlanks = lettersInChosenWord.length;

  console.log(chosenWord);


  blanksAndSuccesses = [];


  wrongGuesses = [];


  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }


  console.log(blanksAndSuccesses);

  document.getElementById("guesses-left").innerHTML = numGuesses;


  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");


  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}


function checkLetters(letter) {


  var letterInWord = false;


  for (var i = 0; i < numBlanks; i++) {

    if (chosenWord[i] === letter) {


      letterInWord = true;
    }
  }


  if (letterInWord) {


    for (var j = 0; j < numBlanks; j++) {


      if (chosenWord[j] === letter) {


        blanksAndSuccesses[j] = letter;
      }
    }


    console.log(blanksAndSuccesses);
  } else {


    wrongGuesses.push(letter);


    numGuesses--;

  }

}


function roundComplete() {


  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);


  document.getElementById("guesses-left").innerHTML = numGuesses;

  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {

    winCounter++;

    woww.play();
    alert("You win!");


    document.getElementById("win-counter").innerHTML = winCounter;


    startGame();
  } else if (numGuesses === 0) {


    lossCounter++;


    sadtrombone.play();

    alert("You lose");


    document.getElementById("loss-counter").innerHTML = lossCounter;


    startGame();

  }

}


startGame();


document.onkeyup = function (event) {


  letterGuessed = String.fromCharCode(event.which).toLowerCase();

  checkLetters(letterGuessed);

  roundComplete();
};