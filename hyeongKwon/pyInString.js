function solution(s){
    let answer = true;
    let pCnt = 0;
    let yCnt = 0;
    s = s.toUpperCase();
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'P') pCnt++;
        else if(s[i] === 'Y') yCnt++;
    }
    if(pCnt == 0 && yCnt == 0){
        answer = true;
    }else if(pCnt == yCnt){
        answer = true;
    }else{
        answer = false;
    }

    return answer;
}