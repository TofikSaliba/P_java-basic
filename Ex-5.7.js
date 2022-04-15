//! 5.7 shortest words
//? Simple, given a string of words, return the length of the shortest word(s).
//? String will never be empty and you do not need to account for different data types.

const shortestWord = (str) => {
  return str.split(" ").sort((a, b) => a.length - b.length)[0].length;
};

console.log(
  shortestWord(
    "13lettersWord longestWord20letters 8letters justanother20letters"
  )
);
