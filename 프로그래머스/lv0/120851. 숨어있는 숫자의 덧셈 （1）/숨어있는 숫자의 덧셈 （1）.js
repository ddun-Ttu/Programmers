function solution(my_string) {
    var answer = 0;
    const regex = /[^0-9]/g;
    const result = my_string.replace(regex,"");
    
    for ( var i = 0; i < result.length; i++) {
        answer += Number(result[i]) 
    }

    
    console.log(result)
    return answer ;
}