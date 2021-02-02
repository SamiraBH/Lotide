const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion is passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑  Assertion is failed: "${actual}" !== "${expected}"`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
