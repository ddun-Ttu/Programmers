function solution(num_list) {
    var answer = [];
    var even = [];
    var odd = [];

    for ( var i = 0; i < num_list.length; i++ ) {
       if ( num_list[i] % 2 == 0 ){
           even.push(i)
       } else {
           odd.push(i)
       }
    }
    answer.push(even.length, odd.length)

    return answer;
}