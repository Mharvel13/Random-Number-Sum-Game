// Delcaring Global Variables
let randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbersPicked = [];
let sumOfNumbersPicked = 0;

// Getting Elements from the DOM
let displayNumbersPicked = document.getElementById("displayNumber");
let displayNumbersSum = document.getElementById("displaySum");
let displayGameStatus = document.getElementById("displayStat");
let startBtn = document.getElementById("start");
let addNumBtn = document.getElementById("add");
let restartBtn = document.getElementById("restart");

// Event Listeners For The Buttons

startBtn.addEventListener("click", startGame);
addNumBtn.addEventListener("click", addNextNumber);
restartBtn.addEventListener("click", function () {
  document.location.reload();
});

function getRandomNumberFromArray() {
  let randomNumber = Math.floor(Math.random() * 9);
  return randomNumber;
}

function startGame() {
  let firstNumber = getRandomNumberFromArray();
  // console.log(firstNumber);
  numbersPicked.push(firstNumber);
  // console.log(numbersPicked);
  sumOfNumbersPicked = firstNumber;
  checkNumber();
  startBtn.disabled = true;
  startBtn.textContent = "Game is On!";
}

function addNextNumber() {
  let nextNumber = getRandomNumberFromArray();
  // console.log(nextNumber);
  numbersPicked.push(nextNumber);
  sumOfNumbersPicked += nextNumber;
  // console.log(numbersPicked);
  // console.log(sumOfNumbersPicked)
  checkNumber();
}

function checkNumber() {
  displayNumbersPicked.textContent = "Number Picked: ";
  for (let i = 0; i < numbersPicked.length; i++) {
    displayNumbersPicked.textContent += numbersPicked[i] + "  ";
  }
  displayNumbersSum.textContent = `Sum Of Numbers:${sumOfNumbersPicked}`;

  if (sumOfNumbersPicked < 24) {
    displayGameStatus.textContent = "Not there yet? Pick another number!";
  } else if (sumOfNumbersPicked === 24) {
    startBtn.style.display = "none";
    addNumBtn.disabled = true;
    addNumBtn.textContent = "Game Over";
    restartBtn.style.display = "block";
    displayGameStatus.textContent = "You Got it! You won!!! Congratulations";
    displayGameStatus.style.color = "Gold";
  } else {
    startBtn.style.display = "none";
    addNumBtn.disabled = true;
    addNumBtn.textContent = "Game Over";
    restartBtn.style.display = "block";
    displayGameStatus.textContent = "You Shoot Past 24! \n You Lost!!!";
    displayGameStatus.style.color = "red";
  }

  switch (sumOfNumbersPicked) {
    case 20:
    case 21:
    case 22:
    case 23:
      displayGameStatus.textContent =
        " Ohhh You're close to 24!!! \n Can you still make it?";
      break;
  }
}
