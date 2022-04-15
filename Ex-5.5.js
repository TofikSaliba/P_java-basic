//! 5.5 Abbreviate two words
//? Write a function to convert a name into initials. This kata strictly takes two words with one space
//? in between them.
//? The output should be two capital letters with a dot separating them.
//? It should look like this:
//? Sam Harris => S.H
//? Patrick Feeney => P.F

const getInitials = (str) => {
  let splitStr = str.split(" ");
  //* check if its more than two words
  if (splitStr.length > 2) {
    return -1;
  }
  return splitStr[0][0].toUpperCase() + "." + splitStr[1][0].toUpperCase();
};

console.log(getInitials("Tofik saliba"));
