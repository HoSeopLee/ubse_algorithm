function solution(nums) {
    var answer = 0;
    for(let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++){
                let number = nums[i] + nums[j] + nums[k];
                let quat = 0;
                for(let q = 1; q <= number; q++){
                    if(number % q == 0)
                        quat++;
                }
                if(quat == 2)
                    answer++;
            }
        }
    }
    return answer;
}