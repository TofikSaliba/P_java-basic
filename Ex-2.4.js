//! 2.4 Unique
//? There is an array with some numbers. All numbers are equal except for one. Try to find it!
//? findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//? findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//? It’s guaranteed that array contains at least 3 numbers.

const OneUniqueNum = (array) => {
  let notUnique = array[0];
  if (array[0] !== array[1]) {
    if (array[0] !== array[2]) {
      return array[0];
    } else {
      return array[1];
    }
  }
  for (let i = array.length - 1; i > 1; i--) {
    if (array[i] !== notUnique) {
      return array[i];
    }
  }
};

console.log(OneUniqueNum([1, 1, 1, 2, 1, 1]));
