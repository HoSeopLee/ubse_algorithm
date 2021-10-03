function solution(n) {
    let answer = 0;
    let share = 0; //몫
    let remain = 0; // 나머지
    let array = [];
    let value = n;
    let num = 1;
    while (true) {
        share = parseInt(value/3)
        remain = value%3;
        array.push(remain);
        if(share < 1){
            break;
        }
        value = share;
    }
    console.log(array)
    for(let  i = 0; i < array.length; i++){
        num = 1
       for(let j = array.length-1-i; j > 0; j--){
           num = num * 3
       }
        answer = answer + array[i]*num;
    }
    return answer;
}