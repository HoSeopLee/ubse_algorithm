function solution(absolutes, signs) {
    var answer = 0;
    absolutes.map((data, idx) => {
       answer += signs[idx] == true ? data : data * -1; 
    })
    return answer;
}