function solution(n) {
    let stringN = n.toString();
    let nArr = [];
    let answer = 0;
    for(let i =0; i < stringN.length; i++){
        nArr.push(stringN.substring(i, i+1));
    }
    answer = parseInt(nArr.sort().reverse().join(''));
    return answer;
}