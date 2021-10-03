function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++){
        let measure = 0;
        for(let j = 1; j <= i; j++){
            if(i % j == 0)
                measure++;
        }
        answer += measure % 2 == 0 ? i : i * -1;
    }
    return answer;
}