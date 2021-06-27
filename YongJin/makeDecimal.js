function solution(nums) {

    let array = [];
    let sosu = 0;

    let count = 0;
    for(let i = 0 ; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            for(let z = j+1; z < nums.length; z++){
                
                sosu = nums[i]+nums[j]+nums[z];
                
                //소수인지 확인
                for(let y = 1; y <= sosu; y++){
                    if(y != 1 && y != sosu){
                        if(sosu%y == 0){//1과 자기자신이외의 값으로 나뉘어짐
                            count++;
                        }
                    }
                }
                
                if(count == 0){

                        array.push(sosu)

                }
                count = 0;
            }
        }
    }
    console.log(array);
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    
    return array.length;
}