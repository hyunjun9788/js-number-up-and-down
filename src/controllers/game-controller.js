import {
  alertInvalidYesNoInputMessage,
  resetPrevInputValuesView,
  resetUpOrDownStatusView,
  showCorrectMessage,
  showGameOverMessage,
  showGameReadyView,
  showGameRestartMessage,
  showGameStartView,
  showMaxNumberOverMessage,
  showUpOrDownStatusView,
  updatePrevMyGuessNumbersView,
  updateResetInputInnerValue,
  updateUpOrDownStatusView,
} from '../views/game-view.js';

import {
  addCurrentMyGuessNumber,
  clearPrevMyGuessNumberList,
  generateRandomNumber,
  getCurrentMyGuessNumber,
  getPrevMyGuessNumberList,
  getUpOrDownStatus,
} from '../models/game-model.js';

import { MAX_COUNT, MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER, NUMBER_VALUE_STATUS } from '../constants/game.js';

let randomNumber;
// let prevMyGuessNumberList;

function resetPrevGameResults() {
  clearPrevMyGuessNumberList();
  resetPrevInputValuesView();
  resetUpOrDownStatusView();
  updateUpOrDownStatusView(NUMBER_VALUE_STATUS.EMPTY_VALUE);
}

function restartGame() {
  while (true) {
    const restartResponse = showGameRestartMessage();

    if (restartResponse === 'yes') {
      resetPrevGameResults();
      playGame();
      break;
    }

    if (restartResponse === 'no') {
      resetPrevGameResults();
      showGameOverMessage();
      showGameReadyView();
      break;
    }
    alertInvalidYesNoInputMessage();
  }
}

function handleInputFormSubmit(e) {
  e.preventDefault();

  const guessNumber = getCurrentMyGuessNumber();
  const prevMyGuessNumberList = getPrevMyGuessNumberList();

  addCurrentMyGuessNumber(guessNumber);

  const upOrDownStatusResult = getUpOrDownStatus({
    randomNumber,
    guessNumber,
  });

  showUpOrDownStatusView(upOrDownStatusResult);

  const prevMyGuessNumbers = prevMyGuessNumberList.join(' ');
  updatePrevMyGuessNumbersView(prevMyGuessNumbers);

  if (prevMyGuessNumberList.length >= MAX_COUNT && Number(guessNumber) !== randomNumber) {
    showMaxNumberOverMessage(randomNumber);
    restartGame();
  }

  if (upOrDownStatusResult === NUMBER_VALUE_STATUS.CORRECT) {
    showCorrectMessage(prevMyGuessNumberList.length);
    restartGame();
  }

  updateResetInputInnerValue();
}

function updateFormSubmitListenerForPlay() {
  const numberInputForm = document.getElementById('input-form');
  numberInputForm.removeEventListener('submit', handleInputFormSubmit);
  numberInputForm.addEventListener('submit', handleInputFormSubmit);
}

async function playGame() {
  randomNumber = generateRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  showGameStartView();

  updateFormSubmitListenerForPlay();
}

export default playGame;
