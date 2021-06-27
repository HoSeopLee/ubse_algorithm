//소수 만들기
const solution = (nums) => {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const num = nums[i] + nums[j] + nums[k];

        if (isSosu(num)) {
          answer++;
        }
      }
    }
  }
  return answer;
};

const isSosu = (num) => {
  if (num < 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
};
