// Game values
const min = 1;
const max = 10;
const winningNum = getRandomNum(min, max);
let guessesLeft = 3;

// UI elements
const game = document.querySelector("#game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessInput = document.querySelector("#guess-input");
const guessBtn = document.querySelector("#guess-btn");
const message = document.querySelector(".message");

// Change header color
const head = document.querySelector(".heading");
// container
const cont = document.querySelector(".container");
// underline
const underline = document.querySelector(".under-line");

head.style.color = "#000";
cont.style.background = "#ccc";
cont.style.padding = "6rem";
cont.style.textAlign = "center";
underline.style.borderBottom = "2px solid black";
underline.style.marginBottom = "2.5rem";

// assign min and max numbers
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// set event listner to listen for guess (submit click)
guessBtn.addEventListener("click", function () {
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    // how to set message
    setMessage(`please enter a number betweer ${min} and ${max}`, "red");
  }

  //    check if you won
  if (guess === winningNum) {
    // disable input
    guessInput.disabled = true;
    // change border color
    guessBtn.style.borderColor = "green";
    guessInput.style.borderColor = "green";
    // set message
    setMessage(`${winningNum} is correct, YOU'RE A GENIUS!`, "green");

    // play again if you won
    guessBtn.value = "Play again";
    guessBtn.className += "play-again";

  } else {
    // you have () guesses left calculation
    guessesLeft -= 1;

    // you lost message
    if (guessesLeft === 0) {
      // disable input
      //   guessBtn.disabled = true
      guessInput.disabled = true;
      // change border color
      guessInput.style.borderColor = "red";
      // set message
      setMessage(
        `Game over, YOU LOST!... The correct number is ${winningNum}`,
        "red"
      );

      // play again if you won
      guessBtn.value = "Play again";
      guessBtn.className += "play-again";
    } else {
      // wrong answer, game continues, guesses left = ()
      setMessage(
        `${guess} is not correct, you have ${guessesLeft} guesses left......`,
        "red"
      );
      // change border color
      guessInput.style.borderColor = "red";
    }
  }
});

// get random number
function getRandomNum (min, max){
    return Math.floor(Math.random() * 10 + 1);
}

// how to define the message set
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
