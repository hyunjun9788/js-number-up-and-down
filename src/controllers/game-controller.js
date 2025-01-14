import {
  inputNumber,
  showGameOverMessage,
  showGameStartMessage,
  showNumberInputMessage,
  showRestartMessage,
  showUpAndDownStatus,
} from '../views/game-view.js';
import { INPUT_STATUS, MAX_COUNT, MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from '../constants/game.js';
import { showCountOverError, showOverMaxError, showUnderMinError } from '../views/error-message.js';
import {
  getPrevInput,
  getRandomNumber,
  getUpAndDownStatus,
  isValidUserInput,
  resetPrevInput,
  updatePrevInput,
} from '../models/game-model.js';

export async function askRestart() {
  while (true) {
    const playAgainInput = await showRestartMessage();

    if (playAgainInput === 'no') {
      showGameOverMessage();
      break;
    }
    if (playAgainInput === 'yes') {
      resetPrevInput()
      playGame();
      break;
    }
  }
}

async function playGame() {
  showGameStartMessage();
  const randomNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);

  console.log(randomNumber);

  const prevInput = getPrevInput();

  while (true) {
    showNumberInputMessage()
    const userInputNumber = await inputNumber();

    if (isValidUserInput(userInputNumber)) {
      updatePrevInput(userInputNumber);
    }

    if (prevInput.length >= MAX_COUNT && Number(userInputNumber) !== randomNumber) {
      showCountOverError(randomNumber);
      askRestart();
      break;
    }

    if (userInputNumber > MAX_RANDOM_NUMBER) {
      showOverMaxError();
      continue;
    }

    if (userInputNumber < MIN_RANDOM_NUMBER) {
      showUnderMinError();
      continue;
    }

    const inputStatusResult = getUpAndDownStatus({
      randomNumber,
      userInputNumber,
    });

    showUpAndDownStatus({ inputStatusResult, prevInput });

    if (inputStatusResult === INPUT_STATUS.CORRECT) {
      break;
    }
  }
}

export default playGame;
