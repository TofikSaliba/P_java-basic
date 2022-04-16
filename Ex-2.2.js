//! 2.2 One and Zero - Binary
//? Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//? Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
//? Examples:
//? Testing: [0, 0, 0, 1] ==> 1
//? Testing: [0, 0, 1, 0] ==> 2
//? Testing: [0, 1, 0, 1] ==> 5
//? Testing: [1, 0, 0, 1] ==> 9
//? Testing: [0, 0, 1, 0] ==> 2
//? Testing: [0, 1, 1, 0] ==> 6
//? Testing: [1, 1, 1, 1] ==> 15
//? Testing: [1, 0, 1, 1] ==> 11
//? However, the arrays can have varying lengths, not just limited to 4.

//* result is the sum of each digit 0 or 1 multiplied by 2 to the power of its index starting from 0 from left to right
const OneAndZero = (binary) => {
  let sum = 0,
    length = binary.length - 1;
  binary.forEach((digit, idx) => (sum += 2 ** (length - idx) * digit));
  return sum;
};

console.log(OneAndZero([1, 1, 1, 1]));
