function solution(s){
    let answer = true;
    let wordArr = [];
    let pCount = 0;
    let yCount = 0;
    
    for(let i=0; i < s.length; i++){
        wordArr.push(s.substring(i, i+1));
    }
    pCount = (wordArr.filter((e)=> e=='p' || e=='P')).length;
    yCount = (wordArr.filter((e)=>e=='y' || e=='Y')).length;
   
    pCount===yCount ? answer=true: answer=false;

    return answer;
}