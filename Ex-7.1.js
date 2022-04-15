//! Ex7 Implement The Following JS Methods -
//? Implement the following methods -
//? - Filter
//? - ForEach
//? - Map
//? Using only for(), array and objects (without other js methods)
//? Find Bugs \ Debug Code
//? Bug !!!!!

//* forEach implementation
Array.prototype.myForEach = function (callBackFunc) {
  for (let i = 0; i < this.length; i += 1) {
    if (this.hasOwnProperty(i)) {
      callBackFunc(this[i], i, this);
    }
  }
};

//* map implementation
Array.prototype.myMap = function (callBackFunc) {
  const newArr = [];
  for (let i = 0; i < this.length; i += 1) {
    if (this.hasOwnProperty(i)) {
      newArr.push(callBackFunc(this[i], i, this));
    }
  }
  return newArr;
};

//* filter implementation
Array.prototype.myfilter = function (callBackFunc) {
  const newArr = [];
  for (let i = 0; i < this.length; i += 1) {
    if (this.hasOwnProperty(i)) {
      if (callBackFunc(this[i], i, this)) {
        newArr.push(this[i]);
      }
    }
  }
  return newArr;
};

//* array to test all 3
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//* testing myForEach
let eachArr = [];
arr.myForEach((el) => eachArr.push(el + 1));
console.log("\nmyForEach\n", eachArr);

//* testing myMap
const mapArr = arr.myMap((el) => el * 3);
console.log("\nmyMap\n", mapArr);

//* testing myfilter
const filterArr = arr.myfilter((el) => el % 2);
console.log("\nmyFilter\n", filterArr);
