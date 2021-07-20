function solution(n) {
    let answer = 0;
  
    answer = parseInt(String(n).split('').sort().reverse().join(''));
    
    return answer;
}