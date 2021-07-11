function solution(nums) {
    let answer = 0;
    let choice = nums.length/2;
    let dupicationRemove = nums.filter((data,index) => nums.indexOf(data) === index);
    if(choice < dupicationRemove.length){
        answer = choice;
    }else{
        answer = dupicationRemove.length;
    }
    
    
    return answer;
}