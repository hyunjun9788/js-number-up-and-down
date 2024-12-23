import * as readline from 'node:readline/promises';
import { arrayToString } from './utils/arrayUtils.js';
import {
    MAX_COUNT,
    MAX_RANDOM_NUMBER,
    MIN_RANDOM_NUMBER,
} from './constants.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('close', () => {
    process.exit();
});
function getRandomNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * maxNumber) + minNumber;
}

function getUpAndDownStatus({ randomNumber, userInput, prevGuess }) {
    if (randomNumber > Number(userInput)) {
        console.log('업');
        console.log('이전 추측:', arrayToString(prevGuess));
        return;
    }

    if (randomNumber < Number(userInput)) {
        console.log('다운');
        console.log('이전 추측:', arrayToString(prevGuess));
        return;
    }

    if (isNaN(userInput)) {
        console.log('1~50 사이의 숫자만 입력해주세요.');

        return;
    }

    return 'correct';
}

async function askRestart() {
    while (true) {
        const playAgainInput = await rl.question(
            '게임을 다시 시작하시겠습니까? (yes/no): ',
        );

        if (playAgainInput === 'no') {
            console.log('게임을 종료합니다.');
            rl.close();
            break;
        }
        if (playAgainInput === 'yes') {
            playGame();
            break;
        }
    }
}

async function playGame() {
    console.log('컴퓨터가 1~50 사이의 숫자를 선택했습니다. 숫자를 맞춰보세요');
    const randomNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);

    let attempt = 0;

    console.log(randomNumber);

    const prevGuess = [];

    while (true) {
        console.log('숫자 입력: ');
        const userInput = await rl.question('');

        if (
            !isNaN(userInput) &&
            Number(userInput) >= MIN_RANDOM_NUMBER &&
            Number(userInput) <= MAX_RANDOM_NUMBER
        ) {
            prevGuess.push(userInput);
            attempt += 1;
        }

        if (userInput > MAX_RANDOM_NUMBER) {
            console.log('50이하의 숫자를 입력해주세요.');
            continue;
        }

        if (attempt >= MAX_COUNT) {
            console.log(
                `5회 초과! 숫자를 맞추지 못했습니다. 정답: ${randomNumber}`,
            );
            askRestart();
            break;
        }

        const result = getUpAndDownStatus({
            randomNumber,
            userInput,
            prevGuess,
        });
        if (result === 'correct') {
            console.log('정답!');
            console.log(`축하합니다. ${attempt}번 만에 숫자를 맞추셨습니다.`);
            askRestart();
            break;
        }
    }
}

playGame();
