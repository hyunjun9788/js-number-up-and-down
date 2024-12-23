import { showGameOverMessage, showGameStartMessage, showNumberInputMessage, showRestartMessage, showUpAndDownStatus } from '../views/game-view.js';
import { MAX_COUNT, MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from '../constants.js';
import { showErrorMessage } from '../views/error-message.js';
import { getRandomNumber, getUpAndDownStatus, isValidUserInput, updatePrevInputAndCount } from '../models/game-model.js';

export async function askRestart() {
    while (true) {
        const playAgainInput = await showRestartMessage()

        if (playAgainInput === 'no') {
            showGameOverMessage()
            break;
        }
        if (playAgainInput === 'yes') {
            playGame();
            break;
        }
    }
}

async function playGame() {
    showGameStartMessage()
    const randomNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);

    console.log(randomNumber);

    const prevResult = {
        prevInput: [],
        count: 0,
    };

    while (true) {
        const userInput = await showNumberInputMessage()

        if (isValidUserInput({ userInput })) {
            updatePrevInputAndCount({ prevResult, userInput })
        }

        if (prevResult.count >= MAX_COUNT) {
            showErrorMessage({ type: 'countOver', randomNumber })
            askRestart();
            break;
        }

        if (userInput > MAX_RANDOM_NUMBER) {
            showErrorMessage({ type: 'overMax' })
            continue
        }

        if (userInput < MIN_RANDOM_NUMBER) {
            showErrorMessage({ type: 'underMin' })
            continue;
        }

        const inputResult = getUpAndDownStatus({
            prevResult,
            randomNumber,
            userInput,
        });

        showUpAndDownStatus({ inputResult, prevResult })

        if (inputResult === 'correct') {
            break
        }
    }
}





export default playGame
