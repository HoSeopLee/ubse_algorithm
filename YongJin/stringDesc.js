function solution(s) {
    let answer = '';
    let wordArr = [];
    for(let i = 0; i < s.length; i++){
        wordArr[i] = s.substring(i, i+1);
    }
    wordArr.sort();
    wordArr.reverse();//거꾸로 뒤집어주는 함수
    wordArr.map((data, index) => answer+=data);
    return answer;
}