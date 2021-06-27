function solution(numbers) {
    var answer = [];
    for(var i = 0; i < numbers.length; i++){
        for(var j = i+1; j < numbers.length; j++){
            let value = numbers[i] + numbers[j];
           
            //중복 확인
            let duplictaionCheck = answer.findIndex((e) => e == value);
            console.log(duplictaionCheck);
            if(duplictaionCheck < 0){
                console.log("dldl")
                 answer.push(value);
            };
        }
    }
    answer.sort(function(a,b){
        return a-b;
    })
    return answer;
}