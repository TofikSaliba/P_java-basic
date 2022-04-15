//! 5.6 Mask
//? Usually when you buy something, you're asked whether your credit card number, phone number
//? or answer to your most secret question is still correct. However, since someone could look over
//? your shoulder, you don't want that shown on your screen. Instead, we mask it.
//? Your task is to write a function maskify, which changes all but the last four characters into '#'.
//? Examples
//? maskify("4556364607935616") == "############5616"
//? maskify( "64607935616") == "#######5616"
//? maskify( "1") == "1"
//? maskify( "") == ""
//? // "What was the name of your first pet?"
//? maskify("Skippy") == "##ippy"
//? maskify("Nananananananananananananananana Batman!") ==
//? "####################################man!"

//* solution using normal loop
const maskify = (str) => {
  let result = "",
    size = str.length;
  if (size < 5) {
    return str;
  }
  for (let i = 0; i < size; i++) {
    if (i < size - 4) {
      result += "#";
    } else {
      result += str[i];
    }
  }
  return result;
};

//* solution using repeat() and slice()
function maskify2(str) {
  let result = "",
    size = str.length - 4;
  if (size < 1) {
    return str;
  }
  result = "#".repeat(size) + str.slice(size);
  return result;
}

console.log(maskify("Nananananananananananananananana Batman!"));
console.log(maskify("1234"));
console.log(maskify2("Nananananananananananananananana Batman!"));
console.log(maskify2("1234"));
