function solution(i, j, k) {
    let count = 0;

      for (let num = i; num <= j; num++) {
        const numStr = num.toString();
        count += countOccurrences(numStr, k.toString());
      }

      return count;
    }

    function countOccurrences(str, target) {
      const regex = new RegExp(target, 'g');
      const matches = str.match(regex);
      return matches ? matches.length : 0;
}