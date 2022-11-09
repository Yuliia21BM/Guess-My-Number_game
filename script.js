'use strict';

const againBtn = document.querySelector('button.again');
const inputEl = document.querySelector('input.guess');
const checkBtn = document.querySelector('.check');
const resultNumber = document.querySelector('.number');
const message = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const body = document.querySelector('body');

againBtn.addEventListener('click', onAgainBtnClick);
checkBtn.addEventListener('click', onCheckBtnClick);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(someMessage) {
  message.textContent = someMessage;
}

function onCheckBtnClick(e) {
  e.preventDefoult;

  const guess = Number(inputEl.value);
  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    body.style.backgroundColor = '#60b347';
    resultNumber.textContent = guess;
    if (score > highscore) {
      highscoreEl.textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score -= 1;
      scoreEl.textContent = score;
    }
  } else {
    displayMessage('💥 You lost the game!');
    scoreEl.textContent = 0;
  }
}

function onAgainBtnClick(e) {
  e.preventDefoult;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  highscore = 0;
  displayMessage('Start guessing...');
  scoreEl.textContent = score;
  resultNumber.textContent = '?';
  inputEl.value = '';

  body.style.backgroundColor = '#222';
}
