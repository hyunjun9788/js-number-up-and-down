import { NUMBER_VALUE_STATUS } from '../constants/game.js';

const prevMyGuessNumberList = [];

export function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

export function getPrevMyGuessNumberList() {
  return prevMyGuessNumberList;
}

export function clearPrevMyGuessNumberList() {
  prevMyGuessNumberList.length = 0;
}

export function addCurrentMyGuessNumber(guessNumber) {
  prevMyGuessNumberList.push(guessNumber);
}

export function getCurrentMyGuessNumber() {
  const guessNumber = document.getElementById('input-number').valueAsNumber;
  return guessNumber;
}

export function getUpOrDownStatus({ randomNumber, guessNumber }) {
  if (randomNumber > guessNumber) {
    return NUMBER_VALUE_STATUS.UP;
  }

  if (randomNumber < guessNumber) {
    return NUMBER_VALUE_STATUS.DOWN;
  }

  return NUMBER_VALUE_STATUS.CORRECT;
}
