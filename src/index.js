

import * as readline from 'node:readline/promises'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('컴퓨터가 1~50 사이의 숫자를 선택했습니다. 숫자를 맞춰보세요')
const randomNumber = Math.floor(Math.random() * (50 - 1) + 1)
console.log(randomNumber)
console.log('숫자 입력:')

//정답이 아니면서 5회 이내일때는 계속 반복  
rl.on("line", (line) => {
    rl.close();
});

rl.on('close', () => {
    process.exit();
})