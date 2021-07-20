function solution(nums) {
    let answer = 0;
    let cnt = 0;
    let max = nums.length / 2;
    
    nums = [...new Set(nums)]
    cnt = nums.length;
    
    if(cnt > max) answer = max
    else answer = cnt
    
    return answer;
}