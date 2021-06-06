function solution(a, b) {
  let answer = 0;

  a.map((data, index) => {
    answer += data * b[index];
  });
  return answer;
}
