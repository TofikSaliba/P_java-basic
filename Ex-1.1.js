//! 1.1
const yesOrNo = (bool) => {
  if (typeof bool !== "boolean") {
    console.log("input is not a boolean");
    return -1;
  }
  return bool ? "yes" : "no";
};

console.log(yesOrNo(0));
