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

const without = function(source, itemsToRemove) {
  let result = source;
  for (let i = 0; i < result.length; i++) {
    itemsToRemove.forEach(element => {
      if (element === result[i]) {
        let elementIndex = result.indexOf(element);
        result.splice(elementIndex, 1);
      }
    });
  }
  return result;
};

let word = [1, 2, 3, 4, 5];
// console.log(without(word, [3, 4]));
// console.log(assertArraysEqual(word, [1, 2, 3, 4, 5]));
// console.log(without(["a", "b", "c", "d"], ["c"]));

module.exports = without;
