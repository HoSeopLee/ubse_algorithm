function solution(absolutes, signs) {
    
    let answer = 0;
    absolutes.map((data, index) => {
        if(!signs[index]){
            absolutes[index] = absolutes[index]*(-1);
            answer+= absolutes[index];
        } else {
            answer+= absolutes[index];
        }
    });
    return answer;
}