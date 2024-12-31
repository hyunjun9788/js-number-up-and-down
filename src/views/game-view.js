export function showGameStartView() {
  document.getElementById('start-button').style.display = 'none'
  document.getElementById('start-message').style.display = 'block'
  document.getElementById('input-container').style.display = 'block'
}

export function showGameReadyView() {
  document.getElementById('start-button').style.display = 'inline-block'
  document.getElementById('start-message').style.display = 'none'
  document.getElementById('input-container').style.display = 'none'
}

export function showUpOrDownStatusView(upOrDownStatusResult) {
  document.getElementById('up-or-down').textContent = upOrDownStatusResult;
}

export function updateResetPrevInputValuesView() {
  const prevResultElement = document.getElementById('prev-result');
  prevResultElement.textContent = '';
}

export function updateResetYesOrNoStatusView() {
  const upOrDownStatusElement = document.getElementById('up-or-down');
  upOrDownStatusElement.textContent = '';
}

export function updatePrevMyGuessNumbersView(prevMyGuessNumberList) {
  document.getElementById('prev-result').textContent = prevMyGuessNumberList.join(' ');
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
  const restartResponse = prompt(`게임을 다시 시작하시겠습니까 ? (yes / no) : `)
  return restartResponse
}

export function showGameOverMessage() {
  alert('게임을 종료합니다.');

}
export function showFiveOverMessage(randomNumber) {
  alert(`5회 초과! 숫자를 맞추지 못했습니다. (정답: ${randomNumber})`)
}

export function showInvalidYesNoInputMessage() {
  alert('잘못된 입력입니다. "yes" 또는 "no"를 입력해주세요.');
}
export function showCorrectMessage(count) {
  alert(`축하합니다! ${count}번 만에 숫자를 맞추셨습니다.`);
}

