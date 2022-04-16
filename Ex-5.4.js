//! 5.4 To Weird Case
//? Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
//? string with all even indexed characters in each word upper cased, and all odd indexed
//? characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
//? index is even, therefore that character should be upper cased.
//? The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
//? be present if there are multiple words. Words will be separated by a single space(' ').
//? Examples:
//? toWeirdCase( "String" );//=> returns "StRiNg"
//? toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

const toWeirdCase = (str) => {
  let counter = 0;
  return str
    .split("")
    .map((char) => {
      if (char === " " && counter % 2 === 0) {
        //* the idea of counter is to whenevr we encout a space and its in even index..
        //* to make sure the letter after it is capitalized and flip the capitalizing based on either odd or even index
        counter += 2;
        return char;
      }
      if (counter % 2) {
        counter++;
        return char.toLowerCase();
      } else {
        counter++;
        return char.toUpperCase();
      }
    })
    .join("");
};

console.log(toWeirdCase("wHaT a weird question to ask for"));
