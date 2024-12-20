

import * as readline from 'node:readline/promises'
import { arrayToString } from './utils/arrayUtils.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function progressGuess(randomNumber, guess, prevGuess) {
    if (randomNumber > Number(guess)) {
        console.log('업')
        console.log('이전 추측:', arrayToString(prevGuess))
        return
    }

    if (randomNumber < Number(guess)) {
        console.log('다운')
        console.log('이전 추측:', arrayToString(prevGuess))
        return
    }

    console.log('정답!')
    return 'correct'
}

async function askPlayAgain() {
    while (true) {
        const playAgainInput = await rl.question('게임을 다시 시작하시겠습니까? (yes/no): ');

        if (playAgainInput === 'no') {
            console.log('게임을 종료합니다.')
            rl.close()
            break
        }
        else if (playAgainInput === 'yes') {
            playGame()
            break
        } else {
            askPlayAgain()
        }
    }
}

async function playGame() {
    console.log('컴퓨터가 1~50 사이의 숫자를 선택했습니다. 숫자를 맞춰보세요')
    const randomNumber = Math.floor(Math.random() * (50 - 1) + 1)
    let attempt = 0

    console.log(randomNumber)

    const prevGuess = []

    while (true) {
        console.log('숫자 입력: ')
        const userInput = await rl.question('')
        prevGuess.push(userInput)
        attempt++;

        if (attempt > 5) {
            console.log(`5회 초과! 숫자를 맞추지 못했습니다. 정답: ${randomNumber}`)
            await askPlayAgain()
            break
        }

        const result = progressGuess(randomNumber, userInput, prevGuess)
        if (result === 'correct') {
            console.log(`축하합니다. ${attempt}번 만에 숫자를 맞추셨습니다.`)
            askPlayAgain()
            break
        }
    }
}


playGame()

rl.on('close', () => {
    process.exit();
})


