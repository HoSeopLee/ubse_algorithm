function solution(n) {
    let answer = [];
    let temp = String(n);
    temp = temp.split('').reverse().join('');

    for(let i = 0; i < temp.length; i++){
        answer.push(parseInt(temp[i]));
    }
    
    
    return answer;
}