

import * as readline from 'node:readline/promises'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});




let count = 1
async function gamePlay() {
    console.log('컴퓨터가 1~50 사이의 숫자를 선택했습니다. 숫자를 맞춰보세요')
    const randomNumber = Math.floor(Math.random() * (50 - 1) + 1)

    console.log(randomNumber)

    while (true) {
        console.log('숫자 입력: ')
        const userInput = await rl.question('')

        count++;

        if (randomNumber > userInput) {
            console.log('업')
        } else if (randomNumber < userInput) {
            console.log('다운')
        } else {
            console.log('정답!')
            console.log('축하합니다. 3번 만에 숫자를 맞추셨습니다.')

            const playAgain = await rl.question('게임을 다시 시작하시겠습니까? (yes/no): ');

            if (playAgain === 'no') {
                console.log('게임을 종료합니다.')
                rl.close()
                break
            }
            if (playAgain === 'yes') {
                gamePlay()
                break
            }
        }
    }

}

gamePlay()

rl.on('close', () => {
    process.exit();
})


