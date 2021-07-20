function solution(arr) {
    var answer = 0;
    
    arr.forEach((data, index)=>{
        answer+= data;
    })
    answer = answer / arr.length;
    return answer;
}