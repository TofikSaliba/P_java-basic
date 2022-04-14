//! 1.1 Yes or No
//? Complete the method that takes a boolean value and return a
//? "Yes" string for true, or a "No" string for false.

const yesOrNo = (bool) => {
  if (typeof bool !== "boolean") {
    console.log("input is not a boolean");
    return -1;
  }
  return bool ? "yes" : "no";
};

console.log(yesOrNo(true));
