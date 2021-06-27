function solution(n) {
    let answer = '';
    let result = 0;
    for(let i = 0; n > 0; i++){
        answer += n%3;
        n = parseInt(n/3);
    }
    let str = answer.split('');
    for(let i = answer.length - 1, j = 0; i >= 0; i--, j++){
        result += parseInt(answer[j]) * (3 ** i);
    }
    return result;
}