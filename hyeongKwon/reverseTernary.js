function solution(n) {
    let answer = '';
    let sum = 0;
    let mul = 1;
        
    for(;;){     
        answer += n % 3;
        n = parseInt(n / 3);
        if(n == 0 ){
            break;
        }
    }
    
    for(let i = answer.length; i > 0; i--){
        //console.log("#" + answer.substring(i, i-1));        
        sum += parseInt(answer.substring(i, i-1)) * mul      
        mul = mul * 3;
        
    }
    
    return sum;
}