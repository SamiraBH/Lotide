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

const letterPositions = function(sentence) {
  const results = {};
  let i = 0;
  for (let letter of sentence) {
    if (letter !== " ") {
      results[letter] = [];
    }
  }
  for (let letter of sentence) {
    if (letter !== " ") {
      results[letter].push(i);
    }
    i++;
  }
  return results;
};

// assertArraysEqual(letterPositions("hello").e, [1]);
// console.log(letterPositions("hello"));

module.exports = letterPositions;
