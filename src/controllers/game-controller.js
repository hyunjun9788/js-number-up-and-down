import {
  showCorrectMessage,
  showFiveOverMessage,
  showGameOverMessage,
  showGameReadyView,
  showGameRestartMessage,
  showGameStartView,
  showInvalidYesNoInputMessage,
  showUpOrDownStatusView,
  updatePrevMyGuessNumbersView,
  updateResetInputInnerValue,
  updateResetPrevInputValuesView,
  updateResetYesOrNoStatusView,
  updateUpOrDownStatusView,
} from '../views/game-view.js';

import {
  addCurrentMyGuessNumber,
  generateRandomNumber,
  getCurrentMyGuessNumber,
  getPrevMyGuessNumberList,
  getUpAndDownStatus,
  resetPrevMyGuessNumberList,
} from '../models/game-model.js';

import { MAX_COUNT, MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER, NUMBER_VALUE_STATUS } from '../constants/game.js';

let randomNumber
let prevMyGuessNumberList = [];

function resetPrevGameResults() {
  resetPrevMyGuessNumberList()
  updateResetPrevInputValuesView()
  updateResetYesOrNoStatusView()
  updateUpOrDownStatusView(NUMBER_VALUE_STATUS.NO_VALUE)
}

function restartGame() {
  while (true) {
    const restartResponse = showGameRestartMessage();

    if (restartResponse === 'yes') {
      playGame();
      break;
    }

    if (restartResponse === 'no') {
      showGameOverMessage()
      showGameReadyView();
      break;
    }
    showInvalidYesNoInputMessage()
  }
}

function handleInputFormSubmit(e) {
  e.preventDefault()

  const currentInputValue = getCurrentMyGuessNumber();

  addCurrentMyGuessNumber({ prevMyGuessNumberList, currentInputValue });

  const upOrDownStatusResult = getUpAndDownStatus({
    randomNumber,
    currentInputValue,
  });

  showUpOrDownStatusView(upOrDownStatusResult)
  updatePrevMyGuessNumbersView(prevMyGuessNumberList)

  if (prevMyGuessNumberList.length >= MAX_COUNT && Number(currentInputValue) !== randomNumber) {
    showFiveOverMessage(randomNumber)
    restartGame()
  }

  if (upOrDownStatusResult === NUMBER_VALUE_STATUS.CORRECT) {
    showCorrectMessage(prevMyGuessNumberList.length)
    restartGame()
  }

  updateResetInputInnerValue();
}

async function playGame() {
  randomNumber = generateRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  prevMyGuessNumberList = getPrevMyGuessNumberList();
  showGameStartView();
  resetPrevGameResults()

  const numberInputForm = document.getElementById('input-form');

  numberInputForm.removeEventListener('submit', handleInputFormSubmit);
  numberInputForm.addEventListener('submit', handleInputFormSubmit);
}


export default playGame;
