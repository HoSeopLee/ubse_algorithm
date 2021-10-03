//짝지어 제거하기
const solution = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] !== s[i]) {
      console.log(stack);
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }

  return stack.length ? 0 : 1;
};
