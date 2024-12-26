import { MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from '../constants/game.js';


const prevInput = []

export function getPrevInput() {
  return prevInput
}

export function updatePrevInput({ userInputNumber }) {
  prevInput.push(userInputNumber)
}

export function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * maxNumber) + minNumber;
}

export function getUpAndDownStatus({ randomNumber, userInputNumber }) {
  if (randomNumber > Number(userInputNumber)) {
    return 'up';
  }

  if (randomNumber < Number(userInputNumber)) {
    return 'down';
  }

  if (isNaN(userInputNumber)) {
    return 'error';
  }

  return 'correct';
}

export function isValidUserInput(userInputNumber) {
  return !isNaN(userInputNumber) && Number(userInputNumber) >= MIN_RANDOM_NUMBER && Number(userInputNumber) <= MAX_RANDOM_NUMBER;
}