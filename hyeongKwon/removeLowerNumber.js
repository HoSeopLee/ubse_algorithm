function solution(arr) {
    let answer = [];
    let min = 0;
    
    arr.forEach((value, index) => {
        if(index == 0) min = value;
        if(value < min) min = value;
    })

    if(arr.length <= 1) return [-1];
    arr.forEach((value, index) => {
        if(min != value) answer.push(value);
    })
    
    return answer;
}