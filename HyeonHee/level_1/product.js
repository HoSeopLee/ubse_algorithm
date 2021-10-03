function solution(a, b) {
    var answer = 0;
    a.forEach((data, index) => {
        answer += data * b[index];
    })
    return answer;
}