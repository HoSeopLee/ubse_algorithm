function solution(a, b) {
    let answer = 0;
    let x=0,y=0;
    if(a>b){
        x=b;
        y=a;
    }else{
        x=a;
        y=b;
    }
    for(let i =x; i<=y; i++){
        answer+=i
    }
    return answer;
}