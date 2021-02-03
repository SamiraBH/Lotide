const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(ar1, ar2) {
  const comparison = eqArrays(ar1, ar2);

  if (comparison) {
    return console.log(`✅  Assertion is passed: "${ar1}" === "${ar2}"`);
  } else {
    return console.log(`🛑  Assertion is failed: "${ar1}" !== "${ar2}"`);
  }
};

const middle = function(array) {
  let arr = [];
  let len = array.length;
  if (len < 3) {
    return arr;
  }
  if (array.length % 2 === 0) {
    arr.push(array[len / 2 - 1]);
    arr.push(array[len / 2]);
  } else {
    arr.push(array[(len - 1) / 2]);
  }
  return arr;
};

console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2]));

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2]), [1]);
