function solution(letter) {
    var morseCode = {
   '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
  };

  var decodedLetters = letter.split(" ");
  var answer = decodedLetters.map(decodedLetter => morseCode[decodedLetter]).join("");

  return answer.toLowerCase();
}