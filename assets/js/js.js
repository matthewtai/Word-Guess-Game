window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    var categories;
    var chosenCategory;
    var word;
    var guess;
    var guesses = [];
    var lives;
    var counter;
    var space;

    var showLives = document.getElementById("lives");
    var showCategory = document.getElementById("categoryName");



    var buttons = function () {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }


    var selectCat = function () {
        if (chosenCategory === categories[0]) {
            categoryName.innerHTML = "Instruments";
        } else if (chosenCategory === categories[1]) {
            categoryName.innerHTML = "Musicians";
        } else if (chosenCategory === categories[2]) {
            categoryName.innerHTML = "Popular Music Genres";
        }
    }

    result = function () {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }


    comments = function () {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
        }
        if (guesses[0] === word[0]){
            alert ("You Win!");
        }
            }
        
    



    check = function () {
        list.onclick = function () {
            var guess = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    guesses[i].innerHTML = guess;
                    
                }
            }
            var j = (word.indexOf(guess));
            if (j === -1) {
                lives -= 1;
                comments();
            } else {
                comments();
            }
        }
    }


    // Play
    play = function () {
        categories = [
            ["accordion", "bagpipes", "cello", "bass", "clarinet", "double-bass", "drum", "flute", "guitar", "harp", "piano", "saxophone", "trumpet", "violin"],
            ["aretha-franklin", "bob-dylan", "buddy-holly", "beethoven", "michael-jackson", "paul-mccartney", "john-lennon", "david-bowie", "elvis-presley", "frank-sinatra", "miles-davis", "mozart", "elton-john", "john-coltrane", "jimi-hendrix"],
            ["blues", "country", "electronic", "folk", "hip-hop", "jazz", "pop", "rock"]
        ];

        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];

        console.log(word);
        buttons();

        guesses = [];
        lives = 15;
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();

    }

    play();

    document.onkeyup = function (event) {
        if (!(event.which <= 90 && event.which >= 65)); {
             var eletter = event.key.toLowerCase();
            for (var i = 0; i < word.length; i++) {
                if (word[i] === eletter) {
                    guesses[i].innerHTML = eletter;
                }
            }
            var j = (word.indexOf(eletter));
            if (j === -1) {
                lives -= 1;
                comments();
            } else {
                comments();
            }
        }
    }



    document.getElementById('reset').onclick = function () {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);;;
        play();
    }
}