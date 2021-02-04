const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion is passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑  Assertion is failed: "${actual}" !== "${expected}"`);
  }
};

const countLetter = function(input) {
  let result = {};
  for (item of input) {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }
  return result;
};

const sentence1 = countLetter("this is a test");
const sentence2 = countLetter("lighthouse in the house");

// console.log(countLetter(sentence2));
// console.log(countLetter(sentence1));

assertEqual(sentence1["i"], 1);
assertEqual(sentence2["n"], 1);
assertEqual(sentence2[" "], 3);
