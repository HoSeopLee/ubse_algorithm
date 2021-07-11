function solution(seoul) {
    let answer = '';
    let index = seoul.findIndex((e)=> e==="Kim");
    answer = `김서방은 ${index}에 있다`;
    return answer;
}