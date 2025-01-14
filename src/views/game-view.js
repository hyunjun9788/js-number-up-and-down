import { INPUT_STATUS } from '../constants/game.js';
import { askRestart } from '../controllers/game-controller.js';
import { rl } from '../utils/rl-interface.js';

export function showGameStartMessage() {
  console.log('컴퓨터가 1~50 사이의 숫자를 선택했습니다. 숫자를 맞춰보세요');
}

export function showNumberInputMessage() {
  console.log('숫자 입력: ');
}

export async function inputNumber() {
  return await rl.question('');
}

export function showUpAndDownStatus({ inputStatusResult, prevInput }) {
  const prevInputResult = prevInput.join(' ');
  while (true) {
    if (inputStatusResult === INPUT_STATUS.UP) {
      console.log('업');
      console.log('이전 추측:', prevInputResult);
      break;
    }

    if (inputStatusResult === INPUT_STATUS.DOWN) {
      console.log('다운');
      console.log('이전 추측:', prevInputResult);
      break;
    }

    if (inputStatusResult === INPUT_STATUS.ERROR) {
      console.log('1~50 사이의 숫자만 입력해주세요.');
      break;
    }

    if (inputStatusResult === INPUT_STATUS.CORRECT) {
      console.log('정답!');
      console.log(`축하합니다. ${prevInput.length}번 만에 숫자를 맞추셨습니다.`);
      askRestart();
      break;
    }
  }
}

export async function showRestartMessage() {
  return await rl.question('게임을 다시 시작하시겠습니까? (yes/no): ');
}

export function showGameOverMessage() {
  console.log('게임을 종료합니다.');
  rl.close();
}
