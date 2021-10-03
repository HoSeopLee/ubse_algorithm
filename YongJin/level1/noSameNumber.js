function solution(arr)
{
    let answer = [];
    arr.map((data,index) => {
        if(arr[index] != arr[index+1]){
            answer.push(data);
        }    
        
    });
    
    return answer;
}