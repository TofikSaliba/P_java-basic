//! 6.1 Mumbling
//? This time no story, no theory. The examples below show you how to write function
//? accum :
//? Examples:
//? accum("abcd") -> "A-Bb-Ccc-Dddd"
//? accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
//? accum("cwAt") -> "C-Ww-Aaa-Tttt"
//? The parameter of accum is a string which includes only letters from a..z and A..Z .

//* solution using map
const mumbling = (str) => {
  return str
    .split("")
    .map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i))
    .join("-");
};

//* solution using normal for loop
function mumbling2(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    //* the idea is simple, append to the str index (i) times the current char
    result += str[i].toUpperCase() + str[i].toLowerCase().repeat(i);
    if (i < str.length - 1) {
      result += "-";
    }
  }
  return result;
}

console.log(mumbling("abvdsad"));
console.log(mumbling2("abvdsdgs"));
