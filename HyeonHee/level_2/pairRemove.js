function solution(s)
{
    let sol = [];
    for(let idx = 0; idx <= s.length; idx++){
        if(sol[sol.length-1] != s[idx]){        
            sol.push(s[idx]);    
        }else{
            sol.pop()
        }
    }
    
    return sol.length == 0 ? 1 : 0;
}