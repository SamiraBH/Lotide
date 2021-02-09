const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion is passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑  Assertion is failed: "${actual}" !== "${expected}"`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

module.exports = assertEqual;
