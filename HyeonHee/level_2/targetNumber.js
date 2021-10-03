function solution(numbers, target) {
    var answer = 0; 
    let arr = addNum(numbers, numbers.length, [])
    
    arr.map((data, idx) => {
        answer = data == target ? answer+1 : answer;
    })
    
    return answer;
}


const addNum = (arr, len, result) => {
    let array = arr.slice();
    array.splice(0, 1)
    if(arr.length != 0){
        result = addNum(array, arr.length, result);
    }
    let res = [];
    if(arr.length == 1){
        res.push(arr[0]);
        res.push(arr[0] * -1);
    }else{
        result.map((data, idx) => {
            res.push(data + arr[0]);
            res.push(data + (arr[0] * -1));
        })            
    }
    return res;
}