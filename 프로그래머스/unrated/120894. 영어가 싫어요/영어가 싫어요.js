function solution(numbers) {
  const obj = ["zero", "one", "two", "three", "four", "five",
                 'six', "seven", "eight", "nine"]
    
  obj.forEach((nums, index) => {
    numbers = numbers.split(nums).join(index)}) 
  
  return Number(numbers)
}