function solution(absolutes, signs) {
    let answer = 0;
    
    absolutes.forEach((data, index) => {
        
        if(signs[index] == false){
            data = data * -1;
        }
        answer += data; 
        
    })
    
    return answer;
}