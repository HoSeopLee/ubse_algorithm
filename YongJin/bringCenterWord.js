function solution(s) {
    let wordLength = s.length;
    let answer = '';
    
    if(wordLength % 2 == 0 ){//짝수이면
        answer = s.substring(parseInt(wordLength / 2)-1,parseInt(wordLength / 2) +1)
    }else{//홀수이면
        console.log(parseInt(wordLength / 2))
        answer = s.substring(parseInt(wordLength / 2),parseInt(wordLength / 2)+1)
    }
    
    return answer;
}