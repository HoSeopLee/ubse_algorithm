function solution(numbers) {
    let answer = [];
    numbers.map((data, index) => {
        numbers.map((d, i) => {
            answer.indexOf(d+data)  == -1 && (index != i) && answer.push(d+data);
        })
    })
    return answer.sort((a,b) => a-b);
}