function solution(a, b) {
    let answer = '';
    let temp = 0;
    
    for(let i = 1; i < a; i++){
        if(i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12){
            b += 31;
        }else if(i == 4 || i == 6 ||  i == 9 || i == 11){
            b += 30;
        }else if(i == 2){
            b += 29;
        }
    }

    temp = b % 7;
    
    switch(temp){
        case 0:
            answer = 'THU'
            break;
        case 1:
            answer = 'FRI'
            break;
        case 2:
            answer = 'SAT'
            break;
        case 3:
            answer = 'SUN'
            break;
        case 4:
            answer = 'MON'
            break;
        case 5:
            answer = 'TUE'
            break;
        case 6:
            answer = 'WED'
            break;
    }
    
    
    return answer;
}