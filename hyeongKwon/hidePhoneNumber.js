function solution(phone_number) {
    let answer = '';
    let temp = phone_number.split('');
    
    for(let i = 0; i < phone_number.length - 4; i++){
        answer += '*';
    }
    
    for(let i = phone_number.length - 4; i < phone_number.length; i++){
        answer += temp[i];
    }
    return answer;
}