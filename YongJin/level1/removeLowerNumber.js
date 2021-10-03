function solution(arr) {
    let answer = [];
    let removeValue = 0;
    let min = Math.min.apply(null, arr);

    if(arr[0] == arr[arr.length-1]){
        answer.push(-1);
    }
    else{
        console.log(min)
        answer = arr.filter((e) => e !== min);
    }
    return answer;
}