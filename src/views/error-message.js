export function showCountOverError(randomNumber) {
  console.log(`5회 초과! 숫자를 맞추지 못했습니다. 정답: ${randomNumber}`);
}

export function showOverMaxError() {
  console.log('50이하의 숫자를 입력해주세요.');
}

export function showUnderMinError() {
  console.log('1이상의 숫자를 입력해주세요.');
}