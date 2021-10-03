function solution(absolutes, signs) {
  let answer = 0;
  absolutes.map((element, index) => {
    answer = signs[index] === true ? answer + element : answer - element;
  });
  return answer;
}
