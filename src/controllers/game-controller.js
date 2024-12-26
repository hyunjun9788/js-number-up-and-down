import {
  showGameOverMessage,
  showGameStartMessage,
  showNumberInputMessage,
  showRestartMessage,
  showUpAndDownStatus,
} from '../views/game-view.js';
import { MAX_COUNT, MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from '../constants/game.js';
import { showErrorMessage } from '../views/error-message.js';
import {
  getPrevInput,
  getRandomNumber,
  getUpAndDownStatus,
  isValidUserInput,
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
      playGame();
      break;
    }
  }
}

async function playGame() {
  showGameStartMessage();
  const randomNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);

  console.log(randomNumber);

  const prevInput = getPrevInput()

  while (true) {
    const userInputNumber = await showNumberInputMessage();

    if (isValidUserInput(userInputNumber)) {
      updatePrevInput({ userInputNumber });
    }

    if (prevInput.length >= MAX_COUNT) {
      showErrorMessage({ type: 'countOver', randomNumber });
      askRestart();
      break;
    }

    if (userInputNumber > MAX_RANDOM_NUMBER) {
      showErrorMessage({ type: 'overMax' });
      continue;
    }

    if (userInputNumber < MIN_RANDOM_NUMBER) {
      showErrorMessage({ type: 'underMin' });
      continue;
    }

    const inputResult = getUpAndDownStatus({
      randomNumber,
      userInputNumber,
    });

    showUpAndDownStatus({ inputResult, prevInput });

    if (inputResult === 'correct') {
      break;
    }
  }
}

export default playGame;
