import { MAX_COUNT } from '../constants/game.js';

export function showGameReadyView() {
  const startButtonElement = document.getElementById('start-button');
  startButtonElement.classList.remove('un-visible');
  startButtonElement.classList.add('visible');

  const gameViewElement = document.getElementById('game-view');
  gameViewElement.classList.remove('visible');
  gameViewElement.classList.add('un-visible');
}

export function showGameStartView() {
  const startButtonElement = document.getElementById('start-button');
  startButtonElement.classList.remove('visible');
  startButtonElement.classList.add('un-visible');

  const gameViewElement = document.getElementById('game-view');
  gameViewElement.classList.remove('un-visible');
  gameViewElement.classList.add('visible');
}

export function showUpOrDownStatusView(upOrDownStatusResult) {
  document.getElementById('up-or-down').textContent = upOrDownStatusResult;
}

export function resetPrevInputValuesView() {
  const prevResultElement = document.getElementById('prev-result');
  prevResultElement.textContent = '';
}

export function resetUpOrDownStatusView() {
  const upOrDownStatusElement = document.getElementById('up-or-down');
  upOrDownStatusElement.textContent = '';
}

export function updatePrevMyGuessNumbersView(prevMyGuessNumberList) {
  document.getElementById('prev-result').textContent = prevMyGuessNumberList;
}

export function updateUpOrDownStatusView(upOrDownStatus) {
  document.getElementById('up-or-down').textContent = upOrDownStatus;
}

export function updateResetInputInnerValue() {
  const numberInputElement = document.getElementById('input-number');
  numberInputElement.value = '';
  numberInputElement.focus();
}

export function showGameRestartMessage() {
  const restartResponse = prompt(`게임을 다시 시작하시겠습니까 ? (yes / no) : `);
  return restartResponse;
}

export function showGameOverMessage() {
  alert('게임을 종료합니다.');
}
export function showMaxNumberOverMessage(randomNumber) {
  alert(`${MAX_COUNT}회 초과! 숫자를 맞추지 못했습니다. (정답: ${randomNumber})`);
}

export function alertInvalidYesNoInputMessage() {
  alert('잘못된 입력입니다. "yes" 또는 "no"를 입력해주세요.');
}
export function showCorrectMessage(count) {
  alert(`축하합니다! ${count}번 만에 숫자를 맞추셨습니다.`);
}
