function solution(myString) {
  const parts = myString.split('x');
  const sortedParts = parts.filter(part => part !== '').sort();
    
  return sortedParts;
}