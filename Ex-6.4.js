//! 6.4 isogram
//? An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
//? a function that determines whether a string that contains only letters is an isogram. Assume the
//? empty string is an isogram. Ignore letter case.
//? isIsogram("Dermatoglyphics") == true
//? isIsogram("aba") == false
//? isIsogram("moOse") == false // -- ignore letter case

const isogram = (str) => {
  let presence = "",
    newText = str.toLowerCase();
  for (let char of newText) {
    if (presence.indexOf(char) === -1) {
      presence += char;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isogram("Dermatoglyphics"));
console.log(isogram("moOse"));
