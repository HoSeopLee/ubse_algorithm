function solution(phone_number) {
    let answer = '';
    let length = phone_number.length;
    let las4tNumber = phone_number.substring(phone_number.length -4, phone_number.length);
    answer = '*'.repeat(phone_number.length-4) + las4tNumber;
    
    return answer;
}