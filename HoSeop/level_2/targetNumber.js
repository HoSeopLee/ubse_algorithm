//타겟 넘버
const solution = (numbers, target) => {
  let answer = 0;
  const solution_number = (count, sum) => {
    if (count === numbers.length) {
      if (sum === target) {
        console.log(answer);
        answer += 1;
      }
      return;
    }
    solution_number(count + 1, sum + numbers[count]);
    solution_number(count + 1, sum - numbers[count]);
  };
  solution_number(0, 0);
  return answer;
};
