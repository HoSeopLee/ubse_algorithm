function solution(seoul) {
    let answer = '';
    let temp = 0;
    
    seoul.forEach((value, index) => {
        if(value == 'Kim') temp = index;
    })
    
    answer = '김서방은 ' + temp + '에 있다'
    
    return answer;
}