const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion is passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑  Assertion is failed: "${actual}" !== "${expected}"`);
  }
};

let findKeyByValue = function(obj, value) {
  for (let item in obj) {
    if (obj[item] === value) {
      return item;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
