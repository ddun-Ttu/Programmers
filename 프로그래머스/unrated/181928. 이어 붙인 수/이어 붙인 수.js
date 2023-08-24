function solution(num_list) {
    const oddNumbers = num_list.filter(num => num % 2 !== 0);
    const evenNumbers = num_list.filter(num => num % 2 === 0);
    
    const oddNumberConcatenated = parseInt(oddNumbers.join(''));
    const evenNumberConcatenated = parseInt(evenNumbers.join(''));
    
    return oddNumberConcatenated + evenNumberConcatenated;
}