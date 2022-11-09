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

reload();

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
    // checkBtn.setAttribute('disabled', 'disable');
    // checkBtn.style.backgroundColor = '#ccc';
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
      localStorage.setItem('highscore', `${highscore}`);
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score -= 1;
      scoreEl.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
    }
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
  // checkBtn.removeAttribute('disabled');
  // checkBtn.style.backgroundColor = '#eee';
}

function reload() {
  const savedHighscore = localStorage.getItem('highscore', `${highscore}`);
  console.log(savedHighscore);
  if (savedHighscore) {
    highscore = savedHighscore;
    highscoreEl.textContent = highscore;
  }
}
