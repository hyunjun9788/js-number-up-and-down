export function showErrorMessage({ type, randomNumber }) {
  if (type === 'overMax') {
    console.log('50이하의 숫자를 입력해주세요.');
  }

  if (type === 'underMin') {
    console.log('1이상의 숫자를 입력해주세요.');
  }

  if (type === 'countOver') {
    console.log(`5회 초과! 숫자를 맞추지 못했습니다. 정답: ${randomNumber}`);
  }
}
