//최소값 만들기
const solution = (A, B) => {
  let answer = 0;
  const A_sort = A.sort((a, b) => a - b);
  const B_sort = B.sort((a, b) => b - a);
  A_sort.map((data, index) => {
    return (answer += data * B_sort[index]);
  });

  return answer;
};
