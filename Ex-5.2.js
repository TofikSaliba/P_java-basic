//! 5.2 String Repeat
//? Write a function called repeat_str which repeats the given string src exactly count times.
//? repeatStr(6, "I") // "IIIIII"
//? repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

//* normal loop solution
const repeat_str = (str, times) => {
  let result = "";
  while (times--) {
    result += str;
  }
  return result;
};

//* with repeat method solution
const repeat_str2 = (str, times) => {
  return str.repeat(times);
};

console.log(repeat_str("Repeat", 4));
console.log(repeat_str2("Repeat2", 5));
