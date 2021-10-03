function solution(n) {
    let stringN = n.toString();
    let answer = [];
    for(let i = 0; i < stringN.length; i++){
        answer.push(parseInt(stringN.substring(i,i+1)));
    }
    answer.reverse();
    return answer;
}