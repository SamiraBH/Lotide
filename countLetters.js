const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion is passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑  Assertion is failed: "${actual}" !== "${expected}"`);
  }
};

const countLetters = function(input) {
  let result = {};
  for (let item of input) {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }
  return result;
};

const sentence1 = countLetters("this is a test");
const sentence2 = countLetters("lighthouse in the house");

// console.log(countLetters(sentence2));
// console.log(countLetters(sentence1));

// assertEqual(sentence1["i"], 1);
// assertEqual(sentence2["n"], 1);
// assertEqual(sentence2[" "], 3);

module.exports = countLetters;
