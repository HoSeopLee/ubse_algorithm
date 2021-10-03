function solution(A,B){
    let answer = 0;
    
    A.sort((a, b) => {
       return parseInt(a)-parseInt(b);
    })
    
    B.sort((a, b) =>{
       return parseInt(b)-parseInt(a);
    })
    
    for(let i = 0 ; i < A.length; i++){
        answer += A[i]*B[i]
    }
    
    return answer;
}