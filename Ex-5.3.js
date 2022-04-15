//! 5.3 To Camel Case
//? Complete the method/function so that it converts dash/underscore delimited words into camel
//? casing. The first word within the output should be capitalized only if the original word was
//? capitalized (known as Upper Camel Case, also often referred to as Pascal case).
//? Examples:
//? toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
//? toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

const toCamelCase = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "_") {
      result += str[i + 1].toUpperCase();
      i += 1;
    } else {
      result += str[i];
    }
  }
  return result;
};

console.log(toCamelCase("convert-to-camel-case"));
