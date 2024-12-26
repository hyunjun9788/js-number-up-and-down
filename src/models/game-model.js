import { MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from '../constants/game.js';

export function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * maxNumber) + minNumber;
}

export function getUpAndDownStatus({ randomNumber, userInput }) {
  if (randomNumber > Number(userInput)) {
    return 'up';
  }

  if (randomNumber < Number(userInput)) {
    return 'down';
  }

  if (isNaN(userInput)) {
    return 'error';
  }

  return 'correct';
}

export function isValidUserInput({ userInput }) {
  return !isNaN(userInput) && Number(userInput) >= MIN_RANDOM_NUMBER && Number(userInput) <= MAX_RANDOM_NUMBER;
}

export function updatePrevInputAndCount({ prevResult, userInput }) {
  prevResult.prevInput.push(userInput);
  prevResult.count += 1;
}
