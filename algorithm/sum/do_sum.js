// 배열 안의 정수 중 홀수끼리의 합은?
// input
const arr = [1, 2, 3, 4, 5];
let sum = 0;
let N = arr.length;
// process
let i = 0;
do {
  if (arr[i] % 2 !== 0) {
    sum += arr[i];
  }
  i++;
} while (i < N);
// output
console.log('홀수의 합: ' + sum);
