function solution(arr)
{
    let answer = [];

    arr.forEach((value, index) => {
        if(answer.lenth == 0){
            answer.push(value);
        }else if(arr[index - 1] != arr[index] && answer[index - 1] != value){
            answer.push(value);
        }
    })
    
    return answer;
}