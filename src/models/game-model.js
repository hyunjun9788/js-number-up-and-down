import { NUMBER_VALUE_STATUS } from '../constants/game.js';

const prevMyGuessNumberList = [];

export function generateRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * maxNumber) + minNumber;
}

export function getPrevMyGuessNumberList() {
  return prevMyGuessNumberList;
}

export function resetPrevMyGuessNumberList() {
  prevMyGuessNumberList.length = 0;
}

export function addCurrentMyGuessNumber({ prevMyGuessNumberList, currentInputValue }) {
  prevMyGuessNumberList.push(currentInputValue);
}

export function getCurrentMyGuessNumber() {
  const currentInputNumber = document.getElementById('input-number').value
  return Number(currentInputNumber)
}

export function getUpAndDownStatus({ randomNumber, currentInputValue }) {
  if (randomNumber > Number(currentInputValue)) {
    return NUMBER_VALUE_STATUS.UP;
  }

  if (randomNumber < Number(currentInputValue)) {
    return NUMBER_VALUE_STATUS.DOWN;
  }

  return NUMBER_VALUE_STATUS.CORRECT;
}
