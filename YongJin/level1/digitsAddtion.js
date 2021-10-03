function solution(n)
{
    let answer = 0;
    let stringN = n.toString();
    let nArr=[];
    for(let i=0; i < stringN.length; i++){
        nArr.push(stringN.substring(i, i+1));
    }
    
    for(let j=0; j<nArr.length; j++){
        answer+=parseInt(nArr[j]);
    }
    


    return answer;
}