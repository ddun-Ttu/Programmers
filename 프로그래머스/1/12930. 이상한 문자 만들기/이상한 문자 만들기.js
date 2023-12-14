function solution(s) {
  const words = s.split(" ");

  const modifiedWords = words.map(word => {
    const modifiedChars = word.split("").map((char, index) => {
      return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    });

    return modifiedChars.join("");
  });

  return modifiedWords.join(" ");
}