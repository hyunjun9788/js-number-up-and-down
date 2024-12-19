

import * as readline from 'node:readline/promises'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('컴퓨터가 1~50 사이의 숫자를 선택했습니다. 숫자를 맞춰보세요')


const randomNumber = Math.floor(Math.random() * (50 - 1) + 1)
console.log(randomNumber)
console.log('숫자 입력:')

let count = 0

rl.on("line", (line) => {
    if (randomNumber > Number(line)) {
        console.log('업')
        count++
    } else if (randomNumber < Number(line)) {
        console.log('다운')
        count++
    } else {
        console.log('정답!')
        console.log(`축하합니다! ${count}번 만에 숫자를 맞추셨습니다.`)
        rl.close();
    }
}

)

rl.on('close', () => {
    process.exit();
})


