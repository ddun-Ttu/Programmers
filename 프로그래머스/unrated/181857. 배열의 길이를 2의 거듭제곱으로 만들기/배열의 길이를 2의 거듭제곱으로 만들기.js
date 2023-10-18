function solution(arr) {
  // 2의 거듭제곱으로 배열의 길이를 만들기 위한 최소한의 0의 개수를 계산
  const targetLength = Math.pow(2, Math.ceil(Math.log2(arr.length)));

  // 추가해야 할 0의 개수 계산
  const zerosToAdd = targetLength - arr.length;

  // 0을 추가한 배열 생성
  const result = arr.concat(Array(zerosToAdd).fill(0));

  return result;
}