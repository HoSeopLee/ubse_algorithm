//삼집번 뒤집기
const solution = (n) => {
  let answer = '';
  let number = n;
  let value = 0;
  while (number >= 1) {
    const numbers = Math.floor(number / 3);
    const answers = Math.floor(number % 3);
    number = numbers;
    answer += answers.toString();
  }
  //

  // for(let i = 0; i< answer.length; i++) {
  //     value += answer[answer.length-1-i]*Math.pow(3, i)
  // }
  for (let i = 0; i < answer.length; i++) {
    value += answer[answer.length - 1 - i] * 3 ** i;
  }
  return value;
  // answer = parseInt(answer,3).toString(10)
  // return Number( answer) ;
};
