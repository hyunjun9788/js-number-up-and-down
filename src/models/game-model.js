import { INPUT_STATUS, MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from '../constants/game.js';
import { isNumber } from '../utils/helpers.js';

let prevInput = [];

export function getPrevInput() {
  return prevInput;
}

export function resetPrevInput() {
  prevInput = [];
}

export function updatePrevInput(userInputNumber) {
  prevInput.push(userInputNumber);
}

export function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * maxNumber) + minNumber;
}

export function getUpAndDownStatus({ randomNumber, userInputNumber }) {
  if (randomNumber > Number(userInputNumber)) {
    return INPUT_STATUS.UP;
  }

  if (randomNumber < Number(userInputNumber)) {
    return INPUT_STATUS.DOWN;
  }

  if (isNumber(userInputNumber)) {
    return INPUT_STATUS.ERROR;
  }

  return INPUT_STATUS.CORRECT;
}

export function isValidUserInput(userInputNumber) {
  return (
    !isNaN(userInputNumber) &&
    Number(userInputNumber) >= MIN_RANDOM_NUMBER &&
    Number(userInputNumber) <= MAX_RANDOM_NUMBER
  );
}
