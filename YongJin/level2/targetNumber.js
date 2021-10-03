function solution(numbers, target) {
    let count = 0;
    let sum = 0;
    let answer = 0;
    function repeatFn(number, target, count, sum){
        if(count === number.length){
            if(sum === target){
               console.log("sum : ", sum, ", count : ",  count)
               answer++;
            }
            return
        }
  
        sum = parseInt(sum) + parseInt(number[count]);
        repeatFn(number, target, count + 1 , sum);
        sum = parseInt(sum) - parseInt(number[count])- parseInt(number[count]);
        repeatFn(number, target, count + 1 , sum);
    
       
    }
    repeatFn(numbers, target, count, sum);
    return answer;
}