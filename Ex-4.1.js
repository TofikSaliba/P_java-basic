//! 4.1 Fibonacci
//? “Write a function to return an n element in Fibonacci sequence” is one of the most common
//? questions you can hear during the coding challenge interview part. In this blogpost I’m going to
//? walk through the two of the most typical solutions for this problem and also cover a dreadful (for
//? most of novice developers) topic of time complexity.
//? So what is a Fibonacci sequence? According to Wikipedia :
//? “In mathematics, the Fibonacci numbers are the numbers in the following integer sequence,
//? called the Fibonacci sequence, and characterized by the fact that every number after the first
//? two is the sum of the two preceding ones.”
//? Depending on the chosen starting point of the sequence (0 or 1) the sequence would look like
//? this:
//? 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
//? or this:
//? 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …

//* ill work on the startubg point of [1,1], if we want to start with [0,1] just change prev1 variable to = 0
const getFiboSequenceNumber = (n) => {
  let prev1 = 1,
    prev2 = 1,
    curr;
  if (n === 1 || n === 2) {
    return 1;
  }
  for (let i = 2; i < n; i++) {
    curr = prev1 + prev2;
    prev1 = prev2;
    prev2 = curr;
  }
  return curr;
};

console.log(getFiboSequenceNumber(12));
