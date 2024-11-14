
let min = 1;
let max = 100;
let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
// console.log(randomNumber);
let array = [];
let i = 0;


let button = document.getElementById("btn");
let userInput = document.getElementById("inputVal");
let guessArr = document.getElementById("arr");
let guessRem = document.getElementById("rem");
let result = document.getElementById("res");
let resetBtn = document.getElementById("reset");

let playGame = true;

if (playGame) {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        let userInputVal = parseInt(userInput.value);
        validation(userInputVal);
    },false)
}

function validation(guess) {
    if (isNaN(guess)) {
        displayMsg("Please enter a valid number")
    } else if (guess < 1) {
        displayMsg("Please enter number greater than 1");
    } else if (guess > 100) {
        displayMsg("Please enter number less than 100");
    } else {
        array.push(guess);
        if (i === 9) {
            displayGuess(guess);
            displayMsg(`Random number was: ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);            
        }
    }
}

function checkGuess(guess) {
        if (guess === randomNumber) {
            displayMsg("✨✌️🎉🎊Matches, Congratulation!✨✌️🎉🎊");
            endGame();
        } else if (guess > randomNumber) {
            displayMsg("Enter number iS tOO HIGH");
        } else if (guess < randomNumber) {
            displayMsg("Enter number is tOO LOW");
        }
    
}

function displayGuess(guess) {
    userInput.value = "";
    guessArr.textContent = array;
    guessRem.textContent = `${9-i}`;
    i++;
}

function displayMsg(msg) {
    result.textContent = msg;
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    resetBtn.textContent = "Restart"
    playGame = false;
}

resetBtn.addEventListener("click", function () {
    startGame();
},false)


function startGame() {
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(randomNumber);
    array = [];
    guessArr.textContent = array;
    i = 0;
    guessRem.textContent = "10";
    userInput.removeAttribute("disabled");
    result.textContent = "";
    resetBtn.textContent = ""
    playGame = true;
}