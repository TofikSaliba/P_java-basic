//! 6.3 organize strings
//? Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
//? longest possible, containing distinct letters,
//? each taken only once - coming from s1 or s2.
//? Examples:
//? a = "xyaabbbccccdefww"
//? b = "xxxxyyyyabklmopq"
//? longest(a, b) -> "abcdefklmopqwxy"
//? a = "abcdefghijklmnopqrstuvwxyz"
//? longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//* solution using a set, i know we havent learn yet, but we did in pre course and i think it suits this question perfectly
const organizeStrings = (s1, s2) => {
  return [...new Set((s1 + s2).split(""))].sort().join("");
};

//* normal solution with for of loop, similar to Ex-6.2
function organizeStrings2(s1, s2) {
  let presence = "",
    newText = (s1 + s2).toLowerCase();
  for (let char of newText) {
    //* adds only first time occurances of chars, no repeats
    if (presence.indexOf(char) === -1) {
      presence += char;
    }
  }
  return presence.split("").sort().join("");
}

//* organizeStrings
console.log(organizeStrings("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
console.log(
  organizeStrings("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")
);

//* organizeStrings2
console.log(organizeStrings2("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
console.log(
  organizeStrings2("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")
);
